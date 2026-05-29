import AuthCard
  from "../components/auth-card";

import AuthHeader
  from "../components/auth-header";

import LoginForm
  from "../components/login-form";

export default function LoginPage() {

  return (

    <AuthCard>

      <AuthHeader
        title="Welcome Back"
        subtitle="Login to your restaurant dashboard"
      />

      <LoginForm />

    </AuthCard>

  );
}