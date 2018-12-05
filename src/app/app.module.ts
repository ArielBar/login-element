import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { ElementZoneStrategyFactory } from 'elements-zone-strategy';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  entryComponents: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const strategyFactory = new ElementZoneStrategyFactory(AppComponent, this.injector);
    const el = createCustomElement(AppComponent, { injector: this.injector,strategyFactory });
    customElements.define('login-element', el);
  }
  ngDoBootstrap() {
  }
}