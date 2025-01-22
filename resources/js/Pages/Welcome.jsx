import BestProducts from '@/Components/User/BestProducts.jsx';
import CarouselBanner from '@/Components/User/CarouselBanner.jsx';
import HeaderUser from '@/Components/User/HeaderUser.jsx';
import { Head } from '@inertiajs/react';
import TopCategories from "@/Components/User/TopCategories.jsx";

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
    products,
}) {
    console.log(auth.user);
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Home" />
            <HeaderUser auth={auth} />
            <CarouselBanner />
            <BestProducts id="best-products" products={products} />
            <TopCategories id="top-categories" products={products} />
        </>
    );
}
