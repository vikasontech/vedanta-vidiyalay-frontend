import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { OktaAuthService } from '@okta/okta-angular';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private oktaAuth: OktaAuthService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return from(this.handleAccess(request, next));
  }

  private async handleAccess(request: HttpRequest<any>, next: HttpHandler): Promise<HttpEvent<any>> {
    // Only add to known domains since we don't want to send your tokens to just anyone.
    // Also, Giphy's API fails when the request includes a token.
    console.log("request: ", request)
    console.log("request.urlWithParams: ", request.urlWithParams.indexOf('vedanta-app-gateway.herokuapp.com'))
    if (request.urlWithParams.indexOf('localhost') > -1 ||
    request.urlWithParams.indexOf('okta.com') > -1 ||
    request.urlWithParams.indexOf('vedanta-app-gateway.herokuapp.com') > -1
    ) {
      console.log("adding token")
      const accessToken = await this.oktaAuth.getAccessToken();
      console.log("accessToken: ", accessToken)
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + accessToken
        }
      });
    }
    return next.handle(request).toPromise();
  }
}
