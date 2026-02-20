"use client";

import { ScanUser } from "@/types/scan";
import axios from "axios";
import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";

interface userContextType {
    user: ScanUser | null;
    getUser: () => void;
    loading: boolean;
}

export const userContext = createContext<userContextType | undefined>(
    undefined,
);

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<ScanUser | null>(null);
    const [loading, setLoading] = useState(true);

    const getUser = async () => {
        setLoading(true);
        try {
            const result = await axios.get("/api/user");
            if (!result) {
                return new Error("user not fount");
            }
            setUser(result.data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        getUser();
    }, []);

    const value = {
        user,
        getUser,
        loading,
    };

    return (
        <userContext.Provider value={value}>{children}</userContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(userContext);
    if (context === undefined) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
};
