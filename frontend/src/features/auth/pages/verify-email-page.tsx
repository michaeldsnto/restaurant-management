import {
    MailCheck,
} from "lucide-react";

import AuthCard
    from "../components/auth-card";

import Button
    from "@/components/ui/button";

export default function VerifyEmailPage() {

    function handleResendEmail() {

        console.log(
            "resend verification email"
        );
    }

    return (

        <div className="
      flex
      items-center
      justify-center
    ">

            <AuthCard>

                <div className="
          flex
          flex-col
          items-center
          text-center
        ">

                    <div className="
            mb-6
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-full
            bg-violet-600/15
          ">

                        <MailCheck
                            size={40}
                            className="
                text-violet-400
              "
                        />

                    </div>

                    <h1 className="
            text-3xl
            font-bold
            tracking-tight
            text-white
          ">
                        Verify Your Email
                    </h1>

                    <p className="
            mt-4
            max-w-md
            text-sm
            leading-6
            text-zinc-400
          ">
                        We have sent a verification
                        link to your email address.
                        Please verify your account
                        before accessing the dashboard.
                    </p>

                    <Button
                        onClick={
                            handleResendEmail
                        }
                        className="
              mt-8
              w-full
            "
                    >
                        Resend Verification Email
                    </Button>

                </div>

            </AuthCard>

        </div>

    );
}