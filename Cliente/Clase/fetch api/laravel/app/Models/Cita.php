<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cita extends Model
{
    protected $table = 'citas';
    protected $primaryKey = 'id';
    protected $fillable = [
        'fecha', 
        'motivo'
    ];
}
