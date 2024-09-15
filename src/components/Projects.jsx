import React from 'react';

const Projects = () => (
  <section id="projects">
    <h2>Projects</h2>

    <div className="project">
      <h3>Sign Language Detector - February 2024</h3>
      <a href='https://github.com/SGnawali25/SignLanguageDetector' target='blank'>Github Link</a>
      <p><strong>Technologies:</strong> Python, OpenCV, Tensorflow Object Detection API</p>
      <ul>
        <li>Developed a real-time sign language detection system using Python, OpenCV, and TensorFlow, for precise gesture recognition.</li>
        <li>Utilized transfer learning and TensorFlow’s Object Detection API to build a detection model, demonstrating expertise in advanced
machine learning techniques and model refinement.</li>
        <li>Managed the entire project, from data collection and annotation to model training and real-time implementation, guaranteeing the system’s
reproducibility and future scalability.</li>
      </ul>
    </div>
    
    <div className="project">
      <h3>CreditWise - December 2023</h3>
      <a href='https://github.com/sgnawali25/creditwise' target='blank'>Github Link</a>
      <p><strong>Technologies:</strong> Python, Matplotlib, Pandas, Numpy, ScikitLearn, React, Django</p>
      <ul>
        <li>Designed and implemented an automated loan prediction system utilizing machine learning algorithms to approve loans based on client-provided information.</li>
        <li>Trained the model using various machine learning algorithms including neural networks and Naive Bayes, and selected the optimal algorithm based on metrics such as accuracy, precision, and recall.</li>
        <li>Developed a user-friendly web interface utilizing React.js to deliver an optimal user experience and interface design.</li>
        <li>Created a Flask backend system capable of receiving user information and providing real-time loan approval status.</li>
        <li>Utilized libraries such as Matplotlib and Seaborn to visually analyze data distributions and identify the most appropriate machine-learning algorithm for the task.</li>
      </ul>
    </div>
    <div className="project">
      <h3>SmartShopper  - May 2023 to August 2023</h3>
      <p><a href='https://smartshopper.sandeshgnawali.com.np' target='blank'>Website Link</a></p>
      <p><a href='https://github.com/sgnawali25/smartshopper' target='blank'>Github Link</a></p>
      <p><strong>Technologies:</strong> React, Express, NodeJS, MongoDB, Redux, HTML, CSS, Docker, Mailtrap, Cloudinary</p>
      <ul>
        <li>Developed a fully functional e-commerce website integrating Express and MongoDB to construct a robust backend, ensuring fast performance and data reliability.</li>
        <li>Created a user authentication system with JWT tokens and strong password protection using Bcrypt hashing.</li>
        <li>Utilized Mailtrap to enhance user experience, streamlining password reset functionalities.</li>
      </ul>
    </div>

    <div className="project">
      <h3>EchoChain  - December 2022 to February 2023</h3>
      <p><a href='https://ecochain.sandeshgnawali.com.np' target='blank'>Website Link</a></p>
      <p><a href='https://github.com/SGnawali25/EcoChain' target='blank'>Github Link</a></p>
      <p><strong>Technologies:</strong> React, Express, NodeJS, MongoDB, HTML, CSS</p>
      <ul>
        <li>Developed Ecochain, a residential waste collection app promoting recycling and sustainable waste management, with a user-friendly ReactJS
interface and comprehensive dashboard.</li>
        <li>Implemented JWT authentication for user security and data protection, and added an interactive map feature using the Leaflet library for
easy navigation to collection centers.</li>
        <li>Integrated Google Maps API to visualize routes, enhancing navigation and real-time location tracking features.</li>
      </ul>
    </div>
  </section>
);

export default Projects;
