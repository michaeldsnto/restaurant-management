import { createContext }
  from "react";

type Props = {
  children: React.ReactNode;
};

const WebsocketContext =
  createContext(null);

export function WebsocketProvider({
  children,
}: Props) {

  /**
   * setup echo later
   */

  return (
    <WebsocketContext.Provider
      value={null}
    >
      {children}
    </WebsocketContext.Provider>
  );
}