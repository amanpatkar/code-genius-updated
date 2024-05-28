import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { PageComponent } from './page/page.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    PageComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule
  ],
  exports:[PageComponent]
})
export class PageModule { }
