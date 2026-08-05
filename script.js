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
// bastidores: o mp4 só é baixado no primeiro clique, até lá vale o poster
const vids=document.querySelectorAll('.vid');
const sync=card=>{
  const v=card.querySelector('video'),btn=card.querySelector('.vid-btn');
  card.classList.toggle('on',!v.paused);
  btn.setAttribute('aria-label',(v.paused?'Reproduzir: ':'Pausar: ')+btn.dataset.desc);
};
const parar=card=>{const v=card.querySelector('video');if(!v.paused)v.pause();sync(card)};

vids.forEach(card=>{
  const v=card.querySelector('video'),btn=card.querySelector('.vid-btn');
  btn.dataset.desc=btn.getAttribute('aria-label').replace(/^Reproduzir:\s*/,'');
  btn.addEventListener('click',()=>{
    if(v.paused){
      vids.forEach(o=>{if(o!==card)parar(o)});          // um de cada vez
      if(!v.getAttribute('src'))v.setAttribute('src',v.dataset.src);
      v.play().catch(()=>{});
    }else v.pause();
  });
  ['play','pause','ended'].forEach(ev=>v.addEventListener(ev,()=>sync(card)));
  sync(card);
});
// saiu da tela, para de tocar
const vio=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)parar(e.target)}),{threshold:.25});
vids.forEach(c=>vio.observe(c));

// depoimentos: o texto vem cortado em 9 linhas para a grade fechar alinhada.
// O botao so aparece em quem realmente tem mais texto do que cabe.
document.querySelectorAll('.quote').forEach(card=>{
  const txt=card.querySelector('blockquote'),btn=card.querySelector('.q-more');
  if(!btn)return;
  const sobra=()=>txt.scrollHeight>txt.clientHeight+1;
  const avaliar=()=>{if(!card.classList.contains('aberto'))btn.hidden=!sobra()};
  avaliar();
  addEventListener('resize',avaliar);
  btn.addEventListener('click',()=>{
    const aberto=card.classList.toggle('aberto');
    btn.textContent=aberto?'Mostrar menos':'Ler completo';
    btn.setAttribute('aria-expanded',aberto);
  });
});

// reveal on scroll
const io=new IntersectionObserver((es)=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.rev').forEach((el,i)=>{el.style.transitionDelay=(i%3*80)+'ms';io.observe(el)});
