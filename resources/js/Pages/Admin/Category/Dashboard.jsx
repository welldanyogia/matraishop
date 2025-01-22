import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Category
                </h2>
            }
        >
            <Head title="Category" />

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
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            {/*<TransactionChart />*/}
                            Category
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
