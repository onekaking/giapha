import { Component, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';

/** Action */
import { MemberAction } from '../../../member/member.action';

@Component({
    selector: 'app-left-side',
    templateUrl: 'left-side.component.html',
    styleUrls: ['left-side.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class LeftSideComponent {
    constructor(
        private memberAction: MemberAction,
        private store: Store<any>) {
    }

    addMember() {
        this.store.dispatch(this.memberAction.redirectToAddMember());
    }

    listMember() {
        this.store.dispatch(this.memberAction.redirectToListMember());
    }
}