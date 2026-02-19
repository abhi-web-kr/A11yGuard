"use client";

import {
    createContext,
    useContext,
    useState,
    ReactNode,
    useEffect,
} from "react";
import { ScanResult } from "@/types/scan";
import axios from "axios";

interface IssueContextType {
    result: ScanResult | null;
    setResult: (value: ScanResult | null) => void;
    loading: boolean;
    error: string | null;
    handleWebsiteLink: (url: string) => Promise<void>;
    resetScan: () => void;
}

const IssueContext = createContext<IssueContextType | undefined> (undefined);

export const IssueProvider = ({ children }: { children: ReactNode }) => {
    const [result, setResult] = useState<ScanResult | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleWebsiteLink = async (url: string) => {
        setLoading(true);
        setError(null);
        try {
            const result = await axios.post("/api/scan", { url });
            setLoading(false);
            setResult(result.data);
        } catch (error: any) {
            setError(error.message || "Failed to scan website");

            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const resetScan = () => {
        setResult(null);
        setLoading(false);
        setError(null);
    };

    // for only development purpose
    useEffect(() => {
        if (result) {
            localStorage.setItem("lastScan", JSON.stringify(result));
        }
    }, [result]);
    useEffect(() => {
        const saved = localStorage.getItem("lastScan");
        if (saved) {
            setResult(JSON.parse(saved));
        }
    }, [setResult]);

    const value = {
        result,
        loading,
        handleWebsiteLink,
        resetScan,
        error,
        setResult,
    };

    return (
        <IssueContext.Provider value={value}>{children}</IssueContext.Provider>
    );
};

export const useIssues = () => {
    const context = useContext(IssueContext);
    if (context === undefined) {
        throw new Error("useIssues must be used within an IssueProvider");
    }
    return context;
};
