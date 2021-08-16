import "./Button.scss";

class Button {
  btnClass = "buttonCss";
  render() {
    const btn = document.createElement("button");
    btn.innerHTML = "I am Button";
    btn.classList.add(this.btnClass);
    const body = document.querySelector("body");
    btn.onclick = () => {
      const p = document.createElement("p");
      p.classList.add("paraCss");
      p.innerHTML = "I am Para";
      body.appendChild(p);
    };
    body.appendChild(btn);
  }
}

const btn = new Button();
btn.render();

// export default Btn;
