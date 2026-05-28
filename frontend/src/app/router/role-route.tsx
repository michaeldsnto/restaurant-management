import {
  Navigate,
  Outlet,
} from "react-router-dom";

import { useAuth }
  from "../providers/auth-provider";

type Props = {
  allowedRoles: string[];
};

export default function RoleRoute({
  allowedRoles,
}: Props) {

  const { user } =
    useAuth();

  if (
    !user ||
    !allowedRoles.includes(user.role)
  ) {

    return (
      <Navigate
        to="/forbidden"
        replace
      />
    );
  }

  return <Outlet />;
}