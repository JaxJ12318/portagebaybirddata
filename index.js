"use strict";

(function() {
  window.addEventListener("load", init);

  let data =
  {
    "bird_data": {
      "green_winged_teal": {
        "name": "Green Winged Teal",
        "possibility": {
          "jan": "96",
          "feb": "100",
          "mar": "96",
          "apr": "45",
          "may": "0",
          "jun": "0",
          "jul": "0",
          "aug": "6",
          "sep": "46",
          "oct": "89",
          "nov": "100",
          "dec": "96"
        },
        "location": "in_water",
        "call": "green_winged_teal_call.mp3",
        "size": "medium",
        "description": "Green-winged Teal are very small ducks. They have short, blocky bodies and their tails sit high out of the water.",
        "seasonality": "1"
      },
      "canada_goose": {
        "name": "Canada Goose",
        "possibility": {
          "jan": "87",
          "feb": "93",
          "mar": "100",
          "apr": "100",
          "may": "94",
          "jun": "91",
          "jul": "95",
          "aug": "75",
          "sep": "67",
          "oct": "72",
          "nov": "53",
          "dec": "70"
        },
        "location": "in_water",
        "call": "canada_goose_call.mp3",
        "size": "extra_large",
        "description": "Like most geese, the Canada goose is naturally migratory with the wintering range being most of the United States.",
        "seasonality": "0"
      },
      "mallard": {
        "name": "Mallard",
        "possibility": {
          "jan": "83",
          "feb": "88",
          "mar": "100",
          "apr": "100",
          "may": "100",
          "jun": "100",
          "jul": "97",
          "aug": "94",
          "sep": "95",
          "oct": "97",
          "nov": "97",
          "dec": "84"
        },
        "location": "in_water",
        "call": "mallard_call.mp3",
        "size": "medium",
        "description": "The mallard is a medium-sized waterfowl species that is often slightly heavier than most other dabbling ducks.",
        "seasonality": "0"
      },
      "american_wigeon": {
        "name": "American Wigeon",
        "possibility": {
          "jan": "77",
          "feb": "65",
          "mar": "56",
          "apr": "0",
          "may": "0",
          "jun": "0",
          "jul": "0",
          "aug": "0",
          "sep": "0",
          "oct": "28",
          "nov": "60",
          "dec": "63"
        },
        "location": "in_water",
        "call": "american_wigeon_call.mp3",
        "size": "medium",
        "description": "The American wigeon is a bird of open wetlands, such as wet grassland or marshes with some taller vegetation, and usually feeds by dabbling for plant food or grazing, which it does very readily.",
        "seasonality": "1"
      },
      "bufflehead": {
        "name": "Bufflehead",
        "possibility": {
          "jan": "100",
          "feb": "85",
          "mar": "93",
          "apr": "47",
          "may": "5",
          "jun": "0",
          "jul": "0",
          "aug": "0",
          "sep": "0",
          "oct": "21",
          "nov": "100",
          "dec": "95"
        },
        "location": "in_water",
        "call": "bufflehead_call.mp3",
        "size": "small",
        "description": "They are migratory and most of them winter in protected coastal waters, or open inland waters, on the east and west coasts of North America and the southern United States.",
        "seasonality": "1"
      },
      "hooded_merganser": {
        "name": "Hooded Merganser",
        "possibility": {
          "jan": "64",
          "feb": "74",
          "mar": "39",
          "apr": "0",
          "may": "2",
          "jun": "0",
          "jul": "0",
          "aug": "0",
          "sep": "4",
          "oct": "29",
          "nov": "76",
          "dec": "83"
        },
        "location": "in_water",
        "call": "hooded_merganser.mp3",
        "size": "small",
        "description": "Hooded mergansers are short-distance migrants, and they winter in the United States in regions where winter temperatures allow for ice-free conditions on ponds, lakes and rivers.",
        "seasonality": "1"
      },
      "pied_billed_grebe": {
        "name": "Pied-billed Grebe",
        "possibility": {
          "jan": "100",
          "feb": "97",
          "mar": "98",
          "apr": "70",
          "may": "17",
          "jun": "26",
          "jul": "51",
          "aug": "74",
          "sep": "87",
          "oct": "93",
          "nov": "100",
          "dec": "100"
        },
        "location": "in_water",
        "call": "pied_billed_grebe.mp3",
        "size": "small",
        "description": "Pied-billed grebes rarely fly. They make a slow dive frequently, especially when in danger, diving to about 20 ft (6.1 m) or less.",
        "seasonality": "0"
      },
      "double_crested_cormorant": {
        "name": "Double crested cormorant",
        "possibility": {
          "jan": "100",
          "feb": "100",
          "mar": "98",
          "apr": "50",
          "may": "7",
          "jun": "0",
          "jul": "2",
          "aug": "0",
          "sep": "34",
          "oct": "93",
          "nov": "97",
          "dec": "81"
        },
        "location": "in_water",
        "call": "double_crested_cormorant.mp3",
        "size": "large",
        "description": "The double-crested cormorant is a large waterbird with a stocky body, long neck, medium-sized tail, webbed feet, and a medium-sized hooked bill.",
        "seasonality": "1"
      },
      "green_heron": {
        "name": "Green Heron",
        "possibility": {
          "jan": "0",
          "feb": "0",
          "mar": "0",
          "apr": "0",
          "may": "12",
          "jun": "14",
          "jul": "16",
          "aug": "18",
          "sep": "23",
          "oct": "5",
          "nov": "0",
          "dec": "12"
        },
        "location": "in_water",
        "call": "green_heron.mp3",
        "size": "small",
        "description": "The neck is often pulled in tight against the body. Adults have a glossy, greenish-black cap, a greenish back and wings that are grey-black grading into green or blue, a chestnut neck with a white line down the front, grey underparts and short yellow legs.",
        "seasonality": "1"
      },
      "bald_eagle": {
        "name": "Bald Eagle",
        "possibility": {
          "jan": "55",
          "feb": "64",
          "mar": "55",
          "apr": "18",
          "may": "39",
          "jun": "13",
          "jul": "23",
          "aug": "2",
          "sep": "0",
          "oct": "29",
          "nov": "45",
          "dec": "28"
        },
        "location": "in_sky",
        "call": "bald_eagle.mp3",
        "size": "extra_large",
        "description": "The bald eagle occurs during its breeding season in virtually any kind of American wetland habitat such as seacoasts, rivers, large lakes or marshes or other large bodies of open water with an abundance of fish.",
        "seasonality": "0"
      },
      "coopers_hawk": {
        "name": "Cooper’s Hawk",
        "possibility": {
          "jan": "17",
          "feb": "13",
          "mar": "15",
          "apr": "2",
          "may": "4",
          "jun": "12",
          "jul": "8",
          "aug": "2",
          "sep": "12",
          "oct": "14",
          "nov": "14",
          "dec": "17"
        },
        "location": "in_sky",
        "call": "coopers_hawk.mp3",
        "size": "extra_large",
        "description": "Like a majority of diurnal birds of prey in the Northern Hemisphere, the Cooper's hawk is a partial migrant. They tend to be most migratory in the north and largely to partially sedentary elsewhere.",
        "seasonality": "1"
      },
      "peregrine_falcon": {
        "name": "Peregrine Falcon",
        "possibility": {
          "jan": "2",
          "feb": "8",
          "mar": "18",
          "apr": "27",
          "may": "25",
          "jun": "13",
          "jul": "14",
          "aug": "18",
          "sep": "10",
          "oct": "5",
          "nov": "6",
          "dec": "5"
        },
        "location": "in_sky",
        "call": "peregrine_falcon.mp3",
        "size": "extra_large",
        "description": "The peregrine falcon lives mostly along mountain ranges, river valleys, coastlines, and increasingly in cities.",
        "seasonality": "0"
      },
      "osprey": {
        "name": "Osprey",
        "possibility": {
          "jan": "0",
          "feb": "0",
          "mar": "0",
          "apr": "27",
          "may": "48",
          "jun": "58",
          "jul": "54",
          "aug": "15",
          "sep": "12",
          "oct": "0",
          "nov": "0",
          "dec": "0"
        },
        "location": "in_sky",
        "call": "osprey.mp3",
        "size": "extra_large",
        "description": "The osprey is the second most widely distributed raptor species, after the peregrine falcon, and is one of only six land-birds with a cosmopolitan distribution.",
        "seasonality": "1"
      },
      "killdeer": {
        "name": "Killdeer",
        "possibility": {
          "jan": "36",
          "feb": "27",
          "mar": "20",
          "apr": "0",
          "may": "0",
          "jun": "0",
          "jul": "0",
          "aug": "6",
          "sep": "17",
          "oct": "22",
          "nov": "25",
          "dec": "4"
        },
        "location": "in_water",
        "call": "killdeer.mp3",
        "size": "medium",
        "description": "The nominate subspecies of the killdeer breeds in the US (including southeastern Alaska), southern Canada, and Mexico, with less widespread grounds further south, to Panama. Some northern populations are migratory.",
        "seasonality": "1"
      },
      "wilsons_snipe": {
        "name": "Wilson’s Snipe",
        "possibility": {
          "jan": "2",
          "feb": "2",
          "mar": "23",
          "apr": "6",
          "may": "0",
          "jun": "0",
          "jul": "0",
          "aug": "0",
          "sep": "0",
          "oct": "15",
          "nov": "15",
          "dec": "0"
        },
        "location": "in_water",
        "call": "wilsons_snipe.mp3",
        "size": "small",
        "description": "They breed in marshes, bogs, tundra and wet meadows in Canada and the northern United States and on the Chukchi Peninsula, Russia. They are year-round residents on the U.S. Pacific coast.",
        "seasonality": "1"
      },
      "glaucous_winged_gull": {
        "name": "Glaucous-winged Gull",
        "possibility": {
          "jan": "86",
          "feb": "67",
          "mar": "44",
          "apr": "52",
          "may": "28",
          "jun": "65",
          "jul": "63",
          "aug": "55",
          "sep": "49",
          "oct": "70",
          "nov": "78",
          "dec": "86"
        },
        "location": "in_sky",
        "call": "glaucous_winged_gull.mp3",
        "size": "medium",
        "description": "The glaucous-winged gull is rarely found far from the ocean. It is a resident from the western coast of Alaska to the coast of Washington.",
        "seasonality": "0"
      },
      "rock_pigeon": {
        "name": "Rock Pigeon",
        "possibility": {
          "jan": "62",
          "feb": "33",
          "mar": "38",
          "apr": "97",
          "may": "67",
          "jun": "72",
          "jul": "71",
          "aug": "81",
          "sep": "61",
          "oct": "53",
          "nov": "49",
          "dec": "62"
        },
        "location": "in_sky",
        "call": "rock_pigeon.mp3",
        "size": "medium",
        "description": "The species (including ferals) has a large range, with an estimated global extent of occurrence of 10,000,000 km2 (3,900,000 sq mi). It has a large global population, including an estimated 17 to 28 million individuals in Europe.",
        "seasonality": "0"
      },
      "annas_hummingbird": {
        "name": "Anna’s Hummingbird",
        "possibility": {
          "jan": "88",
          "feb": "95",
          "mar": "95",
          "apr": "100",
          "may": "90",
          "jun": "83",
          "jul": "87",
          "aug": "89",
          "sep": "83",
          "oct": "83",
          "nov": "71",
          "dec": "91"
        },
        "location": "in_sky",
        "call": "annas_hummingbird.mp3",
        "size": "extra_small",
        "description": "Open-wooded or shrubby areas and mountain meadows along the Pacific coast from British Columbia to Arizona make up C. anna's breeding habitat.",
        "seasonality": "0"
      },
      "belted_kingfisher": {
        "name": "Belted Kingfisher",
        "possibility": {
          "jan": "2",
          "feb": "2",
          "mar": "14",
          "apr": "0",
          "may": "14",
          "jun": "7",
          "jul": "44",
          "aug": "51",
          "sep": "70",
          "oct": "66",
          "nov": "58",
          "dec": "34"
        },
        "location": "in_sky",
        "call": "belted_kingfisher.mp3",
        "size": "small",
        "description": "The only kingfisher in the majority of its range, the belted kingfisher's breeding habitat is near inland bodies of waters or coasts across most of North America, within Canada, Alaska and the United Statest.",
        "seasonality": "1"
      },
      "downy_woodpecker": {
        "name": "Downy Woodpecker",
        "possibility": {
          "jan": "35",
          "feb": "40",
          "mar": "35",
          "apr": "9",
          "may": "26",
          "jun": "44",
          "jul": "24",
          "aug": "2",
          "sep": "10",
          "oct": "21",
          "nov": "15",
          "dec": "36"
        },
        "location": "in_sky",
        "call": "downy_woodpecker.mp3",
        "size": "small",
        "description": "Adult downy woodpeckers are the smallest of North America's woodpeckers, but there are many smaller species elsewhere, especially the piculets.",
        "seasonality": "1"
      },
      "stellers_jay": {
        "name": "Steller’s Jay",
        "possibility": {
          "jan": "18",
          "feb": "29",
          "mar": "22",
          "apr": "29",
          "may": "12",
          "jun": "13",
          "jul": "8",
          "aug": "24",
          "sep": "36",
          "oct": "53",
          "nov": "31",
          "dec": "27"
        },
        "location": "in_sky",
        "call": "stellers_jay.mp3",
        "size": "small",
        "description": "Steller's jay occurs in most of the forested areas of western North America as far east as the eastern foothills of the Rocky Mountains from southern Alaska in the north to northern Nicaragua in the south completely replacing the blue jay prevalent on the rest of the continent in those areas.",
        "seasonality": "1"
      },
      "tree_swallow": {
        "name": "Tree Swallow",
        "possibility": {
          "jan": "0",
          "feb": "0",
          "mar": "0",
          "apr": "25",
          "may": "34",
          "jun": "34",
          "jul": "11",
          "aug": "0",
          "sep": "0",
          "oct": "0",
          "nov": "0",
          "dec": "0"
        },
        "location": "in_sky",
        "call": "tree_swallow.mp3",
        "size": "small",
        "description": "The tree swallow breeds in North America. Its range extends to north-central Alaska and up to the tree line in Canada. It is found as far south as Tennessee in the eastern part of its range, California and New Mexico in the west, and Kansas in the centre.",
        "seasonality": "1"
      },
      "bushtit": {
        "name": "Bushtit",
        "possibility": {
          "jan": "37",
          "feb": "41",
          "mar": "62",
          "apr": "72",
          "may": "34",
          "jun": "52",
          "jul": "70",
          "aug": "44",
          "sep": "43",
          "oct": "38",
          "nov": "8",
          "dec": "12"
        },
        "location": "in_sky",
        "call": "bushtit.mp3",
        "size": "small",
        "description": "Bushtits are found in a wide range of habitats, including on occasion sagebrush steppe and other arid shrublands, but are most common in mixed woodland.",
        "seasonality": "0"
      },
      "brown_creeper": {
        "name": "Brown Creeper",
        "possibility": {
          "jan": "23",
          "feb": "16",
          "mar": "18",
          "apr": "0",
          "may": "0",
          "jun": "4",
          "jul": "21",
          "aug": "0",
          "sep": "0",
          "oct": "28",
          "nov": "37",
          "dec": "37"
        },
        "location": "in_sky",
        "call": "brown_creeper.mp3",
        "size": "extra_small",
        "description": "Their breeding habitat is mature forests, especially conifers, in Canada, Alaska and the northeastern and western United States. They are permanent residents through much of their range; many northern birds migrate farther south to the United States.",
        "seasonality": "1"
      },
      "bewicks_wren": {
        "name": "Bewick’s Wren",
        "possibility": {
          "jan": "49",
          "feb": "66",
          "mar": "61",
          "apr": "63",
          "may": "35",
          "jun": "22",
          "jul": "40",
          "aug": "45",
          "sep": "44",
          "oct": "54",
          "nov": "63",
          "dec": "64"
        },
        "location": "in_sky",
        "call": "bewicks_wren.mp3",
        "size": "extra_small",
        "description": "It is still found along the Pacific Coast from Baja California to British Columbia, in Mexico, and in a significant portion of the Southwest, including Texas, Arizona, New Mexico, and Oklahoma.",
        "seasonality": "1"
      },
      "golden_crowned_kinglet": {
        "name": "Golden-crowned Kinglet",
        "possibility": {
          "jan": "41",
          "feb": "47",
          "mar": "13",
          "apr": "0",
          "may": "5",
          "jun": "0",
          "jul": "0",
          "aug": "17",
          "sep": "29",
          "oct": "37",
          "nov": "76",
          "dec": "86"
        },
        "location": "in_sky",
        "call": "golden_crowned_kinglet.mp3",
        "size": "extra_small",
        "description": "It produces a series of high-pitched calls on a single note, and tends not to fear human approach. Its nest is a well-concealed hanging cup suspended from a conifer branch.",
        "seasonality": "1"
      },
      "american_robin": {
        "name": "American Robin",
        "possibility": {
          "jan": "80",
          "feb": "87",
          "mar": "97",
          "apr": "100",
          "may": "88",
          "jun": "97",
          "jul": "87",
          "aug": "35",
          "sep": "39",
          "oct": "49",
          "nov": "49",
          "dec": "71"
        },
        "location": "in_sky",
        "call": "american_robin.mp3",
        "size": "small",
        "description": "This bird breeds throughout most of North America, from Alaska and Canada southward to northern Florida and Mexico.",
        "seasonality": "0"
      },
      "starling": {
        "name": "Starling",
        "possibility": {
          "jan": "55",
          "feb": "65",
          "mar": "63",
          "apr": "61",
          "may": "75",
          "jun": "72",
          "jul": "32",
          "aug": "36",
          "sep": "39",
          "oct": "58",
          "nov": "28",
          "dec": "54"
        },
        "location": "in_sky",
        "call": "starling.mp3",
        "size": "small",
        "description": "Starlings inhabit a wide range of habitats from the Arctic Circle to the Equator. In fact, the only habitat they do not typically occupy is the driest sandy deserts.",
        "seasonality": "1"
      },
      "cedar_waxwing": {
        "name": "Cedar Waxwing",
        "possibility": {
          "jan": "0",
          "feb": "0",
          "mar": "4",
          "apr": "0",
          "may": "15",
          "jun": "31",
          "jul": "43",
          "aug": "14",
          "sep": "16",
          "oct": "10",
          "nov": "0",
          "dec": "0"
        },
        "location": "in_sky",
        "call": "cedar_waxwing.mp3",
        "size": "small",
        "description": "Preferred habitat consists of trees at the edge of wooded areas, or \"open\" forests, especially those that provide access to berry sources as well as water. They are frequently seen in fruiting trees.",
        "seasonality": "1"
      },
      "spotted_towhee": {
        "name": "Spotted Towhee",
        "possibility": {
          "jan": "66",
          "feb": "44",
          "mar": "29",
          "apr": "25",
          "may": "21",
          "jun": "15",
          "jul": "53",
          "aug": "36",
          "sep": "32",
          "oct": "67",
          "nov": "65",
          "dec": "84"
        },
        "location": "in_sky",
        "call": "spotted_towhee.mp3",
        "size": "small",
        "description": "They nest either on the ground or low in bushes, seldom more than 1.5 m (4.9 ft) above the ground and most nests are around 40 cm (1.3 ft) above the ground. The location for the nests is usually found in exposed areas, but conceal the nest as it is being built.",
        "seasonality": "1"
      },
      "song_sparrow": {
        "name": "Song Sparrow",
        "possibility": {
          "jan": "100",
          "feb": "97",
          "mar": "98",
          "apr": "100",
          "may": "96",
          "jun": "100",
          "jul": "97",
          "aug": "97",
          "sep": "93",
          "oct": "97",
          "nov": "100",
          "dec": "100"
        },
        "location": "in_sky",
        "call": "song_sparrow.mp3",
        "size": "extra_small",
        "description": "Though a habitat generalist, the song sparrow favors brushland and marshes, including salt marshes across most of Canada and the United States. They also thrive in human dominated areas such as in suburbs, agricultural fields, and along roadsides.",
        "seasonality": "0"
      },
      "dark_eyed_junco": {
        "name": "Dark Eyed Junco",
        "possibility": {
          "jan": "77",
          "feb": "71",
          "mar": "49",
          "apr": "0",
          "may": "10",
          "jun": "2",
          "jul": "26",
          "aug": "6",
          "sep": "24",
          "oct": "52",
          "nov": "53",
          "dec": "82"
        },
        "location": "in_sky",
        "call": "dark_eyed_junco.mp3",
        "size": "small",
        "description": "The dark-eyed junco's breeding habitat is coniferous or mixed forest areas throughout North America.",
        "seasonality": "1"
      },
      "american_goldfinch": {
        "name": "American Goldfinch",
        "possibility": {
          "jan": "56",
          "feb": "46",
          "mar": "83",
          "apr": "43",
          "may": "24",
          "jun": "17",
          "jul": "33",
          "aug": "64",
          "sep": "38",
          "oct": "39",
          "nov": "41",
          "dec": "59"
        },
        "location": "in_sky",
        "call": "american_goldfinch.mp3",
        "size": "small",
        "description": "The American goldfinch prefers open country where weeds thrive, such as fields, meadows, flood plains, as well as roadsides, orchards, and gardens. It may also be found in open deciduous and riparian woodlands and areas of secondary growth.",
        "seasonality": "0"
      }
    }
  };

  let keys = Object.keys(data.bird_data);
  let monthdata = Object.keys(data.bird_data.green_winged_teal.possibility);
  let total = [];
  let currentMonth = 0;

  /**
   * this function set up the page according to the window height and width
   */
  function init() {
    let startbtn = id('start');
    startbtn.addEventListener("click", enterSim);
  }

  /** */
  function enterSim() {
    let welcomePage = id('welcome');
    welcomePage.innerHTML = "";
    welcomePage.classList.add('hidden');
    let timebar = id('timebar');
    timebar.style.top = '90vh';
    initiate();
  }

  /**
   * this function set up the page according to the window height and width
   */
  function initiate() {

    let count = keys.length;
    for (let i = 0; i < 12; i++) {
      total[i] = 0;
      for (let j = 0; j < count; j++) {
        total[i] = total[i] + parseInt(data.bird_data[keys[j]].possibility[monthdata[i]]);
      }
    }
    startRand();
  }

  /**
   * this function set up the page according to the window height and width
   */
  function startRand() {
    let width = window.innerWidth;
    width = width * 0.8;
    let time = 0;
    let prgressbar = setInterval(() => {
      time++;
      if (time < 48000) {
        let progressmade = id('progressmade');
        progressmade.style.width = width / 48000 * time + 'px';
        let progressleft = id('progressleft');
        progressleft.style.width = width - width / 48000 * time + 'px';
      } else {
        this.clearInterval();
      }
    }, 10, width, time);
    let ground = qs("body");
    let i = 0;
    while (i < 12) {
      let pregress = setTimeout(eachMonth, 40000 * i, ground);
      i++;
    }
  }

  /** */
  function eachMonth(ground) {
    let master = setInterval(createInstance, 2000, ground);
    let end = setTimeout(function() {
      clearInterval(master);
    }, 40000, master);
  }

  /**
   * this function set up the page according to the window height and width
   */
  function createInstance(ground) {
    let delay = Math.floor(Math.random() * 800000/total[currentMonth]);
    let the_bird = setTimeout(appearDot, delay, ground);
  }

  /**
   *
   * @param {*} ground
   */
  function appearDot(ground) {
    let randnum = 0;
    randnum = Math.random() * total[currentMonth];
    let whichbird = 0;
    while (randnum > 0) {
      let thisbirdpossibility = parseInt(data.bird_data[keys[whichbird]]
        .possibility[monthdata[currentMonth]]);
      randnum = randnum - thisbirdpossibility;
      whichbird++;
    }
    console.log(total[currentMonth]);
    let birdname = keys[whichbird - 1];
    let call = new Audio("file/audio/" + birdname + ".mp3");
    ground.appendChild(call);
    setTimeout(play, 100, call);

    let dot = createBirdDot(birdname);
    ground.appendChild(dot);
    dot.addEventListener('click', showInfo);

    setTimeout(removeDot, 10000, dot, ground, call);
  }

  /** */
  function createBirdDot(birdname) {
    let dot = document.createElement('div');
    dot.id = birdname;

    let top = Math.floor(Math.random() * parseInt(window.innerHeight));
    if (data.bird_data[birdname].location == 'in_sky') {
      top = top * 0.5 + window.innerHeight * 0.05;
    } else {
      top = window.innerHeight * 0.6 + top * 0.3
    }
    dot.style.top = top + 'px';
    let left = Math.floor(Math.random() * parseInt(window.innerWidth));
    dot.style.left = left + 'px';


    if (data.bird_data[birdname].seasonality == 1) {
      dot.classList.add('seasonal');
    } else {
      dot.classList.add('allyear');
    }
    console.log(data.bird_data[birdname].size);
    dot.classList.add(data.bird_data[birdname].size + '');
    birdname = '';
    return dot;
  }

  /** */
  function showInfo() {
    let name = this.id;

    let infocard = id('info-card');
    infocard.style.left = window.innerWidth * 0.7 + 'px';

    infocard.addEventListener('clicik', closeInfo);

    let img = id('image');
    img.style.backgroundImage = "url('file/images/" + name + ".jpg')";

    let namep = qs('#name p');
    namep.textContent = data.bird_data[name].name;

    let seasonality = qs('#seasonality p');
    if (data.bird_data[name].seasonality == 1) {
      seasonality.textContent = 'seasonal';
      id("seasonality").style.backgroundColor = "rgb(255, 119, 40)";
    } else {
      seasonality.textContent = 'residential';
      id("seasonality").style.backgroundColor = "rgba(34, 74, 255)";
    }

    let description = qs('#description p');
    description.textContent = data.bird_data[name].description;

    sizeGraph(name);
    let sum = 0
    let bars = qsa('.chance-bar');
    for (let mon = 0; mon < 12; mon++) {
      let onechance = data.bird_data[name].possibility[monthdata[mon]];
      sum = sum + onechance;
      bars[mon].style.height = onechance * 2 + 'px';
    }

    rarity(sum);
  }

  /** */
  function rarity(sum) {
    sum = sum / 12;
    let response = '';
    if (sum > 50) {
      response = 'common';
    } else if (sum > 20) {
      response = 'irregular';
    } else {
      response = 'rare';
    }

    let rarityp = qs('#rarity p');
    rarityp.textContent = response;
  }

  /** */
  function sizeGraph(name) {
    id('extra_small').classList.remove('showsize');
    id('small').classList.remove('showsize');
    id('medium').classList.remove('showsize');
    id('large').classList.remove('showsize');
    id('extra_large').classList.remove('showsize');
    let size = data.bird_data[name].size;
    id(size).classList.add('showsize');
  }

  /** */
  function closeInfo() {
    this.style.left = window.innerWidth * 1.1 + 'px';
  }

  /**
   *
   * @param {*} dot
   */
  function removeDot(dot, ground, call) {
    ground.removeChild(dot);
    ground.removeChild(call);
  }

  /**
   * this function set up the page according to the window height and width
   */
  function play(gadwall) {
    gadwall.volume = 0.5;
    gadwall.play();
  }

  /* --- CSE 154 HELPER FUNCTIONS --- */

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} identification - element ID.
   * @returns {object} - DOM object associated with id.
   */
  function id(identification) {
    return document.getElementById(identification);
  }

  /**
   * Returns first element matching selector.
   * @param {string} selector - CSS query selector.
   * @returns {object} - DOM object associated selector.
   */
  function qs(selector) {
    return document.querySelector(selector);
  }

  /**
   * Returns first element matching selector.
   * @param {string} selector - CSS query selector.
   * @returns {object} - DOM object associated selector.
   */
  function qsa(selector) {
    return document.querySelectorAll(selector);
  }
})();
