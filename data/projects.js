function Project(name, image, repository) {
    this.name = name;
    this.image = image;
    this.repository = repository;
}

var projects = [];
projects.push(new Project("Jokester", "/assets/images/jokester.png", "https://github.com/tsberry/jokester"));
projects.push(new Project("Face Yourself", "/assets/images/faceyourself.jpg", "https://github.com/davidlatuno/faceyourself"));
projects.push(new Project("Friend Finder", "/assets/images/friendfinder.jpg", "https://github.com/tsberry/friendfinder"));
projects.push(new Project("Bamazon", "/assets/images/bamazon.png", "https://github.com/tsberry/bamazon"));
projects.push(new Project("Star Wars Game", "/assets/images/starwars.png", "https://github.com/tsberry/week-4-game-hard"));

module.exports = projects;