import { Component, OnInit } from '@angular/core';
import { SendBulkSMSService } from '../../service/send-bulk-sms.service';
import { cors } from 'cors';
@Component({
  selector: 'app-xmlresponse',
  templateUrl: './xmlresponse.component.html',
  styleUrls: ['./xmlresponse.component.css'],
})
export class XMLResponseComponent implements OnInit {
  public xml: any;
  public txtPhoneNumber: string;

  constructor(private sendBulkSMS: SendBulkSMSService) {


  }

  ngOnInit(): void {}

  onSendClick() {
    if (this.txtPhoneNumber.length <= 0) {
      alert('Phone number could not be blank');
      return;
    }

    var jsonObj: any = {
      TokenID: '',
      SkipToken: true,
      PhoneNumber: this.txtPhoneNumber,
      MessageDetail: {
        Message:
          'ส่งจาก Device อื่นๆที่เรียกใช้าน {linkToGoogle} {linkToFacebook}',
        LinkMessage: [
          {
            Name: 'linkToGoogle',
            Link: 'http://www.google.com',
            Display: 'Google',
          },
          {
            Name: 'linkToFacebook',
            Link: 'http://www.Facebook.com',
            Display: 'Facebook',
          },
        ],
      },
      RequestBy: '<SOMEBODY>',
    };
    this.sendBulkSMS
      .Send(jsonObj)
      .then((res) => {
        console.log(JSON.parse(res));
        alert('Success');
        this.xml = JSON.parse(res);
      })
      .catch((err) => {
        alert('Error');
        this.xml = err;
      });
  }
}
