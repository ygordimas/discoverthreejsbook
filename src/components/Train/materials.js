import { MeshStandardMaterial } from "three";

function createMaterials() {
  const body = new MeshStandardMaterial({ color: "tomato", flatShading: true });
  const detail = new MeshStandardMaterial({
    color: "darkslategray",
    flatShading: true,
  });

  return { body, detail };
}

export { createMaterials };
