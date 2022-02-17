const toggleBtn = document.querySelector('#toggle-btn');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');


email.addEventListener('click', () =>{
    alert('Email not available');
});
phone.addEventListener('click', () =>{
    alert('Logx Agency number not yet available');
});
toggleBtn.addEventListener('click', () =>{
    alert('Toggled');
});