import "~/styles/globals.css";
import "@uploadthing/react/styles.css";

import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next/types";
import { ClerkProvider } from '@clerk/nextjs'
import { TopNav } from "./_components/topnav";


export const metadata: Metadata = {
  title: "Ak's Gallery",
  description: "Ak's Gallery",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode,
  modal: React.ReactNode,
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable}`}>
        <body className="flex flex-col gap-4">
          <TopNav />
          <main className="overflow-y-scroll">{children}</main>
          <div id="modal-root" />
          {modal}
        </body>
      </html>
    </ClerkProvider>
  );
}
