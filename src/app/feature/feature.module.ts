import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { PageModule } from './page/page.module';


@NgModule({
  declarations: [PageModule],
  imports: [
    CommonModule,
    FeatureRoutingModule
  ],
  exports:[PageModule]
})
export class FeatureModule { }
