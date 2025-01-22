import ProductsTable from '@/Components/ProductsTable.jsx';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { route } from 'ziggy-js';

export default function Dashboard({ products }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Product
                </h2>
            }
        >
            <Head title="Product" />

            <div className="py-12">
                <div className="mx-auto space-y-6 sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            {/*<TransactionChart />*/}
                            <div className={'flex w-full justify-between'}>
                                <div>Product</div>
                                <Link
                                    type="button"
                                    href={route('admin.addProduct')}
                                    className="inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-gray-500 px-4 py-3 text-sm font-medium text-white hover:bg-gray-600 focus:bg-gray-600 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                                >
                                    Add Product
                                </Link>
                            </div>
                            <ProductsTable products={products} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
