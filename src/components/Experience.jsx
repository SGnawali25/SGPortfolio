import React from 'react';

const Experience = () => (
  <section id="experience">
    <h2>Experience</h2>
    <div className="experience-item">
      <h3>Software Engineering Intern - Department of Energy SRNL</h3>
      <p><strong>March 2024 - Present</strong></p>
      <ul>
        <li>Worked to model drift prediction for blind calibration of wide sensor network.</li>
        <li>Analyzing large datasets (1 year+ of sensor data) to derive actionable insights and inform decision-making process using machine learning algorithms.</li>
        <li>Collaborated with interdisciplinary teams of scientists and engineers from DOE-SRNL to address complex challenges and deliver innovative solutions.</li>
        <li>Currently contributing to create a web dashboard for the result presentation of the drift calibration.</li>
      </ul>
    </div>
    <div className="experience-item">
      <h3>Research Assistant - White Dwarf Research</h3>
      <p><strong>January 2024 - April 2024</strong></p>
      <ul>
        <li>Developed and implemented a machine learning pipeline for anomaly detection in a TESS lightcurve dataset exceeding 61,000 entries, successfully identifying and classifying multiple previously unknown hot sub-dwarf candidates.</li>
        <li>Utilized dimensionality reduction techniques such as Principal Component Analysis (PCA), t-distributed Stochastic Neighbor Embedding (t-SNE), and Uniform Manifold Approximation and Projection (UMAP) to reduce the high-dimensional TESS light curve data.</li>
        <li>Engineered a comprehensive feature extraction methodology, incorporating 32 distinct features (e.g., amplitude, standard deviation, magnitude, peak periods, periodograms) to enhance classification accuracy.</li>
        <li>Deployed a Gaussian Mixture Model for outlier detection, contributing to a robust and reliable anomaly detection pipeline.</li>
      </ul>
    </div>
    <div className="experience-item">
      <h3>Software Developer Intern - Aspiring Youth Enrichment Services</h3>
      <p><strong>September 2023 - December 2023</strong></p>
      <ul>
        <li>Built a responsive and scalable frontend using React, leveraging Redux for state management.</li>
        <li>Engineered the backend using Node.js with Express to manage database interactions and business logic.</li>
        <li>Developed RESTful APIs to facilitate secure and efficient data communication between the frontend and backend.</li>
      </ul>
    </div>
  </section>
);

export default Experience;
