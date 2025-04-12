import { useEffect, useState } from 'react';

interface User {
    id: number;
    name: string;
    email: string;
}

const UserListFromServer = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true);
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!response.ok) throw new Error('Failed to fetch users');
                const data: User[] = await response.json();
                setUsers(data);
            } catch (err: any) {
                setError(err.message || 'Unknown error');
            } finally {
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);

    return (
        <section className="data-section">
            <h2 className="subtitle">User Data from Server</h2>
            {loading && <p className="loading">Loading users...</p>}
            {error && <p className="error">{error}</p>}
            {!loading && !error && (
                <ul className="user-list">
                    {users.map(user => (
                        <li key={user.id}><strong>{user.name}</strong> — {user.email}</li>
                    ))}
                </ul>
            )}
        </section>
    );
};

export default UserListFromServer;