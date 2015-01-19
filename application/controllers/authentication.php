<?php 

ini_set("display_errors", 1);
ini_set("error_reporting", E_ALL);

class Authentication extends PublicController {

	protected $users_model;
	const PASSWORD_RECOVER_TABLE = 'password_recovery';
	
	public function __construct()
	{
		parent::__construct();

		$this->users_model = new UsersModel($this->db);
	}
	
	public function index()
	{
		$this->login();
	}

	public function login()
	{
		$show_error = false;
		if(isset($_POST["email"]) AND isset($_POST["password"]))
		{
			$authentication = $this->auth->user_login($_POST["email"], $_POST["password"]);
			
			if($authentication) redirect(base_url());
			$show_error = true;
		}
		$this->show_login_form($show_error);
	}
	
	protected function show_login_form($show_error = false)
	{
		$vars = array();
		$vars["base_url"] = base_url();
		$vars['recover_password_url'] = base_url()."recover-password";
		$vars['input_class'] = "";
		$vars['feedback'] = "";
		
		if($show_error)
		{
			$vars['input_class'] = "error";
			$vars['feedback'] = "Email o contraseña incorrectos";
		}
		
		$this->load->view('login', $vars);
	}
	
	public function logout()
	{
		$this->auth->logout();
		redirect(base_url()."login");
	}
	
	public function logged()
	{
		$response = new Response();
		
		$response->set_data($this->auth->logged());
		
		$this->output($response->encode());
	}
	
	public function recover_password()
	{
		$show_error = false;
		if(isset($_POST['email']))
		{
			$user = $this->users_model->get_user_by_email($_POST['email']);
			if($user)
			{
				 $this->create_password_recovery_process($user);
				 $login_url = base_url()."login";
				 $this->load->view('password_recovery_mail_sent', array('base_url' => base_url(), "login_url" => $login_url));
				 return;
			}
			$show_error = true;
		}
		$this->show_recover_password_form($show_error);
	}
	
	public function reset_password($hash = false)
	{
		if(!$hash)	show_404();
		
		$this->db->where('hash', $hash);
		$recover_password_process = $this->db->get(self::PASSWORD_RECOVER_TABLE)->result_array();
		
		if(empty($recover_password_process) OR (time() > $recover_password_process[0]['expiration_date']))
		{
			show_404();
		}
		
		$input_class = '';
		if(isset($_POST['password']) AND isset($_POST['repeat_password']))
		{
			if($_POST['password'] == $_POST['repeat_password'])
			{
				$this->update_password($recover_password_process[0]['user_id'], $_POST['password']);
				redirect(base_url().'login');
			}
			$input_class = 'error';
		}

		$this->load->view('reset_password', array('base_url' => base_url(), 'input_class' => $input_class));				
	}
	
	protected function update_password($user_id, $new_password)
	{
		try{
			$user = $this->users_model->get($user_id);
			$user->password = $new_password;
			$this->users_model->update($user);
		}
		catch(Exception $exception)
		{
			die(print_r($exception->getMessage()));
		}
	}
	
	protected function create_password_recovery_process(User $user)
	{
		$hash = md5(time());
		$current_time_plus_one_day =  (time() + 86400);
		$data = array(
					'user_id' 			=> $user->id,
					'hash'				=> $hash,
					'expiration_date' 	=> $current_time_plus_one_day);
		
		$this->db->insert(self::PASSWORD_RECOVER_TABLE, $data);
		$this->send_password_recovery_email($user->email, $hash);
	}
	
	protected function send_password_recovery_email($email, $hash)
	{
		$this->load->library('email');
		$this->email->mailtype = 'html';
		$this->email->from('password_recovery@hce.com', 'Historia Clínica Ecuador');
		$this->email->to($email); 
		
		$this->email->subject('Recuperación de contrasña');
		$recovery_url = base_url().'reset-password/'.$hash;
		$message = $this->load->view('password_recovery_email', array('url' => $recovery_url), true);
		$this->email->message($message);

		$this->email->send();
	}
	
	protected function show_recover_password_form($show_error)
	{
		$vars = array();
		$vars["base_url"] = base_url();
		$vars['input_class'] = "";
		$vars['feedback'] = "";
		
		if($show_error)
		{
			$vars['input_class'] = "error";
			$vars['feedback'] = "El email no existe";
		}
		
		$this->load->view('recover_password', $vars);
	}
}
