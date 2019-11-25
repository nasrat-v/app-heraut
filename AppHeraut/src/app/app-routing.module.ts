import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ProfileService } from './services/profile.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login-screen/login-screen.module').then(m => m.LoginScreenModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
  },
  /*{
    path: 'apero-list',
    loadChildren: () => import('./pages/apero-list/apero-list.module').then( m => m.AperoListPageModule)
  },/*
  {
    path: 'apero-details',
    loadChildren: () => import('./pages/apero-details/apero-details.module').then( m => m.AperoDetailsPageModule)
  },
  {
    path: 'apero-details/:id',
    loadChildren: () => import('./pages/apero-details/apero-details.module').then( m => m.AperoDetailsPageModule)
  }*/
  //{ path: 'apero', loadChildren: './pages/apero-details/apero-details.module#AperoDetailsPageModule' },
  //{ path: 'apero/:id', loadChildren: './pages/apero-details/apero-details.module#AperoDetailsPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
