import "./Header.scss";

class Header {
  headClass = "header";
  render(page) {
    const h1 = document.createElement("h1");
    h1.innerHTML = "Header of " + page;
    h1.classList.add(this.headClass);
    const body = document.querySelector("body");
    body.appendChild(h1);
  }
}

const head = new Header();
head.render("Page 1");

// export default Header;
