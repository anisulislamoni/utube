"use client";
import { Button } from "@/components/ui/button";
import { UserCircleIcon } from "lucide-react";
import { UserButton, SignInButton, SignedIn, SignedOut } from "@clerk/nextjs"

export default function AuthButton() {
  return (
    <>
    <SignedIn>
      <UserButton />
      {/* TODO: Add menu items for Studio and User Profile */}
    </SignedIn>
    <SignedOut>
      <SignInButton mode="modal">
        <Button variant="outline" className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500 border-blue-500/2 rounded-full shadow-none cursor-pointer">
          <UserCircleIcon />
          Sign in
        </Button>
      </SignInButton>
    </SignedOut>
    </>
  )
}
