<?php

namespace App\Http\Controllers;

use App\Models\Cita;
use Exception;
use Illuminate\Http\Request;

class CitaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $citas = Cita::all();
            return response()->json($citas);
        } catch (Exception $e) {
            return response()->json([
                "error" => "No se mostraron todas las citas",
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
            $fecha = $request['fecha'];
            $motivo = $request['motivo'];

            $cita = new Cita();
            $cita->fecha = $fecha;
            $cita->motivo = $motivo;

            $cita->save();

            return response()->json([
                "success" => "La cita se ha creado correctamente"
            ]);
        } catch (Exception $e) {
            return response()->json([
                "error" => "La cita no se ha creado correctamente",
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
            $cita = Cita::whereId($id)->first();
            return response()->json($cita);
        } catch (Exception $e) {
            return response()->json([
                "error" => "No se mostro la cita",
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
            $fecha = $request['fecha'];
            $motivo = $request['motivo'];

            $cita = Cita::whereId($id)->first();
            $cita->fecha = $fecha;
            $cita->motivo = $motivo;

            $cita->save();

            return response()->json([
                "success" => "La cita se ha actualizado correctamente"
            ]);
        } catch (Exception $e) {
            return response()->json([
                "error" => "La cita no se ha actualizado correctamente",
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
            $cita = Cita::whereId($id)->first();
            $cita->delete();
            return response()->json([
                "success" => "La cita se ha borrado correctamente"
            ]);
        } catch (Exception $e) {
            return response()->json([
                "error" => "La cita no se ha borrado correctamente",
                "mensaje" => $e->getMessage()
            ]);
        }
    }
}
