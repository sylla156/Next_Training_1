export const runtime = 'edge' 
import "./globals.css";
import Footer from "@/components/Footer";
import ContentProvider from "@/context/ContentProvider";
import ThemeProvider from "@/context/ThemeProvider";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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

const MyComponent: React.FC = () => {
  React.useEffect(() => {
    const cursor = document.createElement("div");
    cursor.className = "cursor";
    document.body.appendChild(cursor);

    const cursorF = document.createElement("div");
    cursorF.className = "cursor-f";
    cursor.appendChild(cursorF);

    let cursorX = 0;
    let cursorY = 0;
    let pageX = 0;
    let pageY = 0;

    function lerp(start: number, end: number, amount: number): number {
      return (1 - amount) * start + amount * end;
    }

    if ("ontouchstart" in window) {
      cursor.style.display = "none";
      cursorF.style.display = "none";
    }

    const handleMouseLeave = () => {
      cursor.classList.add("hidden");
    };

    const handleMouseEnter = () => {
      cursor.classList.remove("hidden");
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    let clicked = false;
    let startY: number | null = null;
    let endY: number | null = null;

    const mousedown = (e: any) => {
      cursor.classList.add("clicked");

      clicked = true;
      startY = e.clientY || null;
    };

    const mouseup = (e: any) => {
      cursor.classList.remove("clicked");

      endY = e.clientY || endY;
      if (clicked && startY && Math.abs(startY - endY!) >= 40) {
        // Assuming `signToDir` is defined elsewhere in your code
        // and `go()` is a function that handles directional movement
        // go(signToDir[Math.sign(startY - endY!)]);
        clicked = false;
        startY = null;
        endY = null;
      }
    };

    window.addEventListener("mousedown", mousedown);
    window.addEventListener("touchstart", mousedown);
    window.addEventListener("touchmove", (e) => {
      if (clicked) {
        endY = e.touches && e.touches[0].clientY;
      }
    });
    window.addEventListener("touchend", mouseup);
    window.addEventListener("mouseup", mouseup);

    const handleMouseMove = (e: MouseEvent) => {
      pageX = e.clientX;
      pageY = e.clientY;
      cursor.style.left = `${e.clientX - 4}px`;
      cursor.style.top = `${e.clientY - 4}px`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    function updateCursor() {
      const dx = pageX - cursorX;
      const dy = pageY - cursorY;
      cursorX += dx * 0.1;
      cursorY += dy * 0.1;
      cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
      cursorF.style.transform = `translate(${cursorX - 15}px, ${
        cursorY - 15
      }px)`;
      requestAnimationFrame(updateCursor);
    }

    requestAnimationFrame(updateCursor);

    // Clean up event listeners when component unmounts
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mousedown", mousedown);
      window.removeEventListener("touchstart", mousedown);
      window.removeEventListener("touchmove", (e) => {});
      window.removeEventListener("touchend", mouseup);
      window.removeEventListener("mouseup", mouseup);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return <div className="content">Your component content here</div>;
};
