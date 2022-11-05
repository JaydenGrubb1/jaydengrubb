const canvas = document.getElementById("canvas");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
renderer.setClearColor(0x000000, 0);

window.addEventListener('resize', onWindowResize, false);
onWindowResize();

const box_geometry = new THREE.BoxGeometry(1, 1, 1);
const edge_geometry = new THREE.EdgesGeometry(box_geometry);

const material = new THREE.LineBasicMaterial({
	color: 0xffffff,
	transparent: true,
	opacity: 0.3
});

// let tess = null;

// const loader = new THREE.GLTFLoader();
// loader.load('/assets/tesseract.glb', function (gltf) {
// 	let obj = gltf.scene.children[0];
// 	let geo = obj.geometry;
// 	// console.log(geo);
// 	const edgey = new THREE.EdgesGeometry(geo);
// 	tess = new THREE.LineSegments(edgey, material);
// 	scene.add(tess);
// }, undefined, function (error) {
// 	console.error(error);
// });

const cube = new THREE.LineSegments(edge_geometry, material);
scene.add(cube);

camera.position.z = 2;

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
	requestAnimationFrame(animate);

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	// if(tess){
	// 	tess.rotation.x += 0.01;
	// 	tess.rotation.y += 0.01;
	// }

	renderer.render(scene, camera);
};

animate();