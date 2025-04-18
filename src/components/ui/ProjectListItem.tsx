import Link from "next/link";

export default function ProjectList() {
    return (
        <>
            <div className="relative">
                <Link href={"#"} className="transition-all duration-500">
                    <div className=" absolute m-0 p-0 box-border opacity-100 overflow-hidden">
                        <img src="/branding.wepb" alt="IMAGE" className="min-h-full min-w-full object-cover object-center duration-1000 transition-transform cursor-pointer ease-out block m-auto p-0 box-border absolute " />
                    </div>
                </Link>
            </div>
        </>
    )
}