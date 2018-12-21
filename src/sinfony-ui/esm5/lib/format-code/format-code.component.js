/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Renderer2, ElementRef } from '@angular/core';
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
        { type: Component, args: [{
                    selector: 'sbc-format-code',
                    template: "\n      <div class=\"format-code\">\n        <ng-content></ng-content>\n      </div>\n    ",
                    styles: ["\n      .format-code {\n        padding: 20px;\n        margin: 10px auto;\n        box-shadow: 1px 3px 10px 1px rgba(0, 0, 0, 0.3);\n        border-radius: 7px;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    FormatCodeComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    FormatCodeComponent.propDecorators = {
        color: [{ type: Input }],
        bgColor: [{ type: Input }],
        font: [{ type: Input }]
    };
    return FormatCodeComponent;
}());
export { FormatCodeComponent };
if (false) {
    /** @type {?} */
    FormatCodeComponent.prototype.color;
    /** @type {?} */
    FormatCodeComponent.prototype.bgColor;
    /** @type {?} */
    FormatCodeComponent.prototype.font;
    /**
     * @type {?}
     * @private
     */
    FormatCodeComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    FormatCodeComponent.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LWNvZGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2luZm9ueS11aS8iLCJzb3VyY2VzIjpbImxpYi9mb3JtYXQtY29kZS9mb3JtYXQtY29kZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFaEY7SUFxQkUsNkJBQW9CLFFBQW1CLEVBQVUsRUFBYztRQUEzQyxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUh0RCxVQUFLLEdBQUcsaUJBQWlCLENBQUM7UUFDMUIsWUFBTyxHQUFHLGtCQUFrQixDQUFDO1FBQzdCLFNBQUksR0FBRyxxQkFBcUIsQ0FBQztJQUM2QixDQUFDOzs7O0lBQ3BFLHNDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGlCQUFpQixFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGlCQUFpQixFQUFFLGFBQWEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUYsQ0FBQzs7Z0JBMUJGLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixRQUFRLEVBQUUsNEZBSVQ7NkJBQ1Esa0xBT1I7aUJBQ0Y7Ozs7Z0JBakJnQyxTQUFTO2dCQUFFLFVBQVU7Ozt3QkFvQnJELEtBQUs7MEJBQ0wsS0FBSzt1QkFDTCxLQUFLOztJQVFSLDBCQUFDO0NBQUEsQUE1QkQsSUE0QkM7U0FaWSxtQkFBbUI7OztJQUU5QixvQ0FBbUM7O0lBQ25DLHNDQUFzQzs7SUFDdEMsbUNBQXNDOzs7OztJQUMxQix1Q0FBMkI7Ozs7O0lBQUUsaUNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdzYmMtZm9ybWF0LWNvZGUnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgPGRpdiBjbGFzcz1cImZvcm1hdC1jb2RlXCI+XHJcbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFtgXHJcbiAgICAgIC5mb3JtYXQtY29kZSB7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgICAgICBib3gtc2hhZG93OiAxcHggM3B4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICAgIH1cclxuICAgIGBdXHJcbiAgfSlcclxuZXhwb3J0IGNsYXNzIEZvcm1hdENvZGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBjb2xvciA9ICdyZ2IoNDIsMTAwLDI1MCknO1xyXG4gIEBJbnB1dCgpIGJnQ29sb3IgPSAncmdiYSgwLDAsMzAsMC45KSc7XHJcbiAgQElucHV0KCkgZm9udCA9ICdjb25zb2xhcywgbW9ub3NwYWNlJztcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHsgfVxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQsICdjb2xvcicsIHRoaXMuY29sb3IpO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQsICdiYWNrZ3JvdW5kQ29sb3InLCB0aGlzLmJnQ29sb3IpO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQsICdmb250LWZhbWlseScsIHRoaXMuZm9udCk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=