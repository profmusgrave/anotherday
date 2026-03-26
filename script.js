// ──────────────────────────────────────────────────────────────
// EVENT DATABASE
// ──────────────────────────────────────────────────────────────
const events = [
  { name: "the signing of the Magna Carta",                 date: "1215-06-15",  cat: "politics",  gravity: 0.30 },
  { name: "the fall of Constantinople",                     date: "1453-05-29",  cat: "war",       gravity: 0.12 },
  { name: "Columbus reaching the Americas",                 date: "1492-10-12",  cat: "landmark",  gravity: 0.65 },
  { name: "the publication of the Gutenberg Bible",         date: "1455-02-23",  cat: "tech",      gravity: 0.25 },
  { name: "Shakespeare's birth",                            date: "1564-04-23",  cat: "culture",   gravity: 0.50 },
  { name: "the Gunpowder Plot",                             date: "1605-11-05",  cat: "politics",  gravity: 0.12 },
  { name: "the Great Fire of London",                       date: "1666-09-02",  cat: "disaster",  gravity: 0.15 },
  { name: "Newton publishing the Principia",                date: "1687-07-05",  cat: "science",   gravity: 0.30 },
  { name: "the signing of the Declaration of Independence", date: "1776-07-04",  cat: "politics",  gravity: 0.93 },
  { name: "the storming of the Bastille",                   date: "1789-07-14",  cat: "politics",  gravity: 0.35 },
  { name: "Mozart's death",                                 date: "1791-12-05",  cat: "culture",   gravity: 0.35 },
  { name: "the Battle of Waterloo",                         date: "1815-06-18",  cat: "war",       gravity: 0.40 },
  { name: "Darwin's On the Origin of Species",              date: "1859-11-24",  cat: "science",   gravity: 0.45 },
  { name: "the abolition of slavery in the US",             date: "1865-12-06",  cat: "politics",  gravity: 0.85 },
  { name: "the opening of the Suez Canal",                  date: "1869-11-17",  cat: "landmark",  gravity: 0.15 },
  { name: "the invention of the telephone",                 date: "1876-03-10",  cat: "tech",      gravity: 0.50 },
  { name: "the publication of the first Sherlock Holmes story", date: "1887-12-15", cat: "culture", gravity: 0.35 },
  { name: "the Eiffel Tower's completion",                  date: "1889-03-31",  cat: "culture",  gravity: 0.55 },
  { name: "the painting of van Gogh's The Starry Night",                  date: "1889-06-31",  cat: "culture",  gravity: 0.55 },
  { name: "the Wright Brothers' first flight",              date: "1903-12-17",  cat: "tech",      gravity: 0.65 },
  { name: "the Tunguska event",                             date: "1908-06-30",  cat: "space",     gravity: 0.15 },
  { name: "the sinking of the Titanic",                     date: "1912-04-15",  cat: "disaster",  gravity: 0.85 },
  { name: "the start of World War I",                       date: "1914-07-28",  cat: "war",       gravity: 0.70 },
  { name: "the end of World War I",                         date: "1918-11-11",  cat: "war",       gravity: 0.65 },
  { name: "women gaining the vote in the US",               date: "1920-08-18",  cat: "politics",  gravity: 0.60 },
  { name: "the founding of the USSR",                       date: "1922-12-30",  cat: "politics",  gravity: 0.35 },
  { name: "the publication of Winnie The Pooh",             date: "1926-10-14",  cat: "culture",   gravity: 0.30 },
  { name: "the discovery of penicillin",                    date: "1928-09-28",  cat: "science",   gravity: 0.30 },
  { name: "the Black Tuesday stock market crash that began the Great Depression", date: "1929-10-29", cat: "business", gravity: 0.55 },
  { name: "the release of the Wizard of Oz (movie)",        date: "1939-08-25",  cat: "culture",   gravity: 0.50 },
  { name: "the start of World War II",                      date: "1939-09-01",  cat: "war",       gravity: 0.88 },
  { name: "the attack on Pearl Harbor",                     date: "1941-12-07",  cat: "war",       gravity: 0.85 },
  { name: "D-Day",                                          date: "1944-06-06",  cat: "war",       gravity: 0.87 },
  { name: "the end of World War II",                        date: "1945-09-02",  cat: "war",       gravity: 0.92 },
  { name: "the atomic bombing of Hiroshima",                date: "1945-08-06",  cat: "war",       gravity: 0.97 },
  { name: "the founding of NATO",                           date: "1949-04-04",  cat: "politics",  gravity: 0.15 },
  { name: "the first use of a charge card",                 date: "1950-02-08",  cat: "culture",   gravity: 0.08 },
  { name: "the first Formula One World Championship race",  date: "1950-05-13",  cat: "culture",   gravity: 0.12 },
  { name: "the beginning of the Korean War",                date: "1950-06-25",  cat: "politics",  gravity: 0.30 },
  { name: "the coronation of Queen Elizabeth II",           date: "1953-06-02",  cat: "politics",  gravity: 0.40 },
  { name: "the climbing of Mt Everest",                     date: "1953-05-29",  cat: "culture",   gravity: 0.45 },
  { name: "the opening of Disneyland",                      date: "1955-07-17",  cat: "culture",   gravity: 0.50 },
  { name: "Rosa Parks refusing to move on the bus",         date: "1955-12-01",  cat: "culture",   gravity: 0.75 },
  { name: "the launch of Sputnik",                          date: "1957-10-04",  cat: "space",     gravity: 0.45 },
  { name: "the death of Buddy Holly, Ritchie Valens, and the Big Bopper",    date: "1959-02-03",  cat: "culture",     gravity: 0.3 },
  { name: "the Cuban Missile Crisis",                       date: "1962-10-16",  cat: "politics",  gravity: 0.55 },
  { name: "MLK Jr's I have a Dream Speech",                 date: "1963-08-28",  cat: "culture",   gravity: 0.88 },
  { name: "the assassination of JFK",                       date: "1963-11-22",  cat: "politics",  gravity: 0.90 },
  { name: "the first episode of Star Trek",                 date: "1966-09-08",  cat: "culture",   gravity: 0.45 },
  { name: "the Moon landing",                               date: "1969-07-20",  cat: "space",     gravity: 0.95 },
  { name: "Woodstock",                                      date: "1969-08-15",  cat: "culture",   gravity: 0.55 },
  { name: "the premiere of Sesame Street",                  date: "1969-11-03",  cat: "culture",   gravity: 0.40 },
  { name: "the Apollo 13 crisis",                           date: "1970-04-11",  cat: "space",     gravity: 0.45 },
  { name: "the shootings at Kent State",                    date: "1970-05-04",  cat: "war",       gravity: 0.35, plural: true },
  { name: "the Watergate break-in",                         date: "1972-06-17",  cat: "politics",  gravity: 0.50 },
  { name: "the first Star Wars film's release",             date: "1977-05-25",  cat: "culture",   gravity: 0.70 },
  { name: "the release of YMCA by the Village People",      date: "1978-10-17",  cat: "culture",   gravity: 0.30 },
  { name: "the Three Mile Island accident",                 date: "1979-03-28",  cat: "disaster",  gravity: 0.18 },
  { name: "the first McDonald's Happy Meal",                date: "1979-06-15",  cat: "culture",   gravity: 0.15 },
  { name: "the launch of MTV",                              date: "1981-08-01",  cat: "culture",   gravity: 0.45 },
  { name: "the final episode of MASH",                      date: "1983-02-28",  cat: "culture",   gravity: 0.35 },
  { name: "the release of the video Thriller by Michael Jackson", date: "1983-12-02", cat: "culture", gravity: 0.55 },
  { name: "the release of the Apple Macintosh",             date: "1984-02-24",  cat: "tech",      gravity: 0.40 },
  { name: "the release of Where in the World Is Carmen Sandiego? (video game)", date: "1985-04-23", cat: "culture", gravity: 0.35 },
  { name: "the release of New Coke", date: "1985-04-23", cat: "culture", gravity: 0.35 },
  { name: "the release of the Chicago Bears' Super Bowl Shuffle", date: "1985-12-11", cat: "sports", gravity: 0.35 },
  { name: "the Challenger disaster",                        date: "1986-01-28",  cat: "space",     gravity: 0.70 },
  { name: "the Chernobyl disaster",                         date: "1986-04-26",  cat: "disaster",  gravity: 0.65 },
  { name: "the release of We Didn't Start the Fire",        date: "1989-09-18",  cat: "culture",   gravity: 0.30 },
  { name: "the fall of the Berlin Wall",                    date: "1989-11-09",  cat: "politics",  gravity: 0.88 },
  { name: "the Tiananmen Square protests",                  date: "1989-06-04",  cat: "politics",  gravity: 0.60, plural: true },
  { name: "the release of the Game Boy in North America",   date: "1989-07-31",  cat: "culture",   gravity: 0.35 },
  { name: "the dissolution of the Soviet Union",            date: "1991-12-26",  cat: "politics",  gravity: 0.65 },
  { name: "the Dream Team winning an Olympic gold medal",              date: "1992-08-08",  cat: "culture",   gravity: 0.30 },
  { name: "the release of Crystal Pepsi",                   date: "1992-12-01",  cat: "culture",   gravity: 0.39 },
  { name: "the release of Jurassic Park",                   date: "1993-06-11",  cat: "culture",   gravity: 0.50 },
  { name: "the premiere of Friends",                        date: "1994-09-22",  cat: "culture",   gravity: 0.40 },
  { name: "the release of Windows 95",                      date: "1995-08-24",  cat: "tech",      gravity: 0.35 },
  { name: "the release of Toy Story",                       date: "1995-11-22",  cat: "culture",   gravity: 0.35 },
  { name: "Dolly the sheep being cloned",                   date: "1996-07-05",  cat: "science",   gravity: 0.30 },
  { name: "the song Macarena (Bayside Boys Remix) hitting number 1 in the USA", date: "1996-08-03", cat: "culture", gravity: 0.40 },
  { name: "the first episode of Pokemon broadcast in Japan", date: "1997-04-01", cat: "culture",   gravity: 0.40 },
  { name: "the first episode of South Park",                date: "1997-08-13",  cat: "culture",   gravity: 0.35 },
  { name: "the funeral of Princess Diana",                  date: "1997-09-06",  cat: "culture",   gravity: 0.70 },
  { name: "the release of Titanic (film)",                  date: "1997-12-19",  cat: "culture",   gravity: 0.60 },
  { name: "Google's founding",                              date: "1998-09-04",  cat: "tech",      gravity: 0.55 },
  { name: "the release of The Matrix",                      date: "1999-03-31",  cat: "culture",   gravity: 0.45 },
  { name: "Destiny's Child release of Say My Name",         date: "1999-10-14",  cat: "culture",   gravity: 0.25 },
  { name: "the Supreme Court decision in Bush v Gore",      date: "2000-12-12",  cat: "politics",  gravity: 0.45 },
  { name: "the launch of Wikipedia",                        date: "2001-01-15",  cat: "tech",      gravity: 0.30 },
  { name: "the release of the All Your Base is Belong to Us video",  date: "2001-02-15",  cat: "culture",      gravity: 0.30 },
  { name: "the September 11 attacks",                       date: "2001-09-11",  cat: "disaster",  gravity: 0.98, plural: true },
  { name: "the release of the iPod",                        date: "2001-10-01",  cat: "tech",      gravity: 0.45 },
  { name: "the Columbia shuttle disaster",                  date: "2003-02-01",  cat: "space",     gravity: 0.30 },
  { name: "the U.S. invasion of Iraq",                      date: "2003-03-20",  cat: "politics",  gravity: 0.65 },
  { name: "the release of Mr Brightside by the Killers",    date: "2003-09-23",  cat: "culture",  gravity: 0.45 },
  { name: "the Indian Ocean tsunami",                       date: "2004-12-26",  cat: "disaster",  gravity: 0.45 },
  { name: "the launch of YouTube",                          date: "2005-02-14",  cat: "tech",      gravity: 0.45 },
  { name: "the first episode of the US show of The Office", date: "2005-03-24",  cat: "culture",   gravity: 0.40 },
  { name: "the release of the first iPhone",                date: "2007-06-29",  cat: "tech",      gravity: 0.65 },
  { name: "the start of the 2008 financial crisis",         date: "2008-09-15",  cat: "politics",  gravity: 0.60 },
  { name: "Obama's first inauguration",                           date: "2009-01-20",  cat: "politics",  gravity: 0.70 },
  { name: "the Deepwater Horizon oil spill",                date: "2010-04-20",  cat: "disaster",  gravity: 0.30 },
  { name: "the Arab Spring beginning",                      date: "2010-12-17",  cat: "politics",  gravity: 0.25 },
  { name: "the death of Osama bin Laden",                   date: "2011-05-02",  cat: "politics",  gravity: 0.60 },
  { name: "the release of Minecraft",                       date: "2011-11-18",  cat: "tech",      gravity: 0.35 },
  { name: "the Higgs boson discovery",                      date: "2012-07-04",  cat: "science",   gravity: 0.20 },
  { name: "the inauguration of Pope Francis",               date: "2013-03-19",  cat: "culture",   gravity: 0.25 },
  { name: "the Snowden revelations",                        date: "2013-06-05",  cat: "politics",  gravity: 0.35, plural: true },
  { name: "the release of Frozen",                          date: "2013-11-27",  cat: "culture",   gravity: 0.40 },
  { name: "the disappearance of Malaysia Airlines Flight 370", date: "2014-03-08", cat: "disaster", gravity: 0.40 },
  { name: "the Ice Bucket Challenge going viral",           date: "2014-07-15",  cat: "social",    gravity: 0.25 },
  { name: "U2 shoving their album on iTunes",                       date: "2014-09-09",  cat: "tech",  gravity: 0.35 },
  { name: "the UK Brexit vote",                             date: "2016-06-23",  cat: "politics",  gravity: 0.50 },
  { name: "Trump's first inauguration",                     date: "2017-01-20",  cat: "politics",  gravity: 0.70 },
  { name: "the first photo of a black hole",                date: "2019-04-10",  cat: "science",   gravity: 0.35 },
  { name: "the WHO declaring COVID-19 a pandemic",          date: "2020-03-11",  cat: "disaster",  gravity: 0.95 },
  { name: "the launch of the James Webb Space Telescope",   date: "2021-12-25",  cat: "space",     gravity: 0.30 },
  { name: "the release of ChatGPT",                         date: "2022-11-30",  cat: "tech",      gravity: 0.55 },
  { name: "the resignation of Prime Minister Liz Truss",    date: "2022-10-20",  cat: "politics",  gravity: 0.30 },
];

// ──────────────────────────────────────────────────────────────
// CATEGORY DISTANCE
// ──────────────────────────────────────────────────────────────
function catDistance(a, b) {
  if (a === b) return 0.0;
  const key = [a, b].sort().join("|");
  const map = {
    "politics|war":0.15,"disaster|war":0.20,"politics|disaster":0.25,
    "science|tech":0.20,"space|tech":0.25,"science|space":0.20,
    "culture|social":0.25,"politics|social":0.30,
    "ancient|tech":1.00,"ancient|culture":0.95,"ancient|social":0.95,
    "culture|war":0.80,"culture|science":0.85,"culture|space":0.85,
    "culture|politics":0.70,"culture|disaster":0.75,"culture|ancient":0.95,
    "tech|war":0.80,"tech|ancient":1.00,"tech|politics":0.60,"tech|disaster":0.65,
    "social|war":0.85,"social|science":0.80,"social|space":0.85,
    "social|ancient":0.95,"social|disaster":0.60,"social|tech":0.40,
    "space|war":0.70,"space|politics":0.60,"space|disaster":0.55,
    "space|ancient":0.95,"space|culture":0.85,
    "science|war":0.75,"science|politics":0.65,"science|disaster":0.60,
    "science|ancient":0.90,"science|culture":0.85,
    "disaster|ancient":0.70,
    "landmark|culture":0.60,"landmark|tech":0.70,"landmark|war":0.50,
    "landmark|politics":0.45,"landmark|science":0.65,"landmark|space":0.70,
    "landmark|disaster":0.55,"landmark|ancient":0.40,"landmark|social":0.65,
  };
  return map[key] ?? 0.5;
}

// ──────────────────────────────────────────────────────────────
// DATE UTILITIES
// ──────────────────────────────────────────────────────────────
const MS_PER_DAY  = 86400000;
const MS_PER_YEAR = 365.2425 * MS_PER_DAY;

function parseDate(str) {
  const m = str.match(/^(-?\d+)-(\d{2})-(\d{2})$/);
  if (!m) return null;
  const year  = parseInt(m[1], 10);
  const month = parseInt(m[2], 10) - 1;
  const day   = parseInt(m[3], 10);
  if (year >= 0) {
    const d = new Date(Date.UTC(year, month, day));
    d.setUTCFullYear(year);
    return d.getTime();
  }
  const monthDays = [0,31,59,90,120,151,181,212,243,273,304,334];
  return year * MS_PER_YEAR + (monthDays[month] + day - 1) * MS_PER_DAY;
}

function daysBetween(a, b) { return Math.abs(b - a) / MS_PER_DAY; }

function fmtDuration(days) {
  const y = Math.floor(days / 365.2425);
  const rem = Math.round(days - y * 365.2425);
  if (y > 0 && rem > 30) {
    return `${y.toLocaleString()} yr${y !== 1 ? 's' : ''}, ${Math.round(rem / 30.44)} mo`;
  }
  if (y > 0) return `${y.toLocaleString()} yr${y !== 1 ? 's' : ''}`;
  return `${Math.round(days)} days`;
}

function fmtDate(str) {
  const m = str.match(/^(-?\d+)-(\d{2})-(\d{2})$/);
  const year  = parseInt(m[1], 10);
  const month = parseInt(m[2], 10);
  const day   = parseInt(m[3], 10);
  const names = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  if (year < 0) return `${Math.abs(year)} BC`;
  if (year < 1000) return `${names[month-1]} ${day}, ${year} AD`;
  return `${names[month-1]} ${day}, ${year}`;
}

function fmtBarLabel(str) {
  const y = parseInt(str.match(/^(-?\d+)/)[1], 10);
  return y < 0 ? `${Math.abs(y)} BC` : `${y}`;
}

// ──────────────────────────────────────────────────────────────
// SURPRISE SCORING + GENERATION
// ──────────────────────────────────────────────────────────────
const today     = Date.now();
const MIN_GAP_DAYS = 4 * 365;
const MIN_POSITION = 0.35;
const BRIMLEY_CENTER = 0.47;
const BRIMLEY_SIGMA  = 0.08;

function brimleyScore(position) {
  const delta = position - BRIMLEY_CENTER;
  return Math.exp(-(delta * delta) / (2 * BRIMLEY_SIGMA * BRIMLEY_SIGMA));
}

const GRAVITY_WEIGHT = 0.15;

function scorePair(recent, older, daysToToday, daysToPast) {
  const position = daysToPast / (daysToPast + daysToToday);
  const brimley = brimleyScore(position);
  const gravityBonus = Math.max(0, (older.gravity || 0) - (recent.gravity || 0));
  return brimley + GRAVITY_WEIGHT * gravityBonus;
}

const recentHistory = [];
const HISTORY_SIZE = 15;
let currentCard = null;
let birthdayEvent = null;

function renderCard(r) {
  currentCard = r;

  const pct = ((r.daysToPast / (r.daysToPast + r.daysToToday)) * 100).toFixed(1);
  const el = document.getElementById("card");
  const cap = s => s.charAt(0).toUpperCase() + s.slice(1);
  const verb = r.recent.plural ? "are" : "is";
  el.innerHTML = `
    <div class="card">
      <div class="card-main">
        <span class="event-name">${cap(r.recent.name)}</span>
        <span class="closer-to"> ${verb} now closer to </span>
        <span class="past-event">${r.older.name}</span>
        <span class="closer-to"> than to today.</span>
      </div>
      <div class="card-dates">
        <span style="color:var(--accent)">${fmtDate(r.older.date)}</span> &#8594; <strong style="color:var(--fg)">${fmtDate(r.recent.date)}</strong> &#8594; Today
      </div>
      <div class="bar-container">
        <span class="bar-label">${fmtBarLabel(r.older.date)}</span>
        <div class="bar-track">
          <div class="bar-fill" data-pct="${pct}"></div>
          <div class="bar-midpoint" style="left:50%"></div>
        </div>
        <span class="bar-label today">Now</span>
      </div>
      <div class="card-gap">
        <span>${fmtDuration(r.daysToPast)} to past event</span>
        <span>${fmtDuration(r.daysToToday)} to today</span>
      </div>
    </div>
  `;

  document.querySelectorAll('.copy-btn').forEach(b => b.classList.remove('copied'));

  requestAnimationFrame(() => {
    const fill = el.querySelector(".bar-fill");
    if (fill) {
      fill.style.width = fill.dataset.pct + "%";
      fill.classList.add("animate");
    }
  });
}

function generate() {
  const allPairs = [];
  for (const recent of events) {
    const recentMs    = parseDate(recent.date);
    const daysToToday = daysBetween(recentMs, today);
    for (const older of events) {
      const olderMs = parseDate(older.date);
      if (olderMs >= recentMs) continue;
      const daysToPast = daysBetween(olderMs, recentMs);
      if (daysToPast >= daysToToday) continue;
      if (daysToPast < MIN_GAP_DAYS) continue;
      const position = daysToPast / (daysToPast + daysToToday);
      if (position < MIN_POSITION) continue;
      const score = scorePair(recent, older, daysToToday, daysToPast);
      allPairs.push({ recent, older, daysToToday, daysToPast, score });
    }
  }
  allPairs.sort((a, b) => b.score - a.score);
  const pool = allPairs.slice(0, Math.min(50, allPairs.length));

  const pairKey = p => p.recent.name + '|' + p.older.name;
  let available = pool.filter(p => !recentHistory.includes(pairKey(p)));
  if (available.length === 0) available = pool;

  const r = available[Math.floor(Math.random() * available.length)];
  if (!r) return;

  recentHistory.push(pairKey(r));
  if (recentHistory.length > HISTORY_SIZE) recentHistory.shift();

  renderCard(r);
}

// ──────────────────────────────────────────────────────────────
// CANVAS CAPTURE (adaptive dimensions)
// ──────────────────────────────────────────────────────────────

async function captureCard(W, H) {
  await document.fonts.ready;
  if (!currentCard) return null;
  const r = currentCard;

  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");

  // ── Colors ──
  const BG      = "#0a0a0c";
  const FG      = "#e8e4dc";
  const DIM     = "#6b6660";
  const ACCENT  = "#ff6b35";
  const ACCENT2 = "#ff9a6c";
  const TRACK   = "#1a1a1f";
  const WMARK   = "#3a3630";

  // ── Fonts ──
  const SERIF = "'Instrument Serif', serif";
  const MONO  = "'DM Mono', monospace";

  // ── Aspect-aware scaling ──
  const aspect = W / H;
  const isSquare = aspect < 1.2;
  const isWide   = aspect > 1.5;

  const S = W / 1200;
  const textBoost = isSquare ? 2.2 : isWide ? 1.0 : 1.1;

  // ── Background ──
  ctx.fillStyle = BG;
  ctx.fillRect(0, 0, W, H);

  // ── Helpers ──
  function drawSegments(segments, x, y, font, align) {
    ctx.font = font;
    let totalW = 0;
    for (const s of segments) { totalW += ctx.measureText(s.text).width; }
    let curX = align === "center" ? x - totalW / 2 : x;
    for (const s of segments) {
      ctx.fillStyle = s.color;
      ctx.fillText(s.text, curX, y);
      curX += ctx.measureText(s.text).width;
    }
  }

  const PAD = Math.round((isSquare ? 64 : 80) * S);
  const CX = W / 2;

  const titleY    = Math.round(H * (isSquare ? 0.15 : 0.14));
  const mainTop   = H * (isSquare ? 0.18 : 0.28);
  const mainZone  = H * (isSquare ? 0.50 : 0.32);
  const barZoneY  = H * (isSquare ? 0.80 : 0.68);
  const wmY       = H - Math.round((isSquare ? 48 : 32) * S);

  // ── Title ──
  const titleSize = Math.round(28 * S * (isSquare ? 1.3 : textBoost));
  let y = titleY;
  ctx.font = `400 ${titleSize}px ${SERIF}`;
  ctx.fillStyle = DIM;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("Another day closer to the end.", CX, y);

  // ── Main text (multi-color, word-wrapped) ──
  const cap = s => s.charAt(0).toUpperCase() + s.slice(1);
  const verb = r.recent.plural ? "are" : "is";
  const mainSize = Math.round(38 * S * textBoost);
  const mainFont = `400 ${mainSize}px ${SERIF}`;
  const mainLineH = Math.round(52 * S * textBoost);
  const maxLineW = W - PAD * 2;

  const parts = [
    { text: cap(r.recent.name), color: FG },
    { text: ` ${verb} now closer to `, color: DIM },
    { text: r.older.name, color: ACCENT },
    { text: " than to today.", color: DIM },
  ];

  let charColors = [];
  for (const p of parts) {
    for (const ch of p.text) {
      charColors.push({ ch, color: p.color });
    }
  }

  ctx.font = mainFont;
  const wrappedLines = [];
  let lineChars = [];
  let lineWidth = 0;

  for (let i = 0; i < charColors.length; i++) {
    const c = charColors[i];
    const cw = ctx.measureText(c.ch).width;
    if (lineWidth + cw > maxLineW && lineChars.length > 0) {
      let breakIdx = lineChars.length - 1;
      while (breakIdx > 0 && lineChars[breakIdx].ch !== " ") breakIdx--;
      if (breakIdx > 0) {
        const kept = lineChars.slice(0, breakIdx);
        const overflow = lineChars.slice(breakIdx + 1);
        wrappedLines.push(kept);
        lineChars = [...overflow, c];
        lineWidth = lineChars.reduce((s, cc) => s + ctx.measureText(cc.ch).width, 0);
      } else {
        wrappedLines.push(lineChars);
        lineChars = [c];
        lineWidth = cw;
      }
    } else {
      lineChars.push(c);
      lineWidth += cw;
    }
  }
  if (lineChars.length) wrappedLines.push(lineChars);

  const blockH = wrappedLines.length * mainLineH;
  let startY = Math.round(mainTop + (mainZone - blockH) / 2);

  ctx.textAlign = "left";
  for (const wl of wrappedLines) {
    let lw = 0;
    for (const c of wl) lw += ctx.measureText(c.ch).width;
    let lx = CX - lw / 2;
    for (const c of wl) {
      ctx.fillStyle = c.color;
      ctx.fillText(c.ch, lx, startY);
      lx += ctx.measureText(c.ch).width;
    }
    startY += mainLineH;
  }

  // ── Bar section (wide layouts only) ──
  const labelSize = Math.round(14 * S * textBoost);

  if (!isSquare) {
    // ── Date line ──
    const metaSize = Math.round(16 * S * textBoost);
    const metaFont = `300 ${metaSize}px ${MONO}`;
    y = Math.round(barZoneY - metaSize * 2.5);
    ctx.textAlign = "center";
    const dSegs = [
      { text: fmtDate(r.older.date) + "  →  ", color: ACCENT },
      { text: fmtDate(r.recent.date), color: FG },
      { text: "  →  Today", color: DIM },
    ];
    drawSegments(dSegs, CX, y, metaFont, "center");

    // ── Progress bar ──
    y = Math.round(barZoneY);
    const barInset = Math.round(60 * S);
    const barX = PAD + barInset;
    const barW = W - PAD * 2 - barInset * 2;
    const barH = Math.round((isSquare ? 12 : 10) * S);
    const barR = Math.round(barH / 2);
    const pct = r.daysToPast / (r.daysToPast + r.daysToToday);

    ctx.fillStyle = TRACK;
    ctx.beginPath();
    ctx.roundRect(barX, y - barH / 2, barW, barH, barR);
    ctx.fill();

    const grad = ctx.createLinearGradient(barX, 0, barX + barW * pct, 0);
    grad.addColorStop(0, ACCENT);
    grad.addColorStop(1, ACCENT2);
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.roundRect(barX, y - barH / 2, barW * pct, barH, barR);
    ctx.fill();

    const midX = barX + barW * 0.5;
    ctx.strokeStyle = DIM;
    ctx.globalAlpha = 0.4;
    ctx.lineWidth = 1;
    const tickH = Math.round(14 * S);
    ctx.beginPath();
    ctx.moveTo(midX, y - tickH);
    ctx.lineTo(midX, y + tickH);
    ctx.stroke();
    ctx.globalAlpha = 1;

    ctx.font = `300 ${labelSize}px ${MONO}`;
    ctx.textAlign = "center";
    ctx.fillStyle = DIM;
    ctx.fillText(fmtBarLabel(r.older.date), PAD + Math.round(28 * S), y + Math.round(5 * S));
    ctx.fillStyle = ACCENT;
    ctx.fillText("Now", W - PAD - Math.round(28 * S), y + Math.round(5 * S));

    // ── Gap durations ──
    const gapY = y + Math.round((isSquare ? 48 : 40) * S);
    ctx.font = `300 ${labelSize}px ${MONO}`;
    ctx.textAlign = "left";
    ctx.fillStyle = DIM;
    ctx.fillText(`${fmtDuration(r.daysToPast)} to past event`, PAD + Math.round(10 * S), gapY);
    ctx.textAlign = "right";
    ctx.fillStyle = ACCENT;
    ctx.globalAlpha = 0.7;
    ctx.fillText(`${fmtDuration(r.daysToToday)} to today`, W - PAD - Math.round(10 * S), gapY);
    ctx.globalAlpha = 1;
  }

  // ── Watermark ──
  ctx.font = `300 ${labelSize}px ${MONO}`;
  ctx.textAlign = "center";
  ctx.fillStyle = WMARK;
  ctx.fillText("profmusgrave.github.io/anotherday", CX, wmY);

  return canvas;
}

// ──────────────────────────────────────────────────────────────
// COPY IMAGE FOR PLATFORM
// ──────────────────────────────────────────────────────────────

function showToast(msg) {
  const toast = document.getElementById("shareToast");
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove("show"), 2200);
}

async function copyForPlatform(btnEl, w, h, platformName) {
  if (!currentCard) {
    showToast("Generate a card first");
    return;
  }

  const canvas = await captureCard(w, h);
  if (!canvas) {
    showToast("Capture failed — try again");
    return;
  }

  try {
    const blob = await new Promise(resolve => canvas.toBlob(resolve, "image/png"));
    await navigator.clipboard.write([
      new ClipboardItem({ "image/png": blob })
    ]);
    document.querySelectorAll('.copy-btn').forEach(b => b.classList.remove('copied'));
    btnEl.classList.add('copied');
    showToast(`${platformName} image copied — ${w}×${h}`);
  } catch (e) {
    try {
      const dataUrl = canvas.toDataURL("image/png");
      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = `one-day-closer-${w}x${h}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      showToast(`Clipboard unavailable — saved ${w}×${h} image`);
    } catch (e2) {
      showToast("Copy not available in this browser");
    }
  }
}

// ──────────────────────────────────────────────────────────────
// SHARE TEXT TO SOCIAL
// ──────────────────────────────────────────────────────────────

const SITE_URL = "https://profmusgrave.github.io/anotherday";

function getShareText() {
  if (!currentCard) return "";
  const r = currentCard;
  const cap = s => s.charAt(0).toUpperCase() + s.slice(1);
  const verb = r.recent.plural ? "are" : "is";
  return `${cap(r.recent.name)} ${verb} now closer to ${r.older.name} than to today.`;
}

function shareToX() {
  const text = getShareText() + `\n\nMore reminders of mortality at ${SITE_URL}`;
  window.open(`https://x.com/intent/tweet?text=${encodeURIComponent(text)}`, "_blank");
}

function shareToBluesky() {
  const text = getShareText() + `\n\nMore reminders of mortality at ${SITE_URL}`;
  window.open(`https://bsky.app/intent/compose?text=${encodeURIComponent(text)}`, "_blank");
}

function shareToLinkedIn() {
  window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(SITE_URL)}`, "_blank");
  const text = getShareText() + "\n\nMore reminders of mortality at " + SITE_URL;
  navigator.clipboard.writeText(text).then(() => {
    showToast("Text copied — paste into your LinkedIn post");
  }).catch(() => {
    showToast("LinkedIn opened — add your caption there");
  });
}

// ──────────────────────────────────────────────────────────────
// BIRTHDAY INPUT
// ──────────────────────────────────────────────────────────────

const birthdayInput = document.getElementById("birthdayInput");
const birthdayClearBtn = document.getElementById("birthdayClear");
const birthdayBtn = document.getElementById("birthdayBtn");

function updateBirthdayUI() {
  if (birthdayEvent) {
    birthdayClearBtn.classList.add("visible");
    birthdayBtn.classList.add("visible");
  } else {
    birthdayClearBtn.classList.remove("visible");
    birthdayBtn.classList.remove("visible");
  }
}

// Restore from localStorage if available
const savedBirthday = localStorage.getItem("userBirthday");
if (savedBirthday) {
  birthdayInput.value = savedBirthday;
  birthdayEvent = { name: "your birthday", date: savedBirthday, cat: "culture", gravity: 0.10 };
}
updateBirthdayUI();

birthdayInput.addEventListener("change", () => {
  const val = birthdayInput.value;
  if (val) {
    birthdayEvent = { name: "your birthday", date: val, cat: "culture", gravity: 0.10 };
    localStorage.setItem("userBirthday", val);
    updateBirthdayUI();
    generateBirthday();
  }
});

function clearBirthday() {
  birthdayEvent = null;
  birthdayInput.value = "";
  localStorage.removeItem("userBirthday");
  updateBirthdayUI();
  recentHistory.length = 0;
  generate();
}

function generateBirthday() {
  if (!birthdayEvent) return;
  const bdMs = parseDate(birthdayEvent.date);
  const daysToToday = daysBetween(bdMs, today);

  const candidates = [];
  for (const older of events) {
    const olderMs = parseDate(older.date);
    if (olderMs >= bdMs) continue;
    const daysToPast = daysBetween(olderMs, bdMs);
    if (daysToPast >= daysToToday) continue;
    if (daysToPast < MIN_GAP_DAYS) continue;
    const position = daysToPast / (daysToPast + daysToToday);
    if (position < MIN_POSITION) continue;
    const score = scorePair(birthdayEvent, older, daysToToday, daysToPast);
    candidates.push({ recent: birthdayEvent, older, daysToToday, daysToPast, score });
  }
  if (candidates.length === 0) return;

  candidates.sort((a, b) => b.score - a.score);
  const pool = candidates.slice(0, Math.min(20, candidates.length));

  const pairKey = p => p.recent.name + '|' + p.older.name;
  let available = pool.filter(p => !recentHistory.includes(pairKey(p)));
  if (available.length === 0) available = pool;

  const r = available[Math.floor(Math.random() * available.length)];
  if (!r) return;

  recentHistory.push(pairKey(r));
  if (recentHistory.length > HISTORY_SIZE) recentHistory.shift();

  renderCard(r);
}

generate();
