import React from 'react';

const Hackathons = () => (
  <section id="hackathons">
    <h2>Hackathons</h2>
    <div className="experience-item">
      <h3>Google HBCU Hackathon - 2023</h3>
      <a href='https://github.com/SGnawali25/Proferater' target='blank'>Github Link</a>
      <p><strong>Nov 2023</strong></p>
      <ul>
        <li>Developed Proferater, a web application built with MERN stack, aimed at enhancing the educational environment.</li>
        <li>Established a platform for students to rate their professors and provide classroom feedback, effectively addressing issues such as registration
difficulties and decreased motivation.</li>
        <li>Ensured constructive and respectful feedback by adhering to privacy and ethical guidelines when handling personal information and reviews.</li>
      </ul>
    </div>
    <div className="experience-item">
      <h3>EasyA and VeChain Hackathon</h3>
      <a href='https://github.com/SGnawali25/trisustain' target='blank'>Github Link</a>
      <p><strong>October 2023</strong></p>
      <ul>
        <li>Developed a full-stack web application using the MERN stack for hosting and participating in events focused on economic, social, and
environmental sustainability.</li>
        <li>Utilized MongoDB database for efficient data storage and retrieval and Cloudinary API for seamless image storage and management,
enhancing the visual appeal of the website.</li>
        <li>Integrated Web 3.0 technology and utilized VeChain wallet for secure and efficient payment transactions.</li>
      </ul>
    </div>
  </section>
);

export default Hackathons;
