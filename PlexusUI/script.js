var scene, camera, renderer;
var geometry, material, mesh;
var spheres = [];
var timer;


init();
animate();

function init() {

    scene = new THREE.Scene();
    scene.background = new THREE.Color("#000000");

    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.z = 500;

    controls = new THREE.OrbitControls( camera );

    addLights();

    var colors = [
        "#DEDEDE",
    ];

    var MAX_POINTS = 600;
    var positions = [];
    
  
    for (var i = 0; i < 300; i++) {
        var color = colors[Math.floor((Math.random() * 5))]
        var radius = Math.random() * 4;
        var geometry = new THREE.SphereGeometry( radius, 32, 32 );
        var material = new THREE.MeshPhongMaterial( { color: color, shading: THREE.FlatShading, vertexColors: THREE.VertexColors, shininess: 0 } );
        var sphere = new THREE.Mesh( geometry, material );
        var x = ( Math.random() - 0.5 ) * 1500;
        var y = ( Math.random() - 0.5 ) * 1500;
        var z = ( Math.random() - 0.5 ) * 1500;
        sphere.position.x  = x
        sphere.position.y  = y
        sphere.position.z  = z
        sphere.velocity = {x: 0.01, y: 0.01, z: 0.01};
        sphere.radius = radius;
        spheres.push(sphere)

        positions.push(new THREE.Vector3(x,y,z))

        scene.add( sphere );    

    }

    /*
    var curve = new THREE.CatmullRomCurve3(positions);
    var points = curve.getPoints(50);
    var geometry = new THREE.BufferGeometry().setFromPoints( points );
    var material = new THREE.LineBasicMaterial({color: colors});
    var splineObject = new THREE.Line(geometry,material)

    scene.add(splineObject)
    */
  
    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor( 0xffffff );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setPixelRatio( window.devicePixelRatio );
    


    document.body.appendChild( renderer.domElement );
    timer = 0;

}

function addLights() {
    var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
    directionalLight.position.set( 0, 1, 0 );
    scene.add( directionalLight );

    var leftLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
    leftLight.position.set( 1, 0, 0 );
    scene.add( leftLight );

    var rightLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
    rightLight.position.set( 1, 0, 0 );
    scene.add( rightLight );

    var frontLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
    frontLight.position.set( 0, 0, 1 );
    scene.add( frontLight );

    var backLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
    backLight.position.set( 0, 0, -1 );
    scene.add( backLight );

    var bottomLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
    bottomLight.position.set( 0, -1, 0 );
    scene.add( bottomLight );
}

function animate() {
    requestAnimationFrame( animate );

    renderer.render( scene, camera );
}

window.addEventListener("resize", function() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize( window.innerWidth, window.innerHeight );
  render();
});