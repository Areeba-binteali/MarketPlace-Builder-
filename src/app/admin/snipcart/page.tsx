"use client"
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SnipCart(){
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
      <div className="dashboard-main">
        <h1>SnipCart Dashboard</h1>
        <h3>Click the button below, to manage your orders and payments</h3>
        <Link href="https://app.snipcart.com/dashboard/" target="_blank">Go to Dashboard</Link>
        <span>Use the admin credentials to login</span>
      </div>
    )
}