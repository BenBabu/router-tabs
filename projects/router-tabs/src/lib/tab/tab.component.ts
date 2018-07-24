import { Component, Input } from '@angular/core';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'exp-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})

export class TabComponent {
  @Input() active: boolean;
  @Input() tabTitle: string;

  constructor(tabs: TabsComponent) {
    tabs.addTab(this);
  }
  getTabTitle() {
    return this.tabTitle;
  }
}
