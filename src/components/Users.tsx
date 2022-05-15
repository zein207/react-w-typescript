import { useEffect, useState } from 'react';
import { reqResApi } from '../api/reqRes';
import { ReqResList, User } from '../interfaces/reqRes';

export const Users = () => {

    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {

        reqResApi.get<ReqResList>('/users')
            .then( resp => {
                setUsers(resp.data.data)
            })
            .catch( err => console.log( err ))

    }, [])

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
                className='btn btn-primary'
            >
                Next
            </button>

        </div>
    )
}
