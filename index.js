const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

var geometry = new THREE.OctahedronGeometry(1,1)
var material = new THREE.MeshBasicMaterial({  color: 0xff0051, flatShading: true, metalness: 0, roughness: 1})
var cube = new THREE.Mesh(geometry, material)
scene.add(cube)

camera.position.z = 5

var ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
scene.add(ambientLight)

var pointLight = new THREE.PointLight( 0xffffff, 1 );
pointLight.position.set( 25, 50, 25 );
scene.add( pointLight );

renderer.render(scene, camera)


function animate() {
    requestAnimationFrame(animate)
    cube.rotation.x += 0.2;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera)
}
animate()

