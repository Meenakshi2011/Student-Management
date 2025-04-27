import React from 'react'; 
import { Link } from 'react-router-dom';

function StudentItem({ student, onDelete }) {
  return (
    <tr>
      <td>{student.firstName}</td>
      <td>{student.lastName}</td>
      <td>{student.email}</td>
      <td>{student.phone}</td>
      <td>{student.enrollmentNo}</td>
      <td>{student.rollNo}</td> {/* Added roll number field */}
      <td>{student.course}</td>
      <td>{student.active ? 'Yes' : 'No'}</td>
      <td>{student.dateOfBirth ? new Date(student.dateOfBirth).toLocaleDateString() : ''}</td>
      <td>
        <Link to={`/edit-student/${student._id}`} className="btn btn-sm btn-pink text-white me-2">
          Edit
        </Link>
        <button 
          onClick={() => onDelete(student._id)} 
          className="btn btn-sm btn-pink text-white"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default StudentItem;

