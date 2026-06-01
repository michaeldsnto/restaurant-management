import {
    useEffect,
    useState,
} from "react";

interface Props {

    createdAt: string;

}

export default function KitchenTimer({
    createdAt,
}: Props) {

    const [
        elapsed,
        setElapsed,
    ] = useState(0);

    useEffect(() => {

        const interval =
            setInterval(() => {

                const created =
                    new Date(
                        createdAt
                    ).getTime();

                const now =
                    Date.now();

                setElapsed(
                    Math.floor(
                        (now - created) /
                        1000
                    )
                );

            }, 1000);

        return () =>
            clearInterval(
                interval
            );

    }, [createdAt]);

    const minutes =
        Math.floor(
            elapsed / 60
        );

    const seconds =
        elapsed % 60;

    return (

        <span
            className="
      font-mono
      text-sm
      font-bold
    "
        >

            {minutes}:
            {seconds
                .toString()
                .padStart(2, "0")}

        </span>

    );

}