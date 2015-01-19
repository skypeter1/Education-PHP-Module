<?php
class ExamenesModel extends Model
{
	public $table = "examenes";
	public $entity = "Examen";

	public $search_fields = array("profesor", "titulo");

	public function save_notas(array $notas)
	{

		foreach($notas as $nota_entry)
		{
			$this->db->where("alumno", $nota_entry["alumno"]);
			$this->db->where("examen", $nota_entry["examen"]);
			$this->db->delete("notas");
		}

		$this->db->insert_batch("notas", $notas);
	}

	public function get_notas($examen = null)
	{
		if($examen != null)
			$this->db->where("examen", $examen);

		$result = $this->db->get("notas")->result_array();

		return $result;
	}

	public function delete(Entity $examen)
	{
		parent::delete($examen);
		$this->delete_notas($examen);
	}

	protected function delete_notas(Entity $examen)
	{
		$this->db->where("examen", $examen->id);
		$this->db->delete("notas");
	}

}