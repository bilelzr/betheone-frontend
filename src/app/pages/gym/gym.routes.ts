import { Routes } from '@angular/router';
import { GymDashboardComponent } from './dashboard/dashboard.component';
import { MembersListComponent } from './members/members-list.component';
import { MemberAddComponent } from './members/member-add.component';
import { MemberEditComponent } from './members/member-edit.component';
import { MembershipsListComponent } from './memberships/memberships-list.component';
import { MembershipAddComponent } from './memberships/membership-add.component';
import { MembershipEditComponent } from './memberships/membership-edit.component';

export const GymRoutes: Routes = [
  {
    path: 'dashboard',
    component: GymDashboardComponent,
  },
  {
    path: 'members',
    component: MembersListComponent,
  },
  {
    path: 'members/add',
    component: MemberAddComponent,
  },
  {
    path: 'members/edit/:id',
    component: MemberEditComponent,
  },
  {
    path: 'memberships',
    component: MembershipsListComponent,
  },
  {
    path: 'memberships/add',
    component: MembershipAddComponent,
  },
  {
    path: 'memberships/edit/:id',
    component: MembershipEditComponent,
  },
];
