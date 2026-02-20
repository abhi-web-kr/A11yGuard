"use client";

import { Suspense, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { ShieldCheck, Mail, Lock, LogIn } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const router = useRouter();
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl") || "/";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const result = await signIn("credentials", {
                email,
                password,
                redirect: false,
            });

            if (result?.ok) {
                router.push(callbackUrl);
            } else {
                setError("Invalid email or password.");
            }
        } catch {
            setError("An unexpected error occurred.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-950 px-4 py-6 transition-colors overflow-hidden">
            <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-[2.5rem] p-7 shadow-2xl shadow-slate-200 dark:shadow-none border border-slate-100 dark:border-slate-800">
                {/* Header */}
                <div className="flex flex-col items-center mb-5">
                    <div className="bg-emerald-500 p-2.5 rounded-2xl shadow-lg shadow-emerald-500/20 mb-3">
                        <ShieldCheck size={26} className="text-white" />
                    </div>
                    <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter">
                        Welcome Back
                    </h1>
                    <p className="text-slate-500 text-xs font-medium mt-0.5">
                        Log in to A11yGuard
                    </p>
                </div>

                {error && (
                    <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-3 rounded-2xl text-xs mb-4 font-bold text-center border border-red-100 dark:border-red-900/30">
                        {error}
                    </div>
                )}

                {/* Form */}
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="space-y-2">
                        <label className="text-xs font-black text-slate-700 dark:text-slate-300 ml-1 uppercase tracking-widest">
                            Email Address
                        </label>
                        <div className="relative">
                            <Mail
                                className="absolute left-4 top-3.5 text-slate-400"
                                size={18}
                            />
                            <input
                                type="email"
                                required
                                placeholder="name@company.com"
                                className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl focus:ring-2 focus:ring-emerald-500 dark:text-white transition-all font-medium outline-none"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-black text-slate-700 dark:text-slate-300 ml-1 uppercase tracking-widest">
                            Password
                        </label>
                        <div className="relative">
                            <Lock
                                className="absolute left-4 top-3.5 text-slate-400"
                                size={18}
                            />
                            <input
                                type="password"
                                required
                                placeholder="••••••••"
                                className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl focus:ring-2 focus:ring-emerald-500 dark:text-white transition-all font-medium outline-none"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                            />
                        </div>
                    </div>

                    <button
                        disabled={loading}
                        className="w-full py-3.5 px-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black rounded-2xl hover:bg-emerald-600 dark:hover:bg-emerald-500 transition-all shadow-xl disabled:opacity-50 flex items-center justify-center gap-2 group cursor-pointer"
                    >
                        {loading ? (
                            "Verifying..."
                        ) : (
                            <>
                                Sign In{" "}
                                <LogIn
                                    size={18}
                                    className="group-hover:translate-x-1 transition-transform"
                                />
                            </>
                        )}
                    </button>
                </form>

                {/* Divider */}
                <div className="flex items-center gap-4 my-5">
                    <hr className="grow border-slate-100 dark:border-slate-800" />
                    <span className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">
                        OR
                    </span>
                    <hr className="grow border-slate-100 dark:border-slate-800" />
                </div>

                <button
                    className="w-full flex items-center justify-center font-bold gap-3 py-3.5 px-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl text-slate-700 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm cursor-pointer"
                    onClick={() => signIn("google", { callbackUrl })}
                >
                    <FcGoogle size={22} />
                    <span>Continue with Google</span>
                </button>

                <p className="text-sm text-center mt-5 text-slate-500 font-medium">
                    New?{" "}
                    <button
                        className="text-emerald-600 dark:text-emerald-400 hover:underline font-black"
                        onClick={() =>
                            router.push(
                                callbackUrl !== "/"
                                    ? `/register?callbackUrl=${encodeURIComponent(callbackUrl)}`
                                    : "/register",
                            )
                        }
                    >
                        Create Account
                    </button>
                </p>
            </div>
        </div>
    );
}

const Login = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <LoginForm />
    </Suspense>
);

export default Login;
