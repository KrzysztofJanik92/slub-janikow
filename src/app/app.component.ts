import {Component, HostListener, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent} from '@angular/router';
import {debounceTime, filter, tap} from 'rxjs/operators';
import {Event} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'slub-janikow';
  showShell = false;
  hiddenScrollbar = false;
  loading: boolean;
  desktopWidth: number;

  @HostListener('window:resize', ['$event'])
  onResizeBrowser(event?) {
    this.desktopWidth = event ? event.target.innerWidth : window.innerWidth;
  }

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.loaderOnRouteChange(500);
    this.onResizeBrowser();
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showShell = this.activatedRoute.firstChild.snapshot.data.showShell !== false;
        this.hiddenScrollbar = this.activatedRoute.firstChild.snapshot.data.hiddenScrollbar === true;
      }
    });
  }

  setContentHeight(): string {
    return this.desktopWidth > 960 ? 'calc(100% - 64px)' : 'calc(100% - 56px)';
  }

  private loaderOnRouteChange(delay: number) {
    this.router.events
      .pipe(
        tap(() => this.loading = true),
        filter(event => this.filterEvents(event)),
        debounceTime(delay)
      )
      .subscribe((event: RouterEvent) => this.setLoader(event));
  }

  private setLoader(event: RouterEvent) {
    switch (true) {
      case event instanceof NavigationStart: {
        this.loading = true;
        break;
      }
      case event instanceof NavigationEnd:
      case event instanceof NavigationCancel:
      case event instanceof NavigationError: {
        this.loading = false;
        break;
      }
      default: {
        break;
      }
    }
  }

  private filterEvents(event: Event): boolean {
    return event instanceof NavigationStart
      || event instanceof NavigationEnd
      || event instanceof NavigationCancel
      || event instanceof NavigationError;
  }
}
