import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';




const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirige a la página de login por defecto
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'resetpass',
    loadChildren: () => import('./resetpass/resetpass.module').then( m => m.ResetpassPageModule)
  },

  {
    path: 'product-add',
    loadChildren: () => import('./producto/product-add/product-add.module').then( m => m.ProductAddPageModule)
  },
  {
    path: 'product-all',
    loadChildren: () => import('./producto/product-all/product-all.module').then( m => m.ProductAllPageModule)
  },
  {
    path: 'product-detail',
    loadChildren: () => import('./producto/product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
  },
  {
    path: 'product-edit',
    loadChildren: () => import('./producto/product-edit/product-edit.module').then( m => m.ProductEditPageModule)
  },
  {
    path: 'product-list',
    loadChildren: () => import('./producto/product-list/product-list.module').then( m => m.ProductListPageModule)
  },
  { path: 'product-detail/:idProducto', loadChildren: () => import('./producto/product-detail/product-detail.module').then(m => m.ProductDetailPageModule) },
  { path: 'product-edit/:id', loadChildren: () => import('./producto/product-edit/product-edit.module').then(m => m.ProductEditPageModule) },
  {
    path: 'perfil-detail/:id',
    loadChildren: () => import('./perfiles/perfil-detail/perfil-detail.module').then(m => m.PerfilDetailPageModule)
  },
  
  // {
  //   path: 'perfil-act',
  //   loadChildren: () => import('./perfiles/perfil-act/perfil-act.module').then( m => m.PerfilActPageModule)

  // },
  {
    path: 'perfil-add',
    loadChildren: () => import('./perfiles/perfil-add/perfil-add.module').then( m => m.PerfilAddPageModule)
  },
 
  {
    path: 'perfil-read',
    loadChildren: () => import('./perfiles/perfil-detail/perfil-detail.module').then( m => m.PerfilDetailPageModule)
  },
  {
    path: 'perfil-list',
    loadChildren: () => import('./perfiles/perfil-list/perfil-list.module').then( m => m.PerfilListPageModule)
  },
  // {
  //   path: 'perfil-act',
  //   loadChildren: () => import('./perfiles/perfil-act/perfil-act.module').then( m => m.PerfilActPageModule)
  // },
  {
    path: 'perfil-add',
    loadChildren: () => import('./perfiles/perfil-add/perfil-add.module').then( m => m.PerfilAddPageModule)
  },
  
  {
    path: 'perfil-detail',
    loadChildren: () => import('./perfiles/perfil-detail/perfil-detail.module').then( m => m.PerfilDetailPageModule)
  },
  {
    path: 'perfil-list',
    loadChildren: () => import('./perfiles/perfil-list/perfil-list.module').then( m => m.PerfilListPageModule)
  },
  {
    path: 'perfil-edit',
    loadChildren: () => import('./perfiles/perfil-edit/perfil-edit.module').then( m => m.PerfilEditPageModule)
  },
  { path: 'perfil-edit/:id', loadChildren: () => import('./perfiles/perfil-edit/perfil-edit.module').then(m => m.PerfilEditPageModule) },
  {
    path: 'perfil-all',
    loadChildren: () => import('./perfiles/perfil-all/perfil-all.module').then( m => m.PerfilAllPageModule)
  },
  {
    path: 'camara',
    loadChildren: () => import('./camara/camara.module').then( m => m.CamaraPageModule)
  },
  {
    path: 'geo',
    loadChildren: () => import('./geo/geo.module').then( m => m.GeoPageModule)
  },
  {
    path: 'instrumento',
    loadChildren: () => import('./instrumento/instrumento.module').then( m => m.InstrumentoPageModule)
  },
  {
    path: 'drums',
    loadChildren: () => import('./drums/drums.module').then( m => m.DrumsPageModule)
  },
  
  



  
 
  


//   {
//     path: '**',
//     loadChildren: () => import('./not-found/not-found.module').then( m => m.NotFoundPageModule)
//   },
// ##

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}