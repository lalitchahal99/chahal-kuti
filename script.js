
const lang=document.body.dataset.lang;
fetch('../content.json').then(r=>r.json()).then(d=>{
document.querySelectorAll('[data-key]').forEach(el=>{
el.textContent=d[lang][el.dataset.key];
});
});
fetch('../gallery.json').then(r=>r.json()).then(d=>{
const g=document.getElementById('gallery');
d.photos.forEach(p=>{
let div=document.createElement('div');
div.className='gallery-item';
div.innerHTML=`<img src="../assets/photos/${p}">`;
g.appendChild(div);
});
d.videos.forEach(v=>{
let div=document.createElement('div');
div.className='gallery-item';
div.innerHTML=`<video controls muted><source src="../assets/videos/${v}" type="video/mp4"></video>`;
g.appendChild(div);
});
});
