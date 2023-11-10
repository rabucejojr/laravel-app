<?php

use App\Http\Controllers\DataController;
use App\Http\Controllers\EventController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
//FILES ROUTES
Route::get('/data', [DataController::class, 'getData']);
Route::post('/save', [DataController::class, 'saveData']);
Route::put('/update/{id}', [DataController::class, 'updateData']);
Route::delete('/delete/{id}', [DataController::class, 'deleteData']);
// EVENT ROUTES
Route::get('/events', [EventController::class, 'getEvent']);
Route::post('/events/save', [EventController::class, 'saveEvent']);
Route::put('/events/update/{id}', [EventController::class, 'updateEvent']);
Route::delete('/events/delete/{id}', [EventController::class, 'deleteEvent']);