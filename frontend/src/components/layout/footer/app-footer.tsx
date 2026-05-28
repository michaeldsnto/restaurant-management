export default function AppFooter() {

    return (

        <footer className="
      border-t
      border-zinc-800
      px-6
      py-4
    ">

            <div className="
        flex
        flex-col
        gap-2
        text-sm
        text-zinc-500
        lg:flex-row
        lg:items-center
        lg:justify-between
      ">

                <p>
                    © 2026 RestaurantOS.
                    All rights reserved.
                </p>

                <p>
                    Built with Laravel & React
                </p>

            </div>

        </footer>

    );
}