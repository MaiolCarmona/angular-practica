import { Component } from '@angular/core'
import { IconDefinition } from '@fortawesome/free-brands-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Category } from 'src/app/common/interfaces/category'
import { ShopService } from 'src/app/services/shop.service'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  glass: IconDefinition = faMagnifyingGlass
  user: IconDefinition = faUser
  cart: IconDefinition = faShoppingCart

  categories: Category[] = []

  constructor (private readonly shopService: ShopService) {
    this.loadCategories()
  }

  private loadCategories (): void {
    this.shopService.getCategories().subscribe({
      next: data => {
        this.categories = data
      },
      error: (err) => {
        console.error(err)
      }
    })
  }
}
