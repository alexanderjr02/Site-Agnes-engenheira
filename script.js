// nav scroll
const hdr=document.getElementById('hdr');
addEventListener('scroll',()=>hdr.classList.toggle('scrolled',scrollY>30));
// mobile menu
const mb=document.getElementById('menuBtn'),nl=document.getElementById('navlinks');
mb.addEventListener('click',()=>nl.classList.toggle('open'));
nl.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nl.classList.remove('open')));
// faq
document.querySelectorAll('.faq-item').forEach(it=>{
  const q=it.querySelector('.faq-q'),a=it.querySelector('.faq-a');
  q.addEventListener('click',()=>{
    const open=it.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(o=>{o.classList.remove('open');o.querySelector('.faq-a').style.maxHeight=null});
    if(!open){it.classList.add('open');a.style.maxHeight=a.scrollHeight+'px'}
  });
});
// reveal on scroll
const io=new IntersectionObserver((es)=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.rev').forEach((el,i)=>{el.style.transitionDelay=(i%3*80)+'ms';io.observe(el)});
