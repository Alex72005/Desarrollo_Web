<?php

namespace App\Http\Controllers;

use App\Models\Tratamiento;
use Exception;
use Illuminate\Http\Request;

class TratamientoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $tratamientos = Tratamiento::all();
            return response()->json($tratamientos);
        } catch (Exception $e) {
            return response()->json([
                "error" => $e->getMessage()
            ]);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $nombre = $request['nombre'];
            $duracion = $request['duracion'];
            $precio = $request['precio'];
            $descripcion = $request['descripcion'];
            $fecha_inicio = $request['fecha_inicio'];
            $fecha_fin = $request['fecha_fin'];

            $tratamiento = new Tratamiento();
            $tratamiento->nombre = $nombre;
            $tratamiento->duracion = $duracion;
            $tratamiento->precio = $precio;
            $tratamiento->descripcion = $descripcion;
            $tratamiento->fecha_inicio = $fecha_inicio;
            $tratamiento->fecha_fin = $fecha_fin;

            $tratamiento->save();

            return response()->json([
                "success" => "El tratamiento se ha creado correctamente"
            ]);
        } catch (Exception $e) {
            return response()->json([
                "error" => "El tratamiento no se ha creado correctamente",
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
            $tratamiento = Tratamiento::whereId($id)->first();
            return response()->json($tratamiento);
        } catch (Exception $e) {
            return response()->json([
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
            $nombre = $request['nombre'];
            $duracion = $request['duracion'];
            $precio = $request['precio'];
            $descripcion = $request['descripcion'];
            $fecha_inicio = $request['fecha_inicio'];
            $fecha_fin = $request['fecha_fin'];

            $tratamiento = Tratamiento::whereId($id)->first();
            $tratamiento->nombre = $nombre;
            $tratamiento->duracion = $duracion;
            $tratamiento->precio = $precio;
            $tratamiento->descripcion = $descripcion;
            $tratamiento->fecha_inicio = $fecha_inicio;
            $tratamiento->fecha_fin = $fecha_fin;

            $tratamiento->save();

            return response()->json([
                "success" => "El tratamiento se ha actualizado correctamente"
            ]);
        } catch (Exception $e) {
            return response()->json([
                "error" => "El tratamiento no se ha actualizado correctamente",
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
            $tratamiento = Tratamiento::whereId($id)->first();
            $tratamiento->delete();
            return response()->json([
                "success" => "El tratamiento se ha borrado correctamente"
            ]);
        } catch (Exception $e) {
            return response()->json([
                "error" => "El tratamiento no se ha borrado correctamente",
                "mensaje" => $e->getMessage()
            ]);
        }
    }
}
