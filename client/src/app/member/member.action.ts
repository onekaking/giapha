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

    static addMember = '[Member] Add';
    addMember(member: Member): Action {
        return {
            type: MemberAction.addMember,
            payload: {
                member,
                isLoading: true
            }
        };
    }

    static addMemberSuccses = '[Member] Add success';
    addMemberSuccess(member: Member): Action {
        return {
            type: MemberAction.addMemberSuccses,
            payload: {
                member,
                isLoading: false
            }
        };
    }

    static addMemberFail = '[Member] Add fail';
    addMemberFail(errorMsg): Action {
        return {
            type: MemberAction.addMemberFail,
            payload: {
                errorMsg: errorMsg,
                isLoading: false
            }
        }
    }
}
