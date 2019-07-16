import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path:'home',
        loadChildren : () => import('./home/home.module').then(mod => mod.HomeModule)
    },{
        path:'blog',
            loadChildren: () => import('./blog/blog.module').then(mod => mod.BlogModule)
    },{
        path:'error',
            loadChildren: () => import('./error-page/error-page.module').then(mod => mod.ErrorPageModule)
    },{
        path:'myaccount',
            loadChildren: () => import('./myaccount/myaccount.module').then(mod => mod.MyaccountModule)
    },{
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
    {
        path:'**', redirectTo:'error'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
