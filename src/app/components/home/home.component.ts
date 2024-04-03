import { Component } from '@angular/core'
import { Banner } from 'src/app/common/interfaces/banner'
import { Category } from 'src/app/common/interfaces/category'
import { BannersService } from 'src/app/services/banners.service'
import { ShopService } from 'src/app/services/shop.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  panoBanners: Banner[] = []
  regularBanners: Banner[] = []
  categories: Category[] = []
  selectedGender: string = 'women'

  constructor (private readonly bannersService: BannersService, private readonly shopService: ShopService) {
    this.loadPanoBanners()
    this.loadRegularBanners()
    this.loadCategories()
  }

  private loadPanoBanners (): void {
    this.bannersService.getPanoBanners().subscribe(
      {
        next: data => {
          this.panoBanners = data
        },
        error: error => {
          console.error(error)
        }
      }
    )
  }

  private loadRegularBanners (): void {
    this.bannersService.getRegularBanners().subscribe(
      {
        next: data => {
          console.log(data)
          this.regularBanners = data
        },
        error: error => {
          console.error(error)
        }
      }
    )
  }

  private loadCategories (): void {
    this.shopService.getCategories().subscribe(
      {
        next: data => {
          this.categories = data
        },
        error: error => {
          console.error(error)
        }
      }
    )
  }
}
