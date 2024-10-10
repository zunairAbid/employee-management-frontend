import React, { useEffect, useState } from 'react';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetch('https://d2yh9ltfkiyat5.cloudfront.net/api/employees/')
            .then(response => response.json())
            .then(data => setEmployees(data))
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div>
            <h2>Employee List</h2>
            <ul>
                {employees.map(employee => (
                    <li key={employee.id}>{employee.first_name} {employee.last_name}</li>
                ))}
            </ul>
        </div>
    );
};

export default EmployeeList;
