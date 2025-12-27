import { useEffect } from "react";

export default function useSectionHash(sectionIds) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id) {
              // Update URL without causing scroll jump
              history.replaceState(null, "", `#${id}`);
            }
          }
        });
      },
      {
        // Tuning this controls WHEN the section is considered "active"
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);
}
