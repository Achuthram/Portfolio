import { useEffect } from "react";

export default function useActiveNav() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const links = document.querySelectorAll("nav a");

    window.addEventListener("scroll", () => {
      let current = "";

      sections.forEach((sec) => {
        if (window.scrollY >= sec.offsetTop - 100) {
          current = sec.id;
        }
      });

      links.forEach((a) => {
        a.classList.remove("active");
        if (a.getAttribute("href") === "#" + current) {
          a.classList.add("active");
        }
      });
    });
  }, []);
}