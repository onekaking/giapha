/* Angular 2 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

/* Third pary */
import { MomentModule } from 'angular2-moment';

/* Components */
import { MemberComponent } from './member.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberCreateComponent} from './member-create/member-create.component';

/* Service */
import { MemberService } from './member.service';
import { SecureApi } from '../core/secure.api';

/* Action */
import { MemberAction } from './member.action';

/* Router */
import { membersRoutes } from './member.routing';

/* primeNg components/dropdown/dropdown*/
import { DropdownModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MomentModule,
    DropdownModule,
    RouterModule.forChild(membersRoutes)
  ],
  declarations: [
    MemberComponent,
    MemberListComponent,
    MemberCreateComponent
  ],
  exports: [ RouterModule ],
  providers: [ MemberService, SecureApi, MemberAction ]
})
export class MemberModule { }
