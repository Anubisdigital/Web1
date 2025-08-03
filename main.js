console.log('Hello World!');
import * as THREE from 'https://cdn.skypack.dev/three@0.134.0';

// 1. Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 2. Lights
const ambientLight = new THREE.AmbientLight(0x404040, 5); // soft white light
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5).normalize();
scene.add(directionalLight);

// 3. Create a red human-like model (using a simple capsule for demonstration)
const bodyGeometry = new THREE.CapsuleGeometry(0.5, 2, 32);
const bodyMaterial = new THREE.MeshLambertMaterial({ color: 0xff0000 });
const humanBody = new THREE.Mesh(bodyGeometry, bodyMaterial);
humanBody.position.y = 1;
scene.add(humanBody);

// Optional: Add a simple plane to act as a ground
const groundGeometry = new THREE.PlaneGeometry(10, 10);
const groundMaterial = new THREE.MeshLambertMaterial({ color: 0xcccccc });
const ground = new THREE.Mesh(groundGeometry, groundMaterial);
ground.rotation.x = -Math.PI / 2;
scene.add(ground);

// 4. Position the camera
camera.position.z = 5;

// 5. Animation loop
function animate() {
    requestAnimationFrame(animate);
    humanBody.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();

// 6. Handle window resizing
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}, false);
