import * as BABYLON from '@babylonjs/core';
import "@babylonjs/loaders"
import { Viewer } from 'cesium';

export async function execBJS(canvas:HTMLCanvasElement,viewer:Viewer){
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;

    const engine=new BABYLON.Engine(canvas,true);

    const scene = new BABYLON.Scene(engine);

    scene.useRightHandedSystem = false;
    scene.skipPointerMovePicking = true;

    // This creates and positions a free camera (non-mesh)
    const camera = new BABYLON.ArcRotateCamera("camera1",  0,0,1000,new BABYLON.Vector3(0, 5, -20), scene);
    camera.setTarget(BABYLON.Vector3.Zero());
    camera.attachControl(canvas, true);

    const name = "HillValley.babylon";

    await BABYLON.SceneLoader.AppendAsync("https://www.babylonjs.com/Scenes/hillvalley/", name, scene);

    scene.activeCamera=camera

    camera.speed = 0.5;
    // camera.inputs.attached.touch
    // camera.applyGravity = true;
    // camera.checkCollisions = true;

    for (const mesh of scene.meshes) {
        mesh.checkCollisions = true;
    }


    scene.activeCamera.position.set(-26.695675321687403, 2.7769661153192278, 21.145217983348115);
    scene.activeCamera.setTarget(new BABYLON.Vector3(-27.038161178180832, 2.7243780642457263, 20.20716786084526));


    engine.runRenderLoop(() => {
        // viewer.render();
        scene.render();
    });

    return engine
}