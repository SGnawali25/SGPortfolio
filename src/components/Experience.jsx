import React from "react";

const Experience = () => (
  <section id="experiences">
    <h2>Experiences</h2>
    <div className="experience-item">
      <h3>Software Engineering Intern - Department of Energy SRNL</h3>
      <p>
        <strong>March 2024 - Present</strong>
      </p>
      <ul>
        <li>
          Worked to model drift prediction for blind calibration of wide sensor
          network.
        </li>
        <li>
          Analyzing large datasets (1 year+ of sensor data) to derive actionable
          insights and inform decision-making process using machine learning
          algorithms.
        </li>
        <li>
          Collaborated with interdisciplinary teams of scientists and engineers
          from DOE-SRNL to address complex challenges and deliver innovative
          solutions.
        </li>
        <li>
          Currently working on implementing transfer entropy to analyze the
          information flow between sensors, aiming to improve the accuracy of
          the drift prediction model.
        </li>
      </ul>
    </div>
    <div className="experience-item">
      <h3>Research Assistant - White Dwarf Research</h3>
      <p>
        <strong>January 2024 - April 2024</strong>
      </p>
      <ul>
        <li>
          Developed and implemented a machine learning pipeline for anomaly
          detection in a TESS lightcurve dataset exceeding 61,000 entries,
          successfully identifying and classifying multiple previously unknown
          hot sub-dwarf candidates.
        </li>
        <li>
          Utilized dimensionality reduction techniques such as Principal
          Component Analysis (PCA), t-distributed Stochastic Neighbor Embedding
          (t-SNE), and Uniform Manifold Approximation and Projection (UMAP) to
          reduce the high-dimensional TESS light curve data.
        </li>
        <li>
          Engineered a comprehensive feature extraction methodology,
          incorporating 32 distinct features (e.g., amplitude, standard
          deviation, magnitude, peak periods, periodograms) to enhance
          classification accuracy.
        </li>
        <li>
          Deployed a Gaussian Mixture Model for outlier detection, contributing
          to a robust and reliable anomaly detection pipeline.
        </li>
      </ul>
    </div>
    <div className="experience-item">
      <h3>Software Developer Intern - Aspiring Youth Enrichment Services</h3>
      <p>
        <strong>September 2023 - December 2023</strong>
      </p>
      <ul>
        <li>
          Developed a responsive and scalable frontend using React and
          React-Redux for state management, enhancing user experience across
          multiple devices and platforms, which resulted in a 15% increase in
          user engagement.
        </li>
        <li>
          Integrated Salesforce to automate business processes and improve user
          interaction, leading to a 25% reduction in manual administrative tasks
          and more efficient workflows.
        </li>
        <li>
          Built and optimized RESTful APIs to streamline communication between
          frontend and backend, ensuring real-time data exchange and seamless
          application performance.
        </li>
        <li>
          Collaborated with a cross-functional team of designers and backend
          developers, following Agile methodology to deliver features through
          bi-weekly sprints.
        </li>
        <li>
          Resolved performance issues by optimizing state management and API
          integration, providing a smoother user experience during high-traffic
          periods.
        </li>
      </ul>
    </div>
  </section>
);

export default Experience;
