import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { authStorage }
from "@/services/auth-storage";

type User = {

  id: number;

  name: string;

  email: string;

  role: string;

};

type AuthContextType = {

  user: User | null;

  isAuthenticated: boolean;

  setUser: (
    user: User | null
  ) => void;

};

const AuthContext =
  createContext<AuthContextType | null>(
    null
  );

export function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  const [user, setUser] =
    useState<User | null>(null);

  const isAuthenticated =
    !!authStorage.getAccessToken();

  useEffect(() => {

    /**
     * fetch current user later
     */

  }, []);

  return (

    <AuthContext.Provider
      value={{
        user,
        setUser,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>

  );
}

export const useAuth = () => {

  const context =
    useContext(AuthContext);

  if (!context) {

    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
  }

  return context;
};