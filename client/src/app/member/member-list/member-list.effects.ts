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
export class MemberListEffect {
  constructor(
    private http: Http,
    private actions$: Actions,
    private service: MemberService,
    private memberAction: MemberAction,
    private router: Router
  ) { }

}