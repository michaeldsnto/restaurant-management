type Props = {
    children: React.ReactNode;
};

export default function Chart({
    children,
}: Props) {

    return (

        <div className="
      rounded-3xl
      border
      border-zinc-800
      bg-zinc-900/40
      p-6
    ">

            {children}

        </div>

    );
}