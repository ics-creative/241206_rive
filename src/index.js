import { Rive } from "@rive-app/webgl2";

const init = () => {
  const star = new Rive({
    src: "./star.riv",
    canvas: document.getElementById("star"),
    artboard: "star",
    autoplay: true,
    stateMachines: "stateMachine",
    onLoad: () => {
      star.resizeDrawingSurfaceToCanvas();
    },
  });

  const fish = new Rive({
    src: "./fish.riv",
    canvas: document.getElementById("fish"),
    autoplay: true,
    stateMachines: "State Machine 1",
    onLoad: () => {
      fish.resizeDrawingSurfaceToCanvas();
    },
  });
};

document.addEventListener("DOMContentLoaded", init);
