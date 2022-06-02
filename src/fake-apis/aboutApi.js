const educationData = {
  title: "Who Am I?",
  paras: [
    `Accomplished Web Developer with 1+ years of extensive experience in 
    successfully designing and developing IT solutions, especially in banking 
    domain following their enterprise grade development processes. Expert 
    in designing high-performance, secure, and scalable web applications using React Js and Node Js
     along with exposure in architecture, design, development, and 
    maintenance key components of web applications. I am able to effectively
    self-manage during independent projects, as well as collaborate in a
    team setting. I am always eager to learn new technologies and methodilogies.
    `,
    `I have recently worked on a banking project of Australia, involved 
    in designing and developing web application using React JS and Node js for integrating a 
    dashboard and Resolve workbench in banking application for management of user’s account and complaints.
`,
  ],
  roles: [
    {
      logo: "reactDeveloper.png",
      role: "React Developer",
      borderColor: "rgb(107, 240, 238)",
    },
    {
      logo: "nodeDeveloper.png",
      role: "Node Developer",
      borderColor: "rgb(50, 138, 44)",
    },
    {
      logo: "fullStackDeveloper.png",
      role: "Full Stack Developer",
      borderColor: "black",
    },
    {
      logo: "agileMethodology.png",
      role: "Agile Methodology",
      borderColor: "rgb(33, 106, 130)",
    },
  ],
};

export const aboutApi = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(educationData);
    }, 0);
  });
};
