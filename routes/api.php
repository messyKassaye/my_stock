<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//authentication routes
Route::post("/login", "App\\Http\\Controllers\\AuthController@login");
Route::post("/signup", "App\\Http\\Controllers\\AuthController@signup");


//sanctum middleware for authenticated users
Route::middleware(["auth:sanctum"])->group(function () {
    //Route::resource("/products", "App\\Http\\Controllers\\ProductController");
});

//global access api routes
Route::get('/company_category','CompanyCategoryController@index');
Route::post("/config","ConfigController@store");
Route::post('/companies','CompanyController@store');
