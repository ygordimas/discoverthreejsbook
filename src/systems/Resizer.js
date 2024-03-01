const setSize = (camera, container, renderer) => {
  //set aspect ratio
  camera.aspect = container.clientWidth / container.clientHeight;

  //update camera's frustum
  camera.updateProjectionMatrix();

  //update the size of the renderer and the canvas
  renderer.setSize(container.clientWidth, container.clientHeight);

  //set the pixel ratio for mobile devices
  renderer.setPixelRatio(window.devicePixelRatio);
};

class Resizer {
  constructor(camera, container, renderer) {
    //set initial size on load
    setSize(camera, container, renderer);

    window.addEventListener("resize", () => {
      // set the size again if a resize occurs
      setSize(camera, container, renderer);

      // hook for performing any custom actions
      this.onResize();
    });
  }

  onResize() {}
}

export { Resizer };
