import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationMenuComponent } from './notification-menu/notification-menu.component';
import { FeatureMenuComponent } from './feature-menu/feature-menu.component';

@Component({
  selector: 'his-context-block',
  standalone: true,
  imports: [CommonModule,
            NotificationMenuComponent,
            FeatureMenuComponent,
          ],
  templateUrl: './context-block.component.html',
  styleUrls: ['./context-block.component.css']
})
export class ContextBlockComponent {
  public url = 'https://cdn-live.warthunder.com/uploads/5b/fe/53/27c72162e4a7b3a28a34e6e96f26c9779d/SSR_%E3%81%93%E3%81%AE%E6%99%82%E4%BB%A3%E3%82%92%E6%A5%BD%E3%81%97%E3%82%93%E3%81%A7_%E6%A1%9C%E5%AE%88%E6%AD%8C%E7%B9%94%2B.png';
  public welcomeText = 'Felix,歡迎回來';
}
