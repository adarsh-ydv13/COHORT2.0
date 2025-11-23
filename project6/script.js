const users = [
  {
    name: "Aarav Malhotra",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    profession: "UI/UX Designer",
    description: "Creative designer who loves crafting smooth user experiences and clean minimal interfaces."
  },
  {
    name: "Ishita Verma",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    profession: "Frontend Developer",
    description: "Passionate about modern JavaScript frameworks, responsive design, and building interactive web apps."
  },
  {
    name: "Rehan Siddiqui",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    profession: "Full Stack Engineer",
    description: "Specializes in MERN stack applications and scalable backend architecture."
  },
  {
    name: "Kiara Sharma",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    profession: "Digital Marketer",
    description: "Expert in SEO, content strategy, and growth campaigns that help brands reach new audiences."
  },
  {
    name: "Devansh Kapoor",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    profession: "Mobile App Developer",
    description: "Builds sleek cross-platform mobile apps that combine performance with great design."
  }
];

let main=document.querySelector('main');
// let card=document.querySelector('.card');


let cards='';

users.forEach(element => {
  cards+=`
 <div class="card">
                <img src="${element.image}" alt="" srcset="">
                <h1>${element.name}</h1>
                <h2>${element.profession}</h2>
                <p>${element.description}</p>
            </div>;              
            `;
});
main.innerHTML=cards;