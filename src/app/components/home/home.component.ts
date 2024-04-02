import { Component } from '@angular/core'
import { Banner } from 'src/app/common/interfaces/banner'
import { HomeService } from 'src/app/services/home.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  panoBanners: Banner[] = []
  regularBanners: Banner[] = []
  constructor (private readonly homeService: HomeService) {
    this.loadPanoBanners()
    this.loadRegularBanners()
  }

  loadPanoBanners (): void {
    this.homeService.getPanoBanners().subscribe(
      {
        next: banners => {
          this.panoBanners = banners
        },
        error: error => {
          console.error(error)
        }
      }
    )
  }

  loadRegularBanners (): void {
    this.homeService.getRegularBanners().subscribe(
      {
        next: bann => {
          console.log(bann)
          this.regularBanners = bann
        },
        error: error => {
          console.error(error)
        }
      }
    )
  }
}
