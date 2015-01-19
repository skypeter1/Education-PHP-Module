<?php
class users extends CommonController
{

    public $domain;
    public $entity = 'User';
    private $teahers_nomina;

    public function __construct()
    { 
        parent::__construct(); 

        $this->load->add_package_path(APPPATH . 'third_party/Users');
        $this->load->helper('users');

        $this->domain = new UsersDomain($this->db, $this->auth);
    }

    public function get_proveedores()
    {
        $this->_do(__FUNCTION__);
    }

    public function _get_proveedores($response)
    {
        $entities = $this->domain->get_proveedores();

        $data = array('list' => array_values($entities->collection));

        $response->set_data($data);
    }

    public function block()
    {
        $this->_do(__FUNCTION__);
    }

    public function _block()
    {
        $user = $this->json_to_entity();
        $this->domain->block($user);
    }

    public function nomina_csv()
    {
           
        if (empty($_POST['fecha_desde'])){
            $date_from = '';
        } else { 
            $from_parts = explode('/', $_POST['fecha_desde']);
            $date_from = strtotime($from_parts[2] . '-' . $from_parts[1] . '-' . $from_parts[0] . ' 00:00:00');            
        }

        if (empty($_POST['fecha_hasta'])){
            $date_to = strtotime(date('Y-m-d') . ' 23:59:59');
        } else {
            $to_parts = explode('/', $_POST['fecha_hasta']);
            $date_to = strtotime($to_parts[2] . '-' . $to_parts[1] . '-' . $to_parts[0] . ' 23:59:59');
        }
          
        $profesor = ( isset($_POST['profesor']) && intval($_POST['profesor']) > 0 ) ? intval($_POST['profesor']) : -1;
        $identificador = ( isset($_POST['identificador']) && intval($_POST['identificador']) > 0 ) ? trim($_POST['identificador']) : -1;//        $identificador = $_POST['identificador'];      
        $detailed_report = (isset($_POST['detailed']) && intval($_POST['detailed']) == 0) ? FALSE : TRUE;
        $export_to_csv = TRUE;  
     
        $users_sql = "SELECT id, name, price, weekend_price, out_academy_price ";
        $users_sql .= "FROM users WHERE rol = 'profesor' AND blocked = 0";
        $users_sql .= $profesor > -1 ? ' AND id = ' . $profesor : '';
        $users_sql .= $profesor < 0 ? ' ORDER BY name' : '';

        $users_query = $this->db->query($users_sql, FALSE);
        $users = $users_query->result();
        $teachers = array();
        $total_sessions = 0;
        $total_hours = 0;
        $total_payment_course = 0;
        
        $bodegas_ids = $this->domain->get_bodegas(); 
        $bodegas_ids = implode(",", $bodegas_ids);
       
        foreach ($users as $user) {
            $qty_sessions = 0;
            $qty_hours = 0;
            $qty_total = 0;

            $hour_price = array(
                'price' => $user->price,
                'weekend_price' => $user->weekend_price,
                'out_academy_price' => $user->out_academy_price
            );

            // Cursos for each user
            $cursos_sql = 'SELECT id, nombre, identificador FROM cursos';
            
            if ( $identificador > -1 ) {
                  $cursos_sql .= " WHERE identificador = '" . $identificador. "' and profesor = " . $user->id;                
            } 
            else {
                $cursos_sql .= " WHERE profesor = " . $user->id . " and  bodega in (".$bodegas_ids.") ";
            }
              
            $cursos_query = $this->db->query($cursos_sql, FALSE);
            $cursos = $cursos_query->result();
            $user_cursos = array();
            $user_total_payment = 0;
            $curso_count = 0;

            foreach ($cursos as $curso) {
                // Total valid sessions for each curso
                $session_sql = 'SELECT COUNT(id) AS TOTAL FROM sesiones WHERE curso = ' . $curso->id;
                $session_sql .= ' AND estado = 1';
                $session_sql .= strlen($date_from) > 0 ? " AND fecha >= " . $date_from : '';
                $session_sql .= strlen($date_to) > 0 ? " AND fecha <= " . $date_to : '';

                $session_sql .= " AND profesor = " . $user->id . '';
                
                $valid_sessions_query = $this->db->query($session_sql, FALSE);
                $valid_sessions_result = $valid_sessions_query->result();

                // Valid sessions for each curso
                $session_sql = 'SELECT id, tarifa, hora_fin - hora_inicio AS HOURS_TOTAL FROM sesiones WHERE curso = ' . $curso->id;
                $session_sql .= ' AND estado = 1';
                $session_sql .= strlen($date_from) > 0 ? " AND fecha >= " . $date_from : '';
                $session_sql .= strlen($date_to) > 0 ? " AND fecha <= " . $date_to : '';

                $session_sql .= " AND profesor = " . $user->id . '';
                
                $sessions_query = $this->db->query($session_sql, FALSE);
                $sessions = $sessions_query->result();
                $session_total_hours = 0;
                $session_total_price = 0;
  
                foreach ($sessions as $session) {
                    $session_total_hours += intval($session->HOURS_TOTAL);
                    $session_total_price += $session->HOURS_TOTAL * $hour_price[$session->tarifa] ; 
                    
                }                 
     
                $user_total_payment += $session_total_price;

                if (count($sessions) > 0) {
                    $user_cursos[] = array(
                        'id' => $curso->id,
                        'user' => $curso_count == 0 ? $user->name : '',
                        'nombre' => $curso->nombre,
                        'identificador' => $curso->identificador,
                        'valid_sessions' => $valid_sessions_result[0]->TOTAL,
                        'valid_hours' => $session_total_hours,
                        'payment' => $session_total_price
                    );
                } 
   
                $qty_sessions += $valid_sessions_result[0]->TOTAL;
                $qty_hours += $session_total_hours;
                $qty_total += $session_total_price;
                $curso_count++;
            }
            
/////////////////////////////////////////////////////////////////////            

            //Ahora debe buscar las sesiones del profesor en la que no figure como titular
            $validation_curso = '';
            if (count($user_cursos) > 0) { 
                           
                $not_in='';
                $i=1;
                foreach ($user_cursos as $user_curso) {
                        if ($i>1)
                            $not_in = $not_in . ', ';
        
                        $not_in = $not_in . $user_curso['id'];
                        $i++;
                        
                }
                $validation_curso = ' s.curso not in ('.$not_in.')'; 
                  
            }
           
            $session_sql = 'SELECT distinct(s.curso) FROM sesiones s  ';
            $session_sql .= ' inner join cursos c on c.id = s.curso ';
            $session_sql .= ' WHERE '; 
            $session_sql .= !empty($validation_curso)? $validation_curso . ' AND ': ' ';        
            $session_sql .= ' s.estado = 1';
            $session_sql .= strlen($date_from) > 0 ? " AND s.fecha >= " . $date_from : '';
            $session_sql .= strlen($date_to) > 0 ? " AND s.fecha <= " . $date_to : '';
            $session_sql .= " AND s.profesor = " . $user->id . '';
            $session_sql .= $identificador > -1 ? ' AND  c.identificador = "'.$identificador.'" ': ' and bodega in ('.$bodegas_ids.") "; 
                       
            $sessions_query = $this->db->query($session_sql, FALSE);
            $sessions_x_curso = $sessions_query->result();
            
            $horas_validadas = 0; 
            foreach ($sessions_x_curso as $session_x_curso) {
                 
                    $session_sql = ' Select COUNT(*) as sesiones_validadas from sesiones s';
                    $session_sql .= ' inner join cursos c on c.id = s.curso ';
                    $session_sql .= ' WHERE s.curso in ('. $session_x_curso->curso .') '; 
                    $session_sql .= ' and s.estado = 1';
                    $session_sql .= strlen($date_from) > 0 ? " AND s.fecha >= " . $date_from : '';
                    $session_sql .= strlen($date_to) > 0 ? " AND s.fecha <= " . $date_to : '';
                    $session_sql .= " AND s.profesor = " . $user->id . '';

                    $sessions_query = $this->db->query($session_sql, FALSE);
                    $result = $sessions_query->result();
                    $sesiones_validadadas = $result[0]-> sesiones_validadas;
                    
                    $session_sql = ' Select s.*, c.* , s.hora_fin - s.hora_inicio AS HOURS_TOTAL from sesiones s ';
                    $session_sql .= ' inner join cursos c on c.id = s.curso ';
                    $session_sql .= ' WHERE s.curso in ('. $session_x_curso->curso .') '; 
                    $session_sql .= ' and s.estado = 1';
                    $session_sql .= strlen($date_from) > 0 ? " AND s.fecha >= " . $date_from : '';
                    $session_sql .= strlen($date_to) > 0 ? " AND s.fecha <= " . $date_to : '';
                    $session_sql .= " AND s.profesor = " . $user->id . '';
                    
                    $sessions_query = $this->db->query($session_sql, FALSE);
                    $result_sesions = $sessions_query->result();
                    
                    $horas_validadas = $result_sesions[0]->HOURS_TOTAL;
                     
                    if ($sesiones_validadadas >= 2){//Indica si el usuario tiene mas de una sesion como profesor no titular

                        $session_sql = ' Select SUM(s.hora_fin - s.hora_inicio) AS HOURS_TOTAL from sesiones s ';
                        $session_sql .= ' inner join cursos c on c.id = s.curso ';
                        $session_sql .= ' WHERE s.curso in ('. $session_x_curso->curso .') '; 
                        $session_sql .= ' and s.estado = 1';
                        $session_sql .= strlen($date_from) > 0 ? " AND s.fecha >= " . $date_from : '';
                        $session_sql .= strlen($date_to) > 0 ? " AND s.fecha <= " . $date_to : '';
                        $session_sql .= " AND s.profesor = " . $user->id . '';

                        $sessions_query = $this->db->query($session_sql, FALSE);
                        $result_sesions_in = $sessions_query->result();
                        $horas_validadas = $result_sesions_in[0]->HOURS_TOTAL;
                        
                        //Calcula el valor total por las horas de sesion
                        $payment = 0;
                        foreach ($result_sesions as $result_sesion) {
                           $payment += $result_sesion->HOURS_TOTAL * $hour_price[$result_sesion->tarifa] ; 
                            
                        }        
  
                        if (count($result_sesions) > 0) { 
                            $user_cursos[] = array( 
                                'id_curso' => $result_sesions[0]->curso,//id de Curso
                                'user' => $curso_count == 0 ? $user->name : '',
                                'nombre' => '',
                                'identificador' => $result_sesions[0]->identificador, //identificador del curso
                                'valid_sessions' => $sesiones_validadadas,
                                'valid_hours' => $horas_validadas,
                                'payment' => $payment
                            );  
                        }                        
                        
                    }else{
                        if (!isset($session)){
                            $payment = $result_sesions[0]->HOURS_TOTAL * $hour_price[$result_sesions[0]->tarifa];
                        }else{
                            $payment = $result_sesions[0]->HOURS_TOTAL * $hour_price[$result_sesions[0]->tarifa];
                        }   

                        if (count($result_sesions) > 0) { 
                            $user_cursos[] = array( 
                                'id_curso' => $result_sesions[0]->curso,//id de Curso
                                'user' => $curso_count == 0 ? $user->name : '',
                                'nombre' => '',
                                'identificador' => $result_sesions[0]->identificador, //identificador del curso
                                'valid_sessions' => $sesiones_validadadas,
                                'valid_hours' => $horas_validadas,
                                'payment' => $payment
                            );  
                        }                        
                    }
                        
                    $qty_sessions += $sesiones_validadadas;
                    $qty_hours += $horas_validadas;
                    $qty_total += $payment;
                    $curso_count++;     
                      
                
            }            
    
 
/////////////////////////////////////////////////////////////////////              
            
            if (count($user_cursos) > 0) {
                $teachers[] = array( 
                    'id' => $user->id,
                    'name' => $user->name,
                    'cursos' => $user_cursos ,
                    'rowspan' => $detailed_report ? count($user_cursos) + 2 : 2,
                    'payment' => $user_total_payment,   
                    'qty_sessions' => $qty_sessions,
                    'qty_hours' => $qty_hours,
                    'qty_total' => $qty_total
                );
            }
 
            $total_sessions += $qty_sessions;
            $total_hours += $qty_hours;
            $total_payment_course += $qty_total;
            
        }
  
        // Cursos 	Sesiones Validadas 	Horas Validadas 	Total x Curso 	Total x Pagar
        $teachers[] = array(
            'id' => '', 
            'name' => '',      
            'cursos' => array(),
            'rowspan' => $detailed_report ? 2 : 1,
            'payment' => $total_payment_course,
            'qty_sessions' => $total_sessions,
            'qty_hours' => $total_hours,
            'qty_total' => $total_payment_course             
        );   
 
        $number_of_entries = count($teachers);
        $data = array('list' => $teachers, 'number_of_entries' => $number_of_entries);

        // CSV Stuff
        header("Pragma: public");
        header("Expires: 0");
        header("Cache-Control: must-revalidate, post-check=0, pre-check=0");
        header("Cache-Control: private",false);
        header("Content-Type: application/octet-stream");
        header("Content-Disposition: attachment; filename=\"exportevent.xls\";" );
        header("Content-Transfer-Encoding: binary");         
   
        $csv_string = 'NOMBRE '."\t". 'CURSOS '."\t". 'SESIONES VALIDAS '."\t". 'HORAS VALIDAS '."\t". 'TOTAL x CURSO '."\t". 'TOTAL x PAGAR' . "\n";        
                      
        foreach ( $teachers as $key_teacher => $teacher ) {
            $curso_count = 0; 

            if ($detailed_report){
                foreach ( $teacher['cursos'] as $key_curso => $curso ) {
                    $csv_string .= ( $curso_count == 0 ? $teacher['name'] : '' ) . "\t"; 
                    $csv_string .= $curso['identificador'] . "\t";
                    $csv_string .= $curso['valid_sessions'] . "\t";
                    $csv_string .= $curso['valid_hours'] . "\t";
                    $csv_string .= $curso['payment'] . "\t";
                    $csv_string .= "\t";        
                    $csv_string .= "\n";

                    $curso_count++;  
                } 
            }else{
                    $csv_string .= $curso_count == 0 ? $teacher['name'] : ' '; 
            }                  
     
            $csv_string .= "\t";
            $csv_string .= 'Totales '. "\t";
            $csv_string .= $teacher['qty_sessions'] . "\t";
            $csv_string .= $teacher['qty_hours'] . "\t";
            $csv_string .= $teacher['qty_total'] . "\t";
            $csv_string .= $teacher['qty_total'];
            $csv_string .= "\n";

            $csv_string .= "\n";
        }

        echo $csv_string;
           
    }
 
    public function set_nomina()
    {
        $this->_do(__FUNCTION__);
    }  

    public function _set_nomina($response)
    {
        $data = array('list' => '', 'number_of_entries' => 0);
        $response->set_data($data);
     
    }   
    
    public function get_nomina()
    {
        
        $this->_do(__FUNCTION__);
    }

    public function _get_nomina($response)
    {   

        
        $data_post = $this->get_post_data();
        $data_search = PostToSearch::parse($data_post);
        
        // Filters
        $detailed_report = TRUE;
        $profesor = -1;
        $identificador = -1;
        $date_from = '';
        $date_to = strtotime(date('Y-m-d H:i:s'));
 
        foreach ( $data_search->filters as $filter ) {
            if ( $filter->property == 'fecha_desde' ) {
                $from_parts = explode('/', $filter->pattern);
                $date_from = strtotime($from_parts[2] . '-' . $from_parts[1] . '-' . $from_parts[0] . ' 00:00:00');
            }

            if ( $filter->property == 'fecha_hasta' ) {
                $to_parts = explode('/', $filter->pattern);
                $date_to = strtotime($to_parts[2] . '-' . $to_parts[1] . '-' . $to_parts[0] . ' 23:59:59');
            } 

            if ( $filter->property == 'profesor' ) {
                $profesor = intval($filter->pattern);
            }

            if ( $filter->property == 'identificador' ) {
                $identificador = trim($filter->pattern);
            }

            if ( $filter->property == 'detailed' && $filter->pattern == 0 ) {
                $detailed_report = FALSE;
            }
        }
 
        $users_sql = "SELECT id, name, price, weekend_price, out_academy_price ";
        $users_sql .= "FROM users WHERE rol = 'profesor' AND blocked = 0";
        $users_sql .= $profesor > -1 ? ' AND id = ' . $profesor : '';
        $users_sql .= $profesor < 0 ? ' ORDER BY name' : '';
           
        $users_query = $this->db->query($users_sql, FALSE);
        $users = $users_query->result();
        $teachers = array();
        $total_sessions = 0;
        $total_hours = 0;
        $total_payment_course = 0;

        $control_precio=0;
        
        $id_curso_titular = array();   
        $bodegas_ids = $this->domain->get_bodegas(); 
        $bodegas_ids = implode(",", $bodegas_ids);
               
        foreach ($users as $user) {
            $qty_sessions = 0;
            $qty_hours = 0;
            $qty_total = 0;
            
            $hour_price = array(
                'price' => $user->price,
                'weekend_price' => $user->weekend_price,
                'out_academy_price' => $user->out_academy_price
            );

            
                  
            // Cursos for each user
            $cursos_sql = 'SELECT id, nombre, identificador FROM cursos';
     
            if ( $identificador > -1 ) {  
                $cursos_sql .= " WHERE  identificador = '" . $identificador. "' and profesor = " . $user->id;
            }                        
            else {     
                $cursos_sql .= " WHERE profesor = " . $user->id . " and  bodega in (".$bodegas_ids.") ";
            }     
                       
//            echo " sql:  ".$cursos_sql."<br>";
            
            $cursos_query = $this->db->query($cursos_sql, FALSE);
            $cursos = $cursos_query->result();
             
            $user_cursos = array();
            $user_total_payment = 0;
            $curso_count = 0;

            $curso_have_sesion = 0;  
            
            foreach ($cursos as $curso) {
                // Total valid sessions for each curso
                $session_sql = 'SELECT COUNT(id) AS TOTAL FROM sesiones WHERE curso = ' . $curso->id;
                $session_sql .= ' AND estado = 1';
                $session_sql .= strlen($date_from) > 0 ? " AND fecha >= " . $date_from : '';
                $session_sql .= strlen($date_to) > 0 ? " AND fecha <= " . $date_to : '';
                
                $session_sql .= " AND profesor = " . $user->id . '';
                        
                $valid_sessions_query = $this->db->query($session_sql, FALSE);
                $valid_sessions_result = $valid_sessions_query->result();
                
                // Valid sessions for each curso
                $session_sql = 'SELECT id, tarifa, hora_fin - hora_inicio AS HOURS_TOTAL FROM sesiones WHERE curso = ' . $curso->id;
                $session_sql .= ' AND estado = 1';
                $session_sql .= strlen($date_from) > 0 ? " AND fecha >= " . $date_from : '';
                $session_sql .= strlen($date_to) > 0 ? " AND fecha <= " . $date_to : '';
                 
                $session_sql .= " AND profesor = " . $user->id . '';
  
                $sessions_query = $this->db->query($session_sql, FALSE);
                $sessions = $sessions_query->result();
                $session_total_hours = 0;
                $session_total_price = 0;
                
  
                foreach ($sessions as $session) {
                    $session_total_hours += intval($session->HOURS_TOTAL);
                    $session_total_price += $session->HOURS_TOTAL * $hour_price[$session->tarifa] ; 
                }       
        
                $user_total_payment += $session_total_price;

                if (count($sessions) > 0) {
                    $curso_have_sesion = 1;  
                    $user_cursos[] = array(
                        'id' => $curso->id,//id de Curso
                        'user' => $curso_count == 0 ? $user->name : '',
                        'nombre' => $curso->nombre,
                        'identificador' => $curso->identificador, //identificador del curso
                        'valid_sessions' => $valid_sessions_result[0]->TOTAL,
                        'valid_hours' => $session_total_hours,
                        'payment' => $session_total_price
                    );
                }else{
                }  
 
                $qty_sessions += $valid_sessions_result[0]->TOTAL;
                $qty_hours += $session_total_hours;
                $qty_total += $session_total_price;
                $curso_count++;
                $curso_have_sesion++;
            }
             

/////////////////////////////////////////////////////////////////////            
            
            //Ahora debe buscar las sesiones del profesor en la que no figure como titular
            $validation_curso = '';
             
                if (count($user_cursos) > 0) { 
                    $not_in='';
                    $i=1;
                    foreach ($user_cursos as $user_curso) {
                            if ($i>1)
                                $not_in = $not_in . ', ';
                            $not_in = $not_in . $user_curso['id'];
                            $i++;
                    }
                    $validation_curso = ' s.curso not in ('.$not_in.')'; 

                }
    
            $session_sql = 'SELECT distinct(s.curso) FROM sesiones s  ';
            $session_sql .= ' inner join cursos c on c.id = s.curso ';
            $session_sql .= ' WHERE '; 
            $session_sql .= !empty($validation_curso)? $validation_curso . ' AND ': ' ';        
            $session_sql .= ' s.estado = 1';
            $session_sql .= strlen($date_from) > 0 ? " AND s.fecha >= " . $date_from : '';
            $session_sql .= strlen($date_to) > 0 ? " AND s.fecha <= " . $date_to : '';
            $session_sql .= " AND s.profesor = " . $user->id . ''; 
            $session_sql .= $identificador > -1 ? ' AND  c.identificador = "'.$identificador.'" ': ' and bodega in ('.$bodegas_ids.") "; 
                 
            $sessions_query = $this->db->query($session_sql, FALSE);
            $sessions_x_curso = $sessions_query->result(); 
            
            $horas_validadas = 0; 
            foreach ($sessions_x_curso as $session_x_curso) {
                
                    $session_sql = ' Select COUNT(*) as sesiones_validadas from sesiones s';
                    $session_sql .= ' inner join cursos c on c.id = s.curso ';
                    $session_sql .= ' WHERE s.curso in ('. $session_x_curso->curso .') '; 
                    $session_sql .= ' and s.estado = 1';
                    $session_sql .= strlen($date_from) > 0 ? " AND s.fecha >= " . $date_from : '';
                    $session_sql .= strlen($date_to) > 0 ? " AND s.fecha <= " . $date_to : '';
                    $session_sql .= " AND s.profesor = " . $user->id . '';

                    $sessions_query = $this->db->query($session_sql, FALSE);
                    $result = $sessions_query->result();
                    $sesiones_validadadas = $result[0]-> sesiones_validadas;
                    
                    $session_sql = ' Select s.*, c.* , s.hora_fin - s.hora_inicio AS HOURS_TOTAL from sesiones s ';
                    $session_sql .= ' inner join cursos c on c.id = s.curso ';
                    $session_sql .= ' WHERE s.curso in ('. $session_x_curso->curso .') '; 
                    $session_sql .= ' and s.estado = 1';
                    $session_sql .= strlen($date_from) > 0 ? " AND s.fecha >= " . $date_from : '';
                    $session_sql .= strlen($date_to) > 0 ? " AND s.fecha <= " . $date_to : '';
                    $session_sql .= " AND s.profesor = " . $user->id . '';
                    
                    $sessions_query = $this->db->query($session_sql, FALSE);
                    $result_sesions = $sessions_query->result();
                     
                    $horas_validadas = $result_sesions[0]->HOURS_TOTAL;
                    
                    if ($sesiones_validadadas >= 2){//Indica si el usuario tiene mas de una sesion como profesor no titular
                        
                        
                        $session_sql = ' Select SUM(s.hora_fin - s.hora_inicio) AS HOURS_TOTAL from sesiones s ';
                        $session_sql .= ' inner join cursos c on c.id = s.curso ';
                        $session_sql .= ' WHERE s.curso in ('. $session_x_curso->curso .') '; 
                        $session_sql .= ' and s.estado = 1';
                        $session_sql .= strlen($date_from) > 0 ? " AND s.fecha >= " . $date_from : '';
                        $session_sql .= strlen($date_to) > 0 ? " AND s.fecha <= " . $date_to : '';
                        $session_sql .= " AND s.profesor = " . $user->id . '';

                        $sessions_query = $this->db->query($session_sql, FALSE);
                        $result_sesions_in = $sessions_query->result();
                        $horas_validadas = $result_sesions_in[0]->HOURS_TOTAL;
                        
                        //Calcula el valor total por las horas de sesion
                        $payment = 0;
                        foreach ($result_sesions as $result_sesion) {
                           $payment += $result_sesion->HOURS_TOTAL * $hour_price[$result_sesion->tarifa] ; 
                        }                  
   
                        if (count($result_sesions) > 0) { 
                            $user_cursos[] = array( 
                                'id' => $result_sesions[0]->curso,//id de Curso
                                'user' => $curso_count == 0 ? $user->name : '',
                                'nombre' => '',
                                'identificador' => $result_sesions[0]->identificador, //identificador del curso
                                'valid_sessions' => $sesiones_validadadas,
                                'valid_hours' => $horas_validadas,
                                'payment' => $payment
                            );  
                        }                        
                              
                    }else{
                        if (!isset($session)){
                            $payment = $result_sesions[0]->HOURS_TOTAL * $hour_price[$result_sesions[0]->tarifa];
                        }else{
                            $payment = $result_sesions[0]->HOURS_TOTAL * $hour_price[$result_sesions[0]->tarifa];
                        }   

                        if (count($result_sesions) > 0) { 
                            $user_cursos[] = array( 
                                'id' => $result_sesions[0]->curso,//id de Curso
                                'user' => $curso_count == 0 ? $user->name : '',
                                'nombre' => '',
                                'identificador' => $result_sesions[0]->identificador, //identificador del curso
                                'valid_sessions' => $sesiones_validadadas,
                                'valid_hours' => $horas_validadas,
                                'payment' => $payment
                            );   
                        }                        
                    }
                        
                    $qty_sessions += $sesiones_validadadas;
                    $qty_hours += $horas_validadas;
                    $qty_total += $payment;
                    $curso_count++;     
                    $curso_have_sesion++; 
                
            } 
/////////////////////////////////////////////////////////////////////  
            if (count($user_cursos) > 0) { 
                $teachers[] = array(
                    'id' => $user->id,//id de Profesor
                    'name' => $user->name, 
                    'cursos' => $detailed_report ? $user_cursos : array(),
                    'rowspan' => $detailed_report ? count($user_cursos) + 2 : 2,
                    'payment' => $qty_total,
                    'qty_sessions' => $qty_sessions,
                    'qty_hours' => $qty_hours,
                    'qty_total' => $qty_total
                ); 
            }  
   
            $total_sessions += $qty_sessions;
            $total_hours += $qty_hours;
            $total_payment_course += $qty_total;
     
        }
      
        //Esta Fila es del Total de abajo
        // Cursos 	Sesiones Validadas 	Horas Validadas 	Total x Curso 	Total x Pagar
        $teachers[] = array(
            'id' => '',
            'name' => '',
            'cursos' => array(),
            'rowspan' => $detailed_report ? 2 : 2, 
            'payment' => $total_payment_course,//Tota x Pagar
            'qty_sessions' => $total_sessions,  
            'qty_hours' => $total_hours,   
            'qty_total' => $total_payment_course//Total x Curso
             
        ); 
    
        $number_of_entries = count($teachers);
        $data = array('list' => $teachers, 'number_of_entries' => $number_of_entries);
        $response->set_data($data);
    }
} 
