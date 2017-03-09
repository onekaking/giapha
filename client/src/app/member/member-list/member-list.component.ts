import { Component, ViewEncapsulation, OnInit } from '@angular/core';

/* ngrx - redux */
import { Store } from '@ngrx/store';

/* Service */
import { MemberService } from '../member.service';

/* Model */
import { Member } from '../member.model';

/* Reducer */
import { MemberAction } from '../member.action';

@Component({
    selector: 'app-member-list',
    templateUrl: 'member-list.component.html',
    encapsulation: ViewEncapsulation.None
})

export class MemberListComponent implements OnInit {
    members: Member[] = [];
    constructor(
        private memberService: MemberService,
        private store: Store<any>,
        private memberAction: MemberAction) {}

    ngOnInit() {
        this.memberService.getList()
            .subscribe(res => {
                this.store.dispatch(this.memberAction.initData(res));
                console.log(res);
            });
    }
}
