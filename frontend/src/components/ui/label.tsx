type Props = {
    children: React.ReactNode;
};

export default function Label({
    children,
}: Props) {

    return (

        <label className="
      mb-2
      block
      text-sm
      font-medium
      text-zinc-300
    ">
            {children}
        </label>

    );
}