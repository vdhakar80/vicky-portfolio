const experienceData = {
  title: "Work Experience",
  experiences: [
    {
      companyName: "Exzeo Soltion Pvt. Ltd.",
      duration: "May 2022 - Present",
      summary:
        "Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.",
    },
    {
      companyName: "Infosys Limited",
      duration: "Jan 2021 - May 2022",
      summary:
        "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
    },
  ],
};

export const experienceDetails = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(experienceData);
    }, 0);
  });
};
