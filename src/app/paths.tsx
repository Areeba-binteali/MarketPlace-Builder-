"use client";

import AdminHeader from "@/components/adminHeader";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { usePathname } from "next/navigation";
import { useEffect} from "react";

export default function DecideLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const noLayoutPages = ['/signin', '/admin', '/admin/snipcart'];

    const isAdminStudio = /^\/admin\/studio(\/.*)?$/.test(pathname);
    const isNoLayoutPage = noLayoutPages.includes(pathname) || isAdminStudio;

    useEffect(() => {
        const body = document.querySelector('body');
        if (isNoLayoutPage) {
            body?.classList.add('admin-panel');
        } else {
            body?.classList.remove('admin-panel');
        }
    }, [isNoLayoutPage]);

    if (isNoLayoutPage) {
        return (
            <>
                <AdminHeader />
                {children}
            </>
        );
    }

    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}
