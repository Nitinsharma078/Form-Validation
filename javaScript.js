var selectedRow = null;
//
const fName = document.getElementById('fName');
// console.log(fName.value);
const lName = document.getElementById('lName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const gender = document.getElementsByName('gender');
const dateOfBirth = document.getElementById('date');
const address = document.getElementById('Address');
const country = document.getElementsByName('select');
const city = document.getElementsByName('select1');
const form = document.querySelector('form');
// console.log(city[0].value);

const certificte = document.getElementById('cert');

form.addEventListener('submit', (event) => {
    event.preventDefault();



    if (validate()=== true) {
        var fData = readData();
        // console.log("22 ", selectedRssow)
        if (selectedRow == null) {
            insertData(fData);
        } else {
            updateData(fData);
        }

        showTable();
        form.reset();
        let imagediv = document.getElementById("imagePreview");
        imagediv.innerHTML = '';
    }


});

function handle() {
    populate('Country', 'Country2');
    show();
}

function show() {
    var myDiv = document.getElementById('mycity');
    let  country = document.getElementsByName('select')[0];
    let countryVal = country.value;

    if(countryVal === 'india' || countryVal ==='america'){
        myDiv.style.display = 'block';

    }
    else{
        myDiv.style.display = 'none';
        console.log("hide bye");
    }
    // if(countryVal === 'Choose Country'){
    //     myDiv.style.display = 'none';
    //     console.log("hide bye");
    // }

}
function showTable() {
    const myTable = document.getElementById('tbl');
    myTable.classList.add("show");

}
function populate(Country, Country2) {
    var s1 = document.getElementById(Country);
    var s2 = document.getElementById(Country2);
 let array

    s2.innerHTML = "";
    // if(s1.value== 'Choose Country'){
    //     array = ['choose city|Choose City', 'delhi|Delhi', 'jaipur|Jaipur', 'mumbai|Mumbai', 'banglore|Banglore', 'kolkatta|Kolkatta'];
    //         console.log("helllo");
    // }

   if (s1.value === 'india') {
         array = ['choose city|Choose City', 'delhi|Delhi', 'jaipur|Jaipur', 'mumbai|Mumbai', 'banglore|Banglore', 'kolkatta|Kolkatta'];

    }
    else if (s1.value === 'america') {
     array = ['choose city|Choose City', 'new yark|New Yark', 'los angles|Los Angles'];
    }
    for (var option in array) {
        var pair = array[option].split('|');
        var newOption = document.createElement("option");
        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        s2.options.add(newOption);
    }
}

function country1() {
    const country = document.getElementsByName('select');
    let countryVal = '';

    for (let i = 0; i < country.length; i++) {
        if (country[i]) {
            countryVal = country[i].value;
            setErrorMsg(country, '');
            return countryVal;
        }
    }


}

function genderVal1() {
    const gender = document.getElementsByName('gender');
    let genderVal2;

    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            genderVal2 = gender[i].value;
            setErrorMsg(gender, '');
            return genderVal2;
        }
    }

}
function validate() {
    let isValid = true;
    const fName = document.getElementById('fName');
    const lName = document.getElementById('lName');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const gender = document.querySelector('input[name="gender"]:checked');
    const dateOfBirth = document.getElementById('date');
    const address = document.getElementById('Address');
    const country = document.getElementById('Country');
    const city = document.getElementById('Country2');
    const certificte = document.getElementById('cert');


    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (fName.value.trim() === "") {
        setErrorMsg(fName, 'First Name cannot be blank');
        isValid = false;
    } else {
        setErrorMsg(fName, '');
    }

    if (lName.value.trim() === "") {
        setErrorMsg(lName, 'Last Name cannot be blank');
        isValid = false;
    } else {
        setErrorMsg(lName, '');
    }

    if (email.value.trim() === "") {
        setErrorMsg(email, 'Email cannot be blank');
        isValid = false;
    } else if (!emailPattern.test(email.value)) {
        setErrorMsg(email, 'Enter a valid email address');
        isValid = false;
    } else {
        setErrorMsg(email, '');
    }
    if(password.value.trim()== ""){

        setErrorMsg(password,'Password Cannot be blank')
        isValid = false;
    }
    else{
        setErrorMsg(password,'');
    }
    if(dateOfBirth.value.trim()=== ""){
        setErrorMsg(dateOfBirth,'Select Date ')
        isValid = false;
    }
    else{
        setErrorMsg(dateOfBirth,'')
    }

    if (!gender) {
        setErrorMsg(document.getElementsByName('gender')[0], 'Select the Gender');
        isValid = false;
    } else {
        setErrorMsg(document.getElementsByName('gender')[0], '');
    }
    if(address.value.trim() === ""){
        setErrorMsg(address,'Enter Your Address');
    }
    else{
        setErrorMsg(address,'');
    }
    if(country.value == ''){
        setErrorMsg(country, 'Select Country');
        isValid = false;
    }
    else{
        setErrorMsg(country,'');
    }
    if(city.value==''){
        setErrorMsg(city,'Select City');
        isValid = false
    }
    if(city.value === 'choose city'){
        setErrorMsg(city,'select City');
        isValid = false;

    }
    else{
        setErrorMsg(city,'');
    }
    if(certificte.value == ""){
        setErrorMsg(certificte,'Choose Certificate');
        isValid = false;
    }
    else{
        setErrorMsg(certificte,'');
    }
    if(isValid){
        var myDiv = document.getElementById('mycity');
        myDiv.style.display= 'none';
        // selectedRow = null;

    }
    return isValid;
}

function setErrorMsg(input, errormsg) {
    const formgroup = input.parentElement;
    console.log( errormsg !== ''    );
    if (!formgroup) {
        return;
    }

    let small = formgroup.querySelector('.error');
    small.innerText = errormsg;
    formgroup.classList.toggle('error', errormsg !== '');
}



// const validate = () => {
//     let isValid = true;
//     const fNameVal = fName.value.trim();
//     const lNameVal = lName.value.trim();
//     const emailVal = email.value.trim();
//     const passwordVal = password.value.trim();
//     const genderVal = genderVal1();
//     const dateOfBirthVal = dateOfBirth.value;
//     const addressVal = address.value.trim();
//     const countrydata = country1();
//     // const city1 =  city.value
//     const certificteVal = certificte.value;
//     const emailPattern =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     // let nameV = /^[A-Za-z]+$/;

//     if (fNameVal === "") {
//         setErrorMsg(fName, 'First Name cannot be blank');


//     }
//     // else if(!nameV.test(fNameVal)){
//     //     setErrorMsg(fName, 'First  Name is not valid');
//     //     isValid = false;

//     // }
//      else if (fNameVal.length < 3) {
//         setErrorMsg(fName, 'First Name min 3 char');
//         isValid = false;
//     }
//     else {
//         setErrorMsg(fName, '');
//     }

//     if (lNameVal === "") {
//         setErrorMsg(lName, ' Last Name cannot be blank');
//         isValid = false;
//     } else if (lNameVal.length < 3) {
//         setErrorMsg(lName, 'Last Name min 3 char');
//         isValid = false;

//     } else {
//         setErrorMsg(lName, '');
//     }

//     if (emailVal === "") {
//         setErrorMsg(email, 'Email cannot be blank');
//         isValid = false;
//     } else if (!emailPattern.test(emailVal)) {
//         setErrorMsg(email, "Enter a valid email address");
//         isValid = false;
//     } else {
//         setErrorMsg(email, '');
//     }

//     if (passwordVal === "") {
//         setErrorMsg(password, 'Password cannot be blank');
//         isValid = false;
//     } else {
//         setErrorMsg(password, '');
//     }

//     if (genderVal === '') {
//         setErrorMsg(gender, 'Select the Gender');
//     }

//     if (dateOfBirthVal === "") {
//         setErrorMsg(dateOfBirth, 'Select Date Of Birth');
//     } else {
//         setErrorMsg(dateOfBirth, '');
//     }
//     let Adreess =/^[A-Za-z]+$/

//     if (addressVal === "") {
//         setErrorMsg(address, 'Enter your address');
//     } else {
//         setErrorMsg(address, '');
//     }

//     if (certificteVal === "") {
//         setErrorMsg(certificte, 'Choose our Certificate');
//     } else {
//         setErrorMsg(certificte, '');
//     }

//     if (countrydata === '') {
//         setErrorMsg(country, 'Select country');
//     }
//     else {
//         setErrorMsg(country, '');
//     }
//     const citydata = document.getElementById('Country2').value;

//     if (citydata === 'choose city') {
//         setErrorMsg(document.getElementById('Country2'), 'Select a city');
//     } else {
//         setErrorMsg(document.getElementById('Country2'), '');

//     }

//     if (fNameVal === "" || lNameVal === "" || emailVal === "" || passwordVal === "" || genderVal === "" || dateOfBirthVal === "" || addressVal === "" || certificteVal === "" || countrydata === "" || citydata === "choose city") {
//         isValid = false;
//     }
//     return isValid;

// }
// function setErrorMsg(input, errormsg) {
//     const formgroup = input[0].parentElement;
//     console.log(formgroup);
//         const small = formgroup.querySelector('small');
//         formgroup.className = "form-group error";
//         small.innerText = errormsg

// }

// function setErrorGender(input, errormsg) {
//     const formgroup = input[0].parentElement;
//     const small = formgroup.querySelector('.error');
//     small.innerText = errormsg;
// }

// function setErrorCountry(input, errormsg) {
//     const formgroup = input[0].parentElement;
//     const small = formgroup.querySelector('.error');
//     small.innerText = errormsg;
// }

// function setErrorMsg(input, errormsg) {
//     const formgroup = input.parentElement;
//     const small = formgroup.querySelector('small');
//     formgroup.className = "form-group error";
//     small.innerText = errormsg;
// }
var upateData = null;
function readData() {
    var emp = {};
    emp["fName"] = document.getElementById('fName').value;
    emp["lName"] = document.getElementById('lName').value;
    emp["email"] = document.getElementById('email').value;
    emp["password"] = document.getElementById('password').value;
    emp['gender'] = genderVal1();
    emp["date"] = document.getElementById('date').value;
    emp["Address"] = document.getElementById('Address').value;
    emp["Country"] = document.getElementById('Country').value;
    emp["Country2"] = document.getElementById('Country2').value;
    emp["cert"] = document.getElementById('cert').value;
    return emp;
}

// console.log(fileName);
function insertData(data) {
    console.log(data);
    var table = document.getElementById('tbl').getElementsByTagName('tbody')[0];

    var newRow = table.insertRow(table.length);
    const fileInput = document.getElementById('cert');
    const file = fileInput.files[0];

    var fileName = fileInput.files[0].name;
    console.log('nitin', fileName);
    let preview
    if (file) {
        preview = `<img src="${URL.createObjectURL(file)}" alt="Image Preview" style="max-width: 100px; max-height: 100px;">`;
        // console.log('nitin ',URL.createObjectURL(file));
    }
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.lName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.email;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.password;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.gender;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.date;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.Address;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.Country;
    cell9 = newRow.insertCell(8);
    cell9.innerHTML = data.Country2;
    cell10 = newRow.insertCell(9);
    cell10.innerHTML = preview;
    cell11 = newRow.insertCell(10);
    cell11.innerHTML = `<button onclick="onEdit(this)">Edit</button>
                        <button onclick="onDelete(this)">Delete</button>`;
}

function pre(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            let preview = document.getElementById('imagePreview');

            preview.innerHTML = `<img src="${e.target.result}" alt="Image Preview"
             style="max-width: 100px; max-height: 100px;">`;
             preview.style.display = 'block';
        };

        reader.readAsDataURL(file);

    }

    else {
        let preview = document.getElementById('imagePreview');
        preview.style.display = 'none';
    }
    // let preview = document.getElementById('imagePreview');
    //     preview.style.display = 'block';
}
function onEdit(td) {
    console.log(td);
    selectedRow = td.parentElement.parentElement;
    // console.log("nitin",selectedRow);
    document.getElementById('fName').value = selectedRow.cells[0].innerHTML;
    document.getElementById('lName').value = selectedRow.cells[1].innerHTML;
    document.getElementById('email').value = selectedRow.cells[2].innerHTML;
    document.getElementById('password').value = selectedRow.cells[3].innerHTML;

    var genderValue = selectedRow.cells[4].innerHTML;
    var genderRadios = document.getElementsByName('gender');

    for (let i = 0; i < genderRadios.length; i++) {
        if (genderRadios[i].value === genderValue) {
            genderRadios[i].checked = true;
            break;
        }
    }
    document.getElementById('date').value = selectedRow.cells[5].innerHTML;
    document.getElementById('Address').value = selectedRow.cells[6].innerHTML;

    var countryValue = selectedRow.cells[7].innerHTML;
    var countrySelect = document.getElementById('Country');

    for (var i = 0; i < countrySelect.options.length; i++) {
        if (countrySelect.options[i].value === countryValue) {
            countrySelect.selectedIndex = i;
            populate('Country', 'Country2');
            break;
        }
    }
    document.getElementById('Country2').value = selectedRow.cells[8].innerHTML;

    var imgSrc = selectedRow.cells[9].querySelector('img').src;
    const fileName = imgSrc.split('/').pop();
    fetch(imgSrc)
    .then(response => response.blob())
    .then(blob => {
        const file = new File([blob], fileName, { type: "image/*" });

        const fileList = new DataTransfer();
        fileList.items.add(file);

        const fileInput = document.getElementById('cert');
        fileInput.files = fileList.files;

        const preview = document.getElementById('imagePreview');
        preview.innerHTML = `<img src="${imgSrc}" alt="Image Preview" style="max-width: 100px; max-height: 100px;">`;
    })
    .catch(error => console.error('Error fetching image:', error));

    var myDiv = document.getElementById('mycity');
    myDiv.style.display='block';

}

// function resetForm() {
//     let imagediv = document.getElementById("imagePreview");
//     imagediv.innerHTML = '';
//     document.getElementById('fName').value = "";
//     document.getElementById('lName').value = "";
//     document.getElementById('email').value = '';
//     document.getElementById('password').value = '';
//     document.getElementsByName('gender').value = '';
//     document.getElementById('date').value = '';
//     document.getElementById('Address').value = '';
//     document.getElementById('Country').value = '';
//     document.getElementById('Country2').value = '';
//     document.getElementById('cert').value = '';

//     selectedRow = null;
// }
function updateData(fData) {
    console.log(fData);
    selectedRow.cells[0].innerHTML = fData.fName;
    selectedRow.cells[1].innerHTML = fData.lName
    selectedRow.cells[2].innerHTML = fData.email;
    selectedRow.cells[3].innerHTML = fData.password;
    selectedRow.cells[4].innerHTML = fData.gender;
    selectedRow.cells[5].innerHTML = fData.date;
    selectedRow.cells[6].innerHTML = fData.Address;
    selectedRow.cells[7].innerHTML = fData.Country;
    selectedRow.cells[8].innerHTML = fData.Country2;

    const fileInput = document.getElementById('cert');

    const file = fileInput.files[0];

    if (file) {
        selectedRow.cells[9].innerHTML = `<img src="${URL.createObjectURL(file)}" alt="Image Preview" style="max-width: 100px; max-height: 100px;">`;

    }
selectedRow = null;
}
function onDelete(td) {
   const row = td.parentElement.parentElement;
    document.getElementById('tbl').deleteRow(row.rowIndex);
    let tBody = document.getElementById('imageTableBody');
if (tBody.innerHTML === ''){
    document.getElementById('tbl').style.display = 'none';
}


    resetForm();
}

const fileInput = document.getElementById('cert');
fileInput.addEventListener('change', pre);