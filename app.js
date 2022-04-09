// MOBILE DROPDOWN MENU

const menuBtn = document.querySelector('#bars-menu');
const dropDown = document.querySelector('#menu-mobile');
const closeBtn = document.querySelector('#close-btn');
const body = document.getElementById('body');
const options = document.querySelectorAll('.option');
const overlay = document.querySelector('#background');

menuBtn.addEventListener('click', () => {
  dropDown.style.display = 'block';
  overlay.style.display = 'block';
  body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
  dropDown.style.display = 'none';
  overlay.style.display = 'none';
  body.style.overflow = 'visible';
});

for (let i = 0; i < options.length; i += 1) {
  options[i].addEventListener('click', () => {
    dropDown.style.display = 'none';
    overlay.style.display = 'none';
    body.style.overflow = 'visible';
  });
}

// WORK SECTION
const workSection = document.querySelector('#portfolio');

const projectsList = [
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    imageLink: './Images/Snapshoot-page-2.png',
    technologies: ['html', 'css', 'javascript'],
    role: 'Back end dev',
    company: 'Canopy',
    year: '2015',
    sourceLink: 'https://github.com/Christianib003/Portfolio-Moblie-Skeleton-Version',
    demoLink: 'https://christianib003.github.io/Portfolio-Moblie-Skeleton-Version/',
  },

  {
    name: 'Multi-Post stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    imageLink: './Images/Snapshoot-page-3.png',
    technologies: ['html', 'css', 'javascript'],
    role: 'Back end dev',
    company: 'Canopy',
    year: '2015',
    sourceLink: 'https://github.com/Christianib003/Portfolio-Moblie-Skeleton-Version',
    demoLink: 'https://christianib003.github.io/Portfolio-Moblie-Skeleton-Version/',
  },

  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    imageLink: './Images/Snapshoot-page-4.png',
    technologies: ['html', 'css', 'javascript'],
    role: 'Back end dev',
    company: 'Canopy',
    year: '2015',
    sourceLink: 'https://github.com/Christianib003/Portfolio-Moblie-Skeleton-Version',
    demoLink: 'https://christianib003.github.io/Portfolio-Moblie-Skeleton-Version/',
  },
];

for (let i = 0; i < projectsList.length; i += 1) {
  workSection.innerHTML += `
    <div class="card">
      <div class="media">
          <img class="image" src="${projectsList[i].imageLink}" alt="${projectsList[i].name}">
      </div>
      <div class="card-content">
          <h2 class="project-name">${projectsList[i].name}</h2>
          <ul class="triple">
              <li class="canopy">${projectsList[i].company}</li>
              <li class="double">${projectsList[i].role}</li>
              <li class="double">${projectsList[i].year}</li>
          </ul>
          <p class="paragraph">
              ${projectsList[i].description}
          </p>
          <ul class="langs">
              <li class="lang1 languages">html</li>
              <li class="lang2 languages">css</li>
              <li class="lang3 languages">javascript</li>
          </ul>
          <button type="button" class="seeProject active project-modal-${i}">See Project</button>
      </div>
    </div>
  `;
}

// POP UP WINDOW

const popUp = document.createElement('div');
popUp.classList.add('popUp');


for (let i = 0; i < projectsList.length; i += 1) {
  document.querySelector(`.project-modal-${i}`).addEventListener('click', () => {
    popUp.style.display = 'block';
    body.appendChild(popUp);
    overlay.style.display = 'block';
    popUp.innerHTML = `
      <span><i class="fas fa-times close-btn"  id="closee"></i></span>
      <div class="top-left">
          <h2 class="popUp-title">${projectsList[i].name}</h2>
          <ul class="popUp-list">
              <li class="list-choice canopyy">${projectsList[i].company}</li>
              <li class="list-choice">${projectsList[i].role}</li>
              <li class="list-choice">${projectsList[i].year}</li>
          </ul>
          <div class="image-pop"><img src="./Images/Snapshoot-page-2.png" alt="" class="popUp-image"></div>
          
      </div>
      <div class="lower">
      <div class="paragraph-pop">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste aliquid aut sed. Doloribus totam nostrum temporibus eos dignissimos? Dolore nisi libero numquam, incidunt magni vel iure excepturi id illum laudantium!
      <p class="second-pop paragraph-pop">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae impedit nesciunt voluptates accusantium rem sunt, amet unde vel facere temporibus. Ad distinctio error provident tempora accusantium dicta numquam expedita deserunt.</p>
      </div>
      <div class="left-pop">
        <ul class="right-popList">
          <div class="shiftt">
            <li class="right-list">hmtl</li>
            <li class="right-list">css</li>
            <li class="right-list">javascript</li>
          </div>
          <div class="drop">
            <li class="right-list desk-pop">github</li>
            <li class="right-list desk-pop">ruby</li>
            <li class="right-list desk-pop">Bootstrap</li>
          </div>
          </ul>
          <div class="popUp-buttons">
              <a href="${projectsList[i].demoLink}"><button type="button" class="popUp-btn"> See Live <i class="fa fa-external-link"></i></button></a>
              <a href="${projectsList[i].sourceLink}"><button type="button" class="popUp-btn">See source<i class="fab fa-github git-pop"></i></button></a>
          </div>
      </div>
    `
  });
  
  document.addEventListener('click', (action) => {
    if (action.target.id === 'closee') {
      popUp.style.display = 'none';
      overlay.style.display = 'none';
    };
  });
}

