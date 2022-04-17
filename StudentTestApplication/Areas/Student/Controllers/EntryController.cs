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

    }
}
