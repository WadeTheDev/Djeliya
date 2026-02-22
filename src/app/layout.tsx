import type { Metadata } from "next";
import "./globals.css";
import MainLayout from "@/components /Layouts/MainLayout";
import { ViewTransitions } from "next-view-transitions";
import PrevPathTracker from "@/components /PrevPathTracker";

export const metadata: Metadata = {
  title: "Djeliya",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body >
          <MainLayout>
            <PrevPathTracker />
            {children}
          </MainLayout>
        </body>
      </html>
    </ViewTransitions>
  );
}
