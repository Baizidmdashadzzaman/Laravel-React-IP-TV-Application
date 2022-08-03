<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;

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

Route::get('/product', [ProductController::class, 'index'])->name('product.index');
Route::post('/product-search', [ProductController::class, 'search'])->name('product.search');

Route::get('/stream', [ProductController::class, 'stream'])->name('stream.index');

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
