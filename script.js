const courseCatalog = {
  programming: {
    title: "Бағдарламалау",
    summary: "Логика, өнім жасау және техникалық сенімділікті қадам сайын арттырыңыз.",
    badge: "Бастапқы ағаш",
    levels: {
      Beginner: [
        {
          title: "HTML және CSS негіздері",
          detail: "Алғашқы интерфейстеріңіз үшін құрылымды, бейімделгіш беттеуді және көрнекі ұқыптылықты үйреніңіз."
        },
        {
          title: "JavaScript негіздері",
          detail: "Айнымалыларды, шарттарды, циклдарды және интерактивтіліктің логикасын түсініңіз."
        },
        {
          title: "Git жұмыс ағымы",
          detail: "Өзгерістерді бақылап, сенімді коммит жасап, прогресті жоғалтпай бірлесіп жұмыс істеңіз."
        }
      ],
      Intermediate: [
        {
          title: "DOM өзара әрекеттесуі",
          detail: "Батырмалар, формалар және интерфейс күйін байланыстырып, браузердің әрекетке жауап беруін ұйымдастырыңыз."
        },
        {
          title: "API және асинхрондылық",
          detail: "Сыртқы деректерді алып, күту күйлерін бұзбай басқарыңыз."
        },
        {
          title: "Қате түзету тәсілдері",
          detail: "Қателерді қарап, себепті оқшаулап, мінез-құлықты жылдам түзетуді үйреніңіз."
        }
      ],
      Advanced: [
        {
          title: "Архитектуралық ойлау",
          detail: "Үлкенірек мүмкіндіктерді қайта қолдануға ыңғайлы құрылыммен және таза шешімдермен ұйымдастырыңыз."
        },
        {
          title: "Өнімділікті оңтайландыру",
          detail: "Артық шығынды азайтып, жылдамдықты арттырып, интерфейсті күрделілік өскенде де тегіс ұстаңыз."
        },
        {
          title: "Жобаларды шығару",
          detail: "Жаттығудан нақты өнімге жоспарлау, итерация және жеткізу әдеттері арқылы өтіңіз."
        }
      ]
    }
  },
  design: {
    title: "Дизайн",
    summary: "Көрнекілік, жүйелер және пайдаланушыға бағытталған шешімдер арқылы жақсырақ өнім жасаңыз.",
    badge: "Бастапқы ағаш",
    levels: {
      Beginner: [
        {
          title: "Визуал иерархия",
          detail: "Экрандардың бірден түсінікті болуы үшін өлшемді, арақашықтықты және контрастты дұрыс қолданыңыз."
        },
        {
          title: "Түс жүйелері",
          detail: "Түсті эмоция, айқындық және тұрақты өнім айдентикасын беру үшін саналы пайдаланыңыз."
        },
        {
          title: "Figma негіздері",
          detail: "Заманауи дизайн кеңістігінде таза фрейм, компонент және прототип жасауды үйреніңіз."
        }
      ],
      Intermediate: [
        {
          title: "Дизайн жүйелері",
          detail: "Бірнеше өнім беттеріне масштабталатын қайта қолданылатын компоненттер мен ережелер жасаңыз."
        },
        {
          title: "Өзара әрекет дизайны",
          detail: "Әрекеттердің табиғи сезілуі үшін күйлерді, ауысуларды және кері байланысты жоспарлаңыз."
        },
        {
          title: "Пайдаланушы зерттеуі",
          detail: "Пайдаланушыларды тыңдап, идеяларды тексеріп, үлгілерді жақсы өнім шешімдеріне айналдырыңыз."
        }
      ],
      Advanced: [
        {
          title: "Өнім стратегиясы",
          detail: "Дизайн шешімдерін бизнес мақсаттарына, позициялауға және ұзақ мерзімді бағытқа байланыстырыңыз."
        },
        {
          title: "Дизайн талқылауы",
          detail: "Жұмысты баяулатпай жақсартатын нақты кері байланыс беруді және қабылдауды үйреніңіз."
        },
        {
          title: "Қолжетімділік көшбасшылығы",
          detail: "Көбірек адамға жұмыс істейтін тәжірибе жобалау арқылы сапа деңгейін көтеріңіз."
        }
      ]
    }
  },
  psychology: {
    title: "Психология",
    summary: "Адамдардың қалай ойлайтынын, әрекет ететінін және мотивацияны қалай сақтайтынын қабат-қабат үйреніңіз.",
    badge: "Бастапқы ағаш",
    levels: {
      Beginner: [
        {
          title: "Когнитивті бұрмаланулар",
          detail: "Ойлау қысқартуларының қалай жұмыс істейтінін және шешімдерді қалай жаңылдыра алатынын байқаңыз."
        },
        {
          title: "Мотивация негіздері",
          detail: "Әрекетке, тұрақтылыққа және ұзақ мерзімді күш салуға не түрткі болатынын түсініңіз."
        },
        {
          title: "Мінез-құлықты бақылау",
          detail: "Тек болжамға сүйенбей, нақты әрекеттегі үлгілерді байқауды үйреніңіз."
        }
      ],
      Intermediate: [
        {
          title: "Әлеуметтік психология",
          detail: "Топтардың, қысымның және бірегейліктің таңдау мен коммуникацияға қалай әсер ететінін зерттеңіз."
        },
        {
          title: "Әдет циклдары",
          detail: "Әдеттің қалай бекитінін түсіну үшін триггерді, әрекетті және марапатты талдаңыз."
        },
        {
          title: "Эмоцияны реттеу",
          detail: "Стресті, триггерлерді және орнықты жауап беруге көмектесетін тәжірибелік құралдарды түсініңіз."
        }
      ],
      Advanced: [
        {
          title: "Шешім дизайны",
          detail: "Психологияны жақсы шешімге жетелейтін ортаны құру үшін қолданыңыз."
        },
        {
          title: "Коучинг дағдылары",
          detail: "Өсуді сауалдар, тыңдау және құрылымды кері байланыс арқылы қолдаңыз."
        },
        {
          title: "Эксперименттік ойлау",
          detail: "Мінез-құлыққа қатысты идеяларды дәлелге сүйеніп тексеруді үйреніңіз."
        }
      ]
    }
  },
  data: {
    title: "Деректер",
    summary: "Шикі ақпаратты инсайтқа, айқындыққа және сенімді шешімге айналдырыңыз.",
    badge: "Жасырын ағаш",
    levels: {
      Beginner: [
        {
          title: "Кестемен еркін жұмыс",
          detail: "Ақпаратты оңай талдау үшін кестелерді, формулаларды және сүзгілерді сенімді қолданыңыз."
        },
        {
          title: "Деректерді тазалау",
          detail: "Талдауға дейін қате мәндерді, біркелкі емес белгілерді және бос ұяшықтарды реттеңіз."
        },
        {
          title: "Статистикаға кіріспе",
          detail: "Орташа мәнді, үлестірімді және ауытқуды күрделі терминсіз түсінуді бастаңыз."
        }
      ],
      Intermediate: [
        {
          title: "SQL сұраулары",
          detail: "Сүзгілер, join және топталған қорытындылар арқылы дұрыс деректерді алыңыз."
        },
        {
          title: "Дашбордтар",
          detail: "Командалар қозғалысты тез байқауы үшін негізгі метрикаларды көрнекі түрде көрсетіңіз."
        },
        {
          title: "Талдауға арналған Python",
          detail: "Деректерді зерттеу, тапсырмаларды автоматтандыру және талдауды қайталау үшін скрипттерді қолданыңыз."
        }
      ],
      Advanced: [
        {
          title: "Болжау",
          detail: "Құрылымды болжамдар мен тарихи деректерге сүйеніп трендтер мен нәтижелерді есептеңіз."
        },
        {
          title: "Эксперимент дизайны",
          detail: "Нәтижелер сенімді өнімдік және маркетингтік шешімдерге әкелуі үшін тесттерді дұрыс құрыңыз."
        },
        {
          title: "Дерекпен баяндау",
          detail: "Күрделі талдауды мүдделі тараптар әрекет ете алатын нанымды әңгімеге айналдырыңыз."
        }
      ]
    }
  },
  marketing: {
    title: "Маркетинг",
    summary: "Өнімді позициялауды, аудиторияға жетуді және сұранысты саналы түрде өсіруді үйреніңіз.",
    badge: "Жасырын ағаш",
    levels: {
      Beginner: [
        {
          title: "Нарықты зерттеу",
          detail: "Аудиторияның ауырсыну нүктелерін, бәсекелестерді және қолданылатын тілді анықтаңыз."
        },
        {
          title: "Позициялау негіздері",
          detail: "Өнімнің несімен ерекшеленетінін және неге клиентке маңызды екенін айқындаңыз."
        },
        {
          title: "Контент негіздері",
          detail: "Назар аудартып, уақыт өте сенім қалыптастыратын пайдалы контент жасаңыз."
        }
      ],
      Intermediate: [
        {
          title: "Өсу арналары",
          detail: "Әлеуметтік желі, іздеу, серіктестік және қауымдастық секілді тарту жолдарын салыстырыңыз."
        },
        {
          title: "Хаттар тізбегі",
          detail: "Пайдаланушыны таныстырып, қызығушылықты жылытып, әрекетке итермелейтін хаттар жасаңыз."
        },
        {
          title: "Аналитика баптауы",
          detail: "Кампанияны интуицияға емес, сигналға сүйеніп жақсарту үшін дұрыс метрикаларды қадағалаңыз."
        }
      ],
      Advanced: [
        {
          title: "Бренд стратегиясы",
          detail: "Әртүрлі жанасу нүктелерінде есте қалатын бірізді әңгіме, тон және уәде құрыңыз."
        },
        {
          title: "Конверсияны оңтайландыру",
          detail: "Маңызды әрекеттерді арттыратын тесттер арқылы қону бетін және ағындарды жақсартыңыз."
        },
        {
          title: "Кампания көшбасшылығы",
          detail: "Ірі іске қосуларды жақсырақ үйлестірумен, уақытпен және нәтижені талдаумен жоспарлаңыз."
        }
      ]
    }
  }
};

const courseAliases = {
  programming: ["programming", "бағдарламалау"],
  design: ["design", "дизайн"],
  psychology: ["psychology", "психология"],
  data: ["data", "деректер"],
  marketing: ["marketing", "маркетинг"]
};

const levelLabels = {
  Beginner: "Бастапқы",
  Intermediate: "Орта",
  Advanced: "Жетілдірілген"
};

const defaultVisibleCourses = ["programming", "design", "psychology"];
const visibleCourses = [...defaultVisibleCourses];
const progressState = buildProgressState();

let activeCourseKey = "programming";
let isGenerating = false;

const skillForm = document.querySelector("#skillForm");
const skillInput = document.querySelector("#skillInput");
const generateButton = document.querySelector("#generateButton");
const searchFeedback = document.querySelector("#searchFeedback");
const courseGrid = document.querySelector("#courseGrid");
const visibleCount = document.querySelector("#visibleCount");
const activeCourseName = document.querySelector("#activeCourseName");
const roadmapTitle = document.querySelector("#roadmapTitle");
const roadmapDescription = document.querySelector("#roadmapDescription");
const roadmapLevels = document.querySelector("#roadmapLevels");
const progressText = document.querySelector("#progressText");
const progressFill = document.querySelector("#progressFill");
const loadingOverlay = document.querySelector("#loadingOverlay");
const loadingMessage = document.querySelector("#loadingMessage");

initializeApp();

function initializeApp() {
  if (!skillForm) {
    return;
  }

  renderCourseGrid();
  renderRoadmap(activeCourseKey);
  updateConsoleMeta();

  skillForm.addEventListener("submit", handleGenerate);
  courseGrid.addEventListener("click", handleCourseSelection);
  roadmapLevels.addEventListener("click", handleSkillCompletion);
}

function buildProgressState() {
  const state = {};

  Object.entries(courseCatalog).forEach(([courseKey, course]) => {
    state[courseKey] = new Set();

    Object.entries(course.levels).forEach(([levelName, skills]) => {
      skills.forEach((skill, index) => {
        skill.id = createSkillId(courseKey, levelName, index);
      });
    });
  });

  return state;
}

function createSkillId(courseKey, levelName, index) {
  return `${courseKey}-${levelName.toLowerCase()}-${index + 1}`;
}

function handleGenerate(event) {
  event.preventDefault();

  if (isGenerating) {
    return;
  }

  const requestedValue = skillInput.value.trim();
  const normalizedKey = normalizeCourseKey(requestedValue);

  if (!requestedValue) {
    setFeedback("Жол картасын жасау үшін дағдыны енгізіңіз.", "error");
    return;
  }

  if (!normalizedKey) {
    setFeedback(`"${requestedValue}" қазір MVP каталогында жоқ. деректер немесе маркетинг деп теріп көріңіз.`, "error");
    return;
  }

  const isNewCourse = !visibleCourses.includes(normalizedKey);
  const courseTitle = courseCatalog[normalizedKey].title;

  startLoading(
    isNewCourse
      ? `${courseTitle} бағыты ашылып, жол картасы жасалып жатыр...`
      : `${courseTitle} жол картасы жүктеліп жатыр...`
  );

  window.setTimeout(() => {
    if (isNewCourse) {
      visibleCourses.push(normalizedKey);
    }

    activeCourseKey = normalizedKey;
    renderCourseGrid();
    renderRoadmap(activeCourseKey);
    updateConsoleMeta();
    setFeedback(
      isNewCourse
        ? `${courseTitle} бағыты ашылып, басты экранға қосылды.`
        : `${courseTitle} жол картасы жаңартылып, дайын болды.`,
      "success"
    );
    skillForm.reset();
    stopLoading();
  }, 2300);
}

function handleCourseSelection(event) {
  const card = event.target.closest("[data-course]");

  if (!card) {
    return;
  }

  activeCourseKey = card.dataset.course;
  renderCourseGrid();
  renderRoadmap(activeCourseKey);
  updateConsoleMeta();
  setFeedback(`${courseCatalog[activeCourseKey].title} жол картасы ашылды.`, "success");
}

function handleSkillCompletion(event) {
  const button = event.target.closest("[data-skill-id]");

  if (!button) {
    return;
  }

  const skillId = button.dataset.skillId;
  const completedSkills = progressState[activeCourseKey];

  if (completedSkills.has(skillId)) {
    return;
  }

  completedSkills.add(skillId);
  renderCourseGrid();
  renderRoadmap(activeCourseKey);
  updateConsoleMeta();
}

function renderCourseGrid() {
  courseGrid.innerHTML = visibleCourses
    .map((courseKey) => {
      const course = courseCatalog[courseKey];
      const badgeLabel = defaultVisibleCourses.includes(courseKey) ? course.badge : "Ашылған ағаш";
      const { totalSkills, completedCount, percentage } = getCourseProgress(courseKey);
      const progressLabel = completedCount === totalSkills ? "Ағаш толық аяқталды" : `${percentage}% аяқталды`;

      return `
        <button class="course-card ${courseKey === activeCourseKey ? "active" : ""}" type="button" data-course="${courseKey}">
          <span class="course-badge">${badgeLabel}</span>
          <h3>${course.title}</h3>
          <p>${course.summary}</p>
          <div class="course-meta">
            <span>${totalSkills} дағды</span>
            <span>${progressLabel}</span>
          </div>
        </button>
      `;
    })
    .join("");
}

function renderRoadmap(courseKey) {
  const course = courseCatalog[courseKey];

  roadmapTitle.textContent = course.title;
  roadmapDescription.textContent = course.summary;
  roadmapLevels.innerHTML = Object.entries(course.levels)
    .map(([levelName, skills], index) => {
      const levelLabel = levelLabels[levelName] || levelName;
      const skillCards = skills
        .map((skill) => {
          const isCompleted = progressState[courseKey].has(skill.id);

          return `
            <article class="skill-card ${isCompleted ? "completed" : ""}">
              <h4>${skill.title}</h4>
              <p>${skill.detail}</p>
              <button
                class="complete-button"
                type="button"
                data-skill-id="${skill.id}"
                ${isCompleted ? "disabled" : ""}
              >
                ${isCompleted ? "Аяқталды" : "Аяқтау"}
              </button>
            </article>
          `;
        })
        .join("");

      return `
        <section class="level-column">
          <div class="level-header">
            <span class="level-index">0${index + 1}</span>
            <div>
              <p class="eyebrow">${levelLabel}</p>
              <h3>${levelLabel}</h3>
            </div>
          </div>
          <div class="skill-list">
            ${skillCards}
          </div>
        </section>
      `;
    })
    .join("");

  updateProgress(courseKey);
}

function getCourseProgress(courseKey) {
  const totalSkills = Object.values(courseCatalog[courseKey].levels).reduce((count, skills) => count + skills.length, 0);
  const completedCount = progressState[courseKey].size;
  const percentage = Math.round((completedCount / totalSkills) * 100);

  return {
    totalSkills,
    completedCount,
    percentage
  };
}

function updateProgress(courseKey) {
  const { completedCount, totalSkills, percentage } = getCourseProgress(courseKey);

  progressText.textContent = `${percentage}%`;
  progressFill.style.width = `${percentage}%`;
  progressFill.setAttribute("aria-label", `${completedCount} / ${totalSkills} дағды аяқталды`);
}

function updateConsoleMeta() {
  visibleCount.textContent = String(visibleCourses.length);
  activeCourseName.textContent = courseCatalog[activeCourseKey].title;
}

function normalizeCourseKey(value) {
  const normalizedValue = value.trim().toLowerCase();

  if (!normalizedValue) {
    return "";
  }

  return Object.keys(courseCatalog).find((courseKey) => {
    const courseTitle = courseCatalog[courseKey].title.toLowerCase();
    const aliases = courseAliases[courseKey] || [];

    return courseKey === normalizedValue || courseTitle === normalizedValue || aliases.includes(normalizedValue);
  }) || "";
}

function startLoading(message) {
  isGenerating = true;
  loadingMessage.textContent = message;
  loadingOverlay.classList.remove("hidden");
  loadingOverlay.setAttribute("aria-hidden", "false");
  generateButton.disabled = true;
  skillInput.disabled = true;
}

function stopLoading() {
  isGenerating = false;
  loadingOverlay.classList.add("hidden");
  loadingOverlay.setAttribute("aria-hidden", "true");
  generateButton.disabled = false;
  skillInput.disabled = false;
}

function setFeedback(message, type) {
  searchFeedback.textContent = message;
  searchFeedback.classList.remove("success", "error");

  if (type) {
    searchFeedback.classList.add(type);
  }
}
