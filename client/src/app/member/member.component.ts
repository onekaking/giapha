import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const CurrentMember = gql`
    query CurrentMember {
        currentMember {
            name
            child
        }
    }
`;

@Component({
    selector: 'app-member',
    templateUrl: 'member.component.html'
})
export class MemberComponent implements OnInit {

    constructor(private apollo: Apollo) {}

    ngOnInit() {
        this.apollo.watchQuery({
            query: CurrentMember
        }).subscribe(({data}) => {
            console.log(data);
        });
    }
}
