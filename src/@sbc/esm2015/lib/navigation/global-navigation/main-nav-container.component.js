/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Renderer2, ElementRef } from '@angular/core';
export class MainNavContainerComponent {
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    MainNavContainerComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    MainNavContainerComponent.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1uYXYtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NpbmZvbnktdWkvIiwic291cmNlcyI6WyJsaWIvbmF2aWdhdGlvbi9nbG9iYWwtbmF2aWdhdGlvbi9tYWluLW5hdi1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFpQixTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBOEJoRixNQUFNLE9BQU8seUJBQXlCOzs7OztJQUdwQyxZQUFvQixRQUFtQixFQUFVLEVBQWM7UUFBM0MsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLE9BQUUsR0FBRixFQUFFLENBQVk7SUFBSSxDQUFDOzs7O0lBQ3BFLFFBQVE7SUFDUixDQUFDOzs7WUFqQ0YsU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFFBQVEsRUFBRTs7OztLQUlUO3lCQUNROzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBbUJSO2FBQ0Y7Ozs7WUE3QmdDLFNBQVM7WUFBRSxVQUFVOzs7Ozs7O0lBaUMxQyw2Q0FBMkI7Ozs7O0lBQUUsdUNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdzYmMtbWFpbi1uYXYtY29udGFpbmVyJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJnbG9iYWwtbmF2LWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgICAgPC9kaXY+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVzOiBbYFxyXG4gICAgICAuZ2xvYmFsLW5hdi1jb250YWluZXIge1xyXG4gICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBmbGV4LXNocmluazogMDtcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyNHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyNHB4O1xyXG4gICAgICAgIHdpZHRoOiA2NHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3LCA3MSwgMTY2KTtcclxuICAgICAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICAgIGZpbGw6IHJnYig3LCA3MSwgMTY2KTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgY3ViaWMtYmV6aWVyKDAuMiwgMCwgMCwgMSkgMHMsIGNvbG9yIDAuM3MgY3ViaWMtYmV6aWVyKDAuMiwgMCwgMCwgMSkgMHM7XHJcbiAgICAgIH1cclxuICAgIGBdXHJcbiAgfSlcclxuZXhwb3J0IGNsYXNzIE1haW5OYXZDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7IH1cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==