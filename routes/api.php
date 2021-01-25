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
Route::post("/login", "AuthController@login");
Route::post("/signup", "AuthController@signup");


//sanctum middleware for authenticated users
Route::middleware(["auth:sanctum"])->group(function () {
    //Route::resource("/products", "App\\Http\\Controllers\\ProductController");
    Route::get('/me','UserController@me');
});

//global access api routes
Route::get('/company_category','CompanyCategoryController@index');
Route::post("/config","ConfigController@store");
Route::resource('/companies','CompanyController');
Route::get('/regions','RegionCityController@index');
Route::post('/contact','ContactController@store');
Route::resource('/stocks','StockController');
