(function() {
  'use strict';

  /* ─── Workout Data (From Source PDF) ─── */
  const workoutData = [
    { "day": 1, "title": "MONDAY", "exercises": [
      { "name": "Puxada Alta Polia", "details": "3 × 10-12", "instructions": "EXECUÇÃO: Peito estufado, puxe a barra em direção ao peito. Alongue bem na fase de subida." },
      { "name": "Remada Baixa", "details": "3 × 10-12", "instructions": "EXECUÇÃO: Tronco estabilizado. Puxe a barra no abdômen, esmagando as escápulas." },
      { "name": "Supino Inclinado", "details": "3 × 10-12", "instructions": "EXECUÇÃO: Desça a barra ou halteres controladamente até o peito e empurre sem travar totalmente os cotovelos no topo." },
      { "name": "Crucifixo Inverso", "details": "3 × 12-15", "instructions": "EXECUÇÃO: Mantenha os braços ligeiramente flexionados. Foque em contrair a parte posterior do ombro, não as costas." },
      { "name": "Elevação Lateral", "details": "3 × 12-15", "instructions": "EXECUÇÃO: Movimento controlado. Levante até a linha do ombro mantendo os cotovelos levemente flexionados." },
      { "name": "Abdominal", "details": "3 × 15", "instructions": "EXECUÇÃO: Contraia o abdômen para flexionar o tronco. Evite puxar o pescoço." }
    ]},
    { "day": 2, "title": "TUESDAY", "exercises": [
      { "name": "Elevação Pélvica", "details": "4 × 8-10", "instructions": "EXECUÇÃO: Empurre com os calcanhares. Faça uma pausa de 1-2 segundos na contração máxima dos glúteos." },
      { "name": "Leg Press 45°", "details": "3 × 10-12", "instructions": "EXECUÇÃO: Posicione os pés na largura dos ombros. Desça o máximo sem tirar o quadril do banco." },
      { "name": "Extensão Lombar", "details": "2 × 12-15", "instructions": "EXECUÇÃO: Arredonde levemente as costas e puxe o tronco usando os glúteos e a lombar." },
      { "name": "Mesa Flexora", "details": "3 × 10-12", "instructions": "EXECUÇÃO: Mantenha o quadril fixo na almofada. Foco na contração dos posteriores de coxa." },
      { "name": "Cadeira Abdutora", "details": "3 × 15-20", "instructions": "EXECUÇÃO: Incline o tronco levemente para frente. Empurre os joelhos para fora com explosão." },
      { "name": "Panturrilha", "details": "3 × 12-15", "instructions": "EXECUÇÃO: Máximo alongamento na descida. Pausa no alongamento e contração forte no topo." },
      { "name": "Abdominal", "details": "3 × 15", "instructions": "EXECUÇÃO: Foco total no core." }
    ]},
    { "day": 3, "title": "WEDNESDAY", "exercises": [
      { "name": "Remada Articulada", "details": "3 × 10-12", "instructions": "EXECUÇÃO: Puxe os cotovelos o mais para trás possível. Foco na contração do latíssimo." },
      { "name": "Puxada Aberta", "details": "2 × 10-12", "instructions": "EXECUÇÃO: Movimento focado na largura das costas. Controle bem a fase excêntrica." },
      { "name": "Desenvolvimento", "details": "3 × 10-12", "instructions": "EXECUÇÃO: Empurre o peso controlando a descida até a altura do queixo." },
      { "name": "Elevação Lateral", "details": "4 × 12-15", "instructions": "EXECUÇÃO: Puxe o peso com a lateral dos ombros, não balance o corpo." },
      { "name": "Tríceps Corda", "details": "3 × 12-15", "instructions": "EXECUÇÃO: Cotovelos fixos. Separe a corda no final do movimento para contração total." },
      { "name": "Abdominal", "details": "3 × 15", "instructions": "EXECUÇÃO: Mantenha tensão constante." }
    ]},
    { "day": 4, "title": "THURSDAY", "exercises": [
      { "name": "Búlgaro", "details": "3 × 8-10", "instructions": "EXECUÇÃO: Incline o tronco para frente para focar mais nos glúteos. Desça controladamente." },
      { "name": "Coice Polia", "details": "3 × 12", "instructions": "EXECUÇÃO: Chute para trás diagonalmente. Foco na prateleira superior do glúteo." },
      { "name": "Cadeira Extensora", "details": "3 × 12-15", "instructions": "EXECUÇÃO: Estenda totalmente o joelho. Pausa de 1s na contração máxima." },
      { "name": "Cadeira Flexora", "details": "3 × 12-15", "instructions": "EXECUÇÃO: Mantenha o peito estufado e não levante o quadril do banco durante o movimento." },
      { "name": "Panturrilha", "details": "3 × 12-15", "instructions": "EXECUÇÃO: Ritmo constante. Controle a descida por 3 segundos." },
      { "name": "Abdominal", "details": "3 × 15", "instructions": "EXECUÇÃO: Controle a respiração, soltando o ar na contração." }
    ]},
    { "day": 5, "title": "FRIDAY", "exercises": [
      { "name": "Pullover Polia Alta", "details": "3 × 12-15", "instructions": "EXECUÇÃO: Mantenha os braços estendidos e puxe a barra até a linha do quadril usando as dorsais." },
      { "name": "Face Pull", "details": "3 × 15", "instructions": "EXECUÇÃO: Puxe na direção da testa, rotacionando as mãos para fora no final do movimento." },
      { "name": "Remada Baixa", "details": "3 × 10-12", "instructions": "EXECUÇÃO: Mantenha o core rígido. Cotovelos raspando o corpo." },
      { "name": "Rosca Direta", "details": "3 × 10-12", "instructions": "EXECUÇÃO: Cotovelos travados na lateral do corpo. Movimento sem balanço das costas." },
      { "name": "Tríceps Barra Reta", "details": "3 × 10-12", "instructions": "EXECUÇÃO: Foque em estender totalmente os braços, mantendo os ombros para baixo." },
      { "name": "Abdominal", "details": "3 × 15", "instructions": "EXECUÇÃO: Abdômen contraído do início ao fim." }
    ]},
    { "day": 6, "title": "SATURDAY", "exercises": [
      { "name": "Elevação Pélvica", "details": "3 × 8-10", "instructions": "EXECUÇÃO: Foco total no pico de contração dos glúteos." },
      { "name": "Agachamento", "details": "3 × 10-12", "instructions": "EXECUÇÃO: Base firme. Desça quebrando a paralela se a mobilidade permitir, com o peito alto." },
      { "name": "Cadeira Abdutora", "details": "3 × 15-20", "instructions": "EXECUÇÃO: Encoste no banco. Empurre para fora com máxima força." },
      { "name": "Cadeira Extensora", "details": "3 × 12-15", "instructions": "EXECUÇÃO: Picos de contração fortes. Sobreviva à queimação." },
      { "name": "Panturrilha", "details": "3 × 12-15", "instructions": "EXECUÇÃO: Não permita impulso na parte baixa do movimento." },
      { "name": "Abdominal", "details": "3 × 15", "instructions": "EXECUÇÃO: Último do ciclo. Concentração total." }
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
        <button class="info-btn" aria-label="Instructions"></button>
      `;

      let pressTimer, isLongPress = false, startX = 0, startY = 0;

      li.addEventListener('pointerdown', (e) => {
        if (e.target.closest('.info-btn')) return;
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
        if (isLongPress || e.target.closest('.info-btn')) return;
        const newVal = Math.min(sTotal, (progress[id] || 0) + 1);
        progress[id] = newVal;
        lastTouched[id] = Date.now();
        if (newVal < sTotal) startTimer(60); // 60s hardcoded rest
        save();
        renderWorkout(idx);
      });

      li.addEventListener('pointercancel', () => clearTimeout(pressTimer));
      li.addEventListener('contextmenu', (e) => e.preventDefault());

      li.querySelector('.info-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        showInfo(ex.name, ex.instructions || '');
      });

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

  function showInfo(title, text) {
    document.getElementById('info-modal-title').textContent = title;
    document.getElementById('info-modal-instructions').innerHTML = text
      .split(/(EXECUÇÃO:|SETUP:)/g)
      .filter(Boolean)
      .map(l => {
        l = l.trim();
        return /^(EXECUÇÃO:|SETUP:)$/.test(l)
          ? `<span class="instruction-label">${l.replace(':', '')}</span>`
          : `<p>${l}</p>`;
      }).join('');
    document.getElementById('info-modal-overlay').classList.add('visible');
  }

  function showCompletion(title) {
    document.getElementById('completion-message').textContent = `${title} complete.`;
    const el = document.getElementById('completion-overlay');
    el.classList.add('visible');
    
    // Ghost Click Neutralizer
    const showTime = Date.now();
    el.onclick = (e) => {
      if (Date.now() - showTime > 400) {
        el.classList.remove('visible');
        el.onclick = null;
      }
    };
  }

  /* ─── INIT ────────────────────────────────────────────────────── */
  function init() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').catch(() => {});
      });
    }

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

    ['MON','TUE','WED','THU','FRI','SAT','SUN'].forEach((l, i) => {
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

    const infoOverlay = document.getElementById('info-modal-overlay');
    infoOverlay.addEventListener('click', function(e) { if (e.target === this) this.classList.remove('visible'); });
    document.getElementById('info-modal-close-btn').addEventListener('click', () => infoOverlay.classList.remove('visible'));

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
