import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [scroll, setScroll] = useState<number>(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / height) * 100;
      setScroll(progress);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "4px",
        width: `${scroll}%`,
        background:
          "linear-gradient(90deg, #FF6B6B 0%, #FFE66D 50%, #FFEAA7 100%)",
        zIndex: 9999,
        transition: "width 0.1s linear",
      }}
    ></div>
  );
};

export default ScrollProgress;
