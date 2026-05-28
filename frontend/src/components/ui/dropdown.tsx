import {
    useEffect,
    useRef,
    useState,
} from "react";

import clsx from "clsx";

type DropdownItem = {

    label: string;

    icon?: React.ReactNode;

    danger?: boolean;

    onClick: () => void;

};

type Props = {

    trigger: React.ReactNode;

    items: DropdownItem[];

    align?: "left" | "right";

};

export default function Dropdown({
    trigger,
    items,
    align = "right",
}: Props) {

    const [open, setOpen] =
        useState(false);

    const containerRef =
        useRef<HTMLDivElement>(null);

    useEffect(() => {

        function handleClickOutside(
            event: MouseEvent
        ) {

            if (
                containerRef.current &&
                !containerRef.current.contains(
                    event.target as Node
                )
            ) {
                setOpen(false);
            }
        }

        document.addEventListener(
            "mousedown",
            handleClickOutside
        );

        return () => {

            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );

        };

    }, []);

    return (

        <div
            ref={containerRef}
            className="relative inline-flex"
        >

            <div
                onClick={() =>
                    setOpen((prev) => !prev)
                }
                className="cursor-pointer"
            >
                {trigger}
            </div>

            {open && (

                <div
                    className={clsx(
                        "absolute top-full z-50 mt-3 min-w-[220px] overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl",

                        align === "right"
                            ? "right-0"
                            : "left-0"
                    )}
                >

                    <div className="p-2">

                        {items.map((item) => (

                            <button
                                key={item.label}
                                onClick={() => {

                                    item.onClick();

                                    setOpen(false);
                                }}
                                className={clsx(
                                    "flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm transition-all",

                                    item.danger
                                        ? "text-red-400 hover:bg-red-500/10"
                                        : "text-zinc-300 hover:bg-zinc-900 hover:text-white"
                                )}
                            >

                                {item.icon}

                                <span>
                                    {item.label}
                                </span>

                            </button>

                        ))}

                    </div>

                </div>

            )}

        </div>

    );
}