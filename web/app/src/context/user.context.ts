import { Context, createContext } from 'react';
import { User } from '@prisma/client';
import localforage from 'localforage';

export interface UserContextInterface {
    user: User | null;
}

export const UserContext: Context<UserContextInterface> = createContext<UserContextInterface>({
    user: localforage.getItem('user') as unknown as User | null
});

export default UserContext;