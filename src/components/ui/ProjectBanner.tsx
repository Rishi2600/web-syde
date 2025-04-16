import Button from "./Button";

export default function ProjectBanner() {
    return (
        <>
            <div className="max-h-screen bg-accent text-white overflow-hidden top-24 py-32 relative right-0 left-0 box-border">
                <div className="container">
                    <div className="max-w-fit m-auto flex flex-col items-center">
                        <h3 className="text-4xl leading-normal font-medium mb-8">Calculate Project Time</h3>
                        <p className="leading-normal mb-8 text-base">Here you can get a rough estimate of your future product and set budget frames.</p>
                        <Button children={"Start"} variant={"outline"} className={"block relative hover:bg-[#74ccf4] w-full"} />
                    </div>
                </div>
            </div>
        </>
    )
}