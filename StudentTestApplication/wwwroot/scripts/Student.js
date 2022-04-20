
var StudentViewModal = function () {

    self.StudentID = ko.observable();
    self.StudentName = ko.observable();
    self.StudentAge = ko.observable();
    self.StudentRoll = ko.observable();
    self.StudentClass = ko.observable();


    self.SaveStudent = function () {
        var Student = {
            "ID": self.StudentID(),
            "StudentName": self.StudentName(),
            "StudentAge": self.StudentAge(),
            "StudentClass": self.StudentClass(),
            "StudentRoll": self.StudentRoll()
        }
        $.ajax({
            url: "/Student/Entry/AddStudent",
            data: {"studentsssss": Student},
            type: "POST",
            dataType: "json",
            success: function(result) {
                alert(result.message)
                //if (result.isSuccess)
                //    alert('success', result.message)
                //else
                //    alert('error',result.message)
            },
            error: function(error){

            }, complete: function () {
                self.ClearControls()
            }
        })
    }

    //tyo observable change hunu
    self.StudentID.subscribe(function () {
        $.ajax({
            url: "/Student/Entry/GetAllStudents",
            data: { "ID": self.StudentID()},
            type: "POST",
            dataType: "json",
            success: function (result) {
                if (result.isSuccess) {
                    self.StudentName(result.responseData.studentName)
                    self.StudentAge(result.responseData.studentAge)
                    self.StudentClass(result.responseData.studentClass)
                    self.StudentRoll(result.responseData.studentRoll)
                } else {
                    alert(result.message)
                    self.ClearControls()
                }
                
            },
            error: function (error) {
                alert(error.message)
                self.ClearControls()
            }
        })
    });


    self.UpdateStudent = function () {
        var Student = {
            "ID": self.StudentID(),
            "StudentName": self.StudentName(),
            "StudentAge": self.StudentAge(),
            "StudentClass": self.StudentClass(),
            "StudentRoll": self.StudentRoll()
        }
        $.ajax({
            url: "/Student/Entry/UpdateStudent",
            data: { "updatedStudent":Student },
            type: "POST",
            dataType: "json",
            success: function (result) {
                if (result.isSuccess) {
                    //sth
                } else{
                    //sth
                }
                alert(result.message)
            },
            error: function (error) {
                alert(error.message)
            }, complete: function () {
                self.ClearControls()
            }
        })
    }
    self.DeleteStudent = function () {
       
        $.ajax({
            url: "/Student/Entry/DeleteStudent",
            data: { "ID": self.StudentID()},
            type: "POST",
            dataType: "json",
            success: function (result) {
                if (result.isSuccess) {
                    //sth
                } else {
                    //sth
                }
                alert(result.message)
            },
            error: function (error) {
                alert(error.message)
            }, complete: function () {
                self.ClearControls()
            }
        })
    }

    self.ClearControls = () => {
        self.StudentName('')
        self.StudentID('')
        self.StudentAge('')
        self.StudentRoll('')
        self.StudentClass('')
     
    }

}

$(document).ready(function () {
    ko.applyBindings(new StudentViewModal());
});