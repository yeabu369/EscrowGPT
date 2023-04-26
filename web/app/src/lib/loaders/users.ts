import axios from 'axios';

export default async function loader(): Promise<{ users: any }> {
    const users = await axios.get('http://localhost:3001/users');

    return { users };
}