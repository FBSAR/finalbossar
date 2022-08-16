import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'; 


import { ContactService } from './contact.service';

describe('Contact Us | Create ContactService', () => {
  let service: ContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule]
    });
    service = TestBed.inject(ContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

// https://braydoncoyer.dev/blog/how-to-unit-test-an-http-service-in-angular
// How to Unit Test an HTTP Service in Angular

describe('Contact Us | Send Message Success Response', () => {
  let httpController: HttpTestingController;
  let service: ContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [
        ContactService
      ]
    });
    httpController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ContactService);
  });

  afterEach(() => {
    httpController.verify(); //Verifies that no requests are outstanding.
  });


  it('should have success response', () => {

    let mockMessageRequest = {
      fullName: "The Final Boss",
      email: "fb@finalbossar.com",
      message: "Test Message"
    }

    service.sendContactMessage(
      mockMessageRequest.fullName,
      mockMessageRequest.email,
      mockMessageRequest.message,
    )
      .subscribe( res => {
        expect(res).toEqual({responseMsg: "Contact Message was sent"});
      })
    
      const req = httpController.expectOne({
	      method: 'POST',
	      url: service.BACKEND_URL + "/contact-us/send-message",
	    });

	    req.flush({responseMsg: "Contact Message was sent"}, {status: 200, statusText: "Success"});
  })
  
})
