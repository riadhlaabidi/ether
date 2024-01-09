import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="mt-8 w-full lg:w-[70%]">{children}</div>;
}
