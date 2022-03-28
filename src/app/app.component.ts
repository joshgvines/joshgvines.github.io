import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'joshgvines';


  preLoad: string = "ng-cloak"


  constructor(
    private readonly router: Router,
  ) {

  }

  ngOnInit(): void {
    this.preLoad = "ng-cloak";
  }

  onActivate(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.preLoad = "ng-cloak";
        setTimeout(() => {
          window.scrollTo(0, 0);
          console.log(document.documentElement.scrollHeight);
          this.preLoad = "fade-in-page";
        }, 20);
      }
    });
  }


}
