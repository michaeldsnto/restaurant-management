type Props = {
    children: React.ReactNode;
};

export function Table({
    children,
}: Props) {

    return (

        <div className="
      overflow-hidden
      rounded-3xl
      border
      border-zinc-800
    ">

            <table className="
        min-w-full
        divide-y
        divide-zinc-800
      ">
                {children}
            </table>

        </div>

    );
}

export function TableHead({
    children,
}: Props) {

    return (
        <thead className="bg-zinc-900">
            {children}
        </thead>
    );
}

export function TableBody({
    children,
}: Props) {

    return (
        <tbody className="divide-y divide-zinc-800">
            {children}
        </tbody>
    );
}

export function TableRow({
    children,
}: Props) {

    return (
        <tr className="hover:bg-zinc-900/40">
            {children}
        </tr>
    );
}

export function TableCell({
    children,
}: Props) {

    return (

        <td className="
      whitespace-nowrap
      px-6
      py-4
      text-sm
      text-zinc-300
    ">
            {children}
        </td>

    );
}