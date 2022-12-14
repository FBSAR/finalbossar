import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class Web3Service {
  BACKEND_URL = environment.url;


  constructor(
    private http: HttpClient,
    private alert: AlertController
  ) { }

  bosscTotalSupply() {
    return this.http.get(`${this.BACKEND_URL}/api/web3/total-supply`)

  }

  profileBOSSCBalanceOf(email: string, walletAddress: string) {
    return this.http.post(`${this.BACKEND_URL}/api/web3/balance-of`, 
    {
      email,
      walletAddress
    })
  }

}
