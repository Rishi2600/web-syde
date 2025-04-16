import Button from "./ui/Button";

export default function Services() {
    return (
        <>
            <div className="block">
                <div className="box-border py-16 relative text-secondary">
                    <div className="container">
                        <div className="flex -mx-11 flex-wrap ">

                            <div className="w-2/5 px-11">
                                <div className="delay-0 opacity-100 transform-none origin-center transition-all duration-1000">
                                    <h2 className="font-medium text-4xl">
                                        <span className="block text-base -mt-12 mb-9">01</span>
                                        Design
                                    </h2>
                                </div>
                            </div>

                            <div className="w-3/5 px-11 box-border">
                                <div className="text-2xl leading-normal mt-12 mb-10 transform-none opacity-100 origin-center">
                                    <span className="text-2xl leading-normal">We work hard to create eye-catching and intuitive interface designs that provide users with an enjoyable experience.</span>
                                </div>
                                <div className="transform-none opacity-100 origin-center">
                                    <Button children={"View More"} variant="outline" />
                                </div>
                                <div>
                                    WEBSITES AND PLATFORM
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}