import calculator from "../assets/calculator-app.png";
import canvas from "../assets/collab-canvas.png";
import codeeditor from "../assets/code-together.png";
import youtube from "../assets/youtube-clone.png";
import weather from "../assets/weather-app.png";
import openSourceProject from "../assets/start-connect-hub.png";

export const projects = [
  {
    name: "Start Connect Hub",
    image: openSourceProject,
    description: [
      "Contributed to a GSSOC Open Source Project using React.js, focusing on developing a user-friendly and responsive interface.",
      "Resolved issues and implemented necessary corrections to enhance the website.",
    ],
    techStack: ["React JS"],
    github: "https://github.com/Priyaaa1/StartConnect-Hub", // Add the GitHub link here
    liveLink: "https://startconnect-hub.netlify.app/", // Add the live link here
  },
  {
    name: "Code Together",
    image: codeeditor, // Add the image URL here
    description: [
      "Developed a web-based code editor featuring HTML, CSS, and JavaScript functionality using iframes with Socket IO.",
      "Ensured compatibility and responsiveness across various browsers and devices.",
      "Provided a user-friendly interface with syntax highlighting and code auto-completion feature.",
    ],
    techStack: ["React JS", "Node JS", "Socket IO"],
    github: "https://github.com/codewithmurali/code-together", // Add the GitHub link here
    liveLink: "", // Add the live link here
  },
  {
    name: "Collab Canvas",
    image: canvas, // Add the image URL here
    description: [
      "Developed a real-time collaborative drawing application using React.js and Socket.IO.",
      "Enabled multiple users to draw together on a shared canvas.",
      "Implemented WebSocket communication for seamless collaboration.",
      "Ensured a smooth and intuitive user experience by integrating drawing tools such as brush size, color, and line styles.",
    ],
    techStack: ["React JS", "Node JS", "Socket IO"],
    github: "https://github.com/codewithmurali/collab-canvas", // Add the GitHub link here
    liveLink: "", // Add the live link here
  },
  {
    name: "Youtube Clone",
    image: youtube, // Add the image URL here
    description: [
      "Integrated Rapid API to fetch data seamlessly from YouTube's vast video library.",
      "Implemented a user-friendly interface that mimics YouTube's functionality.",
      "Ensured the application's responsiveness across various screen sizes and devices.",
    ],
    techStack: ["React JS", "MUI 5", "Rapid API"],
    github: "", // Add the GitHub link here
    liveLink: "https://youtube-clone-vite.vercel.app/", // Add the live link here
  },
  {
    name: "Weather App",
    image: weather, // Add the image URL here
    description: [
      "Developed a user-friendly interface that displays current weather conditions, forecasts, and additional weather details.",
      "Integrated OpenWeatherMap API to retrieve real-time weather data for various locations.",
    ],
    techStack: ["React JS", "Open API"],
    github: "", // Add the GitHub link here
    liveLink: "https://weather-app-vite-alpha.vercel.app/", // Add the live link here
  },
  {
    name: "Calculator App",
    image: calculator, // Add the image URL here
    description: [
      "Developed a robust calculator app using React JS and the Context API for streamlined and efficient state management.",
    ],
    techStack: ["React JS", "Context API"],
    github: "", // Add the GitHub link here
    liveLink: "https://calculator-vite.vercel.app/", // Add the live link here
  },
];
