import "./animations.css";

export class MenuIcon {
  constructor(id) {
    this.element = document.getElementById(id);
    this.element.addEventListener("click", (event) => this.click(event));
  }

  click() {
    const mainContent = document.getElementsByTagName("main")[0];
    Array.from(mainContent.children).forEach((el) => {
      el.classList.toggle("visible");
    });

    this.element.classList.toggle("active");
    setTimeout(() => {
      this.element.classList.add("swap");
    }, 150);

    setTimeout(() => {
      this.element.textContent = this.element.classList.contains("active")
        ? "close"
        : "menu";
      this.element.classList.remove("swap");
    }, 300);
  }
}
