import { Component, OnInit } from '@angular/core';
import {MenuModule, MenuItem} from 'primeng/primeng';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  private items: MenuItem[];

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.items = [
        {
            label: 'Vendas',
            icon: 'fa-file-o',
            items: [{
                    label: 'Nova venda',
                    icon: 'fa-plus',
                    items: [
                        {label: 'Project'},
                        {label: 'Other'},
                    ]
                },
                {label: 'Open'},
                {separator: true},
                {label: 'Quit' }
            ]
        },
        {
            label: 'Edit',
            icon: 'fa-edit',
            items: [
                {label: 'Undo', icon: 'fa-mail-forward'},
                {label: 'Redo', icon: 'fa-mail-reply'}
            ]
        },
        {
            label: 'Help',
            icon: 'fa-question',
            items: [
                {
                    label: 'Contents'
                },
                {
                    label: 'Search',
                    icon: 'fa-search',
                    items: [
                        {
                            label: 'Text',
                            items: [
                                {
                                    label: 'Workspace'
                                }
                            ]
                        },
                        {
                            label: 'File'
                        }
                ]}
            ]
        },
        {
            label: 'Actions',
            icon: 'fa-gear',
            items: [
                {
                    label: 'Edit',
                    icon: 'fa-refresh',
                    items: [
                        {label: 'Save', icon: 'fa-save'},
                        {label: 'Update', icon: 'fa-save'},
                    ]
                },
                {
                    label: 'Other',
                    icon: 'fa-phone',
                    items: [
                        {label: 'Delete', icon: 'fa-minus'}
                    ]
                }
            ]
        }
    ];
}

}
