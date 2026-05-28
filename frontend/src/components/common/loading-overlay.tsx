type Props = {
    loading: boolean;
};

export default function LoadingOverlay({
    loading,
}: Props) {

    if (!loading) {
        return null;
    }

    return (

        <div className="
      absolute
      inset-0
      z-50
      flex
      items-center
      justify-center
      rounded-3xl
      bg-black/60
      backdrop-blur-sm
    ">

            <div className="
        h-12
        w-12
        animate-spin
        rounded-full
        border-4
        border-violet-500
        border-t-transparent
      " />

        </div>

    );
}