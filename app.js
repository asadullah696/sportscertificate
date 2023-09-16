





    function submit(){
            let myName = document.getElementById("name-input").value;
            let fatherName = document.getElementById("father-name-input").value;
            let sport = document.getElementById("sport-name-input").value;
            let year = document.getElementById("year-part-input").value;

            if (myName === "" || fatherName === "" || sport === "" || year === "") {
                alert("All inputs must be filled out");
                return false;
            }
        
            // Additional validation logic can be added here for specific requirements

             let applicantName = document.getElementById("applicant-name").innerText = myName ;
             let applicantFatherName = document.getElementById("father-applicant-name").textContent = fatherName;
             let sportName = document.getElementById("sport-name-applicant").innerText = sport;
             let applicantNameBottom = document.getElementById("applicant-name-bottom").innerText = year ;

            //  return true;
    }