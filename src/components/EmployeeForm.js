import React, { useState } from 'react';

const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    department: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('https://d2yh9ltfkiyat5.cloudfront.net/api/employees/add/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    console.log('Employee added:', data);
    // Optionally, reset the form or show a success message
    setFormData({
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      department: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="employee-form">
      <h2>Add Employee</h2>
      <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} placeholder="First Name" required />
      <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} placeholder="Last Name" required />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" />
      <input type="text" name="department" value={formData.department} onChange={handleChange} placeholder="Department" />
      <button type="submit">Add Employee</button>
    </form>
  );
};

export default EmployeeForm;
