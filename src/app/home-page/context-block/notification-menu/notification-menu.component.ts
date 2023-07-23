import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'his-notification-menu',
  standalone: true,
  imports: [CommonModule,
            CardModule,
            ButtonModule,
            TableModule,
            RouterLink
          ],
  templateUrl: './notification-menu.component.html',
  styleUrls: ['./notification-menu.component.css']
})
export class NotificationMenuComponent implements OnInit{
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
