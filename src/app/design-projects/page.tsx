'use client';
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Button from "@/components/ui/Button";
import PageTitle from "@/components/ui/PageTitle";
import ProjectListItem from "@/components/ui/ProjectListItem";
import { useState } from "react";


export default function DesignProjects() {
    const [visibleCount, setVisibleCount] = useState(6);

    const projects = Array.from({ length: 20 }); // Replace with actual data source

    const handleShowMore = () => {
        setVisibleCount((prev) => prev+6);
    }

    return (
        <>
            {/* <Navbar /> */}
            <PageTitle title={"Projects"} subtitle={[
                   "Take a look at some of the ideas",
                    "we’ve helped to implement", 
                    "Will yours be next?"
            ]} />

            {/* PageITEMS: TODO: DYNAMIC */}
            <div className="block pb-20">
                <div className="container">
                    <div className="grid grid-flow-row gap-4 w-full relative lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                        {projects.slice(0, visibleCount).map((_, index) => (
                                <div
                                key={index}
                                className="opacity-0 animate-fadeInUp animation-delay-200"
                                >
                                    <ProjectListItem />
                                </div>
                            ))}
                    </div>
                </div>
            </div>
            
            <div className="mt-7 text-center">
                <Button onClick={handleShowMore} children={"Show More"} variant={"outline"} />
            </div>
            {/* <Footer /> */}
        </>
    )
}