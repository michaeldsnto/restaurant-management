type Props = {
    children: React.ReactNode;
};

export default function Sidebar({
    children,
}: Props) {

    return (

        <aside className="
      flex
      h-screen
      w-72
      flex-col
      border-r
      border-zinc-800
      bg-zinc-950
    ">

            {children}

        </aside>

    );
}