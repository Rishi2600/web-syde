import Image from "next/image";
import Link from "next/link";

export default function ProjectListItem() {
    return (
        <>
            <div className="relative">
                <Link href={"#"} className="block transition-all duration-500">
                    <div className="block m-0 p-0 box-border opacity-100 overflow-hidden">
                        <img src="/branding.webp" alt="IMAGE" className="max-h-full max-w-full object-cover object-center duration-1000 transition-transform cursor-pointer ease-out block m-auto box-border " />
                    </div>
                </Link>
            </div>
        </>
    )
}