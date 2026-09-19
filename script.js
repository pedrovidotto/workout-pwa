(function() {
  'use strict';

  /* ─── Workout Data (Friendly & Neutral Portuguese) ─── */
  const workoutData = [
    { "day": 1, "title": "Monday", "exercises": [
      { "name": "Puxada Alta Polia", "details": "3 × 10-12", "instructions": "EXECUÇÃO: Mantenha a postura ereta e puxe a barra em direção ao peito. Estenda os braços de forma controlada na subida." },
      { "name": "Remada Baixa", "details": "3 × 10-12", "instructions": "EXECUÇÃO: Estabilize o tronco. Puxe a barra em direção ao abdômen, aproximando bem as escápulas." },
      { "name": "Supino Inclinado", "details": "3 × 10-12", "instructions": "EXECUÇÃO: Desça controladamente até a altura do peito e empurre sem travar totalmente os cotovelos no topo." },
      { "name": "Crucifixo Inverso", "details": "3 × 12-15", "instructions": "EXECUÇÃO: Braços ligeiramente flexionados. Concentre-se no movimento da parte posterior do ombro." },
      { "name": "Elevação Lateral", "details": "3 × 12-15", "instructions": "EXECUÇÃO: Movimento suave e controlado. Levante até a linha dos ombros." },
      { "name": "Abdominal", "details": "3 × 15", "instructions": "EXECUÇÃO: Contraia o abdômen sem forçar ou puxar a região do pescoço." }
    ]},
    { "day": 2, "title": "Tuesday", "exercises": [
      { "name": "Elevação Pélvica", "details": "4 × 8-10", "instructions": "EXECUÇÃO: Empurre o peso através dos calcanhares. Faça uma pausa breve no topo do movimento." },
      { "name": "Leg Press 45°", "details": "3 × 10-12", "instructions": "EXECUÇÃO: Pés na largura dos ombros. Desça de maneira controlada, mantendo o quadril firme no banco." },
      { "name": "Extensão Lombar", "details": "2 × 12-15", "instructions": "EXECUÇÃO: Arredonde levemente as costas e retorne a posição contraindo os glúteos." },
      { "name": "Mesa Flexora", "details": "3 × 10-12", "instructions": "EXECUÇÃO: Mantenha o quadril bem apoiado. Concentre a força na parte posterior da coxa." },
      { "name": "Cadeira Abdutora", "details": "3 × 15-20", "instructions": "EXECUÇÃO: Afaste as pernas de forma firme e controlada." },
      { "name": "Panturrilha", "details": "3 × 12-15", "instructions": "EXECUÇÃO: Pause brevemente na descida e suba de forma controlada." },
      { "name": "Abdominal", "details": "3 × 15", "instructions": "EXECUÇÃO: Mantenha a postura e a respiração controlada durante a execução." }
    ]},
    { "day": 3, "title": "Wednesday", "exercises": [
      { "name": "Remada Articulada", "details": "3 × 10-12", "instructions": "EXECUÇÃO: Puxe os cotovelos para trás com foco nos músculos das costas." },
      { "name": "Puxada Aberta", "details": "2 × 10-12", "instructions": "EXECUÇÃO: Foque na amplitude do movimento. Controle bem o retorno do peso." },
      { "name": "Desenvolvimento", "details": "3 × 10-12", "instructions": "EXECUÇÃO: Empurre o peso mantendo o controle contínuo durante a descida." },
      { "name": "Elevação Lateral", "details": "4 × 12-15", "instructions": "EXECUÇÃO: Evite balançar o corpo, mantendo o foco na lateral dos ombros." },
      { "name": "Tríceps Corda", "details": "3 × 12-15", "instructions": "EXECUÇÃO: Mantenha os cotovelos fixos. Separe a corda suavemente no final do movimento." },
      { "name": "Abdominal", "details": "3 × 15", "instructions": "EXECUÇÃO: Mantenha um ritmo tranquilo e a contração constante." }
    ]},
    { "day": 4, "title": "Thursday", "exercises": [
      { "name": "Búlgaro", "details": "3 × 8-10", "instructions": "EXECUÇÃO: Incline o tronco levemente à frente. Desça com controle mantendo o equilíbrio." },
      { "name": "Coice Polia", "details": "3 × 12", "instructions": "EXECUÇÃO: Movimente a perna para trás em diagonal. Concentre-se na contração do glúteo." },
      { "name": "Cadeira Extensora", "details": "3 × 12-15", "instructions": "EXECUÇÃO: Estenda as pernas completamente, segurando a posição por um instante." },
      { "name": "Cadeira Flexora", "details": "3 × 12-15", "instructions": "EXECUÇÃO: Mantenha o corpo estável no banco para focar no músculo alvo." },
      { "name": "Panturrilha", "details": "3 × 12-15", "instructions": "EXECUÇÃO: Mantenha um ritmo suave. Controle a descida com calma." },
      { "name": "Abdominal", "details": "3 × 15", "instructions": "EXECUÇÃO: Solte o ar ao contrair, focando no trabalho da região central." }
    ]},
    { "day": 5, "title": "Friday", "exercises": [
      { "name": "Pullover Polia Alta", "details": "3 × 12-15", "instructions": "EXECUÇÃO: Braços estendidos. Puxe a barra até a linha do quadril usando as costas." },
      { "name": "Face Pull", "details": "3 × 15", "instructions": "EXECUÇÃO: Puxe na direção do rosto, rotacionando levemente as mãos no fim do movimento." },
      { "name": "Remada Baixa", "details": "3 × 10-12", "instructions": "EXECUÇÃO: Mantenha a estabilidade. Cotovelos devem passar rente ao corpo." },
      { "name": "Rosca Direta", "details": "3 × 10-12", "instructions": "EXECUÇÃO: Foque no bíceps sem usar impulso das costas ou ombros." },
      { "name": "Tríceps Barra Reta", "details": "3 × 10-12", "instructions": "EXECUÇÃO: Estenda os braços completamente, mantendo a tensão no tríceps." },
      { "name": "Abdominal", "details": "3 × 15", "instructions": "EXECUÇÃO: Mantenha o movimento fluido e o abdômen engajado." }
    ]},
    { "day": 6, "title": "Saturday", "exercises": [
      { "name": "Elevação Pélvica", "details": "3 × 8-10", "instructions": "EXECUÇÃO: Retome o foco na ativação dos glúteos, empurrando com firmeza." },
      { "name": "Agachamento", "details": "3 × 10-12", "instructions": "EXECUÇÃO: Desça com a postura alinhada e peito aberto. Encontre seu limite confortável." },
      { "name": "Cadeira Abdutora", "details": "3 × 15-20", "instructions": "EXECUÇÃO: Sente-se bem apoiado. Movimento constante e controlado." },
      { "name": "Cadeira Extensora", "details": "3 × 12-15", "instructions": "EXECUÇÃO: Mantenha o controle do movimento até o final da série." },
      { "name": "Panturrilha", "details": "3 × 12-15", "instructions": "EXECUÇÃO: Evite dar impulso na base do movimento. Foque na técnica." },
      { "name": "Abdominal", "details": "3 × 15", "instructions": "EXECUÇÃO: Finalize o treino mantendo a técnica e o controle respiratório adequados." }
    ]},
    { "day": 7, "title": "Sunday", "exercises": [] }
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
      list.innerHTML = `<li class="rest-day-message"><h3>Rest Day</h3><p>Take some time to rest and recover.</p></li>`;
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
        if (newVal < sTotal) startTimer(60);
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
      showCompletion();
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

  function showCompletion() {
    document.getElementById('completion-message').textContent = `Great job on finishing today's session.`;
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

    // Theme Management
    const savedTheme = localStorage.getItem('workoutSysTheme') || 'dark-1';
    document.body.dataset.theme = savedTheme;
    
    const themeModal = document.getElementById('theme-modal-overlay');
    document.getElementById('theme-toggle-btn').addEventListener('click', () => {
      if (navigator.vibrate) navigator.vibrate(15);
      themeModal.classList.add('visible');
    });

    themeModal.addEventListener('click', function(e) { if (e.target === this) this.classList.remove('visible'); });
    document.querySelector('.theme-close-btn').addEventListener('click', () => themeModal.classList.remove('visible'));

    document.querySelectorAll('.theme-option').forEach(btn => {
      btn.addEventListener('click', () => {
        if (navigator.vibrate) navigator.vibrate(15);
        const theme = btn.dataset.themeVal;
        document.body.dataset.theme = theme;
        localStorage.setItem('workoutSysTheme', theme);
        themeModal.classList.remove('visible');
      });
    });

    // General Modals
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
