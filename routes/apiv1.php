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

Route::group(['prefix' => 'auth'], function () {
    Route::post('/signup', 'AuthController@signup');
    Route::post('/signin', 'AuthController@signin');
    Route::get('/signout', 'AuthController@signout')->middleware('auth:api');
});

Route::group(['prefix' => 'user', 'middleware' => 'auth:api'], function () {
    Route::get('/', 'UserController@index');
    Route::delete('/{id}', 'UserController@delete')->middleware('role:isAdmin');
    Route::post('/invite', 'UserController@invite')->middleware('role:isAdmin');
});

Route::group(['prefix' => 'chat', 'middleware' => 'auth:api'], function () {
    Route::get('/{receiver}', 'ChatController@index');
    Route::post('/{receiver}', 'ChatController@send');
});
