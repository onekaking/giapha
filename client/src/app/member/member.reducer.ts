/* ngrx - redux */
import { ActionReducer, Action } from '@ngrx/store';

/* Model */
import { Member } from './member.model';

/* Action */
import { MemberAction } from './member.action';

export class MemberState {
    members: Member[];
}

export const memberInitState = {
    members: []
};

export const memberReducer: ActionReducer<any> = (state: MemberState = memberInitState, action: Action) => {
    switch (action.type) {

        case MemberAction.initData:
            return Object.assign({}, state , { members: action.payload.list });

        case MemberAction.addMember:
            console.log(state, action);
            return Object.assign({}, state , {
                members: [...state.members, action.payload]
            });

        default:
            return state;
    }
};

