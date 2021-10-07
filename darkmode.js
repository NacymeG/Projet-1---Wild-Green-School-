body = document.querySelector('body')
tipsH1 = document.querySelector('.tips-h1')

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
    :'rgb(204,172,116)';
};

let toggled = true;
document.querySelector('.tips-btn-dark').addEventListener('click', function() {
   colorMode(toggled);
   toggled = !toggled;
});