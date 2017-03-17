import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

/** rxjs operator */
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

/** Action */
import { MemberAction } from './member.action';

/** Service */
import { MemberService } from './member.service';

@Injectable()
export class MemberEffect {
    constructor(
    private actions$: Actions,
    private memberAction: MemberAction,
    private router: Router,
    private memberService: MemberService) { }

    @Effect() createMember$ = this.actions$
        .ofType(MemberAction.addMember)
        .map(action => action.payload)
        .switchMap(payload => this.memberService.addMember(payload.member)
            // If successful, dispatch success action with result
            .map(res => this.memberAction.addMemberSuccess(res))
            // If request fails, dispatch failed action
            .catch((err) => Observable.of(this.memberAction.addMemberFail(err)))
        );

    @Effect() redirectToAddMemberPage$ = this.actions$
        .ofType(MemberAction.redirectToAddMember)
        .map(action => action.payload)
        .do(payload => {
            this.router.navigate([payload.url]);
        });

    @Effect() redirectToListMemberPageWhenCreateMember$ = this.actions$
        .ofType(MemberAction.addMemberSuccses)
        .map(action => this.memberAction.redirectToListMember());

    @Effect() redirectToListMemberPage$ = this.actions$
        .ofType(MemberAction.redirectToListMember)
        .map(action => action.payload)
        .do(payload => {
            this.router.navigate([payload.url]);
        })
        .switchMap((payload) => this.memberService.getList()
            .map((response) => this.memberAction.initData(response))
            .catch((error) => Observable.of(this.memberAction.serviceFail(error)))
        );

    @Effect() getDetailMember$ = this.actions$
        .ofType(MemberAction.getMember)
        .map(action => action.payload)
        .switchMap(payload => this.memberService.getMemberById(payload.id)
            // If successful, dispatch success action with result
            .map(res => this.memberAction.getMemberSuccess(res))
            // If request fails, dispatch failed action
            .catch((err) => Observable.of(this.memberAction.serviceFail(err)))
        );
}