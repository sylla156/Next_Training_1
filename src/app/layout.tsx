import "./globals.css";
import Footer from "@/components/Footer";
import ThemeProvider, { theme } from "@/context/ThemeProvider";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <html lang="en">
        <body>
          {children}
          <Footer />
        </body>
      </html>
    </ThemeProvider>
  );
}

