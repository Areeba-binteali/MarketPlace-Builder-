"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    console.log("🔍 Session Data:", session); // Debug session

    if (status === "loading") return;
    if (!session || session.user?.role !== "admin") {
      console.log("❌ Unauthorized access, redirecting...");
      router.push("/signin");
    }
  }, [session, status, router]);

  if (status === "loading") return <p>Loading...</p>;
  if (!session || session.user?.role !== "admin") return null;

  return (
    <div className="dashboard-main">
      <h1>Hey Areeba!</h1>
      <h3>Start managing your content through navigations above</h3>
    </div>
  );
};

export default Dashboard;