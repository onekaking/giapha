/* Angular 2 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';

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

/* Effect */
import { MemberCreateEffect } from './member-create/member-create.effects';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(membersRoutes),
    EffectsModule.run(MemberCreateEffect)
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
