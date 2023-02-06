import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'about', loadChildren:()=> import('./pages/about/about.module').then(m=> m.AboutModule)
  },
  {
    path:'contact', loadChildren:()=> import('./pages/contact/contact.module').then(m=> m.ContactModule)
  },
  {
    path:'gallery', loadChildren:()=> import('./pages/gallery/gallery.module').then(m=> m.GalleryModule)
  },
  {
    path:'home', component:HomeComponent
  },
  {
    path:'not-found', loadChildren:()=> import('./pages/error/error.module').then(m=> m.ErrorModule)
  },
  {
    path:'**',redirectTo:'not-found'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
