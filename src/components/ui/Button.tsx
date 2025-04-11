
export default function Button({
    children,
    className = "",
}: {
    children?: React.ReactNode | 'Get In Touch';
    className?: string;
}) {
    return (
        <>
            <button
                className="fixed font-medium text-center leading-7 cursor-pointer py-4 px-6 transition-all ease-in-out duration-300 hover:text-secondary border outline outline-1 focus:outline-secondary hover:border  border-secondary hover:border-secondary rounded-3xl bg-secondary text-primary hover:bg-accent z-10 text-base inline-block overflow-hidden">
                    {children}
            </button>
        </>
    )
}