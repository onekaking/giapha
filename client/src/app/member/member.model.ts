export class Member {
    id: number;
    name: string;
    parent: number;
    child: Member[];
    gender: string;
    createdAt: Date;
    updatedAt: Date;
    avatarUrl: string = 'http://localhost:1337/images/defaultavatar.png';
}
