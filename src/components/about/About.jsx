import React, { useEffect } from "react";
import "./About.css";

const About = () => {
  // Scroll To top
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="about-section">
      <h2>About</h2>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At laboriosam
        nesciunt sapiente a eum molestias praesentium doloremque dolore
        exercitationem reiciendis error labore dolor ducimus cum, necessitatibus
        aspernatur rerum? Placeat, error!
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At laboriosam
        nesciunt sapiente a eum molestias praesentium doloremque dolore
        exercitationem reiciendis error labore dolor ducimus cum, necessitatibus
        aspernatur rerum? Placeat, error!
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At laboriosam
        nesciunt sapiente a eum molestias praesentium doloremque dolore
        exercitationem reiciendis error labore dolor ducimus cum, necessitatibus
        aspernatur rerum? Placeat, error!
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At laboriosam
        nesciunt sapiente a eum molestias praesentium doloremque dolore
        exercitationem reiciendis error labore dolor ducimus cum, necessitatibus
        aspernatur rerum? Placeat, error!
      </p>
    </div>
  );
};

export default About;
