/* ngrx - redux */
import { ActionReducer, Action } from '@ngrx/store';

/* Model */
import { Member } from './member.model';

/* Action */
import { MemberAction } from './member.action';

export class MemberState {
    members: Member[];
    isLoading: boolean;
}

export const memberInitState = {
    members: [],
    isLoading: true
};

export const memberReducer: ActionReducer<any> = (state: MemberState = memberInitState, action: Action) => {
    switch (action.type) {

        case MemberAction.initData:
            return Object.assign({}, state , { members: action.payload.members });

        case MemberAction.addMember:
            console.log(state, action);
            return Object.assign({}, state , {
                members: [...state.members, action.payload.member]
            });

        case MemberAction.setLoading:
            return Object.assign({}, state, {
                isLoading: true
            });

        default:
            return state;
    }
};

