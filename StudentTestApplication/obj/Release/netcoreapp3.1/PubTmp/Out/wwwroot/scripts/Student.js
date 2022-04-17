
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

            }
        })
    }

}

$(document).ready(function () {
    ko.applyBindings(new StudentViewModal());
});