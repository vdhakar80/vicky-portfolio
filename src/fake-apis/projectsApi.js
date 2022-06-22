let menuData = [
  {
    name: "Resolve Workbench",
    associated: "Associated with Infosys",
  },
  {
    name: "Banker Dashboard",
    associated: "Associated with Infosys",
  },
  {
    name: "netflix",
    associated: "Associated with Infosys",
  },
  {
    name: "Resolve Workbench",
    associated: "Associated with Infosys",
  },
  {
    name: "Banker Dashboard",
    associated: "Associated with Infosys",
  },
  {
    name: "netflix",
    associated: "Associated with Infosys",
  },
];

export const projectsApi = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(menuData);
    }, 0);
  });
};
