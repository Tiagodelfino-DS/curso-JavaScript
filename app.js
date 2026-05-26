var lessons = [
  {
    id: 0,
    title: "O que e JavaScript?",
    desc: "Entenda o papel do JS na web",
    xp: 20,
    teoria: [
      "JavaScript e a linguagem que torna os sites interativos. Enquanto o HTML estrutura e o CSS decora, o JavaScript faz as coisas acontecerem.",
      "Ele roda diretamente no navegador. O Chrome, Firefox e Edge ja sabem executar JavaScript sem precisar instalar nada.",
      "Com JavaScript voce consegue mostrar alertas, fazer calculos, mudar o conteudo da pagina sem recarregar e criar jogos.",
      "Para adicionar JS no HTML, use a tag script no final do body."
    ],
    codigo: [
      "alert(\"Ola! Eu sou JavaScript!\");",
      "console.log(\"Isso aparece no console.\");",
      "console.log(\"Calculo: \" + (5 + 3));"
    ],
    quiz: [
      { q: "Qual e a principal funcao do JavaScript em um site?", opts: ["Estruturar o conteudo","Colorir o site","Tornar o site interativo","Criar banco de dados"], c: 2, ok: "Certo! JS e responsavel pela interatividade.", err: "Errado. JS torna o site interativo." },
      { q: "Dentro de qual tag o JavaScript e escrito no HTML?", opts: ["js","code","script","java"], c: 2, ok: "Certo! A tag script carrega o JavaScript.", err: "Errado. O JS fica dentro da tag script." }
    ]
  },
  {
    id: 1,
    title: "Variaveis",
    desc: "let e const para guardar valores",
    xp: 25,
    teoria: [
      "Variaveis sao como caixinhas onde voce guarda informacoes para usar depois. Em JavaScript moderno usamos let e const.",
      "Use LET quando o valor da variavel vai mudar ao longo do codigo. Exemplo: let idade = 16; e depois idade = 17;",
      "Use CONST quando o valor nao vai mudar nunca. Exemplo: const nome = 'Maria'; Se tentar mudar, o navegador vai dar erro.",
      "Uma variavel pode guardar textos (string), numeros (number) e verdadeiro ou falso (boolean)."
    ],
    codigo: [
      "const nome = \"Ana\";",
      "let idade = 16;",
      "let altura = 1.65;",
      "console.log(\"Nome: \" + nome);",
      "console.log(\"Idade: \" + idade);",
      "idade = 17;",
      "console.log(\"Agora tem \" + idade + \" anos.\");"
    ],
    quiz: [
      { q: "Qual palavra-chave usar para uma variavel que NAO vai mudar?", opts: ["let","var","const","fix"], c: 2, ok: "Certo! const e para valores fixos.", err: "Errado. Para valores que nao mudam, usamos const." },
      { q: "Qual tipo de dado e true ou false?", opts: ["String","Number","Boolean","Object"], c: 2, ok: "Certo! true e false sao booleanos.", err: "Errado. true e false sao do tipo Boolean." }
    ]
  },
  {
    id: 2,
    title: "Condicionais",
    desc: "if e else para tomar decisoes",
    xp: 30,
    teoria: [
      "Com condicionais, o codigo toma decisoes. E como dizer: se isso for verdade, faca aquilo. Senao, faca outra coisa.",
      "O IF verifica uma condicao. Se for verdadeira, executa o bloco de codigo dentro das chaves.",
      "O ELSE executa quando a condicao do IF e falsa. Voce pode encadear mais opcoes com ELSE IF.",
      "Operadores de comparacao: === (igual), !== (diferente), > (maior), < (menor), >= (maior ou igual)."
    ],
    codigo: [
      "let hora = 14;",
      "",
      "if (hora < 12) {",
      "  console.log(\"Bom dia!\");",
      "} else if (hora < 18) {",
      "  console.log(\"Boa tarde!\");",
      "} else {",
      "  console.log(\"Boa noite!\");",
      "}"
    ],
    quiz: [
      { q: "Qual operador verifica se dois valores sao IGUAIS em JS?", opts: ["==","=","===","!=="], c: 2, ok: "Certo! === compara valor e tipo.", err: "Errado. Usamos === para comparar valores em JS moderno." },
      { q: "O que acontece no bloco else?", opts: ["Sempre executa","Executa se a condicao for falsa","Executa se a condicao for verdadeira","Nunca executa"], c: 1, ok: "Certo! else executa quando o if e falso.", err: "Errado. O else roda quando a condicao do if e falsa." }
    ]
  },
  {
    id: 3,
    title: "Loops",
    desc: "for e while para repetir acoes",
    xp: 35,
    teoria: [
      "Loops servem para repetir uma acao varias vezes sem precisar escrever o mesmo codigo toda hora.",
      "O FOR e usado quando voce sabe quantas vezes quer repetir. Ele tem tres partes: onde comeca, ate quando vai e como avanca.",
      "O WHILE repete enquanto uma condicao for verdadeira. Use quando nao sabe exatamente quantas vezes vai repetir.",
      "Cuidado: se a condicao nunca ficar falsa, o loop roda para sempre e trava o programa. Isso se chama loop infinito."
    ],
    codigo: [
      "console.log(\"Tabuada do 5:\");",
      "for (let i = 1; i <= 10; i++) {",
      "  console.log(\"5 x \" + i + \" = \" + (5 * i));",
      "}",
      "",
      "let conta = 3;",
      "while (conta > 0) {",
      "  console.log(conta + \"...\");",
      "  conta--;",
      "}",
      "console.log(\"Lancamento!\");"
    ],
    quiz: [
      { q: "O que o i++ faz em um loop for?", opts: ["Reinicia o loop","Soma 1 ao valor de i","Subtrai 1 de i","Para o loop"], c: 1, ok: "Certo! i++ incrementa i em 1.", err: "Errado. i++ soma 1 ao valor de i a cada repeticao." },
      { q: "Qual loop e ideal quando nao sabemos quantas vezes repetir?", opts: ["for","forEach","while","repeat"], c: 2, ok: "Certo! while repete enquanto a condicao for verdadeira.", err: "Errado. O while e ideal quando nao sabemos o numero de repeticoes." }
    ]
  },
  {
    id: 4,
    title: "Funcoes",
    desc: "Criando blocos de codigo reutilizaveis",
    xp: 40,
    teoria: [
      "Funcoes sao blocos de codigo com um nome. Voce escreve uma vez e pode usar quantas vezes quiser em qualquer lugar.",
      "Para criar uma funcao use a palavra FUNCTION seguida do nome e parenteses. O codigo fica dentro das chaves.",
      "Com RETURN a funcao devolve um resultado que voce pode guardar em uma variavel.",
      "Arrow function e uma forma mais curta de escrever funcoes no JS moderno. Exemplo: const dobrar = (n) => n * 2;"
    ],
    codigo: [
      "function calcularIMC(peso, altura) {",
      "  let imc = peso / (altura * altura);",
      "  return imc.toFixed(2);",
      "}",
      "",
      "function classificar(imc) {",
      "  if (imc < 18.5) return \"Abaixo do peso\";",
      "  if (imc < 25) return \"Peso normal\";",
      "  return \"Sobrepeso\";",
      "}",
      "",
      "let meuIMC = calcularIMC(70, 1.75);",
      "console.log(\"IMC: \" + meuIMC);",
      "console.log(\"Classificacao: \" + classificar(meuIMC));"
    ],
    quiz: [
      { q: "Qual palavra-chave define uma funcao em JavaScript?", opts: ["def","func","function","create"], c: 2, ok: "Certo! function e a palavra para criar funcoes.", err: "Errado. Em JS usamos a palavra function." },
      { q: "O que o return faz dentro de uma funcao?", opts: ["Para o programa","Repete a funcao","Devolve um valor","Apaga a variavel"], c: 2, ok: "Certo! return devolve o resultado da funcao.", err: "Errado. O return faz a funcao devolver um valor." }
    ]
  }
];

var achievements = [
  { id: "first_lesson", icon: "🌟", name: "Primeira Aula!" },
  { id: "coder", icon: "💻", name: "Rodou o Codigo" },
  { id: "quiz_master", icon: "🎯", name: "Quiz Master" },
  { id: "half_way", icon: "🏅", name: "Na Metade!" },
  { id: "js_hero", icon: "🦸", name: "JS Hero" },
  { id: "xp_100", icon: "⚡", name: "100 XP!" }
];

var state = {
  xp: 0,
  completedLessons: [],
  unlockedAchievements: [],
  runCount: 0,
  quizCorrects: 0,
  currentLesson: null,
  currentQuizIdx: 0,
  quizAnswered: false
};

function init() {
  renderTrail();
  renderAchievements();
  updateXP();
}

function renderTrail() {
  var container = document.getElementById("trailContainer");
  container.innerHTML = "";
  for (var i = 0; i < lessons.length; i++) {
    var lesson = lessons[i];
    var completed = state.completedLessons.indexOf(lesson.id) >= 0;
    var locked = i > 0 && state.completedLessons.indexOf(lessons[i - 1].id) < 0;
    var card = document.createElement("div");
    card.className = "lesson-card" + (completed ? " completed" : "") + (locked ? " locked" : "");
    (function(l, lk) {
      card.onclick = function() {
        if (lk) { showToast("Complete a aula anterior primeiro!"); }
        else { openLesson(l); }
      };
    })(lesson, locked);
    var badgeClass = completed ? "badge-done" : locked ? "badge-locked" : "badge-free";
    var badgeText = completed ? "Feito" : locked ? "Bloqueado" : "Iniciar";
    card.innerHTML =
      "<div class='lesson-icon'>" + (locked ? "🔒" : (i + 1)) + "</div>" +
      "<div class='lesson-info'><h3>" + lesson.title + "</h3><p>" + lesson.desc + " - +" + lesson.xp + " XP</p></div>" +
      "<span class='lesson-badge " + badgeClass + "'>" + badgeText + "</span>";
    container.appendChild(card);
  }
  var done = state.completedLessons.length;
  document.getElementById("progressText").textContent = done + " de " + lessons.length + " aulas concluidas";
  document.getElementById("progressFill").style.width = ((done / lessons.length) * 100) + "%";
}

function openLesson(lesson) {
  state.currentLesson = lesson;
  state.currentQuizIdx = 0;
  state.quizAnswered = false;
  document.getElementById("modalTitle").textContent = lesson.title;

  var teoriaHTML = "<div class='lesson-content'>";
  for (var i = 0; i < lesson.teoria.length; i++) {
    teoriaHTML += "<p>" + lesson.teoria[i] + "</p>";
  }
  teoriaHTML += "<div class='tip-box'>" + lesson.codigo.join("\n") + "</div>";
  teoriaHTML += "</div>";
  teoriaHTML += "<br><button class='btn-run' onclick=\"switchTab('pratica', document.querySelectorAll('.tab')[1])\">Ir para Pratica</button>";
  document.getElementById("tab-teoria").innerHTML = teoriaHTML;

  var starterCode = lesson.codigo.join("\n");
  document.getElementById("tab-pratica").innerHTML =
    "<div class='editor-area'>" +
      "<div class='editor-panel'><h4>Seu codigo JS</h4>" +
        "<textarea class='code-editor' id='codeEditor'>" + starterCode + "</textarea>" +
      "</div>" +
      "<div class='preview-panel'><h4>Console</h4>" +
        "<div class='console-output' id='consoleOutput'><span class='info'>// Execute o codigo para ver os resultados</span></div>" +
      "</div>" +
    "</div>" +
    "<button class='btn-run' onclick='runCode()'>Executar</button>" +
    "<button class='btn-clear' onclick='clearConsole()'>Limpar</button>";

  renderQuizQuestion();

  var tabs = document.querySelectorAll(".tab");
  var contents = document.querySelectorAll(".tab-content");
  for (var i = 0; i < tabs.length; i++) { tabs[i].classList.toggle("active", i === 0); }
  for (var i = 0; i < contents.length; i++) { contents[i].classList.toggle("active", i === 0); }
  document.getElementById("modalOverlay").classList.add("active");
}

function closeModal() {
  document.getElementById("modalOverlay").classList.remove("active");
}

function switchTab(name, btn) {
  var tabs = document.querySelectorAll(".tab");
  var contents = document.querySelectorAll(".tab-content");
  for (var i = 0; i < tabs.length; i++) { tabs[i].classList.remove("active"); }
  for (var i = 0; i < contents.length; i++) { contents[i].classList.remove("active"); }
  if (btn) { btn.classList.add("active"); }
  document.getElementById("tab-" + name).classList.add("active");
}

function runCode() {
  var code = document.getElementById("codeEditor").value;
  var output = document.getElementById("consoleOutput");
  output.innerHTML = "";
  var logs = [];
  var _alert = window.alert;
  var _log = console.log;
  window.alert = function(msg) { logs.push("alert: " + msg); };
  console.log = function() {
    var args = Array.prototype.slice.call(arguments);
    logs.push(args.join(" "));
  };
  try {
    eval(code);
    if (logs.length === 0) {
      output.innerHTML = "<span class='info'>// Codigo executado sem saida.</span>";
    } else {
      for (var i = 0; i < logs.length; i++) {
        var line = document.createElement("div");
        line.textContent = "> " + logs[i];
        output.appendChild(line);
      }
    }
  } catch (e) {
    var err = document.createElement("div");
    err.className = "err";
    err.textContent = "Erro: " + e.message;
    output.appendChild(err);
  }
  console.log = _log;
  window.alert = _alert;
  state.runCount++;
  if (state.runCount === 1) { unlockAchievement("coder"); }
  showToast("Codigo executado!");
}

function clearConsole() {
  var output = document.getElementById("consoleOutput");
  if (output) { output.innerHTML = "<span class='info'>// Console limpo.</span>"; }
}

function renderQuizQuestion() {
  var lesson = state.currentLesson;
  var q = lesson.quiz[state.currentQuizIdx];
  var total = lesson.quiz.length;
  var html = "<p style='color:#999;font-size:0.85rem;margin-bottom:15px'>Pergunta " + (state.currentQuizIdx + 1) + " de " + total + "</p>";
  html += "<div class='quiz-question'>" + q.q + "</div>";
  html += "<div class='quiz-options' id='quizOptions'>";
  for (var i = 0; i < q.opts.length; i++) {
    html += "<button class='quiz-option' onclick='answerQuiz(" + i + ")'>" + q.opts[i] + "</button>";
  }
  html += "</div>";
  html += "<div class='quiz-feedback' id='quizFeedback'></div>";
  var nextLabel = state.currentQuizIdx < total - 1 ? "Proxima pergunta" : "Concluir Aula";
  html += "<button class='btn-next-quiz' id='btnNextQuiz' onclick='nextQuizQuestion()'>" + nextLabel + "</button>";
  document.getElementById("tab-quiz").innerHTML = html;
}

function answerQuiz(idx) {
  if (state.quizAnswered) { return; }
  state.quizAnswered = true;
  var q = state.currentLesson.quiz[state.currentQuizIdx];
  var opts = document.querySelectorAll(".quiz-option");
  var feedback = document.getElementById("quizFeedback");
  for (var i = 0; i < opts.length; i++) { opts[i].disabled = true; }
  opts[q.c].classList.add("correct");
  if (idx === q.c) {
    feedback.className = "quiz-feedback show ok";
    feedback.textContent = q.ok;
    state.quizCorrects++;
  } else {
    opts[idx].classList.add("wrong");
    feedback.className = "quiz-feedback show err";
    feedback.textContent = q.err;
  }
  document.getElementById("btnNextQuiz").classList.add("show");
}

function nextQuizQuestion() {
  var total = state.currentLesson.quiz.length;
  if (state.currentQuizIdx < total - 1) {
    state.currentQuizIdx++;
    state.quizAnswered = false;
    renderQuizQuestion();
  } else {
    completeLesson(state.currentLesson);
  }
}

function completeLesson(lesson) {
  if (state.completedLessons.indexOf(lesson.id) < 0) {
    state.completedLessons.push(lesson.id);
    addXP(lesson.xp);
    showToast("+" + lesson.xp + " XP! Aula concluida!");
    if (state.completedLessons.length === 1) { unlockAchievement("first_lesson"); }
    if (state.completedLessons.length >= Math.floor(lessons.length / 2)) { unlockAchievement("half_way"); }
    if (state.completedLessons.length === lessons.length) { unlockAchievement("js_hero"); }
    if (state.quizCorrects >= 5) { unlockAchievement("quiz_master"); }
  }
  renderTrail();
  closeModal();
}

function addXP(amount) {
  state.xp += amount;
  if (state.xp >= 100) { unlockAchievement("xp_100"); }
  updateXP();
}

function updateXP() {
  var lvl = Math.floor(state.xp / 100) + 1;
  var current = state.xp % 100;
  document.getElementById("xpFill").style.width = current + "%";
  document.getElementById("xpText").textContent = current + " / 100";
  document.getElementById("nivelLabel").textContent = "Nivel " + lvl;
}

function unlockAchievement(id) {
  if (state.unlockedAchievements.indexOf(id) >= 0) { return; }
  state.unlockedAchievements.push(id);
  for (var i = 0; i < achievements.length; i++) {
    if (achievements[i].id === id) {
      showToast("Conquista: " + achievements[i].name + "!");
      renderAchievements();
      break;
    }
  }
}

function renderAchievements() {
  var html = "";
  for (var i = 0; i < achievements.length; i++) {
    var a = achievements[i];
    var unlocked = state.unlockedAchievements.indexOf(a.id) >= 0;
    html += "<div class='achievement" + (unlocked ? " unlocked" : "") + "'>";
    html += "<div class='ach-icon'>" + a.icon + "</div>";
    html += "<div class='ach-name'>" + a.name + "</div>";
    html += "</div>";
  }
  document.getElementById("achievementsGrid").innerHTML = html;
}

function showToast(msg) {
  var t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(function() { t.classList.remove("show"); }, 2800);
}

function scrollToTrail() {
  document.getElementById("trilha").scrollIntoView({ behavior: "smooth" });
}

init();