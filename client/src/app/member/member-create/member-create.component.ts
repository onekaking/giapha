import { Component, ViewEncapsulation, Input, OnInit } from '@angular/core';

/* ngrx - redux */
import { Store } from '@ngrx/store';

/* Service */
import { MemberService } from '../member.service';
import { UploadService } from '../../shared/upload.service';

/* Model */
import { Member } from '../member.model';

/* Reducer */
import { MemberAction } from '../member.action';

/* primeNg */
import { SelectItem } from 'primeng/components/common/api';

@Component({
    selector: 'app-member-create',
    templateUrl: 'member-create.component.html',
    styleUrls: ['member-create.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class MemberCreateComponent {
    member: Member;
    title: string = 'Create Member Page';
    genders: SelectItem[];

    constructor(
        private memberService: MemberService,
        private store: Store<any>,
        private memberAction: MemberAction,
        private uploadService: UploadService) {
            this.member = new Member();
            this.genders = [];
            this.genders = [{
                label: 'Male', value: 'male'
            }, {
                label: 'Female', value: 'female'
            }, {
                label: 'Other', value: 'undefined'
            }];
        }

    createMember() {
        this.store.dispatch(this.memberAction.addMember(this.member));
    }
}
