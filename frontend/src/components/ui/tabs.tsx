type Props = {

    src?: string;

    fallback: string;

};

export default function Avatar({
    src,
    fallback,
}: Props) {

    if (src) {

        return (

            <img
                src={src}
                alt={fallback}
                className="
          h-11
          w-11
          rounded-full
          object-cover
        "
            />

        );
    }

    return (

        <div className="
      flex
      h-11
      w-11
      items-center
      justify-center
      rounded-full
      bg-violet-600
      font-semibold
      text-white
    ">

            {fallback.charAt(0)}

        </div>

    );
}