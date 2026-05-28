import Avatar
    from "@/components/ui/avatar";

export default function NavbarProfile() {

    return (

        <div className="
      flex
      items-center
      gap-3
    ">

            <Avatar fallback="M" />

            <div className="hidden lg:block">

                <p className="
          text-sm
          font-medium
          text-white
        ">
                    Michael
                </p>

                <p className="
          text-xs
          text-zinc-500
        ">
                    Restaurant Owner
                </p>

            </div>

        </div>

    );
}