/* ngrx- redux */
import { Action } from '@ngrx/store';

/* Model */
import { Member } from './member.model';

export class MemberAction {
    static initData = '[Member] Init Data';
    initData(members: Member[]): Action {
        return {
            type: MemberAction.initData,
            payload: {
                members
            }
        };
    }

    static addMember = '[Member] Add Member';
    addMember(member: Member): Action {
        return {
            type: MemberAction.addMember,
            payload: {
                member
            }
        };
    }

    static setLoading = '[Member] Set Loading';
    setLoading(): Action {
        return {
            type: MemberAction.setLoading
        };
    }

}
