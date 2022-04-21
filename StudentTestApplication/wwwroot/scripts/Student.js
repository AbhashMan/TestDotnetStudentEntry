﻿function Student(data) {
    var self = this;
    if (data != undefined) {
        self.StudentID = ko.observable(data.id);
        self.StudentName = ko.observable(data.studentName);
        self.StudentAge = ko.observable(data.studentAge);
        self.StudentClass = ko.observable(data.studentClass);
        self.StudentRoll = ko.observable(data.studentRoll);
    }
}

var StudentViewModal = function () {

    self.StudentID = ko.observable();
    self.StudentName = ko.observable();
    self.StudentAge = ko.observable();
    self.StudentRoll = ko.observable();
    self.StudentClass = ko.observable();


    self.StudentIDModal = ko.observable();
    self.StudentNameModal = ko.observable();
    self.StudentAgeModal = ko.observable();
    self.StudentRollModal = ko.observable();
    self.StudentClassModal = ko.observable();

    self.StudentLists = ko.observableArray([]);

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


    self.GetAllStudents = function () {
        $.ajax({
            url: "/Student/Entry/GetAllStudents",
            data: { },
            type: "POST",
            dataType: "json",
            success: function (result) {
                if (result.isSuccess) {
                    var mappedTasks = $.map(result.responseData, function (item) {
                        return new Student(item)
                    })
                    self.StudentLists(mappedTasks)
                } else {
                    alert(result.message)
                }

            },
            error: function (error) {
                alert(error.message)
            }
        })
    }
    self.GetAllStudents()

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
    self.GetStudentInformationFromTable = function (data) {
        self.StudentIDModal(data.StudentID())
        self.StudentNameModal(data.StudentName())
        self.StudentAgeModal(data.StudentAge())
        self.StudentClassModal(data.StudentClass())
        self.StudentRollModal(data.StudentRoll())
        $('#studentModal').modal('show');

    }


    //$('#studentModal').modal('hide')

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