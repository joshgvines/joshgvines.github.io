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
    this.meta.addTag({ property: 'description', contnet: 'Just Learning As I go.' });
    this.meta.addTag({ property: 'og:image', contnet: '/assets/img/skyrim-background.jpg' });
  }

  public onClick(elem: string): void {
    this.viewportScroll.setOffset([90, 90]);
    this.viewportScroll.scrollToAnchor(elem);
  }

}
