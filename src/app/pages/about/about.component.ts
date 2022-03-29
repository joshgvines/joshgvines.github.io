import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private viewportScroll: ViewportScroller, private title: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.title.setTitle("About");
    this.meta.updateTag({ property: 'description', content: 'About | Just Learning As I go.' });
    this.meta.updateTag({ property: 'og:title', content: 'About | joshgvines.com' });
    this.meta.updateTag({ property: 'og:description', content: 'Just Learning As I go.' });
    this.meta.updateTag({ property: 'og:image', content: 'https://joshgvines.com/assets/img/skyrim-background.jpg' });
    this.meta.updateTag({ property: 'robots', content: 'noindex' });
  }

  public onClick(elem: string): void {
    this.viewportScroll.setOffset([90, 90]);
    this.viewportScroll.scrollToAnchor(elem);
  }

}
