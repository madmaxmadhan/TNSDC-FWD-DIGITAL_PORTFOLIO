(function(){

  const slides = document.getElementById('slides');

  const dots = document.querySelectorAll('.dot');

  // nav dot click

  dots.forEach(d => {

    d.addEventListener('click', () => {

      document.getElementById(d.dataset.target).scrollIntoView({behavior:'smooth'});

    });

  });

  // section observer

  const observer = new IntersectionObserver(entries => {

    entries.forEach(e => {

      if(e.isIntersecting){

        const card = e.target.querySelector('.reveal');

        if(card) card.classList.add('visible');

        // animate skill bars

        if(e.target.id === 'skills'){

          document.querySelectorAll('.fill').forEach(f => {

            f.style.width = f.dataset.width || '70%';

          });

        }

        // highlight dot

        dots.forEach(dot => dot.classList.toggle('active', dot.dataset.target === e.target.id));

      }

    });

  }, {threshold:0.35});

  document.querySelectorAll('.slide').forEach(s => observer.observe(s));

  // keyboard navigation

  window.addEventListener('keydown', ev => {

    if(ev.key === 'ArrowDown' || ev.key === 'PageDown'){

      ev.preventDefault();

      slides.scrollBy({ top: window.innerHeight * 0.92, behavior: 'smooth' });

    } else if(ev.key === 'ArrowUp' || ev.key === 'PageUp'){

      ev.preventDefault();

      slides.scrollBy({ top: -window.innerHeight * 0.92, behavior: 'smooth' });

    }

  });

  // project click placeholder

  document.querySelectorAll('.project').forEach(p => {

    p.addEventListener('click', ()=> alert('Open project case study — replace with a real link.'));

  });

})();