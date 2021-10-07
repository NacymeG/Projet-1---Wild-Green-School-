tipsAll = document.querySelector('.tips-all')
body = document.querySelector('body')
tipsBtn = document.querySelector('.tips-btn')
tipsH1 = document.querySelector('.tips-h1')
tipsStars= document.querySelector('.tips-stars')
function colorMode(toggle) {
    body.style.backgroundColor = (toggle)
     ? '#35363A' 
     : '#ecf0f1';

    body.style.color = (toggle) 
    ? 'white'
    :'black';

    tipsH1.style.backgroundColor = (toggle)
    ? '#35363A' 
    : '#ecf0f1';

    tipsH1.style.color = (toggle) 
    ? 'white'
    :'black';

    tipsStars.style.display = (toggle) 
    ? 'inline'
    :'none';
};

let toggled = true;
document.querySelector('.tips-btn-dark').addEventListener('click', function() {
   colorMode(toggled);
   toggled = !toggled;
});