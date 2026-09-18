const menuBtn=document.getElementById('menuBtn'), nav=document.getElementById('navLinks');
menuBtn.addEventListener('click',()=>nav.classList.toggle('show'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('show')));
document.getElementById('contactForm').addEventListener('submit',function(e){e.preventDefault();document.getElementById('formMessage').textContent='Thank you! Demo form submitted successfully.';this.reset();});