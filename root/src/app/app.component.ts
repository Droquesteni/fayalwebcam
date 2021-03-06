import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-root',
  styleUrls:  ['./app.component.scss'],
  template: `
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <a class="navbar-brand" [routerLink]="['']">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarColor01">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
      <a class="nav-link"  [routerLink]="['cameras']">Cameras <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link"  [routerLink]="['meteorologia']">Meteorologia</a>
      </li>
      <li class="nav-item">
      <a class="nav-link"  [routerLink]="['surfspots']">Surfspots</a>
    </ul>
  </div>
</nav>
<router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'app';
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.navigate([''])
  }
 
  }

