export type User = {
    id: number;
    name: string;
    email?: string;
    roles: ("admin" | "user" | "guest")[];
};
