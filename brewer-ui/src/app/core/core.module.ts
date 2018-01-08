import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/components/button/button';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideMenuModule, TabViewModule, PanelMenuModule, SidebarModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PanelMenuModule,
    SidebarModule,
    ButtonModule,
    TabViewModule,
  ],
  declarations: [NavbarComponent],
  exports: [NavbarComponent]
})
export class CoreModule { }
