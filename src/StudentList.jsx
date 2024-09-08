import React from 'react';
import { useSelector } from 'react-redux';

const StudentList = () => {
  const students = useSelector((state) => state.students);

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h2 className="text-2xl font-bold text-center mb-6">Guruhdagilar ro'yxati</h2>
      <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
        <thead>
          <tr>
            <th className="py-3 px-4 bg-gray-100 border-b border-gray-200">Ism</th>
            <th className="py-3 px-4 bg-gray-100 border-b border-gray-200">Email</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index} className="text-center">
              <td className="py-3 px-4 border-b border-gray-200">{student.name}</td>
              <td className="py-3 px-4 border-b border-gray-200">{student.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
