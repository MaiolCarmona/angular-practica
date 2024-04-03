import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Category } from '../common/interfaces/category'
import { Product } from '../common/interfaces/product'

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  private readonly baseUrl = 'http://localhost:3000/'
  private readonly categoriesUrl = this.baseUrl + 'categories'
  private readonly productsUrl = this.baseUrl + 'products/'

  constructor (private readonly http: HttpClient) { }

  getCategories (): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoriesUrl)
  }

  getProductsByCategory (category: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl + category)
  }

  // este metodo lo he definido así porque como en el mock de backend
  // solo he creado un endpont para esa categoria, si se tiene un pool de productos general,
  // se podria hacer un método solo con id.
  getOneProductFromCategory (category: string, id: number): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl + category + '/' + id.toString())
  }
}
