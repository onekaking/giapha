import { Routes } from '@angular/router';

/* Component */
import { MemberListComponent } from './member-list/member-list.component';
import { MemberCreateComponent } from './member-create/member-create.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';

export const membersRoutes: Routes = [
  { path: 'members/list',  component: MemberListComponent },
  { path: 'members/add', component: MemberCreateComponent },
  { path: 'members/:id', component: MemberDetailComponent }
];