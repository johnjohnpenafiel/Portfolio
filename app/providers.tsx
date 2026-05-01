"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import { ThemeProvider } from "next-themes";
import { ReactLenis, useLenis } from "lenis/react";

function ScrollReset() {
  const pathname = usePathname();
  const lenis = useLenis();

  useLayoutEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true, force: true });
    }
    window.scrollTo(0, 0);
  }, [pathname, lenis]);

  return null;
}

export function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const disableLenis = pathname === "/projects/parallaxui";

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      {disableLenis ? (
        <>
          <ScrollReset />
          {children}
        </>
      ) : (
        <ReactLenis
          root
          options={{
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            autoRaf: true,
          }}
        >
          <ScrollReset />
          {children}
        </ReactLenis>
      )}
    </ThemeProvider>
  );
}
