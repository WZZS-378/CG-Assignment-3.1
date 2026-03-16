

function createCube(size, color) {
    var material = new THREE.MeshBasicMaterial();
    material.color = new THREE.Color(color);
    material.wireframe = false;
    var geometry = new THREE.BoxGeometry(size, size, size);
    var cube = new THREE.Mesh(geometry, material);
    return cube;
}

// Generate a grid of cubes with random heights/colors for terrain
function generateTerrainGrid(rows, cols, spacing, baseSize, minHeight, maxHeight, baseColor) {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let x = (j - cols / 2) * spacing;
            let z = (i - rows / 2) * spacing;
            // Random height for terrain effect
            let height = minHeight + Math.random() * (maxHeight - minHeight);
            // Slightly randomize color
            let colorVariation = Math.floor(Math.random() * 0x30);
            let color = baseColor + colorVariation * 0x010101;
            let cube = createCube(baseSize, color);
            cube.scale.y = height;
            cube.position.set(x, (baseSize * height) / 2, z);
            scene.add(cube);
        }
    }
}

/* Define the build system function
 * - compute sizes using formulas
 * - compute orbit distances using formulas
 * - create Sun, Earth, Moon using computed values
 * - set initial positions using computed orbit distances
 * - add all objects to the scene
 */
function buildSystem() {
    generateTerrainGrid(13, 13, 2.1, 2, 0.5, 1, 0x228B22); // generate terrain grid (rows, cols, spacing, baseSize, minHeight, maxHeight, baseColor)
}

/* Define the add shapes function
 * - build the Sun/Earth/Moon objects
 * - build the Dyson halo objects (two rings)
 * - add all objects to the scene
 */
function addShapes() {
    buildSystem(); // create and add Sun, Earth, Moon
}
