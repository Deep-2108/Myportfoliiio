import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const GuitarEffect = () => {
  const pathRef = useRef(null);
  const svgRef = useRef(null);

  const defaultPath = "M 0 100 Q 720 100 1440 100";

  useEffect(() => {
    const svg = svgRef.current;
    const path = pathRef.current;

    const handleMouseMove = (e) => {
      const rect = svg.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const newPath = `M 0 100 Q ${x} ${y} 1440 100`;

      gsap.to(path, {
        attr: { d: newPath },
        duration: 0.3,
        ease: "power3.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(path, {
        attr: { d: defaultPath },
        duration: 1.5,
        ease: "elastic.out(1, 0.2)",
      });
    };

    svg.addEventListener("mousemove", handleMouseMove);
    svg.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      svg.removeEventListener("mousemove", handleMouseMove);
      svg.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <svg
        ref={svgRef}
        viewBox="0 0 1440 200"
        className="w-full h-[200px]"
        preserveAspectRatio="none"
      >
        <path
          ref={pathRef}
          d="M 0 100 Q 720 100 1440 100"
          stroke="white"
          fill="transparent"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};

export default GuitarEffect;
