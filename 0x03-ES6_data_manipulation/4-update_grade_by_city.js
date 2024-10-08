export default function updateStudentGradeByCity(students, city, newGrades) {
  if (Array.isArray(students)) {
    return students
      .filter((student) => student.location === city)
      .map((student) => {
        const obj = newGrades
          .filter((grade) => grade.studentId === student.id)
          .pop();
        return {
          id: student.id,
          firstName: student.firstName,
          location: student.location,
          grade: obj !== undefined ? obj.grade : 'N/A',
        };
      });
  }
  return 0;
}
