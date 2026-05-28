type Props = {
    children: React.ReactNode;
};

export default function ScrollArea({
    children,
}: Props) {

    return (

        <div className="
      overflow-y-auto
      scrollbar-thin
      scrollbar-thumb-zinc-700
    ">

            {children}

        </div>

    );
}