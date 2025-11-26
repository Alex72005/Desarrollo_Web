<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CitaController;
use App\Http\Controllers\ClinicaController;
use App\Http\Controllers\UsuarioController;
use App\Http\Controllers\PacienteController;
use App\Http\Controllers\TratamientoController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/users', [UsuarioController::class, 'index']);
Route::post('/users', [UsuarioController::class, 'store']);
Route::put('/users/edit/{id}', [UsuarioController::class, 'update']);
Route::delete('/users/delete/{id}', [UsuarioController::class, 'destroy']);

Route::apiResource('pacientes', PacienteController::class);

Route::apiResource('tratamientos', TratamientoController::class);

Route::apiResource('citas', CitaController::class);

Route::apiResource('clinicas', ClinicaController::class);