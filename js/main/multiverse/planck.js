const PLANCK_UPGS = {
    lengths: {
        1: {
            id: 1,
            desc: "Triple Planck lengths gain.",
            cost(x = havePlanckLUpgarde(this.id)) { return ExpantaNum.pow(5, x.pow(1.25)).mul(100) },
            effect(x = havePlanckLUpgarde(this.id)) { return ExpantaNum.pow(3, x) },
            effDesc(eff = this.effect()) { return showNum(eff)+'x' },
        },
        2: {
            id: 2,
            desc: "Multiversal Energy gain softcap starts 10x later, make 50% stronger.",
            cost(x = havePlanckLUpgarde(this.id)) { return ExpantaNum.pow(3, x.pow(1.5)).mul(1000) },
            effect(x = havePlanckLUpgarde(this.id)) {
                let ret = ExpantaNum.pow(100, x)
                if (ret.gte(1e5)) ret = ret.div(1e5).cbrt().mul(1e5)
                return ret
            },
            effDesc(eff = this.effect()) { return showNum(eff)+'x later' },
        },
        3: {
            id: 3,
            desc: "Make cadavers and Pathogens gain is stronger based on your Planck lengths.",
            cost(x = havePlanckLUpgarde(this.id)) { return ExpantaNum.pow(4, x.pow(1.5)).mul(5000) },
            effect(x = havePlanckLUpgarde(this.id)) {
                let ret = ExpantaNum.mul(0.5, x.pow(0.5).mul(player.mlt.planck.lengths.max(1).log10().pow(0.5))).add(1)
                if (ret.gte(5)) ret = ret.div(5).pow(1/4).mul(5)
                return ret
            },
            effDesc(eff = this.effect()) { return "^"+showNum(eff) },
        },
        4: {
            id: 4,
            desc: "Make Planck lengths gain is boosted by Pathogens.",
            cost(x = havePlanckLUpgarde(this.id)) { return ExpantaNum.pow(5, x.pow(1.25)).mul(10000) },
            effect(x = havePlanckLUpgarde(this.id)) { return player.pathogens.amount.add(1).log10().add(1).log10().pow(0.5).mul(x).add(1) },
            effDesc(eff = this.effect()) { return showNum(eff)+'x' },
        },
    }
}

function havePlanckLUpgarde(x) { return player.mlt.planck.upgrades[x] !== undefined ? new ExpantaNum(player.mlt.planck.upgrades[x]) : new ExpantaNum(0) }

function updatePlanck() {
    if (!tmp.mlt.planck) tmp.mlt.planck = {}

    tmp.mlt.planck.gain = player.mlt.totalEnergy.max(1).log10()
    if (havePlanckLUpgarde(1).gte(1)) tmp.mlt.planck.gain = tmp.mlt.planck.gain.mul(PLANCK_UPGS.lengths[1].effect())
    if (havePlanckLUpgarde(4).gte(1)) tmp.mlt.planck.gain = tmp.mlt.planck.gain.mul(PLANCK_UPGS.lengths[4].effect())
}

function buyPlanckLUpgrade(x) {
    let cost = PLANCK_UPGS.lengths[x].cost()
    if (player.mlt.planck.lengths.gte(cost)) {
        player.mlt.planck.lengths = player.mlt.planck.lengths.sub(cost)
        if (player.mlt.planck.upgrades[x] === undefined) player.mlt.planck.upgrades[x] = new ExpantaNum(0)
        player.mlt.planck.upgrades[x] = player.mlt.planck.upgrades[x].add(1)
    }
}

function setupPlanckTable() {
    let planckTable = new Element("planckTable");
	let table = "";
	for (let r = 1; r <= Math.ceil(Object.keys(PLANCK_UPGS.lengths).length / 4); r++) {
		table += "<tr id='planckLRow" + r + "'>";
		for (let c = 1; c <= 4; c++) {
			let id = (r - 1) * 4 + c;
            if (PLANCK_UPGS.lengths[id] !== undefined) {
                table +=
				"<td><button id='planckL" +
				id +
				"' class='btn locked' style='height: 140px;' onclick='buyPlanckLUpgrade("+id+")'></button></td>";
            }
		}
		table += "</tr>";
	}
	planckTable.setHTML(table);
}