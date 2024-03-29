import { createCamera } from "../components/camera";
import { createCube } from "../components/cube";
import { createLights } from "../components/lights";
import { createScene } from "../components/scene";
import { createMeshGroup } from "../components/meshGroup";

import { Train } from "../components/Train/Train";

import { createRenderer } from "../systems/renderer";
import { Resizer } from "../systems/Resizer";
import { Loop } from "../systems/Loop";
import { createControls } from "../systems/controls";
import { createTrain } from "../components/train";

let camera;
let renderer;
let scene;
let loop;

class World {
  constructor(container) {
    camera = createCamera(container);
    scene = createScene();
    renderer = createRenderer();
    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement);

    const controls = createControls(camera, renderer.domElement);
    controls.addEventListener("change", () => {
      this.render();
    });

    const { hemisphereLight, mainLight } = createLights();
    const train = new Train();

    // const cube = createCube();
    // loop.updatables.push(cube);
    // const meshGroup = createMeshGroup();
    loop.updatables.push(controls, train);

    scene.add(hemisphereLight, mainLight, train);

    const resizer = new Resizer(camera, container, renderer);
  }

  render() {
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}

export { World };
