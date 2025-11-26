<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\Paciente;
use Illuminate\Http\Request;

class PacienteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $pacientes = Paciente::all();
        return response()->json($pacientes);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $dni = $request['dni'];
            $nombre = $request['nombre'];
            $apellidos = $request['apellidos'];
            $direccion = $request['direccion'];
            $sexo = $request['sexo'];
            $codPostal = $request['codPostal'];
            $telefono = $request['telefono'];

            $paciente = new Paciente();
            $paciente->dni = $dni;  
            $paciente->nombre = $nombre;
            $paciente->apellidos = $apellidos;
            $paciente->direccion = $direccion;
            $paciente->sexo = $sexo;
            $paciente->codPostal = $codPostal;
            $paciente->telefono = $telefono;

            $paciente->save();

            return response()->json(["success" => "El paciente se ha introducido correctamente"]);
        } catch (Exception $e) {
            return response()->json([
                "error" => "El paciente no se ha insertado correctamente",
                "mensaje" => $e->getMessage()
            ]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $paciente = Paciente::whereId($id)->first();
        return response()->json($paciente);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        try {
            $dni = $request['dni'];
            $nombre = $request['nombre'];
            $apellidos = $request['apellidos'];
            $direccion = $request['direccion'];
            $sexo = $request['sexo'];
            $codPostal = $request['codPostal'];
            $telefono = $request['telefono'];   

            $paciente = Paciente::whereId($id)->first();
            $paciente->dni = $dni;
            $paciente->nombre = $nombre;
            $paciente->apellidos = $apellidos;
            $paciente->direccion = $direccion;
            $paciente->sexo = $sexo;
            $paciente->codPostal = $codPostal;
            $paciente->telefono = $telefono;

            $paciente->save();

            return response()->json(["success" => "El paciente se ha actualizado correctamente"]);
        } catch (Exception $e) {
            return response()->json([
                "error" => "El paciente no se ha actualizado correctamente",
                "mensaje" => $e->getMessage()
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try{
            $paciente = Paciente::whereId($id)->first();
            $paciente->delete();
            return response()->json(["success" => "El paciente se ha borrado correctamente"]);

        } catch (Exception $e) {
            return response()->json([
                "error" => "El paciente no se ha borrado correctamente",
                "mensaje" => $e->getMessage()
            ]);
        }
    }
}
