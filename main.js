(function () {
  'use strict';

  document.documentElement.style.cursor = 'auto';

  var departments = [
    { name: 'Cardiology', text: 'Comprehensive cardiac care from diagnostics to advanced interventions — led by board-certified cardiologists.', cat: 'clinical', href: 'https://www.abeergroup.com/' },
    { name: 'Neurology', text: 'Expert neurological assessment, imaging, and treatment for brain, spine, and nervous system disorders.', cat: 'clinical', href: 'https://www.abeergroup.com/' },
    { name: 'Orthopedics', text: 'Advanced musculoskeletal care — joint replacement, sports medicine, and minimally invasive spine surgery.', cat: 'surgical', href: 'https://www.abeergroup.com/' },
    { name: 'Dermatology', text: 'Premium cosmetic and clinical dermatology — laser to complex conditions, curated for GCC patients.', cat: 'clinical', href: 'https://www.abeergroup.com/' },
    { name: 'Gynecology & Obstetrics', text: "Comprehensive women's health from prenatal to postnatal — privacy, compassion, clinical excellence.", cat: 'clinical', href: 'https://www.abeergroup.com/' },
    { name: 'Pediatrics', text: 'Child-centered care — newborn screenings through adolescent health in a calm, reassuring environment.', cat: 'clinical', href: 'https://www.abeergroup.com/' },
    { name: 'Dental Care', text: 'Implants, orthodontics, cosmetic dentistry, and emergency dental — full-spectrum oral health.', cat: 'clinical', href: 'https://www.abeergroup.com/' },
    { name: 'Ophthalmology', text: 'LASIK, cataract surgery, and advanced diagnostics with precision-first surgical protocols.', cat: 'surgical', href: 'https://www.abeergroup.com/' },
    { name: 'Home Care', text: 'Professional nursing and medical care at home — extending our standard beyond our walls.', cat: 'wellness', href: 'https://www.abeergroup.com/' },
    { name: 'Radiology', text: 'High-field imaging and subspecialty reads — fast, accurate, and seamlessly integrated.', cat: 'diagnostic', href: 'https://www.abeergroup.com/' },
    { name: 'Psychiatry', text: 'Discreet mental health support with evidence-based therapies tailored to regional context.', cat: 'clinical', href: 'https://www.abeergroup.com/' },
    { name: 'Physiotherapy', text: 'Recovery programs combining manual therapy, technology, and measurable mobility outcomes.', cat: 'wellness', href: 'https://www.abeergroup.com/' },
    { name: 'Urology', text: 'Minimally invasive urologic surgery and chronic condition management with clear care pathways.', cat: 'surgical', href: 'https://www.abeergroup.com/' },
    { name: 'ENT', text: 'Advanced ear, nose, and throat care — voice, airway, sinus, and hearing restoration.', cat: 'surgical', href: 'https://www.abeergroup.com/' },
    { name: 'Laboratory', text: 'Accredited labs with rapid turnaround and digital results integrated into your care team.', cat: 'diagnostic', href: 'https://www.abeergroup.com/' },
    { name: 'General Surgery', text: 'Advanced minimally invasive and open procedures with enhanced recovery pathways and senior surgical teams.', cat: 'surgical', href: 'https://www.abeergroup.com/' },
    { name: 'Internal Medicine', text: 'Complex adult medicine, preventive screening, and longitudinal care coordinated across specialties.', cat: 'clinical', href: 'https://www.abeergroup.com/' },
    { name: 'Emergency Medicine', text: '24/7 rapid response, trauma-ready protocols, and seamless escalation to inpatient services.', cat: 'clinical', href: 'https://www.abeergroup.com/' },
    { name: 'Anesthesiology', text: 'Perioperative safety, pain management, and precision anesthesia for surgical and interventional suites.', cat: 'surgical', href: 'https://www.abeergroup.com/' }
  ];

  var testimonials = [
    { quote: 'The level of care was extraordinary — every doctor and nurse treated me with compassion I have never experienced before.', who: 'Fatima Al-Mansouri', where: 'Jeddah, Saudi Arabia' },
    { quote: 'After my cardiac procedure, I feel like a new person. Every step was explained with clarity; follow-up was meticulous.', who: 'Mohammed Al-Ahmadi', where: 'Riyadh, Saudi Arabia' },
    { quote: 'I traveled from Qatar for Abeer’s neurological team. The international reputation is well deserved.', who: 'Hamad Al-Qassimi', where: 'Doha, Qatar' },
    { quote: 'As a mother, finding pediatricians I trust was everything — thorough, patient, and genuinely kind.', who: 'Layla Al-Khalidi', where: 'Dubai, UAE' },
    { quote: 'Knee replacement with remarkable precision — recovery was smooth and faster than I expected.', who: 'Sultan Al-Otaibi', where: 'Muscat, Oman' },
    { quote: 'Dermatology understood my skin type, culture, and concerns completely — results exceeded expectations.', who: 'Noura Al-Sabah', where: 'Kuwait City, Kuwait' }
  ];

  function buildDepartments(filter) {
    var grid = document.getElementById('deptGrid');
    if (!grid) return;
    grid.innerHTML = '';
    departments.forEach(function (d) {
      if (filter !== 'all' && d.cat !== filter) return;
      var article = document.createElement('article');
      article.className = 'dept-card reveal is-visible';
      article.dataset.cat = d.cat;
      article.innerHTML = '<h3>' + d.name + '</h3><p>' + d.text + '</p><a href="' + d.href + '" target="_blank" rel="noopener noreferrer">Learn more →</a>';
      grid.appendChild(article);
    });
  }

  document.querySelectorAll('.filters button').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var currentFilter = btn.getAttribute('data-filter') || 'all';
      document.querySelectorAll('.filters button').forEach(function (b) {
        b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
      });
      buildDepartments(currentFilter);
    });
  });
  buildDepartments('all');

  function buildTestimonials() {
    var track = document.getElementById('testiTrack');
    if (!track) return;
    function card(t) {
      return '<figure class="testi-card"><div class="stars" aria-label="5 stars">★★★★★</div><blockquote>“' + t.quote + '”</blockquote><figcaption>' + t.who + '<span>' + t.where + '</span></figcaption></figure>';
    }
    track.innerHTML = testimonials.map(card).join('') + testimonials.map(card).join('');
  }
  buildTestimonials();

  var header = document.querySelector('.site-header');
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('primary-nav');

  function setNavOpen(isOpen) {
    if (!toggle || !header) return;
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    header.classList.toggle('nav-open', isOpen);
    document.body.classList.toggle('nav-lock', isOpen);
    toggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  }

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      setNavOpen(!open);
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        setNavOpen(false);
      });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setNavOpen(false);
    });
  }

  function onScroll() {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 8);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduceMotion) {
    var els = [].slice.call(document.querySelectorAll('.reveal'));
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );
    els.forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-visible'); });
  }

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function animateCount(el, target, suffix, duration) {
    var startTime = null;
    function step(ts) {
      if (!startTime) startTime = ts;
      var p = Math.min((ts - startTime) / duration, 1);
      var eased = easeOutCubic(p);
      var val = Math.round(target * eased);
      el.textContent = val + suffix;
      if (p < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target + suffix;
      }
    }
    el.textContent = '0' + suffix;
    requestAnimationFrame(step);
  }

  function animateMillions(el) {
    var target = 3;
    var startTime = null;
    var duration = 1300;
    function step(ts) {
      if (!startTime) startTime = ts;
      var p = Math.min((ts - startTime) / duration, 1);
      var val = Math.round(target * easeOutCubic(p));
      el.textContent = val + 'M+';
      if (p < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = '3M+';
      }
    }
    el.textContent = '0M+';
    requestAnimationFrame(step);
  }

  var metricObserver = new IntersectionObserver(
    function (entries, obs) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        entry.target.querySelectorAll('.num').forEach(function (el) {
          var target = parseInt(el.getAttribute('data-target') || '0', 10);
          var suffix = el.getAttribute('data-suffix') || '';
          if (reduce) {
            el.textContent = suffix === 'M+' ? '3M+' : target + suffix;
          } else if (suffix === 'M+') {
            animateMillions(el);
          } else {
            animateCount(el, target, suffix, target > 800 ? 1500 : 1100);
          }
        });
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.25 }
  );
  var metricsEl = document.querySelector('.metrics');
  if (metricsEl) metricObserver.observe(metricsEl);

  var form = document.getElementById('apptForm');
  var ok = document.getElementById('formSuccess');
  if (form && ok) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      ok.classList.add('is-visible');
      form.reset();
      ok.focus();
    });
  }

  var y = document.getElementById('y');
  if (y) y.textContent = String(new Date().getFullYear());
})();
