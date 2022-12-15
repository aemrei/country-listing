import { useAuth } from "src/features/auth/useAuth";
import React from "react";
import { LightButton } from "src/features/core/components/Button";

export const LogoutButton = () => {
  const { logout } = useAuth();
  return <LightButton onClick={() => logout()}>Logout</LightButton>;
};
