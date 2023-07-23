import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeNode } from 'primeng/api';
import { OrganizationChartModule } from 'primeng/organizationchart';

@Component({
  selector: 'his-scored',
  standalone: true,
  imports: [CommonModule,
            OrganizationChartModule
          ],
  templateUrl: './scored.component.html',
  styleUrls: ['./scored.component.css']
})
export class ScoredComponent {
  data: TreeNode[] = [
    {
        label: 'AppComponent',
        expanded: true,
        children: [
            {
                label: 'LoginComponent',
            },
            {
                label: 'HomePageComponent',
                expanded: true,
                children: [
                    {
                        label: 'AsideBarComponent'
                    },
                    {
                        label: 'ContextBlockComponent',
                        expanded: true,
                        children: [
                          {
                            label: 'BlockHeaderComponent'
                          },
                          {
                            label: 'FeatureMenuComponent'
                          },
                          {
                            label: 'NotificationMenuComponent'
                          }
                        ]
                    }
                ]
            }
        ]
    }
];
}
