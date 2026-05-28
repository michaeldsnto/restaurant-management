type Props = {
    value: number;
};

export default function Progress({
    value,
}: Props) {

    return (

        <div className="
      h-3
      overflow-hidden
      rounded-full
      bg-zinc-800
    ">

            <div
                style={{
                    width: `${value}%`,
                }}
                className="
          h-full
          rounded-full
          bg-violet-600
          transition-all
        "
            />

        </div>

    );
}