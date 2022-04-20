using COMMON_ENTITIES;
using STUDENT_ENTITY;
using System;

namespace STUDENT_INTERFACE
{
    public interface IStudent
    {
        //ADD STUDENT KO LAGI
        JsonResponse AddStudent(ATTStudent aTTStudent);
        //GET ALL STUDENTS
        JsonResponse GetAllStudents();

        //GET SPECIFIC STUDENTS
        JsonResponse GetAllStudents(int? ID);

        //Update ko lagi
        JsonResponse UpdateStudent(ATTStudent updatedStudent);
        //Delete ko laig
        JsonResponse DeleteStudent(int ID);

    }
}
