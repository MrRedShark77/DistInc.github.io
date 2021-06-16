const MLT_COMPS_MIL = {
    lengths: [1,1,2],
    1: [
        {
            req: new ExpantaNum(1),
            desc: "Time Speed can affect the speed of Elementary Particles at a reduced rate.",
            effect() {
                let ret = tmp.timeSpeed ? tmp.timeSpeed.max(1).log10().add(1).pow(15) : new ExpantaNum(0)
                return ret
            },
            effectDesc(eff=this.effect()) { return showNum(eff)+'x' },
        },
    ],
    2: [
        {
            req: new ExpantaNum(1),
            desc: "Pions & Spinors boost Skyrmions gain.",
            effect() {
                let ret = player.elementary.sky.pions.amount.add(1).log10().add(1)
                .times(player.elementary.sky.spinors.amount.add(1).log10().add(1))
                return ret
            },
            effectDesc(eff=this.effect()) { return showNum(eff)+'x' },
        },
    ],
    3: [
        {
            req: new ExpantaNum(1),
            desc: "Scaled Photon Upgrades scaling is 90% weaker.",
        }, {
            req: new ExpantaNum(2),
            desc: "Hadron from Fermions gain is boosted by himself.",
            effect() {
                let ret = player.elementary.fermions.hadrons.amount.add(1).pow(1/5)
                return ret
            },
            effectDesc(eff=this.effect()) { return showNum(eff)+'x' },
        },
    ],
}

function getCompEffect(x) {
    let ret = player.mlt.compressors[x-1].add(1).pow(1/5)
    return ret
}

function canGetCompressors() {
    return player.mlt ? tmp.mlt.haveComps.gte(1) : false
}

function getCompressors(x) {
    if (canGetCompressors()) player.mlt.compressors[x-1] = player.mlt.compressors[x-1].add(1)
}

function getCompressorsFromME() {
    if (player.mlt.totalEnergy.lt(1e17)) return new ExpantaNum(0)
    let gain = player.mlt.totalEnergy.div(1e17).max(1).logBase(5).add(1).floor()
    return gain
}

function getCompressorsNext() {
    return ExpantaNum.pow(5, getCompressorsFromME()).mul(1e17)
}

function updateCompressors() {
    tmp.mlt.compressors = getCompressorsFromME()
    tmp.mlt.compressorsNext = getCompressorsNext()
    tmp.mlt.haveComps = tmp.mlt.compressors.sub(player.mlt.compressors[0]).sub(player.mlt.compressors[1]).sub(player.mlt.compressors[2])
}

function hasCompsMilestone(x, y) { return player.mlt.compressors[x-1].gte(MLT_COMPS_MIL[x][y-1].req) }

function setupCompsMilestoneTable(x) {
	let milestones = new Element("comps"+x+"MilestoneTable");
	let data = "<table>";
	for (let r=1;r<=MLT_COMPS_MIL.lengths[x-1];r++) {
		let id = r-1;
		data += "<tr><td id='comps"+x+"Mil"+r+"1'>"+showNum(MLT_COMPS_MIL[x][id].req)+" - <span id='comps"+x+"Mil"+r+"desc'></span>"
		if (MLT_COMPS_MIL[x][id].effectDesc) data += " (<span id='comps"+x+"Mil"+r+"effDesc'></span>)"
		data += "</td></tr>"
	}
	data += "</table>"
	milestones.setHTML(data);
}