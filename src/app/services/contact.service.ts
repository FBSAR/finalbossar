import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  BACKEND_URL = environment.url;

  constructor(
    private http: HttpClient
  ) { }

    /**
   * Sends email to eddie@finalbossar.com
   */
  sendContactMessage(fullName: string, email: string, message: string) {
    console.log(this.BACKEND_URL);
    return this.http.post(`${this.BACKEND_URL}/api/contact-us/send-message`, {
      fullName,
      email,
      message
    } )
  }

}
