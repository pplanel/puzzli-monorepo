import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HealthcheckComponent } from 'src/libs/healthcheck/healthcheck.component';

const routes: Routes = [{
  path: "healthcheck",
  component: HealthcheckComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
