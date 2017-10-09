import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { YogaRoutingModule, routedComponents } from './yoga-routing.module';


export const COMPONENTS = [
];

@NgModule({
    imports: [CommonModule, YogaRoutingModule, MaterialModule],
    declarations: [routedComponents],
    exports: [routedComponents]
})
export class YogaModule { }

