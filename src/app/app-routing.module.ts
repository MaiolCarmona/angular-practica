import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './components/home/home.component'
import { GalleryComponent } from './components/gallery/gallery.component'
import { DetailComponent } from './components/detail/detail.component'
import { AboutComponent } from './components/about/about.component'

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
    path: 'about',
    component: AboutComponent
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
