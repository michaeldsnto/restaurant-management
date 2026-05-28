type Props = {
    children: React.ReactNode;
};

export default function Command({
    children,
}: Props) {

    return (

        <div className="
      rounded-3xl
      border
      border-zinc-800
      bg-zinc-950
      p-4
    ">

            {children}

        </div>

    );
}