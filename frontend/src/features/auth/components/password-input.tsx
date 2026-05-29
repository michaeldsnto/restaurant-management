import {
    Eye,
    EyeOff,
} from "lucide-react";

import {
    useState,
} from "react";

type Props =
    React.InputHTMLAttributes<HTMLInputElement>;

export default function PasswordInput({
    ...props
}: Props) {

    const [visible, setVisible] =
        useState(false);

    return (

        <div className="relative">

            <input
                type={
                    visible
                        ? "text"
                        : "password"
                }
                className="
          h-12
          w-full
          rounded-2xl
          border
          border-zinc-800
          bg-zinc-900
          px-4
          pr-12
          text-sm
          text-white
          outline-none
          focus:border-violet-500
        "
                {...props}
            />

            <button
                type="button"
                onClick={() =>
                    setVisible(!visible)
                }
                className="
          absolute
          right-4
          top-1/2
          -translate-y-1/2
          text-zinc-500
        "
            >

                {visible
                    ? <EyeOff size={18} />
                    : <Eye size={18} />}

            </button>

        </div>

    );
}