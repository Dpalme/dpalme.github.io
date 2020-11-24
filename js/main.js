import * as THREE from 'https://dpalmer.in/Art-Project/three.module.js';

let camera, scene, renderer, container;
let theta = 0;

const radius = 500;
const frustumSize = 200;

init();
animate();

function init() {
    container = object({
        type: "div",
        class: "fixed top left back-2"
    });
    document.body.appendChild(container);

    const aspect = window.innerWidth / window.innerHeight;
    camera = new THREE.OrthographicCamera(frustumSize * aspect / -2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / -2, .1, 3000);

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xD8D7D2);

    const light = new THREE.DirectionalLight(0xFFFFFF, 1);
    light.position.set(1, 1, 1).normalize();
    scene.add(light);

    const geometry = new THREE.CylinderBufferGeometry(.2, .4, 2);
    var colors = [0x1F5AFE, 0x4558D9, 0x6A57B3, 0x8F558F, 0xB45367, 0xDA5242, 0xFF501B];

    for (let i = 0; i < 2000; i++) {
        const object = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
            color: colors[Math.random() * colors.length << 0]
        }));

        object.position.x = Math.random() * 800 - 400;
        object.position.y = Math.random() * 800 - 400;
        object.position.z = Math.random() * 800 - 400;

        object.rotation.x = Math.random() * Math.PI * 2;
        object.rotation.y = Math.random() * Math.PI * 2;
        object.rotation.z = Math.random() * Math.PI * 2;

        scene.add(object);
    }

    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
    const aspect = window.innerWidth / window.innerHeight;
    camera.left = -frustumSize * aspect / 2;
    camera.right = frustumSize * aspect / 2;
    camera.top = frustumSize / 2;
    camera.bottom = -frustumSize / 2;

    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);
    render();
}

function render() {
    theta += 0.1;
    var angle = THREE.MathUtils.degToRad(theta);
    camera.position.x = radius * Math.sin(angle);
    camera.position.y = radius * Math.sin(angle);
    camera.position.z = radius * Math.cos(angle);
    camera.lookAt(scene.position);
    camera.updateMatrixWorld();

    renderer.render(scene, camera);
}