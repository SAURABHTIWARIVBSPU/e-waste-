"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, Recycle } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  // ✅ Function to check login status
  const checkLoginStatus = () => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  };

  // ✅ Run on first mount
  useEffect(() => {
    checkLoginStatus();
  }, []);

  // ✅ Listen for login/logout changes
  useEffect(() => {
    const handleStorageChange = () => {
      checkLoginStatus();
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // ✅ Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    window.dispatchEvent(new Event("storage")); // ✅ Trigger change globally
    router.push("/");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Recycle className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">EcoRecycle</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium hover:text-primary">Home</Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary">About</Link>
          <Link href="/pickup" className="text-sm font-medium hover:text-primary">Schedule Pickup</Link>
          <Link href="/donate" className="text-sm font-medium hover:text-primary">Donate</Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary">Contact</Link>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4">
          {isLoggedIn ? (
            <Button variant="outline" onClick={handleLogout}>Logout</Button>
          ) : (
            <>
              <Link href="/login">
                <Button variant="outline">Log In</Button>
              </Link>
              <Link href="/signup">
                <Button>Sign Up</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
