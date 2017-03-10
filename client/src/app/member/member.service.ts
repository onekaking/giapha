/* Angular 2 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

/* Core Api */
import { BaseService } from '../core/base.service';
import { SecureApi } from '../core/secure.api';

/* Model */
import { Member } from './member.model';

@Injectable()
export class MemberService extends BaseService {
    private baseUrl: string = '/member';
    constructor(private secureApi: SecureApi) {
        super(secureApi);
    }

    getList() {
        return this.get(this.baseUrl);
    }

    addMember(member: Member) {
        return this.post(this.baseUrl, member);
    }

    addChild(parentId: number, child: Member) {
        return this.post(`${this.baseUrl}\/${parentId}`, {
            child: child
        });
    }

}
