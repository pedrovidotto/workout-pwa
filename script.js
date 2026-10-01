(function() {
  'use strict';

  /* ─── Workout Data Phase 75kg (Strict 3-Set Cap) ─── */
  const workoutData = [
    { "day": 1, "title": "Upper A", "subtitle": "Chest Heavy & Side Delt", "duration": "55m", "exercises": [
      { "name": "Flat DB Bench Press", "details": "3 × 6–8 reps · 150s rest", "instructions": "SETUP: 34-36kg. EXECUTION: 3s eccentric, 1s dead-stop pause at bottom, explosive concentric." },
      { "name": "Seated DB Shoulder Press", "details": "3 × 8–10 reps · 120s rest", "instructions": "SETUP: 26-28kg, bench at 75-80°. EXECUTION: 3s eccentric, pause, drive." },
      { "name": "Machine/Cable Lat Pulldown", "details": "3 × 8–10 reps · 120s rest", "instructions": "EXECUTION: Control the stretch. Pull to upper chest." },
      { "name": "Machine Chest Flyes", "details": "3 × 10–12 reps · 90s rest", "instructions": "EXECUTION: Hold peak contraction for 1 second." },
      { "name": "DB Lateral Raises", "details": "3 × 12–15 reps · 90s rest", "instructions": "EXECUTION: Add 5 lengthened partial reps out of the bottom stretch on the final set." }
    ], "cardio": { "name": "Incline Walk", "details": "1 × 15 mins", "instructions": "PACING: LISS <130 BPM." } },
    
    { "day": 2, "title": "Lower A", "subtitle": "Anterior & Upper Glute", "duration": "55m", "exercises": [
      { "name": "Hack Machine Squats", "details": "3 × 6–8 reps · 150s rest", "instructions": "SETUP: 85-90kg. EXECUTION: Deep, explosive speed sets. 3s eccentric." },
      { "name": "KAS Glute Bridge", "details": "3 × 8–10 reps · 120s rest", "instructions": "EXECUTION: Heavy band above knees. 10-second max-effort squeeze at the top of the final rep." },
      { "name": "Linear Leg Press", "details": "3 × 10–12 reps · 120s rest", "instructions": "SETUP: Feet low and narrow to bias quads." },
      { "name": "Seated Hip Abductions", "details": "3 × 15 reps · 90s rest", "instructions": "EXECUTION: Pause on the outer contraction." }
    ], "abFinisher": { "name": "Hanging Leg Raises", "details": "3 × 12 reps · 60s rest", "instructions": "EXECUTION: Strict control, zero momentum." } },
    
    { "day": 3, "title": "Upper B", "subtitle": "Upper Chest & Lateral Delt", "duration": "55m", "exercises": [
      { "name": "Incline DB Press", "details": "3 × 8–10 reps · 150s rest", "instructions": "SETUP: 30-degree incline." },
      { "name": "Chest-Supported Machine Row", "details": "3 × 8–10 reps · 120s rest", "instructions": "EXECUTION: Overload back thickness without spinal loading." },
      { "name": "Low-to-High Cable Flyes", "details": "3 × 12 reps · 90s rest", "instructions": "EXECUTION: Bring handles together at upper chest level." },
      { "name": "Lean-Away Cable Lateral Raises", "details": "3 × 10–12 reps/arm · 90s rest", "instructions": "EXECUTION: Continuous cable profile tension on side delts." },
      { "name": "Cable Face Pulls", "details": "3 × 15 reps · 90s rest", "instructions": "EXECUTION: Pull the rope completely apart to challenge rear delts." }
    ], "cardio": { "name": "Stationary Bike", "details": "1 × 15 mins", "instructions": "PACING: LISS <130 BPM." } },
    
    { "day": 4, "title": "Lower B", "subtitle": "Posterior Chain Overload", "duration": "55m", "exercises": [
      { "name": "Dumbbell RDLs", "details": "3 × 8–10 reps · 150s rest", "instructions": "EXECUTION: Push hips fully backward; stretch hamstrings cleanly." },
      { "name": "Deficit Reverse DB Lunges", "details": "3 × 10 reps/leg · 120s rest", "instructions": "SETUP: Step backward off a 2-inch platform for extreme glute stretch." },
      { "name": "Lying Machine Leg Curls", "details": "3 × 10–12 reps · 90s rest", "instructions": "EXECUTION: Keep hips pressed firmly into the pad." },
      { "name": "Standing Cable Hip Abductions", "details": "3 × 12–15 reps/leg · 90s rest", "instructions": "EXECUTION: Kick back and out at 45° to fire gluteus medius." }
    ], "cardio": { "name": "Incline Walk", "details": "1 × 15 mins", "instructions": "PACING: LISS <130 BPM." } },
    
    { "day": 5, "title": "Upper C", "subtitle": "Hypertrophy Burnout & Arms", "duration": "55m", "exercises": [
      { "name": "Weighted Dips / Decline Press", "details": "3 × 8–10 reps · 150s rest", "instructions": "EXECUTION: Maximize the deep stretch." },
      { "name": "DB Lateral Raises", "details": "3 × 12 reps · 90s rest", "instructions": "EXECUTION: Drop weight 30% immediately on final set for a drop-set." },
      { "name": "Seated Cable Rows", "details": "3 × 10–12 reps · 120s rest", "instructions": "SETUP: Wide Grip Attachment." },
      { "name": "Rope Pushdowns", "details": "3 × 12 reps · 0s rest", "instructions": "EXECUTION: Superset directly into bicep curls." },
      { "name": "Incline DB Bicep Curls", "details": "3 × 12 reps · 90s rest", "instructions": "EXECUTION: Let arms hang fully before curling." }
    ], "abFinisher": { "name": "Ab Wheel Rollouts", "details": "3 × 10 reps · 60s rest", "instructions": "EXECUTION: Keep core braced, do not let lower back sag." } },
    
    { "day": 6, "title": "Lower C", "subtitle": "Posterior Machine Overload", "duration": "50m", "exercises": [
      { "name": "Hex-Bar Deadlifts", "details": "3 × 5 reps · 180s rest", "instructions": "EXECUTION: Focus on explosive neural drive." },
      { "name": "DB Bulgarian Split Squats", "details": "3 × 8–10 reps/leg · 120s rest", "instructions": "EXECUTION: Torso leaned forward at 30°." },
      { "name": "Seated Leg Press Machine", "details": "3 × 12 reps · 120s rest", "instructions": "SETUP: Feet high and wide to recruit glutes/hamstrings." },
      { "name": "Continuous Band-Walks", "details": "3 × 20 paces · 60s rest", "instructions": "EXECUTION: Keep constant lateral tension." }
    ] },
    
    { "day": 7, "title": "Strategic Recovery", "subtitle": "System Rest", "duration": "—", "exercises": [], "cardio": { "name": "Dynamic Stretching", "details": "1 × 15 mins", "instructions": "METRIC CHECK: If waking HRV drops <65ms for 2 days, drop all working sets by 1 next week." } }
  ];

  /* ─── State ───────────────────────────────────────────────────── */
  let progress      = JSON.parse(localStorage.getItem('ulter_progress')) || {};
  let completedDays = JSON.parse(localStorage.getItem('ulter_completed')) || [];
  let lastTouched   = JSON.parse(localStorage.getItem('ulter_last')) || {};
  let activeTimer   = null;
  let wakeLock      = null;

  /* ─── Helpers ─────────────────────────────────────────────────── */
  const parseSets = (details) => { const m = details.match(/^(\d+)\s*[×x]/); return m ? parseInt(m[1], 10) : 1; };
  const getRestSeconds = (details) => { const m = details.match(/(\d+)s\s*rest/i); return m ? parseInt(m[1], 10) : 90; };
  const save = () => {
    localStorage.setItem('ulter_progress', JSON.stringify(progress));
    localStorage.setItem('ulter_last', JSON.stringify(lastTouched));
  };

  /* ─── Wake Lock ───────────────────────────────────────────────── */
  async function toggleWakeLock(lockActive) {
    if (!('wakeLock' in navigator)) return;
    try {
      if (lockActive && !wakeLock) {
        wakeLock = await navigator.wakeLock.request('screen');
      } else if (!lockActive && wakeLock) {
        await wakeLock.release();
        wakeLock = null;
      }
    } catch (err) {
      console.warn('Wake Lock error:', err);
    }
  }

  /* ─── WORKOUT SYSTEM (DOM Fragment Rendering) ─────────────────── */
  function renderWorkout(idx) {
    const data = workoutData[idx];
    const list = document.getElementById('exercise-list');
    const compList = document.getElementById('completed-list');
    const compSection = document.getElementById('completed-section');
    const fill = document.getElementById('progress-bar-fill');
    const progressLabel = document.getElementById('progress-label');

    document.getElementById('workout-title').innerHTML =
      `${data.title}<br><span style="font-weight:400;font-size:0.5em;opacity:0.6;letter-spacing:0.02em;">${data.subtitle}</span>`;
    document.getElementById('workout-duration').textContent =
      data.duration === '—' ? '' : `EST. ${data.duration}`;

    list.innerHTML = '';
    compList.innerHTML = '';

    const items = [...(data.exercises || [])];
    if (data.abFinisher) items.push({ ...data.abFinisher, idType: 'ab' });
    if (data.cardio)     items.push({ ...data.cardio, idType: 'cardio' });

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
    const fragmentActive  = document.createDocumentFragment();
    const fragmentComp    = document.createDocumentFragment();

    items.forEach((ex, i) => {
      const id = `d${idx}-${ex.idType || 'e'}${i}`;
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
            toggleWakeLock(false);
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
        if (newVal < sTotal) startTimer(getRestSeconds(ex.details));
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
      fragmentActive.appendChild(item.node);
    });
    
    pendingNodes.forEach(node => fragmentActive.appendChild(node));
    completedNodes.forEach(node => fragmentComp.appendChild(node));

    list.appendChild(fragmentActive);
    compList.appendChild(fragmentComp);

    fill.parentElement.classList.remove('hidden');
    progressLabel.classList.remove('hidden');
    fill.style.width = `${(done / total) * 100}%`;
    progressLabel.textContent = `${done} / ${total} SETS`;

    compSection.classList.toggle('hidden', compList.children.length === 0);

    if (done === total && total > 0 && !completedDays.includes(`day-${idx}`)) {
      completedDays.push(`day-${idx}`);
      localStorage.setItem('ulter_completed', JSON.stringify(completedDays));
      document.querySelectorAll('.day-btn')[idx].classList.add('day-complete');
      showCompletion(data.title);
    }
  }

  function startTimer(sec) {
    if (activeTimer) { clearInterval(activeTimer); activeTimer = null; }
    toggleWakeLock(true);
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
        toggleWakeLock(false);
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
      .split(/(SETUP:|EXECUTION:|PROTOCOL:|PACING:|METRIC CHECK:)/g)
      .filter(Boolean)
      .map(l => {
        l = l.trim();
        return /^(SETUP:|EXECUTION:|PROTOCOL:|PACING:|METRIC CHECK:)$/.test(l)
          ? `<span class="instruction-label">${l.replace(':', '')}</span>`
          : `<p>${l}</p>`;
      }).join('');
    document.getElementById('info-modal-overlay').classList.add('visible');
  }

  function showCompletion(title) {
    document.getElementById('completion-message').textContent = `${title} logged. Rest well.`;
    const el = document.getElementById('completion-overlay');
    el.classList.add('visible');
    const showTime = Date.now();
    el.onclick = (e) => {
      if (Date.now() - showTime > 400) {
        el.classList.remove('visible');
        el.onclick = null;
      }
    };
  }

  /* ─── MIND SYSTEM ─────────────────────────────────────────────── */
  const nameInput = document.getElementById('name-input');
  
  function updateMantras() {
    const n = nameInput.value.trim() || 'Pedro';
    document.getElementById('master-mantra').textContent = `"${n}, right now your mind is telling a scary story about the future, and your body is trying to protect you from it. You are experiencing a feeling, not a fact."`;
    document.getElementById('loop-mantra').textContent = `"That's just an old loop playing again. I don't have to listen to it."`;
    document.getElementById('tension-mantra').textContent = `"${n}, your body is safe. This tension is just energy trying to help."`;
    document.getElementById('future-mantra').textContent = `"${n}, you don't need to solve the future today. You just need one slow breath right now."`;
  }
  nameInput.addEventListener('input', updateMantras);

  function switchMindTab(targetId) {
    if (navigator.vibrate) navigator.vibrate(20);
    document.querySelectorAll('.mind-tab').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.target === targetId);
    });
    document.querySelectorAll('.mind-tab-content').forEach(content => {
      content.classList.toggle('active', content.id === targetId);
    });
  }

  document.querySelectorAll('.mind-tab').forEach(tab => {
    tab.addEventListener('click', () => switchMindTab(tab.dataset.target));
  });

  document.querySelectorAll('.ground-trigger').forEach(btn => {
    btn.addEventListener('click', function() { 
      if (navigator.vibrate) navigator.vibrate(20);
      this.classList.toggle('done'); 
    });
  });

  document.getElementById('reset-mind-btn').addEventListener('click', () => {
    document.querySelectorAll('.ground-trigger, .action-btn').forEach(c => c.classList.remove('done'));
    nameInput.value = '';
    updateMantras();
    switchMindTab('loop-tab');
    stopBreathe();
  });

  /* ─── Breathing Engine ────────────────────────────────────────── */
  let breatheActive = false;
  let currentBreatheMode = [];
  let currentPhaseIndex = 0;
  let countdownInterval = null;

  const breatheModes = {
    vagus: [ { label: 'Inhale', time: 4, action: 'in' }, { label: 'Exhale', time: 6, action: 'out' } ],
    box: [ { label: 'Inhale', time: 4, action: 'in' }, { label: 'Hold', time: 4, action: 'hold' }, { label: 'Exhale', time: 4, action: 'out' }, { label: 'Hold', time: 4, action: 'hold' } ],
    relax: [ { label: 'Inhale', time: 4, action: 'in' }, { label: 'Hold', time: 7, action: 'hold' }, { label: 'Exhale', time: 8, action: 'out' } ]
  };

  document.querySelectorAll('.breathe-trigger').forEach(btn => {
    btn.addEventListener('click', () => openBreatheModal(btn.dataset.mode));
  });

  function openBreatheModal(modeKey) {
    currentBreatheMode = breatheModes[modeKey];
    currentPhaseIndex = 0;
    breatheActive = true;

    const circle = document.getElementById('breathe-circle-huge');
    const label = document.getElementById('breathe-label-huge');
    const display = document.getElementById('breathe-display-huge');

    circle.style.transition = 'none';
    circle.style.transform = 'translate(-50%, -50%) scale(0.15)';
    circle.style.opacity = '0';
    label.textContent = 'Prepare';
    display.textContent = '·';

    document.getElementById('breathe-modal-overlay').classList.add('visible');
    setTimeout(runBreathePhase, 600);
  }

  function stopBreathe() {
    breatheActive = false;
    if (countdownInterval) { clearInterval(countdownInterval); countdownInterval = null; }
    document.getElementById('breathe-modal-overlay').classList.remove('visible');

    const circle = document.getElementById('breathe-circle-huge');
    setTimeout(() => {
      circle.style.transition = 'none';
      circle.style.transform = 'translate(-50%, -50%) scale(0.15)';
      circle.style.opacity = '0';
      document.getElementById('breathe-label-huge').textContent = 'Prepare';
      document.getElementById('breathe-display-huge').textContent = '·';
    }, 300);
  }

  document.getElementById('breathe-stop-btn').addEventListener('click', stopBreathe);

  function runBreathePhase() {
    if (!breatheActive) return;
    if (countdownInterval) { clearInterval(countdownInterval); countdownInterval = null; }

    const phase = currentBreatheMode[currentPhaseIndex];
    const display = document.getElementById('breathe-display-huge');
    const label = document.getElementById('breathe-label-huge');
    const circle = document.getElementById('breathe-circle-huge');

    label.textContent = phase.label;
    let count = phase.time;
    display.textContent = count;

    circle.style.transition = `transform ${phase.time}s cubic-bezier(0.45,0,0.55,1), opacity ${phase.time}s ease`;
    label.style.transition = `opacity ${phase.time * 0.5}s ease`;

    requestAnimationFrame(() => requestAnimationFrame(() => {
      if (phase.action === 'in') {
        circle.style.transform = 'translate(-50%, -50%) scale(1)';
        circle.style.opacity = '0.9';
        label.style.opacity = '1';
      } else if (phase.action === 'out') {
        circle.style.transform = 'translate(-50%, -50%) scale(0.25)';
        circle.style.opacity = '0.15';
        label.style.opacity = '0.55';
      } else {
        label.style.opacity = '0.7';
      }
    }));

    countdownInterval = setInterval(() => {
      if (!breatheActive) { clearInterval(countdownInterval); return; }
      count--;
      if (count > 0) {
        display.textContent = count;
      } else {
        clearInterval(countdownInterval);
        countdownInterval = null;
        currentPhaseIndex = (currentPhaseIndex + 1) % currentBreatheMode.length;
        runBreathePhase();
      }
    }, 1000);
  }

  /* ─── READINESS SYSTEM (Persistent) ───────────────────────────── */
  const READY_SEED = { 
    hrv: { mean: 76.62, sd: 8.45 }, 
    sleep: { mean: 435.05, sd: 99.72 }, 
    rhr: { mean: 60.86, sd: 1.35 } 
  };
  const READY_WEIGHTS = { hrv: 0.7, sleep: 0.2, rhr: 0.1 };

  function zComponent(value, m, s, invert = false) {
    let z = (value - m) / s;
    if (invert) z = -z;
    return Math.min(100, Math.max(0, 58.74 + 25 * z));
  }

  function fmt1(n) { return Number.isFinite(n) ? n.toFixed(1) : "—"; }

  function initReady() {
    ['hrv', 'sleep', 'rhr'].forEach(key => {
      const el = document.getElementById(`ready-${key}-input`);
      const savedVal = localStorage.getItem(`ulter_ready_${key}`);
      
      // Hydrate state
      if (savedVal) el.value = savedVal;
      
      // Save state on input
      el.addEventListener('input', (e) => {
        localStorage.setItem(`ulter_ready_${key}`, e.target.value);
        updateReadyUI();
      });
    });
    updateReadyUI();
  }

  function updateReadyUI() {
    const rawHrv = document.getElementById('ready-hrv-input').value;
    const rawSleep = document.getElementById('ready-sleep-input').value;
    const rawRhr = document.getElementById('ready-rhr-input').value;
    
    const vHrv = parseFloat(rawHrv?.replace(',', '.'));
    const vSleep = parseFloat(rawSleep?.replace(',', '.'));
    const vRhr = parseFloat(rawRhr?.replace(',', '.'));
    
    const valid = {
      hrv: !isNaN(vHrv) && vHrv > 0 && vHrv <= 300,
      sleep: !isNaN(vSleep) && vSleep > 0 && vSleep <= 24,
      rhr: !isNaN(vRhr) && vRhr >= 20 && vRhr <= 200
    };

    document.getElementById('card-hrv').classList.toggle('error', rawHrv && !valid.hrv);
    document.getElementById('card-sleep').classList.toggle('error', rawSleep && !valid.sleep);
    document.getElementById('card-rhr').classList.toggle('error', rawRhr && !valid.rhr);

    if (valid.hrv && valid.sleep && valid.rhr) {
      const total = (READY_WEIGHTS.hrv * zComponent(vHrv, READY_SEED.hrv.mean, READY_SEED.hrv.sd)) +
                    (READY_WEIGHTS.sleep * zComponent(vSleep * 60, READY_SEED.sleep.mean, READY_SEED.sleep.sd)) +
                    (READY_WEIGHTS.rhr * zComponent(vRhr, READY_SEED.rhr.mean, READY_SEED.rhr.sd, true));
      
      const wrap = document.getElementById('ready-score-wrapper');
      let band = { label: "COMPROMISED", class: "score-compromised", note: "Prioritize recovery. Consider active rest." };
      if (total >= 85) band = { label: "PRIMED", class: "score-primed", note: "Full load cleared. Push intensity." };
      else if (total >= 70) band = { label: "STEADY", class: "score-steady", note: "Normal training load. Maintain progression." };
      else if (total >= 55) band = { label: "MODERATE", class: "score-moderate", note: "Autoregulate volume. Watch fatigue." };

      wrap.className = `mind-card text-center ${band.class}`;
      document.getElementById('ready-score-val').textContent = `${fmt1(total)}%`;
      document.getElementById('ready-band-label').textContent = band.label;
      document.getElementById('ready-band-note').textContent = band.note;
    } else {
      document.getElementById('ready-score-wrapper').className = 'mind-card text-center';
      document.getElementById('ready-score-val').textContent = "—.—";
      document.getElementById('ready-band-label').textContent = "AWAITING INPUT";
      document.getElementById('ready-band-note').textContent = "Complete metrics grid above.";
    }
  }

  /* ─── INIT ────────────────────────────────────────────────────── */
  function init() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').catch(() => {});
      });
    }

    const getMondayOfCurrentWeek = () => {
      const d = new Date();
      const day = d.getDay();
      const diff = d.getDate() - day + (day === 0 ? -6 : 1);
      return new Date(d.setDate(diff)).toDateString();
    };

    const savedWeek = localStorage.getItem('ulter_week');
    const currentWeek = getMondayOfCurrentWeek();
    
    if (savedWeek && savedWeek !== currentWeek) {
      ['ulter_progress','ulter_completed','ulter_last'].forEach(k => localStorage.removeItem(k));
      progress = {}; completedDays = []; lastTouched = {};
      localStorage.setItem('ulter_week', currentWeek);
    } else if (!savedWeek) {
      localStorage.setItem('ulter_week', currentWeek);
    }

    const btnBody = document.getElementById('mode-body-btn');
    const btnMind = document.getElementById('mode-mind-btn');
    const btnReady = document.getElementById('mode-ready-btn'); 
    const viewBody = document.getElementById('view-body');
    const viewMind = document.getElementById('view-mind');
    const viewReady = document.getElementById('view-ready');
    const daySel = document.getElementById('day-selector');

    const switchTab = (activeBtn, activeView, showDays) => {
      if (navigator.vibrate) navigator.vibrate(15);
      [btnBody, btnMind, btnReady].forEach(b => b.classList.remove('active'));
      [viewBody, viewMind, viewReady].forEach(v => v.classList.add('hidden'));
      activeBtn.classList.add('active');
      activeView.classList.remove('hidden');
      daySel.classList.toggle('hidden', !showDays);
    };

    btnBody.addEventListener('click', () => switchTab(btnBody, viewBody, true));
    btnMind.addEventListener('click', () => switchTab(btnMind, viewMind, false));
    btnReady.addEventListener('click', () => switchTab(btnReady, viewReady, false));

    ['MON','TUE','WED','THU','FRI','SAT','SUN'].forEach((l, i) => {
      const b = document.createElement('button');
      b.className = 'day-btn';
      b.setAttribute('role', 'tab');
      b.setAttribute('aria-selected', 'false');
      b.textContent = l;
      if (completedDays.includes(`day-${i}`)) b.classList.add('day-complete');
      b.addEventListener('click', () => {
        if (navigator.vibrate) navigator.vibrate(15);
        document.querySelectorAll('.day-btn').forEach(x => {
          x.classList.remove('active');
          x.setAttribute('aria-selected', 'false');
        });
        b.classList.add('active');
        b.setAttribute('aria-selected', 'true');
        renderWorkout(i);
      });
      daySel.appendChild(b);
    });

    const savedTheme = localStorage.getItem('ulter_theme') || 'dark-1';
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
        localStorage.setItem('ulter_theme', theme);
        themeModal.classList.remove('visible');
      });
    });

    const infoOverlay = document.getElementById('info-modal-overlay');
    infoOverlay.addEventListener('click', function(e) { if (e.target === this) this.classList.remove('visible'); });
    document.getElementById('info-modal-close-btn').addEventListener('click', () => infoOverlay.classList.remove('visible'));

    const resetOverlay = document.getElementById('reset-modal-overlay');
    resetOverlay.addEventListener('click', function(e) { if (e.target === this) this.classList.remove('visible'); });
    document.getElementById('reset-button').addEventListener('click', () => resetOverlay.classList.add('visible'));

    document.getElementById('confirm-reset-btn').addEventListener('click', () => {
      ['ulter_progress','ulter_completed','ulter_last'].forEach(k => localStorage.removeItem(k));
      progress = {}; completedDays = []; lastTouched = {};
      resetOverlay.classList.remove('visible');
      document.querySelectorAll('.day-btn').forEach(b => b.classList.remove('day-complete'));
      const activeIdx = Array.from(daySel.children).findIndex(b => b.classList.contains('active'));
      renderWorkout(activeIdx !== -1 ? activeIdx : ((new Date().getDay() + 6) % 7));
    });
    
    document.getElementById('cancel-reset-btn').addEventListener('click', () => resetOverlay.classList.remove('visible'));

    document.getElementById('breathe-modal-overlay').addEventListener('click', function(e) {
      if (e.target === this) stopBreathe();
    });

    updateMantras();
    initReady(); 

    const today = (new Date().getDay() + 6) % 7;
    daySel.children[today].click();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
