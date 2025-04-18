import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Button from "@/components/ui/Button";
import PageTitle from "@/components/ui/PageTitle";
import ProjectListItem from "@/components/ui/ProjectListItem";


export default function DesignProjects() {
    
    

    return (
        <>
            <Navbar />
            <PageTitle />

            {/* PageITEMS: TODO: DYNAMIC */}
            <div className="block pb-20">
                <div className="container">
                    <div className="grid grid-flow-row gap-4 w-full relative lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                        <ProjectListItem />
                        <ProjectListItem />
                        <ProjectListItem />
                        <ProjectListItem />
                        <ProjectListItem />
                        <ProjectListItem />
                        <ProjectListItem />
                        <ProjectListItem />
                    </div>
                </div>
            </div>
            
            <div className="mt-7 text-center">
                <Button children={"Show More"} variant={"outline"} />
            </div>
            <Footer />
        </>
    )
}