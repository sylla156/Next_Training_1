import "./globals.css";
import Footer from "@/components/Footer";
import ContentProvider from "@/context/ContentProvider";
import ThemeProvider from "@/context/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.count()
  return (
    <ThemeProvider>
      <ContentProvider>
        <html lang="en" className="dark">
          <body>
            {children}
            <Footer />
          </body>
        </html>
      </ContentProvider>
    </ThemeProvider>
  );
}
