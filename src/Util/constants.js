import calculator from "../assets/calculator-app.png";
import canvas from "../assets/collab-canvas.png";
import codeeditor from "../assets/code-together.png";
import youtube from "../assets/youtube-clone.png";
import weather from "../assets/weather-app.png";
import openSourceProject from "../assets/start-connect-hub.png";
import decra from "../assets/decra.png"
import health from "../assets/health_remainder.png"
import form from "../assets/form_validation.jpg"

export const projects = [
  {
    name: "Start Connect Hub",
    image: openSourceProject,
    description: [
      "Contributed to a GSSOC Open Source Project using React.js, focusing on developing a user-friendly and responsive interface.",
      "Resolved issues and implemented necessary corrections to enhance the website.",
    ],
    techStack: ["React JS"],
    github: "https://github.com/Priyaaa1/StartConnect-Hub", 
    liveLink: "https://startconnect-hub.netlify.app/", 
  },  {
    name: "Youtube Clone",
    image: youtube, 
    description: [
      "Integrated Rapid API to fetch data seamlessly from YouTube's vast video library.",
      "Implemented a user-friendly interface that mimics YouTube's functionality.",
      "Ensured the application's responsiveness across various screen sizes and devices.",
    ],
    techStack: ["React JS", "MUI 5", "Rapid API"],
    github: "", 
    liveLink: "https://youtube-clone-vite.vercel.app/", 
  },
  {
    name: "Code Together",
    image: codeeditor, 
    description: [
      "Developed a web-based code editor featuring HTML, CSS, and JavaScript functionality using iframes with Socket IO.",
      "Ensured compatibility and responsiveness across various browsers and devices.",
      "Provided a user-friendly interface with syntax highlighting and code auto-completion feature.",
    ],
    techStack: ["React JS", "Node JS", "Socket IO"],
    github: "https://github.com/codewithmurali/code-together", 
    liveLink: "", 
  },
  {
    name: "Collab Canvas",
    image: canvas, 
    description: [
      "Developed a real-time collaborative drawing application using React.js and Socket.IO.",
      "Enabled multiple users to draw together on a shared canvas.",
      "Implemented WebSocket communication for seamless collaboration.",
      "Ensured a smooth and intuitive user experience by integrating drawing tools such as brush size, color, and line styles.",
    ],
    techStack: ["React JS", "Node JS", "Socket IO"],
    github: "https://github.com/codewithmurali/collab-canvas", 
    liveLink: "",
  },

  {
    name: "DECRA",
    image: decra, 
    description: [
      "Developed a comprehensive website for my department's national symposium using React.js.",
      "Created and maintained a user-friendly, responsive interface to ensure optimal user experience.",
      "Implemented various features and enhancements to meet the symposium's requirements."
    ],
    techStack: ["React JS"],
    github: "https://github.com/yourusername/decra-project", 
    liveLink: "https://decra.vercel.app/", 
  }, 
  {
    "name": "Health-Remainder",
    "image": health, 
    "description": [
      "Developed a dynamic health reminder application using HTML, CSS, JavaScript, and Node.js.",
      "Designed and implemented a user-friendly interface with responsive design principles for accessibility across various devices.",
      "Utilized Node.js for server-side logic to handle user data and email notifications effectively.",
    ],
    "techStack": ["HTML", "CSS", "JavaScript", "Node.js"],
    "github": "https://github.com/yourusername/health-remainder",
    "liveLink": "https://health-remainder.netlify.app/"
  },  
  {
    "name": "Form Validation",
    "image": form, 
    "description": [
      "Developed a robust form validation system using React.js.",
      "Designed intuitive and user-friendly forms with real-time validation feedback.",
      "Implemented client-side validation with JavaScript to ensure accurate data submission.",
      "Utilized Node.js for server-side validation and data handling to enhance form security."
    ],
    "techStack": ["React JS"],
    "github": "https://github.com/yourusername/form-validation",
    "liveLink": "https://form-validation.netlify.app/"
  },  
    {
      "name": "Weather App",
      "image": weather, 
      "description": [
        "Developed a user-friendly interface that displays current weather conditions, forecasts, and additional weather details.",
        "Integrated OpenWeatherMap API to retrieve real-time weather data for various locations.",
        "Implemented responsive design principles to ensure usability on both desktop and mobile devices."
      ],
      "techStack": ["React JS", "Open API"],
      "github": "", 
      "liveLink": "https://weather-app-vite-alpha.vercel.app/"
    },
    {
      "name": "Calculator App",
      "image": calculator,      
      "description": [
        "Developed a robust calculator app using React JS and the Context API for streamlined and efficient state management.",
        "Designed an intuitive user interface with clear button layouts and responsive design for optimal usability.",
        "Added keyboard support for enhanced user interaction and accessibility.",
      ],
      "techStack": ["React JS", "Context API"],
      "github": "", 
      "liveLink": "https://calculator-vite.vercel.app/"
    }
  
];
