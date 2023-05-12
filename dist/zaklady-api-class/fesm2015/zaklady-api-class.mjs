import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class ZakladyApiClassService {
    constructor() { }
}
ZakladyApiClassService.ɵfac = function ZakladyApiClassService_Factory(t) { return new (t || ZakladyApiClassService)(); };
ZakladyApiClassService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ZakladyApiClassService, factory: ZakladyApiClassService.ɵfac, providedIn: 'root' });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ZakladyApiClassService, [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return []; }, null);
})();

class ZakladyApiClassComponent {
}
ZakladyApiClassComponent.ɵfac = function ZakladyApiClassComponent_Factory(t) { return new (t || ZakladyApiClassComponent)(); };
ZakladyApiClassComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ZakladyApiClassComponent, selectors: [["lib-zakladyApiClass"]], decls: 2, vars: 0, template: function ZakladyApiClassComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "p");
            i0.ɵɵtext(1, " zaklady-api-class works! ");
            i0.ɵɵelementEnd();
        }
    }, encapsulation: 2 });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ZakladyApiClassComponent, [{
            type: Component,
            args: [{ selector: 'lib-zakladyApiClass', template: `
    <p>
      zaklady-api-class works!
    </p>
  ` }]
        }], null, null);
})();

class ZakladyApiClassModule {
}
ZakladyApiClassModule.ɵfac = function ZakladyApiClassModule_Factory(t) { return new (t || ZakladyApiClassModule)(); };
ZakladyApiClassModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ZakladyApiClassModule });
ZakladyApiClassModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({});
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ZakladyApiClassModule, [{
            type: NgModule,
            args: [{
                    declarations: [
                        ZakladyApiClassComponent
                    ],
                    imports: [],
                    exports: [
                        ZakladyApiClassComponent
                    ]
                }]
        }], null, null);
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ZakladyApiClassModule, { declarations: [ZakladyApiClassComponent], exports: [ZakladyApiClassComponent] }); })();

class Test {
    constructor() {
        this.test = "test";
    }
}

/*
 * Public API Surface of zaklady-api-class
 */

/**
 * Generated bundle index. Do not edit.
 */

export { Test, ZakladyApiClassComponent, ZakladyApiClassModule, ZakladyApiClassService };
//# sourceMappingURL=zaklady-api-class.mjs.map
