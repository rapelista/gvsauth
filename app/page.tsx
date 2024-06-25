import Link from "next/link";

export default function Page() {
    return (
        <>
            <h1>Home Page</h1>
            <hr />
            <Link href="/dashboard">
                <button>Go to /dashboard</button>
            </Link>
        </>
    );
}
