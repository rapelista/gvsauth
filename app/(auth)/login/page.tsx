import { signIn } from "@/auth";

export default function Page() {
    return (
        <>
            <h1>Login</h1>
            <hr />
            <form
                action={async () => {
                    "use server";
                    await signIn("github", {
                        redirectTo: "/dashboard",
                    });
                }}
            >
                <button>Login using Github</button>
            </form>
            <form
                action={async () => {
                    "use server";
                    await signIn("google", {
                        redirectTo: "/dashboard",
                    });
                }}
            >
                <button>Login using Google</button>
            </form>
        </>
    );
}
