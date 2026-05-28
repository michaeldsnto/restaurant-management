type Props =
    React.InputHTMLAttributes<HTMLInputElement>;

export default function Checkbox({
    ...props
}: Props) {

    return (

        <input
            type="checkbox"
            className="
        h-5
        w-5
        rounded
        border-zinc-700
        bg-zinc-900
        text-violet-600
        focus:ring-violet-500
      "
            {...props}
        />

    );
}