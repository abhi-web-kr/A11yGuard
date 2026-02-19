"use client";
import React, { useEffect, useState } from "react";
import { Camera, Save, ArrowLeft, User, Mail, Shield } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import axios from "axios";
import { useUser } from "@/context/userContext";
import toast from "react-hot-toast";

export default function EditProfile() {
    const router = useRouter();
    const { user, getUser } = useUser();
    const [loading, setLoading] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string>("");
    const [formData, setFormData] = useState({ name: "" });

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            // Create preview
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const formDataToSend = new FormData();
            formDataToSend.append("name", formData.name);

            if (selectedFile) {
                formDataToSend.append("file", selectedFile);
            }

            const res = await axios.post("/api/user/update", formDataToSend);

            if (res.status === 200) {
                await getUser(); 
                router.push("/profile");
                toast.success("profile updated successfully");
            }
        } catch (err) {
            console.error(err);
            alert("Failed to update profile. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (user) {
            setFormData({ name: user.name || "" });
            setImagePreview(user.image || "");
        }
    }, [user]);

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 transition-colors">
            <div className="max-w-2xl mx-auto px-6">
                <button
                    onClick={() => router.back()}
                    className="flex items-center gap-2 text-slate-500 hover:text-emerald-500 font-bold mb-8 transition-colors cursor-pointer"
                >
                    <ArrowLeft size={20} /> Back to Profile
                </button>

                <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 p-8 md:p-12 shadow-xl shadow-slate-200/50 dark:shadow-none">
                    <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter">
                        Edit Profile
                    </h1>

                    <form onSubmit={handleUpdate} className="space-y-8">
                        {/* Profile Image Upload */}
                        <div className="flex flex-col items-center gap-4">
                            <div className="relative group">
                                <div className="relative w-32 h-32 rounded-3xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center border-4 border-white dark:border-slate-800 shadow-lg overflow-hidden">
                                    {imagePreview ? (
                                        <Image
                                            src={imagePreview}
                                            alt="Profile Image"
                                            fill
                                            className="object-cover rounded-3xl"
                                            sizes="(max-width: 768px) 100vw, 128px"
                                            priority
                                        />
                                    ) : (
                                        <User
                                            size={48}
                                            className="text-emerald-600 dark:text-emerald-400"
                                        />
                                    )}
                                </div>
                                <label className="absolute bottom-0 right-0 bg-slate-900 dark:bg-white text-white dark:text-slate-900 p-2 rounded-xl cursor-pointer hover:bg-emerald-500 dark:hover:bg-emerald-500 transition-all shadow-lg">
                                    <Camera size={18} />
                                    <input
                                        type="file"
                                        className="hidden"
                                        accept="image/*"
                                        onChange={handleFileChange}
                                    />
                                </label>
                            </div>
                            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">
                                {selectedFile
                                    ? selectedFile.name
                                    : "Update Photo"}
                            </p>
                        </div>

                        <div className="space-y-6">
                            {/* Name Input */}
                            <div className="space-y-2">
                                <label className="text-sm font-black text-slate-700 dark:text-slate-300 ml-1">
                                    Full Name
                                </label>
                                <div className="relative">
                                    <User
                                        className="absolute left-4 top-3.5 text-slate-400"
                                        size={18}
                                    />
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                name: e.target.value,
                                            })
                                        }
                                        className="w-full pl-12 pr-4 py-3.5 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl focus:ring-2 focus:ring-emerald-500 dark:text-white transition-all font-medium"
                                        placeholder="Abhishek"
                                    />
                                </div>
                            </div>

                            {/* Email (Read Only for security) */}
                            <div className="space-y-2 opacity-60">
                                <label className="text-sm font-black text-slate-700 dark:text-slate-300 ml-1 flex items-center gap-2">
                                    Email Address <Shield size={14} />
                                </label>
                                <div className="relative">
                                    <Mail
                                        className="absolute left-4 top-3.5 text-slate-400"
                                        size={18}
                                    />
                                    <input
                                        type="email"
                                        value={user?.email || ""}
                                        disabled
                                        className="w-full pl-12 pr-4 py-3.5 bg-slate-100 dark:bg-slate-900/50 border-none rounded-2xl cursor-not-allowed dark:text-slate-500"
                                    />
                                </div>
                            </div>
                        </div>

                        <button
                            disabled={loading}
                            className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-4 rounded-2xl font-black text-lg hover:bg-emerald-600 dark:hover:bg-emerald-500 hover:-translate-y-1 transition-all shadow-xl disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
                        >
                            {loading ? (
                                "Saving Changes..."
                            ) : (
                                <>
                                    <Save size={20} /> Save Changes
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
