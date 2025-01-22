<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->uuid('id')->primary(); // ID menggunakan UUID
            $table->string('name'); // Nama produk
            $table->uuid('category_id'); // Foreign key ke tabel categories
            $table->text('description')->nullable(); // Deskripsi produk
            $table->string('color')->nullable(); // Warna produk
            $table->integer('stock')->default(0); // Stok produk
            $table->decimal('price_idr', 15, 2); // Harga dalam Rupiah
            $table->decimal('price_usd', 15, 2); // Harga dalam USD
            $table->timestamps(); // Kolom created_at dan updated_at

            // Menambahkan foreign key ke tabel categories
            $table->foreign('category_id')->references('id')->on('categories')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
