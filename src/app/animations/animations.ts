import { animate, AnimationEntryMetadata, state, style, transition, trigger } from '@angular/core';

export const slideInDownAnimation: AnimationEntryMetadata =
    trigger('routeAnimation', [
        state('*',
            style({
                opacity: 1,
                transform: 'translateX(0)'
            })
        ),
        transition(':enter', [
            animate('0.2s ease-in',style({
                opacity: 0,
                transform: 'translateX(-100%)'
            }))
        ]),
        transition(':leave', [
            animate('0.5s ease-out',style({
                opacity: 0,
                transform: 'translateY(100%)'
            }))
        ])
    ]);