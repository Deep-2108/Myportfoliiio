// ScrollMarquee.jsx
import React, { useEffect } from "react";
import gsap from "gsap";

const ScrollMarquee = () => {
  useEffect(() => {
    const handleScroll = (e) => {
      const scrollForward = e.deltaY > 0;
      const direction = scrollForward ? "-200%" : "0%";
      const rotation = scrollForward ? 180 : 0;

      gsap.to(".marque", {
        x: direction,
        ease: "none",
        repeat: -1,
        duration: 3,
      });

      gsap.to(".marque img", {
        rotate: rotation,
      });
    };

    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  return (
    <div className=" bg-indigo-700"
      style={{
        // backgroundColor: "7f6ce0",
        overflow: "hidden",
        display: "flex",
        width: "100%",
        padding: "1rem 0",
      }}
    >
      <div className="marquee-container" style={{ display: "flex" }}>
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <div
              className="marque"
              key={i}
              style={{
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                gap: "2vw",
                padding: "0 1.5vw",
              }}
            >
              <h1
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  whiteSpace: "nowrap",
                }}
              >
                Featured Projects
              </h1>
              <img
                src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
                alt="arrow"
                style={{ height: "40px", transition: "transform 0.5s" }}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ScrollMarquee;
