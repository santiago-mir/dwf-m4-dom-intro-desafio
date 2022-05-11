const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "clase-uno",
  },
  {
    tema: "node",
    class: "clase-dos",
  },
  {
    tema: "oop",
    class: "clase-tres",
  },
  {
    tema: "typescript",
    class: "clase-cuatro",
  },
  {
    tema: "css",
    class: "clase-cinco",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  function removeChildFromUl() {
    var myListEls = document.querySelectorAll(".lista li");
    myListEls.forEach((el) => {
      el.remove();
    });
  }

  function addChildtoUl() {
    var myList = document.querySelector(".lista");

    for (let item of cosasQueAprendimos) {
      var myNewLiEls = document.createElement("li");
      myNewLiEls.textContent = item.tema;
      myNewLiEls.classList.add(item.class);
      myList.append(myNewLiEls);
    }
  }

  removeChildFromUl();
  addChildtoUl();
}

main();
