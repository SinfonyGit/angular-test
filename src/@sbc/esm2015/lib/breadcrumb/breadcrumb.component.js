/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Renderer2, ElementRef } from '@angular/core';
export class BreadcrumbComponent {
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
if (false) {
    /** @type {?} */
    BreadcrumbComponent.prototype.items;
    /** @type {?} */
    BreadcrumbComponent.prototype.name;
    /** @type {?} */
    BreadcrumbComponent.prototype.link;
    /**
     * @type {?}
     * @private
     */
    BreadcrumbComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    BreadcrumbComponent.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaW5mb255LXVpLyIsInNvdXJjZXMiOlsibGliL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPaEYsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7SUFROUIsWUFBb0IsUUFBbUIsRUFBVSxFQUFjO1FBQTNDLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBTnRELFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1YsU0FBSSxHQUFHLEVBQUUsQ0FBQztJQUlnRCxDQUFDOzs7O0lBQ3BFLFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RGLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0RixDQUFDOzs7WUFsQkYsU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLDZjQUEwQzs7YUFFM0M7Ozs7WUFOZ0MsU0FBUztZQUFFLFVBQVU7OztvQkFTckQsS0FBSzttQkFDTCxLQUFLO21CQUNMLEtBQUs7Ozs7SUFGTixvQ0FBb0I7O0lBQ3BCLG1DQUFtQjs7SUFDbkIsbUNBQW1COzs7OztJQUlQLHVDQUEyQjs7Ozs7SUFBRSxpQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3NiYy1icmVhZGNydW1iJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9icmVhZGNydW1iLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2JyZWFkY3J1bWIuY29tcG9uZW50LnNjc3MnXVxyXG4gIH0pXHJcbmV4cG9ydCBjbGFzcyBCcmVhZGNydW1iQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgaXRlbXMgPSAnJztcclxuICBASW5wdXQoKSBuYW1lID0gJyc7XHJcbiAgQElucHV0KCkgbGluayA9ICcnO1xyXG5cclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBlbDogRWxlbWVudFJlZikgeyB9XHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZCwgJ21lbnU1NicsIHRoaXMuaXRlbXMpO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQsICdtZW51NTYnLCB0aGlzLmxpbmspO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQsICdtZW51NScsIHRoaXMubmFtZSk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=