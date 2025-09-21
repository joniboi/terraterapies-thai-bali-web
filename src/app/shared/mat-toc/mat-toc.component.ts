import { Component, HostListener, Input, OnDestroy, OnInit, AfterViewInit } from '@angular/core';

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
export class MatTocComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() title?: string;
  @Input() items: TocItem[] = [];


  activeLink?: string;
  private sectionOffsets: { link: string; top: number }[] = [];
  private resizeObserver?: ResizeObserver;

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    this.calculateOffsets();

    // Watch for resize or content shifts (e.g. images loading)
    this.resizeObserver = new ResizeObserver(() => this.calculateOffsets());
    document.querySelectorAll(this.items.map(i => i.link).join(','))
      .forEach(el => this.resizeObserver?.observe(el));
  }

  ngOnDestroy() {
    this.resizeObserver?.disconnect();
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
    const top = el ? el.getBoundingClientRect().top + window.scrollY : 0;
    console.log('Section offset', item.link, top);
    return { link: item.link, top };
  });
}

@HostListener('window:scroll', [])
onScroll = () => {
  const scrollPos = window.scrollY + 100;
  console.log('Scroll position', scrollPos);

  let current = this.items[0]?.link;
  for (let i = 0; i < this.sectionOffsets.length; i++) {
    if (scrollPos >= this.sectionOffsets[i].top) {
      current = this.sectionOffsets[i].link;
    } else {
      break;
    }
  }

  console.log('Active section', current);
  this.activeLink = current;
};

}
