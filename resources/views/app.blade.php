<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>My stock</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

        <!-- Styles -->
        <style>
            * {
            margin: 0;
            padding: 0;
            }
            html, body {
            width: 100%;
            height: 100%;
            }
        </style>
    </head>
    <body>
        <div>
            <div id="app">
            </div>
            <script src="{{asset('js/app.js')}}"></script>  
        </div>
    </body>
</html>
