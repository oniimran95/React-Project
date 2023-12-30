import React from 'react'

export default function Users({users}) {
    return (
        <div>
            <table border= "1" style={{borderCollapse: 'collapse'}}>
                <thead>
                   <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr> 
                </thead>
                
                <tbody>
                    {users && users.map((user, i) => (
                        <tr key={i}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>                  
                        </tr>
                    ))}
                </tbody>
            </table>
      </div>
    )
}
