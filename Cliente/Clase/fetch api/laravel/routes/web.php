<?php

use Illuminate\Support\Facades\Route;
use App\Http\Middleware\CorsMiddleware;
use App\Http\Controllers\UsuarioController;
use App\Http\Controllers\Usuario2Controller;
use App\Http\Controllers\Usuario\LoginController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/login',[LoginController::class,"index"]);

Route::get('/validar', function(){
    return view('validar');
})->name('validar.get');
Route::post('validar', [Usuario2Controller::class,'store'])->name('validar.post');