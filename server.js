const express = require("express");
const cors = require('cors');
const app = express();
app.use(express.json());

app.use(cors({
    origin: '*', 
}));
let videos = [
    {
      id: 1,
      thn: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true",
      profile:
        "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true",
      title: "Bubuli | Coke Studio Bangla | Season One | RituRaj X Nandita",
      owner: "Coke Studio Bangla",
      verified: "",
      class: "title",
      class2: "des",
      class3: "vd",
      veiw: "1.5M",
      time: "2 days",
    },
    {
      id: 2,
      thn: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-9.png?raw=true",
      profile:
        "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(2).png?raw=true",
      title: "INfinix Note 12: Amoled Helio G88 SoC!",
      owner: "ATC Android ToTo Company",
      verified: "",
      class: "title",
      class2: "des",
      class3: "vd",
      veiw: "4.2M",
      time: "2 days",
    },
    {
      id: 3,
      thn: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-10.png?raw=true",
      profile:
        "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(3).png?raw=true",
      title: "My First UX Design case study-This got me my first job.",
      owner: "Saptarshi Prakash",
      verified: "off",
      class: "title",
      class2: "des",
      class3: "vd",
      veiw: "4.8K",
      time: "1 years",
    },
    {
      id: 4,
      thn: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-11.png?raw=true",
      profile: "",
      title: "My Mix",
      owner: "Lopamudra Mitra, Anupam Roy, and more",
      verified: "off",
      class: "title2",
      class2: "des2",
      class3: "vd2",
      veiw: "",
      time: "",
    },
    {
      id: 5,
      thn: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-4.png?raw=true",
      profile:
        "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(4).png?raw=true",
      title: "UX Design-What is it? (From AJ&Smart)",
      owner: "AJ&Smart",
      verified: "",
      class: "title",
      class2: "des",
      class3: "vd",
      veiw: "150K",
      time: "3 years",
    },
    {
      id: 6,
      thn: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-5.png?raw=true",
      profile: "",
      title:
        "MIX - Mombati | Mohan Sharif | Dhakayia Dose | MAhib Ahsan ft Anika",
      owner: "Mohon Sharif, Odd Signature, Shayan Chowdhury Arnob, and more",
      verified: "off",
      class: "title2",
      class2: "des2",
      class3: "vd2",
      veiw: "",
      time: "",
    },
    {
      id: 7,
      thn: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-6.png?raw=true",
      profile:
        "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(5).png?raw=true",
      title: " | 48 VISA-FREE",
      owner: "Nadir On The Go",
      verified: "off",
      class: "title",
      class2: "des",
      class3: "vd",
      veiw: "1.7M",
      time: "1 years",
    },
    {
      id: 8,
      thn: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-7.png?raw=true",
      profile:
        "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(6).png?raw=true",
      title: "14 Advanced Tips to Design FASTER in Figma",
      owner: "Mizko",
      verified: "",
      class: "title",
      class2: "des",
      class3: "vd",
      veiw: "53K",
      time: "2 years",
    },
    {
      id: 9,
      thn: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail.png?raw=true",
      profile:
        "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(5).png?raw=true",
      title: "| 48 VISA-FREE",
      owner: "Nadir On The Go",
      verified: "",
      class: "title",
      class2: "des",
      class3: "vd",
      veiw: "1.5M",
      time: "2 days",
    },
    {
      id: 10,
      thn: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-1.png?raw=true",
      profile:
        "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204-1.png?raw=true",
      title: "random title",
      owner: "random",
      verified: "",
      class: "title",
      class2: "des",
      class3: "vd",
      veiw: "1.5M",
      time: "2 days",
    },
    {
      id: 11,
      thn: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-2.png?raw=true",
      profile:
        "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204-1.png?raw=true",
      title: "random title",
      owner: "random",
      verified: "",
      class: "title",
      class2: "des",
      class3: "vd",
      veiw: "1.5M",
      time: "2 days",
    },
    {
      id: 12,
      thn: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-3.png?raw=true",
      profile:
        "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(3).png?raw=true",
      title: "Microsoft placement offer | 100% scholar",
      owner: "Saptarshi Prakash",
      verified: "off",
      class: "title",
      class2: "des",
      class3: "vd",
      veiw: "1.5M",
      time: "2 days",
    },
  ];
  
  const recop = [
    { id: 1, title: "All" },
    { id: 2, title: "Coke Studio" },
    { id: 3, title: "UK" },
    { id: 4, title: "Case Study" },
    { id: 5, title: "Music" },
    { id: 6, title: "Bnagla Lofi" },
    { id: 7, title: "Tour" },
    { id: 8, title: "Saintmartin" },
    { id: 9, title: "Tech" },
    { id: 10, title: "Iphone 13" },
    { id: 10, title: "User Interface Design" },
    { id: 11, title: "Computer" },
  ];
  
  const subs = [
    {
      id: 1,
      tile: "Nadir on the go",
      img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201.png?raw=true",
      class: "new",
    },
    {
      id: 2,
      tile: "Coke Studio Bangla",
      img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true",
      class: "new",
    },
    {
      id: 3,
      tile: "MKBHD",
      img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(2).png?raw=true",
      class: "",
    },
    {
      id: 4,
      tile: "Figma",
      img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(3).png?raw=true",
      class: "new",
    },
    {
      id: 5,
      tile: "ATC Andriod ToTo C...",
      img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(4).png?raw=true",
      class: "",
    },
    {
      id: 6,
      tile: "Alux.com",
      img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(5).png?raw=true",
      class: "new",
    },
  ];
  
  app.get("/videos", (req, res) => {
    res.json(videos);
  });
  
  app.get("/recop", (req, res) => {
    res.json(recop);
  });
  
  app.get("/subs", (req, res) => {
    res.json(subs);
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});