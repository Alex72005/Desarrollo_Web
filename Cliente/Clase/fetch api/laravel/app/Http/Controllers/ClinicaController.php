<?php

namespace App\Http\Controllers;

use App\Models\Clinica;
use Exception;
use Illuminate\Http\Request;


class ClinicaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $clinicas = Clinica::all();
            return response()->json($clinicas);
        } catch (Exception $e) {
            return response()->json([
                "error" => "No se mostraron todas las clinicas",
                "mensaje" => $e->getMessage()
            ]);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $direccion = $request['direccion'];
            $correo = $request['correo'];
            $telefono = $request['telefono'];
            $nombre = $request['nombre'];
            $estado = $request['estado'];

            $clinica = new Clinica();
            $clinica->direccion = $direccion;
            $clinica->correo = $correo;
            $clinica->telefono = $telefono;
            $clinica->nombre = $nombre;
            $clinica->estado = $estado;
            $clinica->save();

            return response()->json([
                "success" => "La clinica se creo correctamente"
            ]);
        } catch (Exception $e) {
            return response()->json([
                "error" => "La clinica no se creo correctamente",
                "mensaje" => $e->getMessage()
            ]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        try {
            $clinica = Clinica::whereId($id)->first();
            return response()->json($clinica);
        } catch (Exception $e) {
            return response()->json([
                "error" => "No se mostro la clinica que se buscaba",
                "mensaje" => $e->getMessage()
            ]);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        try {
            $direccion = $request['direccion'];
            $correo = $request['correo'];
            $telefono = $request['telefono'];
            $nombre = $request['nombre'];
            $estado = $request['estado'];

            $clinica = Clinica::whereId($id)->first();
            $clinica->direccion = $direccion;
            $clinica->correo = $correo;
            $clinica->telefono = $telefono;
            $clinica->nombre = $nombre;
            $clinica->estado = $estado;
            $clinica->save();

            return response()->json([
                "success" => "La clinica se actualizo correctamente"
            ]);
        } catch (Exception $e) {
            return response()->json([
                "error" => "La clinica no se actualizo correctamente",
                "mensaje" => $e->getMessage()
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            $clinica = Clinica::whereId($id)->first();
            $clinica->delete();
            return response()->json([
                "success" => "La clinica se borro correctamente"
            ]);
        } catch (Exception $e) {
            return response()->json([
                "error" => "La clinica no se borro correctamente",
                "mensaje" => $e->getMessage()
            ]);
        }
    }
}
