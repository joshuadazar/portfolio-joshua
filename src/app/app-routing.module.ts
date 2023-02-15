import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationScrollComponent } from "./pages/animation-scroll/animation-scroll.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/animation',
    pathMatch: 'full'
  },
  // { path: '', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule), canActivate: [AuthUserGuard] },
  // //  { path: '', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule) },
  // { path: 'accessDenied', component: AccessDeniedComponent },
  { path: 'animation', component: AnimationScrollComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
