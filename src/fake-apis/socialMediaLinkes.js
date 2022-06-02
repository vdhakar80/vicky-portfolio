const skillsData = [
  {
    link: "https://leetcode.com/vdhakar80/",
    icon: "linkedin.png",
    title: "LinkedIn",
  },
  {
    link: "https://leetcode.com/vdhakar80/",
    icon: "github.png",
    title: "Github",
  },
  {
    link: "https://leetcode.com/vdhakar80/",
    icon: "leetcode.png",
    title: "Leetcode",
  },
  {
    link: "https://leetcode.com/vdhakar80/",
    icon: "instagram.png",
    title: "Instagram",
  },
  {
    link: "https://leetcode.com/vdhakar80/",
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
