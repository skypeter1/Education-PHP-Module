<?php
class Client extends PublicController {

  public function __construct()
  {
    parent::__construct();
  }

  public function index()
  {
    try{
      $this->_index();
    }
    catch(Exception $e){
      if($e->getMessage() == "error_rol_not_configured")
        $this->load->view('rol_error');
    }
  }

  public function _index(){
    $vars = array();

    $this->load->helper('url');
    $vars["base_url"] = base_url();

    $vars["current_user_type"] = "User";
    $vars["current_user_permissions"] = "{}";
    $vars["current_user"] = new User();
    $vars["user_url"] = "";
    $vars["logout_url"] = "";

    if($this->auth->logged())
    {
      $current_user = $this->auth->get_current_user();

      $vars["current_user_type"] = get_class($current_user);
      $vars["current_user_permissions"] = json_encode($this->auth->permissions->get_user_permissions($current_user));
      $vars["current_user"] = $current_user;
      $vars["user_url"] = "#users/edit/";
      $vars["logout_url"] = "logout";

      if($current_user->rol == "administrador")
        $vars["logout_url"] = "../";

      if(isset($_SESSION["bodega"]))
        $vars["current_bodega"] = $_SESSION["bodega"];

    }

    $this->load->view('layout', $vars);
  }
}
