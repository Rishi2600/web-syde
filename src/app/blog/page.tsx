import BlogPost from "@/components/ui/BlogPost";

export default function Blog() {
    return (
        <>
            <div className="container">
                <div className="grid sm:grid-cols-1 lg:grid-cols-3 -mx-5 bg-red-300">
                    <BlogPost />
                    <BlogPost />
                    <BlogPost />
                    <BlogPost />
                    <BlogPost />
                    <BlogPost />
                    <BlogPost />
                    <BlogPost />
                </div>

            </div>
        </>
    )
}