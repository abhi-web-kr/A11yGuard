"use client";

import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";
import { IssueProvider } from "./IssueContext";
import { UserProvider } from "./userContext";

function ClientProvider({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <SessionProvider>
                <IssueProvider>
                    <UserProvider>
                        <Toaster position="top-center" reverseOrder={false} />
                        {children}
                    </UserProvider>
                </IssueProvider>
            </SessionProvider>
        </div>
    );
}

export default ClientProvider;
