/* Angular 2 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

/* Components */
import { MemberListComponent } from './member-list/member-list.component';
import { MemberCreateComponent} from './member-create/member-create.component';

/* Service */
import { MemberService } from './member.service';
import { SecureApi } from '../core/secure.api';

/* Action */
import { MemberAction } from './member.action';

/* Router */
import { membersRoutes } from './member.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(membersRoutes)
  ],
  declarations: [
    MemberListComponent,
    MemberCreateComponent
  ],
  exports: [ RouterModule ],
  providers: [ MemberService, SecureApi, MemberAction ]
})
export class MemberModule { }
