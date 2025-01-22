import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router } from "@inertiajs/react";
import axios from 'axios';
import { useState } from 'react';
import Toastify from 'toastify-js';
import { route } from "ziggy-js";

export default function Dashboard() {
    const [src, setSrc] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        category_name: '',
        description: '',
        color: '',
        stock: 0,
        price_idr: 0,
        price_usd: 0,
    });

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //
    //     try {
    //         const response = await fetch('/admin/product/add-product/store', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(formData),
    //         });
    //
    //         const result = await response.json();
    //         if (response.ok) {
    //             alert(result.message);
    //             // Optionally reset form or perform other actions after success
    //         } else {
    //             alert(result.message);
    //         }
    //     } catch (error) {
    //         console.error('Error submitting form', error);
    //         alert('Terjadi kesalahan saat menyimpan produk.');
    //     }
    // };
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Log the form data to ensure it's correct before sending
        console.log('Form data:', formData);

        try {
            // Send the POST request using axios
            const response = await axios.post(
                '/admin/product/add-product/store',
                formData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                },
            );

            // Log the response to debug
            console.log('Response:', response);

            // Check if the response is OK and handle accordingly
            if (response.status === 201) {
                // Success toast message
                Toastify({
                    text: `<div class="flex p-4">
                      <p class="text-sm text-gray-700">${response.data.message}</p>
                    </div>`,
                    className:
                        'hs-toastify-on:opacity-100 opacity-0 fixed -top-[150px] right-[20px] z-[90] transition-all duration-300 w-[320px] bg-green-100 text-sm text-gray-700 border border-gray-200 rounded-xl shadow-lg [&>.toast-close]:hidden',
                    duration: 3000,
                    close: true,
                    escapeMarkup: false,
                }).showToast();
                router.get(route('admin.product.dashboard'));
                // Optionally reset form or perform other actions after success
            } else {
                Toastify({
                    text: `<div class="flex p-4">
                      <p class="text-sm text-gray-700">${response.data.message}</p>
                    </div>`,
                    className:
                        'hs-toastify-on:opacity-100 opacity-0 fixed -top-[150px] right-[20px] z-[90] transition-all duration-300 w-[320px] bg-red-100 text-sm text-gray-700 border border-gray-200 rounded-xl shadow-lg [&>.toast-close]:hidden',
                    duration: 3000,
                    close: true,
                    escapeMarkup: false,
                }).showToast();
            }
        } catch (error) {
            // Log the error details for debugging
            console.error('Error submitting form:', error);

            // Check if the error is an axios error
            if (error.response) {
                // If response exists, log more details from the error
                console.error('Error response data:', error.response.data);
                console.error('Error response status:', error.response.status);
                console.error(
                    'Error response headers:',
                    error.response.headers,
                );
                Toastify({
                    text: `<div class="flex p-4">
                      <p class="text-sm text-gray-700">${error.response.data.message}</p>
                    </div>`,
                    className:
                        'hs-toastify-on:opacity-100 opacity-0 fixed -top-[150px] right-[20px] z-[90] transition-all duration-300 w-[320px] bg-red-100 text-sm text-gray-700 border border-gray-200 rounded-xl shadow-lg [&>.toast-close]:hidden',
                    duration: 3000,
                    close: true,
                    escapeMarkup: false,
                }).showToast();
            } else if (error.request) {
                // If no response was received
                console.error('Error request data:', error.request);
            } else {
                // For other errors
                console.error('Error message:', error.message);
                Toastify({
                    text: `<div class="flex p-4">
                      <p class="text-sm text-gray-700">${error.message}</p>
                    </div>`,
                    className:
                        'hs-toastify-on:opacity-100 opacity-0 fixed -top-[150px] right-[20px] z-[90] transition-all duration-300 w-[320px] bg-red-100 text-sm text-gray-700 border border-gray-200 rounded-xl shadow-lg [&>.toast-close]:hidden',
                    duration: 3000,
                    close: true,
                    escapeMarkup: false,
                }).showToast();
            }

            // Show a generic error alert
            alert('Terjadi kesalahan saat menyimpan produk.');
        }
    };

    function previewImage(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                // document.getElementById('previewContainer').style.display =
                //     'block';
                // document.getElementById('imagePreview').src = e.target.result;
                setSrc(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    }

    function clearImage() {
        // const input = document.getElementById('imageUpload');
        // const previewContainer = document.getElementById('previewContainer');
        // const imagePreview = document.getElementById('imagePreview');
        // input.value = '';
        // previewContainer.style.display = 'none';
        // imagePreview.src = '';
        setSrc(null);
    }

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Add Product
                </h2>
            }
        >
            <Head title="Add Product" />

            <div className="py-12">
                <div className="mx-auto space-y-6 sm:px-6 lg:px-8">
                    {/*<div className="grid grid-cols-12 gap-4">*/}
                    {/*    <div className="col-span-3 overflow-hidden bg-white p-6 shadow-sm max-sm:col-span-12 sm:rounded-lg dark:bg-neutral-800 dark:text-white">*/}
                    {/*        <div className={'text-xl'}>Total Users</div>*/}
                    {/*        <div className={'text-2xl font-bold'}>*/}
                    {/*            1000 Users*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="col-span-3 overflow-hidden bg-white p-6 shadow-sm max-sm:col-span-12 sm:rounded-lg dark:bg-neutral-800 dark:text-white">*/}
                    {/*        <div className={'text-xl'}>Total Users</div>*/}
                    {/*        <div className={'text-2xl font-bold'}>*/}
                    {/*            1000 Users*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="col-span-3 overflow-hidden bg-white p-6 shadow-sm max-sm:col-span-12 sm:rounded-lg dark:bg-neutral-800 dark:text-white">*/}
                    {/*        <div className={'text-xl'}>Total Users</div>*/}
                    {/*        <div className={'text-2xl font-bold'}>*/}
                    {/*            1000 Users*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="col-span-3 overflow-hidden bg-white p-6 shadow-sm max-sm:col-span-12 sm:rounded-lg dark:bg-neutral-800 dark:text-white">*/}
                    {/*        <div className={'text-xl'}>Total Users</div>*/}
                    {/*        <div className={'text-2xl font-bold'}>*/}
                    {/*            1000 Users*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className="space-y-6 overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 font-bold text-gray-900">
                            {/*<TransactionChart />*/}
                            Add New Product
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-4 overflow-hidden p-2 shadow-sm sm:rounded-lg">
                        <div className="col-span-8 rounded border border-gray-300 bg-white font-bold text-gray-900">
                            <div
                                className={
                                    'border-b-2 border-gray-400 px-6 py-2'
                                }
                            >
                                Product Info
                            </div>
                            <div className={'space-y-4 p-6'}>
                                {/*<div id="upload-container" className="dropzone">*/}
                                {/*    <div className="dz-message">*/}
                                {/*        <button className="inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-3 py-2 text-xs font-medium text-white hover:bg-blue-700 focus:bg-blue-700">*/}
                                {/*            <svg*/}
                                {/*                className="size-4 shrink-0"*/}
                                {/*                xmlns="http://www.w3.org/2000/svg"*/}
                                {/*                width="24"*/}
                                {/*                height="24"*/}
                                {/*                viewBox="0 0 24 24"*/}
                                {/*                fill="none"*/}
                                {/*                stroke="currentColor"*/}
                                {/*                strokeWidth="2"*/}
                                {/*                strokeLinecap="round"*/}
                                {/*                strokeLinejoin="round"*/}
                                {/*            >*/}
                                {/*                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>*/}
                                {/*                <polyline points="17 8 12 3 7 8"></polyline>*/}
                                {/*                <line*/}
                                {/*                    x1="12"*/}
                                {/*                    x2="12"*/}
                                {/*                    y1="3"*/}
                                {/*                    y2="15"*/}
                                {/*                ></line>*/}
                                {/*            </svg>*/}
                                {/*            Upload photo*/}
                                {/*        </button>*/}
                                {/*        <p className="text-gray-400">*/}
                                {/*            Drag and drop files here or click to*/}
                                {/*            upload.*/}
                                {/*        </p>*/}
                                {/*    </div>*/}
                                {/*</div>*/}

                                <div>
                                    <label>Gambar</label>
                                    <div className="flex flex-wrap items-center gap-3 sm:gap-5">
                                        <div className="group">
                                            <label
                                                htmlFor="imageUpload"
                                                className="flex size-40 shrink-0 cursor-pointer items-center justify-center border-2 border-dotted border-gray-300 text-gray-400 hover:bg-gray-50 group-has-[div]:hidden dark:border-neutral-700 dark:text-neutral-600 dark:hover:bg-neutral-700/50"
                                            >
                                                {src ? (
                                                    <img
                                                        src={src}
                                                        alt="Preview"
                                                        className="size-20 w-full object-cover"
                                                    />
                                                ) : (
                                                    <svg
                                                        className="size-7 shrink-0"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <circle
                                                            cx="12"
                                                            cy="12"
                                                            r="10"
                                                        ></circle>
                                                        <circle
                                                            cx="12"
                                                            cy="10"
                                                            r="3"
                                                        ></circle>
                                                        <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"></path>
                                                    </svg>
                                                )}
                                            </label>
                                            <input
                                                type="file"
                                                id="imageUpload"
                                                name="image"
                                                accept="image/*"
                                                className="hidden"
                                                onChange={(event) => {
                                                    previewImage(event);
                                                }}
                                            />
                                        </div>

                                        <div className="grow">
                                            <div className="flex items-center gap-x-2">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-3 py-2 text-xs font-medium text-white hover:bg-blue-700 focus:bg-blue-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                                                    onClick={() => {
                                                        document
                                                            .getElementById(
                                                                'imageUpload',
                                                            )
                                                            .click();
                                                    }}
                                                >
                                                    <svg
                                                        className="size-4 shrink-0"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                                        <polyline points="17 8 12 3 7 8"></polyline>
                                                        <line
                                                            x1="12"
                                                            x2="12"
                                                            y1="3"
                                                            y2="15"
                                                        ></line>
                                                    </svg>
                                                    Upload photo
                                                </button>
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center gap-x-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-semibold text-gray-500 shadow-sm hover:bg-gray-50 focus:bg-gray-50 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                                                    onClick={(event) => {
                                                        clearImage(event);
                                                    }}
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="max-w-sm">
                                        <label
                                            htmlFor="name"
                                            className="mb-2 block text-sm font-medium"
                                        >
                                            Nama
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500"
                                        />
                                    </div>
                                    <div className="max-w-sm">
                                        <label
                                            htmlFor="category_name"
                                            className="mb-2 block text-sm font-medium"
                                        >
                                            Kategori
                                        </label>
                                        <input
                                            type="text"
                                            id="category_name"
                                            name="category_name"
                                            value={formData.category_name}
                                            onChange={handleInputChange}
                                            className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="description"
                                            className="mb-2 block text-sm font-medium"
                                        >
                                            Deskripsi
                                        </label>
                                        <textarea
                                            id="description"
                                            name="description"
                                            value={formData.description}
                                            onChange={handleInputChange}
                                            className="block w-full rounded-lg border-transparent bg-gray-100 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500"
                                            rows="3"
                                            placeholder="This is a Product Description"
                                        />
                                    </div>
                                    <div className="max-w-sm">
                                        <label
                                            htmlFor="color"
                                            className="mb-2 block text-sm font-medium"
                                        >
                                            Warna
                                        </label>
                                        <input
                                            type="text"
                                            id="color"
                                            name="color"
                                            value={formData.color}
                                            onChange={handleInputChange}
                                            className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500"
                                        />
                                    </div>
                                    <div className="max-w-sm">
                                        <label
                                            htmlFor="stock"
                                            className="mb-2 block text-sm font-medium"
                                        >
                                            Stok
                                        </label>
                                        <input
                                            type="number"
                                            id="stock"
                                            name="stock"
                                            value={formData.stock}
                                            onChange={handleInputChange}
                                            className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500"
                                        />
                                    </div>
                                    <div className="max-w-sm">
                                        <label
                                            htmlFor="price_usd"
                                            className="mb-2 block text-sm font-medium"
                                        >
                                            Harga (USD)
                                        </label>
                                        <input
                                            type="number"
                                            id="price_usd"
                                            name="price_usd"
                                            value={formData.price_usd}
                                            onChange={handleInputChange}
                                            className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500"
                                            placeholder="0.00"
                                        />
                                    </div>
                                    <div className="max-w-sm">
                                        <label
                                            htmlFor="price_idr"
                                            className="mb-2 block text-sm font-medium"
                                        >
                                            Harga (Rupiah)
                                        </label>
                                        <input
                                            type="number"
                                            id="price_idr"
                                            name="price_idr"
                                            value={formData.price_idr}
                                            onChange={handleInputChange}
                                            className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500"
                                            placeholder="0.00"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="mt-4 w-full rounded-lg bg-blue-500 px-4 py-2 text-white"
                                    >
                                        Simpan Produk
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="col-span-4 rounded border border-gray-300 bg-white p-6 font-bold text-gray-900">
                            {/*<TransactionChart />*/}
                            Add New Product
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
