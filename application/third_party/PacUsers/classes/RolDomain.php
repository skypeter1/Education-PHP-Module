<?php
class RolDomain extends Domain
{	

  public $models = array(	'model' => array('modelclass' => 'RolModel'),
    'pac_users' => array('modelclass' => 'PacUserModel'));

  public function get_pac_user_options(){
    $current_pac_users = $this->get_current_pac_users();
    $collection = $this->pac_users->search(new Search());
    $options = array();

    foreach($collection->collection as $index => $user){
      if(in_array($user["username"], $current_pac_users))
        continue;

      $options[$index] = array();
      $options[$index]["value"] = $user["username"];
      $options[$index]["label"] = $user["username"];
    }

    return array_values($options);
  }

  protected function get_current_pac_users(){
    $current_users = $this->model->search(new Search());

    $current_pac_usernames = array();
    foreach($current_users->collection as $user){
      $current_pac_usernames[] = $user["username"];
    }

    return $current_pac_usernames;

  }

}

