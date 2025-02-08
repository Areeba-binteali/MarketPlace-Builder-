"use client"

import AdminHeader from "@/components/adminHeader";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function DecideLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const noLayoutPages = ['/signin', '/admin', '/admin/studio/:path*', '/admin/snipcart'];

    if (noLayoutPages.includes(pathname) ||  /^\/admin\/studio(\/.*)?$/.test(pathname)) {
        useEffect(()=>{
            const body=document.querySelector('body');
            body?.classList.add('admin-pannel')
        })
        return <><AdminHeader />{children}</>; // No layout applied
    } else {
        return (
            <>
                <Header />
                {children}
                <Footer />
            </>
        )
    }

}