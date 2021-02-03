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
   
    Route::get('/me','UserController@me');
    Route::resource('/stocks','StockController');
    Route::resource('/loans','LoanController');
    Route::resource('/companies','CompanyController');
    Route::post('/contact','ContactController@store');
    Route::post('/company_finance','CompanyFinanceController@store');
    Route::get('/loan_type','LoanTypeController@index');

});

//global access api routes
Route::get('/company_category','CompanyCategoryController@index');
Route::post("/config","ConfigController@store");
Route::get('/regions','RegionCityController@index');
Route::get('/public_loans','LoanController@loans');
Route::get('/public_stocks','StockController@stocks');

