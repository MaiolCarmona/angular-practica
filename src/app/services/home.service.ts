import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Banner } from '../common/interfaces/banner'

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private readonly baseUrl = 'http://localhost:3000/'
  private readonly panoBannersUrl = this.baseUrl + 'panoramicBanners'
  private readonly regularBannersUrl = this.baseUrl + 'regularBanners'

  constructor (private readonly http: HttpClient) { }

  getPanoBanners (): Observable<Banner[]> {
    return this.http.get<Banner[]>(this.panoBannersUrl)
  }

  getRegularBanners (): Observable<Banner[]> {
    console.log(this.regularBannersUrl)

    return this.http.get<Banner[]>(this.regularBannersUrl)
  }
}
