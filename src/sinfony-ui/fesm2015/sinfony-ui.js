import { Injectable, Component, Input, Renderer2, ElementRef, NgModule, Directive, ViewContainerRef, defineInjectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SinfonyUiService {
    constructor() { }
}
SinfonyUiService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
SinfonyUiService.ctorParameters = () => [];
/** @nocollapse */ SinfonyUiService.ngInjectableDef = defineInjectable({ factory: function SinfonyUiService_Factory() { return new SinfonyUiService(); }, token: SinfonyUiService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SinfonyUiComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
SinfonyUiComponent.decorators = [
    { type: Component, args: [{
                selector: 'sbc-sinfony-ui',
                template: `
    <p>
      sinfony-ui works!
    </p>
  `
            }] }
];
/** @nocollapse */
SinfonyUiComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MenuComponent {
    /**
     * @param {?} renderer
     * @param {?} el
     */
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
MenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'sbc-menu',
                template: "\r\n\r\n<!-- <div class=\"mat-menu-item\">\r\n    <ng-content></ng-content>\r\n</div> -->\r\n\r\n<div class=\"mat-menu-item\">\r\n        <ng-content></ng-content>\r\n    </div>\r\n\r\n    ",
                styles: [".mat-menu-item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative}"]
            }] }
];
/** @nocollapse */
MenuComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MenuTestDirective {
    /**
     * @param {?} viewContainer
     */
    constructor(viewContainer) {
        this.viewContainer = viewContainer;
    }
}
MenuTestDirective.decorators = [
    { type: Directive, args: [{
                selector: '[sbc-menutest]'
            },] }
];
/** @nocollapse */
MenuTestDirective.ctorParameters = () => [
    { type: ViewContainerRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MenuModule {
}
MenuModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    MenuComponent,
                    MenuTestDirective
                ],
                imports: [
                    RouterModule,
                    BrowserModule
                ],
                exports: [
                    MenuComponent,
                    MenuTestDirective
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormatCodeComponent {
    /**
     * @param {?} renderer
     * @param {?} el
     */
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.color = 'rgb(42,100,250)';
        this.bgColor = 'rgba(0,0,30,0.9)';
        this.font = 'consolas, monospace';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.renderer.setStyle(this.el.nativeElement.firstElementChild, 'color', this.color);
        this.renderer.setStyle(this.el.nativeElement.firstElementChild, 'backgroundColor', this.bgColor);
        this.renderer.setStyle(this.el.nativeElement.firstElementChild, 'font-family', this.font);
    }
}
FormatCodeComponent.decorators = [
    { type: Component, args: [{
                selector: 'sbc-format-code',
                template: `
      <div class="format-code">
        <ng-content></ng-content>
      </div>
    `,
                styles: [`
      .format-code {
        padding: 20px;
        margin: 10px auto;
        box-shadow: 1px 3px 10px 1px rgba(0, 0, 0, 0.3);
        border-radius: 7px;
      }
    `]
            }] }
];
/** @nocollapse */
FormatCodeComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef }
];
FormatCodeComponent.propDecorators = {
    color: [{ type: Input }],
    bgColor: [{ type: Input }],
    font: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BreadcrumbComponent {
    /**
     * @param {?} renderer
     * @param {?} el
     */
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        this.items = '';
        this.name = '';
        this.link = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.renderer.setStyle(this.el.nativeElement.firstElementChild, 'menu56', this.items);
        this.renderer.setStyle(this.el.nativeElement.firstElementChild, 'menu56', this.link);
        this.renderer.setStyle(this.el.nativeElement.firstElementChild, 'menu5', this.name);
    }
}
BreadcrumbComponent.decorators = [
    { type: Component, args: [{
                selector: 'sbc-breadcrumb',
                template: "<div class=\"breadcrumbsContainer breadcrumbsContainerBasic\">\r\n\r\n    <div *ngFor=\"let item of items\">\r\n\r\n    <div class=\"breadcrumbsItemElement\">\r\n      <a routerLink=\"{{item.link}}\" class=\"breadcrumbsButtonElement breadcrumbIcon\"\r\n      \r\n      ><i class=\"{{item.icon}}\">&nbsp;</i>  {{item.name}} </a>\r\n      <div class=\"breadcrumbsSeparator\">{{item.separator}}</div>\r\n    </div>\r\n\r\n</div>\r\n\r\n  </div>\r\n\r\n",
                styles: [".breadcrumbsContainer{color:#5e6c84;display:flex;flex-wrap:wrap}.breadcrumbsContainerBasic{flex-shrink:1;min-width:0}.breadcrumbsContainerBasic .breadcrumbsContainer :focus{outline:-webkit-focus-ring-color auto 5px}.breadcrumbsItemElement{display:flex;flex-direction:row;height:1.71429em;line-height:1.71429em;box-sizing:border-box;max-width:100%;padding:0}.breadcrumbsItemElement:focus{outline:-webkit-focus-ring-color auto 5px}a.breadcrumbsButtonElement{align-items:baseline;box-sizing:border-box;display:inline-flex;font-size:inherit;font-style:normal;height:auto;line-height:inherit;max-width:100%;text-align:center;vertical-align:baseline;white-space:nowrap;width:auto;color:#6b778c!important;background:0 0;border-radius:3px;border-width:0;margin:0;padding:0;text-decoration:none;outline:0!important}a:focus{outline:#4c9aff solid 2px;outline-offset:2px;transition:background .1s ease-out,box-shadow .15s cubic-bezier(.47,.03,.49,1.38)}.breadcrumbsSeparator{color:#7a869a;flex-shrink:0;text-align:center;width:8px;padding:0 8px}.breadcrumbIcon{align-self:center;display:flex;flex-shrink:0;line-height:0;font-size:0;margin:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:opacity .3s;opacity:1}"]
            }] }
];
/** @nocollapse */
BreadcrumbComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef }
];
BreadcrumbComponent.propDecorators = {
    items: [{ type: Input }],
    name: [{ type: Input }],
    link: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MainNavHeaderLogoIconComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
MainNavHeaderLogoIconComponent.decorators = [
    { type: Component, args: [{
                selector: 'sbc-main-nav-header-logo-icon',
                template: `
    <div class="css-1">
      <div class="css-2">
        <div class="css-3">
          <div class="css-4 button">
          <ng-content></ng-content>
          </div>
        </div>
      </div>
    </div>
    `,
                styles: [`
    .css-1 {
      padding-bottom: 8px;
    }
    .css-2 {
      width: 100%;
      -webkit-box-align: center;
      align-items: center;
      display: flex;
      flex-direction: column;
      -webkit-box-pack: justify;
      justify-content: space-between;
    }
    .css-3 {
      display: inline-block;
    }
    .css-4 {
      -webkit-box-align: center;
      align-items: center;
      color: rgb(222, 235, 255);
      cursor: pointer;
      display: flex;
      font-size: inherit;
      -webkit-box-pack: center;
      justify-content: center;
      line-height: 1;
      position: relative;
      height: 45px;
      width: 45px;
      background-color: rgb(7, 71, 166);
      border-width: 0px;
      border-style: initial;
      border-color: initial;
      border-image: initial;
      border-radius: 50%;
      outline: none;
      padding: 0px;
    }
    .css-4:focus {
      box-shadow: rgb(76, 154, 255) 0px 0px 0px 2px;
    }
    .button:focus {
      background-color: #05367F;
    }
    .button:hover {
      background-color: #1C63CE; /* Green */
      color: white;
    }
    .button:active {
      background-color: #1A5ABC;
  }
    `]
            }] }
];
/** @nocollapse */
MainNavHeaderLogoIconComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MainNavFooterIconComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
MainNavFooterIconComponent.decorators = [
    { type: Component, args: [{
                selector: 'sbc-main-nav-footer-icon',
                template: `
    <div class="css-1">
    <div class="global-nav-container-top-icon button">
      <ng-content></ng-content>
    </div>
    </div>
    `,
                styles: [`
    .css-1 {
      margin-top: 8px;
    }
    .global-nav-container-top-icon{
      -webkit-box-align: center;
      align-items: center;
      color: rgb(255, 255, 255);
      cursor: pointer;
      display: flex;
      font-size: inherit;
      -webkit-box-pack: center;
      justify-content: center;
      line-height: 1;
      position: relative;
      height: 32px;
      width: 32px;
      background-color: rgb(7, 71, 166);
      border-width: 0px;
      border-style: initial;
      border-color: initial;
      border-image: initial;
      border-radius: 50%;
      outline: none;
      padding: 0px;
  }

  .global-nav-container-top-icon:focus {
      box-shadow: rgb(76, 154, 255) 0px 0px 0px 2px;
  }
  .button:hover {
    background-color: #1C63CE; /* Green */
    color: white;
  }
    `]
            }] }
];
/** @nocollapse */
MainNavFooterIconComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MainNavFooterComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
MainNavFooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'sbc-main-nav-footer',
                template: `
    <div class="global-nav-container-bot" >
        <ng-content></ng-content>
    </div>
    `,
                styles: [`
    .global-nav-container-bot {
      -webkit-box-align: center;
      align-items: center;
      display: flex;
      flex-direction: column;
      -webkit-box-pack: justify;
      justify-content: space-between;
      width: 100%;
      padding-top: 8px;
    }
    `]
            }] }
];
/** @nocollapse */
MainNavFooterComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MainNavContentComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
MainNavContentComponent.decorators = [
    { type: Component, args: [{
                selector: 'sbc-main-nav-content',
                template: `
    <div class="global-nav-container-top-icon button">
      <ng-content></ng-content>
    </div>
    `,
                styles: [`
    .global-nav-container-top-icon{
      -webkit-box-align: center;
      align-items: center;
      color: rgb(255, 255, 255);
      cursor: pointer;
      display: flex;
      font-size: inherit;
      -webkit-box-pack: center;
      justify-content: center;
      line-height: 1;
      position: relative;
      height: 40px;
      width: 40px;
      background-color: rgb(7, 71, 166);
      border-width: 0px;
      border-style: initial;
      border-color: initial;
      border-image: initial;
      border-radius: 50%;
      outline: none;
      padding: 0px;
  }

  .global-nav-container-top-icon:focus {
      box-shadow: rgb(76, 154, 255) 0px 0px 0px 2px;
  }
  .button:hover {
    background-color: #1C63CE; /* Green */
    color: white;
  }
    `]
            }] }
];
/** @nocollapse */
MainNavContentComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MainNavHeaderComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
MainNavHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'sbc-main-nav-header',
                template: `
    <div class="global-nav-container-top" >
        <ng-content></ng-content>
    </div>
    `,
                styles: [`
    .global-nav-container-top {
      -webkit-box-align: center;
      align-items: center;
      display: flex;
      flex-direction: column;
      -webkit-box-pack: justify;
      justify-content: space-between;
      width: 100%;
      padding-bottom: 16px;
    }
    `]
            }] }
];
/** @nocollapse */
MainNavHeaderComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MainNavContainerComponent {
    /**
     * @param {?} renderer
     * @param {?} el
     */
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
MainNavContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'sbc-main-nav-container',
                template: `
      <div class="global-nav-container">
        <ng-content></ng-content>
      </div>
    `,
                styles: [`
      .global-nav-container {
        -webkit-box-align: center;
        align-items: center;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        flex-shrink: 0;
        height: 100vh;
        -webkit-box-pack: justify;
        justify-content: space-between;
        padding-bottom: 24px;
        padding-top: 24px;
        width: 64px;
        background-color: rgb(7, 71, 166);
        color: rgb(255, 255, 255);
        fill: rgb(7, 71, 166);
        transition: background-color 0.3s cubic-bezier(0.2, 0, 0, 1) 0s, color 0.3s cubic-bezier(0.2, 0, 0, 1) 0s;
      }
    `]
            }] }
];
/** @nocollapse */
MainNavContainerComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GlobalNavigationModule {
}
GlobalNavigationModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    MainNavContainerComponent,
                    MainNavHeaderComponent,
                    MainNavHeaderLogoIconComponent,
                    MainNavContentComponent,
                    MainNavFooterComponent,
                    MainNavFooterIconComponent
                ],
                imports: [
                    RouterModule,
                    BrowserModule
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SinfonyUiModule {
}
SinfonyUiModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SinfonyUiComponent,
                    FormatCodeComponent,
                    BreadcrumbComponent
                ],
                imports: [
                    RouterModule,
                    BrowserModule,
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { SinfonyUiService, SinfonyUiComponent, SinfonyUiModule, BreadcrumbComponent as ɵb, FormatCodeComponent as ɵa, MenuTestDirective as ɵl, MenuComponent as ɵk, MenuModule as ɵj, GlobalNavigationModule as ɵc, MainNavContainerComponent as ɵd, MainNavContentComponent as ɵg, MainNavFooterIconComponent as ɵi, MainNavFooterComponent as ɵh, MainNavHeaderLogoIconComponent as ɵf, MainNavHeaderComponent as ɵe };

//# sourceMappingURL=sinfony-ui.js.map