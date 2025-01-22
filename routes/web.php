<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\Product\AddProductController;
use App\Http\Controllers\Admin\Product\DetailProductController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Admin\PromoController;
use App\Http\Controllers\Admin\SettingController;
use App\Http\Controllers\Customer\CustomerController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('default');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {

//    Admin Routes
//    Route::get('/admin/dashboard', [AdminController::class, 'index'])->middleware('role:admin')->name('admin.dashboard');
    Route::middleware(['role:admin'])->group(function () {
        Route::get('/admin/', [AdminController::class, 'index'])->name('admin.dashboard');
        Route::get('/admin/category', [CategoryController::class, 'index'])->name('admin.category.dashboard');
//        Product
        Route::get('/admin/product', [ProductController::class, 'index'])->name('admin.product.dashboard');
//        Add Product
        Route::get('/admin/product/add-product', [AddProductController::class, 'index'])->name('admin.addProduct');
        Route::post('/admin/product/add-product/store', [AddProductController::class, 'store'])->name('admin.addProduct.store');
        Route::post('/admin/product/add-product/upload', [AddProductController::class, 'storeImage'])->name('admin.addProduct.upload');
        Route::get('/admin/product/detail/{id}', [DetailProductController::class, 'index'])->name('admin.detail.product');
        Route::get('/admin/promo', [PromoController::class, 'index'])->name('admin.promo.dashboard');
        Route::get('/admin/setting', [SettingController::class, 'index'])->name('admin.setting.dashboard');
    });

//    Customer Routes
    Route::get('/customer/dashboard', [CustomerController::class, 'index'])->middleware('role:customer|admin')->name('customer.dashboard');

    Route::get('/profile', [ProfileController::class, 'edit'])->middleware('role:admin|customer')->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->middleware('role:admin|customer')->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->middleware('role:admin|customer')->name('profile.destroy');
});

require __DIR__.'/auth.php';
