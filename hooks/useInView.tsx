import { useState, useEffect, useRef } from "react";

type UseInViewOptions = IntersectionObserverInit;

const useInView = (
  options?: UseInViewOptions
): [React.RefObject<HTMLDivElement>, boolean] => {
  const [isInView, setIsInView] = useState<boolean>(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [options]);

  return [elementRef, isInView];
};

export default useInView;
