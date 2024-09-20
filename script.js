`use-strict`;




const submit = document.querySelector(`.submit-btn`);
const emailInp = document.querySelector(`#email-inp`);
const arrorSpan = document.querySelector(`.arror-span`);


submit.addEventListener(`click`, (e) => {
    e.preventDefault()


    if (emailInp.value === `` || !emailInp.value.includes(`@`) ) {
        arrorSpan.classList.add(`error-span--active`);
        emailInp.classList.add(`error-border`)
    } else {
        arrorSpan.classList.remove(`error-span--active`);
        emailInp.classList.remove(`error-border`);
        emailInp.value = ``
    }


})