import type { Metadata } from "next";
import "./globals.css";
import AppWagmiProvider from "./providers/wagmi";
import Header from "./components/header";
import { headers } from "next/headers";
import { cookieToInitialState } from "wagmi";
import { config } from "./config/wagmi.config";

export const metadata: Metadata = {
  title: "Ether",
  description: "Ether is a simple Ethereum wallet",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const initialState = cookieToInitialState(config, headers().get("cookie"));
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AppWagmiProvider initialState={initialState}>
          <Header />
          <main className="flex min-h-screen flex-col items-center px-2 m-auto w-full md:w-2/3">
            {children}
          </main>
        </AppWagmiProvider>
      </body>
    </html>
  );
}
