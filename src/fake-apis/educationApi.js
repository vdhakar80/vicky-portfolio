const educationData = [
  {
    title: "Bachelor of Engineering",
    body: "Pursued from Madhav Institute of Technology And Science, Gwalior, Madhya Pradesh, India in stream of Information technology",
  },
  {
    title: "Higher Secondary School",
    body: "Pursued from Madhav Institute of Technology And Science, Gwalior, Madhya Pradesh, India in stream of Information technology",
  },
  {
    title: "High School",
    body: "Pursued from Madhav Institute of Technology And Science, Gwalior, Madhya Pradesh, India in stream of Information technology",
  },
];

export const educationDetails = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(educationData);
    }, 0);
  });
};
