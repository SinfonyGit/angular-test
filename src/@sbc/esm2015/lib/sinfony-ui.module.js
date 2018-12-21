/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { MenuModule } from './menu/menu.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SinfonyUiComponent } from './sinfony-ui.component';
import { FormatCodeComponent } from './format-code/format-code.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { GlobalNavigationModule } from './navigation/global-navigation/global-navigation.module';
export class SinfonyUiModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luZm9ueS11aS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaW5mb255LXVpLyIsInNvdXJjZXMiOlsibGliL3NpbmZvbnktdWkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFPaEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBc0JqRyxNQUFNLE9BQU8sZUFBZTs7O1lBcEIzQixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLGtCQUFrQjtvQkFDbEIsbUJBQW1CO29CQUNuQixtQkFBbUI7aUJBQ3BCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGFBQWE7b0JBQ2Isc0JBQXNCO29CQUN0QixVQUFVO2lCQUNYO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxrQkFBa0I7b0JBQ2xCLHNCQUFzQjtvQkFDdEIsVUFBVTtvQkFDVixtQkFBbUI7b0JBQ25CLG1CQUFtQjtpQkFDcEI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1lbnVNb2R1bGUgfSBmcm9tICcuL21lbnUvbWVudS5tb2R1bGUnO1xuaW1wb3J0IHsgTWFpbk5hdkhlYWRlckxvZ29JY29uQ29tcG9uZW50IH0gZnJvbSAnLi9uYXZpZ2F0aW9uL2dsb2JhbC1uYXZpZ2F0aW9uL21haW4tbmF2LWhlYWRlci1sb2dvLWljb24uY29tcG9uZW50JztcbmltcG9ydCB7IE1haW5OYXZGb290ZXJJY29uQ29tcG9uZW50IH0gZnJvbSAnLi9uYXZpZ2F0aW9uL2dsb2JhbC1uYXZpZ2F0aW9uL21haW4tbmF2LWZvb3Rlci1pY29uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYWluTmF2Rm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9uYXZpZ2F0aW9uL2dsb2JhbC1uYXZpZ2F0aW9uL21haW4tbmF2LWZvb3Rlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWFpbk5hdkhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vbmF2aWdhdGlvbi9nbG9iYWwtbmF2aWdhdGlvbi9tYWluLW5hdi1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE1haW5OYXZDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL25hdmlnYXRpb24vZ2xvYmFsLW5hdmlnYXRpb24vbWFpbi1uYXYtY29udGFpbmVyLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBTaW5mb255VWlDb21wb25lbnQgfSBmcm9tICcuL3NpbmZvbnktdWkuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1hdENvZGVDb21wb25lbnQgfSBmcm9tICcuL2Zvcm1hdC1jb2RlL2Zvcm1hdC1jb2RlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCcmVhZGNydW1iQ29tcG9uZW50IH0gZnJvbSAnLi9icmVhZGNydW1iL2JyZWFkY3J1bWIuY29tcG9uZW50JztcbmltcG9ydCB7IEdsb2JhbE5hdmlnYXRpb25Nb2R1bGUgfSBmcm9tICcuL25hdmlnYXRpb24vZ2xvYmFsLW5hdmlnYXRpb24vZ2xvYmFsLW5hdmlnYXRpb24ubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgU2luZm9ueVVpQ29tcG9uZW50LFxuICAgIEZvcm1hdENvZGVDb21wb25lbnQsXG4gICAgQnJlYWRjcnVtYkNvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgR2xvYmFsTmF2aWdhdGlvbk1vZHVsZSxcbiAgICBNZW51TW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBTaW5mb255VWlDb21wb25lbnQsXG4gICAgR2xvYmFsTmF2aWdhdGlvbk1vZHVsZSxcbiAgICBNZW51TW9kdWxlLFxuICAgIEZvcm1hdENvZGVDb21wb25lbnQsXG4gICAgQnJlYWRjcnVtYkNvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFNpbmZvbnlVaU1vZHVsZSB7IH1cbiJdfQ==