import { Color, Scene, AxesHelper } from "three";

function createScene() {
  const scene = new Scene();
  const axes = new AxesHelper(8);
  scene.add(axes);
  scene.background = new Color("lavenderblush");

  return scene;
}

export { createScene };
