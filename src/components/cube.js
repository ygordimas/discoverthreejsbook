import {
  BoxGeometry,
  Mesh,
  MeshStandardMaterial,
  MathUtils,
  TextureLoader,
} from "three";

function createMaterial() {
  const textureLoader = new TextureLoader();
  const texture = textureLoader.load("/dude.jpg");
  const material = new MeshStandardMaterial({ map: texture });

  return material;
}

function createCube() {
  const geometry = new BoxGeometry(2, 2, 2);

  const material = createMaterial();

  const cube = new Mesh(geometry, material);

  cube.rotation.set(-0.5, -0.1, 0.8);

  const radiansPerSecond = MathUtils.degToRad(30);

  cube.tick = (delta) => {
    cube.rotation.x += radiansPerSecond * delta;
    cube.rotation.y += radiansPerSecond * delta;
    cube.rotation.z += radiansPerSecond * delta;
  };

  return cube;
}

export { createCube };
