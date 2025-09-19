import { Component, HostListener, Input, OnDestroy, OnInit } from '@angular/core';

export interface TocItem {
  label: string;
  link: string; // e.g., "#section-id"
}

@Component({
  selector: 'mat-toc',
  templateUrl: './mat-toc.component.html',
  styleUrls: ['./mat-toc.component.scss'],
  standalone: false
})
export class MatTocComponent implements OnInit, OnDestroy{
  @Input() title?: string;
  @Input() items: TocItem[] = [];

  activeLink?: string;

  private sectionOffsets: { link: string, top: number }[] = [];

  ngOnInit() {
    // Calculate offsets after view init
    setTimeout(() => this.calculateOffsets(), 100);
    window.addEventListener('scroll', this.onScroll, { passive: true });
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  }

  scrollTo(anchor: string, event: Event) {
    event.preventDefault();
    const el = document.querySelector(anchor);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  private calculateOffsets() {
    this.sectionOffsets = this.items.map(item => {
      const el = document.querySelector(item.link);
      return { link: item.link, top: el ? el.getBoundingClientRect().top + window.scrollY : 0 };
    });
  }

  @HostListener('window:scroll', [])
  onScroll = () => {
    const scrollPos = window.scrollY + 100; // 100px offset for toolbar height
    let current = this.items[0]?.link;

    for (let i = 0; i < this.sectionOffsets.length; i++) {
      if (scrollPos >= this.sectionOffsets[i].top) {
        current = this.sectionOffsets[i].link;
      } else {
        break;
      }
    }

    this.activeLink = current;
  };
}
