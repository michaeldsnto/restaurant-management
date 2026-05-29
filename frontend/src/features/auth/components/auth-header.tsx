type Props = {

    title: string;

    subtitle: string;

};

export default function AuthHeader({
    title,
    subtitle,
}: Props) {

    return (

        <div className="
      mb-8
      text-center
    ">

            <h1 className="
        text-3xl
        font-bold
        tracking-tight
        text-white
      ">
                {title}
            </h1>

            <p className="
        mt-2
        text-sm
        text-zinc-400
      ">
                {subtitle}
            </p>

        </div>

    );
}