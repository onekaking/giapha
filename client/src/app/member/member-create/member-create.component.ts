import { Component, ViewEncapsulation, Input, OnInit } from '@angular/core';

/* ngrx - redux */
import { Store } from '@ngrx/store';

/* Service */
import { MemberService } from '../member.service';

/* Model */
import { Member } from '../member.model';

/* Reducer */
import { MemberAction } from '../member.action';

@Component({
    selector: 'app-member-create',
    templateUrl: 'member-create.component.html',
    styleUrls: ['member-create.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class MemberCreateComponent {
    @Input('member') parent: Member;
    member: Member;
    constructor(
        private memberService: MemberService,
        private store: Store<any>,
        private memberAction: MemberAction) {
            this.member = new Member();
        }

    createMember() {
        if (this.parent != null) {
            this.member.parent = this.parent.id;
        }
        // this.memberService.addMember(this.member)
        //     .subscribe(res => {
        //         this.store.dispatch(this.memberAction.addMember(res));
        //     });
        this.store.dispatch(this.memberAction.addMember(this.member));
    }
}
