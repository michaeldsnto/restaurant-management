interface EmployeeAvatarProps {

    name: string;

    avatar?: string;

    size?: "sm" | "md" | "lg";

}

export default function EmployeeAvatar({

    name,

    avatar,

    size = "md",

}: EmployeeAvatarProps) {

    const sizes = {

        sm: "h-10 w-10",

        md: "h-14 w-14",

        lg: "h-20 w-20",

    };

    if (avatar) {

        return (

            <img
                src={avatar}
                alt={name}
                className={`
          ${sizes[size]}
          rounded-full
          object-cover
        `}
            />

        );

    }

    return (

        <div
            className={`
        ${sizes[size]}
        flex
        items-center
        justify-center
        rounded-full
        bg-violet-600
        font-semibold
        text-white
      `}
        >

            {name
                .split(" ")
                .map((word) => word[0])
                .slice(0, 2)
                .join("")}

        </div>

    );

}