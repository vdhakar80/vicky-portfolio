let menuData = {
  profilePicture: "vicky.jpeg",
  name: "Vicky Dhakar",
  role: "Full Stack Developer",
  navList: [
    "Home",
    "About",
    "Skills",
    "Education",
    "Experience",
    "Certifications",
    "Projects",
    "Contact",
  ],
};

export const menuApi = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(menuData);
    }, 0);
  });
};
