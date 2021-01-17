import {animate, animation, style} from '@angular/animations';

export const enterAnimation = animation([
  style({height: 0, transform: 'translateX(100%)', opacity: 0}),
  animate('200ms', style({height: '{{startHeight}}px', opacity: 0})),
  animate('200ms', style({transform: 'translateX(0)', opacity: 1}))
]);

export const leaveAnimation = animation([
  style({transform: 'translateX(0)', height: '{{startHeight}}px', opacity: 1}),
  animate('200ms', style({transform: 'translateX(100%)', opacity: 0})),
  animate('200ms', style({height: 0, opacity: 0})),
]);

export const showStatsAnimation = animation([
  style({height: 0, opacity: 0}),
  animate('200ms', style({height: '{{startHeight}}px', opacity: 0})),
  animate('200ms', style({transform: 'translateX(0)', opacity: 1}))
]);

export const hideStatsAnimation = animation([
  style({height: '{{startHeight}}px', opacity: 1}),
  animate('200ms', style({opacity: 0})),
  animate('200ms', style({height: 0, opacity: 0})),
]);


export const showAnimation = animation([
  style({opacity: 0}),
  animate('450ms', style({opacity: 1}))
]);

export const hideAnimation = animation([
  style({opacity: 1}),
  animate('450ms', style({opacity: 0}))
]);

export const fadeInAnimation = animation([
  style({opacity: 0}),
  animate('{{miliseconds}}ms', style({opacity: 1}))
]);

export const slideAnimationIn = animation([
  style({height: 0}),
  animate('300ms', style({height: '100%'})),
]);

export const slideAnimationOut = animation([
  style({height: '100%'}),
  animate('300ms', style({height: 0})),
]);



