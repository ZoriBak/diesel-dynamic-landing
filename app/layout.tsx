import "./globals.css";

export const metadata = {
  title: "DIESEL — Spill the Real",
  description: "Raw. Unapologetic. Human.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
