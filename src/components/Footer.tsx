import Link from "next/link";
import DashedAnimatedLine from "./ui/DashedAnimatedLine";

export default function Footer() {
    return (
        <>
            <div className="block">
                <div className="relative box-border py-16 leading-normal text-secondary">
                    <div className="container">

                        <div className="flex flex-col justify-center items-start box-border text-secondary">
                            <div className="text-lg mb-7 font-normal leading-6">Contacts</div>
                            <div className="mb-8 font-semibold leading-normal text-7xl tracking-tight ">
                                <Link href={"/contact/#"}
                                className="leading-snug mb-8 no-underline duration-500 group">Get In Touch
                                    <DashedAnimatedLine />
                                </Link>
                            </div>
                        </div>

                        {/* 1 more div here  */}

                        <div className="mt-16 mb-16 leading-normal">

                            <div className="-mx-3 flex flex-wrap justify-between w-8/12">

                                <div className="px-3 col-[25%] box-border flex flex-col">
                                    <strong className="text-base block mb-3 font-medium">Call</strong>
                                    <Link href={"#"} className="inline-block transition-all duration-500 opacity-50 hover:opacity-100 hover:text-accent mb-2">+91 7633-810-278</Link>
                                </div>

                                <div className="px-[10px] col-[25%] box-border flex flex-col">
                                <strong className="text-base block mb-3 font-medium">Write</strong>
                                    <div className="block">
                                    <Link href={"#"} className="inline-block transition-all duration-500 opacity-50 hover:opacity-100 hover:text-accent mb-2"> hello@gaurav.com</Link>
                                    </div>
                                    <div className="block">
                                    <Link href={"#"} className="inline-block transition-all duration-500 opacity-50 hover:opacity-100 hover:text-accent mb-2">Telegram</Link>
                                    </div>
                                    <div className="block">
                                    <Link href={"#"} className="inline-block transition-all duration-500 opacity-50 hover:opacity-100 hover:text-accent mb-2"> Whatsapp</Link>
                                    </div>
                                </div>

                                <div className="px-3 col-[25%] box-border flex flex-col">
                                    <strong className="text-base block mb-3 font-medium">Legal Address</strong>
                                    <Link href={"#"} className="inline-block transition-all duration-500 opacity-50 hover:opacity-100 hover:text-accent mb-2">
                                    2186 <br />
                                    Sector 23 <br />
                                    Gurgaon, India 
                                    </Link>
                                </div>

                            </div>
                        </div>


                        {/* 1 More div here- Social */}

                        <div className=" flex flex-wrap text-sm justify-between mt-8 opacity-50">
                            <div className="relative">
                                © 2025 &nbsp;
                                <Link href={"#"} className="transition-all duration-500 decoration-[0.5px] underline underline-offset-4  hover:text-accent mb-2">
                                    Gaurav IT — Software Development Company.
                                </Link>
                                    <br />
                                    All rights reserved.


                            </div>

                            <div className="relative">
                                    <Link href={"#"} className="transition-all duration-500 decoration-[0.5px] underline underline-offset-4 mx-6 hover:text-accent mb-2">
                                    Public Offer Agreement
                                    </Link>
                                    <Link href={"#"} className="transition-all duration-500 decoration-[0.5px] underline underline-offset-4  hover:text-accent mb-2">
                                    Privacy Policy
                                    </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}