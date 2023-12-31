export declare const createForeignObjectSVG: (width: number, height: number, x: number, y: number, node: Node) => SVGForeignObjectElement;
export declare const loadSerializedSVG: (svg: Node) => Promise<HTMLImageElement>;
export declare const FEATURES: {
    readonly SUPPORT_RANGE_BOUNDS: boolean;
    readonly SUPPORT_WORD_BREAKING: boolean;
    readonly SUPPORT_SVG_DRAWING: boolean;
    readonly SUPPORT_FOREIGNOBJECT_DRAWING: Promise<boolean>;
    readonly SUPPORT_CORS_IMAGES: boolean;
    readonly SUPPORT_RESPONSE_TYPE: boolean;
    readonly SUPPORT_CORS_XHR: boolean;
    readonly SUPPORT_NATIVE_TEXT_SEGMENTATION: boolean;
};
