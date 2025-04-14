import Link from "next/link";
import SpikeAnimatedLine from "./ui/SpikeAnimatedLine";
import DashedAnimatedLine from "./ui/DashedAnimatedLine";


export default function HeroSection() {
    return (
        <>
            <div className="relative py-32 my-20 items-center justify-center text-center">
                <div className="container">
                    <h1 className=" text-center mb-8 flex px-2 pl-3 font-medium leading-normal text-6xl my-10 tracking-tight text-secondary">
                        <Link href={"/services/#design"}
                        className="leading-snug px-7 mb-6 text-secondary no-underline duration-500 group">Design
                                {/* <SpikeAnimatedLine /> */}
                                <SpikeAnimatedLine />
                        </Link>
                        <Link href={"/services/#development"}
                        className="leading-snug mb-8 px-8 text-secondary no-underline duration-500 group">Development
                                <DashedAnimatedLine />
                        </Link>
                        <Link href={"/services/#maintainance"}
                        className="leading-snug mb-8 px-6 text-secondary no-underline duration-500 group">Maintainance.
                                <DashedAnimatedLine />
                        </Link>
                    </h1>
                </div>
            </div>
        </>
    )
}