import Link from "next/link";
import SpikeAnimatedLine from "./ui/SpikeAnimatedLine";
import DashedAnimatedLine from "./ui/DashedAnimatedLine";
import CurlAnimatedLine from "./ui/CurlAnimatedLine";

export default function HeroSection() {
    return (
        <div className="relative py-20 md:py-32 my-10 md:my-20 flex items-center justify-center text-center">
            <div className="container">
                <h1 className="flex flex-wrap justify-center gap-4 px-4 font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-secondary text-center">
                    <Link
                        href="/services/#design"
                        className="relative px-4 sm:px-6 text-secondary no-underline duration-500 group"
                    >
                        Design
                        <SpikeAnimatedLine />
                    </Link>

                    <Link
                        href="/services/#development"
                        className="relative px-4 sm:px-6 text-secondary no-underline duration-500 group"
                    >
                        Development
                        <DashedAnimatedLine />
                    </Link>

                    <Link
                        href="/services/#maintainance"
                        className="relative px-4 sm:px-6 text-secondary no-underline duration-500 group"
                    >
                        Maintainance.
                        <CurlAnimatedLine />
                    </Link>
                </h1>
            </div>
        </div>
    );
}
