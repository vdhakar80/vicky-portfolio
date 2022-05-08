const educationData = {
  title: "Who Am I?",
  paras: [
    "Hi I'm Jackson Ford On her way she met a copy. The copy warned the Little Blind T",
    "Hi I'm Jackson Ford On her way she met a copy. The copy warned the Little Blind THi I'm Jackson Ford On her way she met a copy. The copy warned the Little Blind T",
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
