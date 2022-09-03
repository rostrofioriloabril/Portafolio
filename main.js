let span1 = document.querySelector('.inputBox__span1');
let span2 = document.querySelector('.inputBox__span2');
let span3 = document.querySelector('.inputBox__span3');
let span4 = document.querySelector('.inputBox__span4');

//-------------------------------------------------------//
let input1 = document.querySelector('.inputBox_child1');
let input2 = document.querySelector('.inputBox_child2');
let input3 = document.querySelector('.inputBox_child3');
let input4 = document.querySelector('.inputBox_child4');

let skills = document.querySelector('.skillsresponsive');
let skillbutton = document.querySelector('.card__title1');
let skillsIcon = document.querySelector('.skills_icon');
///--------------------------------------------------
let hobbies = document.querySelector('.hobbies__content');
let hobbiesbutton = document.querySelector('.card__title2');
let hobbiesIcon = document.querySelector('.hobbies_icon');

skillbutton.addEventListener('click', function(){
    hobbies.style.display='none';
    skills.style.display='grid';
    skillsIcon.style.color='yellow';
    hobbiesIcon.style.color='#fff';
    skillbutton.style.borderBottom= '1px solid #fff';
    skillbutton.style.paddingBottom= '0.3rem';
    hobbiesbutton.style.borderBottom= 'none';
    hobbiesbutton.style.paddingBottom= '0';
});
hobbiesbutton.addEventListener('click', function(){
    skills.style.display='none';
    hobbies.style.display='flex';
    hobbiesIcon.style.color='#770ce9';
    skillsIcon.style.color='#fff';
    hobbiesbutton.style.borderBottom= '1px solid #fff';
    hobbiesbutton.style.paddingBottom= '0.3rem';
    skillbutton.style.borderBottom= 'none';
    skillbutton.style.paddingBottom= '0';
});