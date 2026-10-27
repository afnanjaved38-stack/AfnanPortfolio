const button=document.querySelector('.menu-toggle');const nav=document.getElementById('mobile-nav');if(button&&nav){button.addEventListener('click',()=>{const open=nav.hasAttribute('hidden');if(open){nav.removeAttribute('hidden')}else{nav.setAttribute('hidden','')}button.setAttribute('aria-expanded',String(open));button.setAttribute('aria-label',open?'Close navigation':'Open navigation')});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.setAttribute('hidden','');button.setAttribute('aria-expanded','false');button.setAttribute('aria-label','Open navigation')}))}const year=document.getElementById('copyright-year');if(year)year.textContent=new Date().getFullYear();
// Activate the uploaded About portrait only after its image has loaded successfully.
const aboutPortrait=document.querySelector('.about-image-slot .about-portrait');
if(aboutPortrait){
  const showAboutPortrait=()=>aboutPortrait.parentElement.classList.add('has-photo');
  if(aboutPortrait.complete&&aboutPortrait.naturalWidth>0)showAboutPortrait();
  else aboutPortrait.addEventListener('load',showAboutPortrait,{once:true});
}
