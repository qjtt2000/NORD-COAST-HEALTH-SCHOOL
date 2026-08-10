const langToggle=document.getElementById('langToggle');
const menuToggle=document.querySelector('.menu-toggle');
const nav=document.getElementById('site-nav');
let lang=localStorage.getItem('nord-school-lang')||'en';
function applyLanguage(){
  document.documentElement.lang=lang==='zh'?'zh-CN':'en';
  document.querySelectorAll('[data-en][data-zh]').forEach(el=>{el.innerHTML=el.dataset[lang];});
  if(langToggle) langToggle.textContent=lang==='en'?'中文':'EN';
  localStorage.setItem('nord-school-lang',lang);
}
if(langToggle) langToggle.addEventListener('click',()=>{lang=lang==='en'?'zh':'en';applyLanguage();});
if(menuToggle&&nav){menuToggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',open);});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');}));}
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
applyLanguage();
