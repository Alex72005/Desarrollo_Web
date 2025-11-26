<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class Usuario2Controller extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $reglas = [
            'nombre' => 'required|string|min:3|max:20',
            'email' => 'required|email|unique:App\Models\User,email'
        ];

        $mensajes = [
            'nombre.required' => 'El nombre es obligatorio', 
            'nombre.string' => 'El nombre debe de ser de tipo texto', 
            'nombre.min' => 'El nombre debe tener como minimo 3 caracteres', 
            'nombre.max' => 'El nombre debe tener como maximo 20 caracteres',
            'email.required' => 'El email es obligatorio', 
            'email.email' => 'El email debe de ser de tipo email', 
            'email.unique' => 'El email debe de ser único'
        ];

        $validacion = Validator::make($request->all(), $reglas, $mensajes);

        if ($validacion->fails()) {
            return view('validar', ['errors' => $validacion->errors()->first()]);
        }


        try{
            $nombre = $request['nombre'];
            $email = $request['email'];
            $password = $request['password'];

            $usuario = new User();
            $usuario->name=$nombre;
            $usuario->email=$email;
            $usuario->password=$password;

            $usuario->save();
            return view('validar', ["mensaje" => "El usuario se hacreado correctamente"]);
        } catch(Exception $e){
            return view('validar', ["errors" => $e->getMessage()]);
        }
       
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
