import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarclrComponent } from './sidebarclr/sidebarclr.component';



@NgModule({
  declarations: [
    SidebarComponent,
    SidebarclrComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SidebarComponent

  ]
  
})
export class SharedModule { }
