import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { trigger,style,state,animate,transition, animation } from "@angular/animations";


export const fadeInOutAnimation = [trigger('fadeInOutAnimation',
        [state('opened',style({
            opacity:0.4
        })),
        state('hidden',style({
            opacity:1
        })),
        transition('opened=>hidden',animate('0.1s ease-in-out')),
        transition('hidden=>opened',animate('0.1s ease-in-out'))
    ]
    )
];
export const fadeinAnimation = [trigger('fadeinAnimation',
        [state('void',style({
            opacity:0,
            transform:'translateY(15vh)',
        })),
        transition('void=>*',animate('{{time}} ease-in-out'))
    ]
    )
];