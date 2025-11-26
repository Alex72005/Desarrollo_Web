<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;


class UsuarioController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $usuarios = User::all();
        return response()->json($usuarios);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $nombre = $request['name'];
            $email = $request['email'];
            $password = $request['password'];

            $user = new User();
            $user->name = $nombre;
            $user->email = $email;
            $user->email_verified_at = now();
            $user->password = $password;
            $user->remember_token = Str::random(10);

            $user->save();

            return response()->json(["success" => "El usuario se ha insertado correctamente"]);
        } catch (Exception $e) {
            return response()->json([
                "error" => "El usuario no se ha insertado correctamente",
                "mensaje" => $e->getMessage()
            ]);
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
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        try {
            $nombre = $request['name'];
            $email = $request['email'];
            $password = $request['password'];

            $user = User::whereId($id)->first();
            $user->name = $nombre;
            $user->email = $email;
            $user->email_verified_at = now();
            $user->password = $password;
            $user->remember_token = Str::random(10);

            $user->save();

            return response()->json(["success" => "El usuario se ha actualizado correctamente"]);
        } catch (Exception $e) {
            return response()->json([
                "error" => "El usuario no se ha actualizado correctamente",
                "mensaje" => $e->getMessage()
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    // public function destroy(Request $request)
    // {
    //     $user = User::whereId($request['id'])->first();
    //     $user->delete();
    //     return response()->json(["success" => "El usuario se ha eliminado correctamente"]);
    // }

        public function destroy(string $id)
        {
            try{
                $user = User::whereId($id)->first();
                $user->delete();
                return response()->json(["success" => "El usuario se ha eliminado correctamente"]);
            } catch (Exception $e) {
                return response()->json([
                    "error" => "El usuario no se ha eliminado correctamente",
                    "mensaje" => $e->getMessage()
                ]);
            }
        
        }
}
