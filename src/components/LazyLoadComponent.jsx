import clsx from "clsx";
import { useEffect, useState, useRef } from "react";

const LazyLoadComponent = ({ children, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={elementRef}
      className={clsx(
        `transition duration-800 ease-out`,
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      )}
      style={{ transitionDelay: delay ? `${delay}ms` : "" }}
    >
      {children}
    </div>
  );
};

export default LazyLoadComponent;
