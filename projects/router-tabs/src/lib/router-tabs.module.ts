import { NgModule } from '@angular/core';
import { RouterTabsComponent } from './router-tabs.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tab/tab.component';

@NgModule({
  imports: [
  ],
  declarations: [RouterTabsComponent, TabsComponent, TabComponent],
  exports: [RouterTabsComponent]
})
export class RouterTabsModule { }
