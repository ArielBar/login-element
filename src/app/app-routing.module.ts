import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AppCustomPreloader } from './app-routing-loader';

const routes: Routes = [
  {
    path: '', 
    loadChildren: './test/test.module#TestModule',
    data: { preload: true }  // Custom property we will use to track what route to be preloaded
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: [AppCustomPreloader]
})
export class AppRoutingModule {
}
