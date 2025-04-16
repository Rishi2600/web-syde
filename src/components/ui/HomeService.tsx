import Link from "next/link";

export default function HomeService() {
    return (
        <>
            <div className="px-6 flex flex-col w-3/12 mb-12 relative min-h-80 box-border text-secondary">
                <Link href={"should-be-dynamic-as-a-prop"}>  
                <span className="origin-center duration-1000 opacity-0 hover:opacity-80 ease-out">
                    <img src="/websites-dark.webp" alt="Website image" className="m-auto border-none absolute box-border max-h-full max-w-full object-cover" />
                </span>

                <span className="flex flex-col flex-wrap"> 
                <h3 className="text-3xl font-medium min-h-16 leading-9 mb-7">Websites and Platform</h3>
                <p className="mb-6 opacity-80 leading-normal">We are ready to work on projects of any complexity and size. With our software development company’s profound design experience, we can create both one-page sites and complex admin panels with several dashboards.</p>
                </span>
            </Link>
            </div>
        </>
    )
}