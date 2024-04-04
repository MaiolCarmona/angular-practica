import { Component, Input } from '@angular/core'
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import { IconDefinition, faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import { Product } from 'src/app/common/interfaces/product'

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  heartSolid: IconDefinition = faHeartSolid
  heartRegular: IconDefinition = faHeartRegular
  @Input() product?: Product

  /* la función persistiria a traves de un servicio el cambio del atributo favorite del producto,
  pero como estamos trabajando con un backend mockeado simplemente he querido
  simular aquí parte del comportamiento, cuando el componente se recarga al navegar
  y se cargan los productos se pierde este cambio */
  changeFavorite (product: Product, event: Event): void {
    product.favorite = !product.favorite
    event.stopPropagation()
  }
}
