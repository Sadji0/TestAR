import * as THREE from 'three';
        import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
        import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';

import { FontLoader } from 'three/addons/loaders/FontLoader.js';


//set scene, camera, render
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

scene.background = new THREE.Color("rgb(100%, 100%, 100%)"); 

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


//add controls
        const controls = new OrbitControls(camera, renderer.domElement);

/*
//add cube on scene
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
*/

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );

//cube.rotation.x += 0.01;
//cube.rotation.y += 0.01;

	renderer.render( scene, camera );

}
animate();


// add light
const light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light ); 

/*
//add gltf loader 
const loader = new GLTFLoader();
var model_glass = new THREE.Object3D();

//alert("дошло до функции загрузки 3d");

loader.load( 'https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.1.3/examples/face-tracking/assets/glasses/scene.gltf', function ( gltf ) {
//alert("вошло в функцию загрузки");

model_glass = gltf.scene;
model_glass.name = "glass1";
model_glass.scale.set(0.005, 0.005, 0.007); 
model_glass.position.set(0, 1, 0);

	scene.add(model_glass);
//alert("all ok!");

}, undefined, function ( error ) {

	console.error( error );
 alert("error!");

} );
*/

const input = document.querySelector("#rel_range");

const value = document.querySelector("#rel_val");

input.addEventListener("input", (event) => { 
value.textContent = event.target.value;
//model_glass.position.y = event.target.value;

}); 

//load 3d text
const loader = new FontLoader();

loader.load( 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/fonts/helvetiker_regular.typeface.json', function ( font ) {

//alert("загружаем фон");

	const text_geometry = new TextGeometry( "I love Selfmade", {
		font: font,
		size: 1,
		height: 0.1,
		//curveSegments: 12,
		//bevelEnabled: true,
		//bevelThickness: 10,
		//bevelSize: 8,
		//bevelOffset: 0,
		//bevelSegments: 5
	} );

//alert("добавляем всякие меши");

const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const text_3d = new THREE.Mesh(text_geometry, material );

scene.add(text_3d);

alert("успешно добавили 3d текст");
},undefined,function ( err ) {
		alert( 'An error happened\n' + err);
	});

//alert("Выполнение скрипта завершено успешно");