import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PingDashboardComponent} from "./stub-display/components/ping-dashboard/ping-dashboard.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/stub-display',
    pathMatch: 'full'
  },
  {
    path: 'stub-display', component: PingDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {enableTracing: false} // <-- debugging purposes only
  )],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
