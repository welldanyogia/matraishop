<?php

namespace App\Http\Controllers\Admin\Product;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use Inertia\Inertia;

class AddProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Admin/Product/AddProduct/Dashboard',[]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        Log::info('Memulai proses penyimpanan produk.');

        // Validasi input
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'category_name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'color' => 'nullable|string|max:50',
            'stock' => 'required|integer|min:0',
            'price_idr' => 'required|numeric|min:0',
            'price_usd' => 'required|numeric|min:0',
//            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        try {
            Log::info('Validasi berhasil.', ['data' => $validatedData]);

            // Cari atau buat kategori berdasarkan nama
            $category = Category::firstOrCreate(
                ['name' => $validatedData['category_name']],
                ['id' => (string) \Illuminate\Support\Str::uuid()]
            );

            Log::info('Kategori diproses.', ['category' => $category]);

            // Upload gambar jika tersedia
//            $imagePath = null;
//            if ($request->hasFile('image')) {
//                $image = $request->file('image');
//                $imagePath = $image->store('products', 'public');
//                Log::info('File gambar berhasil diunggah.', ['path' => $imagePath]);
//            }

            // Simpan produk ke database
            $product = \App\Models\Product::create([
                'id' => (string) Str::uuid(),
                'name' => $validatedData['name'],
                'category_id' => $category->id,
                'description' => $validatedData['description'] ?? null,
                'color' => $validatedData['color'] ?? null,
                'stock' => $validatedData['stock'],
                'price_idr' => $validatedData['price_idr'],
                'price_usd' => $validatedData['price_usd'],
//                'image_path' => $imagePath ? asset('storage/' . $imagePath) : null,
            ]);

            Log::info('Produk berhasil disimpan.', ['product' => $product]);

            return response()->json([
                'message' => 'Produk berhasil ditambahkan.',
                'product' => $product,
            ], 201);
        } catch (\Exception $e) {
            Log::error('Terjadi kesalahan saat menyimpan produk.', ['error' => $e->getMessage()]);

            return response()->json([
                'message' => 'Terjadi kesalahan saat menyimpan produk.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }


    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    public function storeImage(Request $request)
    {
        Log::info('Memulai proses upload gambar.');

        // Validasi input
        $validatedData = $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        try {
            Log::info('Validasi berhasil.', ['data' => $validatedData]);

            // Periksa apakah file gambar ada
            if ($request->hasFile('image')) {
                $image = $request->file('image');
                Log::info('File gambar ditemukan.', ['original_name' => $image->getClientOriginalName()]);

                // Simpan file ke folder storage
                $imagePath = $image->store('products', 'public');
                Log::info('File berhasil disimpan.', ['path' => $imagePath]);

                return response()->json([
                    'message' => 'Gambar berhasil diunggah.',
                    'image_path' => asset('storage/' . $imagePath),
                ], 201);
            }

            Log::warning('File gambar tidak ditemukan dalam permintaan.');

            return response()->json(['message' => 'Gambar tidak ditemukan.'], 400);
        } catch (\Exception $e) {
            Log::error('Terjadi kesalahan saat mengunggah gambar.', ['error' => $e->getMessage()]);

            return response()->json([
                'message' => 'Terjadi kesalahan.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }


}
