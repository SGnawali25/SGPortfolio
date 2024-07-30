import React from 'react';

const Projects = () => (
  <section id="projects">
    <h2>Projects</h2>
    <div className="project">
      <h3>CreditWise - December 2023</h3>
      <a href='https://github.com/sgnawali25/creditwise'>Github Link</a>
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
      <p><a href='https:smartshopper.sandeshgnawali.com.np'>Website Link</a></p>
      <p><a href='https://github.com/sgnawali25/smartshopper'>Github Link</a></p>
      <p><strong>Technologies:</strong> React, Express, NodeJS, MongoDB, Redux, HTML, CSS</p>
      <ul>
        <li>Developed a fully functional e-commerce website integrating Express and MongoDB to construct a robust backend, ensuring fast performance and data reliability.</li>
        <li>Created a user authentication system with JWT tokens and strong password protection using Bcrypt hashing.</li>
        <li>Utilized Mailtrap to enhance user experience, streamlining password reset functionalities.</li>
      </ul>
    </div>
  </section>
);

export default Projects;
