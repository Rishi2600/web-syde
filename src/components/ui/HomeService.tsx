import Link from "next/link";

interface ServiceComp {
    title: string;
    description: string;
    image: string;
    link: string;
}


// Make this Component Impressive as well as dynamic!

export default function HomeService({title, description, image, link}: ServiceComp) {
    return (
        <>
        {/* TODO: HAVE A LOOK AND LET ME KNOW IF ANYTHING WE CAN IMPROVE HERE
        Make the 2nd child or nth child whatever its called should be invisible. */}
            <div className="px-6 flex flex-col basis-3/6 mb-12 relative min-h-80 box-border text-secondary">
                <Link href={link}>  
                <span className="origin-center duration-1000 opacity-0 hover:opacity-80 ease-out">
                    {/* <img src="/websites-dark.webp" alt="Website image" className="m-auto border-none absolute box-border max-h-full max-w-full object-cover" /> */}
                    <img src={image} alt="Website image" className="m-auto border-none absolute box-border max-h-full max-w-full object-cover" />
                </span>

                <span className="flex flex-col flex-wrap hover:invisible"> 
                {/* <h3 className="text-3xl font-medium min-h-16 leading-9 mb-7">Websites and Platform</h3> */}
                <h3 className="text-3xl font-medium min-h-16 leading-9 mb-7">{title}</h3>
                {/* <p className="mb-6 opacity-80 leading-normal">We are ready to work on projects of any complexity and size. With our software development company’s profound design experience, we can create both one-page sites and complex admin panels with several dashboards.</p> */}
                <p className="mb-6 opacity-80 leading-normal">{description}</p>
                </span>
            </Link>
            </div>
        </>
    )
}