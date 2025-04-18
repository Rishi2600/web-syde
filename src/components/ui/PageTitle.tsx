
interface PageTitleProps {
    title: string;
    subtitle: string[]; 
}


export default function PageTitle({ title, subtitle}: PageTitleProps) {
    return (
        <>
            <div className="flex flex-col justify-center pt-32 pb-8 text-secondary">
                <div className="container">
                    <h1 className="text-lg mb-4 font-normal leading-normal">{title}
                    </h1>
                    <h2 className="text-4xl mb-8 font-medium leading-snug">
                    {/* Take a look at some of the ideas <br />
                    we’ve helped to implement. <br />
                    Will yours be next? */}
                    {/* TODO: Make the bracket opacity low by checking it from () if else */}
                        {subtitle.map((line, index) => (
                        <span key={index}>
                            {line}
                            <br />
                        </span>
                        ))}
                    </h2>
                </div>
            </div>
        </>
    )
}