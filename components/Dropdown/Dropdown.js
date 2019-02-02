// MVP-review
// My blind rewrite of Dropdown.js ended up much the same as the original (which is now called DropdownORIGINAL.js). Here I used variable names that I like more.

class Menu {
  constructor(element) {
    this.menu = element;
    this.menuButton = this.menu.querySelector(".dropdown-button");
    this.menuContent = this.menu.querySelector(".dropdown-content");
    this.visible = false;
    this.menuButton.addEventListener("click", () => this.revealMenu());
  }
  revealMenu() {
    if (this.visible === false) {
      this.visible = true;
      TweenMax.to(this.menuContent, 0, { display: "flex" });
      TweenMax.to(this.menuContent, 2, { opacity: 1 });
    } else {
      this.visible = false;
      TweenMax.to(this.menuContent, 0.5, { opacity: 0, display: "none" });
    }
  }
}

const menus = document
  .querySelectorAll(".dropdown")
  .forEach(element => new Menu(element));
