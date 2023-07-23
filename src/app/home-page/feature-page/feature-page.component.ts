import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'his-feature-page',
  standalone: true,
  imports: [CommonModule,
            ButtonModule,
            InputTextModule,
            RouterLink
          ],
  templateUrl: './feature-page.component.html',
  styleUrls: ['./feature-page.component.css']
})
export class FeaturePageComponent {

}
