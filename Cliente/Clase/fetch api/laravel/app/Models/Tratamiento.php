<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tratamiento extends Model
{
    protected $table = "tratamientos";
    protected $primaryKey = 'id';
    protected $fillable = [
        'nombre', 
        'duracion', 
        'precio', 
        'descripcion', 
        'fecha_inicio', 
        'fecha_fin'
    ];
}
