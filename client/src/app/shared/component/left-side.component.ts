import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

/** Action */
import { MemberAction } from '../../member/member.action';

@Component({
    selector: 'app-left-side',
    templateUrl: 'left-side.component.html'
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