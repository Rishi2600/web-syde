
import ScrollItem from "@/components/ScrollItem";
import Button from "@/components/ui/Button";
import PageTitle from "@/components/ui/PageTitle";

export default function Services() {
    return (
        <>
            <div className="block text-secondary">
                <PageTitle title={"Services"} subtitle={[
                        "From proof of concepts (PoC)",
                        "and minimum viable products (MVP)", 
                        "to complex enterprise-level systems –",
                        "we’ve got everything covered."
                ]} />
            {/* SOMETHING VALUABLE --- Should be in different Component or idk */}
            {/* Make this component reusable */}
                <div className="container">
                    <div className="flex -mx-11 flex-wrap">
                        <div className="px-11 box-border w-[60%]">
                            <h3 className="mb-8 pt-96 leading-normal text-4xl">Development</h3>
                            <p className="text-2xl leading-snug mb-6">Implementing your project with scalable architecture design, modern technology, and an excellent level of data security.</p>
                        </div>

                        <div className="px-11 box-border w-[100%]">
                            <div className="flex gap-4 flex-wrap">
                                <Button variant={"outline"} children={"Web Development"} />
                                <Button variant={"outline"} children={"React Native Apps"} />
                                <Button variant={"outline"} children={"Web apps"} />
                                <Button variant={"outline"} children={"Mobile apps"} />
                                <Button variant={"outline"} children={"ios"} />
                                <Button variant={"outline"} children={"Android"} />
                                <Button variant={"outline"} children={"E-commerce website"} />
                                <Button variant={"outline"} children={"Frontend"} />
                                <Button variant={"outline"} children={"Backend"} />
                                <Button variant={"outline"} children={"Custom Entrerprices Software"} />
                                <Button variant={"outline"} children={"Dedicated Development Teams"} />
                                <Button variant={"outline"} children={"Devops"} />
                            </div>
                        </div>

                    </div>
                </div>
                <ScrollItem />

                <div className="container">
                    <div className="flex -mx-11 flex-wrap">
                        <div className="px-11 box-border w-[60%]">
                            <h3 className="mb-8 pt-96 leading-normal text-4xl">Design</h3>
                            <p className="text-2xl leading-snug mb-6">Implementing your project with scalable architecture design, modern technology, and an excellent level of data security.</p>
                        </div>
                        <div className="px-11 box-border w-[100%]">
                            <div className="flex gap-4 flex-wrap">
                                <Button variant={"outline"} children={"Graphic Design"} />
                                <Button variant={"outline"} children={"Logo"} />
                                <Button variant={"outline"} children={"Strategy & Branding"} />
                                <Button variant={"outline"} children={"Illustration"} />
                                <Button variant={"outline"} children={"Web Design"} />
                                <Button variant={"outline"} children={"Creative and Landing Pages"} />
                                <Button variant={"outline"} children={"Concept Design Services"} />
                                <Button variant={"outline"} children={"Desktop"} />
                                <Button variant={"outline"} children={"Tablet"} />
                                <Button variant={"outline"} children={"Mobile app Design"} />
                                <Button variant={"outline"} children={"UI-UX Design"} />
                            </div>
                        </div>
                    </div>
                </div>

                <ScrollItem />
                
                {/* Last section  */}
                <div className="box-border relative py-14">
                    <div className="container">
                        <div className="flex flex-wrap -mx-11">
                            <div className="col-[60%] box-border px-11">
                                <h3 className="block font-medium text-4xl leading-snug">Benefits of working with us</h3>
                            </div>
                        </div>

                        <div className="flex flex-wrap -mx-11">
                            <div className="px-11 box-border flex flex-col w-full lg:w-1/2">
                                <div className="pr-20 mt-14 mb-20">
                                    <span className="inline-block w-20 h-20 mb-14 relative p-0">
                                        <span className="absolute inset-0 flex items-center justify-center rounded-3xl bg-accent bg-opacity-30 text-center">
                                        H
                                        </span>
                                    </span>
                                    <h4 className="text-3xl mb-7 font-medium leading-normal">Flexible work terms</h4>
                                    <p className="text-xl opacity-75 mb-6 leading-6">
                                        We can adjust our terms according to your project needs and goals – fixed budget basis, Time and Materials framework, weekly budget, etc. Let’s discuss and find what would work best for you.
                                    </p>
                                </div>
                            </div>
                            <div className="px-11 box-border flex flex-col w-full lg:w-1/2">
                                <div className="pr-20 mt-14 mb-20">
                                    <span className="inline-block w-20 h-20 mb-14 relative p-0">
                                        <span className="absolute inset-0 flex items-center justify-center rounded-3xl bg-accent bg-opacity-30 text-center">
                                        H
                                        </span>
                                    </span>
                                    <h4 className="text-3xl mb-7 font-medium leading-normal">Flexible work terms</h4>
                                    <p className="text-xl opacity-75 mb-6 leading-6">
                                        We can adjust our terms according to your project needs and goals – fixed budget basis, Time and Materials framework, weekly budget, etc. Let’s discuss and find what would work best for you.
                                    </p>
                                </div>
                            </div>
                            <div className="px-11 box-border flex flex-col w-full lg:w-1/2">
                                <div className="pr-20 mt-14 mb-20">
                                    <span className="inline-block w-20 h-20 mb-14 relative p-0">
                                        <span className="absolute inset-0 flex items-center justify-center rounded-3xl bg-accent bg-opacity-30 text-center">
                                        H
                                        </span>
                                    </span>
                                    <h4 className="text-3xl mb-7 font-medium leading-normal">Flexible work terms</h4>
                                    <p className="text-xl opacity-75 mb-6 leading-6">
                                        We can adjust our terms according to your project needs and goals – fixed budget basis, Time and Materials framework, weekly budget, etc. Let’s discuss and find what would work best for you.
                                    </p>
                                </div>
                            </div>
                            <div className="px-11 box-border flex flex-col w-full lg:w-1/2">
                                <div className="pr-20 mt-14 mb-20">
                                    <span className="inline-block w-20 h-20 mb-14 relative p-0">
                                        <span className="absolute inset-0 flex items-center justify-center rounded-3xl bg-accent bg-opacity-30 text-center">
                                        H
                                        </span>
                                    </span>
                                    <h4 className="text-3xl mb-7 font-medium leading-normal">Flexible work terms</h4>
                                    <p className="text-xl opacity-75 mb-6 leading-6">
                                        We can adjust our terms according to your project needs and goals – fixed budget basis, Time and Materials framework, weekly budget, etc. Let’s discuss and find what would work best for you.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}