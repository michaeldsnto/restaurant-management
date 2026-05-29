import AuthCard
    from "../components/auth-card";

import AuthHeader
    from "../components/auth-header";

// If ../components/forgot-password-form is missing, provide a local fallback
// to prevent "Cannot find module" build errors. Replace with the real
// component import when the component file is available.
import React from "react";

const ForgotPasswordForm: React.FC = () => {
    return (
        <form className="space-y-4">
            <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                    type="email"
                    name="email"
                    required
                    className="mt-1 block w-full rounded-md border px-3 py-2"
                />
            </div>
            <div>
                <button
                    type="submit"
                    className="w-full rounded bg-blue-600 px-4 py-2 text-white"
                >
                    Send reset link
                </button>
            </div>
        </form>
    );
};

export default function ForgotPasswordPage() {

    return (

        <AuthCard>

            <AuthHeader
                title="Forgot Password"
                subtitle="We will send a reset link to your email"
            />

            <ForgotPasswordForm />

        </AuthCard>

    );
}