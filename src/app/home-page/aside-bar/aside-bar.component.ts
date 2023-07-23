import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { BadgeModule } from 'primeng/badge';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'his-aside-bar',
  standalone: true,
  imports: [CommonModule,
            ButtonModule,
            RouterLink,
            OverlayPanelModule,
            BadgeModule
          ],
  templateUrl: './aside-bar.component.html',
  styleUrls: ['./aside-bar.component.css'],
  providers: [ConfirmationService]
})
export class AsideBarComponent {
  public logoUrl = 'assets/image/Logo.png';
  public homeUrl = 'assets/image/Home.png';
  public iconUrl = 'https://i.imgur.com/EKHDEib.gif';
  public menuUrl = 'assets/image/Apps.png';
  public logoutUrl = 'assets/image/Logout.png';
}
