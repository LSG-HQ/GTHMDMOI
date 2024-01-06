// camera = new THREE.PerspectiveCamera(
//   40,
//   window.innerWidth / window.innerHeight,
//   1,
//   5000
// );

// new RGBELoader()
//   .setDataType(THREE.UnsignedByteType)
//   .setPath("3d/equirectangular/")
//   .load("royal_esplanade_1k.hdr", function (texture) {
//     const envMap = pmremGenerator.fromEquirectangular(texture).texture;
//     scene.environment = envMap;
//     // scene.background = envMap;

//     texture.dispose();
//     pmremGenerator.dispose();

//     animate();
//   });

// const loader = new GLTFLoader().setPath("3d/building/");
// loader.load("scene.gltf", function (gltf) {
//   gltf.scene.traverse(function (child) {
//     if (child.isMesh) {
//     }
//   });
//   const material = new THREE.MeshBasicMaterial({
//     wireframe: true
//   });
//   mesh = gltf.scene.children[0];
//   // mesh.material = material;
//   scene.add(gltf.scene);

//   const box3 = new THREE.Box3().setFromObject(gltf.scene);
//   const vector = new THREE.Vector3();
//   box3.getCenter(vector);
//   gltf.scene.position.set(-vector.x, -vector.y, -vector.z);

//   animate();
// });
