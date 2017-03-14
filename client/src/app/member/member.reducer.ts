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
}

export const memberInitState = {
    members: [],
    isLoading: true,
    errorMsg: null
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

        default:
            return state;
    }
};

