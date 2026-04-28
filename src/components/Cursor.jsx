import { useEffect } from "react";

function Cursor() {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");

    document.addEventListener("mousemove", (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    });
  }, []);

  return <div className="cursor"></div>;
}

export default Cursor;