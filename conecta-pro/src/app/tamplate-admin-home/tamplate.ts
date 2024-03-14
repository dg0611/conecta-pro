// import { BreakpointObserver } from '@angular/cdk/layout';
// import { Component, ViewChild } from '@angular/core';
// import { MatSidenav } from '@angular/material/sidenav';
// import { Subscription } from 'rxjs';

// const MOBILE_VIEW = 'screen and (max-width: 768px)';
// const TABLET_VIEW = 'screen and (min-width: 769px) and (max-width: 1024px)';
// const MONITOR_VIEW = 'screen and (min-width: 1024px)';
// @Component({
//   selector: 'app-valor-receber',
//   templateUrl: '/src/app/tamplate-admin-home/tamplate.html',
//   styleUrls: ['./valor-receber.component.scss'],
// })
// export class ValorReceberComponent {
//   selected: Date | null = null;
//   @ViewChild('leftsidenav')
//   public sidenav: MatSidenav | any;

//   private layoutChangesSubscription = Subscription.EMPTY;
//   private isMobileScreen = false;
//   private isContentWidthFixed = true;
//   private isCollapsedWidthFixed = false;
//   private htmlElement!: HTMLHtmlElement;

//   get isOver(): boolean {
//     return this.isMobileScreen;
//   }

//   constructor(private breakpointObserver: BreakpointObserver) {
//     this.htmlElement = document.querySelector('html')!;
//     this.layoutChangesSubscription = this.breakpointObserver
//       .observe([MOBILE_VIEW, TABLET_VIEW, MONITOR_VIEW])
//       .subscribe((state) => {
//         // SidenavOpened must be reset true when layout changes

//         this.isMobileScreen = state.breakpoints[MOBILE_VIEW];

//         this.isContentWidthFixed = state.breakpoints[MONITOR_VIEW];
//       });
//   }

//   ngOnInit(): void {}

//   ngOnDestroy() {
//     this.layoutChangesSubscription.unsubscribe();
//   }

//   toggleCollapsed() {
//     this.isContentWidthFixed = false;
//   }

//   onSidenavClosedStart() {
//     this.isContentWidthFixed = false;
//   }

//   onSidenavOpenedChange(isOpened: boolean) {
//     this.isCollapsedWidthFixed = !this.isOver;
//   }
// }
