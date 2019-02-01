class Menu {
  constructor(element) {
    this.Menu = element;
    this.menuButton = this.Menu.querySelector(".dropdown-button");
    this.menuContent = this.Menu.querySelector(".dropdown-content");
    this.menuOpen = false;
    this.menuButton.addEventListener("click", () => this.revealMenu());
  }
  revealMenu() {
    if (this.menuOpen === false) {
      this.menuOpen = true;
      TweenMax.to(this.menuContent, 0, { display: "flex" });
      TweenMax.to(this.menuContent, 2, { opacity: 1 });
    } else {
      this.menuOpen = false;
      TweenMax.to(this.menuContent, 0.5, { opacity: 0, display: "none" });
    }
  }
}

const navMenu = new Menu(document.querySelector(".dropdown"));
