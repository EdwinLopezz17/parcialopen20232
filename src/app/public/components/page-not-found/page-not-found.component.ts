import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent {
  routeNotFound: string;

  constructor(private _router: Router) {
    this.routeNotFound = this._router.url;
  }

  returnToHome() {
    this._router.navigate(['/home']);
  }
}
