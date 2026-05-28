type Props = {
    children: React.ReactNode;
};

export default function ActionHeader({
    children,
}: Props) {

    return (

        <div className="
      mb-6
      flex
      items-center
      justify-between
      gap-4
    ">

            {children}

        </div>

    );
}