const MLT_COMPS_MIL = {
    lengths: [3,3,3],
    1: [
        {
            req: new ExpantaNum(1),
            desc: "Time Speed can affect the speed of Elementary Particles at a reduced rate.",
            effect() {
                let ret = tmp.timeSpeed ? tmp.timeSpeed.max(1).log10().add(1).pow(15) : new ExpantaNum(1)
                return ret
            },
            effectDesc(eff=this.effect()) { return showNum(eff)+'x' },
        }, {
            req: new ExpantaNum(2),
            desc: "Time Speed can affect the speed of Theory subfeatures at a reduced rate.",
            effect() {
                let ret = {}
                let time = tmp.timeSpeed ? tmp.timeSpeed : new ExpantaNum(0)
                ret.first = time.max(1).log10().add(1).pow(100)
                ret.second = time.max(1).log10().add(1).pow(25)
                return ret
            },
            effectDesc(eff=this.effect()) { return 'Supersymmetry Resources, Strings, Inflatons: '+showNum(eff.first)+'x; Preons: '+showNum(eff.second)+'x' },
        }, {
            req: new ExpantaNum(3),
            desc: "Time Speed can affect the speed of all Foam types at a reduced rate.",
            effect() {
                let time = tmp.timeSpeed ? tmp.timeSpeed : new ExpantaNum(0)
                let ret = time.max(1).log10().add(1).pow(150)
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
        }, {
            req: new ExpantaNum(2),
            desc: "Skyrmions boosts Hadron exponents at a reduced rate.",
            effect() {
                let ret = player.elementary.sky.amount.add(1).log10().add(1).pow(1/2)
                return ret
            },
            effectDesc(eff=this.effect()) { return showNum(eff)+'x' },
        }, {
            req: new ExpantaNum(3),
            desc: "All Pion/Spinor Upgrades &theta; are thrice stronger.",
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
        }, {
            req: new ExpantaNum(3),
            desc: "Make Gauge Force is stronger based on Bosons.",
            effect() {
                let ret = player.elementary.bosons.amount.max(1).log10().add(1).div(1000)
                return ret
            },
            effectDesc(eff=this.effect()) { return "^"+showNum(eff) },
        },
    ],
}

function getCompEffect(x) {
    let ret = player.mlt.compressors[x-1].add(1).pow(1/5)
    if (x == 3 && (tmp.mlt ? ret.gte(tmp.mlt.comps3soft) : false)) ret = ret.times(tmp.mlt.comps3soft.pow(2)).cbrt();
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
    if (scalingActive("compressors", gain, "scaled")) {
        let s = getScalingStart("scaled", "compressors").sub(2)
        let pow = getScalingPower("scaled", "compressors")
        let exp = ExpantaNum.pow(1.5, pow)
        gain = player.mlt.totalEnergy.div(1e17).max(1).logBase(5).mul(s.pow(exp.sub(1))).root(exp).add(1).floor()
    }
    if (scalingActive("compressors", gain, "superscaled")) {
        let s = getScalingStart("scaled", "compressors").sub(2)
        let s2 = getScalingStart("superscaled", "compressors")
        let pow = getScalingPower("scaled", "compressors")
        let pow2 = getScalingPower("superscaled", "compressors")
        let exp = ExpantaNum.pow(1.5, pow)
        let exp2 = ExpantaNum.pow(1.5, pow2)
        gain = player.mlt.totalEnergy.div(1e17).max(1).logBase(5).mul(s2.pow(exp2.sub(1))).root(exp2).mul(s.pow(exp.sub(1))).root(exp).add(1).floor()
    }
    return gain.floor()
}

function getCompressorsNext() {
    let comps = tmp.mlt ? tmp.mlt.compressors : new ExpantaNum(1/0)
    let get = comps
    if (scalingActive("compressors", comps, "scaled")) {
        let s = getScalingStart("scaled", "compressors").sub(2)
        let pow = getScalingPower("scaled", "compressors")
        let exp = ExpantaNum.pow(1.5, pow)
        get = comps.pow(exp).div(s.pow(exp.sub(1)))
    }
    if (scalingActive("compressors", comps, "superscaled")) {
        let s = getScalingStart("scaled", "compressors").sub(2)
        let s2 = getScalingStart("superscaled", "compressors")
        let pow = getScalingPower("scaled", "compressors")
        let pow2 = getScalingPower("superscaled", "compressors")
        let exp = ExpantaNum.pow(1.5, pow)
        let exp2 = ExpantaNum.pow(1.5, pow2)
        get = comps.pow(exp).div(s.pow(exp.sub(1))).pow(exp2).div(s2.pow(exp2.sub(1)))
    }
    return ExpantaNum.pow(5, get).mul(1e17)
}

function updateCompressors() {
    tmp.mlt.compressors = getCompressorsFromME()
    tmp.mlt.compressorsNext = getCompressorsNext()
    tmp.mlt.haveComps = tmp.mlt.compressors.sub(player.mlt.compressors[0]).sub(player.mlt.compressors[1]).sub(player.mlt.compressors[2])

    tmp.mlt.comps3soft = new ExpantaNum(1.25)
}

function respecCompressors() {
    if (confirm("You really respec Multiversal Compressors? Then reset Multiversal Compressors, but make Multiverse reset.")) {
        player.mlt.compressors = [new ExpantaNum(0), new ExpantaNum(0), new ExpantaNum(0)]
        mltReset(false, true)
    }
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