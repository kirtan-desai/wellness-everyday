"use client";
import { use } from "react";
import { signIn, getProviders } from "next-auth/react";
import styles from "../authforms.module.css";

export default function SignIn() {
    const providers = use(getProviders());

    return (
        <section className={styles.form}>
            <div>
                <p className={styles.heading}>
                    Sign in to <br></br> Wellness Everyday
                </p>
            </div>
            <div className={styles.inputSection}>
                {providers &&
                    Object.values(providers).map((provider) => (
                        <div key={provider.name}>
                            <button
                                className={styles.primaryButton}
                                onClick={() =>
                                    signIn(provider.id, { callbackUrl: "/" })
                                }
                            >
                                Sign in with {provider.name}
                            </button>
                        </div>
                    ))}
            </div>
        </section>
    );
}
