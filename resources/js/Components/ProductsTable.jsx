import { Link } from '@inertiajs/react';
import { useState } from 'react';
import { route } from 'ziggy-js';

export default function ProductsTable({ products }) {
    const [searchQuery, setSearchQuery] = useState('');

    // Filter products based on the search query
    const filteredProducts = products.filter(
        (product) =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.category.name
                .toLowerCase()
                .includes(searchQuery.toLowerCase()) ||
            product.color.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    return (
        <div>
            <div className="flex flex-col">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="inline-block min-w-full p-1.5 align-middle">
                        <div className="px-4 py-3">
                            <div className="relative max-w-xs">
                                <label
                                    htmlFor="hs-table-search"
                                    className="sr-only"
                                >
                                    Search
                                </label>
                                <input
                                    type="text"
                                    name="hs-table-search"
                                    id="hs-table-search"
                                    className="block w-full rounded-lg border-gray-200 px-3 py-2 ps-9 text-sm shadow-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50"
                                    placeholder="Search for items"
                                    value={searchQuery}
                                    onChange={(e) =>
                                        setSearchQuery(e.target.value)
                                    }
                                />
                                <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                                    <svg
                                        className="size-4 text-gray-400"
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
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <path d="m21 21-4.3-4.3"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="overflow-hidden">
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                                <thead className={'bg-gray-200'}>
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-start text-xs font-bold uppercase text-gray-500 dark:text-neutral-500"
                                        >
                                            Nama
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-start text-xs font-bold uppercase text-gray-500 dark:text-neutral-500"
                                        >
                                            Kategori
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-start text-xs font-bold uppercase text-gray-500 dark:text-neutral-500"
                                        >
                                            Warna
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-start text-xs font-bold uppercase text-gray-500 dark:text-neutral-500"
                                        >
                                            Stok
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-start text-xs font-bold uppercase text-gray-500 dark:text-neutral-500"
                                        >
                                            Harga IDR
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-start text-xs font-bold uppercase text-gray-500 dark:text-neutral-500"
                                        >
                                            Harga USD
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-start text-xs font-bold uppercase text-gray-500 dark:text-neutral-500"
                                        >
                                            Created At
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-start text-xs font-bold uppercase text-gray-500 dark:text-neutral-500"
                                        >
                                            Updated At
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-end text-xs font-bold uppercase text-gray-500 dark:text-neutral-500"
                                        >
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {filteredProducts.map((product) => (
                                        <Link
                                            key={product.id}
                                            href={route(
                                                'admin.detail.product',
                                                product.id,
                                            )}
                                        >
                                            <tr
                                                className={
                                                    'odd:bg-white even:bg-gray-100 hover:bg-gray-200'
                                                }
                                            >
                                                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                                                    {product.name}
                                                </td>
                                                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                                                    {product.category.name}
                                                </td>
                                                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                                                    {product.color}
                                                </td>
                                                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                                                    {product.stock}
                                                </td>
                                                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                                                    {product.price_idr}
                                                </td>
                                                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                                                    {product.price_usd}
                                                </td>
                                                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                                                    {product.created_at}
                                                </td>
                                                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                                                    {product.updated_at}
                                                </td>
                                                <td className="whitespace-nowrap px-6 py-4 text-end text-sm font-medium">
                                                    <button
                                                        type="button"
                                                        className="inline-flex items-center gap-x-2 rounded-lg border border-transparent text-sm font-semibold text-blue-600 hover:text-blue-800 focus:text-blue-800 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400"
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        </Link>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
