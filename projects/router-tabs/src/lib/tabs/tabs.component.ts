import { Component, Input, EventEmitter, Output } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'exp-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})

export class TabsComponent {
  @Input() disabled: boolean;
  @Output() currentTabChange = new EventEmitter<TabComponent>();

  ifTabSelected: boolean = false;
  tabs: TabComponent[] = [];

  addTab(tab: TabComponent) {
    this.tabs.push(tab);
  }

  selectTab(tab: TabComponent) {
    this.tabs.forEach(tab => {
      tab.active = false;
    });
    tab.active = true;
    this.currentTabChange.emit(tab);
  }

  isDisabled() {
    if (this.disabled) {
      return "block";
    } else return "none";
  }

  ngAfterViewInit() {
    this.tabs.forEach(tab => {
      if (tab.active) {
        this.selectTab(tab);
        this.ifTabSelected = true;
      }
    });
    if (!this.ifTabSelected) {
      this.selectTab(this.tabs[0]);
    }
  }
}
