import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideBarComponent } from './aside-bar/aside-bar.component';
import { ContextBlockComponent } from './context-block/context-block.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'his-home-page',
  standalone: true,
  imports: [CommonModule,
            AsideBarComponent,
            ContextBlockComponent,
            RouterOutlet
          ],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

}
