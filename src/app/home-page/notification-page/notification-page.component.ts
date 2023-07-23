import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { AsideBarComponent } from '../aside-bar/aside-bar.component';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'his-notification-page',
  standalone: true,
  imports: [CommonModule,
            ButtonModule,
            AsideBarComponent,
            InputTextModule,
            TableModule,
            RouterLink
          ],
  templateUrl: './notification-page.component.html',
  styleUrls: ['./notification-page.component.css']
})
export class NotificationPageComponent {
  public notifications: any = [];

  ngOnInit(): void {
    this.notifications = [
      {
        id: "1",
        date: "2023-07-05 11:00",
        context: "您目前有22張簽核表單需簽核",
      },
      {
        id: "2",
        date: "2023-07-06 09:00",
        context: "您目前有14張簽核表單需簽核",
      },
      {
        id: "3",
        date: "2023-07-05 11:00",
        context: "您目前有22張簽核表單需簽核",
      },
      {
        id: "4",
        date: "2023-07-05 11:00",
        context: "您目前有22張簽核表單需簽核",
      },
      {
        id: "5",
        date: "2023-07-05 11:00",
        context: "您目前有22張簽核表單需簽核",
      },
      {
        id: "6",
        date: "2023-07-05 11:00",
        context: "您目前有22張簽核表單需簽核",
      },
      {
        id: "7",
        date: "2023-07-05 11:00",
        context: "您目前有22張簽核表單需簽核",
      }
    ]
  }
}
