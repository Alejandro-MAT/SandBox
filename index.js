function toggleMenu() {
  const navButtons = document.querySelectorAll(".btn-nav");
  const navMenu = document.querySelector("nav ul");

  navButtons.forEach((e) => {
    e.addEventListener("click", function () {
      navMenu.classList.toggle("active");
    });
  });
}

async function getServices() {
  const response = await fetch("http://localhost:3000/services");
  const services = await response.json();

  services.map((service) =>
    createServiceItem(
      service.image,
      service.title,
      service.description,
      "Learn More",
      service.link
    )
  );
}

async function getTestimonials() {
  const response = await fetch("http://localhost:3000/testimonials");
  const testimonials = await response.json();

  testimonials.forEach((testimonial) =>
    createTestimonialItem(
      testimonial.author,
      testimonial.image,
      testimonial.area,
      testimonial.testimonials
    )
  );
}

async function getFAQs() {
  const response = await fetch("http://localhost:3000/faqs");
  const faqs = await response.json();

  faqs.forEach((item) => createFAQItem(item.question, item.answer));
}

async function getProjects() {
  const response = await fetch("http://localhost:3000/projects");
  const projects = await response.json();

  projects.forEach((item) =>
    createProjectItem(item.image, item.title, item.category)
  );
}

async function getTeam() {
  const response = await fetch("http://localhost:3000/team");
  const team = await response.json();

  team.forEach((item) =>
    createTeamItem(item.image, item.name, item.area, item.slogan)
  );
}

async function getStrategyCards() {
  const response = await fetch("http://localhost:3000/strategy-cards");
  const strategyCards = await response.json();

  strategyCards.forEach((item) =>
    createStrategyCardItem(item.id, item.title, item.description)
  );
}

function createServiceItem(imageURL, title, description, linkText, linkHref) {
  const servicesList = document.querySelector(".services-list");

  const serviceItemContainer = document.createElement("div");
  serviceItemContainer.classList.add("services-item");

  const imageElement = document.createElement("img");
  imageElement.setAttribute("src", imageURL);
  serviceItemContainer.append(imageElement);

  const titleElement = document.createElement("h3");
  titleElement.textContent = title;
  serviceItemContainer.append(titleElement);

  const paragraphElement = document.createElement("p");
  paragraphElement.textContent = description;
  serviceItemContainer.append(paragraphElement);

  const link = document.createElement("a");
  link.textContent = linkText;
  link.setAttribute("href", linkHref);
  serviceItemContainer.append(link);

  servicesList.append(serviceItemContainer);
}

function createTestimonialItem(author, image, area, testimonial) {
  const testimonialsList = document.querySelector(".testimonials-list");

  //testimonial item
  const testimonialItemContainer = document.createElement("div");
  testimonialItemContainer.classList.add("testimonials-item");

  testimonialsList.append(testimonialItemContainer);

  const paragraph = document.createElement("p");
  paragraph.textContent = testimonial;

  const testimonialAuthorContainer = document.createElement("div");
  testimonialAuthorContainer.classList.add("testimonials-author");

  testimonialItemContainer.append(paragraph);
  testimonialItemContainer.append(testimonialAuthorContainer);

  const testimonialAuthorImgContainer = document.createElement("div");
  testimonialAuthorImgContainer.classList.add("image");

  const imageElement = document.createElement("img");
  imageElement.setAttribute("src", image);

  testimonialAuthorImgContainer.append(imageElement);

  const testimonialBioContainer = document.createElement("div");
  testimonialBioContainer.classList.add("bio");

  testimonialAuthorContainer.append(
    testimonialAuthorImgContainer,
    testimonialBioContainer
  );

  const authorElement = document.createElement("h3");
  authorElement.textContent = author;

  testimonialBioContainer.append(authorElement);

  const areaElement = document.createElement("p");
  areaElement.textContent = area;

  testimonialBioContainer.append(areaElement);
}

function createFAQItem(question, answer) {
  const faqsList = document.querySelector(".faqs-list");

  const faqItemContainer = document.createElement("div");
  faqItemContainer.classList.add("faqs-item");

  const faqContainer = document.createElement("details");

  const faqQuestion = document.createElement("summary");
  faqQuestion.textContent = question;

  const faqAnswer = document.createElement("p");
  faqAnswer.textContent = answer;

  // faqsList.append(faqItemContainer);//faqList->faqItem
  faqsList.append(faqItemContainer);
  faqItemContainer.append(faqContainer); //faqItem->faqContainer
  faqContainer.append(faqQuestion, faqAnswer); //faqContainer->faqQuestion,faqAnswer
}

function createProjectItem(image, title, category) {
  const projectsList = document.querySelector(".projects-container");
  const projectItemContainer = document.createElement("div");
  projectItemContainer.classList.add("project");

  const imageElement = document.createElement("img");
  imageElement.setAttribute("src", image);
  projectItemContainer.append(imageElement);

  const titleElement = document.createElement("h3");
  titleElement.textContent = title;
  projectItemContainer.append(titleElement);

  const paragraphElement = document.createElement("p");
  paragraphElement.textContent = category;
  projectItemContainer.append(paragraphElement);

  projectsList.append(projectItemContainer);
}

function createTeamItem (image,name,area,slogan) {
  const teamList = document.querySelector(".team-list");

  const teamItemContainer = document.createElement("div");
  teamItemContainer.classList.add("team-item");

  const imageElement = document.createElement("img");
  imageElement.setAttribute("src", image);
  teamItemContainer.append(imageElement);

  const titleElement = document.createElement("h3");
  titleElement.textContent = name;
  teamItemContainer.append(titleElement);

  const paragraphElement = document.createElement("p");
  paragraphElement.textContent = area;
  teamItemContainer.append(paragraphElement);

  const paragraphElement2 = document.createElement("p");
  paragraphElement2.textContent = slogan;
  teamItemContainer.append(paragraphElement2);

  teamList.append(teamItemContainer);
}

function createStrategyCardItem (id,title,description) {
  const strategyCardsList = document.querySelector(".strategy-cards-container");
  const strategyCardItem = document.createElement("div");
  strategyCardItem.classList.add("strategy-card");
  
  strategyCardsList.append(strategyCardItem);

  const orderItem = document.createElement("div");
  orderItem.classList.add("order");
  orderItem.textContent = `0${(id+1)}`;
  strategyCardItem.append(orderItem);

  const infoItem = document.createElement("div");
  infoItem.classList.add("info");
   
  strategyCardItem.append(orderItem, infoItem);
  
  const infoTitle = document.createElement("h3")
  infoTitle.textContent = title;
  
  const infoDescription = document.createElement("p");
  infoDescription.textContent = description;
  
  infoItem.append(infoTitle,infoDescription);
}

// menu
toggleMenu();

//llamada del servidor y entrada de datos
getServices();
getTestimonials();
getFAQs();
getProjects();
getTeam();
getStrategyCards();
