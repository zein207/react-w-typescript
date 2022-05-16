import { User } from '../interfaces/reqRes';
import { useUsers } from '../hooks/useUsers';

export const Users = () => {

    const { users, nextPage, previousPage } = useUsers();

    const renderItem = ( user: User ) => {

        return (
            <tr key={ user.id.toString() }>
                <td>
                    <img
                        src={ user.avatar }
                        alt={ user.first_name }
                        style={{
                            width: 35, borderRadius: 100
                        }}
                    />
                </td>
                <td>{ user.first_name }</td>
                <td>{ user.email }</td>
            </tr>
        )
    };

    return (
        <div>

            <h3>Users:</h3>

            <table className="table">

                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        users.map( user => renderItem(user) )
                    }
                </tbody>

            </table>

            <button
                onClick={ previousPage }
                className='btn btn-primary mr-3'
            >
                Previous
            </button>

            <button
                onClick={ nextPage }
                className='btn btn-primary'
            >
                Next
            </button>

        </div>
    )
}
