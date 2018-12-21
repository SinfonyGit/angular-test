(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/platform-browser'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('sinfony-ui', ['exports', '@angular/core', '@angular/platform-browser', '@angular/router'], factory) :
    (factory((global['sinfony-ui'] = {}),global.ng.core,global.ng.platformBrowser,global.ng.router));
}(this, (function (exports,i0,platformBrowser,router) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SinfonyUiService = /** @class */ (function () {
        function SinfonyUiService() {
        }
        SinfonyUiService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        SinfonyUiService.ctorParameters = function () { return []; };
        /** @nocollapse */ SinfonyUiService.ngInjectableDef = i0.defineInjectable({ factory: function SinfonyUiService_Factory() { return new SinfonyUiService(); }, token: SinfonyUiService, providedIn: "root" });
        return SinfonyUiService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SinfonyUiComponent = /** @class */ (function () {
        function SinfonyUiComponent() {
        }
        /**
         * @return {?}
         */
        SinfonyUiComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SinfonyUiComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'sbc-sinfony-ui',
                        template: "\n    <p>\n      sinfony-ui works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        SinfonyUiComponent.ctorParameters = function () { return []; };
        return SinfonyUiComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MenuComponent = /** @class */ (function () {
        function MenuComponent(renderer, el) {
            this.renderer = renderer;
            this.el = el;
        }
        /**
         * @return {?}
         */
        MenuComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        MenuComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'sbc-menu',
                        template: "\r\n\r\n<!-- <div class=\"mat-menu-item\">\r\n    <ng-content></ng-content>\r\n</div> -->\r\n\r\n<div class=\"mat-menu-item\">\r\n        <ng-content></ng-content>\r\n    </div>\r\n\r\n    ",
                        styles: [".mat-menu-item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative}"]
                    }] }
        ];
        /** @nocollapse */
        MenuComponent.ctorParameters = function () {
            return [
                { type: i0.Renderer2 },
                { type: i0.ElementRef }
            ];
        };
        return MenuComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MenuTestDirective = /** @class */ (function () {
        function MenuTestDirective(viewContainer) {
            this.viewContainer = viewContainer;
        }
        MenuTestDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[sbc-menutest]'
                    },] }
        ];
        /** @nocollapse */
        MenuTestDirective.ctorParameters = function () {
            return [
                { type: i0.ViewContainerRef }
            ];
        };
        return MenuTestDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MenuModule = /** @class */ (function () {
        function MenuModule() {
        }
        MenuModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [
                            MenuComponent,
                            MenuTestDirective
                        ],
                        imports: [
                            router.RouterModule,
                            platformBrowser.BrowserModule
                        ],
                        exports: [
                            MenuComponent,
                            MenuTestDirective
                        ]
                    },] }
        ];
        return MenuModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FormatCodeComponent = /** @class */ (function () {
        function FormatCodeComponent(renderer, el) {
            this.renderer = renderer;
            this.el = el;
            this.color = 'rgb(42,100,250)';
            this.bgColor = 'rgba(0,0,30,0.9)';
            this.font = 'consolas, monospace';
        }
        /**
         * @return {?}
         */
        FormatCodeComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.renderer.setStyle(this.el.nativeElement.firstElementChild, 'color', this.color);
                this.renderer.setStyle(this.el.nativeElement.firstElementChild, 'backgroundColor', this.bgColor);
                this.renderer.setStyle(this.el.nativeElement.firstElementChild, 'font-family', this.font);
            };
        FormatCodeComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'sbc-format-code',
                        template: "\n      <div class=\"format-code\">\n        <ng-content></ng-content>\n      </div>\n    ",
                        styles: ["\n      .format-code {\n        padding: 20px;\n        margin: 10px auto;\n        box-shadow: 1px 3px 10px 1px rgba(0, 0, 0, 0.3);\n        border-radius: 7px;\n      }\n    "]
                    }] }
        ];
        /** @nocollapse */
        FormatCodeComponent.ctorParameters = function () {
            return [
                { type: i0.Renderer2 },
                { type: i0.ElementRef }
            ];
        };
        FormatCodeComponent.propDecorators = {
            color: [{ type: i0.Input }],
            bgColor: [{ type: i0.Input }],
            font: [{ type: i0.Input }]
        };
        return FormatCodeComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BreadcrumbComponent = /** @class */ (function () {
        function BreadcrumbComponent(renderer, el) {
            this.renderer = renderer;
            this.el = el;
            this.items = '';
            this.name = '';
            this.link = '';
        }
        /**
         * @return {?}
         */
        BreadcrumbComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.renderer.setStyle(this.el.nativeElement.firstElementChild, 'menu56', this.items);
                this.renderer.setStyle(this.el.nativeElement.firstElementChild, 'menu56', this.link);
                this.renderer.setStyle(this.el.nativeElement.firstElementChild, 'menu5', this.name);
            };
        BreadcrumbComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'sbc-breadcrumb',
                        template: "<div class=\"breadcrumbsContainer breadcrumbsContainerBasic\">\r\n\r\n    <div *ngFor=\"let item of items\">\r\n\r\n    <div class=\"breadcrumbsItemElement\">\r\n      <a routerLink=\"{{item.link}}\" class=\"breadcrumbsButtonElement breadcrumbIcon\"\r\n      \r\n      ><i class=\"{{item.icon}}\">&nbsp;</i>  {{item.name}} </a>\r\n      <div class=\"breadcrumbsSeparator\">{{item.separator}}</div>\r\n    </div>\r\n\r\n</div>\r\n\r\n  </div>\r\n\r\n",
                        styles: [".breadcrumbsContainer{color:#5e6c84;display:flex;flex-wrap:wrap}.breadcrumbsContainerBasic{flex-shrink:1;min-width:0}.breadcrumbsContainerBasic .breadcrumbsContainer :focus{outline:-webkit-focus-ring-color auto 5px}.breadcrumbsItemElement{display:flex;flex-direction:row;height:1.71429em;line-height:1.71429em;box-sizing:border-box;max-width:100%;padding:0}.breadcrumbsItemElement:focus{outline:-webkit-focus-ring-color auto 5px}a.breadcrumbsButtonElement{align-items:baseline;box-sizing:border-box;display:inline-flex;font-size:inherit;font-style:normal;height:auto;line-height:inherit;max-width:100%;text-align:center;vertical-align:baseline;white-space:nowrap;width:auto;color:#6b778c!important;background:0 0;border-radius:3px;border-width:0;margin:0;padding:0;text-decoration:none;outline:0!important}a:focus{outline:#4c9aff solid 2px;outline-offset:2px;transition:background .1s ease-out,box-shadow .15s cubic-bezier(.47,.03,.49,1.38)}.breadcrumbsSeparator{color:#7a869a;flex-shrink:0;text-align:center;width:8px;padding:0 8px}.breadcrumbIcon{align-self:center;display:flex;flex-shrink:0;line-height:0;font-size:0;margin:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:opacity .3s;opacity:1}"]
                    }] }
        ];
        /** @nocollapse */
        BreadcrumbComponent.ctorParameters = function () {
            return [
                { type: i0.Renderer2 },
                { type: i0.ElementRef }
            ];
        };
        BreadcrumbComponent.propDecorators = {
            items: [{ type: i0.Input }],
            name: [{ type: i0.Input }],
            link: [{ type: i0.Input }]
        };
        return BreadcrumbComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MainNavHeaderLogoIconComponent = /** @class */ (function () {
        function MainNavHeaderLogoIconComponent() {
        }
        /**
         * @return {?}
         */
        MainNavHeaderLogoIconComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        MainNavHeaderLogoIconComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'sbc-main-nav-header-logo-icon',
                        template: "\n    <div class=\"css-1\">\n      <div class=\"css-2\">\n        <div class=\"css-3\">\n          <div class=\"css-4 button\">\n          <ng-content></ng-content>\n          </div>\n        </div>\n      </div>\n    </div>\n    ",
                        styles: ["\n    .css-1 {\n      padding-bottom: 8px;\n    }\n    .css-2 {\n      width: 100%;\n      -webkit-box-align: center;\n      align-items: center;\n      display: flex;\n      flex-direction: column;\n      -webkit-box-pack: justify;\n      justify-content: space-between;\n    }\n    .css-3 {\n      display: inline-block;\n    }\n    .css-4 {\n      -webkit-box-align: center;\n      align-items: center;\n      color: rgb(222, 235, 255);\n      cursor: pointer;\n      display: flex;\n      font-size: inherit;\n      -webkit-box-pack: center;\n      justify-content: center;\n      line-height: 1;\n      position: relative;\n      height: 45px;\n      width: 45px;\n      background-color: rgb(7, 71, 166);\n      border-width: 0px;\n      border-style: initial;\n      border-color: initial;\n      border-image: initial;\n      border-radius: 50%;\n      outline: none;\n      padding: 0px;\n    }\n    .css-4:focus {\n      box-shadow: rgb(76, 154, 255) 0px 0px 0px 2px;\n    }\n    .button:focus {\n      background-color: #05367F;\n    }\n    .button:hover {\n      background-color: #1C63CE; /* Green */\n      color: white;\n    }\n    .button:active {\n      background-color: #1A5ABC;\n  }\n    "]
                    }] }
        ];
        /** @nocollapse */
        MainNavHeaderLogoIconComponent.ctorParameters = function () { return []; };
        return MainNavHeaderLogoIconComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MainNavFooterIconComponent = /** @class */ (function () {
        function MainNavFooterIconComponent() {
        }
        /**
         * @return {?}
         */
        MainNavFooterIconComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        MainNavFooterIconComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'sbc-main-nav-footer-icon',
                        template: "\n    <div class=\"css-1\">\n    <div class=\"global-nav-container-top-icon button\">\n      <ng-content></ng-content>\n    </div>\n    </div>\n    ",
                        styles: ["\n    .css-1 {\n      margin-top: 8px;\n    }\n    .global-nav-container-top-icon{\n      -webkit-box-align: center;\n      align-items: center;\n      color: rgb(255, 255, 255);\n      cursor: pointer;\n      display: flex;\n      font-size: inherit;\n      -webkit-box-pack: center;\n      justify-content: center;\n      line-height: 1;\n      position: relative;\n      height: 32px;\n      width: 32px;\n      background-color: rgb(7, 71, 166);\n      border-width: 0px;\n      border-style: initial;\n      border-color: initial;\n      border-image: initial;\n      border-radius: 50%;\n      outline: none;\n      padding: 0px;\n  }\n\n  .global-nav-container-top-icon:focus {\n      box-shadow: rgb(76, 154, 255) 0px 0px 0px 2px;\n  }\n  .button:hover {\n    background-color: #1C63CE; /* Green */\n    color: white;\n  }\n    "]
                    }] }
        ];
        /** @nocollapse */
        MainNavFooterIconComponent.ctorParameters = function () { return []; };
        return MainNavFooterIconComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MainNavFooterComponent = /** @class */ (function () {
        function MainNavFooterComponent() {
        }
        /**
         * @return {?}
         */
        MainNavFooterComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        MainNavFooterComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'sbc-main-nav-footer',
                        template: "\n    <div class=\"global-nav-container-bot\" >\n        <ng-content></ng-content>\n    </div>\n    ",
                        styles: ["\n    .global-nav-container-bot {\n      -webkit-box-align: center;\n      align-items: center;\n      display: flex;\n      flex-direction: column;\n      -webkit-box-pack: justify;\n      justify-content: space-between;\n      width: 100%;\n      padding-top: 8px;\n    }\n    "]
                    }] }
        ];
        /** @nocollapse */
        MainNavFooterComponent.ctorParameters = function () { return []; };
        return MainNavFooterComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MainNavContentComponent = /** @class */ (function () {
        function MainNavContentComponent() {
        }
        /**
         * @return {?}
         */
        MainNavContentComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        MainNavContentComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'sbc-main-nav-content',
                        template: "\n    <div class=\"global-nav-container-top-icon button\">\n      <ng-content></ng-content>\n    </div>\n    ",
                        styles: ["\n    .global-nav-container-top-icon{\n      -webkit-box-align: center;\n      align-items: center;\n      color: rgb(255, 255, 255);\n      cursor: pointer;\n      display: flex;\n      font-size: inherit;\n      -webkit-box-pack: center;\n      justify-content: center;\n      line-height: 1;\n      position: relative;\n      height: 40px;\n      width: 40px;\n      background-color: rgb(7, 71, 166);\n      border-width: 0px;\n      border-style: initial;\n      border-color: initial;\n      border-image: initial;\n      border-radius: 50%;\n      outline: none;\n      padding: 0px;\n  }\n\n  .global-nav-container-top-icon:focus {\n      box-shadow: rgb(76, 154, 255) 0px 0px 0px 2px;\n  }\n  .button:hover {\n    background-color: #1C63CE; /* Green */\n    color: white;\n  }\n    "]
                    }] }
        ];
        /** @nocollapse */
        MainNavContentComponent.ctorParameters = function () { return []; };
        return MainNavContentComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MainNavHeaderComponent = /** @class */ (function () {
        function MainNavHeaderComponent() {
        }
        /**
         * @return {?}
         */
        MainNavHeaderComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        MainNavHeaderComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'sbc-main-nav-header',
                        template: "\n    <div class=\"global-nav-container-top\" >\n        <ng-content></ng-content>\n    </div>\n    ",
                        styles: ["\n    .global-nav-container-top {\n      -webkit-box-align: center;\n      align-items: center;\n      display: flex;\n      flex-direction: column;\n      -webkit-box-pack: justify;\n      justify-content: space-between;\n      width: 100%;\n      padding-bottom: 16px;\n    }\n    "]
                    }] }
        ];
        /** @nocollapse */
        MainNavHeaderComponent.ctorParameters = function () { return []; };
        return MainNavHeaderComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MainNavContainerComponent = /** @class */ (function () {
        function MainNavContainerComponent(renderer, el) {
            this.renderer = renderer;
            this.el = el;
        }
        /**
         * @return {?}
         */
        MainNavContainerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        MainNavContainerComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'sbc-main-nav-container',
                        template: "\n      <div class=\"global-nav-container\">\n        <ng-content></ng-content>\n      </div>\n    ",
                        styles: ["\n      .global-nav-container {\n        -webkit-box-align: center;\n        align-items: center;\n        box-sizing: border-box;\n        display: flex;\n        flex-direction: column;\n        flex-shrink: 0;\n        height: 100vh;\n        -webkit-box-pack: justify;\n        justify-content: space-between;\n        padding-bottom: 24px;\n        padding-top: 24px;\n        width: 64px;\n        background-color: rgb(7, 71, 166);\n        color: rgb(255, 255, 255);\n        fill: rgb(7, 71, 166);\n        transition: background-color 0.3s cubic-bezier(0.2, 0, 0, 1) 0s, color 0.3s cubic-bezier(0.2, 0, 0, 1) 0s;\n      }\n    "]
                    }] }
        ];
        /** @nocollapse */
        MainNavContainerComponent.ctorParameters = function () {
            return [
                { type: i0.Renderer2 },
                { type: i0.ElementRef }
            ];
        };
        return MainNavContainerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GlobalNavigationModule = /** @class */ (function () {
        function GlobalNavigationModule() {
        }
        GlobalNavigationModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [
                            MainNavContainerComponent,
                            MainNavHeaderComponent,
                            MainNavHeaderLogoIconComponent,
                            MainNavContentComponent,
                            MainNavFooterComponent,
                            MainNavFooterIconComponent
                        ],
                        imports: [
                            router.RouterModule,
                            platformBrowser.BrowserModule
                        ],
                        exports: [
                            MainNavContainerComponent,
                            MainNavHeaderComponent,
                            MainNavHeaderLogoIconComponent,
                            MainNavContentComponent,
                            MainNavFooterComponent,
                            MainNavFooterIconComponent
                        ]
                    },] }
        ];
        return GlobalNavigationModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SinfonyUiModule = /** @class */ (function () {
        function SinfonyUiModule() {
        }
        SinfonyUiModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [
                            SinfonyUiComponent,
                            FormatCodeComponent,
                            BreadcrumbComponent
                        ],
                        imports: [
                            router.RouterModule,
                            platformBrowser.BrowserModule,
                            GlobalNavigationModule,
                            MenuModule
                        ],
                        exports: [
                            SinfonyUiComponent,
                            GlobalNavigationModule,
                            MenuModule,
                            FormatCodeComponent,
                            BreadcrumbComponent
                        ]
                    },] }
        ];
        return SinfonyUiModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.SinfonyUiService = SinfonyUiService;
    exports.SinfonyUiComponent = SinfonyUiComponent;
    exports.SinfonyUiModule = SinfonyUiModule;
    exports.ɵb = BreadcrumbComponent;
    exports.ɵa = FormatCodeComponent;
    exports.ɵl = MenuTestDirective;
    exports.ɵk = MenuComponent;
    exports.ɵj = MenuModule;
    exports.ɵc = GlobalNavigationModule;
    exports.ɵd = MainNavContainerComponent;
    exports.ɵg = MainNavContentComponent;
    exports.ɵi = MainNavFooterIconComponent;
    exports.ɵh = MainNavFooterComponent;
    exports.ɵf = MainNavHeaderLogoIconComponent;
    exports.ɵe = MainNavHeaderComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=sinfony-ui.umd.js.map