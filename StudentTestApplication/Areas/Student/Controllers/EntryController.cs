using COMMON_ENTITIES;
using Microsoft.AspNetCore.Mvc;
using STUDENT_ENTITY;
using STUDENT_INTERFACE;

namespace StudentTestApplication.Areas.Student.Controllers
{
    [Area("Student")]
    public class EntryController : Controller
    {
        private readonly IStudent _student;
        public EntryController(IStudent student)
        {
            _student = student;
        }
        public IActionResult Index()
        {
            return View();
        }
        public JsonResponse AddStudent(ATTStudent studentsssss)
        {
            return _student.AddStudent(studentsssss);
        }

        [HttpPost]
        public JsonResponse GetAllStudents(int? ID)
        {
            return _student.GetAllStudents(ID);
        }

        [HttpPost]
        public JsonResponse UpdateStudent(ATTStudent updatedStudent)
        {
            return _student.UpdateStudent(updatedStudent);
        }
        [HttpPost]
        public JsonResponse DeleteStudent(int ID)
        {
            return _student.DeleteStudent(ID);
        }
    }
}
