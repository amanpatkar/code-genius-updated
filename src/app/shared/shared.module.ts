import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { MatModule } from './mat/mat.module';


@NgModule({
  declarations: [MatModule],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[MatModule]
})
export class SharedModule { }
