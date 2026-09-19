(function() {
  'use strict';

  /* ─── Workout Data (From Source PDF) ─── */
  const workoutData = [
    { "day": 1, "title": "MONDAY", "exercises": [
      { "name": "Puxada Alta Polia", "details": "3 × 10-12" },
      { "name": "Remada Baixa", "details": "3 × 10-12" },
      { "name": "Supino Inclinado", "details": "3 × 10-12" },
      { "name": "Crucifixo Inverso", "details": "3 × 12-15" },
      { "name": "Elevação Lateral", "details": "3 × 12-15" },
      { "name": "Abdominal", "details": "3 × 15" }
    ]},
    { "day": 2, "title": "TUESDAY", "exercises": [
      { "name": "Elevação Pélvica", "details": "4 × 8-10" },
      { "name": "Leg Press 45°", "details": "3 × 10-12" },
      { "name": "Extensão Lombar", "details": "2 × 12-15" },
      { "name": "Mesa Flexora", "details": "3 × 10-12" },
      { "name": "Cadeira Abdutora", "details": "3 × 15-20" },
      { "name": "Panturrilha", "details": "3 × 12-15" },
      { "name": "Abdominal", "details": "3 × 15" }
    ]},
    { "day": 3, "title": "WEDNESDAY", "exercises": [
      { "name": "Remada Articulada", "details": "3 × 10-12" },
      { "name": "Puxada Aberta", "details": "2 × 10-12" },
      { "name": "Desenvolvimento", "details": "3 × 10-12" },
      { "name": "Elevação Lateral", "details": "4 × 12-15" },
      { "name": "Tríceps Corda", "details": "3 × 12-15" },
      { "name": "Abdominal", "details": "3 × 15" }
    ]},
    { "day": 4, "title": "THURSDAY", "exercises": [
      { "name": "Búlgaro", "details": "3 × 8-10" },
      { "name": "Coice Polia", "details": "3 × 12" },
      { "name": "Cadeira Extensora", "details": "3 × 12-15" },
      { "name": "Cadeira Flexora", "details": "3 × 12-15" },
      { "name": "Panturrilha", "details": "3 × 12-15" },
      { "name": "Abdominal", "details": "3 × 15" }
    ]},
    { "day": 5, "title": "FRIDAY", "exercises": [
      { "name": "Pullover Polia Alta", "details": "3 × 12-15" },
      { "name": "Face Pull", "details": "3 × 15" },
      { "name": "Remada Baixa", "details": "3 × 10-12" },
      { "name": "Rosca Direta", "details": "3 × 10-12" },
      { "name": "Tríceps Barra Reta", "details": "3 × 10-12" },
      { "name": "Abdominal", "details": "3 × 15" }
    ]},
    { "day": 6, "title": "SATURDAY", "exercises": [
      { "name": "Elevação Pélvica", "details": "3 × 8-10" },
      { "name": "Agachamento", "details": "3 × 10-12" },
      { "name": "Cadeira Abdutora", "details": "3 × 15-20" },
      { "name": "Cadeira Extensora", "details": "3 × 12-15" },
      { "name": "Panturrilha", "details": "3 × 12-15" },
      { "name": "Abdominal", "details": "3 × 15" }
    ]},
    { "day": 7, "title": "SUNDAY", "exercises": [] }
  ];

  /* ─── State ───────────────────────────────────────────────────── */
  let progress      = JSON.parse(localStorage.getItem('workoutSysProgress')) || {};
  let completedDays = JSON.parse(localStorage.getItem('workoutSysCompletedDays')) || [];
  let lastTouched   = JSON.parse(localStorage.getItem('workoutSysLastTouched')) || {};
  let activeTimer   = null;

  /* ─── Helpers ─────────────────────────────────────────────────── */
  const parseSets = (details) => {
    const m = details.match(/^(\d+)\s*[×xX]/);
    return m ? parseInt(m[1], 10) : 1;
  };

  const save = () => {
    localStorage.setItem('workoutSysProgress', JSON.stringify(progress));
    localStorage.setItem('workoutSysLastTouched', JSON.stringify(lastTouched));
  };

  const getMondayOfCurrentWeek = () => {
    const d = new Date();
    const day = d.getDay();
    const diff = d.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(d.setDate(diff)).toDateString();
  };

  /* ─── WORKOUT SYSTEM ──────────────────────────────────────────── */
  function renderWorkout(idx) {
    const data = workoutData[idx];
    const list = document.getElementById('exercise-list');
    const compList = document.getElementById('completed-list');
    const compSection = document.getElementById('completed-section');
    const fill = document.getElementById('progress-bar-fill');
    const progressLabel = document.getElementById('progress-label');

    document.getElementById('workout-title').textContent = data.title;

    list.innerHTML = '';
    compList.innerHTML = '';

    const items = [...(data.exercises || [])];

    if (items.length === 0) {
      compSection.classList.add('hidden');
      fill.parentElement.classList.add('hidden');
      progressLabel.classList.add('hidden');
      list.innerHTML = `<li class="rest-day-message"><h3>Rest Day</h3><p>System recovery initiated.</p></li>`;
      return;
    }

    let total = 0, done = 0;
    const activeNodesData = [];
    const pendingNodes    = [];
    const completedNodes  = [];

    items.forEach((ex, i) => {
      const id = `d${idx}-e${i}`;
      const sTotal = parseSets(ex.details);
      const sCurrent = Math.min(progress[id] || 0, sTotal);

      total += sTotal;
      done  += sCurrent;

      const li = document.createElement('li');
      li.className = 'exercise-item';
      li.innerHTML = `
        <div class="set-counter ${sCurrent >= sTotal ? 'sets-complete' : ''}">${sCurrent}<span class="slash">/</span>${sTotal}</div>
        <span class="exercise-name">${ex.name}</span>
        <div class="exercise-details-text">${ex.details}</div>
      `;

      let pressTimer, isLongPress = false, startX = 0, startY = 0;

      li.addEventListener('pointerdown', (e) => {
        isLongPress = false;
        startX = e.clientX; startY = e.clientY;
        li.setPointerCapture(e.pointerId);
        pressTimer = setTimeout(() => {
          isLongPress = true;
          if (navigator.vibrate) navigator.vibrate(40);
          const newVal = Math.max(0, (progress[id] || 0) - 1);
          progress[id] = newVal;
          lastTouched[id] = Date.now();
          if (newVal < sTotal && activeTimer) {
            clearInterval(activeTimer);
            document.getElementById('timer-display').classList.remove('visible');
            activeTimer = null;
          }
          save();
          renderWorkout(idx);
        }, 450);
      });

      li.addEventListener('pointermove', (e) => {
        if (Math.abs(e.clientY - startY) > 12 || Math.abs(e.clientX - startX) > 12) clearTimeout(pressTimer);
      });

      li.addEventListener('pointerup', (e) => {
        clearTimeout(pressTimer);
        if (isLongPress) return;
        const newVal = Math.min(sTotal, (progress[id] || 0) + 1);
        progress[id] = newVal;
        lastTouched[id] = Date.now();
        if (newVal < sTotal) startTimer(60); // 60s hardcoded rest[cite: 11]
        save();
        renderWorkout(idx);
      });

      li.addEventListener('pointercancel', () => clearTimeout(pressTimer));
      li.addEventListener('contextmenu', (e) => e.preventDefault());

      if (sCurrent >= sTotal) completedNodes.push(li);
      else if (sCurrent > 0) activeNodesData.push({ node: li, ts: lastTouched[id] || 0 });
      else pendingNodes.push(li);
    });

    activeNodesData.sort((a, b) => b.ts - a.ts);
    activeNodesData.forEach((item, index) => {
      item.node.classList.add(index === 0 ? 'primary-active' : 'secondary-active');
      list.appendChild(item.node);
    });
    pendingNodes.forEach(node => list.appendChild(node));
    completedNodes.forEach(node => compList.appendChild(node));

    fill.parentElement.classList.remove('hidden');
    progressLabel.classList.remove('hidden');
    fill.style.width = `${(done / total) * 100}%`;
    progressLabel.textContent = `${done} / ${total} SETS`;

    compSection.classList.toggle('hidden', compList.children.length === 0);

    if (done === total && total > 0 && !completedDays.includes(`day-${idx}`)) {
      completedDays.push(`day-${idx}`);
      localStorage.setItem('workoutSysCompletedDays', JSON.stringify(completedDays));
      document.querySelectorAll('.day-btn')[idx].classList.add('day-complete');
      showCompletion(data.title);
    }
  }

  function startTimer(sec) {
    if (activeTimer) { clearInterval(activeTimer); activeTimer = null; }
    const end = Date.now() + sec * 1000;
    const el = document.getElementById('timer-display');
    el.classList.add('visible');

    function tick() {
      const rem = Math.ceil((end - Date.now()) / 1000);
      if (rem <= 0) {
        clearInterval(activeTimer);
        activeTimer = null;
        el.classList.remove('visible');
        if (navigator.vibrate) navigator.vibrate([80, 40, 80]);
      } else {
        el.textContent = `${Math.floor(rem / 60)}:${(rem % 60).toString().padStart(2, '0')}`;
      }
    }
    tick();
    activeTimer = setInterval(tick, 500);
  }

  function showCompletion(title) {
    document.getElementById('completion-message').textContent = `${title} complete.`;
    const el = document.getElementById('completion-overlay');
    el.classList.add('visible');
    
    // Ghost Click Neutralizer
    setTimeout(() => {
      el.onclick = () => {
        el.classList.remove('visible');
        el.onclick = null;
      };
    }, 150);
  }

  /* ─── INIT ────────────────────────────────────────────────────── */
  function init() {
    const savedWeek = localStorage.getItem('workoutSysCurrentWeek');
    const currentWeek = getMondayOfCurrentWeek();
    
    if (savedWeek && savedWeek !== currentWeek) {
      ['workoutSysProgress','workoutSysCompletedDays','workoutSysLastTouched'].forEach(k => localStorage.removeItem(k));
      progress = {}; completedDays = []; lastTouched = {};
      localStorage.setItem('workoutSysCurrentWeek', currentWeek);
    } else if (!savedWeek) {
      localStorage.setItem('workoutSysCurrentWeek', currentWeek);
    }

    const daySel = document.getElementById('day-selector');

    ['MO','TU','WE','TH','FR','SA','SU'].forEach((l, i) => {
      const b = document.createElement('button');
      b.className = 'day-btn';
      b.setAttribute('role', 'tab');
      b.textContent = l;
      if (completedDays.includes(`day-${i}`)) b.classList.add('day-complete');
      b.addEventListener('click', () => {
        if (navigator.vibrate) navigator.vibrate(15);
        document.querySelectorAll('.day-btn').forEach(x => x.classList.remove('active'));
        b.classList.add('active');
        renderWorkout(i);
      });
      daySel.appendChild(b);
    });

    const savedTheme = localStorage.getItem('workoutSysTheme');
    if (savedTheme) document.body.dataset.theme = savedTheme;
    
    document.getElementById('theme-toggle-btn').addEventListener('click', () => {
      if (navigator.vibrate) navigator.vibrate(15);
      const next = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
      document.body.dataset.theme = next;
      localStorage.setItem('workoutSysTheme', next);
    });

    const resetOverlay = document.getElementById('reset-modal-overlay');
    resetOverlay.addEventListener('click', function(e) { if (e.target === this) this.classList.remove('visible'); });
    document.getElementById('reset-button').addEventListener('click', () => resetOverlay.classList.add('visible'));

    document.getElementById('confirm-reset-btn').addEventListener('click', () => {
      ['workoutSysProgress','workoutSysCompletedDays','workoutSysLastTouched'].forEach(k => localStorage.removeItem(k));
      progress = {}; completedDays = []; lastTouched = {};
      resetOverlay.classList.remove('visible');
      document.querySelectorAll('.day-btn').forEach(b => b.classList.remove('day-complete'));
      const activeIdx = Array.from(daySel.children).findIndex(b => b.classList.contains('active'));
      renderWorkout(activeIdx !== -1 ? activeIdx : ((new Date().getDay() + 6) % 7));
    });
    
    document.getElementById('cancel-reset-btn').addEventListener('click', () => resetOverlay.classList.remove('visible'));

    const today = (new Date().getDay() + 6) % 7;
    daySel.children[today].click();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
