import { Component, OnInit } from '@angular/core';
import {AuthService} from "../core/services/auth.service";
import {debounceTime, filter, tap} from "rxjs/operators";
import {
  ActivatedRoute,
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterEvent
} from "@angular/router";
import {User} from "../core/models/user.model";
import {ParagraphsEnum} from "../core/models/enums/paragraphs.enum";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  paragraphs = ParagraphsEnum;
  showShell = false;
  hiddenScrollbar = false;
  loading: boolean;
  currentUser: User;
  daysToWedding: number;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private authService: AuthService) {
    // this.loaderOnRouteChange(500);
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showShell = this.activatedRoute.firstChild.snapshot.data.showShell !== false;
        this.hiddenScrollbar = this.activatedRoute.firstChild.snapshot.data.hiddenScrollbar === true;
      }
    });

    this.setDaysToWedding();

    this.currentUser = this.authService.currentUserValue;
    console.log(this.currentUser);
  }

  setDaysToWedding() {
    const today = new Date();
    const weddingDate = new Date(2021, 6, 31);

    const difference = weddingDate.getTime() - today.getTime();

    this.daysToWedding = Math.ceil(difference / (1000 * 3600 * 24));
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
