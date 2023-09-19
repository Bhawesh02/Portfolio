class Project {
  constructor(name, githubUrl, itchUrl, gameplayUrl, pageUrl, imageUrl) {
    this.name = name;
    this.githubUrl = githubUrl;
    this.itchUrl = itchUrl;
    this.gameplayUrl = gameplayUrl;
    this.pageUrl = pageUrl;
    this.imageUrl = imageUrl;
  }
  makeProjectCard() {
    const projectDiv = document.getElementById("project");
    const projectCardDiv = this.createProjectDiv(projectDiv);
    const contentDiv = this.createContentDiv(projectCardDiv);
    const projectCoverImage = this.createImageDiv(contentDiv);
    const projectTitle =this.createProjectTitle(contentDiv);
    this.createHuperlinks(projectCardDiv);
    if (this.pageUrl != "null") {
      console.log(this.pageUrl);
      let x= this.pageUrl;
      projectTitle.addEventListener("click", function () {
        window.location.href = x;
      });
      projectCoverImage.addEventListener("click", function () {
        window.location.href = x;
      });
    }
  }

  createProjectDiv(projectDiv) {
    const projectCardDiv = document.createElement("div");
    projectCardDiv.classList.add("projectCard");
    projectCardDiv.classList.add("flexCenter");
    projectDiv.append(projectCardDiv);
    return projectCardDiv;
  }
  createContentDiv(projectCardDiv) {
    const contentDiv = document.createElement("div");
    contentDiv.classList.add("content");
    contentDiv.classList.add("flexCenter");
    projectCardDiv.appendChild(contentDiv);
    return contentDiv;
  }
  createImageDiv(contentDiv) {
    const coverImageDev = document.createElement("div");
    coverImageDev.classList.add("coverImage");
    contentDiv.appendChild(coverImageDev);
    const img = document.createElement("img");
    img.src = this.imageUrl;
    coverImageDev.appendChild(img);
    return coverImageDev;
  }
  createProjectTitle(contentDiv) {
    const projectTitle = document.createElement("h3");
    projectTitle.classList.add("projectTitle");
    projectTitle.innerHTML = this.name;
    contentDiv.append(projectTitle);
    return projectTitle;
  }
  createHuperlinks(projectCardDiv) {
    var sctClass = document.createElement("ul");
    sctClass.className = "sci";
    for (let i = 1; i <= 3; i++) {
      if (i == 1 && this.githubUrl == "null") continue;
      if (i == 2 && this.itchUrl == "null") continue;
      if (i == 3 && this.gameplayUrl == "null") continue;

      var li = document.createElement("li");
      li.style = "--i: " + i;
      this.aHyperLinkRefrence(i, li);
      sctClass.append(li);
    }
    projectCardDiv.append(sctClass);
  }

  aHyperLinkRefrence(i, li) {
    var a = document.createElement("a");
    a.target = "_blank";
    switch (i) {
      case 1:
        a.href = this.githubUrl;
        a.innerHTML = `<i class="fa-brands fa-github"></i>`;
        break;
      case 2:
        a.href = this.itchUrl;
        a.innerHTML = `<i class="fa-brands fa-itch-io"></i>`;
        break;
      case 3:
        a.href = this.gameplayUrl;
        a.innerHTML = `<i class="fa-brands fa-youtube"></i>`;
        break;
    }
    li.append(a);
  }
}

var projects = [
  new Project(
    "Slime Slaughter: Wave Wars",
    "https://github.com/Bhawesh02/Slime-Slaughter-Wave-Wars",
    "https://bhawesh02.itch.io/slime-slaughter-wave-wars",
    "https://www.loom.com/share/70ae88a73d8b445e933a51e54ebbf9b3",
    "../ProjectsHtml/SlimeSlaughter.html",
    "null"
  ),
  new Project(
    "Gravity Dash",
    "https://github.com/Bhawesh02/Gravity-Dash",
    "https://bhawesh02.itch.io/gravity-dash",
    "null",
    "../ProjectsHtml/GravityDash.html",
    "null"
  ),
  new Project(
    "Battle Tank",
    "https://github.com/Bhawesh02/battle-tank-game",
    "null",
    "https://www.loom.com/share/abfe2aa33e364c23b51dd8b5f77ca2fa?sid",
    "../ProjectsHtml/BattleTank.html",
    "null"
  ),
  new Project(
    "Co-op Snake 2D",
    "https://github.com/Bhawesh02/Co-Op-Snake-2D",
    "https://bhawesh02.itch.io/snake-2d",
    "null",
    "../ProjectsHtml/Snake2D.html",
    "null"
  ),
  new Project(
    "Realm of Heroes: The Murloc Menace",
    "https://github.com/Bhawesh02/Realm-of-Heroes-The-Murloc-Menace",
    "https://replit.com/@BhaweshAgarwal/MAT-II-Text-based-RPG-Adventure-Game",
    "null",
    "../ProjectsHtml/RealmOfHeroes.html",
    "null"
  ),
];

projects.forEach((project) => {
  project.makeProjectCard();
});
