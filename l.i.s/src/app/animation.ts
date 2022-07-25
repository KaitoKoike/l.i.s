import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { trigger,style,state,animate,transition, animation } from "@angular/animations";

export const animation_list = [trigger('fadeInOut',
                                        [state('void',style({opacity:0,transform: 'translateY(-100px)'},)),
                                         transition('void=>*',animate('{{duration}} {{delay}} easeInCubic'))
                                        ]
                                    )
                            ]
export const fadeinAnimation = [trigger('fadeinAnimation',
        [state('void',style({
            opacity:0,
            transform:'translateY(15vh)',
        })),
        transition('void=>*',animate('{{time}} ease-in-out'))
    ]
    )
];
