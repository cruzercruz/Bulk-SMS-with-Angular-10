import { TestBed } from '@angular/core/testing';

import { SendBulkSMSService } from './send-bulk-sms.service';

describe('SendBulkSMSService', () => {
  let service: SendBulkSMSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendBulkSMSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
