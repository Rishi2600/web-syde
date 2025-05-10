import Button from "./ui/Button";


export default function WhatweDo() {
    return (
        <>
            <div className="py-16 relative box-border text-secondary">
                <div className="container">

                    <div className=" transform origin-bottom transition-all ease-linear ">
                        <h2 className="mb-9 text-base font-normal leading-6">What We Do</h2>

                        <div className="flex -mx-11 flex-wrap">
                            {/* FIX THIS FOR MOBILE-SCREEN  */}
                            <div className="col-[65%] py-0 px-11 box-border">
                                <p className="mb-5 text-4xl font-semibold leading-normal">Web Syde is a software development company that provides professional IT services for entrepreneurs and companies around the world.
                                </p>
                            </div>

                            <div className="col-[35%] py-0 px-11 box-border">
                                <p className="mb-4 font-normal  text-lg">We have been designing, developing, and maintaining apps since 2022.</p>

                                <p className="mb-4 font-normal py-0 px-11 text-lg">Our goal is to create software solutions that match our clients’ needs and expectations. Gaurav IT workflow is based on analytics and agile methodology that help us to provide high-quality IT services to small businesses and startups.</p>
                            </div>
                        </div>

                        <span className="inline-block mt-4">
                            <Button variant={"outline"}>
                                View More
                            </Button>
                        </span>

                    </div>
                </div>
            </div>
        </>
    )
}