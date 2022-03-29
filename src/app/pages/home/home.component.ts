import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private viewportScroll: ViewportScroller, private title: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.title.setTitle("Home");
    this.meta.updateTag({ property: 'description', content: 'Home | Just Learning As I go.' });
    this.meta.updateTag({ property: 'og:title', content: 'Home | joshgvines.com' });
    this.meta.updateTag({ property: 'og:description', content: 'Just Learning As I go.' });
    this.meta.updateTag({ property: 'og:image', content: 'https://joshgvines.com/assets/img/skyrim-background.jpg' });
    this.meta.updateTag({ property: 'robots', content: 'noindex' });
  }

  public onClick(elem: string): void {
    this.viewportScroll.setOffset([90, 90]);
    this.viewportScroll.scrollToAnchor(elem);
  }

}
