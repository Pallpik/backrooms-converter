/* ============================================================
   1. UI TRANSLATIONS
   ============================================================ */
const I18N = {
  ru: {
    subtitle: "// ты не должен был найти это место //",
    labelInput: "Входной текст",
    labelOutput: "Результат",
    inputPlaceholder: "Введи обычный текст сюда...",
    outputPlaceholder: "Здесь появится твой испорченный текст...",
    btn_convert: "Конвертировать",
    btn_copy: "Копировать",
    btn_clear: "Очистить",
    btn_copied: "Скопировано!",
    mode_glitch: "Глитч",
    mode_zalgo: "Залго",
    mode_noise: "Шум",
    mode_corrupt: "Искажение",
    mode_shadow: "Тень",
    stats: (i, o, r) => `символов: ${i} → ${o}  |  коэффициент искажения: ${r}x`
  },
  en: {
    subtitle: "// you were not supposed to find this place //",
    labelInput: "Input text",
    labelOutput: "Result",
    inputPlaceholder: "Type normal text here...",
    outputPlaceholder: "Your corrupted text will appear here...",
    btn_convert: "Convert",
    btn_copy: "Copy",
    btn_clear: "Clear",
    btn_copied: "Copied!",
    mode_glitch: "Glitch",
    mode_zalgo: "Zalgo",
    mode_noise: "Noise",
    mode_corrupt: "Distort",
    mode_shadow: "Shadow",
    stats: (i, o, r) => `chars: ${i} → ${o}  |  distortion ratio: ${r}x`
  },
  es: {
    subtitle: "// no deberías haber encontrado este lugar //",
    labelInput: "Texto de entrada",
    labelOutput: "Resultado",
    inputPlaceholder: "Escribe texto normal aquí...",
    outputPlaceholder: "Tu texto corrupto aparecerá aquí...",
    btn_convert: "Convertir",
    btn_copy: "Copiar",
    btn_clear: "Limpiar",
    btn_copied: "¡Copiado!",
    mode_glitch: "Glitch",
    mode_zalgo: "Zalgo",
    mode_noise: "Ruido",
    mode_corrupt: "Distorsión",
    mode_shadow: "Sombra",
    stats: (i, o, r) => `caracteres: ${i} → ${o}  |  ratio de distorsión: ${r}x`
  },
  de: {
    subtitle: "// du solltest diesen Ort nicht finden //",
    labelInput: "Eingabetext",
    labelOutput: "Ergebnis",
    inputPlaceholder: "Gib hier normalen Text ein...",
    outputPlaceholder: "Dein verzerrter Text erscheint hier...",
    btn_convert: "Konvertieren",
    btn_copy: "Kopieren",
    btn_clear: "Löschen",
    btn_copied: "Kopiert!",
    mode_glitch: "Glitch",
    mode_zalgo: "Zalgo",
    mode_noise: "Rauschen",
    mode_corrupt: "Verzerrung",
    mode_shadow: "Schatten",
    stats: (i, o, r) => `Zeichen: ${i} → ${o}  |  Verzerrungsfaktor: ${r}x`
  },
  fr: {
    subtitle: "// tu n'étais pas censé trouver cet endroit //",
    labelInput: "Texte d'entrée",
    labelOutput: "Résultat",
    inputPlaceholder: "Tapez du texte normal ici...",
    outputPlaceholder: "Votre texte corrompu apparaîtra ici...",
    btn_convert: "Convertir",
    btn_copy: "Copier",
    btn_clear: "Effacer",
    btn_copied: "Copié !",
    mode_glitch: "Glitch",
    mode_zalgo: "Zalgo",
    mode_noise: "Bruit",
    mode_corrupt: "Distorsion",
    mode_shadow: "Ombre",
    stats: (i, o, r) => `caractères : ${i} → ${o}  |  taux de distorsion : ${r}x`
  },
  ja: {
    subtitle: "// ここを見つけるべきではなかった //",
    labelInput: "入力テキスト",
    labelOutput: "結果",
    inputPlaceholder: "ここに普通のテキストを入力...",
    outputPlaceholder: "破損したテキストがここに表示されます...",
    btn_convert: "変換",
    btn_copy: "コピー",
    btn_clear: "クリア",
    btn_copied: "コピーしました！",
    mode_glitch: "グリッチ",
    mode_zalgo: "ザルゴ",
    mode_noise: "ノイズ",
    mode_corrupt: "歪み",
    mode_shadow: "シャドウ",
    stats: (i, o, r) => `文字数: ${i} → ${o}  |  歪み率: ${r}x`
  }
};

/* ============================================================
   2. CHARACTER PACKS PER SCRIPT
   ============================================================ */
const SCRIPT_PACKS = {
  latin: {
    glitch: ['#', '@', '$', '%', '&', '*', '!', '?', '~', '^', '|', '\\', '/', '=', '+', '¤', '§', '¶', 'µ', '¬'],
    noise:  ['░', '▒', '▓', '█', '▄', '▀', '■', '□', '▪', '▫', '●', '○', '◘', '◙'],
    corrupt:['�', 'ǝ', 'ɐ', 'ʇ', 'ɹ', 'ʎ', 'ʌ', 'ω', 'ξ', 'ℵ', '☍', '⍟', '⏃']
  },
  cyrillic: {
    glitch: ['#', '@', '$', '%', '&', '*', '!', '?', '~', '^', '|', '\\', '/', '=', '+', '¤', '§', '¶', 'µ', '¬'],
    noise:  ['░', '▒', '▓', '█', '▄', '▀', '■', '□', '▪', '▫', '●', '○', '◘', '◙'],
    corrupt:['�', 'э', 'я', 'ю', 'ж', 'щ', 'ц', 'ч', 'ш', 'ъ', 'ы', 'ь', 'ѣ', 'ѫ', 'ѧ', 'ѳ', 'ѵ']
  },
  cjk: {
    glitch: ['#', '@', '$', '%', '&', '*', '！', '？', '～', '＾', '｜', '＼', '／', '＝', '＋', '¤', '§', '¶'],
    noise:  ['░', '▒', '▓', '█', '▄', '▀', '■', '□', '▪', '▫', '●', '○', '◘', '◙'],
    corrupt:['�', '〆', '〄', '〒', '〓', 'ゟ', 'ヿ', '々', '〻', '〼', '〽']
  },
  arabic: {
    glitch: ['#', '@', '$', '%', '&', '*', '؟', '!', '~', '^', '|', '\\', '/', '=', '+', '¤', '§', '¶'],
    noise:  ['░', '▒', '▓', '█', '▄', '▀', '■', '□', '▪', '▫', '●', '○', '◘', '◙'],
    corrupt:['�', '٭', 'ٮ', 'ٯ', 'ٰ', 'ٱ', 'ٲ', 'ٳ', 'ٴ', 'ٵ', 'ٶ', 'ٷ', 'ٸ']
  },
  hebrew: {
    glitch: ['#', '@', '$', '%', '&', '*', '?', '!', '~', '^', '|', '\\', '/', '=', '+', '¤', '§', '¶'],
    noise:  ['░', '▒', '▓', '█', '▄', '▀', '■', '□', '▪', '▫', '●', '○', '◘', '◙'],
    corrupt:['�', '֐', '֑', '֒', '֓', '֔', '֕', '֖', '֗', '֘', '֙', '֚']
  },
  greek: {
    glitch: ['#', '@', '$', '%', '&', '*', '!', '?', '~', '^', '|', '\\', '/', '=', '+', '¤', '§', '¶'],
    noise:  ['░', '▒', '▓', '█', '▄', '▀', '■', '□', '▪', '▫', '●', '○', '◘', '◙'],
    corrupt:['�', 'ϟ', 'ϡ', 'ϣ', 'ϥ', 'ϧ', 'ϩ', 'ϫ', 'ϭ', 'ϯ', 'ϰ', 'ϱ', 'ϲ']
  }
};

/* Universal zalgo combining marks (work with any script) */
const ZALGO_MARKS = [
  '\u0300','\u0301','\u0302','\u0303','\u0304','\u0305','\u0306','\u0307','\u0308','\u0309',
  '\u030a','\u030b','\u030c','\u030d','\u030e','\u030f','\u0310','\u0311','\u0312','\u0313',
  '\u0336','\u0337','\u0338','\u0339','\u033a','\u033b','\u033c','\u033d','\u033e','\u033f'
];

/* ============================================================
   3. SCRIPT DETECTION
   ============================================================ */
function detectScript(text) {
  let cjk = 0, cyr = 0, arab = 0, hebr = 0, greek = 0, latin = 0, total = 0;

  for (const ch of text) {
    const code = ch.codePointAt(0);
    if (!/\S/.test(ch)) continue;
    total++;

    if ((code >= 0x4E00 && code <= 0x9FFF) ||   // CJK Unified Ideographs
        (code >= 0x3040 && code <= 0x30FF) ||   // Hiragana / Katakana
        (code >= 0xAC00 && code <= 0xD7AF) ||   // Hangul Syllables
        (code >= 0x3400 && code <= 0x4DBF))       cjk++;
    else if (code >= 0x0400 && code <= 0x04FF)    cyr++;
    else if (code >= 0x0600 && code <= 0x06FF)    arab++;
    else if (code >= 0x0590 && code <= 0x05FF)    hebr++;
    else if (code >= 0x0370 && code <= 0x03FF)    greek++;
    else if ((code >= 0x0041 && code <= 0x007A) ||
             (code >= 0x00C0 && code <= 0x024F))  latin++;
  }

  if (total === 0) return 'latin';

  const scores = { cjk, cyrillic: cyr, arabic: arab, hebrew: hebr, greek, latin };
  let best = 'latin', bestScore = 0;
  for (const [k, v] of Object.entries(scores)) {
    if (v > bestScore) { bestScore = v; best = k; }
  }
  return best;
}

/* ============================================================
   4. CONVERSION MODES
   ============================================================ */
function makeModes(pack) {
  return {
    /* Glitch: random symbol replaces a letter + occasional strikethrough */
    glitch(text) {
      let result = '';
      for (const ch of text) {
        if (/\s/.test(ch)) { result += ch; continue; }
        if (Math.random() < 0.25) {
          result += pack.glitch[Math.floor(Math.random() * pack.glitch.length)];
        } else if (Math.random() < 0.1) {
          result += ch + '\u0336';
        } else {
          result += ch;
        }
      }
      return result;
    },

    /* Zalgo: combining diacritics above and below each glyph */
    zalgo(text) {
      let result = '';
      for (const ch of text) {
        if (/\s/.test(ch)) { result += ch; continue; }
        result += ch;
        const up = Math.floor(Math.random() * 4);
        const down = Math.floor(Math.random() * 3);
        for (let i = 0; i < up; i++)
          result += ZALGO_MARKS[Math.floor(Math.random() * 20)];
        for (let i = 0; i < down; i++)
          result += ZALGO_MARKS[20 + Math.floor(Math.random() * 10)];
      }
      return result;
    },

    /* Noise: block characters substituted for letters */
    noise(text) {
      let result = '';
      for (const ch of text) {
        if (/\s/.test(ch)) { result += ch; continue; }
        if (Math.random() < 0.4) {
          result += pack.noise[Math.floor(Math.random() * pack.noise.length)];
        } else {
          result += ch;
        }
      }
      return result;
    },

    /* Distort: replacement with "broken" and flipped glyphs */
    corrupt(text) {
      let result = '';
      for (const ch of text) {
        if (/\s/.test(ch)) { result += ch; continue; }
        if (Math.random() < 0.3) {
          result += pack.corrupt[Math.floor(Math.random() * pack.corrupt.length)];
        } else if (Math.random() < 0.15) {
          result += ch + '\u0338';
        } else {
          result += ch;
        }
      }
      return result;
    },

    /* Shadow: rhythmic strikethrough pattern */
    shadow(text) {
      let result = '';
      let i = 0;
      for (const ch of text) {
        if (/\s/.test(ch)) { result += ch; i++; continue; }
        if (i % 3 === 0)      result += ch + '\u0336';
        else if (i % 5 === 0) result += ch + '\u0338';
        else                  result += ch;
        i++;
      }
      return result;
    }
  };
}

/* ============================================================
   5. DOM REFERENCES AND STATE
   ============================================================ */
const input         = document.getElementById('input');
const output        = document.getElementById('output');
const convertBtn    = document.getElementById('convertBtn');
const copyBtn       = document.getElementById('copyBtn');
const clearBtn      = document.getElementById('clearBtn');
const statsEl       = document.getElementById('stats');
const optionButtons = document.querySelectorAll('.option-btn');
const langButtons   = document.querySelectorAll('.lang-btn');

const subtitleEl  = document.getElementById('subtitle');
const labelInput  = document.getElementById('labelInput');
const labelOutput = document.getElementById('labelOutput');

let currentMode = 'glitch';
let currentLang = 'ru';

/* ============================================================
   6. LANGUAGE APPLICATION
   ============================================================ */
function applyLanguage(lang) {
  currentLang = lang;
  const t = I18N[lang] || I18N.en;

  document.documentElement.lang = lang;

  subtitleEl.textContent  = t.subtitle;
  labelInput.textContent  = t.labelInput;
  labelOutput.textContent = t.labelOutput;
  input.placeholder       = t.inputPlaceholder;
  output.placeholder      = t.outputPlaceholder;
  convertBtn.textContent  = t.btn_convert;
  copyBtn.textContent     = t.btn_copy;
  clearBtn.textContent    = t.btn_clear;

  optionButtons.forEach(btn => {
    const key = btn.dataset.i18n;
    if (t[key]) btn.textContent = t[key];
  });

  langButtons.forEach(b => b.classList.toggle('active', b.dataset.lang === lang));

  if (output.value) updateStats(input.value.length, output.value.length);
  else statsEl.textContent = '';
}

/* ============================================================
   7. CONVERSION PIPELINE
   ============================================================ */
function convert() {
  const text = input.value;
  if (!text.trim()) {
    output.value = '';
    statsEl.textContent = '';
    return;
  }
  const script = detectScript(text);
  const pack = SCRIPT_PACKS[script] || SCRIPT_PACKS.latin;
  const modes = makeModes(pack);
  output.value = modes[currentMode](text);
  updateStats(text.length, output.value.length);
}

function updateStats(inLen, outLen) {
  const t = I18N[currentLang] || I18N.en;
  const ratio = inLen ? (outLen / inLen).toFixed(2) : 0;
  statsEl.textContent = t.stats(inLen, outLen, ratio);
}

/* ============================================================
   8. EVENT HANDLERS
   ============================================================ */
convertBtn.addEventListener('click', convert);

copyBtn.addEventListener('click', async () => {
  if (!output.value) return;
  const t = I18N[currentLang];
  try {
    await navigator.clipboard.writeText(output.value);
    const old = copyBtn.textContent;
    copyBtn.textContent = t.btn_copied;
    setTimeout(() => copyBtn.textContent = old, 1200);
  } catch {
    output.select();
    document.execCommand('copy');
  }
});

clearBtn.addEventListener('click', () => {
  input.value = '';
  output.value = '';
  statsEl.textContent = '';
});

optionButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    optionButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentMode = btn.dataset.mode;
    if (input.value.trim()) convert();
  });
});

langButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    applyLanguage(btn.dataset.lang);
    try { localStorage.setItem('backrooms_lang', btn.dataset.lang); } catch {}
  });
});

input.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.key === 'Enter') {
    e.preventDefault();
    convert();
  }
});

/* ============================================================
   9. INIT
   ============================================================ */
(function init() {
  let saved = null;
  try { saved = localStorage.getItem('backrooms_lang'); } catch {}

  if (!saved) {
    const nav = (navigator.language || 'ru').slice(0, 2).toLowerCase();
    saved = I18N[nav] ? nav : 'ru';
  }
  applyLanguage(saved);
})();