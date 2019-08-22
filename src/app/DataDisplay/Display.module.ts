import {NgModule} from '@angular/core';
import {DisplayComponent} from './Display.component';
import { Routes, RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material' 
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatPaginatorModule} from '@angular/material/paginator';
import { HighLightDirective } from './highlight.directive';
import { ParentCounterComponent } from './counterparent.component';
import { ChildCounterComponent } from './counterchild.component';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

const routes: Routes = [
    {path: '', component: DisplayComponent}
];

@NgModule({
    imports: [ FlexLayoutModule, CommonModule, MatPaginatorModule, MatInputModule, MatTableModule, MatFormFieldModule, RouterModule.forChild(routes)],
    declarations: [DisplayComponent, HighLightDirective, ParentCounterComponent, ChildCounterComponent],
    exports: [DisplayComponent]
})

export class DisplayModule{

}