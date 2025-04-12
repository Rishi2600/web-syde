import Link from "next/link";

export default function HeroSection() {
    return (
        <>
            <div className="flex h-screen pointer-events-none items-center justify-center relative z-10 flex-col text-center text-red-500 bg-red-100">
                <div className="my-0 mx-auto box-border w-full">
                    <h1 className="font-bold size-6 inline-block bg-red-300 text-center cursor-pointer mb-7">
                        <Link href={"/services/design"}
                        className="">
                            Design
                        </Link>
                        HELLO
                    </h1>
                </div>
            </div>
        </>
    )
}