import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectComponent } from './project/project.component';
import { UserComponent } from './user/user.component';


const appRoutes: Routes = [
    { path: 'project', component: ProjectComponent },
    { path: 'user', component: UserComponent },
    { path: '', redirectTo: '/project', pathMatch: 'full' }

    // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    declarations: [
        ProjectComponent,
        UserComponent
    ],
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }