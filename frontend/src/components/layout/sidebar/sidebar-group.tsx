type Props = {

    title: string;

    children: React.ReactNode;

};

export default function SidebarGroup({
    title,
    children,
}: Props) {

    return (

        <div className="mb-6">

            <p className="
        mb-3
        px-4
        text-xs
        font-semibold
        uppercase
        tracking-wider
        text-zinc-500
      ">
                {title}
            </p>

            <div className="space-y-1">

                {children}

            </div>

        </div>

    );
}