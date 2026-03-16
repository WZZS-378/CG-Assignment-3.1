// Define rotation speed constant = 0.005
/* Define the animation function
 * - update the earth y-rotation with the rotation speed constant
 * - update the earth orbit around the sun using cos/sin
 * - update the moon orbit around the earth (clockwise) using cos/sin
 * - make the moon tidally-locked to the earth (always faces earth)
 * - update the controls (required for damping)
 * - render the view (scene, camera)
 * - request animation frame calling the function into infinite loop
 */


function animate() {
   requestAnimationFrame(animate);
   controls.update();
   renderer.render(scene, camera);
}
