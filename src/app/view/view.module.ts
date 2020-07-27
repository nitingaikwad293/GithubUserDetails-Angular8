import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';



@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    FormsModule ,
  ],
  exports:[
    UserComponent
  ]
})
export class ViewModule { }
