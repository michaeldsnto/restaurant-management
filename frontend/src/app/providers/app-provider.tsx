import QueryProvider
    from "./query-provider";

import { ThemeProvider }
    from "./theme-provider";

import { AuthProvider }
    from "./auth-provider";

import { WebsocketProvider }
    from "./websocket-provider";

type Props = {
    children: React.ReactNode;
};

export default function AppProvider({
    children,
}: Props) {

    return (

        <ThemeProvider>

            <QueryProvider>

                <AuthProvider>

                    <WebsocketProvider>

                        {children}

                    </WebsocketProvider>

                </AuthProvider>

            </QueryProvider>

        </ThemeProvider>

    );
}