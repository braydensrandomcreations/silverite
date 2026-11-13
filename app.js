/* =====================================================================
   EDIT YOUR RANDOM HOME MESSAGES HERE
   ---------------------------------------------------------------------
   Silverite picks one message at random each time the page loads.
   Add, remove, or rewrite any line below. Keep quotes and commas.
   Leave the list empty to hide the message under the search bar.
   ===================================================================== */
const HOME_MESSAGES = [
  "teach wont see ts",
  "homework trust",
  "drink water, then pee",
  "fire haven is better",
  "half theres a bug",
  "frick you claude",
  "you wanna fight me?",
  "hop on lilys revenge gng",
  "gorilla tag is not a game about just swinging your a-arms, its game of modding mo-monkeys",
  "please im begging u",
  "el teach cant see ts",
  "me when i lie",
  "if you see this, tell brayden to see this message lol",
  "WOW! you found the ULTRA-SUPER DUPER MEGA rare message!! congrats!!",
  "please mario",
  "funds busted to femboy clicker - ubzone",
  "MOLDY HES DED",
  "put the needle in the hdmi port - br4y",
  "ctrl+shift+q x2 will give you 2 dollars trust",
  "do your homework o algo",
  "keys keys keys keys. you have a different opinion than me? keys keys keys o algo",
  "play gorilla tag now!",
  "1845341094. trust me.",
  "today's forecast: 100 percent chance of gaming",
  "remember why you opened this tab",
  "oh no.. im so cringe",
  "piu piu piu!",
  "зачем ты это перевел? кстати, ты пиздец какой гей.",
  "iphone cold dih",
  "bing bing bing o algo",
  "我真的非常非常爱你,你为什么哭, 答应我你以后别再哭了, 在这个世界上, 我们时间不多了 ",
  "thearchy or opposition? which is harder?",
  "gn-math v2 is lowk pretty good",
  "NO FUN POLICE ALLOWED",
  "admin grant tristan.dat",
  "s*curly cant stop me",
  "my mother ate fries",
  "this message was randomly selected. wow",
  "i know this place better than my home",
  "this server has a weight limit pink your holdin it up!! - Elliot, 2023",
  "cooko monster",
  "goodbah! - chef",
  "high risk, high reward",
  "wubbabunga!",
  "it IS all sunshine and rainbows",
  "all hail the obama triangle",
  "in theory, this message should work",
  "plot twist: you actually finished your homework",
  "br4y says hello",
  "floccinaucinihilipilificatiophobia",
  "silverite but everyone sings it",
  "bing bing bing o algo",
  "me when",
  "zip zorp glubo glorp",
  "how many messages are there? 68.",
  "app.js carries",
  "100% opsec",
  "dip",
  "huzzah!",
  "mei mei snow leopard",
  "game on! - Coach",
  "bonk",
  "me is yay",
  "Before you criticize someone, walk a mile in their shoes. That way, you'll be a mile from them, and you'll have their shoes. — Jack Hande",
  "if someone tells you a secret, tell everyone else so you dont forget it - MrPotato0820",
  "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. - Albert Einstein",
  "I love this mod, this is my favroite fnf mod, everything about it just great, im happy they updated the mod and gald that I played it - swaggotskills",
  "when teach is serious but u pull the baldi",
  "bumm bum bummm bumm buummmmm",
  "no kitty this is mah pot pah!",
  "im so in love with you, your so in love with him, i dont know what to do",
  "if your gonna be a skid, at least use claude - OrangeesDev",
  "I MODDED IT, I MODDED IT!! GET MODDED BY ASPEN GET MODDED BY ASPEN - Aspen, 2026",
  "stinky",
  "",
  "mei mei snow leopard",
  "game on! - Coach",
  "bonk",
  "me is yay",
  "Before you criticize someone, walk a mile in their shoes. That way, you'll be a mile from them, and you'll have their shoes. — Jack Hande",
  "if someone tells you a secret, tell everyone else so you dont forget it - MrPotato0820",
  "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. - Albert Einstein",
  "I love this mod, this is my favroite fnf mod, everything about it just great, im happy they updated the mod and gald that I played it - swaggotskills",
  "when teach is serious but u pull the baldi",
  "bumm bum bummm bumm buummmmm",
  "no kitty this is mah pot pah!",
  "im so in love with you, your so in love with him, i dont know what to do",
  "if your gonna be a skid, at least use claude - OrangeesDev"
];

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
  ugs: {
    catalog: "https://cdn.jsdelivr.net/gh/bubbls/ugs-singlefile@6625addc037b2dcfa0086ffaeb314fd3c90c342f/games.js",
    htmlRoot: "https://cdn.jsdelivr.net/gh/bubbls/ugs-singlefile@6625addc037b2dcfa0086ffaeb314fd3c90c342f/UGS-Files/",
    assetsRoot: "https://cdn.jsdelivr.net/gh/bubbls/UGS-Assets@9cf433220236bb0471ab3a68ec8fe3e0a2799e36/"
  },
  seraph: {
    catalog: "https://cdn.jsdelivr.net/gh/skibbsz/seraph@7635e52e48719d2b902b0b49dd0dee80ee9a8a7f/games.json",
    root: "https://cdn.jsdelivr.net/gh/skibbsz/seraph@7635e52e48719d2b902b0b49dd0dee80ee9a8a7f/",
    thumbnailRoot: "https://cdn.jsdelivr.net/gh/ubg-py/seraph@main/images/thumbnails/"
  }
};
// Imported libraries are intentionally excluded from the automatic full preload by default.
// Flip this to true to preload their game HTML and mapped covers too (adds hundreds of MB).
const PRELOAD_IMPORTED_LIBRARY_GAMES = false;
const UGS_THUMB_PATHS = {"cl234playergame":"2-3-4-player-game/TemplateData/logo.png","cl3dash":"3dash/logo.png","cladventurecapitalist":"adventure-capitalist/old/favicon.ico","clagesofconflict":"ages of conflict/TemplateData/favicon.ico","clalienskyinvasion":"alien sky invasion/TemplateData/favicon.ico","clantimatterdimensions":"Antimatter Dimensions/icon.png","clapesvshelium":"apesvshelium/TemplateData/favicon.ico","clbadparenting":"bad-parenting/TemplateData/favicon.ico","clbaldidecomp":"baldi decomp/TemplateData/favicon.png","clbaseballbros":"baseball bros/icon.png","clbearsus":"bearsus/icons/icon-256.png","clblumgiracers":"blumgi racers/icons/icon-256.png","clblumgirocket":"blumgi-rocket/icons/icon-512.png","clbouncymotors":"bouncy motors/icon.png","clclashofvikings":"clashofvikings/media/graphics/favicon.ico","clcookie-clicker":"cookieclicker/img/icon.png","clcrazychicken3D":"crazy chicken 3D/index.icon.png","clcreaturecardidle":"creature-card-idle/favicon.ico","cldemonbluff":"demon-bluff/TemplateData/favicon.ico","cldogeminer2":"doge miner 2/assets/imageLogo/logo.jpg","cldoodlejump":"doodle jump/favicon.ico","cldownthemountain":"down the mountain/logo.png","clducklifebattle":"duck life battle/TemplateData/favicon.ico","cleggycar":"eggy car/icon-256.png","clescalatingduel":"escalating-duel/icons/icon-256.png","cleurovisionsim":"eurovision-sim/TemplateData/favicon.ico","clexoobservation":"exo-observation/favicon.ico","clfearassessment":"fear-assessment/icon-256.png","clfeedthevoid":"feed-the-void/index.icon.png","clfinalearth2":"final earth 2/icons/favicon.png","clfnaw":"fnaw/favicon.ico","clfootballbros":"football bros/icon.png","clgdlite":"gdlite/logo.png","clgoingballs":"going balls/TemplateData/favicon.ico","clgolfbattle":"golf-battle/logo.png","clgolforbit":"golf orbit/TemplateData/favicon.ico","clgranny3":"granny 3/TemplateData/favicon.ico","clgravity":"gravity/favicon.ico","clgrindcraft":"grindcraft/favicon.png","clgrn":"grn/favicon.png","clgun-spin":"gunspin/TemplateData/favicon.ico","clhalflife":"half life/favicon.ico","clhardwaretycoon":"hardware tycoon/icon-256.png","clicypurplehead":"icy purple head/icon-256.png","clinkgame":"ink-game/logo.png","cljellymario":"jelly-mario/favicon.ico","cljumpingshell":"jumping shell/favicon.png","clkanyezone":"kanye-zone/favicon.ico","clkaratebros":"karate bros/icon.png","clkartbros":"kart bros/TemplateData/favicon.ico","clleveldevil":"level devil/favicon.png","clmadstick":"mad-stick/logo.png","clmanagod":"mana god/TemplateData/favicon.ico","clmotoroadrash":"moto road rash/style/favicon.ico","clobbybike":"obby-bike/logo.png","clouthold":"outhold/index.icon.png","clperfecthotel":"perfect-hotel/TemplateData/favicon.ico","clpoorbunny":"poor-bunny/favicon.png","clpuppethockey":"puppet hockey/icon-256.png","clragdollhit":"ragdoll-hit/thumbnail.png","clrecoil":"recoil/favicon.ico","clresizer":"resizer/favicon.png","clrocketpult":"rocketpult/icons/icon-256.png","clrollyvortex":"rolly vortex/icon-256.png","clrussianbuckshot":"russian-buckshot/logo.png","clscalethedepths":"scale-the-depths/TemplateData/favicon.ico","clshredsauce":"shredsauce/favicon.ico","clsilk":"silk/favicon.ico","clslotornot":"slot or not/index.icon.png","clsm63redux":"sm63redux/index.icon.png","clsnowrider":"snow-rider/TemplateData/favicon.ico","clsoccerbros":"soccer bros/icon.png","clsolarsandbox":"solar-sandbox/index.icon.png","clspacewarsbattleground":"space wars battleground/TemplateData/favicon.ico","clspacewaves":"space waves/logo.png","clspeedstars":"speed-stars/TemplateData/favicon.ico","clspelunky":"spelunky/favicon.ico","clstacktris":"stacktris/webapp/favicon.ico","clstation141":"station 141/TemplateData/favicon.ico","clstationsaturn":"station saturn/TemplateData/favicon.ico","clstealbrainrot":"steal brainrot/Images/logo.png","clstickmanclash":"Stickman Clash/index.icon.png","clstickslasher":"stick slasher/TemplateData/favicon.ico","clstrikerdummies":"striker-dummies/favicon.ico","clsuperonionboy2":"super-onion-boy-2/icons/icon-512.png","clswitchblade":"switchblade/index.icon.png","clswordfight":"swordfight/TemplateData/favicon.ico","cltabletennisworldtour":"table tennis world tour/html5games/images/logo.png","cltag-":"tag/icons/icon-256.png","cltempoverdose":"tempoverdose/TemplateData/favicon.ico","cltheyarecoming":"they-are-coming/logo.png","cltopspeedracing3d":"top speed racing 3d/TemplateData/favicon.ico","cltownscraper":"townscraper/TemplateData/favicon.ico","clunicyclehero":"unicycle hero/favicon.png","clwebecomewhatwebehold":"we become what we behold/sprites/postcredits/logo.png","clwheeliebike":"wheelie-bike/icons/icon-256.png","clwrestlebros":"wrestle bros/icon.png","clyouvs100skibidi":"you vs 100 skibidi/TemplateData/favicon.ico","clquake":"quake/media/system/images/favicon.ico","clslicemaster":"slice-master/files/assets/161496521/1/logo.png"};
const UGS_MISSING_FILES = new Set([
  "clPok�mon Emerald Rush Edition (20)", "clPok�mon Trade&_Stache (V11)",
  "clPok�mon TWO (v11)", "clPok�monstunningsteel", "clPou", "clRedBall4",
  "cl�oo", "classroommaxxing", "clrabbithole106", "EB.Client.V1.0.0R2.WASM", "cl?"
]);
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
function titleFromUgsId(id) {
  const overrides = {
    cl1v1lol:"1v1 LOL", cl8ballpool:"8 Ball Pool", cl2048:"2048", clbadicecream:"Bad Ice Cream",
    clbaldidecomp:"Baldi's Basics Decompile", clbaldisbasics:"Baldi's Basics", clbasketballlegends:"Basketball Legends",
    clbaseballbros:"Baseball Bros", clblockblast:"Block Blast", clbloxorz:"Bloxorz", clbrotato:"Brotato",
    clcookieclicker:"Cookie Clicker", cldoodlejump:"Doodle Jump", clducklife:"Duck Life", cleggycar:"Eggy Car",
    clfnaw:"Five Nights at Winston's", clgdlite:"Geometry Dash Lite", clgranny3:"Granny 3", clgrowagarden:"Grow a Garden",
    clhappywheels:"Happy Wheels", clhollowknight:"Hollow Knight", clmoto3:"Moto X3M", clpapasfreezeria:"Papa's Freezeria",
    clragdollarchers:"Ragdoll Archers", clrun3:"Run 3", clsnowrider:"Snow Rider", clslope:"Slope",
    clsoccerbros:"Soccer Bros", clspacewaves:"Space Waves", clstacktris:"Stacktris", clstealbrainrot:"Steal Brainrot",
    cltetris:"Tetris", clundertale:"Undertale", clwrestlebros:"Wrestle Bros"
  };
  if (overrides[id]) return overrides[id];
  const thumbnailPath = UGS_THUMB_PATHS[id];
  if (thumbnailPath) {
    const folder = thumbnailPath.split("/")[0];
    const readableFolder = folder.replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/[_-]+/g, " ").replace(/\s+/g, " ").trim();
    if (/\s/.test(readableFolder)) {
      return readableFolder.split(" ").map(word => word.length <= 3 && /[A-Z0-9]/.test(word) ? word.toUpperCase() : word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    }
  }
  let title = String(id).replace(/^cl/i, "");
  title = title.replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/([A-Z])([A-Z][a-z])/g, "$1 $2").replace(/[_-]+/g, " ").replace(/\s+/g, " ").trim();
  return title.split(" ").map(word => word.length <= 3 && /[A-Z0-9]/.test(word) ? word.toUpperCase() : word.charAt(0).toUpperCase() + word.slice(1)).join(" ") || title;
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
async function fetchUgsEntries() {
  const script = await fetchExternalText(EXTERNAL_LIBRARY_CONFIG.ugs.catalog);
  const match = script.match(/let\s+files\s*=\s*(\[[\s\S]*?\])\s*;/);
  if (!match) throw new Error("UGS game list format was not recognized");
  const files = JSON.parse(match[1]);
  return files.filter(file => typeof file === "string" && file.startsWith("cl") && !UGS_MISSING_FILES.has(file) && !/[�]/.test(file))
    .map(file => ({
      name: titleFromUgsId(file),
      file: `ugs/${file}.html`,
      url: EXTERNAL_LIBRARY_CONFIG.ugs.htmlRoot + encodeURIComponent(file) + ".html",
      image: UGS_THUMB_PATHS[file] ? EXTERNAL_LIBRARY_CONFIG.ugs.assetsRoot + UGS_THUMB_PATHS[file].split("/").map(encodeURIComponent).join("/") : ""
    }));
}
async function fetchSeraphEntries() {
  const response = await fetchExternalText(EXTERNAL_LIBRARY_CONFIG.seraph.catalog);
  const rows = JSON.parse(response);
  const thumbnailRoot=EXTERNAL_LIBRARY_CONFIG.seraph.thumbnailRoot;
  const makeThumbnailCandidates=row=>{
    const candidates=[];const add=value=>{if(value&&!candidates.includes(value))candidates.push(value);};
    for(const value of [row.thumbnail,row.image,row.cover,row.coverImage]){
      if(typeof value!=='string'||!value.trim())continue;
      const raw=value.trim();
      if(/^https?:\/\//i.test(raw)){add(raw);continue;}
      const relative=raw.replace(/^\/?images\/thumbnails\//i,'').replace(/^\/+/, '');
      if(/\.[a-z0-9]{2,5}$/i.test(relative))add(thumbnailRoot+relative.split('/').map(encodeURIComponent).join('/'));
      else if(relative)add(thumbnailRoot+relative.split('/').map(encodeURIComponent).join('/')+'.png');
    }
    const urlParts=String(row.url||'').split('/').filter(Boolean);
    let folder=urlParts[urlParts.length-1]||'';
    if(/\.[a-z0-9]{2,5}$/i.test(folder))folder=urlParts[urlParts.length-2]||folder.replace(/\.[^.]+$/,'');
    const nameSlug=String(row.name||'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
    for(const stem of [folder,nameSlug,String(row.name||'').trim()].filter(Boolean)){
      if(/\.[a-z0-9]{2,5}$/i.test(stem))add(thumbnailRoot+stem.split('/').map(encodeURIComponent).join('/'));
      else for(const extension of ['png','jpg'])add(thumbnailRoot+stem.split('/').map(encodeURIComponent).join('/')+'.'+extension);
    }
    return candidates;
  };
  return rows.filter(row => row && row.name && typeof row.url === "string" && row.url.startsWith("/games/"))
    .map(row => {
      const imageCandidates=makeThumbnailCandidates(row);
      return {
        name: row.name,
        file: `seraph/${row.url.replace(/^\/+/, "")}`,
        url: EXTERNAL_LIBRARY_CONFIG.seraph.root + row.url.replace(/^\/+/, ""),
        image: imageCandidates[0]||"",
        imageCandidates
      };
    });
}
async function loadExternalGameLibraries() {
  const seen = new Set(g4m3s.map(game => normalizeGameKey(game.name)));
  const results = await Promise.allSettled([fetchGnMathEntries(), fetchUgsEntries(), fetchSeraphEntries()]);
  let gnCount = 0, ugsCount = 0, seraphCount = 0;
  if (results[0].status === "fulfilled") gnCount = appendExternalGames(results[0].value, "GN-MATH", seen); else console.warn("GN-MATH catalog could not load:", results[0].reason);
  if (results[1].status === "fulfilled") ugsCount = appendExternalGames(results[1].value, "UGS", seen); else console.warn("UGS catalog could not load:", results[1].reason);
  if (results[2].status === "fulfilled") seraphCount = appendExternalGames(results[2].value, "SERAPH", seen); else console.warn("Seraph catalog could not load:", results[2].reason);
  const freezeNova = [
    {name:"FreezeNova Catalog",url:"https://app.freezenova.com/"},
    {name:"Ragdoll Archers",url:"https://app.freezenova.com/class/ragdoll-archers"},
    {name:"Moto X3M 3",url:"https://app.freezenova.com/class/moto-x3m-3"},
    {name:"Five Nights at Freddy's 2",url:"https://app.freezenova.com/class/five-nights-at-freddys-2"},
    {name:"Steal Brainrot Heist",url:"https://app.freezenova.com/class/steal-brainrot-heist"}
  ].map(game => ({...game,launchMode:"external",actionLabel:game.name==="FreezeNova Catalog"?"BROWSE":"OPEN"}));
  const freezeCount = appendExternalGames(freezeNova, "FREEZENOVA", seen);
  renderg4m3s();
  window.SILVERITE_SOURCE_COUNTS = { gnMath:gnCount, ugs:ugsCount, seraph:seraphCount, freezeNova:freezeCount };
  console.info("Silverite external game sources loaded", window.SILVERITE_SOURCE_COUNTS);
  return window.SILVERITE_SOURCE_COUNTS;
}
// Warm every repository image, any custom/overridden thumbnail, and each playable game document.
// The browser decides how long cached files are retained. Cross-origin game pages need CORS to be fetch-preloaded.
const GAME_PRELOAD_ITEMS = [
  ...Array.from(new Set([
    ...GAME_IMAGE_FILES.map(file => GAME_RAW_ROOT + GAME_IMAGE_PATH + encodeURIComponent(file)),
    ...g4m3s.map(game => game.image).filter(Boolean)
  ])).map(url => ({kind:'image', label:url, url})),
  ...g4m3s.map(game => ({kind:'game', label:game.file, url:game.url}))
];
async function consumeResponseBody(response){
  if(!response.body){await response.arrayBuffer();return;}
  const reader=response.body.getReader();
  try{while(true){const part=await reader.read();if(part.done)break;}}
  finally{try{reader.releaseLock();}catch(e){}}
}
async function preloadAsset(item){
  if(item.kind==='image'){
    await new Promise((resolve,reject)=>{
      const image=new Image();
      image.onload=()=>resolve();
      image.onerror=()=>reject(new Error('Image preload failed'));
      image.decoding='async';
      image.referrerPolicy='no-referrer';
      image.src=item.url;
    });
    return;
  }
  const response=await fetch(item.url,{method:'GET',mode:'cors',credentials:'omit',cache:'force-cache',referrerPolicy:'no-referrer'});
  if(!response.ok)throw new Error('HTTP '+response.status);
  await consumeResponseBody(response);
}
function startFullAssetPreload(){
  const chip=$('#preload-status'),text=$('#preload-status-text');
  if(!chip||!text||chip.dataset.started==='true')return;
  chip.dataset.started='true';chip.hidden=false;
  const total=GAME_PRELOAD_ITEMS.length;
  let completed=0,failed=0,next=0,lastLabel='';
  const concurrency=4;
  const update=()=>{
    const prefix=completed<total?'PRELOADING':'PRELOAD COMPLETE';
    const suffix=failed?` · ${failed} FAILED`:'';
    text.textContent=`${prefix} ${completed}/${total}${suffix}${lastLabel&&completed<total?' · '+lastLabel:''}`;
    chip.title=lastLabel||'Caching game files and images in this browser';
  };
  update();
  async function worker(){
    while(next<GAME_PRELOAD_ITEMS.length){
      const item=GAME_PRELOAD_ITEMS[next++];
      lastLabel=item.label;
      try{await preloadAsset(item);}catch(error){failed++;}
      completed++;
      update();
    }
  }
  Promise.all(Array.from({length:Math.min(concurrency,total)},()=>worker())).then(()=>{
    chip.classList.add('done');
    text.textContent=`PRELOAD COMPLETE ${completed}/${total}${failed?` · ${failed} FAILED`:''}`;
    chip.title=failed?`${failed} asset(s) could not be cached. They can still load when opened.`:'All game HTML files and image files were requested and cached where the browser permits.';
    if(failed===0){setTimeout(()=>{chip.hidden=true;},5000);}
  }).catch(()=>{
    chip.classList.add('done');
    text.textContent=`PRELOAD STOPPED ${completed}/${total}`;
  });
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
const DEFAULT_SETTINGS={accent:'#f0f0f0',accentRgb:'240,240,240',cursorStyle:'default',cursorImage:'',cursorGlow:true,glowIntensity:100,backgroundStyle:'grid',backgroundImage:'',backgroundGrid:true,showClock:true,reduceMotion:false,confirmClose:false,defaultEngine:'scramjet',defaultTransport:'libcurl',studiKey:'',studiEndpoint:'',studiModel:''};
let userSettings={...DEFAULT_SETTINGS};
try{
  const currentSettings=JSON.parse(localStorage.getItem(SETTINGS_KEY)||'null');
  if(currentSettings&&typeof currentSettings==='object'){
    userSettings={...DEFAULT_SETTINGS,...currentSettings};
    if(!Object.hasOwn(currentSettings,'backgroundStyle'))userSettings.backgroundStyle=currentSettings.backgroundGrid===false?'off':'grid';
  }else{
    const legacySettings=JSON.parse(localStorage.getItem(LEGACY_SETTINGS_KEY)||'null');
    if(legacySettings&&typeof legacySettings==='object'){
      userSettings={...DEFAULT_SETTINGS,...legacySettings};
      if(!Object.hasOwn(legacySettings,'backgroundStyle'))userSettings.backgroundStyle=legacySettings.backgroundGrid===false?'off':'grid';
      // The old release used amber as its built-in default. Migrate that default to white,
      // while preserving any accent the user deliberately chose.
      if(String(legacySettings.accent||'').toLowerCase()==='#ffb52e'){
        userSettings.accent='#f0f0f0';
        userSettings.accentRgb='240,240,240';
      }
      localStorage.setItem(SETTINGS_KEY,JSON.stringify(userSettings));
    }
  }
}catch(e){}
let activeView='proxy',toastTimer;
let favorites=new Set();
try{favorites=new Set(JSON.parse(localStorage.getItem('silverite-favorites')||'[]'))}catch(e){}
function notify(message){const t=$('#toast');t.textContent=message;t.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove('show'),2500)}
const proxyDiagnostics=[];
const PROXY_DIAGNOSTIC_LIMIT=250;
function diagnosticText(value){
  if(value instanceof Error)return `${value.name}: ${value.message}${value.stack?`\n${value.stack}`:''}`;
  if(typeof value==='string')return value;
  try{return JSON.stringify(value)}catch(error){return String(value)}
}
function logProxyDiagnostic(kind,message,details=''){
  const time=new Date().toLocaleTimeString();
  proxyDiagnostics.push(`[${time}] ${kind.toUpperCase()} ${message}${details?`\n${details}`:''}`);
  if(proxyDiagnostics.length>PROXY_DIAGNOSTIC_LIMIT)proxyDiagnostics.splice(0,proxyDiagnostics.length-PROXY_DIAGNOSTIC_LIMIT);
  const output=$('#diagnostics-output');
  if(output){output.textContent=proxyDiagnostics.join('\n\n');output.scrollTop=output.scrollHeight;}
}
for(const method of ['error','warn']){
  const original=console[method].bind(console);
  console[method]=(...args)=>{logProxyDiagnostic(method,args.map(diagnosticText).join(' '));original(...args);};
}
window.addEventListener('error',event=>logProxyDiagnostic('error',event.message||'Uncaught page error',event.error?diagnosticText(event.error):`${event.filename||''}:${event.lineno||0}:${event.colno||0}`));
window.addEventListener('unhandledrejection',event=>logProxyDiagnostic('error','Unhandled promise rejection',diagnosticText(event.reason)));
function setDiagnosticsOpen(open){
  const panel=$('#proxy-diagnostics');
  if(!panel)return;
  panel.hidden=!open;
  $('#toggle-diagnostics')?.classList.toggle('active',open);
  if(open&&!proxyDiagnostics.length)logProxyDiagnostic('info','Console ready. Reproduce the proxy error to capture details.');
}
function escapeHTML(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function cardTemplate(game){
  const safe=escapeHTML(game.name);const fav=favorites.has(game.name);const thumbnail=game.image?escapeHTML(game.image):'https://cdn.jsdelivr.net/gh/braydensrandomcreations/silverite@main/assets/no-thumbnail.png';const placeholderFlag=game.image?'':'data-placeholder="true"';const candidateAttr=game.imageCandidates?.length?`data-image-candidates="${escapeHTML(JSON.stringify(game.imageCandidates))}" data-image-candidate-index="0"`:'';const image=`<img class="game-thumb" src="${thumbnail}" ${placeholderFlag} ${candidateAttr} alt="" loading="lazy" decoding="async" referrerpolicy="no-referrer" onerror="if(this.dataset.imageCandidates){const c=JSON.parse(this.dataset.imageCandidates);const i=Number(this.dataset.imageCandidateIndex||0)+1;if(i<c.length){this.dataset.imageCandidateIndex=i;this.src=c[i];return}}if(this.dataset.placeholder){this.remove();this.parentElement.classList.remove('has-thumb')}else{this.dataset.placeholder='true';this.src='https://cdn.jsdelivr.net/gh/braydensrandomcreations/silverite@main/assets/no-thumbnail.png'}">`;
  const source=game.source?`<div class="game-source">${escapeHTML(game.source)}</div>`:'';
  const action=escapeHTML(game.actionLabel||'PLAY');
  return `<article class="game-card" data-game="${safe}"><div class="game-art art-${game.art} has-thumb">${image}<span class="art-glyph thumb-fallback">${escapeHTML(game.glyph||'G')}</span><button class="game-fav ${fav?'favorited':''}" data-fav="${safe}" aria-label="${fav?'Remove from':'Add to'} favorites">${svgIcon('heart',16,'icon',fav)}</button></div><div class="game-name" title="${safe}">${safe}</div>${source}<button class="play-btn" data-play="${safe}">${action}</button></article>`
}
const G4M3S_PAGE_SIZE = 96;
let currentGamePage = 0;
let selectedGameLibrary = "SILVERITE";
const GAME_LIBRARY_FILTERS = [
  {id:"SILVERITE",name:"Silverite games",fallback:"S",icon:"https://cdn.jsdelivr.net/gh/braydensrandomcreations/silverite@main/assets/icons/silverite.png"},
  {id:"UBZONE",name:"UBZone",fallback:"U",icon:"https://cdn.jsdelivr.net/gh/braydensrandomcreations/silverite@main/assets/icons/ubz.png"},
  {id:"GN-MATH",name:"GN-MATH",fallback:"π",icon:"https://cdn.jsdelivr.net/gh/braydensrandomcreations/silverite@main/assets/icons/gn.png"},
  {id:"UGS",name:"Ultimate Game Stash",fallback:"UGS",icon:"https://cdn.jsdelivr.net/gh/braydensrandomcreations/silverite@main/assets/icons/ugs.png"},
  {id:"SERAPH",name:"Seraph",fallback:"S",icon:"https://cdn.jsdelivr.net/gh/braydensrandomcreations/silverite@main/assets/icons/seraph.png"},
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
let proxyTabs=[{id:1,title:'New Tab',address:'',frame:null,frameElement:null,loading:false}];
let activeProxyTabId=1;
let nextProxyTabId=2;
let scramjetController=null;
let scramjetBootPromise=null;
let scramjetKeepalive=null;
let scramjetTransportKind=null;
let ultravioletBootPromise=null;
let ultravioletConnection=null;
let ultravioletTransportKind=null;
function selectedTransportKind(){return userSettings.defaultTransport==='epoxy'?'epoxy':'libcurl'}
function resolveAppBaseUrl(){
  const sources=[document.currentScript?.src,document.baseURI];
  try{if(window.frameElement?.ownerDocument?.baseURI)sources.push(window.frameElement.ownerDocument.baseURI)}catch(error){}
  sources.push(location.href);
  for(const source of sources){
    if(!source)continue;
    try{
      const url=new URL(source);
      if(url.protocol==='about:'||url.protocol==='data:')continue;
      return new URL('.',url);
    }catch(error){}
  }
  throw new Error('Could not determine the Silverite app base URL. Open the site from HTTPS or localhost.');
}
const APP_BASE_URL=resolveAppBaseUrl();
function appUrl(path){return new URL(String(path).replace(/^\/+/,''),APP_BASE_URL).href}
const DEFAULT_PROXY_RUNTIME_BASE='https://cdn.jsdelivr.net/gh/braydensrandomcreations/silverite@main/';
function normalizeProxyRuntimeBase(value){
  try{
    const url=new URL(String(value||DEFAULT_PROXY_RUNTIME_BASE));
    if(!url.pathname.endsWith('/'))url.pathname+='/';
    return url.href;
  }catch(error){
    return DEFAULT_PROXY_RUNTIME_BASE;
  }
}
const requestedRuntimeBase=(()=>{
  try{return new URL(document.baseURI).searchParams.get('runtimeBase');}
  catch(error){return null;}
})();
const PROXY_RUNTIME_BASE=normalizeProxyRuntimeBase(
  (typeof window!=='undefined'&&window.__SILVERITE_PROXY_RUNTIME_BASE__)||requestedRuntimeBase||DEFAULT_PROXY_RUNTIME_BASE
);
if(typeof window!=='undefined')window.__SILVERITE_PROXY_RUNTIME_BASE__=PROXY_RUNTIME_BASE;
function proxyRuntimeUrl(path){return new URL(String(path).replace(/^\/+/,''),PROXY_RUNTIME_BASE).href}
const TRANSPORT_CACHE_VERSION='2';
function versionedUrl(href,version){
  const url=new URL(href);
  url.searchParams.set('v',version);
  return url.href;
}
function versionedRuntimeUrl(path,version=TRANSPORT_CACHE_VERSION){
  return versionedUrl(proxyRuntimeUrl(path),version);
}
function proxyServiceWorkerUrl(){
  const url=new URL(appUrl('sw.js'));
  url.searchParams.set('runtimeBase',PROXY_RUNTIME_BASE);
  url.searchParams.set('v',TRANSPORT_CACHE_VERSION);
  return url.href;
}
function transportEndpoint(engine,kind){
  const path=engine==='ultraviolet'?(kind==='epoxy'?'uv-epoxy/index.mjs':'uv-libcurl/index.mjs'):(kind==='epoxy'?'epoxy/index.mjs':'libcurl/index.mjs');
  return versionedRuntimeUrl(path);
}
const WISP_SERVER_URLS=['wss://wisp.mercurywork.shop/','wss://anura.pro/'];
const WISP_CACHE_KEY='silverite.wispEndpoint';
let activeWispEndpoint=null;
let wispProbePromise=null;
function wispEndpoint(){return activeWispEndpoint||WISP_SERVER_URLS[0]}
function cachedWispEndpoint(){
  try{
    const cached=JSON.parse(localStorage.getItem(WISP_CACHE_KEY)||'null');
    if(cached?.url&&Date.now()-cached.at<30*60*1000)return cached.url;
  }catch(error){}
  return null;
}
function rememberWispEndpoint(url){
  try{localStorage.setItem(WISP_CACHE_KEY,JSON.stringify({url,at:Date.now()}));}catch(error){}
}
function probeWispEndpoint(url,timeout=4000){
  return new Promise(resolve=>{
    let socket;
    let settled=false;
    const finish=reachable=>{
      if(settled)return;
      settled=true;
      clearTimeout(timer);
      try{socket?.close();}catch(error){}
      resolve(reachable);
    };
    const timer=setTimeout(()=>finish(false),timeout);
    try{socket=new WebSocket(url);}
    catch(error){finish(false);return;}
    socket.addEventListener('open',()=>finish(true),{once:true});
    socket.addEventListener('error',()=>finish(false),{once:true});
    socket.addEventListener('close',()=>finish(false),{once:true});
  });
}
async function ensureWispEndpoint(){
  if(activeWispEndpoint)return activeWispEndpoint;
  if(wispProbePromise)return wispProbePromise;
  wispProbePromise=(async()=>{
    const cached=cachedWispEndpoint();
    const candidates=cached?[cached,...WISP_SERVER_URLS.filter(url=>url!==cached)]:WISP_SERVER_URLS;
    const results=[];
    for(const url of candidates){
      const reachable=await probeWispEndpoint(url);
      results.push(`${url} ${reachable?'reachable':'unreachable'}`);
      if(reachable){activeWispEndpoint=url;rememberWispEndpoint(url);break;}
    }
    if(!activeWispEndpoint)activeWispEndpoint=WISP_SERVER_URLS[0];
    logProxyDiagnostic('info',`WISP endpoint: ${activeWispEndpoint}`,results.join('\n'));
    return activeWispEndpoint;
  })();
  return wispProbePromise;
}
function loadScramjetScript(src){
  return new Promise((resolve,reject)=>{
    const append=(url,isRetry)=>{
      const script=document.createElement('script');
      script.src=url;
      script.onload=resolve;
      script.onerror=()=>{
        script.remove();
        if(!isRetry){
          const retry=new URL(url);retry.searchParams.set('retry',Date.now().toString(36));append(retry.href,true);return;
        }
        const error=new Error(`Could not load proxy runtime: ${url}`);
        logProxyDiagnostic('error','Proxy runtime script failed to load',diagnosticText(error));reject(error);
      };
      document.head.append(script);
    };
    append(src,false);
  });
}
async function getProxyServiceWorker(){
  if(!window.isSecureContext||!('serviceWorker' in navigator))throw new Error('Proxy engines need localhost or an HTTPS site.');
  const swUrl=proxyServiceWorkerUrl();
  logProxyDiagnostic('info',`Registering service worker: ${swUrl}`,`Scope: ${APP_BASE_URL.pathname}`);
  let registration;
  try{registration=await navigator.serviceWorker.register(swUrl,{scope:APP_BASE_URL.pathname,updateViaCache:'none'});}
  catch(error){logProxyDiagnostic('error','Service worker registration failed',diagnosticText(error));throw error;}
  await navigator.serviceWorker.ready;
  await registration.update();
  let updatingWorker=registration.installing||registration.waiting;
  if(updatingWorker){
    await new Promise((resolve,reject)=>{
      const timeout=setTimeout(()=>reject(new Error('The updated proxy service worker did not activate in time. Reload Silverite and retry.')),15000);
      const checkState=()=>{
        if(updatingWorker.state==='activated'){clearTimeout(timeout);resolve();}
        else if(updatingWorker.state==='redundant'){clearTimeout(timeout);reject(new Error('The updated proxy service worker could not activate. Reload Silverite and retry.'));}
      };
      updatingWorker.addEventListener('statechange',checkState);
      checkState();
    });
  }
  const activeWorker=registration.active;
  if(!navigator.serviceWorker.controller||navigator.serviceWorker.controller!==activeWorker){
    await new Promise((resolve,reject)=>{
      const timeout=setTimeout(()=>reject(new Error('The proxy service worker did not take control. Reload Silverite and retry.')),15000);
      const checkController=()=>{
        if(navigator.serviceWorker.controller===registration.active){clearTimeout(timeout);resolve();}
      };
      navigator.serviceWorker.addEventListener('controllerchange',checkController,{once:true});
      checkController();
    });
  }
  const worker=navigator.serviceWorker.controller||registration.active;
  if(!worker)throw new Error('The proxy service worker is not active.');
  return worker;
}
async function importTransport(url){
  try{return await import(url);}
  catch(error){
    const retry=new URL(url);retry.searchParams.set('retry',Date.now().toString(36));
    try{return await import(retry.href);}catch(retryError){throw error;}
  }
}
async function createScramjetTransport(kind){
  const {default:Transport}=await importTransport(transportEndpoint('scramjet',kind));
  await ensureWispEndpoint();
  return new Transport({wisp:wispEndpoint()});
}
async function initializeScramjet(){
  const transportKind=selectedTransportKind();
  if(scramjetController){
    if(scramjetTransportKind!==transportKind){await scramjetController.setTransport(await createScramjetTransport(transportKind));scramjetTransportKind=transportKind;}
    return scramjetController;
  }
  if(scramjetBootPromise)return scramjetBootPromise;
  scramjetBootPromise=(async()=>{
    const serviceworker=await getProxyServiceWorker();
    for(const src of ['scram/scramjet.js','controller/controller.api.js','utils/scramjet-utils.js'])await loadScramjetScript(versionedRuntimeUrl(src));
    const transport=await createScramjetTransport(transportKind);
    const api=window.$scramjetController;
    if(!api?.Controller||!window.$scramjetUtils?.UrlWatcherPlugin)throw new Error('Scramjet runtime scripts did not initialize.');
    const controller=new api.Controller({
      serviceworker,
      transport,
      config:{prefix:new URL('scramjet/',APP_BASE_URL).pathname,scramjetPath:versionedRuntimeUrl('scram/scramjet.js'),wasmPath:versionedRuntimeUrl('scram/scramjet.wasm'),injectPath:versionedRuntimeUrl('controller/controller.inject.js')}
    });
    await controller.wait();
    if(!scramjetKeepalive)scramjetKeepalive=setInterval(()=>navigator.serviceWorker.controller?.postMessage('keepalive'),15000);
    scramjetController=controller;
    scramjetTransportKind=transportKind;
    return controller;
  })().catch(error=>{scramjetBootPromise=null;throw error;});
  return scramjetBootPromise;
}
async function setUltravioletTransport(connection,kind){
  const url=transportEndpoint('ultraviolet',kind);
  await ensureWispEndpoint();
  try{await connection.setTransport(url,[{wisp:wispEndpoint()}]);}
  catch(error){
    const retry=new URL(url);retry.searchParams.set('retry',Date.now().toString(36));
    await connection.setTransport(retry.href,[{wisp:wispEndpoint()}]);
  }
}
let bareMuxWorkerBlobUrl=null;
function getBareMuxWorkerPath(path){
  try{
    const url=new URL(path,APP_BASE_URL.href);
    if(url.origin===location.origin)return url.href;
    // SharedWorkers must be same-origin; import the remote worker from a blob wrapper.
    if(!bareMuxWorkerBlobUrl)bareMuxWorkerBlobUrl=URL.createObjectURL(new Blob([`importScripts(${JSON.stringify(url.href)});`],{type:'application/javascript'}));
    return bareMuxWorkerBlobUrl;
  }catch(error){return path;}
}
async function initializeUltraviolet(){
  const transportKind=selectedTransportKind();
  if(ultravioletConnection){
    if(ultravioletTransportKind!==transportKind){await setUltravioletTransport(ultravioletConnection,transportKind);ultravioletTransportKind=transportKind;}
    return ultravioletConnection;
  }
  if(ultravioletBootPromise)return ultravioletBootPromise;
  ultravioletBootPromise=(async()=>{
    await getProxyServiceWorker();
    await loadScramjetScript(versionedRuntimeUrl('uv/uv.bundle.js'));
    const uvConfigUrl=new URL(versionedRuntimeUrl('silverite-uv.config.js'));
    uvConfigUrl.searchParams.set('runtimeBase',PROXY_RUNTIME_BASE);
    await loadScramjetScript(uvConfigUrl.href);
    await loadScramjetScript(versionedRuntimeUrl('baremux/index.js'));
    const BareMuxConnection=window.BareMux?.BareMuxConnection;
    if(!BareMuxConnection)throw new Error('Ultraviolet transport manager did not load.');
    const connection=new BareMuxConnection(getBareMuxWorkerPath(versionedRuntimeUrl('baremux/worker.js')));
    await setUltravioletTransport(connection,transportKind);
    ultravioletConnection=connection;
    ultravioletTransportKind=transportKind;
    return connection;
  })().catch(error=>{ultravioletBootPromise=null;throw error;});
  return ultravioletBootPromise;
}
function updateProxyTabAddress(tab,url){
  tab.address=String(url||'');
  try{tab.title=new URL(tab.address).hostname.replace(/^www\./,'')||'New Tab'}catch(error){tab.title='New Tab';}
  if(tab.id===activeProxyTabId)$('#address-bar').value=tab.address;
  renderProxyTabs();
}
function updateProxySurface(){
  const view=$('#view-proxy');
  const active=proxyTabs.find(tab=>tab.id===activeProxyTabId);
  const browsing=Boolean(active?.frameElement&&active.address);
  view.classList.toggle('is-browsing',browsing);
  for(const tab of proxyTabs)tab.frameElement?.classList.toggle('is-active',browsing&&tab.id===activeProxyTabId);
  const loading=$('#proxy-loading');
  if(loading)loading.hidden=!(activeView==='proxy'&&active?.loading);
}
async function ensureProxyFrame(tab){
  const engine=userSettings.defaultEngine==='ultraviolet'?'ultraviolet':'scramjet';
  if(tab.frame&&tab.engine===engine)return tab.frame;
  if(tab.frame)destroyProxyFrame(tab);
  if(engine==='ultraviolet')await initializeUltraviolet();
  const controller=engine==='scramjet'?await initializeScramjet():null;
  const iframe=document.createElement('iframe');
  iframe.className='proxy-frame';
  iframe.title=`Proxied page: ${tab.title}`;
  iframe.setAttribute('sandbox','allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts allow-downloads allow-pointer-lock');
  iframe.setAttribute('allow','fullscreen; autoplay; gamepad; clipboard-read; clipboard-write');
  $('#proxy-frame-container').append(iframe);
  iframe.addEventListener('load',()=>logProxyDiagnostic('info',`Proxy frame loaded (${engine})`,tab.address||'No address recorded'));
  tab.frameElement=iframe;
  tab.engine=engine;
  if(engine==='scramjet'){
    const utils=window.$scramjetUtils;
    tab.frame=controller.createFrame(iframe,{plugins:[new utils.UrlWatcherPlugin(url=>updateProxyTabAddress(tab,url))]});
  }else{
    const config=window.__uv$config;
    tab.frame={
      element:iframe,
      go:url=>{iframe.src=`${config.prefix}${config.encodeUrl(url)}`;},
      back:()=>iframe.contentWindow?.history.back(),
      forward:()=>iframe.contentWindow?.history.forward(),
      reload:()=>iframe.contentWindow?.location.reload()
    };
  }
  updateProxySurface();
  return tab.frame;
}
function destroyProxyFrame(tab){
  if(tab.urlMonitor)clearInterval(tab.urlMonitor);
  clearTimeout(tab.loadingTimer);
  tab.loadingTimer=null;
  tab.loading=false;
  if(tab.frame&&tab.engine==='scramjet'&&scramjetController){
    const index=scramjetController.frames.indexOf(tab.frame);
    if(index!==-1)scramjetController.frames.splice(index,1);
  }
  tab.frameElement?.remove();
  tab.frame=null;
  tab.frameElement=null;
  tab.engine=null;
}
async function navigateProxy(url){
  const tab=proxyTabs.find(item=>item.id===activeProxyTabId);
  if(!tab)return;
  go('proxy');
  tab.loading=true;
  updateProxySurface();
  logProxyDiagnostic('info','Navigation requested',`URL: ${url}\nEngine: ${userSettings.defaultEngine||'scramjet'}`);
  updateProxyTabAddress(tab,url);
  try{
    const frame=await ensureProxyFrame(tab);
    updateProxySurface();
    const iframe=tab.frameElement;
    const finish=()=>{
      let href='';
      try{href=iframe.contentWindow?.location.href||iframe.src||''}catch(error){href=iframe.src||''}
      if(!href||href==='about:blank')return;
      iframe.removeEventListener('load',finish);
      tab.loading=false;
      clearTimeout(tab.loadingTimer);
      tab.loadingTimer=null;
      updateProxySurface();
    };
    iframe.addEventListener('load',finish);
    clearTimeout(tab.loadingTimer);
    tab.loadingTimer=setTimeout(()=>{
      tab.loadingTimer=null;
      tab.loading=false;
      iframe.removeEventListener('load',finish);
      updateProxySurface();
    },40000);
    frame.go(url);
  }catch(error){
    tab.loading=false;
    clearTimeout(tab.loadingTimer);
    tab.loadingTimer=null;
    updateProxySurface();
    logProxyDiagnostic('error','Proxy startup/navigation failed',diagnosticText(error));
    console.error('Scramjet could not start:',error);
    notify(`Scramjet could not start: ${error.message||'check the browser console for details.'}`);
  }
}
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
  $$('.view').forEach(v=>{const isActive=v.id===`view-${view}`;v.hidden=!isActive;v.classList.toggle('active',isActive);});
  $$('[data-view]').forEach(b=>b.classList.toggle('active',b.dataset.view===view));
  document.querySelector('.workspace').classList.toggle('proxy-active',view==='proxy');
  const activePanel=$('#view-'+view);if(activePanel)activePanel.scrollTo({top:0,behavior:$('#reduce-motion').checked?'auto':'smooth'});
}
function tabFaviconCandidates(address){
  try{
    const page=new URL(address);
    if(!['http:','https:'].includes(page.protocol))return [];
    const origin=page.origin;
    return [
      new URL('/favicon.ico',origin).href,
      `https://www.google.com/s2/favicons?domain_url=${encodeURIComponent(origin)}&sz=64`
    ];
  }catch(error){return [];}
}
function loadProxyTabFavicons(){
  const list=$('#proxy-tab-list');
  list.querySelectorAll('[data-tab-favicon]').forEach(image=>{
    const tab=proxyTabs.find(item=>item.id===Number(image.dataset.tabFavicon));
    const candidates=tab?tabFaviconCandidates(tab.address):[];
    let index=0;
    image.hidden=true;
    const tryNext=()=>{
      if(index>=candidates.length){image.hidden=true;return;}
      image.src=candidates[index++];
    };
    image.onload=()=>{image.hidden=false;};
    image.onerror=tryNext;
    if(candidates.length)tryNext();
  });
}
function renderProxyTabs(){
  const list=$('#proxy-tab-list');
  list.innerHTML=proxyTabs.map(tab=>`<div class="proxy-tab-item">
    <button class="rail-btn proxy-tab ${tab.id===activeProxyTabId?'active':''}" type="button" data-proxy-tab="${tab.id}" role="tab" aria-selected="${tab.id===activeProxyTabId?'true':'false'}" title="${escapeHTML(tab.title)}" aria-label="${escapeHTML(tab.title)}">
      <img class="tab-favicon" data-tab-favicon="${tab.id}" alt="" hidden referrerpolicy="no-referrer">
      ${tab.address?'':`<svg class="icon tab-default-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4.5" ry="9"/><path d="M3 12h18"/></svg>`}
    </button>
    ${proxyTabs.length>1?`<button class="tab-close" type="button" data-close-proxy-tab="${tab.id}" title="Close tab" aria-label="Close ${escapeHTML(tab.title)}"><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg></button>`:''}
  </div>`).join('');
  loadProxyTabFavicons();
  updateProxySurface();
}
function addProxyTab(){
  const tab={id:nextProxyTabId++,title:'New Tab',address:'',frame:null,frameElement:null,loading:false};
  proxyTabs.push(tab);activeProxyTabId=tab.id;
  $('#address-bar').value='';$('#proxy-home-search').value='';
  renderProxyTabs();go('proxy');
}
function activateProxyTab(id){
  const tab=proxyTabs.find(item=>item.id===id);if(!tab)return;
  activeProxyTabId=id;$('#address-bar').value=tab.address||'';$('#proxy-home-search').value='';
  renderProxyTabs();go('proxy');
}
function closeProxyTab(id){
  if(proxyTabs.length===1){const only=proxyTabs[0];destroyProxyFrame(only);only.title='New Tab';only.address='';activeProxyTabId=only.id;$('#address-bar').value='';$('#proxy-home-search').value='';renderProxyTabs();go('proxy');return;}
  const index=proxyTabs.findIndex(item=>item.id===id);if(index<0)return;
  const [removed]=proxyTabs.splice(index,1);destroyProxyFrame(removed);
  if(activeProxyTabId===id){const next=proxyTabs[Math.max(0,index-1)];activeProxyTabId=next.id;$('#address-bar').value=next.address||'';$('#proxy-home-search').value='';}
  renderProxyTabs();go('proxy');
}
function isURL(text){return /^(https?:\/\/|[\w-]+\.[a-z]{2,})(\/|$)/i.test(text.trim())}
function openSearchOrURL(value){const text=value.trim();if(!text)return;const url=isURL(text)?(text.match(/^https?:\/\//i)?text:`https://${text}`):`https://duckduckgo.com/?q=${encodeURIComponent(text)}`;navigateProxy(url);}
function updateClock(){const now=new Date();$('#clock').textContent=now.toLocaleTimeString([], {hour:'numeric',minute:'2-digit'});}
function persistSettings(){try{localStorage.setItem(SETTINGS_KEY,JSON.stringify(userSettings))}catch(e){notify('Could not save preferences in this browser.')}}
function imageFromSource(src){
  return new Promise((resolve,reject)=>{
    const image=new Image();
    image.onload=()=>resolve(image);
    image.onerror=()=>reject(new Error('That image could not be loaded. Check the URL or choose another image.'));
    image.src=src;
  });
}
function renderCursorCustomizer(){
  const editor=$('#cursor-image-editor');
  const preview=$('#cursor-image-preview');
  const empty=$('#cursor-image-preview-empty');
  const status=$('#cursor-image-status');
  const detail=$('#cursor-image-detail');
  const clear=$('#clear-custom-cursor');
  const source=userSettings.cursorImage||'';
  editor.hidden=userSettings.cursorStyle!=='custom';
  if(source){
    preview.src=source;preview.hidden=false;empty.hidden=true;
    status.textContent=source.startsWith('data:')?'Uploaded image saved locally':'Image URL is active';
    detail.textContent='This image is applied as your cursor and saved in this browser.';
    clear.disabled=false;
    if(source.startsWith('http'))$('#cursor-image-url').value=source;
  }else{
    preview.removeAttribute('src');preview.hidden=true;empty.hidden=false;
    status.textContent='No custom image selected';
    detail.textContent='Choose an image URL or upload a file to use it as your pointer.';
    clear.disabled=true;
    $('#cursor-image-url').value='';
  }
}
function saveCustomCursor(source,description){
  userSettings.cursorImage=source;
  userSettings.cursorStyle='custom';
  persistSettings();
  applySettings();
  notify(description);
}
function applySettings(){
  const root=document.documentElement;
  root.style.setProperty('--accent',userSettings.accent);
  root.style.setProperty('--accent-rgb',userSettings.accentRgb);
  root.style.setProperty('--accent-tint',`rgba(${userSettings.accentRgb},.13)`);
  root.style.setProperty('--accent-tint-strong',`rgba(${userSettings.accentRgb},.22)`);
  root.style.setProperty('--accent-line',`rgba(${userSettings.accentRgb},.62)`);
  root.style.setProperty('--accent-glow',`rgba(${userSettings.accentRgb},.28)`);
  root.style.setProperty('--accent-glow-soft',`rgba(${userSettings.accentRgb},.14)`);
  const strength=Math.max(0,Math.min(100,Number(userSettings.glowIntensity)||0))/100;
  root.style.setProperty('--glow-opacity',(0.115*strength).toFixed(3));
  root.style.setProperty('--glow-mid-opacity',(0.055*strength).toFixed(3));
  root.style.setProperty('--glow-low-opacity',(0.018*strength).toFixed(3));
  root.dataset.cursor=userSettings.cursorStyle==='custom'&&!userSettings.cursorImage?'default':userSettings.cursorStyle;
  if(userSettings.cursorStyle==='custom'&&userSettings.cursorImage){
    const safeCursorUrl=String(userSettings.cursorImage).replace(/\\/g,'\\\\').replace(/"/g,'\\"').replace(/[\r\n]/g,'');
    root.style.setProperty('--custom-cursor',`url("${safeCursorUrl}") 0 0, auto`);
  }else{
    root.style.removeProperty('--custom-cursor');
  }
  document.body.classList.toggle('hide-grid',!userSettings.backgroundGrid);
  userSettings.backgroundStyle=['grid','waves','circles','dots','fluid','image','off'].includes(userSettings.backgroundStyle)?userSettings.backgroundStyle:(userSettings.backgroundGrid?'grid':'off');
  root.dataset.background=userSettings.backgroundStyle;
  root.dataset.motion=userSettings.reduceMotion?'reduced':'full';
  if(userSettings.backgroundImage)root.style.setProperty('--custom-background-image',`url("${userSettings.backgroundImage}")`);
  else root.style.removeProperty('--custom-background-image');
  document.body.classList.toggle('hide-clock',!userSettings.showClock);
  if(!userSettings.cursorGlow||strength===0)document.body.classList.remove('cursor-glow-active');
  $('#reduce-motion').checked=!!userSettings.reduceMotion;
  $('#confirm-close-game').checked=!!userSettings.confirmClose;
  userSettings.defaultEngine=userSettings.defaultEngine==='ultraviolet'?'ultraviolet':'scramjet';
  userSettings.defaultTransport=userSettings.defaultTransport==='epoxy'?'epoxy':'libcurl';
  $('#default-engine').value=userSettings.defaultEngine;
  $('#default-transport').value=userSettings.defaultTransport;
  if($('#studi-api-key'))$('#studi-api-key').value=userSettings.studiKey||'';
  if($('#studi-endpoint'))$('#studi-endpoint').value=userSettings.studiEndpoint||'';
  if($('#studi-model'))$('#studi-model').value=userSettings.studiModel||'';
  updateStudiStatus();
  $('#cursor-style').value=userSettings.cursorStyle||'default';
  renderCursorCustomizer();
  $('#cursor-glow-enabled').checked=!!userSettings.cursorGlow;
  $('#cursor-glow-intensity').value=String(userSettings.glowIntensity);
  $('#cursor-glow-value').textContent=`${userSettings.glowIntensity}%`;
  $('#background-style').value=userSettings.backgroundStyle;
  $('#show-clock').checked=!!userSettings.showClock;
  $$('.accent-swatch').forEach(button=>button.classList.toggle('active',button.dataset.accent.toLowerCase()===userSettings.accent.toLowerCase()));
  document.documentElement.style.scrollBehavior=userSettings.reduceMotion?'auto':'smooth';
}
function updateSetting(key,value,{quiet=false}={}){userSettings[key]=value;persistSettings();applySettings();if(!quiet)notify('Preference saved.');}
function resetSettings(){userSettings={...DEFAULT_SETTINGS};persistSettings();applySettings();notify('Silverite settings restored.');}

async function loadChangelogs(){
  const list=$('#changelog-list');
  const toggle=$('#changelog-older-toggle');
  try{
    let entries;
    if(Array.isArray(window.__SILVERITE_CHANGELOGS__)){
      entries=window.__SILVERITE_CHANGELOGS__;
    }else{
      let response=await fetch(appUrl('api/changelogs'),{cache:'no-store'});
      if(!response.ok)response=await fetch(appUrl('data/changelogs.json'),{cache:'no-store'});
      if(!response.ok)throw new Error(`HTTP ${response.status}`);
      entries=await response.json();
    }
    if(!Array.isArray(entries))throw new Error('Invalid changelog data');
    entries.sort((a,b)=>Date.parse(b.date||'')-Date.parse(a.date||''));
    list.replaceChildren();
    if(!entries.length){
      const empty=document.createElement('div');empty.className='changelog-empty';empty.textContent='No changelogs published yet. Add entries to data/changelogs.json on the server.';list.append(empty);toggle.hidden=true;return;
    }
    entries.forEach((entry,index)=>{
      const article=document.createElement('article');article.className='changelog-entry';article.hidden=index>0;
      const heading=document.createElement('div');heading.className='changelog-entry-heading';
      const titlebar=document.createElement('div');titlebar.className='changelog-entry-titlebar';
      const title=document.createElement('h2');title.textContent=`Version ${entry.version||'Unversioned'}`;titlebar.append(title);
      const ranks={regular:{label:'Regular update',className:'regular'},hotfix:{label:'Bug fix / hotfix',className:'hotfix'},major:{label:'Major update',className:'major'},games:{label:'Game additions',className:'games'}};
      const rank=ranks[entry.type]||ranks.regular;const badge=document.createElement('span');badge.className=`changelog-rank changelog-rank--${rank.className}`;badge.textContent=rank.label;titlebar.append(badge);heading.append(titlebar);
      if(entry.date){const date=document.createElement('time');date.className='changelog-date';date.dateTime=entry.date;date.textContent=entry.date;heading.append(date);}
      article.append(heading);
      if(entry.title){const subtitle=document.createElement('p');subtitle.className='changelog-entry-title';subtitle.textContent=entry.title;article.append(subtitle);}
      const makeList=changes=>{const items=document.createElement('ul');items.className='changelog-changes';changes.forEach(change=>{const item=document.createElement('li');item.textContent=String(change);items.append(item);});return items;};
      const sections=Array.isArray(entry.sections)?entry.sections.filter(section=>section&&Array.isArray(section.changes)&&section.changes.length):[];
      if(sections.length){
        const tabs=document.createElement('div');tabs.className='changelog-tabs';tabs.setAttribute('role','group');tabs.setAttribute('aria-label','Update categories');
        const panels=document.createElement('div');panels.className='changelog-panels';
        sections.forEach((section,sectionIndex)=>{
          const tab=document.createElement('button');tab.type='button';tab.className='changelog-tab'+(sectionIndex===0?' is-active':'');tab.textContent=section.label||`Section ${sectionIndex+1}`;tab.setAttribute('aria-pressed',sectionIndex===0?'true':'false');
          const panel=makeList(section.changes);panel.classList.add('changelog-panel');panel.hidden=sectionIndex!==0;
          tab.addEventListener('click',()=>{
            tabs.querySelectorAll('.changelog-tab').forEach((item,itemIndex)=>{item.classList.toggle('is-active',itemIndex===sectionIndex);item.setAttribute('aria-pressed',itemIndex===sectionIndex?'true':'false');});
            panels.querySelectorAll('.changelog-panel').forEach((item,itemIndex)=>{item.hidden=itemIndex!==sectionIndex;});
          });
          tabs.append(tab);panels.append(panel);
        });
        article.append(tabs,panels);
      }else{
        const changes=Array.isArray(entry.changes)?entry.changes:[entry.changes].filter(Boolean);
        if(changes.length)article.append(makeList(changes));
      }
      list.append(article);
    });
    const noOlder=document.createElement('div');noOlder.className='changelog-empty changelog-no-older';noOlder.textContent='No older changelogs published yet.';noOlder.hidden=true;list.append(noOlder);
    toggle.hidden=entries.length<2;
    toggle.setAttribute('aria-expanded','false');toggle.textContent='View old changelogs';
  }catch(error){
    console.error('Could not load changelogs:',error);
    list.replaceChildren();const empty=document.createElement('div');empty.className='changelog-empty';empty.textContent='Could not load changelogs. Make sure Silverite is running with npm start.';list.append(empty);toggle.hidden=true;
  }
}
$('#changelog-older-toggle').addEventListener('click',e=>{
  const expanded=e.currentTarget.getAttribute('aria-expanded')==='true';
  e.currentTarget.setAttribute('aria-expanded',String(!expanded));
  e.currentTarget.textContent=expanded?'View old changelogs':'Hide old changelogs';
  const oldEntries=$$('#changelog-list .changelog-entry').slice(1);
  oldEntries.forEach(entry=>{entry.hidden=expanded;});
  const noOlder=$('#changelog-list .changelog-no-older');if(noOlder)noOlder.hidden=expanded||oldEntries.length>0;
});
loadChangelogs();
$$('[data-view]').forEach(b=>b.addEventListener('click',()=>go(b.dataset.view)));
$('#new-proxy-tab').addEventListener('click',addProxyTab);
$('#proxy-tab-list').addEventListener('click',e=>{const close=e.target.closest('[data-close-proxy-tab]');if(close){closeProxyTab(Number(close.dataset.closeProxyTab));return;}const tab=e.target.closest('[data-proxy-tab]');if(tab)activateProxyTab(Number(tab.dataset.proxyTab));});
$('#address-form').addEventListener('submit',e=>{e.preventDefault();openSearchOrURL($('#address-bar').value)});
$('#proxy-home-search-form').addEventListener('submit',e=>{e.preventDefault();openSearchOrURL($('#proxy-home-search').value)});
$('#toggle-diagnostics')?.addEventListener('click',()=>setDiagnosticsOpen($('#proxy-diagnostics').hidden));
$('#close-diagnostics')?.addEventListener('click',()=>setDiagnosticsOpen(false));
$$('[data-proxy-url]').forEach(b=>b.addEventListener('click',()=>navigateProxy(b.dataset.proxyUrl)));
$$('[data-external]').forEach(b=>b.addEventListener('click',()=>window.open(b.dataset.external,'_blank','noopener,noreferrer')));
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
$('#accent-swatches').addEventListener('click',e=>{const swatch=e.target.closest('[data-accent]');if(!swatch)return;userSettings.accent=swatch.dataset.accent;userSettings.accentRgb=swatch.dataset.rgb;persistSettings();applySettings();notify(`${swatch.title} accent applied.`)});
$('#cursor-style').addEventListener('change',e=>{
  const style=e.target.value;
  updateSetting('cursorStyle',style);
  if(style==='custom'&&!userSettings.cursorImage)notify('Add an image URL or upload an image to activate your custom cursor.');
});
$('#apply-cursor-url').addEventListener('click',async()=>{
  const raw=$('#cursor-image-url').value.trim();
  if(!raw){notify('Enter a direct image URL first.');return;}
  let parsed;
  try{parsed=new URL(raw)}catch(e){notify('Enter a valid image URL.');return;}
  if(!['http:','https:'].includes(parsed.protocol)){notify('Image URLs must start with http:// or https://.');return;}
  const button=$('#apply-cursor-url');button.disabled=true;button.textContent='CHECKING…';
  try{
    const image=await imageFromSource(parsed.href);
    if(image.naturalWidth>128||image.naturalHeight>128){notify(`Image is ${image.naturalWidth}×${image.naturalHeight}. Use an image no larger than 128×128 for cursor support.`);return;}
    saveCustomCursor(parsed.href,'Custom cursor image applied.');
  }catch(error){notify(error.message||'Could not load that image URL.');}
  finally{button.disabled=false;button.textContent='USE URL';}
});
$('#cursor-image-url').addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();$('#apply-cursor-url').click();}});
$('#cursor-image-upload').addEventListener('change',async e=>{
  const file=e.target.files&&e.target.files[0];if(!file)return;
  if(!file.type.startsWith('image/')){notify('Choose an image file.');e.target.value='';return;}
  if(file.size>5*1024*1024){notify('That image is larger than 5 MB. Choose a smaller file.');e.target.value='';return;}
  try{
    const dataUrl=await new Promise((resolve,reject)=>{const reader=new FileReader();reader.onload=()=>resolve(String(reader.result));reader.onerror=()=>reject(new Error('The image file could not be read.'));reader.readAsDataURL(file);});
    const image=await imageFromSource(dataUrl);
    const maxSize=64,scale=Math.min(1,maxSize/image.naturalWidth,maxSize/image.naturalHeight);
    const width=Math.max(1,Math.round(image.naturalWidth*scale)),height=Math.max(1,Math.round(image.naturalHeight*scale));
    const canvas=document.createElement('canvas');canvas.width=width;canvas.height=height;
    const context=canvas.getContext('2d');
    if(!context)throw new Error('Image processing is not available in this browser.');
    context.clearRect(0,0,width,height);context.imageSmoothingEnabled=true;context.imageSmoothingQuality='high';context.drawImage(image,0,0,width,height);
    const optimized=canvas.toDataURL('image/png');
    saveCustomCursor(optimized,`Uploaded cursor saved (${width}×${height}).`);
  }catch(error){notify(error.message||'Could not process that image.');}
  finally{e.target.value='';}
});
$('#clear-custom-cursor').addEventListener('click',()=>{
  userSettings.cursorImage='';userSettings.cursorStyle='default';persistSettings();applySettings();notify('Custom cursor removed.');
});
$('#cursor-glow-enabled').addEventListener('change',e=>updateSetting('cursorGlow',e.target.checked));
$('#cursor-glow-intensity').addEventListener('input',e=>{userSettings.glowIntensity=Number(e.target.value);$('#cursor-glow-value').textContent=`${userSettings.glowIntensity}%`;applySettings()});
$('#cursor-glow-intensity').addEventListener('change',()=>{persistSettings();notify('Glow intensity saved.')});
$('#background-style').addEventListener('change',e=>{
  if(e.target.value==='image'&&!userSettings.backgroundImage){$('#background-image-upload').click();e.target.value=userSettings.backgroundStyle;return;}
  userSettings.backgroundGrid=e.target.value!=='off';
  updateSetting('backgroundStyle',e.target.value);
});
$('#background-image-upload').addEventListener('change',e=>{
  const file=e.target.files?.[0];if(!file)return;
  if(!file.type.startsWith('image/')){notify('Choose an image file.');e.target.value='';return;}
  const reader=new FileReader();
  reader.onerror=()=>notify('Could not read that image.');
  reader.onload=()=>{
    const image=new Image();
    image.onerror=()=>notify('Could not load that image.');
    image.onload=()=>{
      const scale=Math.min(1,1600/image.naturalWidth,1000/image.naturalHeight);
      const canvas=document.createElement('canvas');canvas.width=Math.max(1,Math.round(image.naturalWidth*scale));canvas.height=Math.max(1,Math.round(image.naturalHeight*scale));
      const context=canvas.getContext('2d');context.drawImage(image,0,0,canvas.width,canvas.height);
      userSettings.backgroundImage=canvas.toDataURL('image/jpeg',.82);
      userSettings.backgroundStyle='image';userSettings.backgroundGrid=true;persistSettings();applySettings();notify('Background image saved.');
    };
    image.src=reader.result;
  };
  reader.readAsDataURL(file);
});
$('#clear-background-image').addEventListener('click',()=>{
  userSettings.backgroundImage='';if(userSettings.backgroundStyle==='image')userSettings.backgroundStyle='grid';
  userSettings.backgroundGrid=true;$('#background-image-upload').value='';persistSettings();applySettings();notify('Background image removed.');
});
$('#show-clock').addEventListener('change',e=>updateSetting('showClock',e.target.checked));
$('#default-engine').addEventListener('change',e=>{
  updateSetting('defaultEngine',e.target.value);
  const tab=proxyTabs.find(item=>item.id===activeProxyTabId);
  if(tab?.address){navigateProxy(tab.address);return;}
  notify(`${e.target.selectedOptions[0].text} selected for the next page.`);
});
$('#default-transport').addEventListener('change',e=>{
  updateSetting('defaultTransport',e.target.value);
  const initializedEngine=userSettings.defaultEngine==='ultraviolet'?Boolean(ultravioletConnection):Boolean(scramjetController);
  if(initializedEngine){
    const engine=userSettings.defaultEngine;
    const changed=engine==='ultraviolet'?initializeUltraviolet():initializeScramjet();
    changed.then(()=>notify(`${e.target.selectedOptions[0].text} transport selected.`)).catch(error=>notify(`Could not switch transport: ${error.message}`));
  }else notify(`${e.target.selectedOptions[0].text} transport will be used on the next page.`);
});
$('#reduce-motion').addEventListener('change',e=>updateSetting('reduceMotion',e.target.checked,{quiet:true}));
$('#confirm-close-game').addEventListener('change',e=>updateSetting('confirmClose',e.target.checked));
$('#studi-api-key')?.addEventListener('change',()=>{
  userSettings.studiKey=$('#studi-api-key').value.trim();
  persistSettings();
  updateStudiStatus();
  notify(userSettings.studiKey?'HomeworkBot key saved in this browser.':'HomeworkBot key removed.');
});
$('#studi-endpoint')?.addEventListener('change',()=>{
  const value=$('#studi-endpoint').value.trim();
  userSettings.studiEndpoint=/^https?:\/\//i.test(value)?value:'';
  persistSettings();
  applySettings();
  if(value&&!userSettings.studiEndpoint)notify('Use a full URL that starts with https://');
});
$('#studi-model')?.addEventListener('change',()=>{
  userSettings.studiModel=$('#studi-model').value.trim();
  persistSettings();
  updateStudiStatus();
});
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

$('#back-btn').addEventListener('click',()=>{if(activeView==='player'){closeGame();return;}if(activeView!=='proxy'){go('proxy');return;}proxyTabs.find(tab=>tab.id===activeProxyTabId)?.frame?.back();});
$('#forward-btn').addEventListener('click',()=>{if(activeView==='proxy')proxyTabs.find(tab=>tab.id===activeProxyTabId)?.frame?.forward();});
$('#reload-btn').addEventListener('click',()=>{if(activeView==='proxy'){const tab=proxyTabs.find(item=>item.id===activeProxyTabId);if(tab?.frame){tab.frame.reload();return;}updateClock();return;}if(activeView==='g4m3s')renderg4m3s();notify('Silverite refreshed.')});
$('#toggle-left').addEventListener('click',()=>{const rail=$('#left-rail');rail.classList.toggle('hidden');document.querySelector('.workspace').classList.toggle('left-hidden',rail.classList.contains('hidden'));});
$('#address-bar').addEventListener('input',()=>{const tab=proxyTabs.find(item=>item.id===activeProxyTabId);if(tab)tab.address=$('#address-bar').value;});
$('#fullscreen-btn').addEventListener('click',()=>{if(!document.fullscreenElement)document.documentElement.requestFullscreen?.();else document.exitFullscreen?.()});
$('#home-message')?.addEventListener('click',cycleHomeMessage);
$('#home-message')?.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();cycleHomeMessage();}});
$('#secret-cat')?.addEventListener('click',playSecretCat);
document.addEventListener('keydown',e=>{
  if((e.ctrlKey||e.metaKey)&&!e.altKey&&e.key.toLowerCase()==='k'){e.preventDefault();toggleCommandPalette();return;}
  if(e.key==='Escape'&&commandPaletteOpen){e.preventDefault();closeCommandPalette();return;}
  if(e.key==='Escape'&&activeView==='player'&&!document.fullscreenElement)closeGame();
});
function homeMessageChoices(){
  return Array.isArray(HOME_MESSAGES)
    ? HOME_MESSAGES.filter(message => typeof message === 'string' && message.trim()).map(message => message.trim())
    : [];
}
let homeMessageCombo = 0;
let homeMessageTimer = 0;
function hideHomeCombo(){
  const combo = $('#home-combo');
  if(!combo)return;
  combo.classList.remove('is-visible');
  combo.textContent = '';
}
function showHomeCombo(count){
  const combo = $('#home-combo');
  if(!combo)return;
  combo.textContent = `COMBO ×${count}`;
  combo.classList.remove('is-visible');
  void combo.offsetWidth;
  combo.classList.add('is-visible');
}
function renderHomeMessage(){
  const element = $('#home-message');
  if(!element)return;
  const choices = homeMessageChoices();
  if(!choices.length){element.hidden = true;return;}
  element.hidden = false;
  element.textContent = choices[Math.floor(Math.random() * choices.length)];
  homeMessageCombo = 0;
  hideHomeCombo();
}
function cycleHomeMessage(){
  const element = $('#home-message');
  if(!element || element.hidden)return;
  const choices = homeMessageChoices();
  if(choices.length < 2)return;
  const current = element.textContent.trim();
  const next = choices[Math.floor(Math.random() * choices.length)];
  clearTimeout(homeMessageTimer);
  if(next === current){
    // Landing on the same message again builds a combo instead of silently doing nothing.
    homeMessageCombo += 1;
    element.classList.remove('home-message--swap');
    void element.offsetWidth;
    element.classList.add('home-message--combo');
    showHomeCombo(homeMessageCombo + 1);
    homeMessageTimer = setTimeout(()=>{
      element.classList.remove('home-message--combo');
      hideHomeCombo();
    },1250);
    return;
  }
  homeMessageCombo = 0;
  hideHomeCombo();
  element.classList.remove('home-message--combo');
  element.classList.remove('home-message--swap');
  void element.offsetWidth;
  element.textContent = next;
  element.classList.add('home-message--swap');
  homeMessageTimer = setTimeout(()=>element.classList.remove('home-message--swap'),480);
}
function spawnSecretCatHearts(cat){
  if(!cat)return;
  const host = $('#secret-cat-hearts') || cat;
  for(let i=0;i<6;i++){
    const heart = document.createElement('span');
    heart.className = 'secret-cat-heart';
    heart.textContent = '♥';
    heart.style.setProperty('--heart-x', `${Math.round(Math.random() * 54 - 27)}px`);
    heart.style.setProperty('--heart-delay', `${Math.round(i * 90 + Math.random() * 90)}ms`);
    heart.style.setProperty('--heart-size', `${Math.round(8 + Math.random() * 7)}px`);
    heart.addEventListener('animationend', ()=>heart.remove(), {once:true});
    host.append(heart);
  }
}
let secretCatTimer = 0;
let secretCatClicks = 0;
let secretCatExploding = false;
let secretCatAudio = null;
const SECRET_CAT_EXPLODE_AT = 10;
function secretCatSound(){
  if(!secretCatAudio){
    secretCatAudio = new Audio('assets/secret/deltarune-explosion.mp3');
    secretCatAudio.preload = 'auto';
    secretCatAudio.volume = .8;
  }
  return secretCatAudio;
}
function primeSecretCatSound(){
  const audio = secretCatSound();
  try{
    audio.volume = 0;
    const started = audio.play();
    if(started && started.then){
      started.then(()=>{audio.pause();audio.currentTime = 0;audio.volume = .8;}).catch(()=>{audio.volume = .8;});
    }else{
      audio.pause();audio.currentTime = 0;audio.volume = .8;
    }
  }catch(error){audio.volume = .8;}
}
function spawnSecretCatParticles(cat){
  const host = $('#secret-cat-hearts') || cat;
  for(let i=0;i<24;i++){
    const particle = document.createElement('span');
    particle.className = 'secret-cat-particle';
    const angle = Math.random() * Math.PI * 2;
    const radius = 32 + Math.random() * 42;
    particle.style.setProperty('--p-x', `${Math.cos(angle) * radius}px`);
    particle.style.setProperty('--p-y', `${Math.sin(angle) * radius}px`);
    particle.style.setProperty('--p-delay', `${Math.round(Math.random() * 700)}ms`);
    particle.style.setProperty('--p-size', `${Math.round(2 + Math.random() * 4)}px`);
    particle.addEventListener('animationend', ()=>particle.remove(), {once:true});
    host.append(particle);
  }
}
function resetSecretCatExplosion(cat, bubble){
  cat.classList.remove('is-exploded');
  cat.classList.add('is-respawning');
  const explosion = $('#secret-cat-explosion');
  if(explosion){explosion.hidden = true;explosion.classList.remove('is-firing');explosion.onanimationend = null;}
  const row = cat.closest('.settings-footer-row');
  if(row)row.classList.remove('is-shaking');
  if(bubble)bubble.textContent = '...';
  setTimeout(()=>{
    cat.classList.remove('is-respawning');
    if(bubble && bubble.textContent === '...')bubble.textContent = '';
    secretCatExploding = false;
  },700);
}
function explodeSecretCat(cat){
  secretCatExploding = true;
  secretCatClicks = 0;
  const bubble = $('#secret-cat-bubble');
  if(bubble)bubble.textContent = 'uh oh...';
  primeSecretCatSound();
  clearTimeout(secretCatTimer);
  cat.classList.remove('is-playing');
  void cat.offsetWidth;
  cat.classList.add('is-charging');
  spawnSecretCatParticles(cat);
  secretCatTimer = setTimeout(()=>{
    cat.classList.remove('is-charging');
    cat.classList.add('is-exploded');
    const audio = secretCatSound();
    try{
      audio.currentTime = 0;
      audio.volume = .85;
      const started = audio.play();
      if(started && started.catch)started.catch(()=>{});
    }catch(error){}
    const explosion = $('#secret-cat-explosion');
    if(explosion){
      explosion.hidden = false;
      explosion.classList.remove('is-firing');
      void explosion.offsetWidth;
      explosion.classList.add('is-firing');
      // The GIF loops forever, so hide it as soon as our single-play animation ends.
      explosion.onanimationend = event=>{
        if(event.animationName !== 'secret-cat-explosion')return;
        explosion.hidden = true;
        explosion.classList.remove('is-firing');
        explosion.onanimationend = null;
      };
      // Reduced-motion modes skip the animation, so hide the looping GIF on a timer too.
      setTimeout(()=>{
        if(explosion.hidden)return;
        explosion.hidden = true;
        explosion.classList.remove('is-firing');
      }, 1750);
    }
    const row = cat.closest('.settings-footer-row');
    if(row){row.classList.remove('is-shaking');void row.offsetWidth;row.classList.add('is-shaking');}
    secretCatTimer = setTimeout(()=>resetSecretCatExplosion(cat, bubble), 2400);
  }, 1800);
}
function playSecretCat(){
  const cat = $('#secret-cat');
  if(!cat || secretCatExploding)return;
  secretCatClicks += 1;
  if(secretCatClicks >= SECRET_CAT_EXPLODE_AT){explodeSecretCat(cat);return;}
  const bubble = $('#secret-cat-bubble');
  const remaining = SECRET_CAT_EXPLODE_AT - secretCatClicks;
  const lines = remaining <= 3
    ? ['careful...','stop that...','too much...','uh oh...']
    : ['mrrp!','purr...','meow :3','prrrr','nyaa~','mrrow?'];
  if(bubble)bubble.textContent = lines[Math.floor(Math.random() * lines.length)];
  cat.classList.remove('is-playing');
  void cat.offsetWidth;
  cat.classList.add('is-playing');
  spawnSecretCatHearts(cat);
  clearTimeout(secretCatTimer);
  secretCatTimer = setTimeout(()=>cat.classList.remove('is-playing'),2600);
}

/* ===== COMMAND PALETTE =====
   Ctrl/Cmd+K opens a launcher that can jump between pages and settings,
   switch proxy tabs, run quick actions, and open any game in the library. */
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
    {id:'nav-proxy',label:'Open Proxy home',meta:'Page · browse the web',icon:'home',keywords:'start browser proxy home',run:()=>go('proxy')},
    {id:'nav-games',label:'Browse g4m3s',meta:'Page · game library',icon:'gamepad',keywords:'library catalog games',run:()=>go('g4m3s')},
    {id:'nav-homework',label:'Open HomeworkBot',meta:'Page · Studi 1.0 study helper',icon:'zap',keywords:'homework study quiz help ai studi',run:()=>go('homeworkbot')},
    {id:'nav-changelog',label:'View Changelog',meta:'Page · build history',icon:'grid',keywords:'updates releases history',run:()=>go('changelog')},
    {id:'nav-credits',label:'View Credits',meta:'Page · people behind Silverite',icon:'heart',keywords:'thanks about team',run:()=>go('credits')},
    {id:'nav-settings',label:'Open Settings',meta:'Page · preferences',icon:'settings',keywords:'options config preferences',run:()=>go('settings')}
  ];
  const actions=[
    {id:'action-new-tab',label:'New proxy tab',meta:'Action · open a fresh tab',icon:'plus',keywords:'browser add',run:addProxyTab},
    {id:'action-search-games',label:'Search g4m3s',meta:'Action · focus the game search',icon:'search',keywords:'find game library',run:()=>{go('g4m3s');$('#game-search')?.focus();}},
    {id:'action-sidebar',label:'Toggle sidebar',meta:'Action · show or hide proxy tabs',icon:'panel',keywords:'rail left tabs hide show',run:()=>$('#toggle-left')?.click()},
    {id:'action-reload',label:'Reload current page',meta:'Action · refresh the active view',icon:'reload',keywords:'refresh reload',run:()=>$('#reload-btn')?.click()},
    {id:'action-diagnostics',label:'Toggle proxy diagnostics',meta:'Action · read-only logs',icon:'terminal',keywords:'logs debug console troubleshooting',run:()=>$('#toggle-diagnostics')?.click()},
    {id:'action-fullscreen',label:'Toggle fullscreen',meta:'Action · fill the screen',icon:'expand',keywords:'display screen',run:()=>$('#fullscreen-btn')?.click()}
  ];
  const settingsSections=[['appearance','Appearance'],['interface','Interface'],['proxy','Proxy'],['advanced','Advanced']].map(([key,label])=>({
    id:`settings-${key}`,label:`Settings · ${label}`,meta:'Jump to settings section',icon:'settings',keywords:`preferences ${key}`,
    run:()=>{
      go('settings');
      const target=$(`#settings-${key}`);
      target?.scrollIntoView({behavior:userSettings.reduceMotion?'auto':'smooth',block:'start'});
    }
  }));
  const tabs=proxyTabs.map(tab=>({
    id:`proxy-tab-${tab.id}`,label:tab.title||'New Tab',meta:tab.address||'Proxy tab',icon:'globe',keywords:`tab ${tab.address||''}`,
    run:()=>activateProxyTab(tab.id)
  }));
  return {navigation,actions,settingsSections,tabs};
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
  const {navigation,actions,settingsSections,tabs}=commandBaseItems();
  if(!query){
    const groups=[];
    const append=(title,items)=>{if(items.length)groups.push({title,items});};
    append('NAVIGATE',navigation);
    append('ACTIONS',actions);
    append('SETTINGS',settingsSections);
    append('OPEN TABS',tabs.slice(0,6));
    append('FAVORITES',g4m3s.filter(game=>favorites.has(game.name)).slice(0,6).map(game=>commandGameItem(game,'Favorite')));
    return groups;
  }
  const candidates=[...navigation,...actions,...settingsSections,...tabs,...commandGames()];
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

$('#command-hint')?.addEventListener('click',openCommandPalette);
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
(function setCommandHintKey(){
  const key=$('#command-hint-key');
  if(!key)return;
  const platform=(navigator.userAgentData?.platform||navigator.platform||navigator.userAgent||'');
  key.textContent=/mac|iphone|ipad|ipod/i.test(platform)?'⌘K':'CTRL K';
})();

/* ===== HOMEWORKBOT / STUDI 1.0 =====
   Normal mode keeps answers short. Study mode explains more and can quiz.
   Math, unit conversions, and quizzes run on-device; anything else uses the
   optional model endpoint from Settings -> HomeworkBot. */
const STUDI_MAX_IMAGE_BYTES=6*1024*1024;
let studiMode='normal';
let studiBusy=false;
let studiPendingImage='';
let studiPendingImageName='';
const studiHistory=[];

function studiNumber(value){
  if(!Number.isFinite(value))return 'undefined';
  if(Number.isInteger(value))return String(value);
  return String(Math.round(value*1e6)/1e6);
}

function studiFormat(text){
  const inline=line=>line.replace(/\*\*([^*]+)\*\*/g,'<b>$1</b>').replace(/`([^`]+)`/g,'<code>$1</code>');
  const lines=escapeHTML(String(text||'')).split(/\r?\n/);
  let html='',bullets='';
  const flush=()=>{if(bullets){html+=`<ul>${bullets}</ul>`;bullets='';}};
  for(const line of lines){
    const bullet=line.match(/^\s*[-*•]\s+(.*)$/);
    if(bullet){bullets+=`<li>${inline(bullet[1])}</li>`;continue;}
    flush();
    if(line.trim())html+=`<p>${inline(line)}</p>`;
  }
  flush();
  return html||'<p></p>';
}

function studiAddMessage(role,content,{raw=false,image=''}={}){
  const log=$('#studi-log');
  if(!log)return null;
  const message=document.createElement('div');
  message.className=`studi-msg studi-msg--${role}`;
  message.innerHTML=`<div class="studi-msg-avatar">${role==='bot'?svgIcon('zap',14):'YOU'}</div>`;
  const body=document.createElement('div');
  body.className='studi-msg-body';
  body.innerHTML=raw?content:studiFormat(content);
  if(image){
    const picture=document.createElement('img');
    picture.className='studi-msg-image';
    picture.src=image;
    picture.alt='Attached homework';
    body.appendChild(picture);
  }
  message.appendChild(body);
  log.appendChild(message);
  log.scrollTop=log.scrollHeight;
  return message;
}

function studiConnected(){
  return Boolean(String(userSettings.studiEndpoint||'').trim()&&String(userSettings.studiKey||'').trim());
}

function updateStudiStatus(){
  const connected=studiConnected();
  $('.studi-badge')?.classList.toggle('is-online',connected);
  const status=$('#studi-status');
  if(status)status.textContent=connected?'MODEL CONNECTED':'OFFLINE READY';
  const note=$('#studi-engine-note');
  if(note)note.textContent=connected?`using ${userSettings.studiModel||'your model'}`:'works offline';
}

function setStudiMode(mode){
  studiMode=mode==='study'?'study':'normal';
  $$('.studi-mode').forEach(button=>{
    const on=button.dataset.studiMode===studiMode;
    button.classList.toggle('is-active',on);
    button.setAttribute('aria-selected',on?'true':'false');
  });
  const input=$('#studi-input');
  if(input)input.placeholder=studiMode==='study'?'Ask for a quiz or a deeper explanation…':'Ask a question, or attach a photo…';
}

/* --- on-device math --- */
function studiParseMath(source,steps){
  const src=String(source||'').replace(/[×·]/g,'*').replace(/÷/g,'/').replace(/[−–]/g,'-').replace(/,/g,'').replace(/\s+/g,'');
  if(!src||!/\d/.test(src)||/[^0-9.+\-*/%^()]/.test(src))return null;
  let i=0;
  const record=(left,op,right,value)=>{
    if(!steps)return;
    const symbol=op==='*'?'×':op==='/'?'÷':op==='-'?'−':op;
    steps.push(`${studiNumber(left)} ${symbol} ${studiNumber(right)} = ${studiNumber(value)}`);
  };
  function expression(){
    let value=term();
    for(;;){
      const op=src[i];
      if(op!=='+'&&op!=='-')return value;
      i++;
      const right=term();
      const next=op==='+'?value+right:value-right;
      record(value,op,right,next);
      value=next;
    }
  }
  function term(){
    let value=factor();
    for(;;){
      const op=src[i];
      if(op!=='*'&&op!=='/'&&op!=='%')return value;
      i++;
      const right=factor();
      const next=op==='*'?value*right:op==='/'?value/right:value%right;
      record(value,op,right,next);
      value=next;
    }
  }
  function factor(){
    let value=unary();
    if(src[i]==='^'){
      i++;
      const right=factor();
      record(value,'^',right,Math.pow(value,right));
      value=Math.pow(value,right);
    }
    return value;
  }
  function unary(){
    if(src[i]==='+'){i++;return unary();}
    if(src[i]==='-'){i++;return -unary();}
    return primary();
  }
  function primary(){
    if(src[i]==='('){
      i++;
      const value=expression();
      if(src[i]===')')i++;
      return value;
    }
    const start=i;
    while(i<src.length&&/[0-9.]/.test(src[i]))i++;
    if(i===start)throw new Error('math');
    return Number(src.slice(start,i));
  }
  try{
    const value=expression();
    if(i!==src.length||!Number.isFinite(value))return null;
    return value;
  }catch(error){return null;}
}

function studiLinear(expr){
  const clean=String(expr||'').replace(/\s+/g,'').replace(/\*/g,'');
  if(!clean||/[^0-9xX+\-./]/.test(clean))return null;
  const terms=clean.replace(/-/g,'+-').split('+').filter(term=>term!=='');
  let a=0,b=0;
  for(const term of terms){
    const lower=term.toLowerCase();
    if(lower.includes('x')){
      if(lower.split('x').length!==2)return null;
      const text=lower.replace('x','');
      const coefficient=text===''||text==='+'?1:text==='-'?-1:Number(text);
      if(!Number.isFinite(coefficient))return null;
      a+=coefficient;
    }else{
      const value=studiParseMath(term);
      if(value===null)return null;
      b+=value;
    }
  }
  return {a,b};
}

function studiSolveEquation(text){
  const cleaned=String(text||'')
    .replace(/^\s*(solve|find\s+x|what\s+is\s+x|what'?s\s+x)\b[:\s]*/i,'')
    .replace(/[?.!]+\s*$/,'')
    .trim();
  if(!cleaned.includes('='))return null;
  const parts=cleaned.split('=');
  if(parts.length!==2)return null;
  const left=studiLinear(parts[0]),right=studiLinear(parts[1]);
  if(!left||!right)return null;
  const a=left.a-right.a,b=right.b-left.b;
  if(a===0)return null;
  return {a,b,x:b/a};
}

function studiPercent(text){
  const match=String(text||'').match(/([\d.]+)\s*(?:%|percent)\s*(?:of)\s*([\d.]+)/i);
  if(!match)return null;
  const percent=Number(match[1]),whole=Number(match[2]);
  if(!Number.isFinite(percent)||!Number.isFinite(whole))return null;
  return {percent,whole,value:(percent/100)*whole};
}

const STUDI_UNITS={
  length:{m:1,mm:0.001,cm:0.01,km:1000,in:0.0254,inch:0.0254,inches:0.0254,ft:0.3048,foot:0.3048,feet:0.3048,yd:0.9144,mi:1609.344,mile:1609.344,miles:1609.344},
  mass:{g:1,mg:0.001,kg:1000,oz:28.349523125,lb:453.59237,pound:453.59237,pounds:453.59237},
  volume:{l:1,ml:0.001,cl:0.01,cup:0.2365882365,cups:0.2365882365,pt:0.473176473,qt:0.946352946,gal:3.785411784,gallon:3.785411784,gallons:3.785411784},
  time:{s:1,sec:1,secs:1,second:1,seconds:1,min:60,mins:60,minute:60,minutes:60,h:3600,hr:3600,hrs:3600,hour:3600,hours:3600,day:86400,days:86400}
};

function studiConvert(text){
  const clean=String(text||'').replace(/^\s*(convert|change)\s+/i,'').replace(/[?.!]+\s*$/,'').trim();
  const match=clean.match(/^(-?[\d.]+)\s*([a-z°]+)\s*(?:to|into|in)\s*([a-z°]+)$/i);
  if(!match)return null;
  const value=Number(match[1]);
  if(!Number.isFinite(value))return null;
  const from=match[2].replace(/[°\s]/g,'').toLowerCase();
  const to=match[3].replace(/[°\s]/g,'').toLowerCase();
  const temps=['c','celsius','f','fahrenheit','k','kelvin'];
  if(temps.includes(from)&&temps.includes(to)){
    const toCelsius=from==='c'||from==='celsius'?value:from==='f'||from==='fahrenheit'?(value-32)*5/9:value-273.15;
    const result=to==='c'||to==='celsius'?toCelsius:to==='f'||to==='fahrenheit'?toCelsius*9/5+32:toCelsius+273.15;
    return {category:'temperature',from,to,value,result,rate:null};
  }
  for(const [category,units] of Object.entries(STUDI_UNITS)){
    if(units[from]!==undefined&&units[to]!==undefined){
      const rate=units[from]/units[to];
      return {category,from,to,value,result:value*rate,rate};
    }
  }
  return null;
}

function studiExtractExpression(text){
  return String(text||'')
    .replace(/^\s*(what(?:'s| is)|whats|calculate|compute|evaluate|solve|how much is|find)\s+/i,'')
    .replace(/[?.!]+\s*$/,'')
    .trim();
}

function studiMakeQuiz(){
  const questions=[];
  const seen=new Set();
  const rand=(min,max)=>Math.floor(Math.random()*(max-min+1))+min;
  const add=(prompt,answer,how)=>{
    if(seen.has(prompt)||questions.length>=5)return;
    seen.add(prompt);
    questions.push({prompt,answer,how});
  };
  let guard=0;
  while(questions.length<5&&guard++<80){
    const kind=rand(1,5);
    if(kind===1){const a=rand(14,89),b=rand(14,89);add(`${a} + ${b} =`,studiNumber(a+b),'Add the ones first, then the tens.');}
    else if(kind===2){const a=rand(41,99),b=rand(11,39);add(`${a} − ${b} =`,studiNumber(a-b),'Line up the digits and subtract.');}
    else if(kind===3){const a=rand(4,12),b=rand(4,12);add(`${a} × ${b} =`,studiNumber(a*b),'Split one number into tens and ones.');}
    else if(kind===4){const b=rand(2,12),q=rand(2,12);add(`${b*q} ÷ ${b} =`,studiNumber(q),'Ask how many times the divisor fits.');}
    else{const percent=[10,20,25,50][rand(0,3)],whole=rand(2,20)*20;add(`${percent}% of ${whole} =`,studiNumber((percent/100)*whole),`${percent}% = ${percent/100}, so multiply by ${whole}.`);}
  }
  return questions;
}

function studiQuizHtml(){
  const questions=studiMakeQuiz();
  const list=questions.map(question=>`<li>${escapeHTML(question.prompt)}</li>`).join('');
  const answers=questions.map(question=>`<li>${escapeHTML(question.prompt)} <b>${escapeHTML(question.answer)}</b> <span class="studi-note">${escapeHTML(question.how)}</span></li>`).join('');
  return `<p>Quick quiz — five questions. Try them first, then check.</p><ol>${list}</ol><button class="studi-reveal" type="button" data-studi-reveal>SHOW ANSWERS</button><ol class="studi-answers" hidden>${answers}</ol>`;
}

function studiOfflineAnswer(text){
  const trimmed=String(text||'').trim();
  if(!trimmed)return null;

  if(/^(quiz|quiz me|test me|practice|give me a quiz|make a quiz)\b/i.test(trimmed)){
    if(studiMode!=='study'){
      setStudiMode('study');
      return {html:`<p>Switched you to <b>Study</b> mode.</p>${studiQuizHtml()}`};
    }
    return {html:studiQuizHtml()};
  }

  const equation=studiSolveEquation(trimmed);
  if(equation&&Number.isFinite(equation.x)){
    if(studiMode==='study'){
      return {html:`<p>Solve <b>${escapeHTML(studiExtractExpression(trimmed))}</b>.</p><ol><li>Get the x alone: <b>${studiNumber(equation.a)}x = ${studiNumber(equation.b)}</b></li><li>Divide both sides by ${studiNumber(equation.a)}: <b>x = ${studiNumber(equation.x)}</b></li></ol><p class="studi-note">Check by putting ${studiNumber(equation.x)} back in for x.</p>`};
    }
    return {html:`<p><span class="studi-answer">x = ${studiNumber(equation.x)}</span></p>`};
  }

  const percent=studiPercent(trimmed);
  if(percent){
    if(studiMode==='study'){
      return {html:`<p>${studiNumber(percent.percent)}% means ${studiNumber(percent.percent)} out of 100, which is ${studiNumber(percent.percent/100)}.</p><p>${studiNumber(percent.percent/100)} × ${studiNumber(percent.whole)} = <span class="studi-answer">${studiNumber(percent.value)}</span></p>`};
    }
    return {html:`<p>${studiNumber(percent.percent)}% of ${studiNumber(percent.whole)} is <span class="studi-answer">${studiNumber(percent.value)}</span>.</p>`};
  }

  const conversion=studiConvert(trimmed);
  if(conversion){
    if(studiMode==='study'&&conversion.rate!==null){
      return {html:`<p>1 ${escapeHTML(conversion.from)} ≈ ${studiNumber(conversion.rate)} ${escapeHTML(conversion.to)}.</p><p>${studiNumber(conversion.value)} × ${studiNumber(conversion.rate)} = <span class="studi-answer">${studiNumber(conversion.result)} ${escapeHTML(conversion.to)}</span></p>`};
    }
    return {html:`<p>${studiNumber(conversion.value)} ${escapeHTML(conversion.from)} = <span class="studi-answer">${studiNumber(conversion.result)} ${escapeHTML(conversion.to)}</span></p>`};
  }

  const expression=studiExtractExpression(trimmed);
  const steps=[];
  const value=studiParseMath(expression,steps);
  if(value!==null){
    if(studiMode==='study'){
      const detail=steps.length?`<ol>${steps.map(step=>`<li>${escapeHTML(step)}</li>`).join('')}</ol>`:'';
      return {html:`<p>${escapeHTML(expression)} = <span class="studi-answer">${studiNumber(value)}</span></p>${detail}<p class="studi-note">Do × and ÷ before + and −, and solve anything in parentheses first.</p>`};
    }
    return {html:`<p>${escapeHTML(expression)} = <span class="studi-answer">${studiNumber(value)}</span></p>`};
  }

  return null;
}

function studiSystemPrompt(){
  const rules=[
    'You are Studi 1.0, the homework helper built into Silverite.',
    'Answer briefly and simply by default: usually one to three short sentences.',
    'Give more detail only when the user asks for it.',
    'Show steps when they make the answer easier to follow.',
    'If the question is unclear, ask one short clarifying question.',
    'Say when you are unsure instead of guessing.',
    'Reply in the language the user writes in.',
    'If asked to do something unsafe or to cheat on a graded test, decline briefly and offer to help them learn instead.'
  ];
  if(studiMode==='study')rules.push('Study mode is on: explain the reasoning in a few steps, then offer one short practice question.');
  return rules.join(' ');
}

async function studiAskModel(text,image){
  const endpoint=String(userSettings.studiEndpoint||'').trim();
  const key=String(userSettings.studiKey||'').trim();
  if(!endpoint||!key)return null;
  const model=String(userSettings.studiModel||'').trim();
  const content=image
    ?[{type:'text',text:text||'Help me with the homework in this image.'},{type:'image_url',image_url:{url:image}}]
    :(text||'');
  const body={
    messages:[
      {role:'system',content:studiSystemPrompt()},
      ...studiHistory.slice(-8),
      {role:'user',content}
    ],
    max_tokens:studiMode==='study'?900:400,
    temperature:0.3
  };
  if(model)body.model=model;
  const controller=new AbortController();
  const timer=setTimeout(()=>controller.abort(),45000);
  try{
    const response=await fetch(endpoint,{
      method:'POST',
      mode:'cors',
      credentials:'omit',
      cache:'no-store',
      headers:{'Content-Type':'application/json',Authorization:`Bearer ${key}`},
      body:JSON.stringify(body),
      signal:controller.signal
    });
    if(!response.ok){
      const detail=await response.text().catch(()=>'');
      throw new Error(`HTTP ${response.status}${detail?`: ${detail.slice(0,160)}`:''}`);
    }
    const data=await response.json();
    const message=data?.choices?.[0]?.message?.content;
    const answer=Array.isArray(message)
      ?message.map(part=>part?.text||'').join('').trim()
      :String(message||'').trim();
    return answer||null;
  }finally{clearTimeout(timer);}
}

async function studiAnswer(text,image){
  const offline=studiOfflineAnswer(text);
  if(offline)return offline;

  if(studiConnected()){
    let answer=null;
    try{
      answer=await studiAskModel(text,image);
    }catch(error){
      console.error('Studi 1.0 could not reach the model:',error);
      return {html:'<p>I could not reach your model. Check the key and endpoint in <b>Settings → HomeworkBot</b>.</p>'};
    }
    if(answer){
      studiHistory.push({role:'user',content:text||'Help me with this image.'});
      studiHistory.push({role:'assistant',content:answer});
      if(studiHistory.length>16)studiHistory.splice(0,studiHistory.length-16);
      return {html:studiFormat(answer)};
    }
    return {html:'<p>Your model sent back an empty answer. Try rephrasing, or check the model name in Settings.</p>'};
  }

  if(image)return {html:'<p>Reading photos needs a model key. Add one in <b>Settings → HomeworkBot</b>, or type the question so I can solve what I can offline.</p>'};
  return {html:studiMode==='study'
    ?'<p>Offline I can solve math, convert units, and build quizzes — try <b>quiz me</b>. Add a model key in <b>Settings → HomeworkBot</b> for deeper study help.</p>'
    :'<p>Offline I can solve math, convert units, and build quizzes. For everything else, add a model key in <b>Settings → HomeworkBot</b>.</p>'};
}

function studiAutoGrow(){
  const input=$('#studi-input');
  if(!input)return;
  input.style.height='auto';
  input.style.height=`${Math.min(input.scrollHeight,132)}px`;
}

function studiClearImage(){
  studiPendingImage='';
  studiPendingImageName='';
  const input=$('#studi-image-input');
  if(input)input.value='';
  const attachment=$('#studi-attachment');
  if(attachment)attachment.hidden=true;
  const preview=$('#studi-attachment-preview');
  if(preview)preview.removeAttribute('src');
}

async function studiSubmit(){
  if(studiBusy)return;
  const input=$('#studi-input');
  const text=(input?.value||'').trim();
  const image=studiPendingImage;
  if(!text&&!image)return;
  studiBusy=true;
  const send=$('#studi-send');
  if(send)send.disabled=true;
  $('#studi-suggestions')?.classList.add('is-hidden');
  studiAddMessage('user',text||'Can you help with this?',{image});
  if(input){input.value='';input.style.height='auto';}
  studiClearImage();
  const typing=studiAddMessage('bot','<span class="studi-typing"><i></i><i></i><i></i></span>',{raw:true});
  try{
    const answer=await studiAnswer(text,image);
    if(typing)typing.remove();
    studiAddMessage('bot',answer.html,{raw:true});
  }catch(error){
    console.error('HomeworkBot error:',error);
    if(typing)typing.remove();
    studiAddMessage('bot','<p>Something went wrong. Try that again in a moment.</p>',{raw:true});
  }finally{
    studiBusy=false;
    if(send)send.disabled=false;
    $('#studi-input')?.focus();
  }
}

$('#studi-form')?.addEventListener('submit',event=>{event.preventDefault();studiSubmit();});
$('#studi-input')?.addEventListener('keydown',event=>{
  if(event.key==='Enter'&&!event.shiftKey){event.preventDefault();studiSubmit();}
});
$('#studi-input')?.addEventListener('input',studiAutoGrow);
$$('.studi-mode').forEach(button=>button.addEventListener('click',()=>setStudiMode(button.dataset.studiMode)));
$$('.studi-suggestion').forEach(button=>button.addEventListener('click',()=>{
  const input=$('#studi-input');
  if(input){input.value=button.dataset.studiPrompt||'';studiAutoGrow();}
  studiSubmit();
}));
$('#studi-image-input')?.addEventListener('change',()=>{
  const file=$('#studi-image-input').files?.[0];
  if(!file)return;
  if(!file.type.startsWith('image/')){notify('Choose an image file.');return;}
  if(file.size>STUDI_MAX_IMAGE_BYTES){notify('That image is too big. Try one under 6 MB.');return;}
  const reader=new FileReader();
  reader.onload=()=>{
    studiPendingImage=String(reader.result||'');
    studiPendingImageName=file.name||'image';
    const preview=$('#studi-attachment-preview');
    if(preview)preview.src=studiPendingImage;
    const name=$('#studi-attachment-name');
    if(name)name.textContent=studiPendingImageName;
    if($('#studi-attachment'))$('#studi-attachment').hidden=false;
  };
  reader.onerror=()=>notify('That image could not be read.');
  reader.readAsDataURL(file);
});
$('#studi-attachment-remove')?.addEventListener('click',studiClearImage);
$('#studi-log')?.addEventListener('click',event=>{
  const reveal=event.target.closest('[data-studi-reveal]');
  if(!reveal)return;
  const answers=reveal.parentElement?.querySelector('.studi-answers');
  if(!answers)return;
  answers.hidden=!answers.hidden;
  reveal.textContent=answers.hidden?'SHOW ANSWERS':'HIDE ANSWERS';
});
(function initHomeworkBot(){
  if(!$('#studi-log'))return;
  studiGreeting();
  setStudiMode(studiMode);
  updateStudiStatus();
})();

function studiGreeting(){
  const log=$('#studi-log');
  if(!log)return;
  log.innerHTML='';
  studiAddMessage('bot','Hi, I am <b>Studi 1.0</b>. Ask a question, attach a photo, or say <b>quiz me</b>. I keep answers short unless you ask for more.',{raw:true});
}

renderg4m3s();
renderProxyTabs();
renderHomeMessage();
applySettings();
updateClock();
setInterval(updateClock,1000);
go('proxy');
// Load the public catalogs after the core library is ready. Imported games stay on-demand by default.
loadExternalGameLibraries().finally(()=>{
  if(PRELOAD_IMPORTED_LIBRARY_GAMES){
    const seenPreload = new Set(GAME_PRELOAD_ITEMS.map(item=>item.url));
    for(const game of g4m3s.filter(item=>item.source)){
      if(game.image&&!seenPreload.has(game.image)){GAME_PRELOAD_ITEMS.push({kind:'image',label:game.name+' thumbnail',url:game.image});seenPreload.add(game.image);}
      if(game.url&&!seenPreload.has(game.url)){GAME_PRELOAD_ITEMS.push({kind:'game',label:game.file,url:game.url});seenPreload.add(game.url);}
    }
  }
  startFullAssetPreload();
});
// The loader is a short visual boot sequence. The listed filenames label each startup phase.
(async function runLoader(){
  const files=['silverite-logo.png','interface.html','settings','proxy workspace','g4m3s library'];
  const loader=$('#silverite-loader');
  const status=$('#loader-status');
  const file=$('#loader-file');
  for(let i=0;i<files.length;i++){
    status.classList.add('is-changing');
    file.classList.add('is-changing');
    await new Promise(requestAnimationFrame);
    status.textContent=`loading.. ${i+1}/${files.length}`;
    file.textContent=files[i];
    requestAnimationFrame(()=>{status.classList.remove('is-changing');file.classList.remove('is-changing');});
    $('#loader-fill').style.width=`${((i+1)/files.length)*100}%`;
    await new Promise(resolve=>setTimeout(resolve,205));
  }
  if(document.readyState!=='complete')await new Promise(resolve=>window.addEventListener('load',resolve,{once:true}));
  status.classList.add('is-changing');
  file.classList.add('is-changing');
  await new Promise(requestAnimationFrame);
  status.textContent='READY';
  file.textContent='Silverite is ready';
  $('#loader-fill').style.width='100%';
  requestAnimationFrame(()=>{status.classList.remove('is-changing');file.classList.remove('is-changing');});
  loader.classList.add('loader-finish');
  const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  await new Promise(resolve=>setTimeout(resolve,reducedMotion?80:850));
  loader.classList.add('loader-done');
  setTimeout(()=>$('#silverite-loader')?.remove(),680);
})();

// Soft background glow follows the mouse without intercepting UI input.
let cursorGlowFrame = 0;
let cursorGlowPoint = null;
window.addEventListener('pointermove', (event) => {
  if (event.pointerType === 'touch' || !userSettings.cursorGlow || Number(userSettings.glowIntensity)===0) return;
  cursorGlowPoint = { x: event.clientX, y: event.clientY };
  if (cursorGlowFrame) return;
  cursorGlowFrame = requestAnimationFrame(() => {
    if (cursorGlowPoint) {
      document.documentElement.style.setProperty('--cursor-x', `${cursorGlowPoint.x}px`);
      document.documentElement.style.setProperty('--cursor-y', `${cursorGlowPoint.y}px`);
      document.body.classList.add('cursor-glow-active');
    }
    cursorGlowFrame = 0;
  });
}, { passive: true });
window.addEventListener('pointerout', (event) => {
  if (!event.relatedTarget) document.body.classList.remove('cursor-glow-active');
}, { passive: true });
