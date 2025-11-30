

// PROJECT***
const projectsLagi = [
  {
    title: "Kalkulator Zakat Emas",
    description: "Aplikasi Web untuk menghitung zakat emas yang menggunakan logika js (if-else) dengan fitur riwayat penyimpanan menggunakan localStorage.",
    image: "kalkulator.png",
    tags: ["HTML"],
    tags2: ["CSS"],
    tags3: ["JavaScript"],
    link: "https://github.com/hamam-yey?tab=repositories",
    github: "Lihat lebih lanjut"
  },
  {
    title: "Lampu Merah",
    description: "Web simulasi lampu merah dengan logika js (break-case) juga interval untuk tombol manual dan otomatis.",
    image: "traffic-lamp.png",
    tags: ["HTML"],
    tags2: ["CSS"],
    tags3: ["JavaScript"],
    link: "https://github.com/hamam-yey?tab=repositories",
  },
  {
    title: "Portofolio",
    description: "Ini adalah website yang sedang kalian buka, berisi pengenalan tentang diri saya, skill-skill, begitu juga dengan hasil dari project-project yang telah saya buat.",
    image: "image.png",
    tags: ["HTML"],
    tags2: ["CSS"],
    tags3: ["JavaScript"],
    link: "https://github.com/hamam-yey?tab=repositories",
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

  let tags3 = document.createElement("span");
  tags3.src = project.tags3;
  tags3.className = "tags3";
  tags3.textContent = project.tags3;

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
  techInfo.appendChild(tags3);

}
// PROJECT***



// BADGES***
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
// BADGES***


const kontak = [
  {
    kontakTitle: "Redux",
    kontakImage: "whatsapp.png",
    kontakLink: "https://wa.me/6285183247032",
  },
  {
    kontakTitle: "Redux",
    kontakImage: "instagram.png",
    kontakLink: "https://www.instagram.com/hamamyey/",
  },
  {
    kontakTitle: "Redux",
    kontakImage: "gmail.png",
    kontakLink: "mailto:hamamidnhsi@gmail.com",
  },
  {
    kontakTitle: "Redux",
    kontakImage: "github.png",
    kontakLink: "https://github.com/hamam-yey",
  },
];
const contKontak = document.getElementById("cont-kontak");

for (let n = 0; n < kontak.length; n++) {
  let iconKontak = kontak[n];

  let bungkusKontak = document.createElement("div");
  bungkusKontak.className = "bungkus-kontak";

  let kontakImage = document.createElement("img");
  kontakImage.src = iconKontak.kontakImage;
  kontakImage.className = "kontak-image"

  let kontakLink = document.createElement("a");
  kontakLink.src = iconKontak.kontakLink;
  kontakLink.href = iconKontak.kontakLink;




  contKontak.appendChild(bungkusKontak);
  bungkusKontak.appendChild(kontakLink);
  kontakLink.appendChild(kontakImage);
}
