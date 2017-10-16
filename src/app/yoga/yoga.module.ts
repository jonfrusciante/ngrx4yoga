import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YogaRoutingModule, routedComponents } from './yoga-routing.module';
import { AppMaterialModule } from './../app-material/app-material.module';



export const COMPONENTS = [
];

@NgModule({
    imports: [
        CommonModule,
        YogaRoutingModule,
        AppMaterialModule
    ],
    declarations: [routedComponents],
    exports: [routedComponents]
})
export class YogaModule { }

