const puzzel1Button = document.getElementById('js--puzzel1Button');
const puzzel2Button = document.getElementById('js--puzzel2Button');
const puzzel3Button = document.getElementById('js--puzzel3Button');

if(document.URL.includes('dierentuinpad.html')){
    puzzel2Button.style.cursor = 'default';
    puzzel3Button.style.cursor = 'default';
}
if(document.URL.includes('dierentuinpad-2.html')){
    puzzel1Button.style.cursor = 'default';
    puzzel3Button.style.cursor = 'default';
}

