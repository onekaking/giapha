/* ngrx - redux */
import { ActionReducer, Action } from '@ngrx/store';

/* Model */
import { Member } from './member.model';

/* Action */
import { MemberAction } from './member.action';

export class MemberState {
    members: Member[];
    isLoading: boolean;
    errorMsg: string;
    detailMember: Member;
}

const memberInitState = {
    members: [],
    isLoading: true,
    errorMsg: null,
    detailMember: new Member()
};

export const memberReducer: ActionReducer<any> = (state: MemberState = memberInitState, action: Action) => {
    switch (action.type) {

        case MemberAction.initData:
            return Object.assign({}, state, {
                members: action.payload.members
            });

        case MemberAction.addMember:
            return Object.assign({}, state, {
                isLoading: action.payload.isLoading
            });

        case MemberAction.addMemberSuccses:
            return Object.assign({}, state, {
                members: [...state.members, action.payload.member],
                isLoading: action.payload.isLoading
            });

        case MemberAction.addMemberFail:
            return Object.assign({}, state, {
                errorMsg: action.payload.errorMsg,
                isLoading: action.payload.isLoading
            });

        case MemberAction.serviceFail:
            return Object.assign({}, state, {
                errorMsg: action.payload.errorMsg
            });

        case MemberAction.getMemberSuccess:
            return Object.assign({}, state, {
                detailMember: action.payload.member
            });

        default:
            return state;
    }
};

