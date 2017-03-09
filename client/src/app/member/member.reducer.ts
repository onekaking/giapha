/* ngrx - redux */
import { ActionReducer, Action } from '@ngrx/store';
import { Member } from './member.model';
import { MemberAction } from './member.action';

export interface MemberState {
    members: Member[];
}

export const memberInitState = {
    members: []
};

export const memberReducer: ActionReducer<any> = (state: MemberState = memberInitState, action: Action) => {
    switch (action.type) {

        case MemberAction.initData:
            return action.payload.list;

        case MemberAction.addMember:
            return [...state.members, action.payload];

        default:
            return state;
    }
};

