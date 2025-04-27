import React, { useState, useEffect } from 'react';

function StudentForm({ student, onSubmit, buttonText }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    enrollmentNo: '',
    rollNo: '',  // New field for roll number
    course: '',
    active: true,
    dateOfBirth: ''
  });

  useEffect(() => {
    if (student) {
      // Convert dateOfBirth to yyyy-mm-dd string if it exists
      const dob = student.dateOfBirth
        ? new Date(student.dateOfBirth).toISOString().split('T')[0]
        : '';
      setFormData({ ...student, dateOfBirth: dob });
    }
  }, [student]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#34495e', padding: '20px', borderRadius: '8px' }}>
      <div className="mb-3">
        <label htmlFor="firstName" className="form-label" style={{ color: '#ecf0f1' }}>First Name</label>
        <input
          type="text"
          className="form-control"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
          style={{ borderColor: '#3498db' }}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="lastName" className="form-label" style={{ color: '#ecf0f1' }}>Last Name</label>
        <input
          type="text"
          className="form-control"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
          style={{ borderColor: '#3498db' }}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label" style={{ color: '#ecf0f1' }}>Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ borderColor: '#3498db' }}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="phone" className="form-label" style={{ color: '#ecf0f1' }}>Phone</label>
        <input
          type="text"
          className="form-control"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          style={{ borderColor: '#3498db' }}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="enrollmentNo" className="form-label" style={{ color: '#ecf0f1' }}>Enrollment Number</label>
        <input
          type="text"
          className="form-control"
          id="enrollmentNo"
          name="enrollmentNo"
          value={formData.enrollmentNo}
          onChange={handleChange}
          required
          style={{ borderColor: '#3498db' }}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="rollNo" className="form-label" style={{ color: '#ecf0f1' }}>Roll Number</label>
        <input
          type="text"
          className="form-control"
          id="rollNo"
          name="rollNo"
          value={formData.rollNo}
          onChange={handleChange}
          style={{ borderColor: '#3498db' }}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="course" className="form-label" style={{ color: '#ecf0f1' }}>Course</label>
        <input
          type="text"
          className="form-control"
          id="course"
          name="course"
          value={formData.course}
          onChange={handleChange}
          required
          style={{ borderColor: '#3498db' }}
        />
      </div>

      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="active"
          name="active"
          checked={formData.active}
          onChange={handleChange}
        />
        <label className="form-check-label" htmlFor="active" style={{ color: '#ecf0f1' }}>Active</label>
      </div>

      <div className="mb-3">
        <label htmlFor="dateOfBirth" className="form-label" style={{ color: '#ecf0f1' }}>Date of Birth</label>
        <input
          type="date"
          className="form-control"
          id="dateOfBirth"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          style={{ borderColor: '#3498db' }}
        />
      </div>

      <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#3498db', borderColor: '#2980b9', fontWeight: '600' }}>{buttonText || 'Submit'}</button>
    </form>
  );
}

export default StudentForm;

