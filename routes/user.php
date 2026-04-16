<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('user/home/index');
})->name('user.home.index');
Route::get('/group2M', function () {
    return Inertia::render('user/group2M/index');
})->name('user.group.index');
Route::get('/medias', function () {
    return Inertia::render('user/medias/index');
})->name('user.medias.index');
Route::get('/gouvernance', function () {
    return Inertia::render('user/gouvernance/index');
})->name('user.gouvernance.index');
Route::get('/esg', function () {
    return Inertia::render('user/esg/index');
})->name('user.esg.index');
Route::get('/offres', function () {
    return Inertia::render('user/offres/index');
})->name('user.offres.index');

