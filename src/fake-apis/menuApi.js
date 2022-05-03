let menuData = {
  name: "Vicky Dhakar",
  role: "Full Stack Developer",
  navList: ["Home", "About", "Service", "Skills", "Education"],
};

export const menuApi = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(menuData);
    }, 0);
  });
};
