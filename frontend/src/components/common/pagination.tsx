import clsx from "clsx";

type Props = {

    currentPage: number;

    totalPages: number;

    onPageChange: (
        page: number
    ) => void;

};

export default function Pagination({
    currentPage,
    totalPages,
    onPageChange,
}: Props) {

    return (

        <div className="
      mt-6
      flex
      items-center
      justify-end
      gap-2
    ">

            {Array.from({
                length: totalPages,
            }).map((_, index) => {

                const page = index + 1;

                return (

                    <button
                        key={page}
                        onClick={() =>
                            onPageChange(page)
                        }
                        className={clsx(
                            "flex h-10 w-10 items-center justify-center rounded-xl text-sm font-medium transition-all",

                            currentPage === page
                                ? "bg-violet-600 text-white"
                                : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white"
                        )}
                    >
                        {page}
                    </button>

                );
            })}

        </div>

    );
}