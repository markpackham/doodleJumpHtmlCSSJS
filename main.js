document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");
  const doodler = document.createElement("div");
  let doodlerLeftSpace = 50;
  let doodlerBottomSpace = 150;
  let platformCount = 5
  let platforms = []
  let isGameOver = false;

  class Platform {
    constructor(newPlatBottom) {
      // our grid width is 400px so anything from 0-315 will fit
      this.left = Math.random() * 315
      this.bottom = newPlatBottom
      this.visual = document.createElement('div')

      const visual = this.visual
      visual.classList.add('platform')
      visual.style.left = this.left + 'px'
      visual.style.bottom = this.bottom + 'px'
      grid.appendChild(visual)
    }
  }

  function createPlatforms(){
    for(let i =0; i < platformCount; i++) {
      // grid height is 600
      let platGap = 600 / platformCount
      // use for loop to increment gap space
      let newPlatBottom = 100 + i * platGap
      let newPlatform = new Platform (newPlatBottom)
      platforms.push(newPlatform)
    }
  }

    // create game character
    function createDoodler() {
      grid.appendChild(doodler);
      doodler.classList.add("doodler");
      doodler.style.left = doodlerLeftSpace + "px";
      doodler.style.bottom = doodlerBottomSpace + "px";
    }

  function start() {
    if (!isGameOver) {
      createDoodler();
      createPlatforms();
    }
  }
  start();
});
