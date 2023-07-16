import { PostProcessStage, Viewer, createWorldTerrainAsync } from "cesium";

let viewer:Viewer

// CesiumJS自定义后处理Stage
class CesiumCombineStage extends PostProcessStage {
    constructor(options) {}
    execute(context) {
        const scene = viewer.scene;
        const context = scene.getc;
        // 创建FRAMEBUFFER 和 纹理
        let fbo = new Framebuffer();
        let colorTex = new Texture2D(width, height);
        let depthTex = new Texture2D(width, height);

        // 配置FRAMEBUFFER附件和视口
        fbo.attachTexture(colorTex, 0);
        fbo.attachTexture(depthTex, 1);
        fbo.bind();
        gl.viewport(0, 0, width, height);

        // Cesium场景渲染,输出到纹理
        scene.render();

        // 解绑恢复默认FRAMEBUFFER
        fbo.unbind();
    }
}


export function execCesium(containerHTMLElement: HTMLElement) {
    const viewer = new Viewer(containerHTMLElement, {
        useDefaultRenderLoop: false,
    });



    return viewer
}