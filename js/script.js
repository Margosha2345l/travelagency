// Сайт розроблено студентом [Ваше ПІБ], група [Ваша група]
function setActiveNav(){
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(link => {
    if(link.getAttribute('href') === current){ link.classList.add('active'); }
  });
}
function openBooking(name, price){
  const panel = document.getElementById('bookingPanel');
  if(!panel) return;
  document.getElementById('tourName').value = name;
  document.getElementById('tourPrice').value = price;
  document.getElementById('tourDate').value = '';
  document.getElementById('tourPeople').value = 1;
  document.getElementById('tourTransfer').value = 'Ні';
  document.getElementById('bookingResult').innerHTML = '';
  panel.style.display = 'block';
  panel.scrollIntoView({behavior:'smooth'});
}
function calculateTotal(){
  const name = document.getElementById('tourName').value;
  const price = Number(document.getElementById('tourPrice').value);
  const date = document.getElementById('tourDate').value;
  const people = Number(document.getElementById('tourPeople').value);
  const transfer = document.getElementById('tourTransfer').value;
  const result = document.getElementById('bookingResult');
  if(!name){ alert('Спочатку оберіть тур.'); return; }
  if(!date){ alert('Оберіть дату поїздки.'); return; }
  if(!people || people < 1){ alert('Вкажіть коректну кількість осіб.'); return; }
  let total = price * people, discount = 0, transferCost = 0;
  if(people >= 4){ discount = total * 0.1; total -= discount; }
  if(transfer === 'Так'){ transferCost = 400 * people; total += transferCost; }
  result.innerHTML = `<b>Тур:</b> ${name}<br><b>Дата:</b> ${date}<br><b>Кількість осіб:</b> ${people}<br><b>Трансфер:</b> ${transfer}<br><b>Базова вартість:</b> ${(price*people).toFixed(0)} грн<br><b>Знижка:</b> ${discount.toFixed(0)} грн<br><b>Трансфер:</b> ${transferCost.toFixed(0)} грн<br><b>До сплати:</b> ${total.toFixed(0)} грн`;
}
document.addEventListener('DOMContentLoaded', setActiveNav);
