
// SHRINK VAR ON SCROLL

window.onscroll=function()
    {
    scrollFunction()
    };

    function scrollFunction()
    {
    if(document.body.scrollTop>50 || document.documentElement.scrollTop>50)
        {
        document.getElementById("logo").style.height="60px";
        }
    else{
        document.getElementById("logo").style.height="100px";
        }
    }

//NAV ACTIVE LINKS
const link = document.querySelector('.nav-link');
    console.log(link);

link.addEventListener('click', function(){
    link.classList.toggle('is-active');
    console.log('se hizo click')
})


const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector ('.nav-menu');
menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
   
});
