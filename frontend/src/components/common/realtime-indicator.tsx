import clsx from "clsx";

type Status =
  | "connected"
  | "connecting"
  | "disconnected";

type Props = {

  status: Status;

  label?: string;

};

const styles = {

  connected: {
    dot: "bg-emerald-500",
    text: "text-emerald-400",
  },

  connecting: {
    dot: "bg-yellow-500 animate-pulse",
    text: "text-yellow-400",
  },

  disconnected: {
    dot: "bg-red-500",
    text: "text-red-400",
  },

};

export default function RealtimeIndicator({
  status,
  label,
}: Props) {

  const current =
    styles[status];

  const defaultLabel = {

    connected: "Realtime Connected",

    connecting: "Connecting...",

    disconnected: "Realtime Disconnected",

  };

  return (

    <div className="
      inline-flex
      items-center
      gap-2
      rounded-full
      border
      border-zinc-800
      bg-zinc-900/70
      px-3
      py-1.5
      backdrop-blur-sm
    ">

      <span
        className={clsx(
          "h-2.5 w-2.5 rounded-full",
          current.dot
        )}
      />

      <span
        className={clsx(
          "text-xs font-medium",
          current.text
        )}
      >
        {label ??
          defaultLabel[status]}
      </span>

    </div>

  );
}