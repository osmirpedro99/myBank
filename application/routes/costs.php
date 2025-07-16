<?php

use App\Http\Controllers\CostController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;


Route::middleware('verified')->group(function () {
    Route::post('add_cost', [CostController::class, 'create'])
    ->name('add_cost');
});