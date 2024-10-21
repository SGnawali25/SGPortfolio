import React from "react";

const Projects = () => (
  <section id="projects">
    <h2>Projects</h2>

    <div className="project">
      <h3>Sign Language Detector - February 2024</h3>
      <a
        href="https://github.com/SGnawali25/SignLanguageDetector"
        target="blank"
      >
        Github Link
      </a>
      <p>
        <strong>Technologies:</strong> Python, OpenCV, Tensorflow Object
        Detection API
      </p>
      <ul>
        <li>
          Developed a real-time sign language detection system for individuals
          who are deaf or mute using Python, OpenCV, and TensorFlow, for precise
          gesture recognition.
        </li>
        <li>
          Utilized transfer learning and TensorFlow’s Object Detection API to
          build a detection model, demonstrating expertise in advanced machine
          learning techniques and model refinement.
        </li>
        <li>
          Managed the entire project, from data collection and annotation to
          model training and real-time implementation, guaranteeing the system’s
          reproducibility and future scalability.
        </li>
      </ul>
    </div>

    <div className="project">
      <h3>CreditWise - December 2023</h3>
      <a href="https://github.com/sgnawali25/creditwise" target="blank">
        Github Link
      </a>
      <p>
        <strong>Technologies:</strong> Python, Matplotlib, Pandas, Numpy,
        ScikitLearn, React, Django
      </p>
      <ul>
        <li>
          Designed and implemented an automated loan prediction system utilizing
          machine learning algorithms to approve loans based on client-provided
          information.
        </li>
        <li>
          Trained the model using various machine learning algorithms including
          neural networks and Naive Bayes, and selected the optimal algorithm
          based on metrics such as accuracy, precision, and recall.
        </li>
        <li>
          Developed a user-friendly web interface utilizing React.js to deliver
          an optimal user experience and interface design.
        </li>
        <li>
          Created a Flask backend system capable of receiving user information
          and providing real-time loan approval status.
        </li>
        <li>
          Utilized libraries such as Matplotlib and Seaborn to visually analyze
          data distributions and identify the most appropriate machine-learning
          algorithm for the task.
        </li>
      </ul>
    </div>
    <div className="project">
      <h3>SmartShopper - May 2023 to August 2023</h3>
      <p>
        <a href="https://smartshopper.sandeshgnawali.com.np" target="blank">
          Website Link
        </a>
      </p>
      <p>
        <a href="https://github.com/sgnawali25/smartshopper" target="blank">
          Github Link
        </a>
      </p>
      <p>
        <strong>Technologies:</strong> React, Express, NodeJS, MongoDB, Redux,
        HTML, CSS, Docker, Mailtrap, Cloudinary
      </p>
      <ul>
        <li>
          Developed a full-stack e-commerce website using the MERN stack,
          integrating a ReactJS frontend with an ExpressJS and MongoDB backend
          for efficient performance and reliable data management.
        </li>
        <li>
          Deployed two backend servers on Vercel and implemented a load balancer 
          using the round-robin algorithm to distribute traffic evenly, optimizing 
          performance and reliability.
        </li>
        <li>
          Handled image uploads seamlessly by integrating Cloudinary, allowing
          users and admins to easily upload and manage product images with
          secure cloud storage.
        </li>
        <li>
          Created a secure user authentication and login system with JWT and
          managed email notifications using Mailtrap for testing, ensuring
          proper email communication for tasks such as account confirmation and
          password resets.
        </li>
        <li>
          Integrated Stripe Gateway API to handle payment transactions securely
          for registered customers, enabling smooth and safe e-commerce
          transactions.
        </li>
        <li>
          Implemented a role-based user system, allowing admins to manage
          products, users, and personalize user experiences through a
          user-friendly admin interface.
        </li>
        <li>
          Deployed the application in a Docker container environment for
          scalability, simplifying the deployment and ensuring consistent
          operation across different environments.
        </li>
      </ul>
    </div>

    <div className="project">
      <h3>EchoChain - December 2022 to February 2023</h3>
      <p>
        <a href="https://ecochain.sandeshgnawali.com.np" target="blank">
          Website Link
        </a>
      </p>
      <p>
        <a href="https://github.com/SGnawali25/EcoChain" target="blank">
          Github Link
        </a>
      </p>
      <p>
        <strong>Technologies:</strong> React, Express, NodeJS, MongoDB, HTML,
        CSS
      </p>
      <ul>
        <li>
          Developed Ecochain, a residential waste collection app promoting
          recycling and sustainable waste management, with a user-friendly
          ReactJS interface and comprehensive dashboard.
        </li>
        <li>
          Implemented JWT authentication for user security and data protection,
          and added an interactive map feature using the Leaflet library for
          easy navigation to collection centers.
        </li>
        <li>
          Integrated Google Maps API to visualize routes, enhancing navigation
          and real-time location tracking features.
        </li>
      </ul>
    </div>
  </section>
);

export default Projects;
