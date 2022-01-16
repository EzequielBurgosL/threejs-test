// Game logic
const update = () => {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.005;
};

// Draw scene
const render = () => {
  renderer.render(scene, camera);
};

// Run game loop (update, render, repeat)
const GameLoop = () => {
  requestAnimationFrame(GameLoop);
  update();
  render();
};

GameLoop();