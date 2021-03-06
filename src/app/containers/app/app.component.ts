import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
  <div class="app">
    <div class="app__header">
    <span style="color: white;">djedovicdusan94@gmail.com</span>
    </div>
    <div class="app__content">
      <div class="app__nav">
        <a routerLink="products" routerLinkActive="active">Products</a>
      </div>
      <div class="app__container">
        <router-outlet></router-outlet>
      </div>
      <div class="app__footer">
        <p>&copy; Pizza Inc.</p>
      </div>
    </div>
  </div>
  `,
})
export class AppComponent { }
