<?php
class Curso extends Entity
{
	public $identificador;
	public $nombre;
	public $horas;
	public $hora_inicio;
	public $hora_fin;
	public $fecha_inicio;
	public $fecha_fin;
	public $cupos_minimo;
	public $cupos_maximo;
	public $precio_prematricula;
	public $estado;
	public $producto_pac;
	public $sucursal;
	public $bodega;
	public $profesor;
}