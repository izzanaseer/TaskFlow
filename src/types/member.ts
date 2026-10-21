export type MemberRole = 'admin' | 'manager' | 'member';

export interface Member {
    id: string;
    name: string;
    email: string; 
    role: MemberRole;
    avatarUrl?: string;
}