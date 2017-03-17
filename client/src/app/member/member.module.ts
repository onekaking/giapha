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
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { UploadAvatarComponent } from '../shared/component/upload-avatar/upload-avatar.component';

/* Service */
import { MemberService } from './member.service';
import { SecureApi } from '../core/secure.api';
import { UploadService } from '../shared/upload.service';

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
    MemberCreateComponent,
    MemberDetailComponent,
    UploadAvatarComponent
  ],
  exports: [ RouterModule ],
  providers: [ MemberService, UploadService, SecureApi, MemberAction ]
})
export class MemberModule { }
