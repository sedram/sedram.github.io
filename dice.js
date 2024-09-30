const subtitle = document.getElementById("dice");
const d = Math.floor(Math.random() * 6);
const s = ["Educator", "Mathematician", "Programmer"];
Object.defineProperty(Array.prototype, "po", {
  value: function (ind) {
    return this.splice(ind, 1)[0];
  },
});
subtitle.innerText = `${s.po(d % 3)}, ${s.po(d % 2)}, and ${s[0]}`;
