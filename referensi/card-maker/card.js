
const projectsLagi = [
  {
    title: "Kalkulator Zakat Emas",
    description: "Aplikasi Web untuk menghitung zakat emas dengan fitur riawayat penyimpanan menggunakan localStorage",
    image: "kalkulator.png",
    tags: ["HTML"],
    tags2: ["PHYTON"],
    link: "https://github.com/mahirdev/belajar-javascript/zakat-emas",
    github: "Lihat lebih lanjut"
  },
  {
    title: "Lampu Merah",
    description: "Simulasi Lampu merah",
    image: "traffic-lamp.png",
    tags: ["HTML"],
    tags2: ["CSS"],
    link: "https://github.com/mahirdev/belajar-javascript/zakat-emas",
  },
  {
    title: "Portofolio",
    description: "Simulasi Lampu merah",
    image: "image.png",
    tags: ["HTML"],
    tags2: ["JS"],
    link: "https://github.com/mahirdev/belajar-javascript/zakat-emas",
  },
];

const gallery = document.getElementById("gallery");

for (let i = 0; i < projectsLagi.length; i++) {
  let project = projectsLagi[i];

  let card = document.createElement("div");
  card.className = "card";

  let title = document.createElement("h3");
  title.textContent = project.title;
  title.className = "card-title";

  let cardInfo = document.createElement("div")
  cardInfo.className = "card-info";

  let techInfo = document.createElement("div")
  techInfo.className = "tech-info";

  let description = document.createElement("p");
  description.textContent = project.description;
  description.className = "card-description";

  let img = document.createElement("img");
  img.src = project.image;
  img.className = "img";

  let tags = document.createElement("span");
  tags.src = project.tags;
  tags.className = "tags";
  tags.textContent = project.tags;

  let tags2 = document.createElement("span");
  tags2.src = project.tags2;
  tags2.className = "tags2";
  tags2.textContent = project.tags2;

  let link = document.createElement("a");
  link.src = project.tags;
  link.className = "link";
  link.textContent = "Lihat lebih lanjut";
  link.href = project.link;


  gallery.appendChild(card);
  card.appendChild(img);
  card.appendChild(cardInfo);
  cardInfo.appendChild(techInfo);
  cardInfo.appendChild(title);
  cardInfo.appendChild(description);
  cardInfo.appendChild(link);
  techInfo.appendChild(tags);
  techInfo.appendChild(tags2);

}





const project2 = [
  {
    badgesTitle: "HTML5",
    badgesDescription: "",
    badgesImage: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    badgesTags: [""],
    badgesTags2: [""],
    badgesLink: "",
  },
  {
    badgesTitle: "CSS3",
    badgesDescription: "",
    badgesImage: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    badgesTags: [""],
    badgesTags2: [""],
    badgesLink: "",
  },
  {
    badgesTitle: "JavaScript",
    badgesDescription: "",
    badgesImage: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    badgesTags: [""],
    badgesTags2: [""],
    badgesLink: "",
  },
  {
    badgesTitle: "Canva-design",
    badgesDescription: "",
    badgesImage: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg",
    badgesTags: [""],
    badgesTags2: [""],
    badgesLink: "",
  },
  {
    badgesTitle: "Figma-design",
    badgesDescription: "",
    badgesImage: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    badgesTags: [""],
    badgesTags2: [""],
    badgesLink: "",
  },
  {
    badgesTitle: "Git",
    badgesDescription: "",
    badgesImage: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    badgesTags: [""],
    badgesTags2: [""],
    badgesLink: "",
  },
  {
    badgesTitle: "Github",
    badgesDescription: "",
    badgesImage: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    badgesTags: [""],
    badgesTags2: [""],
    badgesLink: "",
  },
  {
    badgesTitle: "Locked > >",
    badgesDescription: "",
    badgesImage: "lock.png",
    badgesTags: [""],
    badgesTags2: [""],
    badgesLink: "",
  },
  {
    badgesTitle: "TypeScript",
    badgesDescription: "",
    badgesImage: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    badgesTags: [""],
    badgesTags2: [""],
    badgesLink: "",
  },

  {
    badgesTitle: "ExpressJS",
    badgesDescription: "",
    badgesImage: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    badgesTags: [""],
    badgesTags2: [""],
    badgesLink: "",
  },
  {
    badgesTitle: "NextJS",
    badgesDescription: "",
    badgesImage: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    badgesTags: [""],
    badgesTags2: [""],
    badgesLink: "",
  },
  {
    badgesTitle: "ReactJS",
    badgesDescription: "",
    badgesImage: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    badgesTags: [""],
    badgesTags2: [""],
    badgesLink: "",
  },
  {
    badgesTitle: "Material UI",
    badgesDescription: "",
    badgesImage: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
    badgesTags: [""],
    badgesTags2: [""],
    badgesLink: "",
  },
  {
    badgesTitle: "Redux",
    badgesDescription: "",
    badgesImage: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
    badgesTags: [""],
    badgesTags2: [""],
    badgesLink: "",
  },
];





const bungkusBadges = document.getElementById("bungkus-badges");

for (let z = 0; z < project2.length; z++) {
  let projectBadges = project2[z];

  let badges = document.createElement("div");
  badges.className = "badges";

  let badgesTitle = document.createElement("h3");
  badgesTitle.textContent = projectBadges.badgesTitle;
  badgesTitle.className = "badges-title";

  let badgesInfo = document.createElement("span")
  badgesInfo.className = "badges-info";

  let imgInfo = document.createElement("div")
  imgInfo.className = "img-badges";

  let badgesDescription = document.createElement("p");
  badgesDescription.textContent = projectBadges.badgesDescription;
  badgesDescription.className = "badges-description";

  let badgesImage = document.createElement("img");
  badgesImage.src = projectBadges.badgesImage;
  badgesImage.className = "badges-img";

  let badgesTags = document.createElement("span");
  badgesTags.src = projectBadges.badgesTags;
  badgesTags.className = "tags";
  badgesTags.textContent = projectBadges.tags;

  let badgesTags2 = document.createElement("span");
  badgesTags2.src = projectBadges.badgesTags2;
  badgesTags2.className = "tags2";
  badgesTags2.textContent = projectBadges.tags2;

  let badgesLink = document.createElement("a");
  badgesLink.src = projectBadges.tags;
  badgesLink.className = "badegs-link";
  badgesLink.textContent = "Lihat lebih lanjut";
  badgesLink.href = projectBadges.badgesLink;

  bungkusBadges.appendChild(badges);
  badges.appendChild(badgesInfo);
  badgesInfo.appendChild(badgesImage);
  badgesInfo.appendChild(badgesTitle);

}



const project3 = [
  {
    panel: "",
    panelDescription: "",
    panelImg: "tallcat.png",
    panelTags: [""],
    panelTags2: [""],
    panelLink: "",
  },
  {
    panel: "",
    panelDescription: "",
    panelImg: "kalkulator.png",
    panelTags: [""],
    panelTags2: [""],
    panelLink: "",
  },
  {
    panel: "",
    panelDescription: "",
    panelImg: "kalkulator.png",
    panelTags: [""],
    panelTags2: [""],
    panelLink: "",
  },
  {
    panel: "",
    panelDescription: "",
    panelImg: "tallcat",
    panelTags: [""],
    panelTags2: [""],
    panelLink: "",
  },
  {
    panel: "",
    panelDescription: "",
    panelImg: "tallcat.png",
    panelTags: [""],
    panelTags2: [""],
    panelLink: "",
  },
  {
    panel: "",
    panelDescription: "",
    panelImg: "kalkulator.png",
    panelTags: [""],
    panelTags2: [""],
    panelLink: "",
  },
  {
    panel: "",
    panelDescription: "",
    panelImg: "tallcat.png",
    panelTags: [""],
    panelTags2: [""],
    panelLink: "",
  },
  {
    panel: "",
    panelDescription: "",
    panelImg: "tallcat.png",
    panelTags: [""],
    panelTags2: [""],
    panelLink: "",
  },
  {
    panel: "",
    panelDescription: "",
    panelImg: "tallcat.png",
    panelTags: [""],
    panelTags2: [""],
    panelLink: "",
  },
  {
    panel: "",
    panelDescription: "",
    panelImg: "kalkulator.png",
    panelTags: [""],
    panelTags2: [""],
    panelLink: "",
  },
];


const bungkusPanelKanan = document.getElementById("bungkus-panel kanan");

for (let q = 0; q < project3.length; q++) {
  let panelKanan = project3[q];

  panel = document.createElement("div")
  panel.className = "panel"

  panelContent = document.createElement("div")
  panelContent.className = "panel-content"

  panelLink = document.createElement("a")
  panelLink.className = "panel-link"
  panelLink.src = panelKanan.panelLink

  panelImg = document.createElement("img")
  panelImg.className = "panel-img"
  panelImg.src = panelKanan.panelImg


bungkusPanelKanan.appendChild(panel);
panel.appendChild(panelContent);
panelContent.appendChild(panelLink);
panelLink.appendChild(panelImg);


}



const project4 = [
 
  {
    panelTitle: "",
    panelDescription: "",
    panelImage: "tallcat.png",
    panelTags: [""],
    panelTags2: [""],
    panelLink2: "",
  },
  {
    panelTitle: "",
    panelDescription: "",
    panelImage: "politecat.png",
    panelTags: [""],
    panelTags2: [""],
    panelLink2: "",
  },
  {
    panelTitle: "",
    panelDescription: "",
    panelImage: "tallcat.png",
    panelTags: [""],
    panelTags2: [""],
    panelLink2: "",
  },
  {
    panelTitle: "",
    panelDescription: "",
    panelImage: "politecat.png",
    panelTags: [""],
    panelTags2: [""],
    panelLink2: "",
  },
  {
    panelTitle: "",
    panelDescription: "",
    panelImage: "tallcat.png",
    panelTags: [""],
    panelTags2: [""],
    panelLink2: "",
  },
  {
    panelTitle: "",
    panelDescription: "",
    panelImage: "politecat.png",
    panelTags: [""],
    panelTags2: [""],
    panelLink2: "",
  },
  {
    panelTitle: "",
    panelDescription: "",
    panelImage: "tallcat.png",
    panelTags: [""],
    panelTags2: [""],
    panelLink2: "",
  },
  {
    panelTitle: "",
    panelDescription: "",
    panelImage: "politecat.png",
    panelTags: [""],
    panelTags2: [""],
    panelLink2: "",
  },
  {
    panelTitle: "",
    panelDescription: "",
    panelImage: "tallcat.png",
    panelTags: [""],
    panelTags2: [""],
    panelLink2: "",
  },
  {
    panelTitle: "",
    panelDescription: "",
    panelImage: "politecat.png",
    panelTags: [""],
    panelTags2: [""],
    panelLink2: "",
  },
];


const bungkusPanelKiri = document.getElementById("bungkus-panel kiri");

for (let q = 0; q < project4.length; q++) {
  let panelKiri = project4[q];

  panel2 = document.createElement("div")
  panel2.className = "panel 2"

  panelKonten = document.createElement("div")
  panelKonten.className = "panel-content 2"

  panelLink2 = document.createElement("a")
  panelLink2.className = "panel-link"
  panelLink2.src = panelKiri.panelLink2

  panelImage = document.createElement("img")
  panelImage.className = "panel-img"
  panelImage.src = panelKiri.panelImage


bungkusPanelKiri.appendChild(panel2);
panel2.appendChild(panelKonten);
panelKonten.appendChild(panelLink2);
panelLink2.appendChild(panelImage);


}