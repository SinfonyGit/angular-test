/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Renderer2, ElementRef } from '@angular/core';
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
        { type: Component, args: [{
                    selector: 'sbc-breadcrumb',
                    template: "<div class=\"breadcrumbsContainer breadcrumbsContainerBasic\">\r\n\r\n    <div *ngFor=\"let item of items\">\r\n\r\n    <div class=\"breadcrumbsItemElement\">\r\n      <a routerLink=\"{{item.link}}\" class=\"breadcrumbsButtonElement breadcrumbIcon\"\r\n      \r\n      ><i class=\"{{item.icon}}\">&nbsp;</i>  {{item.name}} </a>\r\n      <div class=\"breadcrumbsSeparator\">{{item.separator}}</div>\r\n    </div>\r\n\r\n</div>\r\n\r\n  </div>\r\n\r\n",
                    styles: [".breadcrumbsContainer{color:#5e6c84;display:flex;flex-wrap:wrap}.breadcrumbsContainerBasic{flex-shrink:1;min-width:0}.breadcrumbsContainerBasic .breadcrumbsContainer :focus{outline:-webkit-focus-ring-color auto 5px}.breadcrumbsItemElement{display:flex;flex-direction:row;height:1.71429em;line-height:1.71429em;box-sizing:border-box;max-width:100%;padding:0}.breadcrumbsItemElement:focus{outline:-webkit-focus-ring-color auto 5px}a.breadcrumbsButtonElement{align-items:baseline;box-sizing:border-box;display:inline-flex;font-size:inherit;font-style:normal;height:auto;line-height:inherit;max-width:100%;text-align:center;vertical-align:baseline;white-space:nowrap;width:auto;color:#6b778c!important;background:0 0;border-radius:3px;border-width:0;margin:0;padding:0;text-decoration:none;outline:0!important}a:focus{outline:#4c9aff solid 2px;outline-offset:2px;transition:background .1s ease-out,box-shadow .15s cubic-bezier(.47,.03,.49,1.38)}.breadcrumbsSeparator{color:#7a869a;flex-shrink:0;text-align:center;width:8px;padding:0 8px}.breadcrumbIcon{align-self:center;display:flex;flex-shrink:0;line-height:0;font-size:0;margin:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:opacity .3s;opacity:1}"]
                }] }
    ];
    /** @nocollapse */
    BreadcrumbComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    BreadcrumbComponent.propDecorators = {
        items: [{ type: Input }],
        name: [{ type: Input }],
        link: [{ type: Input }]
    };
    return BreadcrumbComponent;
}());
export { BreadcrumbComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaW5mb255LXVpLyIsInNvdXJjZXMiOlsibGliL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFaEY7SUFhRSw2QkFBb0IsUUFBbUIsRUFBVSxFQUFjO1FBQTNDLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBTnRELFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1YsU0FBSSxHQUFHLEVBQUUsQ0FBQztJQUlnRCxDQUFDOzs7O0lBQ3BFLHNDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyRixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RGLENBQUM7O2dCQWxCRixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsNmNBQTBDOztpQkFFM0M7Ozs7Z0JBTmdDLFNBQVM7Z0JBQUUsVUFBVTs7O3dCQVNyRCxLQUFLO3VCQUNMLEtBQUs7dUJBQ0wsS0FBSzs7SUFXUiwwQkFBQztDQUFBLEFBcEJELElBb0JDO1NBZlksbUJBQW1COzs7SUFFOUIsb0NBQW9COztJQUNwQixtQ0FBbUI7O0lBQ25CLG1DQUFtQjs7Ozs7SUFJUCx1Q0FBMkI7Ozs7O0lBQUUsaUNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdzYmMtYnJlYWRjcnVtYicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vYnJlYWRjcnVtYi5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9icmVhZGNydW1iLmNvbXBvbmVudC5zY3NzJ11cclxuICB9KVxyXG5leHBvcnQgY2xhc3MgQnJlYWRjcnVtYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIGl0ZW1zID0gJyc7XHJcbiAgQElucHV0KCkgbmFtZSA9ICcnO1xyXG4gIEBJbnB1dCgpIGxpbmsgPSAnJztcclxuXHJcblxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHsgfVxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQsICdtZW51NTYnLCB0aGlzLml0ZW1zKTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLCAnbWVudTU2JywgdGhpcy5saW5rKTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLCAnbWVudTUnLCB0aGlzLm5hbWUpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19