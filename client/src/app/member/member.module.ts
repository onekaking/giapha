/* Angular 2 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/* Components */
import { MemberListComponent } from './member-list/member-list.component';
import { MemberCreateComponent} from './member-create/member-create.component';

/* Service */
import { MemberService } from './member.service';
import { SecureApi } from '../core/secure.api';

/* Action */
import { MemberAction } from './member.action';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    MemberListComponent,
    MemberCreateComponent
  ],
  exports: [ MemberListComponent ],
  providers: [ MemberService, SecureApi, MemberAction ]
})
export class MemberModule { }
