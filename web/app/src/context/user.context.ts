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

// q: How to use this context?
// a: See web/app/src/components/Navbar.tsx
// import { useContext } from 'react';
// import UserContext from '../context/user.context';
//
// const { user } = useContext(UserContext);
// console.log(user);

// q: How to update this context?
// a: See web/app/src/components/Navbar.tsx
// import { useContext } from 'react';
// import UserContext from '../context/user.context';
//
// const { user } = useContext(UserContext);
// console.log(user);
//
// const { setUser } = useContext(UserContext);
// setUser({ id: 1, name: 'John Doe' });
// console.log(user);

// q: Do I have to wrap the navbar in this context for me to use it?