import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../assets/CSS/NewHeaders.css";

const NewHeaders = ({ backgroundImage, title, subtitle, buttonText }) => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [contentOpacity, setContentOpacity] = useState(1);

  useEffect(() => {
    const updateParallax = () => {
      const scrollTop = window.scrollY;
      const sampleSectionTop =
        document.querySelector(".sample-section").offsetTop;
      const headerHeight = document.querySelector(
        ".sample-header-section"
      ).offsetHeight;
      setHeaderHeight(headerHeight);

      // Calculate the scroll threshold for content opacity
      const scrollThreshold = headerHeight / 4;

      // Update content opacity based on scroll position
      setContentOpacity(scrollTop < scrollThreshold ? 1 : 0);

      document.querySelector(
        ".sample-section"
      ).style.marginTop = `${headerHeight}px`;
      document.querySelector(".sample-header").style.height = `${
        headerHeight - scrollTop
      }px`;

      // Adjust the opacity of the button
      const button = document.querySelector(".pro-button");
      if (button) {
        button.style.opacity = contentOpacity;
      }
    };

    // Initial call to set the parallax height
    updateParallax();

    // Event listeners for scroll and resize
    window.addEventListener("scroll", updateParallax);
    window.addEventListener("resize", updateParallax);

    // Clean up the event listeners when the component unmounts
    return () => {
      window.removeEventListener("scroll", updateParallax);
      window.removeEventListener("resize", updateParallax);
    };
  }, [headerHeight, contentOpacity]); // Include contentOpacity in the dependencies

  return (
    <>
      <div className="sample-header" style={{ marginTop: "60px", backgroundImage: `url(${backgroundImage})` }}>
        <div className="sample-header-section">
          <h1
            style={{
              opacity: contentOpacity,
              color: "#fff",
              fontSize: "3rem",
              marginBottom: "1rem",
            }}
          >
            {title}
          </h1>
          <h2
            style={{
              opacity: contentOpacity,
              color: "#fff",
              fontSize: "1.5rem",
            }}
          >
            {subtitle}
          </h2>
          <button
            className="pro-button"
            onMouseEnter={(e) => (e.target.style.background = "#F08E00")}
            onMouseLeave={(e) => (e.target.style.background = "#2A2A2A")}
          >
            {buttonText}
          </button>
        </div>
      </div>
      <div className="sample-section-wrap">
        <div className="sample-section">{/* Your content goes here */}</div>
      </div>
    </>
  );
};

NewHeaders.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default NewHeaders;
