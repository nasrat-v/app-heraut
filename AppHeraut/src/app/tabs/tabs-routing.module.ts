import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'apero-list',
        loadChildren: () => import('../pages/apero-list/apero-list.module').then(m => m.AperoListPageModule)
      },
      {
        path: 'apero-details',
        loadChildren: () => import('../pages/apero-details/apero-details.module').then(m => m.AperoDetailsPageModule)
      },
      {
        path: 'apero-details/:id',
        loadChildren: () => import('../pages/apero-details/apero-details.module').then(m => m.AperoDetailsPageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/apero-list',
    pathMatch: 'full'
  }
  
  

  
  /*{
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'apero-list',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/apero-list/apero-list.module').then(m => m.AperoListPageModule)
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/apero-list',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/apero-list',
    pathMatch: 'full'
  }*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
