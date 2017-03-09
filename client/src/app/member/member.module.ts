/** Angular 2 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/** Components */
import { MemberListComponent } from './member-list/member-list.component';
import { MemberCreateComponent} from './member-create/member-create.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    MemberListComponent,
    MemberCreateComponent
  ],
  exports: [MemberListComponent]
})
export class MemberModule { }
