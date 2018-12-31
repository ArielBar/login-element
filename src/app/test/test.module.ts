import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { SomeComponent } from './some/some.component';
import { createCustomElement } from '@angular/elements';
import { ElementZoneStrategyFactory } from 'elements-zone-strategy';

@NgModule({
  declarations: [SomeComponent],
  imports: [
    CommonModule,
    TestRoutingModule
  ]
})
export class TestModule {
  
}
