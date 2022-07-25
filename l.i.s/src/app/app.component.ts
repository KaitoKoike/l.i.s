import { Component, OnInit } from '@angular/core';
import { animation_list } from './animation';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[animation_list]
})
export class AppComponent {
  title = 'l.i.s';
}
