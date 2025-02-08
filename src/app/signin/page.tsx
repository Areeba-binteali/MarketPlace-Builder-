"use client"; 

import { signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function SignIn() {
  const router = useRouter();
  const pathname = usePathname();
 
  useEffect(() => {
    const signInBody = document.querySelector("body");

    if (pathname === "/signin") {
      signInBody?.classList.add("SigninPage");
    } else {
      signInBody?.classList.remove("SigninPage");
    }

    return () => {
      signInBody?.classList.remove("SigninPage");
    };
  }, [pathname]); 

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError("Invalid email or password");
    } else {
      router.push("/admin"); 
    }
  };

  return (
    <form onSubmit={handleSubmit} className="signIn-form">
      <h1 className="login-head">Log In to your Account</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
        className="signIn-inputs"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
        className="signIn-inputs"
      />
      <button type="submit" className="signIn-btn">Sign in</button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
}