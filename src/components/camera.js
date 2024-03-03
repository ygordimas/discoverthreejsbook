import { PerspectiveCamera } from "three";

function createCamera(container) {
  const fov = 35;
  const aspect = container.clientWidth / container.clientHeight;
  const near = 0.1;
  const far = 100;

  const camera = new PerspectiveCamera(fov, aspect, near, far);

  camera.position.set(0, 0, 20);

  return camera;
}

export { createCamera };
