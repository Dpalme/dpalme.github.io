import * as THREE from 'https://dpalmer.in/Art-Project/three.module.js';

let camera, scene, renderer, container;
let theta = 0;

const radius = 500;
const frustumSize = 200;

const mouse = new THREE.Vector2();
let wheel = 0;
const target = new THREE.Vector2();
const windowHalf = new THREE.Vector2(window.innerWidth / 2, window.innerHeight / 2);

init();
animate();

function init() {
    container = object({type: "div", class: "overflow-h fixed center-a back"});
    document.body.appendChild(container);

    const aspect = window.innerWidth / window.innerHeight;
    camera = new THREE.OrthographicCamera( frustumSize * aspect / - 2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / - 2, .1, 3000);

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x14171D);

    const light = new THREE.DirectionalLight(0xFFFFFF, 1);
    light.position.set(1, 1, 1).normalize();
    scene.add(light);

    const geometry = new THREE.CylinderBufferGeometry(.2, .4, 2);
    var materials = [new THREE.MeshBasicMaterial({color: 0x1F5AFE}),
                new THREE.MeshBasicMaterial({color: 0x4558D9}),
                new THREE.MeshBasicMaterial({color: 0x6A57B3}),
                new THREE.MeshBasicMaterial({color: 0x8F558F}),
                new THREE.MeshBasicMaterial({color: 0xB45367}),
                new THREE.MeshBasicMaterial({color: 0xDA5242}),
                new THREE.MeshBasicMaterial({color: 0xFF501B})];

    for ( let i = 0; i < 2000; i ++ ) {
    const object = new THREE.Mesh(geometry, materials[Math.random() * materials.length << 0]);

    object.position.x = Math.random() * 800 - 400;
            object.position.y = Math.random() * 800 - 400;
            object.position.z = Math.random() * 800 - 400;

    object.rotation.x = Math.random() * Math.PI * 2;
    object.rotation.y = Math.random() * Math.PI * 2;
    object.rotation.z = Math.random() * Math.PI * 2;

    scene.add(object);
    }

    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    window.addEventListener('resize', onWindowResize, false);
    window.addEventListener('mousemove', onMouseMove, false);
    window.addEventListener('wheel', onMouseWheel, false);
}

function onMouseMove(event) {
    mouse.x = (event.clientX - windowHalf.x);
    mouse.y = (event.clientY - windowHalf.x);
}

function onMouseWheel(event) {
    wheel -= event.deltaY;
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
    target.x = (1 - mouse.x) * 0.002;
    target.y = (1 - mouse.y + wheel) * -0.002;  
    
    theta += 0.01;
    var angle = THREE.MathUtils.degToRad(theta);
    camera.position.x = 2 * Math.sin(angle) + 0.1 * (target.x - camera.position.x);
    camera.position.y = 2 * Math.sin(angle) + 0.1 * (target.y - camera.position.y);
    camera.position.z = 2 * Math.cos(angle);
    camera.lookAt(scene.position);
    camera.updateMatrixWorld();

    renderer.render(scene, camera);
}