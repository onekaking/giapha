import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

/* rxjs operator */
import 'rxjs/add/operator/map'; // imports just map
import 'rxjs/add/operator/switchMap'; // just switchMap
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';

/* Action */
import { MemberAction } from '../member.action';

/* Service */
import { MemberService } from '../member.service';

@Injectable()
export class MemberCreateEffect {
  constructor(
    private http: Http,
    private actions$: Actions,
    private service: MemberService,
    private memberAction: MemberAction,
    private router: Router
  ) { }

@Effect() createMember$ = this.actions$
    .ofType(MemberAction.addMember)
    .switchMap(action => this.service.addMember(action.payload.member)
    // If successful, dispatch success action with result
    .map(res => this.memberAction.addMemberSuccess(action.payload.member))
    // If request fails, dispatch failed action
    .catch((err) => Observable.of(this.memberAction.addMemberFail(err)))
    );

@Effect() createMemberSucess$ = this.actions$
    .ofType(MemberAction.addMemberSuccses)
    .do(() => {
        this.router.navigate(['/members']);
    });
}