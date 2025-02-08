"use client"
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { sanityConfig } from "@/sanity/sanity.config"
import { NextStudio } from "next-sanity/studio"

export default function SanityStudio (){
    const { data: session, status } = useSession();
    const router = useRouter();
  
    useEffect(() => {
      console.log("🔍 Session Data:", session);
  
      if (status === "loading") return;
      if (!session || session.user?.role !== "admin") {
        console.log("❌ Unauthorized access, redirecting...");
        router.push("/signin");
      }
    }, [session, status, router]);
  
    if (status === "loading") return <p>Loading...</p>;
    if (!session || session.user?.role !== "admin") return null;
    
    return(
        <NextStudio config={sanityConfig} />
    )
}