import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ButtonComponent } from './button.component';
import { MatButtonModule} from '@angular/material/button';
import { MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatMenuModule, 
         MatAutocompleteModule, 
         MatIconModule,
         MatProgressSpinnerModule,
         MatToolbarModule,
         MatSidenavModule, 
         MatGridListModule,
         MatStepperModule ,
         MatFormFieldModule, 
         MatSelectModule,
         MatInputModule,

         } from '@angular/material';
import { LikeAnddislikeComponent } from './LikeAndDislike.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
    {path: '', component: ButtonComponent}
];

@NgModule({
    imports: [ MatProgressSpinnerModule,
               MatToolbarModule,
               MatSidenavModule,
               MatInputModule,
               MatGridListModule,
               MatFormFieldModule,
               MatSelectModule,
               MatStepperModule,
               FormsModule,
               MatIconModule, 
               MatAutocompleteModule, 
               MatMenuModule,MatButtonToggleModule, 
               MatButtonModule, 
               FlexLayoutModule, 
               CommonModule, 
               ReactiveFormsModule,
               RouterModule.forChild(routes)],
    declarations: [ ButtonComponent, LikeAnddislikeComponent],
    exports: []
})

export class ButtonModule{

}