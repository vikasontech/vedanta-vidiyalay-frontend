/*
 *     Copyright (C) 2019  Vikas Kumar Verma
 *
 *     This program is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU Affero General Public License as
 *     published by the Free Software Foundation, either version 3 of the
 *     License, or (at your option) any later version.
 *
 *     This program is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU Affero General Public License for more details.
 *
 *     You should have received a copy of the GNU Affero General Public License
 *     along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { OktaAuthService, UserClaims } from '@okta/okta-angular';
import { Router } from '@angular/router';
import { ErrorHandler } from '@angular/router/src/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ExceptionHandle } from '../utils/exception-handle';

@Component({
  selector: 'app-my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.css'],
})
export class MyNavComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();
  panelOpenState = false;
  isUserRole = true;
  isAdminRole = true;
  isAuthenticated = false;
  isShowWelcomePage = true;
  userDetails: { email: String };

  constructor(public oktaAuth: OktaAuthService,
    private router: Router,
    private http: HttpClient,
    private breakpointObserver: BreakpointObserver) {

    this.oktaAuth.isAuthenticated();
    // Subscribe to authentication state changes
    console.log('subscribing to oktaAuth.$authenticationState')
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean) => {
        console.log('authentication state changed: ', isAuthenticated)
        this.isAuthenticated = isAuthenticated;
        this.isShowWelcomePage = !isAuthenticated
        if(this.isAuthenticated) {
          this.oktaAuth.getUser().then((u) => {
            // this.userDetails.email = u.email
            console.log(u)
            this.userDetails = {email: ''};
            this.userDetails.email = u.email
          })
        }
      })
  }

  private exception: ExceptionHandle = new ExceptionHandle();


  async login() {
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
  }

  // logout_url = SecurityConfig_prod.logouturl
  //   + encodeURIComponent(SecurityConfig_prod.redirectUri);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  async ngOnInit() {
    // console.log('user details', this.userDetails)
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    // Subscribe to authentication state changes
    console.log('subscribing to oktaAuth.$authenticationState')
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean) => {
        console.log('authentication state changed: ', isAuthenticated)
        this.isAuthenticated = isAuthenticated;
        this.isShowWelcomePage = !isAuthenticated

      }
    );

    // this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    console.log('auth: ', this.isAuthenticated)
    console.log('show welcome page: ', this.isShowWelcomePage)
  }

}

const httpOptions = {
  headers: new HttpHeaders({})
};
  // public onSidenavClose = () => {
  //   this.sidenavClose.emit();
  // }
// }

