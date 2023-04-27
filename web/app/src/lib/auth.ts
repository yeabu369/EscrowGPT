import localforage from "localforage";

export async function getCurrentUser () {
    const user = await localforage.getItem('user');

    if (user) {
        return JSON.parse(user as string);
    }

    return null
}