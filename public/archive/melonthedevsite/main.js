import '/assets/archive/style/style.css'

import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

function getScrollbarWidth() {
    const outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll';
    document.body.appendChild(outer);
    const inner = document.createElement('div');
    outer.appendChild(inner);
    const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);
    outer.parentNode.removeChild(outer);
    return scrollbarWidth;
}

updateBlur();
function updateBlur() {
    document.getElementById('blur').style.width = window.innerWidth - getScrollbarWidth() + "px";
    document.getElementById('blur').style.height = window.innerHeight + "px";
}
document.getElementById('scrollimg').onclick = () => {
    const element = document.getElementById('scrollinfo');
    element.innerText = "Scroll down\nGo on, I won't scroll for you..."
    setTimeout(function () {
        element.innerText = "Scroll down";
    }, 1000);
};


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#background'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(0);
camera.position.setY(0);

const torus = new THREE.Mesh(
    new THREE.TorusGeometry(10, 3, 16, 100),
    new THREE.MeshStandardMaterial({color: 0x00FFD0})
);
const pointLight = new THREE.PointLight(0xFFFFFF);
const ambientLight = new THREE.AmbientLight(0xFFFFFF);
const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(200, 50);
//const controls = new OrbitControls(camera, renderer.domElement);
const spaceTexture = new THREE.TextureLoader().load('/assets/media/space2.jpg')
const normalTexture = new THREE.TextureLoader().load('/assets/media/normal.jpg')
const meloneTexture = new THREE.TextureLoader().load('/assets/media/profile-picture.png')
const moonTexture = new THREE.TextureLoader().load('/assets/media/moon.jpg')
const worldTexture = new THREE.TextureLoader().load('/assets/media/earth2.jpg')
const worldnormalTexture = new THREE.TextureLoader().load('/assets/media/earthnormal.jpg')
const sunTexture = new THREE.TextureLoader().load('/assets/media/sun3.jpg')
const moon = new THREE.Mesh(
    new THREE.SphereGeometry(3, 32, 32),
    new THREE.MeshStandardMaterial({map: moonTexture, normal: normalTexture})
);
const earth = new THREE.Mesh(
    new THREE.SphereGeometry(12, 32, 32),
    new THREE.MeshStandardMaterial({map: worldTexture, normal: worldnormalTexture})
);
const sun = new THREE.Mesh(
    new THREE.SphereGeometry(96, 32, 32),
    new THREE.MeshStandardMaterial({map: sunTexture})
);
const player = new THREE.Mesh(
    new THREE.BoxGeometry(2, 4, 2),
    new THREE.MeshStandardMaterial({map: meloneTexture})
);

scene.background = spaceTexture;
pointLight.position.set(-200, 20, 0);
//controls.rotateSpeed -= 0.60;
moon.position.set(16, 0, 15)
sun.position.set(-200, 20, 0)
earth.rotation.y += 5;

//scene.add(torus);
scene.add(pointLight);
scene.add(ambientLight);
scene.add(sun);
sun.add(earth)
earth.position.set(200, -20, 0);
earth.add(moon);
scene.add(lightHelper)
//scene.add(gridHelper)

Array(500).fill(undefined, undefined, undefined).forEach(addStar)
document.body.onscroll = (ev=> moveCamera(ev));
document.body.oncontextmenu = (ev) => {
    ev.preventDefault();
    const controls = new OrbitControls(camera, renderer.domElement);player.position.set(camera.position.x, camera.position.y, camera.position.z);scene.add(player);
};
document.body.onresize = (ev => onWindowResize());

function onWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    updateBlur();
}

function addStar() {
    const geometry = new THREE.SphereGeometry(0.25, 24, 24);
    const material = new THREE.MeshStandardMaterial({color: 0xFFFFFF})
    const star = new THREE.Mesh(geometry, material);
    const [x, y, z] = Array(3).fill(undefined, undefined, undefined).map(() => THREE.MathUtils.randFloatSpread(200));
    star.position.set(x, y, z);
    scene.add(star);
}//

//let earthOnSun = false;
let rotateSun = false;
let lastScrollTop = pageYOffset;
let deg = 0;
let t = 0;
function moveCamera(ev) {
    t = document.body.getBoundingClientRect().top;
    if  (t <= -15810) camera.position.z = t * -0.01;
    else camera.position.z = t * -0.01;
    camera.position.x = t * -0.0002;
    camera.position.y = t * -0.001;
    console.log(camera.position.x + " - " + camera.position.y + " - " + camera.position.z + " ---- " + t)
    //console.log(deg)
    if (t <= -5200) {
        rotateSun = true;
    }// else {
        //rotateSun = false;
        //earth.position.set(200, -20, 0);
    //}
    turn(-6748, 70);
    //turn(-11900, 70);
}

function turn(startpoint, degree) {
    if (t <= startpoint) {
        if (deg >= degree/100) {
            return;
        }
        let st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop){
            camera.rotation.y = deg;
            deg += 0.01;
        } else {
            camera.rotation.y = deg;
            deg -= 0.01;
        }
        lastScrollTop = st <= 0 ? 0 : st;
    } else {
        deg = (Math.round(deg * 100)/100);
        if (deg > 0) {
            deg -= 0.01;
            camera.rotation.y = deg;
        } else if (deg < 0) {
            deg += 0.01;
            camera.rotation.y = deg;
        }
    }
}

function animate() {
    requestAnimationFrame(animate);
    torus.rotation.x += 0.01;
    torus.rotation.y += 0.001;
    if (rotateSun) sun.rotation.y += 0.005;
    earth.rotation.y += 0.005;
    moon.rotation.y -= 0.005;
    renderer.render(scene, camera);
}
animate();