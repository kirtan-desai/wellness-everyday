"use client";
import { useRouter } from "next/navigation";

export default function Test() {
    const router = useRouter();
    return (
        <button
            onClick={() => {
                console.log("clicked");
                router.push("/");
            }}
        >
            Reload
        </button>
    );
}
