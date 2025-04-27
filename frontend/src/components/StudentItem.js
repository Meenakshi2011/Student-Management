import React from 'react'; 
import { Link } from 'react-router-dom';

function StudentItem({ student, onDelete }) {
  return (
    <tr style={{ backgroundColor: '#2c3e50', color: '#ecf0f1' }}>
      <td>{student.firstName}</td>
      <td>{student.lastName}</td>
      <td>{student.email}</td>
      <td>{student.phone}</td>
      <td>{student.enrollmentNo}</td>
      <td>{student.rollNo}</td> {/* Added roll number */}
      <td>{student.course}</td>
      <td>{student.active ? 'Yes' : 'No'}</td>
      <td>{student.dateOfBirth ? new Date(student.dateOfBirth).toLocaleDateString() : ''}</td>
      <td>
        <Link 
          to={`/edit-student/${student._id}`} 
          className="btn btn-sm"
          style={{ backgroundColor: '#3498db', color: '#fff', borderColor: '#2980b9' }}
        >
          Edit
        </Link>
        <button 
          onClick={() => onDelete(student._id)} 
          className="btn btn-sm"
          style={{ backgroundColor: '#e74c3c', color: '#fff', borderColor: '#c0392b' }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default StudentItem;

