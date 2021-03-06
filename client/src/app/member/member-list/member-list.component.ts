import { Component, ViewEncapsulation, OnDestroy } from '@angular/core';

/* rxjs */
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';

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
    styleUrls: ['member-list.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class MemberListComponent implements OnDestroy {
    private memberSubscription: Subscription;
    members: Member[] = [];
    title: string = 'List Members Page';

    constructor(
        private memberService: MemberService,
        private store: Store<any>,
        private memberAction: MemberAction) {
            this.memberSubscription = this.store.select(x => x.member.members)
                .distinctUntilChanged()
                .subscribe(data => {
                    this.members = data;
                });
        }

    ngOnDestroy() {
        this.memberSubscription.unsubscribe();
    }
}
