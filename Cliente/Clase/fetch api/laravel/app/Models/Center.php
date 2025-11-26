<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Center extends Model
{
    protected $table = "centers";
    protected $primaryKey = "id";
    protected $fillable = [
        "nombre",
        "idTipo"
    ];
}
