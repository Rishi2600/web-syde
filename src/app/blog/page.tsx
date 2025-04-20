"use client";
import BlogPost from "@/components/ui/BlogPost";
import Button from "@/components/ui/Button";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Blog() {
        const [visibleCount, setVisibleCount] = useState(6);
    
        const projects = Array.from({ length: 20 }); // Replace with actual data source
    
        const handleShowMore = () => {
            setVisibleCount((prev) => prev+6);
        }
    return (
        <>
            <div className="container">
                <div className="transition-all duration-700 ease-in-out -mb-4 mt-44 text-secondary">
                    <div className="block">
                        <div className="flex gap-2 w-80 py-2 px-0">
                            <span>
                                <FontAwesomeIcon icon={faSearch} style={{color: "#74C0FC",}} />
                            </span>
                            {/* Search Input  */}
                            <input type="text" className="text-lg w-full bg-primary border-b-[1px] opacity-55 " placeholder="Search in posts" />
                        </div>
                    </div>
                </div>
            </div>


            <div className="container">
                <div className="flex -mx-11 px-4 flex-wrap text-secondary mt-16 -mb-24">
                    <div className="box-border col-full px-11 flex">
                        <h4 className="mb-6 flex justify-between items-center text-4xl font-semibold leading-10">
                            <span>Featured Articles</span>
                            {/* <span></span> */}
                        </h4>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="grid sm:grid-cols-1 lg:grid-cols-3 -mx-5">
                        {projects.slice(0, visibleCount).map((_, index) => (
                                <div
                                key={index}
                                className="opacity-0 animate-fadeInUp animation-delay-200"
                                >
                                    <BlogPost />
                                </div>
                            ))}
                </div>

                            
                <div className="mt-7 text-center">
                    <Button onClick={handleShowMore} children={"Show More"} variant={"outline"} />
                </div>

            </div>
        </>
    )
}