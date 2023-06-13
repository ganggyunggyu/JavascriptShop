

var clickCount = 0;
var timeCount = 5;
let emailRegex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

const listGr = document.querySelector('.list-con');
const navBtn = document.querySelector('.nav-btn');
const modalOpen = document.querySelector('.login-open');
const modalClose = document.querySelector('.login-close');
const modalBg = document.querySelector('.modal-bg');
const modalBack = document.querySelector('.modal-back');
const loginSubmitBtn = document.querySelector('.login-btn');
const loginContainer = document.querySelector('.login-con');
const idInput = document.querySelector('.id-input');
const pwInput = document.querySelector('.pw-input');
const darkModeBtn = document.querySelector('.dark-mode-btn');
const alertBox = document.querySelector('.alert-box');
const loginForm = document.querySelector('.login-form');
const slideContainer = document.querySelector('.slide-con');
const slideBtnFirst = document.querySelector('.slide-btn-first');
const slideBtnSecond = document.querySelector('.slide-btn-second');
const slideBtnThird = document.querySelector('.slide-btn-third');
const lorem =  document.querySelector('.lorem');
const tab = document.querySelectorAll('.tab');
const tabContent = document.querySelectorAll('.tab-content');
const cardContainer = document.querySelector('.card-container');
const cardTitle = document.querySelectorAll('.card-title');
const cardText = document.querySelectorAll('.card-text');
const selectOption = document.querySelectorAll('.select-op');
const optionList = document.querySelectorAll('option');
const cardAddBtn = document.querySelector('.card-add-btn');
const products = [
  {id: 0, title : '핑쿠티비', price:30000 },
  {id: 1, title : '아폴로', price:300 },
  {id: 2, title : '카세트 테-잎', price:30000 },
];

const optionDiv = (item) => {return `<option>${item}</option>`}

function productDiv(item1, item2){
  return `<div class="col-sm-4">
  <img src="https://via.placeholder.com/600" class="w-100">
  <h5>${item1}</h5>
  <span>단-돈</span>
  <p>${item2}</p>
  </div>`
}

setTimeout(function(){
  console.log('안녕')
}, 5000)

for(let i=0; i < products.length; i++){
  console.log(products[i].title)
  cardContainer.insertAdjacentHTML("beforeend", productDiv(products[i].title, products[i].price));
}

let addOptionValue = ['모자', '셔츠', '바지', '가방'];

for(let i=0; i<addOptionValue.length; i++){
  selectOption[0].insertAdjacentHTML('beforeend',optionDiv(addOptionValue[i]));
}

cardAddBtn.addEventListener('click', function(){
  fetch('https://codingapple1.github.io/js/more1.json')
  .then(res => res.json())
  .then(function(data){
    console.log(data)
    for(let i=0; i < products.length; i++){
      cardContainer.insertAdjacentHTML('beforeend', productDiv(data[i].title, data[i].price))
    }
  })
}
)

setInterval(function(){
    if(timeCount  == -1){
      displayNoneClassAdd(alertBox);
    }else{
      alertBox.innerHTML = timeCount + '초 안에 사라집니다'
      timeCount -= 1;
    }
  }, 1000);
const addTabContent = (tabEl, tabConEl) =>{
    for(let i=0; i < tabContent.length; i++){
        tab[i].classList.remove('tab-btn');
        tabContent[i].classList.remove('show');
    }  
    tabEl.classList.toggle('tab-btn');
    tabConEl.classList.toggle('show');
}
const show = (box) => {box.classList.toggle('show'); }
const close = () => { modalBg.classList.remove('show'); }
const inputCheck = (checkBox, checkBox2) => {
  if(checkBox.value == ""||checkBox2.value == ""){
    alert('다시');
    event.preventDefault();
  }else if(checkBox2.value.length < 8){
    alert('비밀번호를 8자리 이상 입력하시오');
    event.preventDefault();
  }else if(!emailRegex.test(checkBox.value)){
    alert('email을 제대로 입력하쇼');
    event.preventDefault();
  }else if(!/[A-Z]+/.test(checkBox2.value)){
    alert('비밀번호에 대문자가 없잖슴~');
    event.preventDefault();
  }else{
    console.log('궀');
  }
}
const displayNoneClassAdd = (box) => box.classList.add('close');

modalOpen.addEventListener('click',function(){show(modalBg)});
modalClose.addEventListener('click',close);
modalBg.addEventListener('click',function(e){
  if(e.target == modalBg){
    close();
  }
});
navBtn.addEventListener('click',function(){show(listGr)});
navBtn.addEventListener('click', function(){
loginContainer.classList.toggle('pt-0');
});
loginSubmitBtn.addEventListener('click', function(){inputCheck(idInput, pwInput)});
darkModeBtn.addEventListener('click',function(){
clickCount ++;
  console.log(clickCount);
    if(clickCount % 2 == 0){
        darkModeBtn.innerHTML = 'LIGHT 🌞';
        darkModeBtn.classList.add('light-mode');
        darkModeBtn.classList.remove('dark-mode');
        darkModeBtn.classList.add('bg-light');
        darkModeBtn.classList.remove('bg-dark');
    }else{
        darkModeBtn.innerHTML = 'DARK 🌝';
        darkModeBtn.classList.add('dark-mode');
        darkModeBtn.classList.remove('light-mode');
        darkModeBtn.classList.add('bg-dark');
        darkModeBtn.classList.remove('bg-light');
    }
});
slideBtnFirst.addEventListener('click', function(){
slideContainer.style.transform = 'translateX(0vw)'
});
slideBtnSecond.addEventListener('click', function(){
  slideContainer.style.transform = 'translateX(-100vw)'
});
slideBtnThird.addEventListener('click', function(){
  slideContainer.style.transform = 'translateX(-200vw)'
});
window.addEventListener('scroll', function(){
    if(window.scrollY > 100){
      document.querySelector('.navbar-brand').style.fontSize = '16px';
    }else{
      document.querySelector('.navbar-brand').style.fontSize = '20px';
    }
  });
lorem.addEventListener('scroll', function(){
    if(lorem.scrollHeight-1 < lorem.scrollTop + lorem.clientHeight){
      alert('good');
    };
  });
tab[0].addEventListener('click',function(){addTabContent(tab[0],tabContent[0])});
tab[1].addEventListener('click',function(){addTabContent(tab[1],tabContent[1])});
tab[2].addEventListener('click',function(){addTabContent(tab[2],tabContent[2])});

