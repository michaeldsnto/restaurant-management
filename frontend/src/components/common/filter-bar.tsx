type Props = {
    children: React.ReactNode;
};

export default function FilterBar({
    children,
}: Props) {

    return (

        <div className="
      mb-6
      flex
      flex-wrap
      items-center
      gap-4
      rounded-3xl
      border
      border-zinc-800
      bg-zinc-900/40
      p-4
    ">

            {children}

        </div>

    );
}