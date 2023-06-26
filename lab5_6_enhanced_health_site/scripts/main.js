var unavailableDates = ["06/29/2020","07/07/2020","07/10/2020"];
const setDateFormat = "mm/dd/yy";
var selectedSpecialist = 0;

//1: John   (Monday - Friday)   (disable 0, 6)
//2: Christina   (Monday - Thursday)  (disable 0, 5, 6)
//3: Andrea   (Tuesday - Friday)    (disable 0, 1, 6)


function disableDates(date) {
    // Sunday 0
    // Monday 1
    // Tuesday 2
    // Wednesday 3
    // Thursday 4
    // Friday 5
    // Saturday 6

    
    if(selectedSpecialist === 0){  //None selected - disable all dates
        return [false];
    }
    

    if(selectedSpecialist === 1){  //John 
        if (date.getDay() === 0 || date.getDay() === 6) 
        return [false];
    }
    
    if(selectedSpecialist === 2){  //Christina
        if (date.getDay() === 0 || date.getDay() === 5 || date.getDay() === 6) 
        return [false];
    }

    if(selectedSpecialist === 3){  //Andrea
        if (date.getDay() === 0 || date.getDay() === 1 || date.getDay() === 6) 
        return [false];
    }

    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableDates.indexOf(string) === -1 ]
}

function snackbarTrigger(){
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    $('#booking-form').get(0).reset();
}


$(document).ready(function() {


    $("#dateInput" ).datepicker(
        {
            dateFormat: setDateFormat,
            // no calendar before June 26th 2021
            minDate: new Date('06/26/2021'),  
            maxDate: '+2M',
            // used to disable some dates
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDates
        }   
    );

    
    $("#specialist" ).on('change', function()
        {
            $('#dateInput').datepicker('setDate', null); //Reset the calendar if selection changes

            if(this.value == 1){   //John
                selectedSpecialist = 1;
            }

            if(this.value == 2){   //Christina
                selectedSpecialist = 2;
            }   
 
            if(this.value == 3){  //Andrea
                selectedSpecialist = 3;
            }
                
        }   
    );

    //onclick for submitting booking form successfully
    $('#booking-form').on('submit', function (e) {
        //your awesome code here
        e.preventDefault(); 
        snackbarTrigger()
        $('#bookingModal').modal('toggle');
    })

});
