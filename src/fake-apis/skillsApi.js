const skillsData = {
  title: "My Skills",
  summary:
    "The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.",
  skills: {
    "React JS": 70,
    "Redux JS": 60,
    "Node JS": 70,
    "Express JS": 60,
    Javascript: 80,
    "Mongo DB": 50,
    HTML: 70,
    CSS: 60,
    "Core Java": 60,
    C: 70,
    "C++": 70,
    "Data Structure": 60,
    Git: 50,
  },
};

export const skillsDetails = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(skillsData);
    }, 0);
  });
};
