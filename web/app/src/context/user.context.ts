import { Context, createContext } from 'react';
import { User } from '@prisma/client';

export type UserContextInterface = User | null;

export const UserContext: Context<UserContextInterface> = createContext<UserContextInterface>(null);

export default UserContext;