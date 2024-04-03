import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './components/home/home.component'
import { GalleryComponent } from './components/gallery/gallery.component'
import { DetailComponent } from './components/detail/detail.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'gallery/:category',
    component: GalleryComponent,
    pathMatch: 'full'
  },
  {
    path: 'gallery/:category/:id',
    component: DetailComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
