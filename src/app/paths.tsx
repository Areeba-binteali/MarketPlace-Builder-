"use client";

import AdminHeader from "@/components/adminHeader";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function DecideLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const noLayoutPages = ['/signin', '/admin', '/admin/snipcart'];

    // ✅ Check if path matches admin studio pattern
    const isAdminStudio = /^\/admin\/studio(\/.*)?$/.test(pathname);
    const isNoLayoutPage = noLayoutPages.includes(pathname) || isAdminStudio;

    // ✅ Add class to body for admin pages
    useEffect(() => {
        const body = document.querySelector('body');
        if (isNoLayoutPage) {
            body?.classList.add('admin-panel');
        } else {
            body?.classList.remove('admin-panel');
        }
    }, [isNoLayoutPage]);

    // ✅ Return the correct layout
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
