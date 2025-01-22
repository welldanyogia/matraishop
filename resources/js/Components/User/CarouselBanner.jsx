export default function CarouselBanner() {
    return (
        <>
            <div className="flex w-full items-center justify-center rounded-lg bg-white p-10">
                <div className={'w-1/2 max-sm:w-full'}>
                    <img src={'/banner.png'} />
                </div>
                {/*            <div*/}
                {/*                data-hs-carousel='{*/}
                {/*  "loadingClasses": "opacity-0",*/}
                {/*  "dotsItemClasses": "hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer"*/}
                {/*}'*/}
                {/*                className="relative"*/}
                {/*            >*/}
                {/*                <div className="hs-carousel relative min-h-64 w-full overflow-hidden rounded-lg bg-white">*/}
                {/*                    <div className="hs-carousel-body absolute bottom-0 start-0 top-0 flex flex-nowrap opacity-0 transition-transform duration-700">*/}
                {/*                        <div className="hs-carousel-slide">*/}
                {/*                            <div className="flex h-full justify-center bg-gray-800 p-6">*/}
                {/*                                <img*/}
                {/*                                    src={'/matrai-logo.png'}*/}
                {/*                                />*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                        <div className="hs-carousel-slide">*/}
                {/*                            <div className="flex h-full justify-center bg-gray-800 p-6">*/}
                {/*                                <span className="self-center text-4xl text-white transition duration-700">*/}
                {/*                                    Second slide*/}
                {/*                                </span>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                        <div className="hs-carousel-slide">*/}
                {/*                            <div className="flex h-full justify-center bg-gray-800 p-6">*/}
                {/*                                <span className="self-center text-4xl text-white transition duration-700">*/}
                {/*                                    Third slide*/}
                {/*                                </span>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}

                {/*                <button*/}
                {/*                    type="button"*/}
                {/*                    className="hs-carousel-prev absolute inset-y-0 start-0 inline-flex h-full w-[46px] items-center justify-center rounded-s-lg text-gray-800 hover:bg-gray-800/10 focus:bg-gray-800/10 focus:outline-none disabled:pointer-events-none hs-carousel-disabled:opacity-50"*/}
                {/*                >*/}
                {/*                    <span className="text-2xl" aria-hidden="true">*/}
                {/*                        <svg*/}
                {/*                            className="size-5 shrink-0"*/}
                {/*                            xmlns="http://www.w3.org/2000/svg"*/}
                {/*                            width="24"*/}
                {/*                            height="24"*/}
                {/*                            viewBox="0 0 24 24"*/}
                {/*                            fill="none"*/}
                {/*                            stroke="currentColor"*/}
                {/*                            strokeWidth="2"*/}
                {/*                            strokeLinecap="round"*/}
                {/*                            strokeLinejoin="round"*/}
                {/*                        >*/}
                {/*                            <path d="m15 18-6-6 6-6"></path>*/}
                {/*                        </svg>*/}
                {/*                    </span>*/}
                {/*                    <span className="sr-only">Previous</span>*/}
                {/*                </button>*/}
                {/*                <button*/}
                {/*                    type="button"*/}
                {/*                    className="hs-carousel-next absolute inset-y-0 end-0 inline-flex h-full w-[46px] items-center justify-center rounded-e-lg text-gray-800 hover:bg-gray-800/10 focus:bg-gray-800/10 focus:outline-none disabled:pointer-events-none hs-carousel-disabled:opacity-50"*/}
                {/*                >*/}
                {/*                    <span className="sr-only">Next</span>*/}
                {/*                    <span className="text-2xl" aria-hidden="true">*/}
                {/*                        <svg*/}
                {/*                            className="size-5 shrink-0"*/}
                {/*                            xmlns="http://www.w3.org/2000/svg"*/}
                {/*                            width="24"*/}
                {/*                            height="24"*/}
                {/*                            viewBox="0 0 24 24"*/}
                {/*                            fill="none"*/}
                {/*                            stroke="currentColor"*/}
                {/*                            strokeWidth="2"*/}
                {/*                            strokeLinecap="round"*/}
                {/*                            strokeLinejoin="round"*/}
                {/*                        >*/}
                {/*                            <path d="m9 18 6-6-6-6"></path>*/}
                {/*                        </svg>*/}
                {/*                    </span>*/}
                {/*                </button>*/}

                {/*                <div className="hs-carousel-pagination absolute bottom-3 end-0 start-0 flex justify-center space-x-2"></div>*/}
                {/*            </div>*/}
            </div>
        </>
    );
}
