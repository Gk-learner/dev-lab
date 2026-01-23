import { useEffect, useState } from "react";

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="backToTop">
      <h1>Back To Top</h1>

      <div>
        {Array.from({ length: 20 }).map((_, i) => (
          <p key={i}>Content for scrolling</p>
        ))}
      </div>

      <div className="container">
        {isVisible && (
          <button
            className="backtotop-btn"
            style={{ position: "fixed", bottom: "20px", right: "20px" }}
            onClick={scrollToTop}
            data-testid="back-to-top-btn"
          >
            Back to Top
          </button>
        )}
      </div>
    </div>
  );
}

export default BackToTop;
