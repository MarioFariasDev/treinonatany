const treinos = [
  {
    dia: "DIA 1 – Inferiores + Glúteos + Core",
    tecnica: "Bi-Set Glúteo + Quadríceps",
    objetivo: "Ativação de inferiores com foco em glúteos e core",
    exercicios: [
      ["Agachamento com halteres", "3", "12", "-", "Postura ereta, controle na descida"],
      ["Avanço com passada (alternado)", "3", "10 cada", "-", "Joelho alinhado com o pé"],
      ["Cadeira extensora", "3", "12", "Bi-set", "Sem travar o joelho"],
      ["Stiff com halteres", "3", "12", "Bi-set", "Coluna neutra, leve flexão de joelho"],
      ["Elevação pélvica com peso", "3", "15", "Pausa isométrica 2s", "Contração máxima no topo"],
      ["Abdução de quadril no banco", "3", "20", "-", "Movimento amplo e consciente"],
      ["Prancha isométrica", "3", "30s", "-", "Ativação do core e postura neutra"],
      ["Prancha lateral (cada lado)", "2", "30s", "-", "Evitar cair com o quadril"]
    ],
    cardio: "1km leve (corrida contínua ou trote na esteira)"
  },
  {
    dia: "DIA 2 – Superiores + Core",
    tecnica: "Drop-set e Bi-set leve para resistência",
    objetivo: "Estímulo em membros superiores com gasto calórico",
    exercicios: [
      ["Flexão de braço no solo", "3", "10", "-", "Pode ser ajoelhada se necessário"],
      ["Remada curvada com halteres", "3", "12", "-", "Puxar com cotovelos, não com braços"],
      ["Crucifixo reto com halteres", "3", "10", "Bi-set", "Abrir com controle"],
      ["Rosca direta alternada", "3", "10 cada", "Bi-set", "Evitar balanço do tronco"],
      ["Desenvolvimento de ombros com halteres", "3", "12", "-", "Subida fluida"],
      ["Rosca martelo", "3", "12", "Bi-set", "Punhos firmes"],
      ["Elevação lateral", "3", "12", "Bi-set", "Não ultrapassar a linha do ombro"],
      ["Abdominal remador", "3", "20", "-", "Conectar respiração ao movimento"],
      ["Abdominal infra no banco", "3", "15", "-", "Evitar tirar as costas do banco"]
    ],
    cardio: "1km leve (pode ser caminhada acelerada)"
  },
  {
    dia: "DIA 3 – Inferiores Posteriores + Core",
    tecnica: "Pirâmide de carga + Bi-set",
    objetivo: "Ênfase em posteriores e glúteos com foco técnico",
    exercicios: [
      ["Stiff com halteres", "4", "15-12-10-8", "Pirâmide crescente", "Aumentar peso progressivamente"],
      ["Mesa flexora", "3", "12", "-", "Contração total sem impulso"],
      ["Cadeira abdutora", "3", "20", "Bi-set", "Pausar no final do movimento"],
      ["Elevação pélvica com peso", "3", "15", "Bi-set", "Contração forte no topo"],
      ["Glúteo no cabo", "3", "15 cada", "-", "Concentrar no movimento"],
      ["Abdominal canivete", "3", "20", "-", "Evitar puxar o pescoço"],
      ["Prancha com toque de ombros", "3", "30s", "-", "Estabilidade do tronco"],
      ["Abdominal lateral cruzado", "3", "15 cada", "-", "Torção controlada"]
    ],
    cardio: "1km leve ou 10min elíptico leve"
  },
  {
    dia: "DIA 4 – Full Body + Resistência Muscular",
    tecnica: "Circuito metabólico com pouco descanso",
    objetivo: "Gasto energético com estímulo global",
    exercicios: [
      ["Agachamento com halteres", "3-4 rounds", "15", "-", "Velocidade controlada"],
      ["Flexão de braço", "3-4 rounds", "12", "-", "Pode ser ajoelhada"],
      ["Remada com halteres", "3-4 rounds", "12", "-", "Costas retas, puxar com cotovelos"],
      ["Afundo estático", "3-4 rounds", "10 cada", "-", "Controle no joelho de trás"],
      ["Desenvolvimento com halteres", "3-4 rounds", "12", "-", "Sem arquear a lombar"],
      ["Rosca alternada", "3-4 rounds", "12", "-", "Cadência firme"],
      ["Prancha", "3-4 rounds", "30s", "-", "Corpo alinhado"],
      ["Abdominal bicicleta", "3-4 rounds", "20", "-", "Torção coordenada"]
    ],
    cardio: "1km leve ou escada/bike moderado (5-10min)"
  },
  {
    dia: "DIA 5 – Glúteo Foco + Cardio Metabólico",
    tecnica: "Pré-exaustão + Bi-set Glúteo/Posterior",
    objetivo: "Ativação máxima de glúteos com resistência",
    exercicios: [
      ["Cadeira abdutora", "4", "20", "-", "Início para pré fadiga"],
      ["Elevação pélvica com peso", "4", "15", "-", "Segurar no topo"],
      ["Glúteo no cabo", "3", "15 cada", "Bi-set", "Com abdução elástico"],
      ["Abdução com elástico", "3", "15 cada", "Bi-set", "Explosão no final"],
      ["Stiff com halteres", "3", "12", "-", "Cuidado com a curvatura lombar"],
      ["Mesa flexora", "3", "15", "-", "Controle total"],
      ["Prancha lateral com rotação", "3", "30s cada", "-", "Girar o tronco com controle"],
      ["Abdominal infra com peso", "3", "15", "-", "Pernas estendidas e firmes"]
    ],
    cardio: "1km leve ou escada/bike (leve a moderado)"
  }
];

const treinoContainer = document.getElementById("treinoContainer");
const progresso = JSON.parse(localStorage.getItem("progresso") || "{}");

treinos.forEach((treino, i) => {
  const card = document.createElement("div");
  card.className = "card";

  let html = `
    <h2>${treino.dia}</h2>
    <p><strong>Técnica:</strong> ${treino.tecnica}</p>
    <p><strong>Objetivo:</strong> ${treino.objetivo}</p>
    <table class="exercise-table">
      <thead>
        <tr>
          <th>✔</th>
          <th>Exercício</th>
          <th>Séries</th>
          <th>Reps</th>
          <th>Técnica</th>
          <th>Obs</th>
          <th>Descanso</th>
        </tr>
      </thead>
      <tbody>
  `;

  treino.exercicios.forEach((ex, j) => {
    const key = `d${i}_e${j}`;
    const checked = progresso[key]?.feito ? "checked" : "";
    const doneClass = progresso[key]?.feito ? "done" : "";

    html += `
      <tr class="exercise-row ${doneClass}" data-key="${key}">
        <td><input type="checkbox" ${checked}></td>
        <td>${ex[0]}</td>
        <td>${ex[1]}</td>
        <td>${ex[2]}</td>
        <td>${ex[3]}</td>
        <td>${ex[4]}</td>
        <td>
          <button class="timer-btn" onclick="iniciarTimer(this)">⏱️</button>
          <span class="timer-display">00:00</span>
        </td>
      </tr>
    `;
  });

  html += `</tbody></table>`;
  if (treino.cardio) html += `<p><strong>Cardio:</strong> ${treino.cardio}</p>`;
  card.innerHTML = html;
  treinoContainer.appendChild(card);
});

document.querySelectorAll(".exercise-row input[type='checkbox']").forEach(input => {
  input.addEventListener("change", function () {
    const row = this.closest(".exercise-row");
    const key = row.dataset.key;
    const feito = this.checked;
    row.classList.toggle("done", feito);
    progresso[key] = { feito };
    localStorage.setItem("progresso", JSON.stringify(progresso));
  });
});

function iniciarTimer(btn) {
  const span = btn.nextElementSibling;
  let tempo = 60;
  span.textContent = formatar(tempo);
  btn.disabled = true;

  const intervalo = setInterval(() => {
    tempo--;
    span.textContent = formatar(tempo);
    if (tempo <= 0) {
      clearInterval(intervalo);
      btn.disabled = false;
      span.textContent = "✔️";
    }
  }, 1000);
}

function formatar(s) {
  const m = String(Math.floor(s / 60)).padStart(2, "0");
  const sec = String(s % 60).padStart(2, "0");
  return `${m}:${sec}`;
}

const feedback = document.getElementById("feedback");
const feedbackSalvo = localStorage.getItem("feedbackGlobal");
if (feedbackSalvo) feedback.value = feedbackSalvo;

document.getElementById("salvarFeedback").addEventListener("click", () => {
  localStorage.setItem("feedbackGlobal", feedback.value);
  alert("Feedback salvo com sucesso!");
});

document.getElementById("darkToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
