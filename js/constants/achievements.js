const ACH_DATA = {
	rows: 20,
	cols: 8,
	names: {
		11: "Quick Sprint",
		12: "Better Shoes",
		13: "Extreme Workout",
		14: "Off to Space!",
		15: "Rocket Blast",
		16: "Humans are Irrelevant",
		17: "Yet you're still moving forward.",
		18: "Intentional Death",

		21: "Driving for Hours",
		22: "Oil Change",
		23: "Three's the Lucky Number",
		24: "Blastoff Again?",
		25: "Refuel",
		26: "Automated Evolution",
		27: "Time of the Fittest",
		28: "Piling the Bodies",

		31: "Just Under a Saturn Revolution",
		32: "Putting in the Fake Fuel",
		33: "IV Test",
		34: "Why fly once when you can fly ten times?",
		35: "Triple the Fuel",
		36: "Automated Power Boosts",
		37: "That's so many?",
		38: "The Pain is Real",

		41: "Parallax Time to the Tenth",
		42: "Strong Winds",
		43: "Like the drink",
		44: "Now this is just pointless.",
		45: "Not Quite Nine Thousand...",
		46: "A magnet's work.",
		47: "Gotta buy em all!",
		48: "Super Smart",

		51: "Out of this World",
		52: "Taking up all the space.",
		53: "2+2=10",
		54: "Cacophany of Pain",
		55: "Zooming at the Speed of Sound",
		56: "Auto-Gas",
		57: "No More Thinking",
		58: "The Multiverse is Ever-Expanding",

		61: "Jimmy the Crow's Debut",
		62: "Alive Plus",
		63: "Time Doesn't Exist",
		64: "Acceleration does nothing.",
		65: "One Death",
		66: "I thought that was a lot?",
		67: "Atoms in the universe, of universes.",
		68: "Corvid Twenty",

		71: "The Infinite Satanic Cult Of Orderly Layers",
		72: "Darkness Grows",
		73: "Too much for you",
		74: "True Blast",
		75: "Got nothin' but blank",
		76: "They have space too??!!",
		77: "Trash is life",
		78: "Pew Pew Pew",

		81: "Beyond the World of Normality",
		82: "HYAAAAA!",
		83: "Infinite Love",
		84: "Pointless Automation",
		85: "I is smort.",
		86: "Infinity is Broke",
		87: "No Thoughts",
		88: "Infinity Likes You",

		91: "Dark Plus",
		92: "Universe of Death",
		93: "Well that was a grind...",
		94: "No, it's not special",
		95: "Too Bright",
		96: "This'll never matter",
		97: "Clean as a Whistle",
		98: "Feel The Heat",

		101: "Stronger than a High God",
		102: "Kinda Grindy",
		103: "I Live In Darkness",
		104: "Roman Conqueror",
		105: "Ruined Society",
		106: "Anti-Automation",
		107: "You are challenged?",
		108: "True Innovation",

		111: "Why do you even try?",
		112: "The Universe Doesn't Exist",
		113: "Outbreak 76",
		114: "ZOOM",
		115: "Club to the face",
		116: "Cubic Infinity",
		117: "The Dead Have Risen",
		118: "The True Challenge?",

		121: "Why?!??!???!?!??",
		122: "Off the Rails",
		123: "Into the Next Century",
		124: "9 o'clock blues",
		125: "What a waste of time...",
		126: "Quick Repair",
		127: "False Purge",
		128: "Truly Nerfed",

		131: "Shrinking the Multiverse",
		132: "What's the point of even stopping you?",
		133: "It's Elementary, my dear Watson.",
		134: "Why use the features I give you?",
		135: "Never Seen Again",
		136: "Fastest in the Multiverse",
		137: "Back to the Past",
		138: "The Fleet Flees",

		141: "The Impossible Happened",
		142: "Endless Endeavours",
		143: "Under the C",
		144: "To The Next Rank",
		145: "The Great Epoch",
		146: "True Infinity+",
		147: "The Biggest Setback",
		148: "The Impossible Task",

		151: "An infinity smaller than your fingertip",
		152: "Useless Theories",
		153: "There is a tree",
		154: "What even are Hadrons?",
		155: "Real Growth",
		156: "IMPOSSIBLE",
		157: "The Principle of the Basics",
		158: "The Repetition Continues",

		161: "We're kids again",
		162: "Actually Useless Theories",
		163: "String Clickers",
		164: "There are only so many",
		165: "Is there even a point to these anymore?",
		166: "True Inflation",
		167: "How is the Multiverse containing your power?",
		168: "There is only one Fome",

		171: "TRANSFOOOOORM!",
		172: "This must have taken years",
		173: "Extensionless Fome",
		174: "The Multiverse is Doomed",
		175: "Removing the Pillars",
		176: "Entering Reality",
		177: "Softcaps mean NOTHING",
		178: "Multiverse Conquered",

		181: "Two In One Deal",
		182: "Multiverse of Madness",
		183: "Fermionic Embassy",
		184: "The Entropy Sublimit",
		185: "Eternal Torture",
		186: "King of the Damned",
		187: "Conquering the Megaverse",
		188: "Not So Proto Now?",

		191: "Vantablack Explosion",
		192: "The Leetest Titan",
		193: "Conqueror of the Lands",
		194: "Nice Beloved Quality",
		195: "Millionaire Multipreneur",
		196: "Hadron Manipulation",
		197: "Billionaire X",
		198: "Overlord of Everything",

		201: "Tier is OP",
		202: "Non-Dimensional Distance",
		203: "Ow, Infinity!",
		204: "Go to Megaverse?",
		205: "The Meta-Infinity",
		206: "Placeholder",
		207: "Placeholder",
		208: "Placeholder",
	},
	descs: {
		11: "Go at least formatDistance(100).",
		12: "Do a rank reset.",
		13: "Do a tier reset.",
		14: "Do a rocket reset.",
		15: "Get at least showNum(1) rocket fuel.",
		16: "Unlock automation.",
		17: "Unlock Time Reversal.",
		18: "Perform a Universal Collapse reset.",

		21: "Go at least boolean(extreme,thirty,five hundred) km.",
		22: "Reach Rankboolean(extreme, six, eight).",
		23: "Reach Tier showNum(3).",
		24: "Reach showNum(2) Rockets.",
		25: "Get at least showNum(2) rocket fuel.",
		26: "Unlock Rankbot.",
		27: "Reach showNum(1000) Time Cubes.",
		28: "Reach showNum(66) Cadavers.",

		31: "Go at least formatDistance(1e12)",
		32: "Reach Rank showNum(12)",
		33: "Reach Tier showNum(4)",
		34: "Reach showNum(10) Rockets.",
		35: "Get at least showNum(3) rocket fuel.",
		36: "Unlock Tierbot.",
		37: "Purchase showNum(5) Time Reversal Upgrades.",
		38: "Reach all showNum(12) Collapse Milestones.",

		41: "Go at least formatDistance(3.086e17).",
		42: "Reach Rank showNum(20)",
		43: "Reach Tier showNum(5).",
		44: "Reach showNum(1e+5) Rockets.",
		45: "Get at least showNum(6) normal rocket fuel.",
		46: "Reach showNum(5000) scraps.",
		47: "Purchase showNum(10) Time Reversal Upgrades.",
		48: "Reach showNum(1e+10) intelligence.",

		51: "Go at least formatDistance(4.4e26).",
		52: "Reach showNum(1e+8) Rockets.",
		53: "Get at least showNum(10) normal rocket fuel.",
		54: "Reach showNum(1e+7) Time Cubes.",
		55: "Get a Time Speed above showNum(1e+5)x.",
		56: "Unlock Fuelbot.",
		57: "Reach showNum(9e15) Time Cubes.",
		58: "Go at least formatDistance(9.768e+48).",

		61: "Unlock Pathogens.",
		62: "Reach showNum(1e+6) Life Essence.",
		63: "Reach showNum(1e28) Time Cubes.",
		64: "Reach Rank showNum(50).",
		65: "Reach showNum(5e+7) Cadavers.",
		66: "Get Fuelbot's interval less than or equal to formatTime(120).",
		67: "Reach formatDistance(4.4e106).",
		68: "Get one of each of the showNum(10) Pathogen upgrades.",

		71: "Unlock The Dark Circle.",
		72: "Reach showNum(50) Dark Matter.",
		73: "Reach formatDistance(4.4e166).",
		74: "Reach showNum(1e60) Rockets.",
		75: "Purchase showNum(5) Dark Cores.",
		76: "Reach showNum(1e100) Rockets.",
		77: "Reach showNum(1e80) Scraps.",
		78: "Reach showNum(75) normal Rocket Fuel.",

		81: "Get endorsed by Infinity.",
		82: "Reach showNum(9000.1) knowledge.",
		83: "Reach showNum(3) endorsements.",
		84: "Have a magnitude above showNum(100) for Fuelbot.",
		85: "Reach showNum(1.79e308) intelligence.",
		86: "Reach formatDistance(4.4e1026).",
		87: "Reach showNum(25e9) knowledge.",
		88: "Reach showNum(10) Endorsements.",

		91: "Have a Dark Flow of at least showNum(8e3)x.",
		92: "Reach showNum(1e80) Cadavers.",
		93: "Reach showNum(666) Ascension Power.",
		94: "Reach showNum(14) Endorsements.",
		95: "Purchase one of each Enlightenment.",
		96: "Have a magnitude above showNum(1e33) for Rankbot.",
		97: "Reach formatDistance(4.4e416) without any Pathogen Upgrades.",
		98: "Reach formatDistance(4.4e786) without any Dark Cores.",

		101: "Complete oneboolean(extreme, first row) Stadium Challenge.",
		102: "Purchase showNum(2) of each Enlightenment.",
		103: "Reach showNum(1e18) Dark Matter.",
		104: "Complete threeboolean(extreme, first row) Stadium Challenges.",
		105: "Reach a Time Speed of showNum(2.22e2222)x.",
		106: "Reach showNum(20) Endorsements.",
		107: "Complete sixboolean(extreme, first row) Stadium Challenges.",
		108: "Unlock Velocital Energy.",

		111: "Have an interval below 1s for Fuelbot.",
		112: "Reach formatDistance(2.2e10022)/s^2 of acceleration.",
		113: "Reach showNum(250)% of Pathogen Upgrade power.",
		114: "Reach formatDistance(4.4e26)/s^2 of Accelerational Energy.",
		115: "Gain Purge Power.",
		116: "Reach showNum(25) Endorsements.",
		117: "Reach showNum(1e3000) Cadavers.",
		118: "Reach formatDistance(1e33600) while in Eternity's Stadium challenge.",

		121: "Reach formatDistance(2.5e4) while in Reality's Stadium challenge at Difficulty Level 6.",
		122: "Purchase two Derivative Shifts.",
		123: "Reach showNum(2.5e5) Ascension Power.",
		124: "Reach boolean(extreme,nine,thirty) Purge Power.",
		125: "Reach formatDistance(1e4) while in a Purge run & in Reality's Stadium challenge at Difficulty Level 6.",
		126: "Have a magnitude of boolean(hard,showNup[1e75],showNup[1e200]) for Rankbot.",
		127: "Reach showNum(1e100000) Time Cubes without any Pathogen Upgrades or Dark Cores.",
		128: "Reach formatDistance(5.55e5555)/s^2 of Acceleration while in a Purge run.",

		131: "Perform an Elementary reset.",
		132: "Reach formatDistance(1e15) while in a Purge run, without inf8;8 in the current Infinity, & while in Reality's Stadium challenge at Difficulty Level 6.",
		133: "Reach showNum(1e3) Fermions & Bosons.",
		134: "Reach formatDistance(4.4e1100026) without Pathogen Upgrades & Dark Cores in the current Infinity.",
		135: "Reach showNum(2.5e7) Heavenly Chips.",
		136: "Reach showNum(1e3750000) uni/s of Velocity.",
		137: "Do an Elementary reset without any Derivative Boosts (but you can have Derivative Shifts).",
		138: "Reach formatDistance(4.4e7826) while having ten Endorsements or less.",

		141: "Get a Theory Point.",
		142: "Reach formatDistance(4.4e136) while in a Purge run, while in Reality's Stadium challenge at Difficulty Level 6, and without Pathogen Upgrades & Dark Cores in the current Infinity.",
		143: "Complete The Theoriverse at Depth 4.",
		144: "Reach showNum(1e33) Ascension Power.",
		145: "Reach formatDistance(4.4e8000026).",
		146: "Reach showNum(1.8e308) Knowledge.",
		147: "Reach Rank showNum(200) with ten Endorsements or less.",
		148: "Reach Rank showNum(995).",

		151: "Unlock Hadronic Challenge.",
		152: "Get a Hadronic Score of at least showNum(2.3).",
		153: "Reach formatDistance(4.4e8250026) without any Theory Tree Upgrades.",
		154: "Get a Hadronic Score of at least 2.5 and reach formatDistance(e2.8e7), can be on separate runs.",
		155: "Unlock Inflatons",
		156: "Complete The Theoriverse at Depth 8.",
		157: "Reach formatDistance(4.4e76) of Primary String.",
		158: "Get a Hadronic Score of at least showNum(3.75).",

		161: "Unlock Quantum Foam.",
		162: "Reach formatDistance(4.4e251) of Primary String.",
		163: "Reach formatDistance(4.4e126) of Entangled String.",
		164: "Unlock Entropy.",
		165: "Get a Hadronic Score of at least showNum(8).",
		166: "Reach boolean(extreme,showNup[1e150],showNup[1e160]) Inflatons.",
		167: "Reach showNum(1e108000000) uni.",
		168: "Reach showNum(1e25) Quantum Foam without any Subplanck Foam.",

		171: "Get a Skyrmion.",
		172: "Elementary showNum(1e12) times.",
		173: "Reach boolean(extreme,showNup[1e78],showNup[1e140]) Quantum Foam without any Entropy.",
		174: "Reach formatDistance(4.4e500000026).",
		175: "Reach formatDistance(4.4e222222248) without any Entropy, Subplanck Foam, or Photon/Gluon Upgrades.",
		176: "Complete The Theoriverse at Depth 19.",
		177: "Have Pathogen Upgrade Power of at least showNum(1625)%.",
		178: "Reach formatDistance(4.4e1000000026).",

		181: "Reach formatDistance(1.936e2000000053).",
		182: "Reach formatDistance(1.7868e3500000093) without any Theoriverse completions.",
		183: "Complete Multiverse 1.",
		184: "Reach showNum(1e5) Entropy.",
		185: "Reach formatDistance(3.911111e88888915) while in Multiverse 2 and Eternity's Stadium challenge at Difficulty Level 6.",
		186: "Reach formatDistance(2.21e100000002664).",
		187: "Complete Multiverse 5.",
		188: "Reach showNum(1e430) Protoversal Foam.",

		191: "Purchase showNum(10) Dark Expanders.",
		192: "Get showNum(1337) Ranks in Multiverse 1 without unlocking Theories, Hadronic Challenge, Foam, or Skyrmions.",
		193: "Reach formatDistance(4.4e800000026) in Multiverse 3 without unlocking Ascension.",
		194: "Reach Tier showNum(69).",
		195: "Gain showNum(1e6) Multiversal Energy in one reset.",
		196: "Reach formatDistance(4.4e10000026) in Multiverse 5 while in a Hadronic Challenge with a Projected Score of at least boolean(extreme,12,15).",
		197: "Gain showNum(1e9) Multiversal Energy in one reset.",
		198: "Reach formatDistance(2.8e1000000026643).",

		201: "Reach Tier showNum(166).",
		202: "Reach formatDistance(2.8e420000026643) without Derivatives unlocked.",
		203: "Reach formatDistance(4.4e4500000026) while in Reality.",
		204: "Gain showNum(1e15) Multiversal Energy in one reset.",
		205: "Reach 200 Endorsements.",
		206: "Placeholder",
		207: "Placeholder",
		208: "Placeholder",
	},
	rewards: {
		12: "Acceleration is showNum(10)% higherboolean(extreme, and Rank Cheapeners are +0.5x stronger for each achievement gotten).",
		14: "Acceleration & Maximum Velocity are showNum(50)% higherboolean(extreme, and you start with one Rank Cheapener on Rocket reset).",
		15: "Rocket gain is increased by showNum(5)%boolean(extreme, and unlock The Furnace).",
		16: "boolean(extreme+hikers_dream,Total motive boosts coal gain.)",
		17: "Time goes by showNum(1)% faster.",
		18: "Time goes by showNum(50)% faster.",

		21: "Maximum Velocity is showNum(10)% higherboolean(extreme, and you get one extra Rank Cheapener for every Tier).",
		22: "Acceleration is showNum(5)% higherboolean(extreme, and you start with one Rank Cheapener on Tier reset)",
		23: "Acceleration is showNum(20)% higher.",
		24: "Maximum Velocity is showNum(25)% higherboolean(extreme, and acceleration is twice as fast for each achievement unlocked in this column).",
		26: "Rocket gain is increased by showNum(10)%boolean(extreme+hikers_dream, and Optimization boosts coal gain at reduced rate).",
		27: "Time goes by showNum(10)% faster.",

		32: "Acceleration is showNum(80)% higher.",
		34: "Rocket gain is increased by showNum(10)%boolean(extreme, and you get another extra Rank Cheapener).",
		35: "Acceleration is showNum(80)% higherboolean(extreme, and the Coal effect is doubled).",
		36: "Scrap & intelligence gain are increased by showNum(50)%boolean(extreme+hikers_dream, and each furnace upgrade increase the Optimization softcap start by 10%).",
		38: "Cadaver gain is doubledboolean(extreme+hikers_dream, and multiplied by the square of energy upgrades (minimum 1)).",

		41: "Maximum Velocity is showNum(50)% higher.",
		43: "The Rank requirement formula is showNum(2.5)% slower.",
		44: "Rocket gain is increased by showNum(15)%.",
		46: "Intelligence gain is doubled.",
		47: "Time goes by showNum(50)% faster.",
		48: "You can buy max robot upgrades.",

		51: "Maximum Velocity is showNum(50)% higher.",
		52: "Time goes by showNum(20)% faster.",
		55: "You gain showNum(10)% more Time Cubes.",
		57: "Time goes by showNum(10)% faster.",
		58: "The Rocket Fuel reset only resets Rockets to showNum(50)% of their current amount.",

		61: "Maximum Velocity is showNum(60)% higherboolean(extreme+hikers_dream, and divide energy loss by time cube upgrades (minimum 1)).",
		63: "Time Speed boosts Pathogen gain at a reduced rate.",
		65: "Cadaver gain is increased by showNum(40)%boolean(extreme+hikers_dream, increase the Confidence softcap by one third per Pathogen upgrade)boolean(hard, and Pathogen Upgrades softcap five later)",
		66: "boolean(extreme+hikers_dream,Buff Thrusters III and Coal boosts Optimization.)",
		67: "Time goes by showNum(11.11)% fasterboolean(extreme+hikers_dream, increase the Optimization softcap by 5 times and increase the Confidence softcap by 1).",
		68: "Pathogen gain is showNum(2.5)x fasterboolean(hard+hikers_dream, Confidence boosts Pathogen gain)boolean(extreme, and Cadaver gain is quintupled).",

		72: "You gain Time Cubes without Reversing Time, however only at half the rateboolean(extreme, and Time Cube gain is faster based on your Coal & Dark Cores).",
		74: "The 'Time Doesnt Exist' reward is showNum(75)% stronger.",
		75: "Dark Flow is showNum(10)% faster.",
		76: "Rocket gain is increased by showNum(2)%",
		77: "boolean(extreme+hikers_dream,Increase the base motivation softcap based on rockets.)",

		81: "Keep automation stuff on Infinity.",
		83: "Dark Flow is showNum(20)% faster.",
		84: "Dark Flow affects Pathogen gain, slows down after showNum(50)x.",
		85: "boolean(hard+hikers_dream,You can rejuvinate whenever)boolean(extreme+hikers_dream, and square Endurance)boolean(hard+hikers_dream,.)",
		86: "boolean(extreme+hikers_dream,Pathogens multiply time cube gain and square Confidence softcap start.)",
		87: "boolean(extreme+hikers_dream,Remove the base motivation softcap)boolean(hard+hikers_dream, and time cubes boost pathogens.)",
		88: "Buying Pathogen Upgrades does not spend your Pathogensboolean(extreme, and you unlock Furnace Challenges).",

		92: "When buying Dark Cores, your Cadavers do not decrease.",
		93: "boolean(extreme+hikers_dream,Square Confidence softcap start.)",
		94: "boolean(hard-extreme,Generate Ascension Power even if perks are inactive.)",
		95: "Gain showNum(100)% of Rocket gain every second.",
		96: "Gain showNum(100)% of Cadaver gain every second.",
		97: "Transfer showNum(100)% of Cadavers to Life Essence every secondboolean(extreme+hikers_dream, and Optimization increases Confidence softcap start).",

		102: "boolean(extreme+hikers_dream,Endorsements multiply Confidence softcap start.)",
		103: "You can activate one extra perk at any given time.",
		105: "Acceleration is showNum(300)% fasterboolean(extreme, and Rankbot & Tierbot's magnitudes are boosted by their intervals even more).",
		108: "Knowledge gain is showNum(50)% fasterboolean(extreme, and Scaled Endorsement scaling starts 2 Endorsements later).",

		111: "You can activate all four perks at onceboolean(extreme, and unlock the Enhanced Furnace).",
		112: "Time Speed boosts Knowledge gain at a reduced rateboolean(extreme, and Rank Cheapeners do not reset anything).",
		116: "You gain twice as many Heavenly Chips & Demonic Soulsboolean(extreme, and Time Speed is enabled in Purge runs and Enhanced Coal gain is 40% faster for each Purge Power you have).",
		117: "boolean(extreme+hikers_dream,Remove the Confidence softcap.)",

		123: "The Universe Doesn't Exist achievement uses a slightly better formulaboolean(hard+hikers_dream, and Confidence is ten times stronger).",
		124: "All Perks last twice as long.",
		125: "Pathogen Upgrades are showNum(5)% stronger.",

		131: "Rockets, Cadavers, & Pathogens are gained twice as fast, and Dark Flow is showNum(50)% fasterboolean(extreme, and coal & enhanced coal gain is always 100x faster).",
		132: "The Gauge Force Effect is doubled.",
		133: "Unlock Auto-Elementaries.",
		135: "The Purge Power effect is halved.",

		141: "boolean(hikers_dream,Keep generators and buy them automatically.)",
		142: "Endorsements that are bought automatically do not reset anything.",
		143: "boolean(extreme+hikers_dream,You can buy max Theory Tree Upgrades with shift+click which is slightly more efficient than normally upgrading. )boolean(hikers_dream,Gain ten million times the passive energy.)",
		144: "All Strings are gained showNum(25)% faster.",
		145: "boolean(hikers_dream,inf10;10 is stronged based on your ranks.)",
		147: "You gain Cadavers while in Purge runs, but at a very reduced rate, and Pathogen Upgrades are not stuck at 0% power in Purge runs.",

		152: "All Theory Tree Upgrades are cheaper based on your Best Hadronic Score.",
		153: "boolean(extreme+hikers_dream,The Theory Tree Upgrade that makes Scaled Endorsements start later also makes Superscaled Endorsements start later at a reduced rate [x/10])",
		154: "Purge Power gain is doubledboolean(hikers_dream, and unlock a 27th & 28th energy upgrade).",
		157: "All Strings are gained twice as fast.",

		162: "Unspent Theory Points boost all Foam typesboolean(extreme+hikers_dream,., and you can buy max Theory Tree Upgrades with shift+click which is slightly more efficient than normally upgrading.)",
		163: "Gain 10% of your Entangled String gain every second.",
		166: "Unlock Auto-Photon Upgrades & Auto-Gluon Upgrades.",
		168: "Unlock Auto-Theory Tree Upgrades.",

		171: "Expanding your Foam does not spend it, and Quantum Foam is gained 10x faster, Subplanck Foam is gained 20x faster, Subspatial Foam is gained 30x faster, etc.boolean(hikers_dream, and unlock a 29th & 30th energy upgrade)",
		172: "The Elementary Particle gain softcap is showNum(20)% weaker for every three OoMs of Elementaries done.",
		174: "The Perk Accelerator is showNum(5)% stronger.",
		178: 'The Infinity popup is permanently disabled if you have Auto-Endorsements unlocked, unlock the "Max Pion & Spinor Fields" buttonboolean(extreme, and the Plasma exponent is doubled when below 250).',

		183: "All Entropy Upgrades are always unlocked.",
		185: "Hyper Pathogen Upgrade scaling is showNum(10)% weakerboolean(extreme, and gain twenty percent more Multiversal Energy).",
		186: "Unlock Auto-Multiverse Runs.",
		188: "Gain showNum(10)% more Entropy.",

		191: "boolean(extreme,White Flame is gained 5x faster.)",
		193: "Gain showNum(5)% more Multiversal Energyboolean(hikers_dream-extreme, and 10% more Entropy).",
		194: "Tier scaling is 0.69% weaker.",
		195: "Gain showNum(11)% more Entropy.",
		196: "boolean(extreme+hikers_dream,Useless Theories is boosted by Multiverse Quilt 3's 2nd effect)",
		197: "Entropy Upgrades are showNum(5)% cheaperboolean(hikers_dream-extreme, and Thrusters V is 12.5% stronger).",
		198: "Unlock new Hadronic Challenge Selectors, you can extend the Hadronic Challenge goal to your best-ever Distance, and you can extend the HC Theoriverse selector to your best-ever Theoriverse completed (capped at depth 100).",

		201: "Pathogen Upgrades are x1.25 stronger.",
		202: "Gain showNum(42)x more Multiversal Energy.",
		203: "Knowledge gain are raised by 1.5.",
	}
};
