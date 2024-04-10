const formData = document.getElementById("form");
console.log("formData", formData);

//  const firstNameData= document.getElementById("firstName");
//  const lastNameData = document.getElementById("lastName");
// //  console.log(`firstNameData ${firstNameData}, lastNameData ${lastNameData}`)
// //  console.log(firstNameData, lastNameData)
// //  console.log(`firstNameData ${firstNameData}`, `lastNameData ${lastNameData}`);


// // const handleSubmit = function(e){
// //     console.log("EEE", e); //undefine
// // }

// // handleSubmit();

// formData.addEventListener('submit', e =>{
//     console.log("eeeee",e)
//     e.preventDefault()

// })

// document.querySelector("#firstName").value = "Bhavya"
// document.querySelector("#lastName").value = "D S"
// const querryFirstName = document.querySelector("#firstName").value;
// const querryLastName = document.querySelector("#lastName").value;
// console.log("firstname", querryFirstName, querryLastName)


const querryButton = document.querySelector("#sign-up-btn");
console.log("querryButtonquerryButton", querryButton)

document.querySelector("#sign-up-btn").addEventListener('click', function(e){
e.preventDefault();
    console.log("addevent lisner", document.querySelector("#firstName").value = "Soukya")
})