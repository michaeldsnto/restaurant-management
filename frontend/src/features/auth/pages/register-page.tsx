import AuthCard
    from "../components/auth-card";

import AuthHeader
    from "../components/auth-header";

import RegisterForm
    from "../components/register-form";

export default function RegisterPage() {

    return (

        <AuthCard>

            <AuthHeader
                title="Create Account"
                subtitle="Create your restaurant management account"
            />

            <RegisterForm />

        </AuthCard>

    );
}