const skillsData = [
  {
    link: "https://www.linkedin.com/in/vicky-dhakar-22a183184/",
    icon: "linkedin.png",
    title: "LinkedIn",
  },
  {
    link: "https://github.com/vdhakar80",
    icon: "github.png",
    title: "Github",
  },
  {
    link: "https://leetcode.com/vdhakar80/",
    icon: "leetcode.png",
    title: "Leetcode",
  },
  {
    link: "https://www.facebook.com/vicky.dhakar.52",
    icon: "instagram.png",
    title: "Instagram",
  },
  {
    link: "https://www.facebook.com/vicky.dhakar.52",
    icon: "facebook.png",
    title: "Facebook",
  },
];

export const linkssDetails = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(skillsData);
    }, 0);
  });
};
