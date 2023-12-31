import { Inter } from "next/font/google";
import { Container } from "@/components/layout/Container/Container";
import "@/styles/global.scss";

export const metadata = {
  title: "Home | Single Modal",
  description: "Home page description",
};

// Оптимальное подключение шрифта
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <Container>{children}</Container>

        <div id="modal-root" />
      </body>
    </html>
  );
}
