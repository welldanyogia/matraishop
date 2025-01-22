import { MoveLeft, MoveRight, ShoppingCart } from 'lucide-react';
import { useState } from 'react';

export default function BestProducts({ products }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const productsPerPage = 5;

    // Fungsi untuk menggeser ke kiri
    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };

    // Fungsi untuk menggeser ke kanan
    const handleNext = () => {
        if (currentIndex < products.length - productsPerPage - currentIndex) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    return (
        <>
            <div
                className={
                    'flex w-full justify-center rounded-lg bg-white p-10'
                }
            >
                <div className={'relative w-3/5 overflow-hidden max-sm:w-full'}>
                    <div className={'flex justify-between p-2'}>
                        <div className={'text-2xl font-bold'}>Best Product</div>
                        <div className="flex gap-6">
                            <button
                                onClick={handlePrev}
                                disabled={currentIndex === 0}
                                className="group flex items-center justify-center rounded-full bg-[#F0F2F3] p-2 hover:bg-gray-800 disabled:opacity-50"
                            >
                                <MoveLeft
                                    className="text-[#1b1b1f] transition-colors group-hover:text-white"
                                    strokeWidth={1}
                                />
                            </button>
                            <button
                                onClick={handleNext}
                                disabled={
                                    currentIndex >=
                                    products.length - productsPerPage
                                }
                                className="group flex items-center justify-center rounded-full bg-[#F0F2F3] p-2 hover:bg-gray-800 disabled:opacity-50"
                            >
                                <MoveRight
                                    className="text-[#1b1b1f] transition-colors group-hover:text-white"
                                    strokeWidth={1}
                                />
                            </button>
                        </div>
                    </div>
                    <div
                        className="relative flex gap-4 p-6 transition-transform duration-300 ease-in-out"
                        style={{
                            transform: `translateX(-${currentIndex * (100 / productsPerPage)}%)`,
                            width: `${(products.length / productsPerPage) * 100}%`,
                        }}
                    >
                        {products.map((product, index) => (
                            <div
                                key={product.id}
                                className="group flex flex-col rounded-xl border bg-white p-2 shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-md sm:w-[50%] md:w-[33.33%] lg:w-[25%] xl:w-[20%]"
                            >
                                <img
                                    className="h-auto w-full rounded-xl transition-transform duration-300 ease-in-out group-hover:scale-105"
                                    src="/library-school.png"
                                    alt={product.name}
                                />
                                <div className="p-2">
                                    <div className="flex items-center justify-between gap-2">
                                        <div>
                                            <h3 className="hover:underlined text-lg font-bold text-gray-800 transition-colors duration-300 hover:text-blue-400 group-hover:text-blue-400">
                                                {product.name} {index}
                                            </h3>
                                            <p className="group-hover:text-md text-xs text-gray-500 transition-colors duration-300 group-hover:font-bold">
                                                USD {product.price_usd}
                                            </p>
                                        </div>
                                        <button className="group flex items-center justify-center rounded-md bg-black p-2 transition-transform duration-300 hover:scale-110 hover:bg-[#F1F1E9] group-hover:bg-[#F1F1E9] max-sm:p-1 lg:p-2">
                                            <ShoppingCart
                                                className="h-5 w-5 text-white transition-colors duration-300 group-hover:text-black sm:h-6 sm:w-6"
                                                strokeWidth={2}
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
