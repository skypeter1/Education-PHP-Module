<?php
ini_set("display_errors", 1);
class TestCaseCommonController extends TestCase
{
	protected $cookie = false;
	protected $enviroment_setter;

	public function __construct()
	{
		$this->enviroment_setter = new EnvironmentSetter();
	}

	public function test_user_must_be_logged_for_create()
	{
		$this->empty_tables();
		$this->before_test();

		$url = '/testing/create';

		$response = $this->send_curl($url, array());
		$this->assert_equals(array('error_not_loggedin'), $response["response"]->errors);

		$this->after_test();
	}

	public function test_user_must_be_logged_for_update()
	{
		$this->before_test();

		$url = '/testing/update';
		$data = array();

		$response = $this->send_curl($url, $data);

		$this->assert_equals(array('error_not_loggedin'), $response["response"]->errors);

		$this->after_test();
	}

	public function test_user_must_be_logged_for_get()
	{
		$this->before_test();

		$url = '/testing/get';
		$data = array();

		$response = $this->send_curl($url, $data);

		$this->assert_equals(array('error_not_loggedin'), $response["response"]->errors);

		$this->after_test();
	}

	public function test_user_must_be_logged_for_delete()
	{
		$this->before_test();

		$url = '/testing/delete';
		$data = array();

		$response = $this->send_curl($url, $data);

		$this->assert_equals(array('error_not_loggedin'), $response["response"]->errors);

		$this->after_test();
	}

	public function test_user_must_be_logged_for_search()
	{
		$this->before_test();

		$url = '/testing/search';
		$data = array();

		$response = $this->send_curl($url, $data);

		$this->assert_equals(array('error_not_loggedin'), $response["response"]->errors);

		$this->after_test();
	}

	public function test_create()
	{
		$this->before_test();
		$cookie = CurlSupport::login();

		$url = '/testing/create';
		$data = array();

		$response = $this->send_curl($url, $data, $cookie);

		$this->assert_true(isset($response["response"]->data->id));
		
		$entities_in_db = $this->get_entities_in_db();

		$this->assert_true(sizeof($entities_in_db) == 1);
  
                        
		$this->assert_equals(1, $entities_in_db[0]['id']);

		$this->after_test();
	}

  public function test_delete()
  {
    $this->before_test();
    $cookie = CurlSupport::login();
    $this->add_entity_to_database();

    $entities_in_db = $this->get_entities_in_db();
    $this->assert_true(sizeof($entities_in_db) == 1);

    $url = '/testing/delete';
    $data = array("id" => 1, "version" => '1');

    $response = $this->send_curl($url, $data, $cookie);
    $this->assert_true(empty($response["response"]->errors));

    $entities_in_db = $this->get_entities_in_db();
    $this->assert_true(sizeof($entities_in_db) == 0);

    $this->after_test();
  }

  public function test_search_no_filter()
  {
    $this->before_test();
    $cookie = CurlSupport::login();
    $this->add_entity_to_database(10);
    $this->add_entity_to_database(20);

    $url = '/testing/search';

    $response = $this->send_curl($url, array(), $cookie);


    $this->assert_equals(2, $response["response"]->data->number_of_entries);
    $this->assert_equals(20, $response["response"]->data->list[0]->id);
    $this->assert_equals(10, $response["response"]->data->list[1]->id);
    
    $this->after_test();
  }

  public function test_search_with_filter()
  {
    $this->before_test();
    $cookie = CurlSupport::login();

    $this->add_entity_to_database(15);
    $this->add_entity_to_database(25);
    $this->add_entity_to_database(35);
    $this->add_entity_to_database(45);
    $this->add_entity_to_database(100);

    $url = '/testing/search';

    $search = new stdClass();

    $filter = new stdClass();
    $filter->property = 'id';
    $filter->pattern = '5';
    $filter->method = 'LIKE';
    $search->filters = array($filter);

    $paginator = new stdClass();
    $paginator->page_size = 3;
    $search->paginator = $paginator;

    $order = new stdClass();
    $order->field = 'id';
    $order->direction = 'desc';
    $search->order = $order;

    $response = $this->send_curl($url, $search, $cookie);
    $this->assert_equals(4, $response["response"]->data->number_of_entries);

    $this->assert_equals(45, ($response["response"]->data->list[0]->id));
    $this->assert_equals(35, ($response["response"]->data->list[1]->id));
    $this->assert_equals(25, ($response["response"]->data->list[2]->id));
    $this->assert_equals(3, sizeof($response["response"]->data->list));

    $this->after_test();
  }

  public function test_get()
  {
    $this->before_test();
    $cookie = CurlSupport::login();

    $this->add_entity_to_database(10);

    $url = '/testing/get';
    $data = array("id" => 10);

    $response = $this->send_curl($url, $data, $cookie);

    $this->assert_equals(10, $response["response"]->data->id);

    $this->after_test();
  }

  public function test_update()
  {
    $this->before_test();
    $cookie = CurlSupport::login();
    $this->add_entity_to_database();

    $url = '/testing/update';
    $data = array("id" => 1, "version" => '1');

    $response = $this->send_curl($url, $data, $cookie);

    $this->assert_true(empty($response["response"]->errors));

    $this->after_test();
  }

  public function test_no_post_data_error()
  {
    $this->before_test();
    $cookie = CurlSupport::login();

    $wrap_post_with_key_data = false;
    $response = $this->send_curl('/testing/create', array(), $cookie, $wrap_post_with_key_data);

    $this->assert_equals(1, sizeof($response["response"]->errors));
    $this->assert_true(in_array("error_no_data", $response["response"]->errors));

    $this->after_test();
  }

	protected function send_curl($url, $data = array(), $cookie = false, $wrap_data = true)
	{ 
//		$base_url = config_item('base_url');     
                $base_url = 'http://localhost/Workspace/benedict/modulo_educacion';
                 
		$ch = curl_init($base_url.$url);
                
		curl_setopt($ch, CURLOPT_HEADER, 1);
		curl_setopt($ch, CURLOPT_POST, 1);
		curl_setopt($ch, CURLOPT_FAILONERROR,false);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
		curl_setopt($ch, CURLOPT_FOLLOWLOCATION, false);

		if($cookie)
		curl_setopt($ch, CURLOPT_COOKIE, $cookie);
			
		$post_data = $data;
		if($wrap_data)
		{
			$encoded_data = json_encode($data);
			$post_data = array("data" => $encoded_data);
		}

		curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($post_data));

                
		$response = curl_exec($ch);
                
                if(curl_errno($ch))
                {
                    throw new Exception('CURL ERROR: '. curl_error($ch));
                }
                
                
//                echo "Response del cUrl: ";
//                var_dump(curl_getinfo($ch)); 
                
  
		$exploded_response = explode("\n\r", $response);

		$headers = $exploded_response[0];
		$content = $exploded_response[1];
		$result = array();
            
//                echo "exploded_response[1]: ";
//                var_dump($exploded_response[1]);  
                
                
//                $this->assert_equals(array('error_not_loggedin'), $response["response"]->errors);

		preg_match('/HTTP\/1.1\s(\d{3})/i', $headers, $status);
		$result["status"] = $status[1];

		preg_match_all('|Set-Cookie: (.*);|U', $headers, $matches);
		$result["cookies"] = implode(';', $matches[1]);

		$result["response"] = json_decode($exploded_response[1]);
		$result["full_response"] = $response;

		curl_close($ch);

		return $result;
	}

	protected function setup_database()
	{
		$this->empty_tables();
		$database_access = DB();
		$fixture_executioner = new FixtureExecutioner($database_access);

		$fixture_path = dirname(__FILE__)."/../../Fixtures/fixtures/main/10_create_database.sql";
		$fixture_executioner->execute_fixture($fixture_path, "educacion_development");

		$fixture_path = dirname(__FILE__)."/../../Fixtures/fixtures/main/20_users_table.sql";
		$fixture_executioner->execute_fixture($fixture_path, "educacion_development");

		$fixture_path = dirname(__FILE__)."/../../Fixtures/fixtures/testing/20_testing_users.sql";
		$fixture_executioner->execute_fixture($fixture_path, "educacion_development");

		$fixture_path = dirname(__FILE__)."/../../Fixtures/fixtures/testing/90_testing_entities_table.sql";
		$fixture_executioner->execute_fixture($fixture_path, "educacion_development");

		$fixture_path = dirname(__FILE__)."/../../Fixtures/fixtures/main/200_activity_log_table.sql";
		$fixture_executioner->execute_fixture($fixture_path, "educacion_development");
    UsersSetup::create_pac_users();
	}

	protected function add_entity_to_database($id = null)
	{
		$name = 'Number '.$id.' entity';
		$database_access = DBAccessCreator::get_db_access('educacion_development');
		$database_access->insert('entities', array("id" => $id, "version" => '1', 'name' => $name));
	}
	
	protected function clean_entities_table()
	{
		$database_access = DB();
		$fixture_executioner = new FixtureExecutioner($database_access);

		$fixture_path = dirname(__FILE__)."/../../Fixtures/fixtures/testing/65_empty_entities_table.sql";
		$fixture_executioner->execute_fixture($fixture_path, "educacion_development");
	}

	protected function empty_tables()
	{
		$database_access = DB();
		try
		{
			$database_access->truncate('educacion_development.users');
			$database_access->truncate('educacion_development.entities');
			$database_access->truncate('educacion_development.activity_log');
		}
		catch(Exception $exception)
		{
			if ($exception->getCode() != 100)
				throw $exception;
		}
	}	

	protected function before_test()
	{
		$this->enviroment_setter->set_development_environment();
		$this->setup_database();
	}

	protected function after_test()
	{
		$this->enviroment_setter->set_previous_environment();
		$this->empty_tables();
	}
   
	protected function get_entities_in_db()
	{
		$database_acces = DBAccessCreator::get_db_access('educacion_development');
		return $database_acces->get('entities')->result_array();
	}
}
