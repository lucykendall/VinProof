function validateForm() {
    let x = document.getElementById("values").value;
        print(x)
    if (x == "") {
        alert("Input fields must be filled out");
        return false;
        }
    }
validateForm()