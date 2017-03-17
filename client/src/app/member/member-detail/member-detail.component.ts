import { Component, ViewEncapsulation, Input, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';

/* ngrx - redux */
import { Store } from '@ngrx/store';

/* Service */
import { MemberService } from '../member.service';

/* Model */
import { Member } from '../member.model';

/* Reducer */
import { MemberAction } from '../member.action';

/* primeNg */
import { SelectItem } from 'primeng/components/common/api';

@Component({
    selector: 'app-member-detail',
    templateUrl: 'member-detail.component.html',
    styleUrls: ['member-detail.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class MemberDetailComponent implements OnInit, OnDestroy {
    title: string = 'Detail member';
    member: Member;
    osvSubscription: any;

    constructor(
        private store: Store<any>,
        private memberAction: MemberAction,
        private route: ActivatedRoute) {
        this.osvSubscription = this.store.select(x => x.member.detailMember)
            .distinctUntilChanged()
            .subscribe(data => {
                this.member = data;
            });
    }

    ngOnInit() {
        this.route.params
            .subscribe((params: Params) => {
                this.store.dispatch(this.memberAction.getMember(params['id']));
            });
    }

    ngOnDestroy() {
        this.osvSubscription.unsubscribe();
    }
}