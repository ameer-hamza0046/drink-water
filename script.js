const container = document.querySelector(".container");
// const [remaining, drank] = document.querySelectorAll(".container div");
const remainingLitres = document.querySelector(
  ".container .remaining div span"
);
const drankPercent = document.querySelector(".container .drank");
const glass = document.querySelectorAll(".glass");
console.log(glass);

// for(let i=0; i<=8; i++) {
//     setTimeout(() => {
//         container.classList.remove(`state-${i-1}`)
//         container.classList.add(`state-${i}`);
//     }, 1000*i);
// }

glass.forEach((gl, idx) => {
  const index = idx + 1;
  gl.addEventListener("click", () => {
    let higherStateActive = false;
    for (let i = index + 1; i <= 8; i++) {
      const currentState = `state-${i}`;
      if (container.classList.contains(currentState)) {
        higherStateActive = true;
      }
      container.classList.remove(currentState);
      glass[i - 1].classList.remove("blue");
    }
    for (let i = 0; i < index; i++) {
      container.classList.add(`state-${i}`);
      if (i < index - 1) {
        glass[i].classList.add("blue");
      }
    }
    if (higherStateActive) {
      container.classList.add(`state-${index}`);
      glass[idx].classList.add("blue");
    } else {
      container.classList.toggle(`state-${index}`);
      glass[idx].classList.toggle("blue");
    }

    let currentStateNo = -1;
    if (container.classList.contains(`state-${index}`)) {
      currentStateNo = index;
    } else {
      currentStateNo = index - 1;
    }

    remainingLitres.innerHTML = (1 - currentStateNo / 8) * 2 + "L";
    drankPercent.innerHTML = (currentStateNo / 8) * 100 + "%";
  });
});

const adjustWaterHeight = () => {};

adjustWaterHeight();
