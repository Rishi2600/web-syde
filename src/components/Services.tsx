import Button from "./ui/Button";
import HomeService from "./ui/HomeService";

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
                                <div className="mt-28 -mx-6 flex flex-wrap opacity-100 transform-none origin-center">
                                    <HomeService link={"#"} title={"Websites and Platforms"} description={"We are ready to work on projects of any complexity and size. With our software development company’s profound design experience, we can create both one-page sites and complex admin panels with several dashboards."} image={"/websites-n-platforms.webp"}  />
                                    <HomeService link={"#"} title={"Mobile Apps"} description={"We create interfaces that are not only good-looking, but also simple and easy to use. We also follow platform guidelines to make sure the design runs on every screen."} image={"/mobile-apps.webp"} />
                                    <HomeService link={"#"} title={"Strategy and Branding"} description={"We develop logos, corporate identities, user manuals, mockups, and souvenirs consistent with your brand’s style and mission."} image={"/branding.webp"} />
                                    <HomeService link={"#"} title={"Design Concepts"} description={"We will create a design concept that will become a solid foundation for the future digital product. Well-built design concepts help to turn awesome business ideas into attractive and eye-catching apps and sites."} image={"concept.webp"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}