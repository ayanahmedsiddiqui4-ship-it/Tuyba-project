const packages = [
  {id:'comfort',name:'10-night Comfort Umrah',price:2190,rating:4.9,reviews:412,date:'3–13 Dec 2026',hotel:'4-star',distance:350,nights:10,city:'5 nights Makkah · 5 nights Madinah',image:'/photos/makkah-comfort.png',badge:'MOST BOOKED',level:'Comfort',hotelLevel:4,stopover:'None',family:false,direct:false,description:'A thoughtfully balanced 10-night journey with time in both holy cities, carefully selected four-star stays and support from a Tuyba specialist throughout.'},
  {id:'istanbul',name:'10-night Comfort + Istanbul',price:2640,rating:4.8,reviews:96,date:'6–18 Dec 2026',hotel:'4-star',distance:300,nights:10,city:'5 nights Makkah · 5 nights Madinah',image:'/photos/istanbul-kaaba.png',badge:'STOPOVER',level:'Comfort',hotelLevel:4,stopover:'Istanbul',family:false,direct:false,description:'Make your journey a little longer with an Istanbul stopover before your 10-night stay in Makkah and Madinah.'},
  {id:'family',name:'10-night Family Comfort',price:2390,rating:4.9,reviews:201,date:'10–20 Dec 2026',hotel:'4-star family rooms',distance:400,nights:10,city:'5 nights Makkah · 5 nights Madinah',image:'/photos/family-comfort.png',badge:'FAMILY',level:'Comfort',hotelLevel:4,stopover:'None',family:true,direct:true,description:'Room to travel together. This family-friendly package includes comfortable family rooms, coordinated transfers and a dedicated specialist.'},
  {id:'madinah',name:'10-night Comfort Madinah first',price:2250,rating:4.7,reviews:88,date:'12–22 Dec 2026',hotel:'4-star',distance:450,nights:10,city:'4 nights Madinah · 6 nights Makkah',image:'/photos/madinah-first.png',badge:'NEW',level:'Comfort',hotelLevel:4,stopover:'None',family:false,direct:true,description:'Begin in the quiet of Madinah, then continue to Makkah. A calm 10-night itinerary with four-star accommodation in both cities.'},
  {id:'doha',name:'10-night Comfort + Doha',price:2480,rating:4.8,reviews:64,date:'15–26 Dec 2026',hotel:'4-star',distance:250,nights:10,city:'5 nights Makkah · 1 night Doha',image:'/photos/doha-stopover.png',badge:'STOPOVER',level:'Comfort',hotelLevel:4,stopover:'Doha',family:false,direct:false,description:'Add a one-night Doha stopover to your Umrah journey, then enjoy your stay across Makkah and Madinah.'},
  {id:'winter',name:'10-night Winter Comfort',price:2090,rating:4.6,reviews:51,date:'20–30 Dec 2026',hotel:'4-star',distance:500,nights:10,city:'5 nights Makkah · 5 nights Madinah',image:'/photos/winter-comfort.png',badge:'BEST VALUE',level:'Comfort',hotelLevel:4,stopover:'None',family:false,direct:true,description:'A strong-value winter departure with a well-paced stay, four-star hotels and the essentials arranged for you.'},
  {id:'comfort-7-nov',name:'7-night Comfort Umrah',price:1890,rating:4.8,reviews:64,date:'8–15 Nov 2026',hotel:'4-star',distance:350,nights:7,city:'4 nights Makkah · 3 nights Madinah',image:'/photos/makkah-comfort.png',badge:'7 NIGHTS',level:'Comfort',hotelLevel:4,stopover:'None',family:false,direct:true,description:'A focused one-week Umrah journey with time in both holy cities, four-star accommodation and dedicated Tuyba trip support.'},
  {id:'comfort-7-dec',name:'7-night Comfort Umrah',price:1950,rating:4.8,reviews:72,date:'8–15 Dec 2026',hotel:'4-star',distance:350,nights:7,city:'4 nights Makkah · 3 nights Madinah',image:'/photos/makkah-comfort.png',badge:'7 NIGHTS',level:'Comfort',hotelLevel:4,stopover:'None',family:false,direct:true,description:'A focused one-week Umrah journey with time in both holy cities, four-star accommodation and dedicated Tuyba trip support.'},
  {id:'comfort-7-jan',name:'7-night Comfort Umrah',price:1990,rating:4.8,reviews:79,date:'8–15 Jan 2027',hotel:'4-star',distance:350,nights:7,city:'4 nights Makkah · 3 nights Madinah',image:'/photos/makkah-comfort.png',badge:'7 NIGHTS',level:'Comfort',hotelLevel:4,stopover:'None',family:false,direct:true,description:'A focused one-week Umrah journey with time in both holy cities, four-star accommodation and dedicated Tuyba trip support.'},
  {id:'comfort-7-feb',name:'7-night Comfort Umrah',price:2050,rating:4.8,reviews:86,date:'8–15 Feb 2027',hotel:'4-star',distance:350,nights:7,city:'4 nights Makkah · 3 nights Madinah',image:'/photos/makkah-comfort.png',badge:'7 NIGHTS',level:'Comfort',hotelLevel:4,stopover:'None',family:false,direct:true,description:'A focused one-week Umrah journey with time in both holy cities, four-star accommodation and dedicated Tuyba trip support.'},
  {id:'comfort-14-nov',name:'14-night Comfort Umrah',price:2890,rating:4.9,reviews:58,date:'8–22 Nov 2026',hotel:'4-star',distance:350,nights:14,city:'7 nights Makkah · 7 nights Madinah',image:'/photos/family-comfort.png',badge:'14 NIGHTS',level:'Comfort',hotelLevel:4,stopover:'None',family:false,direct:true,description:'An extended two-week Umrah journey with a balanced week in each holy city, four-star accommodation and dedicated Tuyba trip support.'},
  {id:'comfort-14-dec',name:'14-night Comfort Umrah',price:2990,rating:4.9,reviews:68,date:'8–22 Dec 2026',hotel:'4-star',distance:350,nights:14,city:'7 nights Makkah · 7 nights Madinah',image:'/photos/family-comfort.png',badge:'14 NIGHTS',level:'Comfort',hotelLevel:4,stopover:'None',family:false,direct:true,description:'An extended two-week Umrah journey with a balanced week in each holy city, four-star accommodation and dedicated Tuyba trip support.'},
  {id:'comfort-14-jan',name:'14-night Comfort Umrah',price:3050,rating:4.9,reviews:74,date:'8–22 Jan 2027',hotel:'4-star',distance:350,nights:14,city:'7 nights Makkah · 7 nights Madinah',image:'/photos/family-comfort.png',badge:'14 NIGHTS',level:'Comfort',hotelLevel:4,stopover:'None',family:false,direct:true,description:'An extended two-week Umrah journey with a balanced week in each holy city, four-star accommodation and dedicated Tuyba trip support.'},
  {id:'comfort-14-feb',name:'14-night Comfort Umrah',price:3150,rating:4.9,reviews:82,date:'8–22 Feb 2027',hotel:'4-star',distance:350,nights:14,city:'7 nights Makkah · 7 nights Madinah',image:'/photos/family-comfort.png',badge:'14 NIGHTS',level:'Comfort',hotelLevel:4,stopover:'None',family:false,direct:true,description:'An extended two-week Umrah journey with a balanced week in each holy city, four-star accommodation and dedicated Tuyba trip support.'},
];
const additionalPackages = [
  {id:'essential',name:'10-night Essential Umrah',price:1890,rating:4.5,reviews:37,date:'8–18 Dec 2026',hotel:'3-star',distance:700,nights:10,city:'5 nights Makkah · 5 nights Madinah',image:'/photos/makkah-comfort.png',badge:'ESSENTIAL',level:'Essential',hotelLevel:3,stopover:'None',family:false,direct:true,description:'A simple, well-organized journey focused on the essentials.'},
  {id:'premium',name:'10-night Premium Umrah',price:3290,rating:4.9,reviews:73,date:'5–15 Dec 2026',hotel:'5-star',distance:150,nights:10,city:'5 nights Makkah · 5 nights Madinah',image:'/photos/madinah-first.png',badge:'PREMIUM',level:'Premium',hotelLevel:5,stopover:'None',family:false,direct:true,description:'A premium stay with top-tier hotels close to the Haram and enhanced personal support.'},
  {id:'familyplus',name:'14-night Family Comfort',price:2990,rating:4.8,reviews:42,date:'10–24 Dec 2026',hotel:'4-star family rooms',distance:350,nights:14,city:'7 nights Makkah · 7 nights Madinah',image:'/photos/family-comfort.png',badge:'FAMILY',level:'Family',hotelLevel:4,stopover:'None',family:true,direct:true,description:'An extended family itinerary with extra time for rest and reflection.'},
];
const featureMatches={private:['comfort','family','madinah','winter'],breakfast:['comfort','family','madinah','winter'],ziyarat:['comfort','istanbul','madinah','doha'],guide:['family','madinah','istanbul'],accessible:['family','madinah']};
const icon = {
 plane:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m2 16 8-3 2-9a2 2 0 0 1 4 0l-1 8 5-2a2 2 0 0 1 2 1l-7 5-1 4-2 1-2-4-6 1z"/></svg>',
 pin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2"/></svg>',
 moon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.8 13A8.5 8.5 0 0 1 11 3.2 8.5 8.5 0 1 0 20.8 13Z"/></svg>',
 calendar:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18"/></svg>'
};
const $ = (s,root=document)=>root.querySelector(s), $$=(s,root=document)=>[...root.querySelectorAll(s)];
let expanded=false;
let compareSelection=[];
let lastFocus=null;
const state={date:'Dec 2026',duration:'10',min:1600,max:3500,sort:'recommended'};
const cardList=()=>expanded?[...packages,...additionalPackages]:packages;
const checked=(name)=>$$(`input[name="${name}"]:checked`).map(input=>input.value);
function currentMatches(){
 const departure=$('input[name="departure"]:checked')?.value||'';
 const stop=$('input[name="stopover"]:checked')?.value||'Any';
 const levels=checked('level'), hotels=checked('hotel'), extras=checked('more'), occupancy=$('input[name="occupancy"]:checked')?.value||'Double';
 let items=cardList().filter(p=>{
   if(departure==='MDW')return false;
   const selectedDate=state.date;
   if(selectedDate&&!(p.date.includes(selectedDate.split(' ')[0])&&p.date.includes(selectedDate.split(' ')[1])))return false;
   if(state.duration&&p.nights!==Number(state.duration))return false;
   if(p.price<state.min||p.price>state.max)return false;
   if(levels.length&&!levels.includes(p.level)&&!(levels.includes('Family')&&p.family))return false;
   if(hotels.length&&!hotels.includes(String(p.hotelLevel)))return false;
   if(stop==='None'&&p.stopover!=='None')return false;
   if(stop==='Istanbul'&&p.stopover!=='Istanbul')return false;
   if(stop==='Doha'&&p.stopover!=='Doha')return false;
   if(occupancy&&occupancy!=='Double'&&!p.family)return false;
   if(extras.includes('near')&&p.distance>400)return false;
   if(extras.includes('direct')&&!p.direct)return false;
   if(extras.includes('family')&&!p.family)return false;
   if(extras.some(feature=>featureMatches[feature]&&!featureMatches[feature].includes(p.id)))return false;
   return true;
 });
 const sort=$('#sort').value;
 if(sort==='price-low')items.sort((a,b)=>a.price-b.price);
 if(sort==='price-high')items.sort((a,b)=>b.price-a.price);
 if(sort==='rating')items.sort((a,b)=>b.rating-a.rating||b.reviews-a.reviews);
 return items;
}
function cardMarkup(p){
 return `<article class="package-card" data-card="${p.id}">
  <div class="card-image"><img src="${p.image}" alt="${p.name} journey in the holy cities" loading="lazy"><span class="badge ${p.badge==='FAMILY'?'family':''}">${p.badge}</span></div>
  <div class="card-content">
   <div class="card-name-row"><h3 class="card-name">${p.name}</h3><div class="rating" aria-label="${p.rating} out of 5, ${p.reviews} reviews"><strong>★ ${p.rating}</strong> <small>(${p.reviews})</small></div></div>
   <div class="meta">
    <div class="meta-item">${icon.plane}<span>Chicago · ORD</span></div>
    <div class="meta-item">${icon.pin}<span>${p.hotel} · ${p.distance} m to the Haram${p.stopover==='Istanbul'?', 2 nights Istanbul':''}${p.stopover==='Doha'?', 1 night Doha':''}</span></div>
    <div class="meta-item">${icon.moon}<span>${p.city}</span></div>
    <div class="meta-item">${icon.calendar}<span>${p.date}</span></div>
   </div>
   <div class="price-row"><div><div class="price-label">From</div><div class="price">$${p.price.toLocaleString()} <span class="per-person">per person</span></div></div><button class="outline view-package" data-id="${p.id}">View package <span aria-hidden="true">→</span></button></div>
  </div>
  <label class="compare-line"><input type="checkbox" class="compare-check" data-compare="${p.id}" ${compareSelection.includes(p.id)?'checked':''}><span>Add to compare</span></label>
 </article>`;
}
function render(){
 const items=currentMatches();
 $('#cards').innerHTML=items.length?items.map(cardMarkup).join(''):`<div class="empty-state"><h3>No packages match those filters</h3><p>Try widening your dates or clearing a filter to see more journeys.</p><button class="outline" id="empty-clear">Clear all filters</button></div>`;
 $('#result-count').innerHTML=`${items.length} packages <span>match your search</span>`;
 $('#show-more').hidden=expanded;
 renderChips();renderCompare();
}
function renderChips(){
 const chips=[];
 const departure=$('input[name="departure"]:checked')?.value;
 if(departure==='ORD')chips.push(['ORD','departure']);
 if(state.date)chips.push([`${state.date} ± 3 days`,'date']);
 if(state.duration)chips.push([`${state.duration} nights`,'duration']);
 checked('level').forEach(v=>chips.push([v,'level',v]));
 checked('hotel').forEach(v=>chips.push([`${v} star`,'hotel',v]));
 const occupancy=$('input[name="occupancy"]:checked')?.value;if(occupancy==='Double')chips.push(['Double','occupancy']);
 const stop=$('input[name="stopover"]:checked')?.value;if(stop&&stop!=='Any')chips.push([stop==='None'?'No stopover':stop,'stopover']);
 $('#chips').innerHTML=chips.map(([label,type,val])=>`<span class="chip">${label}<button aria-label="Remove ${label} filter" data-remove="${type}" ${val?`data-value="${val}"`:''}>×</button></span>`).join('')+(chips.length?'<button class="clear-chips" id="clear-chips">Clear all</button>':'');
}
function renderCompare(){
 const tray=$('#compare-tray');tray.hidden=!compareSelection.length;
 $('#compare-count').textContent=`${compareSelection.length} package${compareSelection.length===1?'':'s'} selected`;
}
function showDialog(html){
 lastFocus=document.activeElement;$('#dialog-content').innerHTML=html;$('#dialog-backdrop').classList.add('open');$('#dialog-close').focus();document.body.style.overflow='hidden';
}
function closeDialog(){ $('#dialog-backdrop').classList.remove('open');document.body.style.overflow='';$('#dialog-content').innerHTML='';if(lastFocus?.focus)lastFocus.focus();}
function packageDialog(id){
 const p=cardList().find(item=>item.id===id);if(!p)return;
 showDialog(`<h2 id="dialog-title">${p.name}</h2><p>From Chicago · ${p.nights} nights · ${p.date}</p><img class="dialog-photo" src="${p.image}" alt="${p.name}"><p>${p.description}</p><ul class="dialog-list"><li>${p.hotel} accommodation · ${p.distance} m to the Haram</li><li>${p.city}</li><li>Airport transfers and dedicated Tuyba trip support</li></ul><strong class="price">$${p.price.toLocaleString()} <span class="per-person">per person</span></strong><div class="dialog-actions"><a class="contact-button primary" href="mailto:journey@tuyba.com?subject=${encodeURIComponent('Ask about '+p.name)}">Ask a specialist</a><button id="dialog-done">Close</button></div>`);
}
function compareDialog(){
 const chosen=compareSelection.map(id=>cardList().find(p=>p.id===id)).filter(Boolean);
 if(!chosen.length)return;
 showDialog(`<h2 id="dialog-title">Compare your packages</h2><p>A quick side-by-side look at your selected journeys.</p><div class="compare-table">${chosen.map(p=>`<div class="compare-row"><strong>${p.name}</strong><span>$${p.price.toLocaleString()} per person</span><span>★ ${p.rating} (${p.reviews})</span><span>${p.hotel} · ${p.distance} m to Haram</span><span>${p.date}</span></div>`).join('')}</div><div class="dialog-actions"><a class="contact-button primary" href="mailto:journey@tuyba.com?subject=Help%20comparing%20Umrah%20packages">Ask a specialist</a><button id="dialog-done">Close</button></div>`);
}
function updateSummary(){
 const code=$('input[name="departure"]:checked')?.value||'';
 $('#summary-departure').textContent=code==='ORD'?'Chicago, IL · ORD O’Hare':code==='MDW'?'Chicago, IL · MDW Midway':'Chicago, IL · Any airport';
 $('#summary-date').textContent=state.date==='Dec 2026'?'December 2026':state.date||'Any month';
}
function updateRangeTrack(){
  const lower=Number($('#price-min').value),upper=Number($('#price-max').value),span=3500-1600;
  $('.range-wrap').style.setProperty('--range-from',`${((lower-1600)/span)*100}%`);
  $('.range-wrap').style.setProperty('--range-to',`${((upper-1600)/span)*100}%`);
}
function clearAll(){
 $$('input[name="departure"],input[name="occupancy"]').forEach(el=>el.checked=false);
 $('input[name="stopover"][value="Any"]').checked=true;
 $$('input[name="level"],input[name="hotel"],input[name="more"],#flexible').forEach(el=>el.checked=false);
 state.date='';state.duration='';state.min=1600;state.max=3500;
 $('#price-min').value=1600;$('#price-max').value=3500;$('#min-label').textContent='$1,600';$('#max-label').textContent='$3,500';
  updateRangeTrack();
 $$('#date-options .pill').forEach(b=>{b.classList.toggle('active',b.dataset.date===state.date);b.setAttribute('aria-pressed',String(b.dataset.date===state.date))});
 $$('#duration-options .pill').forEach(b=>{b.classList.toggle('active',b.dataset.duration===state.duration);b.setAttribute('aria-pressed',String(b.dataset.duration===state.duration))});
 $('#sort').value='recommended';updateSummary();render();
}
$('#cards').addEventListener('click',e=>{const button=e.target.closest('.view-package');if(button)packageDialog(button.dataset.id);if(e.target.closest('#empty-clear'))clearAll()});
$('#cards').addEventListener('change',e=>{const box=e.target.closest('[data-compare]');if(!box)return;compareSelection=box.checked?[...new Set([...compareSelection,box.dataset.compare])]:compareSelection.filter(id=>id!==box.dataset.compare);renderCompare()});
$('#compare-open').addEventListener('click',compareDialog);$('#compare-clear').addEventListener('click',()=>{compareSelection=[];render()});
$('#clear-all').addEventListener('click',clearAll);
$('#chips').addEventListener('click',e=>{
 if(e.target.id==='clear-chips'){clearAll();return}
 const button=e.target.closest('[data-remove]');if(!button)return;
 const {remove,type,value}=button.dataset;
 if(remove==='departure')$$('input[name="departure"]').forEach(el=>el.checked=false);
 if(remove==='date'){state.date='';$$('#date-options .pill').forEach(b=>b.classList.remove('active'));updateSummary()}
 if(remove==='duration'){state.duration='';$$('#duration-options .pill').forEach(b=>b.classList.remove('active'))}
 if(remove==='level')$(`input[name="level"][value="${value}"]`).checked=false;
 if(remove==='hotel')$(`input[name="hotel"][value="${value}"]`).checked=false;
 if(remove==='occupancy')$$('input[name="occupancy"]').forEach(el=>el.checked=false);
 if(remove==='stopover')$('input[name="stopover"][value="Any"]').checked=true;
 render();
});
$('#filter-panel').addEventListener('click',e=>{
 const toggle=e.target.closest('.group-toggle');if(toggle){const group=toggle.closest('.filter-group');group.classList.toggle('closed');toggle.setAttribute('aria-expanded',String(!group.classList.contains('closed')));return}
 const pill=e.target.closest('[data-date],[data-duration]');
 if(pill){const isDate=!!pill.dataset.date,key=isDate?'date':'duration',value=isDate?pill.dataset.date:pill.dataset.duration;state[key]=state[key]===value?'':value;
  const group=isDate?'#date-options':'#duration-options';$$(group+' .pill').forEach(b=>{const active=(isDate?b.dataset.date:b.dataset.duration)===state[key]&&state[key];b.classList.toggle('active',Boolean(active));b.setAttribute('aria-pressed',String(Boolean(active)))});
  if(isDate)updateSummary();render();return}
 const more=e.target.closest('.more-filter');if(more){const content=more.nextElementSibling;content.hidden=!content.hidden;more.setAttribute('aria-expanded',String(!content.hidden));more.lastElementChild.textContent=content.hidden?'＋':'−'}
});
$('#filter-panel').addEventListener('change',e=>{if(e.target.id==='price-min'||e.target.id==='price-max'){
 state.min=Number($('#price-min').value);state.max=Number($('#price-max').value);
 if(state.min>state.max){if(e.target.id==='price-min'){$('#price-max').value=state.min;state.max=state.min}else{$('#price-min').value=state.max;state.min=state.max}}
 $('#min-label').textContent='$'+state.min.toLocaleString();$('#max-label').textContent='$'+state.max.toLocaleString();
  updateRangeTrack();
 }render()});
$('#sort').addEventListener('change',render);
$('#show-more').addEventListener('click',()=>{expanded=true;render()});
$('#mobile-filter-toggle').addEventListener('click',e=>{const opened=$('#filter-panel').classList.toggle('mobile-open');e.currentTarget.setAttribute('aria-expanded',String(opened));e.currentTarget.innerHTML=opened?'Hide filters <span>−</span>':'Show filters <span>＋</span>'});
$('#menu-toggle').addEventListener('click',e=>{const opened=$('#navlinks').classList.toggle('open');e.currentTarget.setAttribute('aria-expanded',String(opened));e.currentTarget.setAttribute('aria-label',opened?'Close navigation':'Open navigation')});
$('#edit-search').addEventListener('click',()=>showDialog(`<h2 id="dialog-title">Edit your search</h2><p>Tell us who is travelling and when you would like to go.</p><form class="search-form" id="search-form"><label>Departure airport<select name="airport"><option value="ORD">Chicago, IL · ORD O’Hare</option><option value="MDW">Chicago, IL · MDW Midway</option></select></label><label>Travel month<select name="month"><option>December 2026</option><option>November 2026</option><option>January 2027</option><option>February 2027</option></select></label><label>Adults<input name="adults" type="number" min="1" value="2"></label><label>Children<input name="children" type="number" min="0" value="1"></label><label>Infants<input name="infants" type="number" min="0" value="0"></label><button type="submit">Update search</button></form>`));
$('#dialog-content').addEventListener('submit',e=>{if(e.target.id!=='search-form')return;e.preventDefault();const form=new FormData(e.target),code=form.get('airport'),month=form.get('month');$('input[name="departure"][value="'+code+'"]').checked=true;const short=String(month).replace('December','Dec').replace('November','Nov').replace('January','Jan').replace('February','Feb');state.date=short;$('#summary-date').textContent=String(month);$('#summary-travelers').textContent=`${form.get('adults')} adults · ${form.get('children')} child · ${form.get('infants')} infants`;updateSummary();render();closeDialog()});
$('#dialog-close').addEventListener('click',closeDialog);$('#dialog-backdrop').addEventListener('click',e=>{if(e.target.id==='dialog-backdrop')closeDialog()});
$('#dialog-content').addEventListener('click',e=>{if(e.target.id==='dialog-done')closeDialog()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeDialog();if(e.key==='Tab'&&$('#dialog-backdrop').classList.contains('open')){const focusables=$$('button,a,input,select', $('#dialog-content')).concat([$('#dialog-close')]).filter(el=>!el.disabled);if(e.shiftKey&&document.activeElement===focusables[0]){e.preventDefault();focusables.at(-1).focus()}else if(!e.shiftKey&&document.activeElement===focusables.at(-1)){e.preventDefault();focusables[0].focus()}}});
 updateRangeTrack();render();
