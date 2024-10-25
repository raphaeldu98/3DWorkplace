import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import type { WebGLRendererParameters } from 'three/src/Three.js';

export declare class Knit {
    maskBinary: Uint8Array | null;
    constructor(binary: Uint8Array);
    /**
     * 初始化wasm, 解析蒙版二进制, 获取颜色数组
     */
    getColors(): Promise<Uint8Array>;
}

declare interface Layout {
    x: number;
    y: number;
}

export declare class Renderer {
    domElement: HTMLCanvasElement | null;
    three: typeof THREE | null;
    originRenderConfig?: WebGLRendererParameters;
    deg: number;
    focus: number;
    layout: Layout;
    viewNum: number;
    size: Size;
    resiton: Resiton;
    knit: Knit | null;
    rgbaColors: Uint8Array | null;
    maskTexture: THREE.DataTexture | null;
    viewsScene: THREE.Scene | null;
    viewsCamera: THREE.PerspectiveCamera | null;
    viewsRenderTarget: THREE.WebGLRenderTarget | null;
    mixScene: THREE.Scene | null;
    mixCamera: THREE.OrthographicCamera | null;
    mixRenderer: THREE.WebGLRenderer | null;
    mixPass: ShaderPass | null;
    vertexShader: string;
    fragmentShader: string;
    resCache: any[];
    viewMode: number;
    constructor(props: RendererProps);
    /**
     * 设置焦距
     * @param focus 焦距
     */
    setFocus(focus: number): void;
    /**
     * 设置布局 {x行, y列}
     * @param x 行数
     * @param y 列数
     */
    setLayout(rowNum: number, colNum: number): void;
    /**
     * 设置宫格图长宽 {width宽, height高}
     * @param width 宽
     * @param height 高
     */
    setSize(width: number, height: number): void;
    /**
     * 设置屏幕分辨率
     * @param width 宽
     * @param height 高
     */
    setResiton(width: number, height: number): void;
    /**
     * 初始化蒙版贴图
     */
    private _initMaskTexture;
    /**
     * 初始化交织图画布
     */
    private _initCanvas;
    /**
     * 渲染交织图
     * @param scene 场景
     * @param camera 相机
     */
    render(scene: THREE.Scene, camera: THREE.PerspectiveCamera): Promise<void>;
    /**
     * 遍历scene里的object3d对象，对他们关闭视锥剔除，防止数组相机对画面进行裁切
     * @param parent 对象
     */
    closeFrustumCulled(parent: THREE.Object3D): void;
    /**
     * 根据中心相机排列相机, 组成宫格图
     * @param {PerspectiveCamera} centerCamera 中心相机
     * @returns
     */
    private _getCameraArray;
    /**
     * 计算相机间距
     * @param {number} viewNums 视点数
     * @param {number} focalDistance 焦距
     * @param {number} deg 视场角(°)
     * @returns 单位间距和总距离
     */
    private _getCameraDis;
    /**
     * rgb数组转rgba数组
     * @param rgbArray rgb平铺数组
     * @returns rgba平铺数组
     */
    _rgbToRgba(rgbArray: Uint8Array | null): Uint8Array;
}

/**
 * @description 渲染器属性
 * @export interface RendererProps
 * @property {number} [deg=45] 可视角度
 * @property {number} [focus=1] 焦距
 * @property {Layout} [layout] 行列数
 * @property {Size} [size] 宫格图长宽
 * @property {Layout} [resiton] 渲染分辨率
 * @property {Knit} [knit] 蒙版对象
 * @property {ViewMode} [viewMode] 视点模式 0-交织 1-宫格图 2-单视点图
 * @property {THREE.Scene} [scene] 场景
 * @property {THREE.PerspectiveCamera} [camera] 相机
 * @property {THREE.WebGLRenderer} [three] three
 * @property {WebGLRendererParameters} [originRenderConfig] 原始渲染配置
 */
declare interface RendererProps {
    deg?: number;
    focus?: number;
    layout?: Layout;
    size?: Size;
    knit?: Knit;
    resiton?: Resiton;
    viewMode?: number;
    three: typeof THREE;
    originRenderConfig?: WebGLRendererParameters;
}

declare interface Resiton extends Size {
}

declare interface Size {
    width: number;
    height: number;
}

export { }
