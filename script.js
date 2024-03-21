let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

const nama = ["Remanda Dheva", "Information Systems Student", "Programmer", "Web Developer", "a Bead Accessory Maker"];
let currentNama = 0;

setInterval(() => {
  document.getElementById("nama").innerHTML = nama[currentNama];
  currentNama = (currentNama + 1) % nama.length;
}, 2000); // 2 detik

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .sertif-box, .contact form, .project-container, .table-container, .educations', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});

//array
const hobbies = ["Reading novels and comics", "Watching TV shows", "Handicrafts", "Learning about technology"];
const skills = ["HTML", "CSS", "Python", "MySQL"];

const hobbiesList = document.getElementById("hobbiesList");
const skillsList = document.getElementById("skillsList");

//function
function createListElement(item) {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    return listItem;
}

//perulangan
hobbies.forEach(hobby => hobbiesList.appendChild(createListElement(hobby)));
skills.forEach(skill => skillsList.appendChild(createListElement(skill)));

const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const submitButton = document.getElementById('submitButton');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');

submitButton.addEventListener('click', (event) => {
  event.preventDefault(); 

  let isValid = true;

  // Check if name is empty
  if (!nameInput.value.trim()) {
    nameError.textContent = 'Please enter your name.';
    nameInput.classList.add('is-invalid');
    isValid = false;
  } else {
    nameError.textContent = '';
    nameInput.classList.remove('is-invalid');
  }

  // Check if email is empty
  if (!emailInput.value.trim()) {
    emailError.textContent = 'Please enter your email.';
    emailInput.classList.add('is-invalid');
    isValid = false;
  } else {
    emailError.textContent = '';
    emailInput.classList.remove('is-invalid');
  }

  // Check if message is empty
  if (!messageInput.value.trim()) {
    messageError.textContent = 'Please enter message.';
    messageInput.classList.add('is-invalid');
    isValid = false;
  } else {
    messageError.textContent = '';
    messageInput.classList.remove('is-invalid');
  }

  if (isValid) {
    const formData = {
      name: nameInput.value,
      email: emailInput.value,
      message: messageInput.value,
    };
    saveContactToStorage(formData); // Save all form data to local storage
    alert("Your message has been submitted successfully!");

    // Kosongkan isi inputan setelah submit
    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
  }
});

function saveContactToStorage(formData) {
  const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
  contacts.push(formData);
  localStorage.setItem('contacts', JSON.stringify(contacts));
}

const sunIcon = document.querySelector('.bx-sun');
const moonIcon = document.querySelector('.bx-moon');

let isDarkMode = true;  

function toggleDarkMode() {
  isDarkMode = !isDarkMode;
  document.body.classList.toggle('light-mode'); 

  if (isDarkMode) {
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'block';
  } else {
    sunIcon.style.display = 'block';
    moonIcon.style.display = 'none';
  }
}
sunIcon.addEventListener('click', toggleDarkMode);
moonIcon.addEventListener('click', toggleDarkMode);





