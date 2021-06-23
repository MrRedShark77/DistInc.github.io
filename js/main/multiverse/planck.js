const PLANCK_UPGS = {
    lengths: {
        1: {
            id: 1,
            desc: "Triple Planck lengths gain.",
            cost(x = havePlanckLUpgarde(this.id)) { return ExpantaNum.pow(2, x.pow(1.25).add(1)) },
            effect(x = havePlanckLUpgarde(this.id)) { return ExpantaNum.pow(3, x) },
            effDesc(eff = this.effect()) { return showNum(eff)+'x' },
        },
        2: {
            id: 2,
            desc: "Multiversal Energy gain softcap starts 10x later, make 50% stronger.",
            cost(x = havePlanckLUpgarde(this.id)) { return ExpantaNum.mul(2, x.pow(1.5)).add(4) },
            effect(x = havePlanckLUpgarde(this.id)) {
                let ret = ExpantaNum.pow(100, x)
                if (ret.gte(1e10)) ret = ret.div(1e10).cbrt().mul(1e10)
                return ret
            },
            effDesc(eff = this.effect()) { return showNum(eff)+'x later' },
        },
        3: {
            id: 3,
            desc: "Make cadavers and Pathogens gain is stronger based on your Planck lengths.",
            cost(x = havePlanckLUpgarde(this.id)) { return ExpantaNum.mul(2.5, x.pow(1.5)).add(5) },
            effect(x = havePlanckLUpgarde(this.id)) {
                let ret = ExpantaNum.mul(0.5, x.mul(player.mlt.planck.lengths.pow(2/3))).add(1)
                if (ret.gte(5)) ret = ret.div(5).pow(1/4).mul(5)
                return ret
            },
            effDesc(eff = this.effect()) { return "^"+showNum(eff) },
        },
        4: {
            id: 4,
            desc: "Make Planck lengths gain is boosted by Pathogens.",
            cost(x = havePlanckLUpgarde(this.id)) { return ExpantaNum.pow(2, x.pow(1.25).add(1)).mul(2.5) },
            effect(x = havePlanckLUpgarde(this.id)) { return player.pathogens.amount.add(1).log10().add(1).log10().max(0).pow(1/3).mul(x.max(0).pow(1/3)).add(1) },
            effDesc(eff = this.effect()) { return showNum(eff)+'x' },
        },
    }
}

function havePlanckLUpgarde(x) { return player.mlt.planck.upgrades[x] !== undefined ? new ExpantaNum(player.mlt.planck.upgrades[x]) : new ExpantaNum(0) }

function updatePlanck() {
    if (!tmp.mlt.planck) tmp.mlt.planck = {}

    tmp.mlt.planck.gainBase = player.mlt.totalEnergy.max(1).log10()
    if (havePlanckLUpgarde(1).gte(1)) tmp.mlt.planck.gainBase = tmp.mlt.planck.gainBase.mul(PLANCK_UPGS.lengths[1].effect())
    if (havePlanckLUpgarde(4).gte(1)) tmp.mlt.planck.gainBase = tmp.mlt.planck.gainBase.mul(PLANCK_UPGS.lengths[4].effect())

    tmp.mlt.planck.gain = tmp.mlt.planck.gainBase.add(player.mlt.planck.lengths).max(0).root(3).sub(player.mlt.planck.lengths)
    player.mlt.planck.maxLengths = tmp.mlt.planck.gainBase.add(player.mlt.planck.maxLengths).max(0).root(3)
    player.mlt.planck.lengths = player.mlt.planck.lengths.max(0).min(player.mlt.planck.maxLengths)
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