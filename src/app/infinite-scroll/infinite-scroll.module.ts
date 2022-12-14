import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfiniteScrollPageRoutingModule } from './infinite-scroll-routing.module';
import { ComponentsModule } from '../components/components.module';

import { InfiniteScrollPage } from './infinite-scroll.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfiniteScrollPageRoutingModule,
    ComponentsModule
  ],
  declarations: [InfiniteScrollPage]
})
export class InfiniteScrollPageModule {}
