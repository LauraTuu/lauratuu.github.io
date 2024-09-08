// main.js
// Create the scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Create a renderer and attach it to our document
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Load the model
const loader = new THREE.GLTFLoader();
loader.load('TiggWorldRoad.glb', function(gltf) {
    const model = gltf.scene;
    scene.add(model);
    model.position.set(0, 0, 0);
    animate();
}, undefined, function(error) {
    console.error(error);
});

// Lighting
const light = new THREE.AmbientLight(0x404040, 5); // soft white light
scene.add(light);

camera.position.z = 5;

// Create a function to animate our scene
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
