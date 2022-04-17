using COMMON_ENTITIES;
using STUDENT_ENTITY;
using System;

namespace STUDENT_INTERFACE
{
    public interface IStudent
    {
        JsonResponse AddStudent(ATTStudent aTTStudent);
    }
}
