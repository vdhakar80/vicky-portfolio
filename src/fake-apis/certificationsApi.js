const certificationsData = {
  title: "Certifications",
  certifications: [
    {
      certificateName: "Infosys Certified React Professional",
      issuedBy: "Infosys",
      certificateUrl: "/Certificate1.png",
    },
    {
      certificateName: "Infosys Certified React Professional",
      issuedBy: "Infosys",
      certificateUrl: "/Certificate1.png",
    },
    {
      certificateName: "Infosys Certified React Professional",
      issuedBy: "Infosys",
      certificateUrl: "/Certificate1.png",
    },
    {
      certificateName: "Infosys Certified React Professional",
      issuedBy: "Infosys",
      certificateUrl: "/Certificate1.png",
    },
    {
      certificateName: "Infosys Certified React Professional",
      issuedBy: "Infosys",
      certificateUrl: "/Certificate1.png",
    },
  ],
};

export const certificationsDetails = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(certificationsData);
    }, 0);
  });
};
