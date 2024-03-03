import { DirectionalLight, AmbientLight, HemisphereLight } from "three";

function createLights() {
  const hemisphereLight = new HemisphereLight("powderblue", "tomato", 5);
  const mainLight = new DirectionalLight("orchid", 5);

  mainLight.position.set(10, 10, 10);

  return { hemisphereLight, mainLight };
}

export { createLights };
