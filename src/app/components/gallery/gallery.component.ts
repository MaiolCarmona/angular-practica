import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Product } from 'src/app/common/interfaces/product'
import { ShopService } from 'src/app/services/shop.service'

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  categoryName: string = ''
  products: Product[] = []

  constructor (private readonly shopService: ShopService, private readonly actRoute: ActivatedRoute) {
    this.getCategoryName()
    this.loadProducts()
  }

  private getCategoryName (): void {
    this.categoryName = this.actRoute.snapshot.params['category']
  }

  private loadProducts (): void {
    this.shopService.getProductsByCategory(this.categoryName).subscribe(products => {
      this.products = products
    })
  }
}
