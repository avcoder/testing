const profile = {
  id: 1,
  first_name: "Sebastiano",
  last_name: "Siddons",
  subject: "streamline vertical functionalities",
  body:
    "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
  date: "10/3/2017",
  avatar: "https://robohash.org/cupiditatefugaanimi.jpg?size=50x50&set=set1"
};

const imageNodeElement = document.querySelector("img");
console.log(imageNodeElement);

imageNodeElement.src = profile.avatar;

const nameElement = document.querySelector(".email-name");
nameElement.textContent = `${profile.first_name} ${profile.last_name}`;

const subject = document.querySelector(".email-subject");
subject.textContent = `${profile.subject}`;

const body = document.querySelector(".email-desc");
body.textContent = `${profile.body}`;

const email = document.querySelector(".email-item");
email.addEventListener("click", function(error) {
  const mainSubject = document.querySelector(".email-content-title");
  mainSubject.textContent = `${profile.subject}`;
});
