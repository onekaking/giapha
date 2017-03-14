import { Routes } from '@angular/router';

/* Component */
import { MemberComponent } from './member.component';
import { MemberCreateComponent } from './member-create/member-create.component';

export const membersRoutes: Routes = [
  { path: 'members',  component: MemberComponent },
  { path: 'members/add', component: MemberCreateComponent }
];