<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Clinica extends Model
{
    protected $table = "clinicas";
    protected $primaryKey = 'id';
    protected $fillable = [
        'direccion', 
        'correo', 
        'telefono', 
        'nombre', 
        'estado'
    ];
}
