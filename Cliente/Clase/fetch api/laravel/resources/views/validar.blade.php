<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <title>Document</title>
</head>

<body>
    @if (isset($errors))
        <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong class="font-bold">{{$errors}}</strong>
        </div>
    @endif

    <form action="{{ route('validar.post') }}" method="POST">
        @csrf
        <label for="nombre">Nombre</label>
        <input type="text" required id="nombre" name="nombre" placeholder="Juan">
        <label for="email">Email</label>
        <input for="email"required id="" name="email" placeholder="hola@hola.com" value="">

        <label for="password">Contraseña</label>
        <input type="password" required id="password" name="password">

        <button type="submit">Enviar</button>

    </form>

</body>

</html>