import Link from "next/link";

export default function BlogPost() {
    return (
        <>
            <div className="px-4 mt-96 pt-32 -mb-12 box-border text-secondary">
                <div className="relative w-full mb-14 box-border">
                    <Link href={""}
                    className="absolute t-0 left-5 right-5 bottom-0 z-10 transition-all duration-500">
                        <div className="block overflow-hidden md:mt-24 pt-[60%] mb-5">

                            <span className="box-border overflow-hidden block opacity-100 pb-44">
                                <img src="/cover.webp" alt="cover" className=" object-cover max-w-full max-h-full m-auto absolute block" />
                            </span>
                            
                                        {/* <div className="block m-0 p-0 box-border opacity-100 overflow-hidden">
                                    <img src="/branding.webp" alt="IMAGE" className="max-h-full max-w-full object-cover object-center duration-1000 transition-transform cursor-pointer ease-out block m-auto box-border " />
                                </div> */}

                        </div>

                        <div className="block sm:mt-12 lg:mt-0 md:mt-20 md:py-44 sm:py-12 lg:py-4">
                            <div className="mb-2 font-semibold">
                                <span className="relative z-10 text-accent">
                                How to
                                </span>
                                {/* <span className="relative z-10 text-accent">
                                How to    TODO:shoule be dynamic
                                </span> */}
                            </div>
                            <div className="text-xl font-semibold mb-2 leading-7 transition-all duration-500">
                                React Native app development — should you outsource it and how?
                            </div>
                            {/* <div className="text-xl font-semibold mb-2 leading-7 transition-all duration-500">
                                React Native app development — should you outsource it and how?
                            </div> TODO: Dynamic */}

                            <div className="block text-sm text-secondary opacity-80">
                                {/* <span className="text-sm">2025-04-04</span> TODO: DYNAMIC */}
                                <span className="text-sm">2025-04-04</span>
                                <span className="mx-2">•</span>
                                19 min read
                                {/* TODO: Dynamic 19 min read */}

                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}