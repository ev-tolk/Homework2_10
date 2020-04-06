import{result} from '../calculater/calculater';
import {sumCredits} from '../calculater/calculater.js';

let btnIn = document.getElementById('btn');
let logIn = document.getElementById('log_in');
let emailInItem = "";
let emailIn = document.getElementById('email_in');
let passwordInItem = "";
let passwordIn = document.getElementById('password');
let clickIn = document.getElementById('click_in');

const user1 = {
    log: 'test@mail.ru',
    pass: 'qwerty'
}

emailIn.addEventListener('keypress', function(kePressed){
    if(kePressed.which == 13){
        emailInItem = this.value; 
    }
})

passwordIn.addEventListener('keypress', function(kePressed){
    if(kePressed.which == 13){
        passwordInItem = this.value; 
    }
})

function checkUser(){
    if (emailInItem === user1.log && passwordInItem === user1.pass){
        logIn.style.display = 'none';
        document.getElementById('calculater').style.display = 'block';
        sumCredits();
    } else ('Ошибка данных');
}

function enterUser(){
    document.getElementById('bank').style.display = 'none';
    result.style.display = 'none';
    logIn.style.display = 'block';
    btnIn.style.display = 'none';
    document.getElementById('convert').style.display = 'none';
}

export {enterUser, btnIn, checkUser, clickIn, logIn};