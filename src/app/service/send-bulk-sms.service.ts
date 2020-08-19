import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SendBulkSMSService {
  private TRUE_BULK_SMS_API: string = environment.TRUE_BULK_SMS_API;
  constructor(private http: HttpClient) {}

  async Send(data: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      return this.http.post(this.TRUE_BULK_SMS_API, data).subscribe(
        (result) => {
          resolve(result);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

}
