import Image from "next/image";
import { auth, signOut } from "@/auth";

export default function Page() {
    return (
        <>
            <h1>Dashboard</h1>
            <hr />
            <ProfileDetail />
            <hr />
            <form
                action={async () => {
                    "use server";
                    await signOut({
                        redirectTo: "/login",
                    });
                }}
            >
                <button>Logout</button>
            </form>
        </>
    );
}

async function ProfileDetail() {
    const {
        user: { image, name, email },
    } = await auth();

    return (
        <div>
            <h2>Profile</h2>
            <Image
                src={image}
                width={48}
                height={48}
                alt={name}
                style={{
                    borderRadius: "50%",
                }}
            />
            <p>Name: {name}</p>
            <p>Email: {email}</p>
        </div>
    );
}
