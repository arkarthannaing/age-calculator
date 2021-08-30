$(document).ready(function(){

	dayLoop();
	monthLoop();
	yearLoop();

	function dayLoop(){

		var select = $('<select>');

		for (var i = 1; i <= 31; i++) {
			select.append($('<option ></option>').val(i).html(i));
		}

		$("#day").append(select.html());
	}


	function monthLoop(){

		var select = $('<select>');

		for (var i = 1; i <= 12; i++) {
			select.append($('<option ></option>').val(i).html(i));
		}

		$("#month").append(select.html());
	}


	function yearLoop(){

		var select = $('<select>');

		for (var i = 2020; i >= 1980; i--) {
			select.append($('<option ></option>').val(i).html(i));
		}

		$("#year").append(select.html());
	}

	function validate(day,month,year)
	{
		if ( day == '' || month == '' || year == ''){
			$(".modal-title").html(" Error !!! ");
			$(".modal-body").html(" Please Choose Your Birthday Correctly ! ");
			$('#myModal').modal('show');
			return false;
		}

			return true;
	}

	$("#form").submit(function(e){
	    
	    var day = $("#day").val();
	    var month = $("#month").val();
	    var year = $("#year").val();

	    if(validate(day,month,year)){
	    
			getAge(day,month,year);

		}

		function getAge(day,month,year) {
		    var today = new Date();
		    var DOB = new Date(`${month}/${day}/${year}`);
		    var totalMonths = (today.getFullYear() - DOB.getFullYear()) * 12 + today.getMonth() - DOB.getMonth();
		    totalMonths += today.getDay() < DOB.getDay() ? -1 : 0;
		    var years = today.getFullYear() - DOB.getFullYear();
		    if (DOB.getMonth() > today.getMonth())
		        years = years - 1;
		    else if (DOB.getMonth() === today.getMonth())
		        if (DOB.getDate() > today.getDate())
		            years = years - 1;

		    var days;
		    var months;

		    if (DOB.getDate() > today.getDate()) {
		        months = (totalMonths % 12);
		        if (months == 0)
		            months = 11;
		        var x = today.getMonth();
		        switch (x) {
		            case 1:
		            case 3:
		            case 5:
		            case 7:
		            case 8:
		            case 10:
		            case 12: {
		                var a = DOB.getDate() - today.getDate();
		                days = 31 - a;
		                break;
		            }
		            default: {
		                var a = DOB.getDate() - today.getDate();
		                days = 30 - a;
		                break;
		            }
		        }

		    }
		    else {
		        days = today.getDate() - DOB.getDate();
		        if (DOB.getMonth() === today.getMonth())
		            months = (totalMonths % 12);
		        else
		            months = (totalMonths % 12) + 1;
		    }
		    
		    var age = `${years} Years ${months} Months ${days} days`;
		    
		    $(".modal-title").html(" Result : ");
			$(".modal-body").html(`Your Age is ${age}.`);
			$('#myModal').modal('show');

			resetSelect();
		}

		function resetSelect()
		{
			$("#day").val('');
	    	$("#month").val('');
	    	$("#year").val('');
		}

	    return false;
	
	});





});