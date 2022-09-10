let label1 = document.querySelector('.inputBox__span');
let label2 = document.querySelector('.inputBox__span2');
let label3 = document.querySelector('.inputBox__span3');
let label4 = document.querySelector('.inputBox__span4');

//-------------------------------------------------------//
let input1 = document.querySelector('#nombre');
let input2 = document.querySelector('.inputBox_child2');
let input3 = document.querySelector('.inputBox_child3');
let input4 = document.querySelector('.inputBox_child4');

// function verificarcion(input,label){
//     input.addEventListener('blur', function(){
//         if (input.value != '' ){
//             label.style.top='-0.4rem';
//             label.style.fontSize='0.65rem';
//             label.style.left='0.5rem';
//             label.style.width='auto';
//             label.style.opacity='1';
//             label.style.background='#000';
//             label.style.borderRadius='2px';
//             label.style.letterSpacing='0.2rem';
    
//         }else{
//             console.log('vacio');
//         }
//     input.addEventListener('click', function(){
//         label.style.fontSize='0.65rem';
//         label.style.opacity='1';
//         label.style.padding='0 10px';
//         label.style.background='#000';
//         label.style.borderRadius='2px';
//         label.style.textTransform='translateX(7px) translateY(1px);';
//         label.style.letterSpacing='0.2rem';
//     })
//     })
// }

// verificarcion(input1,label1)




























let skills = document.querySelector('.skillsresponsive');
let skillbutton = document.querySelector('.card__title1');
let skillsIcon = document.querySelector('.skills_icon');
///--------------------------------------------------
let hobbies = document.querySelector('.hobbies__content');
let hobbiesbutton = document.querySelector('.card__title2');
let hobbiesIcon = document.querySelector('.hobbies_icon');

skillsIcon.style.color='yellow';
skillbutton.style.borderBottom= '1px solid #fff';

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