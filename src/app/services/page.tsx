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
            </div>
        </>
    )
}