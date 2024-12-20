"use client";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { UploadButton } from "~/utils/uploadthing";
import { useRouter } from "next/navigation";

export function TopNav() {
  const router = useRouter();

  return (
    <nav className="flex items-center justify-between gap-4 border-b-2 border-purple-500 p-4 text-xl font-bold">
      <div>Gallery</div>

      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>

      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={() => router.refresh()}
      />
    </nav>
  );
}

