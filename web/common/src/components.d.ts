/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface LeyaPrintGraphPaper {
        "height": string;
        "width": string;
    }
    interface LeyaPrintImageFetch {
        "externalUrl": boolean;
        "imgAlt": string;
        "imgSrc": string;
    }
    interface LeyaPrintWatermark {
    }
    interface LeyaPrintWhitepaper {
        "markup": string;
    }
}
declare global {
    interface HTMLLeyaPrintGraphPaperElement extends Components.LeyaPrintGraphPaper, HTMLStencilElement {
    }
    var HTMLLeyaPrintGraphPaperElement: {
        prototype: HTMLLeyaPrintGraphPaperElement;
        new (): HTMLLeyaPrintGraphPaperElement;
    };
    interface HTMLLeyaPrintImageFetchElement extends Components.LeyaPrintImageFetch, HTMLStencilElement {
    }
    var HTMLLeyaPrintImageFetchElement: {
        prototype: HTMLLeyaPrintImageFetchElement;
        new (): HTMLLeyaPrintImageFetchElement;
    };
    interface HTMLLeyaPrintWatermarkElement extends Components.LeyaPrintWatermark, HTMLStencilElement {
    }
    var HTMLLeyaPrintWatermarkElement: {
        prototype: HTMLLeyaPrintWatermarkElement;
        new (): HTMLLeyaPrintWatermarkElement;
    };
    interface HTMLLeyaPrintWhitepaperElement extends Components.LeyaPrintWhitepaper, HTMLStencilElement {
    }
    var HTMLLeyaPrintWhitepaperElement: {
        prototype: HTMLLeyaPrintWhitepaperElement;
        new (): HTMLLeyaPrintWhitepaperElement;
    };
    interface HTMLElementTagNameMap {
        "leya-print-graph-paper": HTMLLeyaPrintGraphPaperElement;
        "leya-print-image-fetch": HTMLLeyaPrintImageFetchElement;
        "leya-print-watermark": HTMLLeyaPrintWatermarkElement;
        "leya-print-whitepaper": HTMLLeyaPrintWhitepaperElement;
    }
}
declare namespace LocalJSX {
    interface LeyaPrintGraphPaper {
        "height"?: string;
        "width"?: string;
    }
    interface LeyaPrintImageFetch {
        "externalUrl"?: boolean;
        "imgAlt"?: string;
        "imgSrc"?: string;
    }
    interface LeyaPrintWatermark {
    }
    interface LeyaPrintWhitepaper {
        "markup"?: string;
    }
    interface IntrinsicElements {
        "leya-print-graph-paper": LeyaPrintGraphPaper;
        "leya-print-image-fetch": LeyaPrintImageFetch;
        "leya-print-watermark": LeyaPrintWatermark;
        "leya-print-whitepaper": LeyaPrintWhitepaper;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "leya-print-graph-paper": LocalJSX.LeyaPrintGraphPaper & JSXBase.HTMLAttributes<HTMLLeyaPrintGraphPaperElement>;
            "leya-print-image-fetch": LocalJSX.LeyaPrintImageFetch & JSXBase.HTMLAttributes<HTMLLeyaPrintImageFetchElement>;
            "leya-print-watermark": LocalJSX.LeyaPrintWatermark & JSXBase.HTMLAttributes<HTMLLeyaPrintWatermarkElement>;
            "leya-print-whitepaper": LocalJSX.LeyaPrintWhitepaper & JSXBase.HTMLAttributes<HTMLLeyaPrintWhitepaperElement>;
        }
    }
}
