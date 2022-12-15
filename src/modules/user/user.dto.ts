import { Operator, Plans } from "@prisma/client";

export type UserDTO = {
    id?: string;
    phoneNumber: string;
    operator: Operator;
    region: string;
    plan: Plans;
    created_at?: string | Date;
    update_at?: string | Date;
}
