document.querySelector(".show-modal").addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(".hidden")
})

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModal = document.querySelector(".close-modal");
const showModal = document.querySelectorAll('.show-modal');
// console.log("showModal", showModal)

const openThModal =  function(){
    // document.querySelector(".hidden").style.display = "block";
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden")
    console.log(modal.classList.contains("hidden"))
}

const closeThModal = function(){
    modal.classList.add("hidden");
    modal.classList.add("overlay");
}
for(let i=0;i<showModal.length;i++){
    // console.log("ShowmodalShowmodal", showModal[i].textContent);
    // document.querySelector(".hidden")
    // document.querySelectorAll(".show-modal").addEventListener('click')
    showModal[i].addEventListener('click',openThModal)

}


closeModal.addEventListener('click',closeThModal)


overlay.addEventListener('click',closeThModal)


document.addEventListener('keydown',function(e){
    console.log("Pressed key is ", e)
    if(e.key==="Enter"){
        if(!modal.classList.contains("hidden")){
            closeThModal();
            console.log("enterenterenter")
        }
     
    }
})