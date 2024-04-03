import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Product } from 'src/app/common/interfaces/product'
import { ShopService } from 'src/app/services/shop.service'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  productId: number = 0
  categoryName: string = ''
  product?: Product
  selectedSize: string = ''

  constructor (private readonly shopService: ShopService, private readonly actRoute: ActivatedRoute) {
    this.getProductId()
    this.getCategoryName()
    this.getProduct()
  }

  private getCategoryName (): void {
    this.categoryName = this.actRoute.snapshot.params['category']
  }

  private getProductId (): void {
    this.productId = this.actRoute.snapshot.params['id']
  }

  private getProduct (): void {
    this.shopService.getOneProductFromCategory(this.categoryName, this.productId).subscribe({
      next: data => {
        this.product = data[0]
      },
      error: err => console.error(err)
    })
  }
}
