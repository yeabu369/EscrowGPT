import axios from 'axios';

export default async function loader(): Promise<{ users: any }> {
    const response = await axios.get('http://localhost:3001/users');
    const users = response.data;

    return { users };
}