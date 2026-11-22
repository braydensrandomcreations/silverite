
/* =====================================================================
   EDIT YOUR GAME LIBRARY HERE
   ---------------------------------------------------------------------
   REMOVE a built-in game by adding its exact HTML filename to `remove`.
   ADD a game by adding { name, url, image } to `add`.
   CHANGE a built-in game's title or thumbnail in `overrides`.

   URLs may be full https:// links or paths relative to this Silverite HTML,
   e.g. ./games/my-game.html and ./images/my-game.png.
   A thumbnail is optional. Use image: "" to hide a built-in thumbnail.
   Keep commas between entries. Save this HTML after editing it.
   ===================================================================== */
const GAME_LIBRARY_EDITS = {
  remove: [
    // "example-game.html",
  ],
  overrides: {
    // "actualgd": { name: "Actual Geometry Dash", image: "./images/actualgd.png" },
    // "other-game.html": { name: "New display name", image: "https://example.com/thumbnail.png" },
  },
  add: [
    // {
    //   name: "My New Game",
    //   url: "./games/my-new-game.html",
    //   image: "./images/my-new-game.png"
    // },
  ]
};

function isAllowedGameAssetUrl(value, kind) {
  const url = String(value || '').trim();
  if (/^(https?:\/\/|\.\.\/|\.\/|\/)/i.test(url)) return true;
  return kind === 'image' && /^data:image\/(?:png|jpeg|webp|gif|svg\+xml);base64,/i.test(url);
}

// Remote game library: pinned to this reviewed commit so upstream branch changes do not silently replace game code.
const GAME_REPO_COMMIT = "78f00c90fc2ea2834341d6ed19f716994d9aced7";
const GAME_RAW_ROOT = `https://cdn.jsdelivr.net/gh/s0n-1m-cr1n3/sc13nc3@${GAME_REPO_COMMIT}/`;
const GAME_HTML_PATH = "assets/html/main/";
const GAME_IMAGE_PATH = "assets/img/main/";
const GAME_HTML_FILES = ["112.html","1v1.html","2048.html","8ballpool.html","Antidisestablishmentarianism.html","Pneumonoultramicroscopicsilicovolcanoconiosis.html","UvuvwevwevweOnyetenvewveUgwemubwemOssas.html","actualgd.html","adanceoffireandice.html","alpha126.html","awesomeschoolhouse.html","awesometanks2.html","badtime.html","baldicreepyrun.html","baldisbasics.html","baldisdecompile.html","bank.html","bartblast.html","baseballbros.html","basketbros.html","basketrandom.html","beeswarm.html","bendy.html","bendyclicker.html","bhop.html","bitlife.html","bladeball.html","blockblast.html","bloodmoney.html","bloodmoney2.html","bowmasters.html","brotatonewdawn.html","brotatopaws.html","buckshot.html","buildnow.html","caseohbasics.html","catburgular.html","ccm152.html","cheese.html","chicken.html","chromedino.html","clash.html","classof09.html","clusterrush.html","codercraft152.html","cookie.html","crazycattle.html","crazyroll.html","crossyroad.html","cs.html","cuphead.html","dashio.html","drawclimber.html","escaperoad.html","escaperoad2.html","escaperoad3.html","femboyclicker.html","flappybird.html","flyinggorilla.html","fnaf.html","fnf.html","fnfbfdi26.html","fnfbside.html","fnfgarcello.html","fnfhex.html","fnfhitsingle.html","fnfindiecross.html","fnfkapi.html","fnflullaby.html","fnfmario.html","fnfmidfight.html","fnfmiku.html","fnfneo.html","fnfourple.html","fnfpibby.html","fnfqt.html","fnfshaggy.html","fnfsky.html","fnfsoft.html","fnfsonicexe.html","fnftails.html","fnftricky.html","fnfwhitty.html","footballbros.html","frag.html","fuchsiax152.html","fuchsiaxghost152.html","googlesnake.html","goosegame.html","granny.html","granny2.html","grannynightmare.html","grannyonline.html","growagarden.html","gtag.html","gtamods.html","hackedimpossiblequiz.html","hardestgame.html","hollowknight.html","hollowknightsilksong.html","impossiblequiz.html","indev.html","indiantruckdriving.html","infinite.html","js125.html","js13.html","js173.html","js18.html","jumbomario.html","justbuild.html","kindergarten.html","kindergarten2.html","kindergarten3.html","lethalape.html","lobotomy.html","memetash.html","minus3.html","minus3remastred.html","minusb.html","n0va152.html","nebula152.html","nitclient152.html","nitroclash.html","oddfuture152.html","onepiece.html","oneshot.html","orange.html","osu.html","pi18.html","plagueinc.html","pocketediton.html","polytrack.html","preccm152.html","pvz.html","ragdoll.html","raldiscrackhouse.html","repo.html","retrobowl.html","rocketgoal.html","run3.html","russia.html","sab.html","sab2player.html","shadow18.html","slime.html","slope.html","slowroads.html","snowballio.html","snowrider.html","soccerbros.html","soccerrandom.html","soflowheelielife.html","spacewaves.html","spin.html","sprialroll.html","sprinter.html","stickman.html","subway.html","supermario63.html","supermarketsim.html","survivalrace.html","t3.html","terraria.html","themathisleaking.html","three.html","time.html","tombofmask.html","triplethorror.html","tripletobby.html","ultra.html","undertale.html","unfairmario.html","uwu18.html","vicecity.html","wasm030.html","wasm112.html","wasm18.html","webdashers.html","wheresbaldi.html","whosyourdaddy.html","wrestlebros.html"];
const GAME_IMAGE_FILES = ["030.png","112.png","125.png","126.png","13.png","173.png","188.png","1v1lol.png","2048.png","3dgeometrydash.png","3dgeometrydasheditor.png","8ballpool.png","PVZ.png","UvuvwevwevweOnyetenvewveUgwemubwemOssas.png","actualgd.png","adanceoffireandice.png","antidisestablishmentarianism.png","awesometanks2.png","badtimesimulator.png","baldicreepyrun.png","baldisbasics.png","baldisbasicsdecompile.png","bankrob2.png","bartblast.png","baseballbros.png","basketbros.png","basketrandom.png","beeswarm.png","bendy.png","bendyclicker.png","bhop.png","bitlife.png","bladeball.png","blockblast.png","bloodmoney.png","bloodmoney2.png","bowmasters.png","brawlstars.png","brokengdwebplus.png","brotatonewdawn.png","brotatopawsandclaws.png","buckshotroullete.png","buildnowgg.png","caseohbasics.png","catburgular.png","cheesechompers.png","chickenwar.png","chromedino.png","clashroyale.png","classof09.png","client152.png","client188.png","clusterrush.png","cookie.png","crazycattle3d.png","crazyroll3d.png","crossyroad.png","cs16.png","cuphead.png","dashio.png","dokidokiliterature.png","drawclimber.png","driveinrussia.png","eaglercraft.png","eaglercraft112.png","escaperoad.png","escaperoad2.png","escaperoad3.png","femboyclicker.png","fivenightsatfrickbears3.png","flappybird.png","flyinggorilla.png","fnafscratch.png","fnfvsbfdi26.png","fnfvsbside.png","fnfvsgarcello.png","fnfvshex.png","fnfvshitsingle.png","fnfvsindiecross.png","fnfvskapi.png","fnfvslullaby.png","fnfvsmariomadness.png","fnfvsmidfight.png","fnfvsmiku.png","fnfvsneo.png","fnfvsourpleguy.png","fnfvspibby.png","fnfvsqt.png","fnfvsshaggy.png","fnfvssky.png","fnfvssoft.png","fnfvssonicexe.png","fnfvstailsgetstrolled4.png","fnfvstricky.png","fnfvswhitty.png","footballbros.png","frageb.png","fridaynightfunkin.png","gabrielsschoolhouse.png","gdwebplus.png","gdwebplusversion1.png","geometrydashbreeze.png","geometrydashlite.png","geometrydashroad.png","geometrydashscratch.png","geometrydashsubzero.png","geometrydashsubzeroscratch.png","geometrydashwave.png","googlesnake.png","gorillatag.png","granny.png","grannychapter2.png","grannyhorror.png","grannymultiplayer.png","growagarden.png","gtamods.png","gtavicecity.png","gunspin.png","hollowknight.png","hollowknightsilksong.png","imaginemathfacts.png","impossiblequiz.png","impossiblequizhacked.png","indev.png","indiantruckdriving.png","infinitecraft.png","jefferyBIGEbasics.png","jumbomario.png","justbuildlol.png","kindergarten.png","kindergarten2.png","kindergarten3.png","lethalape.png","lobtomoydash.png","memetash.png","minecraftpocketedition.png","minus3.png","minus3remastred.png","minusb.png","nitroclash.png","onepiece.png","oneshot.png","orangeroulette.png","osu.png","plagueinc.png","pneumonoultramicroscopicsilicovolcanoconiosis.png","polytrack.png","ragdollarchers.png","raldiscrackhouse.png","repo.png","retrobowl.png","ro16.png","rocketgoalakarocketleague.png","run3.png","slimerancher.png","slope.png","slowroads.png","snowballio.png","snowrider.png","soccerbros.png","soccerrandom.png","soflowheelielife.png","spacewaves.png","sprialroll.png","sprinter.png","stealabrainrot.png","stealabrainrot2player.png","stickmanduel.png","subwaysurfers.png","supermario63.png","supermarketsimulator.png","survivalrace.png","t3.png","tattletail.png","terraria.png","themathisleaking.png","theworldshardestgame.png","three.png","timeshooterswat2.png","tombofmask.png","tripletobby.png","tungtungtunghorror.jpg","ultrakill.png","undertale.png","unfairmario.png","untitledgoosegame.png","wavedash.png","waveroad3d.png","webdashers.png","whereisbaldi.png","whosyourdaddy.png","wrestlebros.png"];
const GAME_IMAGE_BY_STEM = new Map(GAME_IMAGE_FILES.map(file => [file.replace(/\.[^.]+$/, "").toLowerCase(), file]));
const GAME_IMAGE_ALIASES = {
  "1v1": "1v1lol.png",
  "badtime": "badtimesimulator.png",
  "baldisdecompile": "baldisbasicsdecompile.png",
  "brokendash": "brokengdwebplus.png",
  "brotatopaws": "brotatopawsandclaws.png",
  "buckshot": "buckshotroullete.png",
  "buildnow": "buildnowgg.png",
  "cheese": "cheesechompers.png",
  "chicken": "chickenwar.png",
  "clash": "clashroyale.png",
  "cs": "cs16.png",
  "gdscratch": "geometrydashscratch.png",
  "gdsubzero": "geometrydashsubzero.png",
  "gdsubzeroscratch": "geometrydashsubzeroscratch.png",
  "gdwave": "geometrydashwave.png",
  "gdweb": "gdwebplus.png",
  "gdwebv1": "gdwebplusversion1.png",
  "goosegame": "untitledgoosegame.png",
  "granny2": "grannychapter2.png",
  "grannynightmare": "grannyhorror.png",
  "grannyonline": "grannymultiplayer.png",
  "gtag": "gorillatag.png",
  "hackedimpossiblequiz": "impossiblequizhacked.png",
  "hardestgame": "theworldshardestgame.png",
  "justbuild": "justbuildlol.png",
  "lobotomy": "lobtomoydash.png",
  "rocketgoal": "rocketgoalakarocketleague.png",
  "russia": "driveinrussia.png",
  "sab": "stealabrainrot.png",
  "sab2player": "stealabrainrot2player.png",
  "stickman": "stickmanduel.png",
  "subway": "subwaysurfers.png",
  "supermarketsim": "supermarketsimulator.png",
  "wheresbaldi": "whereisbaldi.png",
  "wasm030": "030.png",
  "wasm112": "112.png",
  "antidisestablishmentarianism": "antidisestablishmentarianism.png",
  "pneumonoultramicroscopicsilicovolcanoconiosis": "pneumonoultramicroscopicsilicovolcanoconiosis.png",
  "pvz": "PVZ.png",
  "alpha126": "126.png",
  "fnaf": "fnafscratch.png",
  "fnf": "fridaynightfunkin.png",
  "gd3d": "3dgeometrydash.png",
  "gdlite": "geometrydashlite.png",
  "gdwave2": "geometrydashwave.png",
  "gdwave3d": "3dgeometrydash.png",
  "infinite": "infinitecraft.png",
  "js125": "125.png",
  "js13": "13.png",
  "js173": "173.png",
  "orange": "orangeroulette.png",
  "pocketediton": "minecraftpocketedition.png",
  "ragdoll": "ragdollarchers.png",
  "slime": "slimerancher.png",
  "ultra": "ultrakill.png",
  "vicecity": "gtavicecity.png",
  "breeze": "geometrydashbreeze.png"
};
const FNF_GAME_META = {
  "fnf": { title: "Friday Night Funkin'", image: "fridaynightfunkin.png" },
  "fnfbfdi26": { title: "FNF vs. BFDI 26", image: "fnfvsbfdi26.png" },
  "fnfbside": { title: "FNF B-Sides", image: "fnfvsbside.png" },
  "fnfgarcello": { title: "FNF vs. Garcello", image: "fnfvsgarcello.png" },
  "fnfhex": { title: "FNF vs. Hex", image: "fnfvshex.png" },
  "fnfhitsingle": { title: "FNF: Hit Single Real", image: "fnfvshitsingle.png" },
  "fnfindiecross": { title: "FNF: Indie Cross", image: "fnfvsindiecross.png" },
  "fnfkapi": { title: "FNF vs. Kapi", image: "fnfvskapi.png" },
  "fnflullaby": { title: "FNF: Hypno's Lullaby", image: "fnfvslullaby.png" },
  "fnfmario": { title: "FNF: Mario's Madness", image: "fnfvsmariomadness.png" },
  "fnfmidfight": { title: "FNF: Mid-Fight Masses", image: "fnfvsmidfight.png" },
  "fnfmiku": { title: "FNF vs. Miku", image: "fnfvsmiku.png" },
  "fnfneo": { title: "FNF Neo", image: "fnfvsneo.png" },
  "fnfourple": { title: "FNF: Ourple Guy", image: "fnfvsourpleguy.png" },
  "fnfpibby": { title: "FNF: Pibby Corrupted", image: "fnfvspibby.png" },
  "fnfqt": { title: "FNF vs. QT", image: "fnfvsqt.png" },
  "fnfshaggy": { title: "FNF vs. Shaggy", image: "fnfvsshaggy.png" },
  "fnfsky": { title: "FNF vs. Sky", image: "fnfvssky.png" },
  "fnfsoft": { title: "FNF Soft", image: "fnfvssoft.png" },
  "fnfsonicexe": { title: "FNF vs. Sonic.EXE", image: "fnfvssonicexe.png" },
  "fnftails": { title: "FNF: Tails Gets Trolled 4", image: "fnfvstailsgetstrolled4.png" },
  "fnftricky": { title: "FNF vs. Tricky", image: "fnfvstricky.png" },
  "fnfwhitty": { title: "FNF vs. Whitty", image: "fnfvswhitty.png" }
};
const GAME_TITLE_OVERRIDES = {
  "1v1":"1v1 LOL", "8ballpool":"8 Ball Pool", "adanceoffireandice":"A Dance of Fire and Ice", "actualgd":"Actual Geometry Dash",
  "awesometanks2":"Awesome Tanks 2", "baldicreepyrun":"Baldi's Basics Creepy Run", "baldisbasics":"Baldi's Basics", "baseballbros":"Baseball Bros",
  "basketbros":"Basket Bros", "basketrandom":"Basket Random", "beeswarm":"Bee Swarm Simulator", "bhop":"Bhop",
  "bitlife":"BitLife", "bladeball":"Blade Ball", "blockblast":"Block Blast", "chromedino":"Chrome Dino", "classof09":"Class of '09",
  "cookie":"Cookie Clicker", "crazycattle":"Crazy Cattle 3D", "crazyroll":"Crazy Roll 3D", "crossyroad":"Crossy Road", "cs":"Counter-Strike",
  "drawclimber":"Draw Climber", "escaperoad":"Escape Road", "flappybird":"Flappy Bird", "flyinggorilla":"Flying Gorilla", "fnf":"Friday Night Funkin'",
  "footballbros":"Football Bros", "gdlite":"Geometry Dash Lite", "gdsubzero":"Geometry Dash SubZero", "gdwave":"Geometry Dash Wave", "gdweb":"Geometry Dash Web",
  "googlesnake":"Google Snake", "goosegame":"Untitled Goose Game", "granny":"Granny", "growagarden":"Grow a Garden", "gtag":"Gorilla Tag",
  "gtamods":"GTA Mods", "hackedimpossiblequiz":"The Impossible Quiz (Hacked)", "hardestgame":"The World's Hardest Game", "hollowknight":"Hollow Knight",
  "hollowknightsilksong":"Hollow Knight: Silksong", "impossiblequiz":"The Impossible Quiz", "indiantruckdriving":"Indian Truck Driving", "jumbomario":"Jumbo Mario",
  "kindergarten":"Kindergarten", "lethalape":"Lethal Ape", "memetash":"Meme Tash", "minus3":"Minus 3", "nitroclash":"NitroClash", "onepiece":"One Piece",
  "oneshot":"OneShot", "osu":"osu!", "plagueinc":"Plague Inc.", "polytrack":"Polytrack", "pvz":"Plants vs. Zombies", "raldiscrackhouse":"Raldi's Crackhouse",
  "retrobowl":"Retro Bowl", "rocketgoal":"Rocket Goal", "run3":"Run 3", "slope":"Slope", "slowroads":"Slow Roads", "snowballio":"Snowball.io",
  "snowrider":"Snow Rider", "soccerbros":"Soccer Bros", "soccerrandom":"Soccer Random", "spacewaves":"Space Waves", "sprialroll":"Spiral Roll",
  "subway":"Subway Surfers", "supermario63":"Super Mario 63", "supermarketsim":"Supermarket Simulator", "survivalrace":"Survival Race",
  "themathisleaking":"The Math Is Leaking", "tombofmask":"Tomb of the Mask", "undertale":"Undertale", "unfairmario":"Unfair Mario",
  "webdashers":"Web Dashers", "whosyourdaddy":"Who's Your Daddy?", "wrestlebros":"Wrestle Bros"
};
const BLOCKED_GAME_FILES = new Set(["bank.html"]); // contains dynamic-code and third-party ad-domain signals; kept out of the player.
function gameTitleFromFile(file) {
  const stem = file.replace(/\.html?$/i, "");
  const key = stem.toLowerCase();
  if (FNF_GAME_META[key]) return FNF_GAME_META[key].title;
  if (GAME_TITLE_OVERRIDES[key]) return GAME_TITLE_OVERRIDES[key];
  return stem.replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/([a-zA-Z])([0-9])/g, "$1 $2").replace(/([0-9])([a-zA-Z])/g, "$1 $2").replace(/[_-]+/g, " ").replace(/\b[a-z]/g, c => c.toUpperCase());
}
function makeGameManifest() {
  const removed = new Set((GAME_LIBRARY_EDITS.remove || []).map(file => String(file).trim().toLowerCase()));
  return GAME_HTML_FILES.filter(file => {
    const key = file.replace(/\.html?$/i, "").toLowerCase();
    return !BLOCKED_GAME_FILES.has(file) && !removed.has(file.toLowerCase()) && !removed.has(key);
  }).map((file, index) => {
    const stem = file.replace(/\.html?$/i, "");
    const key = stem.toLowerCase();
    const edit = GAME_LIBRARY_EDITS.overrides?.[key] || GAME_LIBRARY_EDITS.overrides?.[file] || {};
    const originalImage = (FNF_GAME_META[key] && FNF_GAME_META[key].image) || GAME_IMAGE_BY_STEM.get(key) || GAME_IMAGE_ALIASES[key] || null;
    const title = String(edit.name || gameTitleFromFile(file)).trim();
    const imageWasSet = Object.prototype.hasOwnProperty.call(edit, 'image');
    const selectedImage = imageWasSet ? String(edit.image || '').trim() : (originalImage ? GAME_RAW_ROOT + GAME_IMAGE_PATH + encodeURIComponent(originalImage) : '');
    const image = selectedImage && isAllowedGameAssetUrl(selectedImage, 'image')
      ? (imageWasSet ? selectedImage : selectedImage)
      : '';
    const glyph = title.replace(/[^a-z0-9 ]/gi, "").split(/\s+/).filter(Boolean).slice(0,2).map(w => w[0]).join("").toUpperCase() || "G";
    const arts = ["gray","violet","blue","mint","orange","pink","gold","green"];
    return { name:title, file, url:GAME_RAW_ROOT + GAME_HTML_PATH + encodeURIComponent(file), image, glyph, art:arts[index % arts.length], source:"UBZONE" };
  });
}
function makeCustomGameManifest() {
  const arts = ["gray","violet","blue","mint","orange","pink","gold","green"];
  return (GAME_LIBRARY_EDITS.add || []).map((entry, index) => {
    if (!entry || !String(entry.name || '').trim() || !isAllowedGameAssetUrl(entry.url, 'game')) return null;
    const name = String(entry.name).trim();
    const url = String(entry.url).trim();
    const image = entry.image && isAllowedGameAssetUrl(entry.image, 'image') ? String(entry.image).trim() : '';
    const file = String(entry.file || url.split(/[?#]/)[0].split('/').pop() || (name + '.html'));
    const glyph = name.replace(/[^a-z0-9 ]/gi, '').split(/\s+/).filter(Boolean).slice(0,2).map(w => w[0]).join('').toUpperCase() || 'G';
    return { name, file, url, image, glyph, art:arts[index % arts.length], source:String(entry.source || "CUSTOM").trim().toUpperCase() };
  }).filter(Boolean);
}
let g4m3s = [...makeGameManifest(), ...makeCustomGameManifest()];


/* EXTERNAL GAME SOURCES. Catalog metadata is fetched on startup; game files are loaded only when clicked. */
const EXTERNAL_LIBRARY_CONFIG = {
  // All URLs use immutable commit hashes so upstream edits cannot silently swap code.
  gnMath: {
    // jsDelivr blocks the gn-math account, so these pinned commits are served through githack instead.
    catalog: "https://raw.githack.com/gn-math/assets/0723b1b0d9f3baf5c277ad1e1f9b369889f7f66e/zones.json",
    htmlRoot: "https://raw.githack.com/gn-math/html/5639f84d67456355a3c807a0f52b41c346b3385d/",
    coversRoot: "https://raw.githack.com/gn-math/covers/f1aca13e4c305539f247194fd2ebbd2b42696e7b/"
  },
};
const EXTERNAL_GAME_BLOCKLIST = new Set([
  "geometrydash", "geometrydashlite", "geometrydashsubzero", "geometrydashscratch",
  "geometrydashwave", "geometrydashbreeze", "geometrydash3d", "geometrydasheditor",
  "geometrydashworld", "geometrydashscratch3d"
]);
function normalizeGameKey(value) {
  return String(value || "").normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]/g, "");
}
function makeGameGlyph(title) {
  return String(title).replace(/[^a-z0-9 ]/gi, "").split(/\s+/).filter(Boolean).slice(0,2).map(word => word[0]).join("").toUpperCase() || "G";
}
function shouldAddExternalGame(name, seen) {
  const key = normalizeGameKey(name);
  if (!key || seen.has(key) || EXTERNAL_GAME_BLOCKLIST.has(key)) return false;
  if (/(^|[^a-z])fnae([^a-z]|$)|(^|[^a-z])bige([^a-z]|$)/i.test(String(name))) return false;
  return true;
}
function appendExternalGames(entries, source, seen) {
  const arts = ["gray","violet","blue","mint","orange","pink","gold","green"];
  let added = 0;
  for (const entry of entries) {
    const name = String(entry.name || "").trim();
    const url = String(entry.url || "").trim();
    if (!name || !isAllowedGameAssetUrl(url, "game") || !shouldAddExternalGame(name, seen)) continue;
    const image = entry.image && isAllowedGameAssetUrl(entry.image, "image") ? String(entry.image) : "";
    const imageCandidates = Array.isArray(entry.imageCandidates) ? entry.imageCandidates.filter(candidate=>isAllowedGameAssetUrl(candidate,"image")) : [];
    const game = {
      name, file: String(entry.file || url.split(/[?#]/)[0].split("/").pop() || name), url, image,
      imageCandidates,
      glyph: makeGameGlyph(name), art: arts[g4m3s.length % arts.length], source,
      launchMode: entry.launchMode || "iframe", actionLabel: entry.actionLabel || "PLAY"
    };
    g4m3s.push(game);
    seen.add(normalizeGameKey(name));
    added++;
  }
  return added;
}
async function fetchExternalText(url, timeoutMs = 16000) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, { mode:"cors", credentials:"omit", cache:"force-cache", referrerPolicy:"no-referrer", signal:controller.signal });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.text();
  } finally { clearTimeout(timeout); }
}
async function fetchGnMathEntries() {
  const response = await fetchExternalText(EXTERNAL_LIBRARY_CONFIG.gnMath.catalog);
  const rows = JSON.parse(response);
  return rows.filter(row => row && Number(row.id) >= 0 && row.name && row.url && String(row.url).includes("{HTML_URL}/"))
    .map(row => ({
      name: row.name,
      file: `gn-math/${row.id}`,
      url: String(row.url).replace("{HTML_URL}", EXTERNAL_LIBRARY_CONFIG.gnMath.htmlRoot),
      image: row.cover ? String(row.cover).replace("{COVER_URL}", EXTERNAL_LIBRARY_CONFIG.gnMath.coversRoot) : ""
    }));
}

async function loadExternalGameLibraries() {
  const seen = new Set(g4m3s.map(game => normalizeGameKey(game.name)));
  const results = await Promise.allSettled([fetchGnMathEntries()]);
  let gnCount = 0;
  if (results[0].status === "fulfilled") gnCount = appendExternalGames(results[0].value, "GN-MATH", seen); else console.warn("GN-MATH catalog could not load:", results[0].reason);
  const freezeNova = [
    {name:"FreezeNova Catalog",url:"https://app.freezenova.com/"},
    {name:"Ragdoll Archers",url:"https://app.freezenova.com/class/ragdoll-archers"},
    {name:"Moto X3M 3",url:"https://app.freezenova.com/class/moto-x3m-3"},
    {name:"Five Nights at Freddy's 2",url:"https://app.freezenova.com/class/five-nights-at-freddys-2"},
    {name:"Steal Brainrot Heist",url:"https://app.freezenova.com/class/steal-brainrot-heist"}
  ].map(game => ({...game,launchMode:"external",actionLabel:game.name==="FreezeNova Catalog"?"BROWSE":"OPEN"}));
  const freezeCount = appendExternalGames(freezeNova, "FREEZENOVA", seen);
  renderg4m3s();
  window.SILVERITE_SOURCE_COUNTS = { gnMath:gnCount, freezeNova:freezeCount };
  console.info("Silverite external game sources loaded", window.SILVERITE_SOURCE_COUNTS);
  return window.SILVERITE_SOURCE_COUNTS;
}



const ICON_PATHS = {"panel": "<rect x=\"3\" y=\"4\" width=\"18\" height=\"16\" rx=\"2\"/><path d=\"M9 4v16M6 8h1M6 11h1\"/>", "left": "<path d=\"m15 18-6-6 6-6\"/>", "right": "<path d=\"m9 18 6-6-6-6\"/>", "reload": "<path d=\"M20 11a8 8 0 0 0-14.8-4L3 10\"/><path d=\"M3 4v6h6M4 13a8 8 0 0 0 14.8 4L21 14\"/><path d=\"M21 20v-6h-6\"/>", "home": "<path d=\"m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-6v-7h-4v7H4a1 1 0 0 1-1-1z\"/>", "plus": "<path d=\"M12 5v14M5 12h14\"/>", "globe": "<circle cx=\"12\" cy=\"12\" r=\"9\"/><ellipse cx=\"12\" cy=\"12\" rx=\"4.5\" ry=\"9\"/><path d=\"M3 12h18\"/>", "expand": "<path d=\"M8 3H5a2 2 0 0 0-2 2v3M16 3h3a2 2 0 0 1 2 2v3M21 16v3a2 2 0 0 1-2 2h-3M3 16v3a2 2 0 0 0 2 2h3\"/>", "search": "<circle cx=\"11\" cy=\"11\" r=\"7\"/><path d=\"m20 20-4-4\"/>", "gamepad": "<path d=\"M7.1 8.5h9.8a4.6 4.6 0 0 1 4.5 5.7l-1 4a2.3 2.3 0 0 1-3.8 1.1l-3-2.7h-3.2l-3 2.7a2.3 2.3 0 0 1-3.8-1.1l-1-4a4.6 4.6 0 0 1 4.5-5.7Z\"/><path d=\"M7 11.5v5M4.5 14h5M16.5 12.5h.01M18.5 15h.01\"/>", "users": "<path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM20 8v6M23 11h-6\"/>", "monitor": "<rect x=\"3\" y=\"4\" width=\"18\" height=\"13\" rx=\"2\"/><path d=\"M8 21h8M12 17v4\"/>", "link": "<path d=\"M10 13a5 5 0 0 0 7.1 0l3-3A5 5 0 0 0 13 2.9l-1.7 1.7M14 11a5 5 0 0 0-7.1 0l-3 3A5 5 0 0 0 11 21.1l1.7-1.7\"/>", "settings": "<path d=\"M12.22 2h-.44a2 2 0 0 0-2 1.72l-.1.79a2 2 0 0 1-1.01 1.42l-.73.42a2 2 0 0 1-1.73.1l-.7-.29a2 2 0 0 0-2.45.92l-.22.38a2 2 0 0 0 .43 2.55l.6.5a2 2 0 0 1 .65 1.62v.84a2 2 0 0 1-.65 1.62l-.6.5a2 2 0 0 0-.43 2.55l.22.38a2 2 0 0 0 2.45.92l.7-.29a2 2 0 0 1 1.73.1l.73.42a2 2 0 0 1 1.01 1.42l.1.79a2 2 0 0 0 2 1.72h.44a2 2 0 0 0 2-1.72l.1-.79a2 2 0 0 1 1.01-1.42l.73-.42a2 2 0 0 1 1.73-.1l.7.29a2 2 0 0 0 2.45-.92l.22-.38a2 2 0 0 0-.43-2.55l-.6-.5a2 2 0 0 1-.65-1.62v-.84a2 2 0 0 1 .65-1.62l.6-.5a2 2 0 0 0 .43-2.55l-.22-.38a2 2 0 0 0-2.45-.92l-.7.29a2 2 0 0 1-1.73-.1l-.73-.42a2 2 0 0 1-1.01-1.42l-.1-.79a2 2 0 0 0-2-1.72z\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/>", "settings2": "<circle cx=\"12\" cy=\"12\" r=\"3\"/><path d=\"M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-1.8 1.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5v.1h-2.6v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1-1.8-1.8.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H6.3v-2.6h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1 1.8-1.8.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.5v-.1h2.6v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1 1.8 1.8-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.5 1h.1v2.6h-.1a1.7 1.7 0 0 0-1.5 1Z\"/>", "terminal": "<path d=\"m4 5 7 7-7 7M13 19h7\"/>", "volume-x": "<path d=\"M11 5 6 9H3v6h3l5 4zM16 9l5 6M21 9l-5 6\"/>", "heart": "<path d=\"M20.8 8.8c0 5.1-8.8 10.2-8.8 10.2S3.2 13.9 3.2 8.8A4.8 4.8 0 0 1 12 6.1a4.8 4.8 0 0 1 8.8 2.7Z\"/>", "grid": "<rect x=\"3\" y=\"3\" width=\"8\" height=\"8\" rx=\"1\"/><rect x=\"13\" y=\"3\" width=\"8\" height=\"8\" rx=\"1\"/><rect x=\"3\" y=\"13\" width=\"8\" height=\"8\" rx=\"1\"/><rect x=\"13\" y=\"13\" width=\"8\" height=\"8\" rx=\"1\"/>", "puzzle": "<path d=\"M8 3h3a2 2 0 1 1 4 0h3a2 2 0 0 1 2 2v3a2 2 0 1 0 0 4v3a2 2 0 0 1-2 2h-3a2 2 0 1 0-4 0H8a2 2 0 0 1-2-2v-3a2 2 0 1 0 0-4V5a2 2 0 0 1 2-2Z\"/>", "zap": "<path d=\"m13 2-3 8h7l-6 12 1-9H6l7-11Z\"/>", "cloud": "<path d=\"M20 16.2A4.8 4.8 0 0 0 18 7a6 6 0 0 0-11.5 1.8A4.1 4.1 0 0 0 7 17h11a3.8 3.8 0 0 0 2-0.8Z\"/>", "layers": "<path d=\"m12 3 9 5-9 5-9-5 9-5Z\"/><path d=\"m3 12 9 5 9-5M3 16l9 5 9-5\"/>", "blocks": "<rect x=\"3\" y=\"3\" width=\"8\" height=\"8\" rx=\"1\"/><rect x=\"13\" y=\"3\" width=\"8\" height=\"8\" rx=\"1\"/><rect x=\"3\" y=\"13\" width=\"8\" height=\"8\" rx=\"1\"/><rect x=\"13\" y=\"13\" width=\"8\" height=\"8\" rx=\"1\"/>", "runner": "<path d=\"M13 5h6v6M19 5 10 14\"/><path d=\"M17 13v6H5V7h6\"/>", "droplet": "<path d=\"M12 3.5S5.5 11 5.5 15.2a6.5 6.5 0 0 0 13 0C18.5 11 12 3.5 12 3.5Z\"/><path d=\"M9 16a3 3 0 0 0 3 3\"/>", "meteor": "<path d=\"m14 3 7 7-8 8-7-7 8-8Z\"/><path d=\"m14 3 7 7M5 12l-3 3M8 17l-3 3M3 8 1 10\"/>", "arrow-up-right": "<path d=\"M7 17 17 7M7 7h10v10\"/>", "blocks2": "<path d=\"M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z\"/>", "close": "<path d=\"m6 6 12 12M18 6 6 18\"/>"};
function svgIcon(name, size=18, className='icon', filled=false) {
  const path = ICON_PATHS[name] || ICON_PATHS.grid;
  return `<svg class="${className}" width="${size}" height="${size}" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;
}
const $=(s,root=document)=>root.querySelector(s);
const $$=(s,root=document)=>[...root.querySelectorAll(s)];
const SETTINGS_KEY='silverite-settings-v2';
const LEGACY_SETTINGS_KEY='silverite-settings-v1';
const DEFAULT_SETTINGS={reduceMotion:false,confirmClose:false};
function sanitizeSettings(value){
  return value&&typeof value==='object'
    ? {reduceMotion:!!value.reduceMotion,confirmClose:!!value.confirmClose}
    : {...DEFAULT_SETTINGS};
}
let userSettings={...DEFAULT_SETTINGS};
try{
  const currentSettings=JSON.parse(localStorage.getItem(SETTINGS_KEY)||'null');
  if(currentSettings&&typeof currentSettings==='object'){
    userSettings=sanitizeSettings(currentSettings);
  }else{
    const legacySettings=JSON.parse(localStorage.getItem(LEGACY_SETTINGS_KEY)||'null');
    if(legacySettings&&typeof legacySettings==='object'){
      userSettings=sanitizeSettings(legacySettings);
      localStorage.setItem(SETTINGS_KEY,JSON.stringify(userSettings));
    }
  }
}catch(e){}
let activeView='home',toastTimer;
let favorites=new Set();
try{favorites=new Set(JSON.parse(localStorage.getItem('silverite-favorites')||'[]'))}catch(e){}
function notify(message){const t=$('#toast');t.textContent=message;t.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove('show'),2500)}
function escapeHTML(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function cardTemplate(game){
  const safe=escapeHTML(game.name);const fav=favorites.has(game.name);const thumbnail=game.image?escapeHTML(game.image):'https://cdn.jsdelivr.net/gh/braydensrandomcreations/silverite@main/assets/no-thumbnail.png';const placeholderFlag=game.image?'':'data-placeholder="true"';const candidateAttr=game.imageCandidates?.length?`data-image-candidates="${escapeHTML(JSON.stringify(game.imageCandidates))}" data-image-candidate-index="0"`:'';const image=`<img class="game-thumb" src="${thumbnail}" ${placeholderFlag} ${candidateAttr} alt="" loading="lazy" decoding="async" referrerpolicy="no-referrer" onerror="if(this.dataset.imageCandidates){const c=JSON.parse(this.dataset.imageCandidates);const i=Number(this.dataset.imageCandidateIndex||0)+1;if(i<c.length){this.dataset.imageCandidateIndex=i;this.src=c[i];return}}if(this.dataset.placeholder){this.remove();this.parentElement.classList.remove('has-thumb')}else{this.dataset.placeholder='true';this.src='https://cdn.jsdelivr.net/gh/braydensrandomcreations/silverite@main/assets/no-thumbnail.png'}">`;
  const source=game.source?`<div class="game-source">${escapeHTML(game.source)}</div>`:'';
  const action=escapeHTML(game.actionLabel||'PLAY');
  return `<article class="game-card" data-game="${safe}"><div class="game-art art-${game.art} has-thumb">${image}<span class="art-glyph thumb-fallback">${escapeHTML(game.glyph||'G')}</span><button class="game-fav ${fav?'favorited':''}" data-fav="${safe}" aria-label="${fav?'Remove from':'Add to'} favorites">${svgIcon('heart',16,'icon',fav)}</button></div><div class="game-name" title="${safe}">${safe}</div>${source}<button class="play-btn" data-play="${safe}">${action}</button></article>`
}
const G4M3S_PAGE_SIZE = 96;
let currentGamePage = 0;
let selectedGameLibrary = "ALL";
const GAME_LIBRARY_FILTERS = [
  {id:"SILVERITE",name:"Silverite games",fallback:"S",icon:"https://cdn.jsdelivr.net/gh/braydensrandomcreations/silverite@main/assets/icons/silverite.png"},
  {id:"UBZONE",name:"UBZone",fallback:"U",icon:"https://cdn.jsdelivr.net/gh/braydensrandomcreations/silverite@main/assets/icons/ubz.png"},
  {id:"GN-MATH",name:"GN-MATH",fallback:"π",icon:"https://cdn.jsdelivr.net/gh/braydensrandomcreations/silverite@main/assets/icons/gn.png"},
  {id:"TRUFFLED",name:"Truffled",fallback:"T",icon:"https://cdn.jsdelivr.net/gh/braydensrandomcreations/silverite@main/assets/icons/truffled.png"},
  {id:"CUSTOM",name:"Custom games",fallback:"+",icon:""}
];
function libraryFilterTemplate(filter,count){
  const active=selectedGameLibrary===filter.id;
  const special=filter.id==='ALL'||filter.id==='FAVORITES';
  const image=filter.icon?`<img class="library-filter-logo" src="${escapeHTML(filter.icon)}" alt="" loading="lazy" decoding="async" referrerpolicy="no-referrer" onerror="this.hidden=true">`:'';
  const mark=filter.id==='ALL'
    ?`<span class="library-filter-label">ALL</span>`
    :filter.id==='FAVORITES'
      ?svgIcon('heart',20,'library-filter-heart',active)
      :`${image}<span class="library-filter-fallback">${escapeHTML(filter.fallback)}</span>`;
  return `<button class="library-filter-btn ${active?'active':''} ${special?'is-special':''}" type="button" data-library-filter="${escapeHTML(filter.id)}" title="${escapeHTML(filter.name)} · ${count} games" aria-label="Show ${escapeHTML(filter.name)} games" aria-pressed="${active}">${mark}<span class="library-filter-count">${count}</span></button>`;
}
function renderLibraryFilters(){
  const host=$('#library-filter-bar');if(!host)return;
  const counts=new Map();
  for(const game of g4m3s){const source=String(game.source||'UBZONE').toUpperCase();counts.set(source,(counts.get(source)||0)+1);}
  const activeSources=new Set(counts.keys());
  const visible=GAME_LIBRARY_FILTERS.filter(filter=>filter.id==='GN-MATH'||filter.id==='SILVERITE'||activeSources.has(filter.id));
  // Keep any custom source names visible too, so editing GAME_LIBRARY_EDITS.add can introduce new libraries.
  for(const source of activeSources){if(source==='FREEZENOVA')continue;if(!visible.some(filter=>filter.id===source)){visible.push({id:source,name:source,fallback:source.slice(0,2),icon:''});}}
  visible.push({id:'ALL',name:'All games',fallback:'ALL',icon:''},{id:'FAVORITES',name:'Favorites',fallback:'FAV',icon:''});
  host.innerHTML=visible.map(filter=>libraryFilterTemplate(filter,filter.id==='ALL'?g4m3s.length:filter.id==='FAVORITES'?favorites.size:(counts.get(filter.id)||0))).join('');
}
function renderg4m3s(){
  const q=$('#game-search').value.trim().toLowerCase();
  const list=g4m3s.filter(g=>{
    const source=String(g.source||'UBZONE').toUpperCase();
    const matchesLibrary=selectedGameLibrary==='ALL'||(selectedGameLibrary==='FAVORITES'?favorites.has(g.name):source===selectedGameLibrary);
    const matchesSearch=!q||g.name.toLowerCase().includes(q)||g.file.toLowerCase().includes(q)||source.toLowerCase().includes(q);
    return matchesLibrary&&matchesSearch;
  });
  list.sort((a,b)=>a.name.localeCompare(b.name,undefined,{sensitivity:'base',numeric:true}));
  renderLibraryFilters();
  const shown=Math.min(list.length,(currentGamePage+1)*G4M3S_PAGE_SIZE);
  $('#game-count').textContent=`${list.length} G4M3S${shown<list.length?' · SHOWING '+shown:''}`;
  $('#game-grid').innerHTML=list.length?list.slice(0,shown).map(cardTemplate).join('')+(shown<list.length?`<button class="play-btn load-more-games" data-load-more>LOAD MORE · ${list.length-shown} LEFT</button>`:''):'<div class="empty">NO G4M3S FOUND. TRY ANOTHER SEARCH.</div>';
}
let currentGame=null;
let gameLoadToken=0;
function withGameBaseUrl(html,url){
  const base=`<base href="${escapeHTML(url)}">`;
  if(/<base\b[^>]*>/i.test(html))return html.replace(/<base\b[^>]*>/i,base);
  return /<head\b[^>]*>/i.test(html)?html.replace(/<head\b[^>]*>/i,head=>head+base):base+html;
}
async function loadGameDocument(frame,url){
  const token=++gameLoadToken;
  const response=await fetch(url,{mode:'cors',credentials:'omit',cache:'force-cache'});
  if(!response.ok)throw new Error(`Game server returned HTTP ${response.status}`);
  const html=await response.text();
  if(!/<(?:!doctype\s+html|html|head|body)\b/i.test(html))throw new Error('The game server did not return an HTML page.');
  if(token!==gameLoadToken)return false;
  frame.srcdoc=withGameBaseUrl(html,url);
  return true;
}
function openGame(name){
  const game=g4m3s.find(g=>g.name===name);if(!game)return;
  if(game.launchMode==='external'){
    const externalTab=window.open(game.url,'_blank');
    if(externalTab)externalTab.opener=null;else notify('Allow pop-ups to open this game.');
    return;
  }
  currentGame=game;
  $('#player-title').textContent=game.name;
  $('#player-footer-name').textContent='SILVERITE PLAYER / '+game.name.toUpperCase();
  $('#player-empty-title').textContent=game.name.toUpperCase();
  const frame=$('#game-frame'),empty=$('#player-empty');
  frame.src='about:blank';
  if(game.url&&isAllowedGameAssetUrl(game.url,'game')){
    frame.hidden=false;empty.hidden=true;$('#player-status').textContent='GAME LOADING';
    loadGameDocument(frame,game.url).then(loaded=>{if(loaded&&currentGame===game)$('#player-status').textContent='GAME READY'}).catch(error=>{
      console.error('Game could not be loaded:',error);
      if(currentGame!==game)return;
      frame.hidden=true;empty.hidden=false;$('#player-status').textContent='GAME UNAVAILABLE';
      empty.querySelector('p').textContent=`Could not load this game page: ${error.message} Check your connection and try again.`;
    });
  }else{
    frame.hidden=true;empty.hidden=false;$('#player-status').textContent='PLACEHOLDER SLOT';
  }
  const isFav=favorites.has(game.name);$('#favorite-game').classList.toggle('is-favorite',isFav);$('#favorite-game').title=isFav?'Remove from favorites':'Add to favorites';
  go('player');
}
function closeGame(){
  if(!currentGame){go('g4m3s');return;}
  if($('#confirm-close-game').checked&&!confirm('Close this game and return to the library?'))return;
  gameLoadToken++;$('#game-frame').src='about:blank';$('#game-frame').srcdoc='';$('#game-frame').hidden=true;$('#player-empty').hidden=false;
  $('#player-empty').querySelector('p').textContent='This game could not be loaded. Check your connection or try opening it in a new tab.';
  currentGame=null;go('g4m3s');
}
function gameURL(){return currentGame&&currentGame.url&&isAllowedGameAssetUrl(currentGame.url,'game')?currentGame.url:''}
function openCurrentGameInTab(){
  if(!currentGame)return;
  const url=gameURL();
  const tab=window.open('about:blank','_blank');
  if(tab)tab.opener=null;
  if(!tab){notify('Allow pop-ups to open the game in a new tab.');return;}
  const title=escapeHTML(currentGame.name);
  if(!url){tab.document.write(`<!doctype html><html><head><meta charset="utf-8"><title>${title} · Silverite</title></head><body style="margin:0;background:#090909;color:#eee;font:16px monospace;display:grid;place-items:center;min-height:100vh">This game link is unavailable.</body></html>`);tab.document.close();return;}
  const safeUrl=escapeHTML(url);
  tab.document.write(`<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title} · Silverite</title><style>html,body{margin:0;width:100%;height:100%;overflow:hidden;background:#090909}iframe{width:100%;height:100%;border:0;display:block}</style></head><body><iframe title="${title}" data-game-url="${safeUrl}" sandbox="allow-scripts allow-forms allow-pointer-lock allow-downloads allow-modals" allow="fullscreen; autoplay; gamepad" allowfullscreen referrerpolicy="no-referrer"></iframe><script>(async()=>{const frame=document.querySelector('iframe'),url=frame.dataset.gameUrl;try{const response=await fetch(url,{mode:'cors',credentials:'omit'});if(!response.ok)throw new Error('HTTP '+response.status);let html=await response.text();const base='<base href="'+url.replace(/&/g,'&amp;').replace(/\"/g,'&quot;')+'">';html=/<base\\b[^>]*>/i.test(html)?html.replace(/<base\\b[^>]*>/i,base):html.replace(/<head\\b[^>]*>/i,head=>head+base);frame.srcdoc=html}catch(error){document.body.innerHTML='<div style="color:white;font:16px monospace;padding:24px">Could not load this game. Check your connection and try again.</div>'}})()</script></body></html>`);
  tab.document.close();
}

function go(view){
  if(!$('#view-'+view))return;activeView=view;
  $$('.view').forEach(v=>{const isActive=v.id==='view-'+view;v.hidden=!isActive;v.classList.toggle('active',isActive);});
  $$('[data-view]').forEach(b=>b.classList.toggle('active',b.dataset.view===view));
  const activePanel=$('#view-'+view);if(activePanel)activePanel.scrollTo({top:0,behavior:$('#reduce-motion').checked?'auto':'smooth'});
}
function persistSettings(){try{localStorage.setItem(SETTINGS_KEY,JSON.stringify(userSettings))}catch(e){notify('Could not save preferences in this browser.')}}
function applySettings(){
  const root=document.documentElement;
  root.dataset.motion=userSettings.reduceMotion?'reduced':'full';
  $('#reduce-motion').checked=!!userSettings.reduceMotion;
  $('#confirm-close-game').checked=!!userSettings.confirmClose;
  root.style.scrollBehavior=userSettings.reduceMotion?'auto':'smooth';
}
function updateSetting(key,value,{quiet=false}={}){userSettings[key]=value;persistSettings();applySettings();if(!quiet)notify('Preference saved.');}
function resetSettings(){userSettings={...DEFAULT_SETTINGS};persistSettings();applySettings();notify('Silverite settings restored.');}

$$('[data-view]').forEach(b=>b.addEventListener('click',()=>go(b.dataset.view)));
$('#g4m3s-search-form').addEventListener('submit',e=>e.preventDefault());
$('#game-search').addEventListener('input',()=>{currentGamePage=0;renderg4m3s();});
$('#library-filter-bar').addEventListener('click',e=>{
  const button=e.target.closest('[data-library-filter]');if(!button)return;
  selectedGameLibrary=button.dataset.libraryFilter;currentGamePage=0;renderg4m3s();
});
$('#game-grid').addEventListener('click',e=>{
  const more=e.target.closest('[data-load-more]');if(more){currentGamePage++;renderg4m3s();return;}
  const fav=e.target.closest('[data-fav]');
  if(fav){const name=fav.dataset.fav;if(favorites.has(name))favorites.delete(name);else favorites.add(name);try{localStorage.setItem('silverite-favorites',JSON.stringify([...favorites]))}catch(err){}renderg4m3s();return;}
  const play=e.target.closest('[data-play]');if(play)openGame(play.dataset.play);
});
$('#close-game').addEventListener('click',closeGame);
$('#reload-game').addEventListener('click',()=>{
  if(!currentGame)return;
  const game=currentGame,url=gameURL();
  if(!url){notify('This game has no reloadable URL.');return;}
  const frame=$('#game-frame'),empty=$('#player-empty');
  frame.src='about:blank';frame.srcdoc='';frame.hidden=false;empty.hidden=true;
  $('#player-status').textContent='RELOADING';
  loadGameDocument(frame,url).then(loaded=>{
    if(loaded&&currentGame===game)$('#player-status').textContent='GAME READY';
  }).catch(error=>{
    console.error('Game could not be reloaded:',error);
    if(currentGame!==game)return;
    frame.hidden=true;empty.hidden=false;$('#player-status').textContent='GAME UNAVAILABLE';
    empty.querySelector('p').textContent=`Could not load this game page: ${error.message} Check your connection and try again.`;
  });
});
$('#copy-game').addEventListener('click',async()=>{const url=gameURL();if(!url){notify('There is no game link available.');return;}try{await navigator.clipboard.writeText(url);notify('Game link copied.')}catch(e){notify('Clipboard access is unavailable in this browser.')}});
$('#favorite-game').addEventListener('click',()=>{if(!currentGame)return;const name=currentGame.name;if(favorites.has(name))favorites.delete(name);else favorites.add(name);try{localStorage.setItem('silverite-favorites',JSON.stringify([...favorites]))}catch(err){}const on=favorites.has(name);$('#favorite-game').classList.toggle('is-favorite',on);$('#favorite-game').title=on?'Remove from favorites':'Add to favorites';renderg4m3s();notify(on?'Added to favorites.':'Removed from favorites.');});
$('#newtab-game').addEventListener('click',openCurrentGameInTab);
$('#fullscreen-game').addEventListener('click',async()=>{const target=$('#player-shell');try{if(document.fullscreenElement)await document.exitFullscreen();else await target.requestFullscreen();}catch(e){notify('Fullscreen is not available in this browser.')}});
$('#reduce-motion').addEventListener('change',e=>updateSetting('reduceMotion',e.target.checked,{quiet:true}));
$('#confirm-close-game').addEventListener('change',e=>updateSetting('confirmClose',e.target.checked));
$('#reset-settings').addEventListener('click',resetSettings);

// Settings section navigation: jump to a category and keep the current one highlighted.
$$('[data-settings-target]').forEach(button=>button.addEventListener('click',()=>{
  const target=$(`#settings-${button.dataset.settingsTarget}`);
  if(!target)return;
  $$('[data-settings-target]').forEach(item=>{const active=item===button;item.classList.toggle('active',active);item.setAttribute('aria-current',active?'true':'false');});
  target.scrollIntoView({behavior:userSettings.reduceMotion?'auto':'smooth',block:'start'});
}));
if('IntersectionObserver' in window){
  const settingsObserver=new IntersectionObserver(entries=>{
    const visible=entries.filter(entry=>entry.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
    if(!visible)return;
    const key=visible.target.id.replace('settings-','');
    $$('[data-settings-target]').forEach(item=>{const active=item.dataset.settingsTarget===key;item.classList.toggle('active',active);item.setAttribute('aria-current',active?'true':'false');});
  },{root:$('#view-settings'),rootMargin:'-12% 0px -68% 0px',threshold:[0,.15,.3,.5]});
  $$('.settings-section').forEach(section=>settingsObserver.observe(section));
}

$('#fullscreen-btn').addEventListener('click',()=>{if(!document.fullscreenElement)document.documentElement.requestFullscreen?.();else document.exitFullscreen?.()});
document.addEventListener('keydown',e=>{
  if((e.ctrlKey||e.metaKey)&&!e.altKey&&e.key.toLowerCase()==='k'){e.preventDefault();toggleCommandPalette();return;}
  if(e.key==='Escape'&&commandPaletteOpen){e.preventDefault();closeCommandPalette();return;}
  if(e.key==='Escape'&&activeView==='player'&&!document.fullscreenElement)closeGame();
});

/* ===== COMMAND PALETTE =====
   Ctrl/Cmd+K opens a launcher that can jump between pages, settings,
   run quick actions, and open any game in the library. */
const COMMAND_RESULT_LIMIT=50;
let commandPaletteOpen=false;
let commandResults=[];
let commandSelectedIndex=0;
let commandReturnFocus=null;

function commandMatch(query,text){
  const haystack=String(text||'');
  if(!query)return {score:0,indices:[]};
  const needle=query.toLowerCase();
  const lower=haystack.toLowerCase();
  const direct=lower.indexOf(needle);
  if(direct>=0){
    const indices=[];
    for(let i=0;i<needle.length;i++)indices.push(direct+i);
    return {score:1000-direct*3+(direct===0?250:0),indices};
  }
  const indices=[];
  let cursor=0,score=0,streak=0;
  for(let i=0;i<needle.length;i++){
    const found=lower.indexOf(needle[i],cursor);
    if(found<0)return null;
    if(indices.length&&found===indices[indices.length-1]+1){streak+=1;score+=8+streak*3;}
    else{streak=0;score+=2;}
    if(found===0||/[^a-z0-9]/.test(lower[found-1]))score+=9;
    indices.push(found);
    cursor=found+1;
  }
  score-=Math.min(14,(lower.length-needle.length)/12);
  return {score,indices};
}

function highlightCommandLabel(label,indices){
  const marks=new Set(indices||[]);
  let html='',open=false;
  for(let i=0;i<label.length;i++){
    const on=marks.has(i);
    if(on&&!open){html+='<mark>';open=true;}
    if(!on&&open){html+='</mark>';open=false;}
    html+=escapeHTML(label[i]);
  }
  if(open)html+='</mark>';
  return html;
}


function commandBaseItems(){
  const navigation=[
    {id:'nav-home',label:'Go Home',meta:'Page · home menu',icon:'home',keywords:'start landing menu',run:()=>go('home')},
    {id:'nav-games',label:'Browse g4m3s',meta:'Page · game library',icon:'gamepad',keywords:'library catalog games',run:()=>go('g4m3s')},
    {id:'nav-credits',label:'View Credits',meta:'Page · people behind Silverite',icon:'heart',keywords:'thanks about team',run:()=>go('credits')},
    {id:'nav-settings',label:'Open Settings',meta:'Page · preferences',icon:'settings',keywords:'options config preferences',run:()=>go('settings')}
  ];
  const actions=[
    {id:'action-search-games',label:'Search g4m3s',meta:'Action · focus the game search',icon:'search',keywords:'find game library',run:()=>{go('g4m3s');$('#game-search')?.focus();}},
    {id:'action-fullscreen',label:'Toggle fullscreen',meta:'Action · fill the screen',icon:'expand',keywords:'display screen',run:()=>$('#fullscreen-btn')?.click()}
  ];
  const settingsSections=[['interface','Interface'],['advanced','Advanced']].map(([key,label])=>({
    id:'settings-'+key,label:'Settings · '+label,meta:'Jump to settings section',icon:'settings',keywords:'preferences '+key,
    run:()=>{
      go('settings');
      const target=$('#settings-'+key);
      target?.scrollIntoView({behavior:userSettings.reduceMotion?'auto':'smooth',block:'start'});
    }
  }));
  return {navigation,actions,settingsSections};
}

function commandGameItem(game,metaPrefix='Game'){
  return {
    id:`game-${game.name}`,label:game.name,
    meta:game.source?`${metaPrefix} · ${game.source}`:metaPrefix,
    icon:'gamepad',keywords:game.file||'',run:()=>openGame(game.name)
  };
}

let commandGameCache={length:-1,items:[]};
function commandGames(){
  if(commandGameCache.length!==g4m3s.length){
    commandGameCache={length:g4m3s.length,items:g4m3s.map(game=>commandGameItem(game))};
  }
  return commandGameCache.items;
}

function buildCommandResults(rawQuery){
  const query=rawQuery.trim();
  const {navigation,actions,settingsSections}=commandBaseItems();
  if(!query){
    const groups=[];
    const append=(title,items)=>{if(items.length)groups.push({title,items});};
    append('NAVIGATE',navigation);
    append('ACTIONS',actions);
    append('SETTINGS',settingsSections);
    append('FAVORITES',g4m3s.filter(game=>favorites.has(game.name)).slice(0,6).map(game=>commandGameItem(game,'Favorite')));
    return groups;
  }
  const candidates=[...navigation,...actions,...settingsSections,...commandGames()];
  const scored=[];
  for(const item of candidates){
    const match=commandMatch(query,`${item.label} ${item.meta||''} ${item.keywords||''}`);
    if(!match)continue;
    const labelMatch=commandMatch(query,item.label);
    scored.push({...item,score:match.score,labelIndices:labelMatch?labelMatch.indices:[]});
  }
  scored.sort((a,b)=>b.score-a.score);
  return [{title:'RESULTS',items:scored.slice(0,COMMAND_RESULT_LIMIT)}];
}

function renderCommandResults(){
  const list=$('#command-results');
  if(!list)return;
  const groups=buildCommandResults($('#command-input')?.value||'');
  commandResults=[];
  let html='';
  for(const group of groups){
    html+=`<div class="command-group" role="presentation">${escapeHTML(group.title)}</div>`;
    for(const item of group.items){
      const index=commandResults.length;
      commandResults.push(item);
      const selected=index===commandSelectedIndex;
      html+=`<button class="command-item${selected?' is-selected':''}" type="button" role="option" id="command-option-${index}" data-command-index="${index}" aria-selected="${selected?'true':'false'}">
        <span class="command-item-icon">${svgIcon(item.icon||'grid',15)}</span>
        <span class="command-item-copy"><span class="command-item-label">${highlightCommandLabel(item.label,item.labelIndices)}</span><span class="command-item-meta">${escapeHTML(item.meta||'')}</span></span>
        ${item.hint?`<span class="command-item-hint">${escapeHTML(item.hint)}</span>`:''}
      </button>`;
    }
  }
  if(!commandResults.length){
    html=`<div class="command-empty">No matches for “${escapeHTML($('#command-input')?.value.trim()||'')}”.<br>Try a page, tab, game, or action.</div>`;
  }
  list.innerHTML=html;
  updateCommandSelection(false);
}

function updateCommandSelection(scroll=true){
  const list=$('#command-results');
  if(!list)return;
  const options=$$('.command-item',list);
  if(!options.length){commandSelectedIndex=0;$('#command-input')?.removeAttribute('aria-activedescendant');return;}
  commandSelectedIndex=Math.max(0,Math.min(commandSelectedIndex,options.length-1));
  options.forEach((option,index)=>{
    const selected=index===commandSelectedIndex;
    option.classList.toggle('is-selected',selected);
    option.setAttribute('aria-selected',selected?'true':'false');
    if(selected){
      $('#command-input')?.setAttribute('aria-activedescendant',option.id);
      if(scroll)option.scrollIntoView({block:'nearest'});
    }
  });
}

function runCommand(index){
  const item=commandResults[index];
  if(!item)return;
  closeCommandPalette();
  // Let the palette finish closing before a command moves focus or changes views.
  setTimeout(()=>{
    try{item.run();}
    catch(error){console.error('Command failed:',error);notify('That command could not run.');}
  },0);
}

function openCommandPalette(){
  const palette=$('#command-palette');
  if(!palette||commandPaletteOpen)return;
  commandPaletteOpen=true;
  commandReturnFocus=document.activeElement;
  palette.hidden=false;
  document.body.classList.add('command-open');
  const input=$('#command-input');
  if(input)input.value='';
  commandSelectedIndex=0;
  renderCommandResults();
  requestAnimationFrame(()=>input?.focus());
}

function closeCommandPalette(){
  const palette=$('#command-palette');
  if(!palette||!commandPaletteOpen)return;
  commandPaletteOpen=false;
  palette.hidden=true;
  document.body.classList.remove('command-open');
  const previous=commandReturnFocus;
  commandReturnFocus=null;
  if(previous&&typeof previous.focus==='function'){
    try{previous.focus({preventScroll:true});}catch(error){}
  }
}

function toggleCommandPalette(){
  if(commandPaletteOpen)closeCommandPalette();
  else openCommandPalette();
}

$('#command-palette')?.addEventListener('click',event=>{if(event.target.closest('[data-command-close]'))closeCommandPalette();});
$('#command-input')?.addEventListener('input',()=>{commandSelectedIndex=0;renderCommandResults();});
$('#command-input')?.addEventListener('keydown',event=>{
  if(event.key==='ArrowDown'){event.preventDefault();commandSelectedIndex+=1;updateCommandSelection();}
  else if(event.key==='ArrowUp'){event.preventDefault();commandSelectedIndex-=1;updateCommandSelection();}
  else if(event.key==='Home'){event.preventDefault();commandSelectedIndex=0;updateCommandSelection();}
  else if(event.key==='End'){event.preventDefault();commandSelectedIndex=commandResults.length-1;updateCommandSelection();}
  else if(event.key==='Enter'){event.preventDefault();runCommand(commandSelectedIndex);}
  else if(event.key==='Escape'){event.preventDefault();closeCommandPalette();}
  else if(event.key==='Tab'){event.preventDefault();commandSelectedIndex+=event.shiftKey?-1:1;updateCommandSelection();}
});
$('#command-results')?.addEventListener('click',event=>{
  const option=event.target.closest('[data-command-index]');
  if(option)runCommand(Number(option.dataset.commandIndex));
});
$('#command-results')?.addEventListener('mousemove',event=>{
  const option=event.target.closest('[data-command-index]');
  if(!option)return;
  const index=Number(option.dataset.commandIndex);
  if(index!==commandSelectedIndex){commandSelectedIndex=index;updateCommandSelection(false);}
});



renderg4m3s();
applySettings();
go('home');
loadExternalGameLibraries();
(function initPortableNotice(){
  const notice=$('#portable-notice');
  const continueButton=$('#notice-continue');
  const workspace=$('.workspace');
  if(!notice||!continueButton)return;
  document.body.classList.add('notice-open');
  workspace?.setAttribute('inert','');
  continueButton.addEventListener('click',()=>{
    notice.hidden=true;
    document.body.classList.remove('notice-open');
    workspace?.removeAttribute('inert');
    $('#home-menu-games')?.focus({preventScroll:true});
  },{once:true});
  continueButton.focus({preventScroll:true});
})();

