// =============================
// Email: rito@entuit.co.za
// www.entuit.co.za
// =============================

import { Permission } from './permission';


export class Role {

    constructor(name?: string, description?: string, permissions?: Permission[]) {

        this.name = name;
        this.description = description;
        this.permissions = permissions;
    }

    public id: string;
    public name: string;
    public description: string;
    public usersCount: number;
    public permissions: Permission[];
}
