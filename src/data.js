const expertiseDescriptions = {
  'front-end':
    'I excel in developing responsive and dynamic web applications using HTML, CSS, and JavaScript. My expertise includes working with modern frameworks such as React and Angular to create intuitive and visually appealing user interfaces.',
  'back-end':
    'I have experience in building robust server-side applications using technologies like Node.js and Python. With strong skills in designing RESTful APIs, I ensure seamless data communication and integration across systems.',
  dsa: 'I possess a solid understanding of data structures and algorithms, enabling efficient problem-solving and optimized solutions. My analytical skills ensure high-quality, well-structured code for complex challenges.',
  freelancer:
    'In my freelancing journey, I have delivered end-to-end solutions, combining engaging front-end designs with reliable back-end architectures. My commitment is to provide high-quality work that aligns with and surpasses client expectations.',
}

const skillPercentage = {
  100: '100%',
  95: '95%',
  90: '90%',
  85: '85%',
  80: '80%',
  75: '75%',
  70: '70%',
  65: '65%',
  60: '60%',
}

const skillColors = {
  column1: {
    c1: 'rgb(251 162 245) ',
    c2: 'rgb(140 84 184)',
  },
  column2: {
    c1: 'rgb(231 208 165)',
    c2: 'rgb(255 124 0)',
  },
  column3: {
    c1: 'rgb(203 239 226)',
    c2: 'rgb(43 183 158)',
  },
}

const techstackDescriptions = {
  Frontend: [
    'Proficiently designed and implemented scalable, responsive web applications using cutting-edge front-end technologies, notably React.',
    'Focused on delivering a superior user experience through intuitive interfaces and enhanced usability.',
    'Successfully leveraged React Redux for robust data storage, ensuring seamless user interactions even in offline environments.',
  ],
  Backend: [
    'Utilized Node.js to create a robust back-end infrastructure, ensuring the smooth integration of REST APIs.',
    'Developed and deployed RESTful APIs to facilitate seamless data communication between front-end and back-end applications.',
  ],
  Database: [
    'Skillfully utilized PostgreSQL in conjunction with TypeORM to implement efficient and reliable database models.',
    'Implements MongoDB for enhanced data management, retrieval, and operational functions.',
    'Developed operational functions for queries, optimizing data management and retrieval processes.',
  ],
  CrossPlatform: [
    'Successfully crafted a mobile task management application using React Native, showcasing cross-platform development prowess.',
    'Demonstrated versatility by creating a wear OS application for task management using Kotlin.',
  ],
}

const projects = [
  {
    title: 'Skill India Digital Hub (SIDH)',
    description:
      'This app is used by the Ministry of Skill Development and Entrepreneurship (MSDE) to monitor the training centers. Integrated monitoring flow in the Skill India Digital Hub (SIDH) app, which allows users to inspect the physical training centers in India, and fill the inspection details in the dynamic forms.',
    tech: ['React Native', 'TypeScript', 'Redux Toolkit'],
    playStoreLink:
      'https://play.google.com/store/search?q=skill+india+digital+app&c=apps&hl=en_US',
  },
  {
    title: 'LivFitt',
    description:
      'LivFitt is a women-centric wellness mobile application focused on fitness and holistic health. It has core features such as personalized workout plans, yoga routines for prenatal and postnatal care, diet tracking, and product browsing for the in-app wellness store. ',
    tech: ['React Native', 'JavaScript', 'Firebase', 'Redux'],
    playStoreLink:
      'https://play.google.com/store/search?q=LivFitt&c=apps&hl=en_US',
  },
  {
    title: 'Wasalt',
    description:
      'Wasalt is a real estate marketplace app tailored for users in Saudi Arabia, enabling easy search and discovery of residential and commercial properties. I helped develop core functionalities including location-based search with map integration, property filtering, and user login/registration flows. ',
    tech: ['React Native', 'Maps SDK', 'REST APIs', 'Firebase'],
    playStoreLink:
      'https://play.google.com/store/apps/details?id=com.wasalt.app',
  },
  {
    title: 'Wasalt Business',
    description:
      'This is the business-facing version of the Wasalt platform, designed for brokers and real estate agents to manage their property listings and client leads. I was involved in building modules for lead management, property uploads with multimedia, and a dashboard for performance tracking.',
    tech: ['React Native', 'Redux', 'Firebase', 'Secure Storage'],
    playStoreLink:
      'https://play.google.com/store/search?q=wasalt&c=apps&hl=en_US',
  },
  {
    title: 'Poorna Guru',
    description:
      'Poorna Guru is a spiritual and educational Android app based on the teachings of Shri Karauli Shankar Mahadev. I contributed to the development of features like live pravachan streaming, offline audio/video playback, and daily spiritual content notifications.',
    tech: ['Android', 'Kotlin', 'Firebase'],
    playStoreLink:
      'https://play.google.com/store/apps/details?id=wasaltBusiness.app.com&hl=en_US',
  },

  {
    title: 'Portfolio Website',
    description:
      'A responsive personal portfolio website built using React.js and Tailwind CSS. It includes dark mode support, and showcases my projects, experience, and contact details. Designed for both desktop and mobile views with a focus on accessibility and minimal UI.',
    tech: ['React.js', 'Tailwind CSS', 'HTML', 'JavaScript'],
    playStoreLink: '',
  },
]

export {
  expertiseDescriptions,
  skillPercentage,
  skillColors,
  techstackDescriptions,
  projects,
}
