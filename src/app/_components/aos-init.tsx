"use client";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export function AosInit() {
  useEffect(() => {
    // Verifica se está no navegador antes de rodar o AOS
    if (typeof window !== "undefined") {
      Aos.init({
        duration: 800,
        once: true,
      });
    }
  }, []);

  return null;
}
