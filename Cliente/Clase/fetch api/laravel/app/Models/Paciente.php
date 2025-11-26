<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Paciente extends Model
{
    protected $table = "pacientes";
    protected $primaryKey = "id";
    protected $fillable = [
        "nombre",
        "apellidos",
        "direccion",
        "sexo",
        "codPostal",
        "telefono", 
        "dni"
    ];

}
