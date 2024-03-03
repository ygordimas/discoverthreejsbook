import { CylinderGeometry, Group, Mesh, MeshStandardMaterial } from "three";

function createTrain() {
  const cylinderGeometry = new CylinderGeometry(2, 2, 8);
  const redMaterial = new MeshStandardMaterial({ color: "red" });
  const cylinder = new Mesh(cylinderGeometry, redMaterial);
  const trainGroup = new Group();

  cylinder.rotation.z = Math.PI / 2;
  trainGroup.add(cylinder);

  return trainGroup;
}

export { createTrain };
