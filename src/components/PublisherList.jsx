import React from 'react';

const PublisherList = ({publishers , editEmployee, deleteEmployee}) => {
    return (
        <table className=''>
            <thead className='thead-light'>
                <tr>
                    <th className=''>No</th>
                    <th className=''>Name</th>
                    <th className=''>Email</th>
                    <th className=''>Published</th>
                    <th className=''>
                        Option
                    </th>
                </tr>
            </thead>
            {
                publishers.map((employee, index)=>{
                    return(
                        <tbody className='' key={employee.id}>
                            <tr>
                                <td>{employee.id + 1}</td>
                                <td>{employee.name}</td>
                                <td>{employee.email}</td>
                                <td>{employee.published}</td>
                                <td>
                                    <button className='' onClick={()=>editEmployee(employee)}>Edit</button>
                                    <button className='' onClick={()=>editEmployee(employee)}>Edit</button>\
                                </td>
                            </tr>
                        </tbody>
                    )
                })
            }
        </table>
    )
}

export default PublisherList;