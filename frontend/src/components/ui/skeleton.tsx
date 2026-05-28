type Props = {
    className?: string;
};

export default function Skeleton({
    className,
}: Props) {

    return (

        <div
            className={`
        animate-pulse
        rounded-2xl
        bg-zinc-800
        ${className}
      `}
        />

    );
}