import { Component, Input } from '@angular/core'
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import { Product } from 'src/app/common/interfaces/product'

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  heartSolid = faHeartSolid
  heartRegular = faHeartRegular
  @Input() product?: Product
}
