// MVP-review
// My blind rewrite of Tabs.js is kind of different from the original (which is now called TabsORIGINAL.js). Here I used variable names that I like more, but I also created the NodeList from ".tabs-item" earlier, and looped over the list to remove "tabs-item-selected" during this.tabLink.select() (rather than this.tabItem.select()). Overall, though, not _that_ different.

class TabLink {
  constructor(element) {
    this.tabLink = element;
    this.data = this.tabLink.dataset.tab;
    this.tabItem = document.querySelectorAll(".tabs-item")[this.data - 1];
    this.tabLink.addEventListener("click", () => this.select(this.tabLink));
  }
  select() {
    links.forEach(element => element.classList.remove("tabs-link-selected"));
    items.forEach(element => element.classList.remove("tabs-item-selected"));
    this.tabItem.classList.add("tabs-item-selected");
    this.tabLink.classList.add("tabs-link-selected");
  }
}

class TabItem {
  constructor(element) {
    this.tabItem = element;
  }
}

const items = document.querySelectorAll(".tabs-item");
const links = document.querySelectorAll(".tabs-link");
links.forEach(element => new TabLink(element));
