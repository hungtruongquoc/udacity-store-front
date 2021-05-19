import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginPageComponent} from "./login-page/login-page.component";
import {AuthRoutingModule} from "./auth-routing.module";
import {PageHeaderModule} from "../../common/components/page-header/page-header.module";


@NgModule({
    declarations: [
        LoginPageComponent
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        PageHeaderModule
    ]
})
export class AuthModule {
}
