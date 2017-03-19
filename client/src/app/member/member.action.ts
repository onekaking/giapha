/* ngrx- redux */
import { Action } from '@ngrx/store';

/* Model */
import { Member } from './member.model';

export class MemberAction {
    static initData = '[Member] Init Data';
    static addMember = '[Member] Add member';
    static addMemberSuccses = '[Member] Add success';
    static addMemberFail = '[Member] Add fail';
    static redirectToAddMember = '[Member] Redirect to add member page';
    static redirectToListMember = '[Member] Redirect to list member page';
    static serviceFail = '[Member] Service Fail';
    static getMember = '[Member] Get member';
    static getMemberSuccess = '[Member] Get member success';

    initData(members: Member[]): Action {
        return {
            type: MemberAction.initData,
            payload: {
                members
            }
        };
    }

    addMember(member: Member): Action {
        return {
            type: MemberAction.addMember,
            payload: {
                member,
                isLoading: true
            }
        };
    }

    addMemberSuccess(member: Member): Action {
        return {
            type: MemberAction.addMemberSuccses,
            payload: {
                member,
                isLoading: false
            }
        };
    }

    addMemberFail(errorMsg): Action {
        return {
            type: MemberAction.addMemberFail,
            payload: {
                errorMsg: errorMsg,
                isLoading: false
            }
        };
    }

    redirectToAddMember(): Action {
        return {
            type: MemberAction.redirectToAddMember,
            payload: {
                url: 'members/add'
            }
        };
    }

    redirectToListMember(): Action {
        return {
            type: MemberAction.redirectToListMember,
            payload: {
                url: 'members/list'
            }
        };
    }

    serviceFail(error): Action {
        return {
            type: MemberAction.serviceFail,
            payload: {
                errorMsg: error
            }
        };
    }

    getMember(id: number): Action {
        return {
            type: MemberAction.getMember,
            payload: {
                id
            }
        };
    }

    getMemberSuccess(member: Member) {
        return {
            type: MemberAction.getMemberSuccess,
            payload: {
                member: member
            }
        };
    }
}
