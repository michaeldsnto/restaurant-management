import NavbarSearch
    from "./navbar-search";

import NavbarNotification
    from "./navbar-notification";

import NavbarProfile
    from "./navbar-profile";

import NavbarThemeToggle
    from "./navbar-theme-toggle";

export default function AppNavbar() {

    return (

        <header className="
      flex
      h-20
      items-center
      justify-between
      border-b
      border-zinc-800
      bg-zinc-950/80
      px-6
      backdrop-blur-xl
    ">

            <NavbarSearch />

            <div className="
        flex
        items-center
        gap-4
      ">

                <NavbarThemeToggle />

                <NavbarNotification />

                <NavbarProfile />

            </div>

        </header>

    );
}