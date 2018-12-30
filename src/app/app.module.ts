import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { ElementZoneStrategyFactory } from 'elements-zone-strategy';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PushPipe } from './push.pipe';
import { TestModule } from './test/test.module';
import { SomeComponent } from './test/some/some.component';

@NgModule({
  declarations: [
    AppComponent,
    PushPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TestModule
  ],
  providers: [],
  entryComponents: [AppComponent,SomeComponent]
})
export class AppModule {

  constructor(private injector: Injector) {
    const elements: any[] = [
      [AppComponent, 'login-element'],
      [SomeComponent, 'some-element']
    ];

    for (const [component, name] of elements) {
      const el = createCustomElement(component, { injector: this.injector });
      customElements.define(name, el);
    }
  }
  ngDoBootstrap() {
  }
}