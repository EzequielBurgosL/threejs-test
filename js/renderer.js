const aspectRatio = window.innerWidth / window.innerHeight;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

handleWindowResize();

// Create the shape
const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);

// Create a shape
const material = new THREE.MeshBasicMaterial({ color: 0xFFFFFF, wireframe: true });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 3;