
let params = [
  {
    year: '2018',
    name: '2018 Scénario préliminaire',
    qc: {
      impot: {
        thresold1: 99999,
        thresold2: 99999,
        thresold3: 99999,
        rate1: 0.16,
        rate2: 0.20,
        rate3: 0.24,
        rate4: 0.2575,
        basicPersonalAmount: 99999,
        deductionForWorkersRate: 0.06,
        deductionForWorkersMax: 9999,
        aloneAmount: 9999,
        singleFamilyAmount: 9999,
        ageAmount: 9999,
        ageReductionThresold: 9999,
        ageReductionRate: 0.15,
        creditRate: 0.20
      },
      wp: { /* Work Premium 2018 */
        thresold1: 10574,  // Seuil pour personne seule.
        thresold2: 16356,  // Seuil pour couple.
        deduction1: 2400,  // Déduction pour personne seule.
        deduction2: 3600,  // Déduction pour couple.
        rate1: 0.09,  // Taux d'augmentation sans enfants.
        rate2: 0.25,  // Taux d'augmentation couple avec enfants.
        rate3: 0.30,  // Taux d'augmentation monoparentale.
        reductionRate: 0.10  // Taux de réduction.
      }
    },
    ctb: {
      ei: { /* Employment insurance 2018 */
        min: 2000,
        max: 51700,
        rate: 0.0166,
        rateQc: 0.0130
      },
      qpip: { /* Régime québécois d'assurance parentale 2018 */
        mie: 74000,
        epr: 0.00548,
        qt: 2000
      },
      qpp: { /* Régime de rente du Québec 2018 */
        max: 55900,
        min: 3500,
        rate: 0.054
      },
      hsf: { /* Fonds des services de santé 2018 */
        t1: 14665, /* http://www.finances.gouv.qc.ca/documents/Autres/fr/AUTFR_RegimeImpot2018.pdf */
        t2: 50985,
        r1: 0.01,
        r2: 0.01,
        c1: 150,
        c2: 1000
      },
      hc: { /* Health contributions 2018 */
        t1: 0,
        t2: 0,
        t3: 0,
        r1: 0.0,
        r2: 0.0,
        r3: 0.0,
        c1: 0,
        c2: 0,
        c3: 0
      },
      pdip: { // TODO Régime public d'assurance médicaments 2018
        d10: 15790, /* Déduction sans conjoint */
        d11: 9810, /* Déduction sans conjoint, un enfant */
        d12: 13190, /* Déduction sans conjoint, 2 enfants ou plus */
        d20: 25600, /* Déduction avec conjoint */
        d21: 3380, /* Déduction avec conjoint, un enfant */
        d22: 6505, /* Déduction avec conjoint, 2 enfants ou plus */
        t1: 5000,
        t2: 14509,
        r11: 0.0688, /* Taux, Particulier sans conjoint */
        r12: 0.1033, /* Taux, Particulier sans conjoint */
        r21: 0.0347, /* Particulier avec conjoint */
        r22: 0.0519, /* Particulier avec conjoint */
        max1: 667.00,
        max2: 663.50
      }
    }
  },
  {
    year: '2017',
    name: '2017 Paramètres officiels',
    qc: {
      impot: {
        thresold1: 42705,
        thresold2: 85405,
        thresold3: 103915,
        rate1: 0.15,
        rate2: 0.20,
        rate3: 0.24,
        rate4: 0.2575,
        basicPersonalAmount: 14890,
        deductionForWorkersRate: 0.06,
        deductionForWorkersMax: 1140,
        aloneAmount: 1707,
        singleFamilyAmount: 2107,
        ageAmount: 3132,
        retraiteAmount: 2782,
        ageReductionThresold: 33755,
        ageReductionRate: 0.1875,
        creditRate: 0.15
      },
      wp: { /* Work Premium 2017 */
        thresold1: 10506,  // Seuil pour personne seule.
        thresold2: 16248,  // Seuil pour couple.
        deduction1: 2400,  // Déduction pour personne seule.
        deduction2: 3600,  // Déduction pour couple.
        rate1: 0.09,  // Taux d'augmentation sans enfants.
        rate2: 0.25,  // Taux d'augmentation couple avec enfants.
        rate3: 0.30,  // Taux d'augmentation monoparentale.
        reductionRate: 0.10  // Taux de réduction.
      },
      stc: { // Solidarity Tax Credit 2017.
        weight1: 1.0,
        amount11: 285, // Amount for the QST, Basic amount
        amount12: 285, // Amount for the QST, Amount for spouse
        amount13: 136, // Amount for the QST, Additional amount for person living alone
        amount14: 670, // Amount for housing, Amount for a couple
        amount15: 552, // Amount for housing, Amount for a person living alone or a single-parent family
        amount16: 118, // Amount for housing, Amount for each dependent child
        amount17: 1676, // Amount for individuals living in a northern village, Amount per adult
        amount18: 363, // Amount for individuals living in a northern village, Amount for each dependent child
        threshold1: 33935, // Solidarity tax credit reduction threshold
        weight2: 0.0,
        amount21: 0, // Amount for the QST, Basic amount
        amount22: 0, // Amount for the QST, Amount for spouse
        amount23: 0, // Amount for the QST, Additional amount for person living alone
        amount24: 0, // Amount for housing, Amount for a couple
        amount25: 0, // Amount for housing, Amount for a person living alone or a single-parent family
        amount26: 0, // Amount for housing, Amount for each dependent child
        amount27: 0, // Amount for individuals living in a northern village, Amount per adult
        amount28: 0, // Amount for individuals living in a northern village, Amount for each dependent child
        threshold2: 0 // Solidarity tax credit reduction threshold
      }
    },
    ctb: {
      ei: { /* Employment insurance 2017 */
        min: 2000,
        max: 51300,
        rate: 0.0163,
        rateQc: 0.0127
      },
      qpip: { /* Régime québécois d'assurance parentale 2017 */
        mie: 72500,
        epr: 0.00548,
        qt: 2000
      },
      qpp: { /* Régime de rente du Québec 2017 */
        max: 55300,
        min: 3500,
        rate: 0.054
      },
      hsf: { /* Fonds des services de santé 2017 */
        t1: 14545,
        t2: 50570,
        r1: 0.01,
        r2: 0.01,
        c1: 150,
        c2: 1000
      },
      hc: { /* Health contributions 2017 */
        t1: 0,
        t2: 0,
        t3: 0,
        r1: 0.0,
        r2: 0.0,
        r3: 0.0,
        c1: 0,
        c2: 0,
        c3: 0
      },
      pdip: { /* Régime public d'assurance médicaments 2017 
                https://www.revenuquebec.ca/documents/fr/formulaires/tp/2017-12/TP-1.D.K%282017-12%29.pdf */
        d10: 15790, /* Déduction sans conjoint */
        d11: 9810, /* Déduction sans conjoint, un enfant */
        d12: 13190, /* Déduction sans conjoint, 2 enfants ou plus */
        d20: 25600, /* Déduction avec conjoint */
        d21: 3380, /* Déduction avec conjoint, un enfant */
        d22: 6505, /* Déduction avec conjoint, 2 enfants ou plus */
        t1: 5000,
        t2: 14509,
        r11: 0.0688, /* Taux, Particulier sans conjoint */
        r12: 0.1033, /* Taux, Particulier sans conjoint */
        r21: 0.0347, /* Particulier avec conjoint */
        r22: 0.0519, /* Particulier avec conjoint */
        max1: 667.00,
        max2: 663.50
      }
    }
  },
  {
    year: '2016',
    name: '2016 Paramètres officiels',
    qc: {
      impot: {
        thresold1: 42390,
        thresold2: 84780,
        thresold3: 103150,
        rate1: 0.16,
        rate2: 0.20,
        rate3: 0.24,
        rate4: 0.2575,
        basicPersonalAmount: 11550,
        deductionForWorkersRate: 0.06,
        deductionForWorkersMax: 1130,
        aloneAmount: 1355,
        singleFamilyAmount: 1675,
        ageAmount: 2485,
        ageReductionThresold: 33505,
        ageReductionRate: 0.15,
        creditRate: 0.20
      },
      sa: { // Social Assistance 2016
        amount1: 623,
        amount2: 965,
        workIncomeExemption1: 200,
        workIncomeExemption2: 300
      },
      wp: { // Work Premium 2016
        thresold1: 10464,  // Seuil pour personne seule.
        thresold2: 16190,  // Seuil pour couple.
        deduction1: 2400,  // Déduction pour personne seule.
        deduction2: 3600,  // Déduction pour couple.
        rate1: 0.09,  // Taux d'augmentation sans enfants.
        rate2: 0.25,  // Taux d'augmentation couple avec enfants.
        rate3: 0.30,  // Taux d'augmentation monoparentale.
        reductionRate: 0.10  // Taux de réduction.
      },
      stc: { // Solidarity Tax Credit 2016.
        weight1: 0.5,
        amount11: 281, // Amount for the QST, Basic amount
        amount12: 281, // Amount for the QST, Amount for spouse
        amount13: 134, // Amount for the QST, Additional amount for person living alone
        amount14: 661, // Amount for housing, Amount for a couple
        amount15: 545, // Amount for housing, Amount for a person living alone or a single-parent family
        amount16: 116, // Amount for housing, Amount for each dependent child
        amount17: 1655, // Amount for individuals living in a northern village, Amount per adult
        amount18: 358, // Amount for individuals living in a northern village, Amount for each dependent child
        threshold1: 33505, // Solidarity tax credit reduction threshold
        weight2: 0.5,
        amount21: 283, // Amount for the QST, Basic amount
        amount22: 283, // Amount for the QST, Amount for spouse
        amount23: 135, // Amount for the QST, Additional amount for person living alone
        amount24: 665, // Amount for housing, Amount for a couple
        amount25: 548, // Amount for housing, Amount for a person living alone or a single-parent family
        amount26: 117, // Amount for housing, Amount for each dependent child
        amount27: 1664, // Amount for individuals living in a northern village, Amount per adult
        amount28: 360, // Amount for individuals living in a northern village, Amount for each dependent child
        threshold2: 33685 // Solidarity tax credit reduction threshold
      }
    },
    ctb: {
      ei: { /* Employment insurance 2016 */
        min: 2000,
        max: 50800,
        rate: 0.0188,
        rateQc: 0.0152
      },
      qpip: { /* Régime québécois d'assurance parentale 2016 */
        mie: 71500,
        epr: 0.00548,
        qt: 2000
      },
      qpp: { /* Régime de rente du Québec 2016 */
        max: 54900,
        min: 3500,
        rate: 0.05325
      },
      hsf: { /* Fonds des services de santé 2016 */
        t1: 14400,
        t2: 50200,
        r1: 0.01,
        r2: 0.01,
        c1: 150,
        c2: 1000
      },
      hc: { /* Health contributions 2016 
        http://www.revenuquebec.ca/documents/fr/formulaires/tp/2016-12/TP-1.D.GR(2016-12).pdf 
        https://www.revenuquebec.ca/fr/salle-de-presse/nouvelles-fiscales/details/2017-03-29/ 
        */
        t1: 0,
        t2: 0,
        t3: 134095,
        r1: 0.0,
        r2: 0.0,
        r3: 0.04,
        c1: 0,
        c2: 0,
        c3: 1000
      },
      pdip: { /* Régime public d'assurance médicaments 2016 
              https://www.revenuquebec.ca/documents/fr/formulaires/tp/2017-12/TP-1.D.K%282017-12%29.pdf */
        d10: 15570, /* Déduction sans conjoint */
        d11: 9660,  /* Déduction sans conjoint, un enfant */
        d12: 13015, /* Déduction sans conjoint, 2 enfants ou plus */
        d20: 25230, /* Déduction avec conjoint */
        d21: 3355,  /* Déduction avec conjoint, un enfant */
        d22: 6455,  /* Déduction avec conjoint, 2 enfants ou plus */
        t1: 5000,
        t2: 14646,
        r11: 0.0674, /* Taux, Particulier sans conjoint */
        r12: 0.1013, /* Taux, Particulier sans conjoint */
        r21: 0.0340, /* Particulier avec conjoint */
        r22: 0.0508, /* Particulier avec conjoint */
        max1: 660,
        max2: 650
      }
    }
  },
  {
    year: '2015',
    name: '2015 Paramètres officiels',
    ei: {
      min: 2000,
      max: 49500,
      rate: 0.0188,
      rateQc: 0.0154
    },
    qc: {
      impot: {
        thresold1: 41935,
        thresold2: 83865,
        thresold3: 102040,
        rate1: 0.16,
        rate2: 0.20,
        rate3: 0.24,
        rate4: 0.2575,
        basicPersonalAmount: 11425,
        deductionForWorkersRate: 0.06,
        deductionForWorkersMax: 1120,
        aloneAmount: 1340,
        singleFamilyAmount: 1655,
        ageAmount: 9999,
        ageReductionThresold: 33145,
        ageReductionRate: 0.15,
        creditRate: 0.20
      },
      wp: { /* Work Premium 2015 */
        thresold1: 10370,  // Seuil pour personne seule.
        thresold2: 16056,  // Seuil pour couple.
        deduction1: 2400,  // Déduction pour personne seule.
        deduction2: 3600,  // Déduction pour couple.
        rate1: 0.09,  // Taux d'augmentation sans enfants.
        rate2: 0.25,  // Taux d'augmentation couple avec enfants.
        rate3: 0.30,  // Taux d'augmentation monoparentale.
        reductionRate: 0.10  // Taux de réduction.
      }
    },
    ctb: {
      ei: { /* Employment insurance 2015 */
        min: 2000,
        max: 56788,
        rate: 0.0188,
        rateQc: 0.0154
      },
      qpip: {
        /* Régime québécois d'assurance parentale 2015 */
        mie: 70000,
        epr: 0.00559,
        qt: 2000
      },
      qpp: { /* Régime de rente du Québec 2015 */
        max: 53600, /* Maximum annuel des revenus de travail admissibles appelé aussi maximum des gains admissibles (MGA) */
        min: 3500, /* Exemption générale */
        rate: 0.0525 /* Taux de cotisation pour le salarié */
      },
      hsf: { /* Fonds des services de santé 2015 */
        t1: 14285,
        t2: 49660,
        r1: 0.01,
        r2: 0.01,
        c1: 150,
        c2: 1000
      },
      hc: {
        /* Health contributions 2015
           https://www.revenuquebec.ca/documents/fr/formulaires/tp/2015-12/tp-1.d.gr%282015-12%29.pdf
        */
        t1: 18370,
        t2: 40820,
        t3: 132650,
        r1: 0.05,
        r2: 0.05,
        r3: 0.04,
        c1: 100,
        c2: 200,
        c3: 1000
      },
      pdip: {
        /* Régime public d'assurance médicaments 2015
           http://www.revenuquebec.ca/documents/fr/formulaires/tp/2016-12/TP-1.D.K(2016-12).pdf
        */
        d10: 15360, /* Déduction sans conjoint */
        d11: 9530, /* Déduction sans conjoint, un enfant */
        d12: 12850, /* Déduction sans conjoint, 2 enfants ou plus */
        d20: 24890, /* Déduction avec conjoint */
        d21: 3320, /* Déduction avec conjoint, un enfant */
        d22: 6385, /* Déduction avec conjoint, 2 enfants ou plus */
        t1: 5000,
        t2: 14735,
        r11: 0.0648, /* Taux, Particulier sans conjoint */
        r12: 0.0975, /* Taux, Particulier sans conjoint */
        r21: 0.0328, /* Particulier avec conjoint */
        r22: 0.0489, /* Particulier avec conjoint */
        max1: 640,
        max2: 625.50
      }
    }
  }
]

let param = {}

let input = {
  numberOfAdults: 1,
  single: true,
  withSpouse: false,
  numberOfChildren: 0,
  age1: 35,
  age2: 0,
  employmentIncome1: 50000,
  employmentIncome2: 0,
  employmentIncome: 50000,
  pension1: 0,
  pension2: 0,
  pension: 0,
  capital1: 0,
  capital2: 0,
  capital: 0,
  dividendsEligible1: 0,
  dividendsEligible2: 0,
  dividendsEligible: 0,
  dividendsNonEligible1: 0,
  dividendsNonEligible2: 0,
  dividendsNonEligible: 0,
  grossIncome1: 0,
  grossIncome2: 0,
  grossIncome: 0,
  childAge1: 0,
  childAge2: 0,
  childAge3: 0,
  childAge4: 0,
  childAge5: 0,
  childCare1: 0,
  childCare2: 0,
  childCare3: 0,
  childCare4: 0,
  childCare5: 0,
  childType1: 0,
  childType2: 0,
  childType3: 0,
  childType4: 0,
  childType5: 0,
  year1: '2016',
  year2: 'NIL',
  incomeTypeForSlider: '1A1'
}

let result = {
  qc: {
    total: 0,
    pit: {
      totalIncome1: 0,
      totalIncome2: 0,
      deductionForWorkers1: 0,
      deductionForWorkers2: 0,
      netIncome1: 0,
      netIncome2: 0,
      familyIncome: 0,
      taxableIncome1: 0,
      taxableIncome2: 0,
      basicPersonalAmount1: 0,
      basicPersonalAmount2: 0,
      ageAmount1: 0,
      ageAmount2: 0,
      nonRefundableTaxCredits1: 0,
      nonRefundableTaxCredits2: 0,
      pitBeforeCredits1: 0,
      pitBeforeCredits2: 0,
      pit1: 0,
      pit2: 0,
      pit: 0
    },
    sa: {
      total: 0
    },
    ca: {
      total: 0
    },
    spss: {
      total: 0
    },
    wp: {
      total: 0
    },
    stc: {
      total: 0
    },
    tcce: {
      total: 0
    },
    sap: {
      total: 0
    },
    rtcme: {
      total: 0
    }
  },
  ca: {
    total: 0,
    pit: {
      total: 0
    },
    uccb: {
      total: 0
    },
    cctb: {
      total: 0
    },
    ncb: {
      total: 0
    },
    ccb: {
      total: 0
    },
    gst: {
      total: 0
    },
    witb: {
      total: 0
    },
    oasp: {
      total: 0
    },
    rmes: {
      total: 0
    }
  },
  ctb: {
    total: 0,
    ei: {
      adult1: 0,
      adult2: 0,
      total: 0
    },
    qpip: {
      total: 0
    },
    qpp: {
      total: 0
    },
    hsf: {
      total: 0
    },
    hc: {
      total: 0
    },
    qpdip: {
      total: 0
    }
  }
}

/**
 * Decimal adjustment of a number.
 *
 * @param {String}  type  The type of adjustment.
 * @param {Number}  value The number.
 * @param {Integer} exp   The exponent (the 10 logarithm of the adjustment base).
 * @returns {Number} The adjusted value.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
 */
function decimalAdjust (type, value, exp) {
  // If the exp is undefined or zero...
  if (typeof exp === 'undefined' || +exp === 0) {
    return Math[type](value)
  }
  value = +value
  exp = +exp

  // If the value is not a number or the exp is not an integer...
  if (value === null || isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
    return NaN
  }

  // If the value is negative...
  if (value < 0) {
    return -decimalAdjust(type, -value, exp)
  }

  // Shift
  value = value.toString().split('e')
  value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)))

  // Shift back
  value = value.toString().split('e')
  return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp))
}

// Decimal round
function round10 (value, exp) {
  return decimalAdjust('round', value, exp)
}

function compute (input, result) {
  let index = params.findIndex(p => p.year === input.year1)
  if (index >= 0) {
    param = params[index]
    // console.log(param)
  } else {
    // Not supposed!
  }

  input.employmentIncome = input.employmentIncome1 + input.employmentIncome2
  input.pension = input.pension1 + input.pension2
  input.capital = input.capital1 + input.capital2
  input.dividendsEligible = input.dividendsEligible1 + input.dividendsEligible2
  input.dividendsNonEligible = input.dividendsNonEligible1 + input.dividendsNonEligible2

  input.grossIncome1 = input.employmentIncome1 + input.pension1 + input.capital1 +
    input.dividendsEligible1 + input.dividendsNonEligible1
  input.grossIncome2 = input.employmentIncome2 + input.pension2 + input.capital2 +
    input.dividendsEligible2 + input.dividendsNonEligible2
  input.grossIncome = input.grossIncome1 + input.grossIncome2

  // PERSONNAL INCOME TAX.
  // Total income (L101)
  result.qc.impot.totalIncome1 = input.employmentIncome1
  if (input.numberOfAdults === 2) {
    result.qc.impot.totalIncome2 = input.employmentIncome2
  } else {
    result.qc.impot.totalIncome2 = 0
  }

  // Deduction for workers (L201)
  result.qc.impot.deductionForWorkers1 = Math.min(input.employmentIncome1 *
    param.qc.impot.deductionForWorkersRate,
    param.qc.impot.deductionForWorkersMax)
  if (input.numberOfAdults === 2) {
    result.qc.impot.deductionForWorkers2 = Math.min(input.employmentIncome2 *
      param.qc.impot.deductionForWorkersRate,
      param.qc.impot.deductionForWorkersMax)
  } else {
    result.qc.impot.deductionForWorkers2 = 0
  }

  // Net income (L275)
  result.qc.impot.netIncome1 = Math.max(result.qc.impot.totalIncome1 -
    result.qc.impot.deductionForWorkers1, 0)
  if (input.numberOfAdults === 2) {
    result.qc.impot.netIncome2 = Math.max(result.qc.impot.totalIncome2 -
      result.qc.impot.deductionForWorkers2, 0)
  } else {
    result.qc.impot.netIncome2 = 0
  }

  // Family Income (B Schedule, L14)
  result.qc.impot.netIncome = result.qc.impot.netIncome1 + result.qc.impot.netIncome2

  // Taxable income (L299)
  result.qc.impot.taxableIncome1 = result.qc.impot.netIncome1
  result.qc.impot.taxableIncome2 = result.qc.impot.netIncome2

  // Basic personal amount (L350)
  result.qc.impot.basicPersonalAmount1 = param.qc.impot.basicPersonalAmount
  if (input.numberOfAdults === 2) {
    result.qc.impot.basicPersonalAmount2 = param.qc.impot.basicPersonalAmount
  } else {
    result.qc.impot.basicPersonalAmount2 = 0
  }

  // Age amount, amount for a person living alone and amount for retirement income (L361)
  result.qc.impot.ageAmount1 = 0
  if (input.numberOfAdults === 1) {
    result.qc.impot.ageAmount1 += param.qc.impot.aloneAmount
    if (input.numberOfChildren > 0) {
      result.qc.impot.ageAmount1 += param.qc.impot.singleFamilyAmount
    }
  }
  if (input.age1 >= 65) {
    result.qc.impot.ageAmount1 += param.qc.impot.ageAmount
  }
  if (input.numberOfAdults === 2 && input.age2 >= 65) {
    result.qc.impot.ageAmount1 += param.qc.impot.ageAmount
  }
  result.qc.impot.ageAmount1 = Math.max(0,
    result.qc.impot.ageAmount1 -
      Math.max(result.qc.impot.netIncome -
        param.qc.impot.ageReductionThresold, 0) *
      param.qc.impot.ageReductionRate)

  // TODO: Optimisation.
  result.qc.impot.ageAmount2 = 0

  // Non-refundable tax credits (L399)
  result.qc.impot.nonRefundableTaxCredits1 = (result.qc.impot.basicPersonalAmount1 +
    result.qc.impot.ageAmount1) * param.qc.impot.creditRate

  if (input.numberOfAdults === 2) {
    result.qc.impot.nonRefundableTaxCredits2 = (result.qc.impot.basicPersonalAmount2 +
      result.qc.impot.ageAmount2) * param.qc.impot.creditRate
  } else {
    result.qc.impot.nonRefundableTaxCredits2 = 0
  }

  // Income tax on taxable income (L401).
  result.qc.impot.incomeTaxBeforeCredits1 =
    Math.min(result.qc.impot.taxableIncome1, param.qc.impot.thresold1) *
      param.qc.impot.rate1
  if (result.qc.impot.taxableIncome1 > param.qc.impot.thresold1) {
    result.qc.impot.incomeTaxBeforeCredits1 +=
      Math.min(result.qc.impot.taxableIncome1 - param.qc.impot.thresold1,
        param.qc.impot.thresold2 - param.qc.impot.thresold1) *
          param.qc.impot.rate2
    if (result.qc.impot.taxableIncome1 > param.qc.impot.thresold2) {
      result.qc.impot.incomeTaxBeforeCredits1 +=
        Math.min(result.qc.impot.taxableIncome1 - param.qc.impot.thresold2,
          param.qc.impot.thresold3 - param.qc.impot.thresold2) *
            param.qc.impot.rate3
      if (result.qc.impot.taxableIncome1 > param.qc.impot.thresold3) {
        result.qc.impot.incomeTaxBeforeCredits1 +=
          (result.qc.impot.taxableIncome1 - param.qc.impot.thresold3) *
            param.qc.impot.rate4
      }
    }
  }

  if (input.numberOfAdults === 2) {
    result.qc.impot.incomeTaxBeforeCredits2 =
      Math.min(result.qc.impot.taxableIncome2, param.qc.impot.thresold1) *
        param.qc.impot.rate1
    if (result.qc.impot.taxableIncome2 > param.qc.impot.thresold1) {
      result.qc.impot.incomeTaxBeforeCredits2 +=
        Math.min(result.qc.impot.taxableIncome2 - param.qc.impot.thresold1,
          param.qc.impot.thresold2 - param.qc.impot.thresold1) *
            param.qc.impot.rate2
      if (result.qc.impot.taxableIncome2 > param.qc.impot.thresold2) {
        result.qc.impot.incomeTaxBeforeCredits2 +=
          Math.min(result.qc.impot.taxableIncome2 - param.qc.impot.thresold2,
            param.qc.impot.thresold3 - param.qc.impot.thresold2) *
              param.qc.impot.rate3
        if (result.qc.impot.taxableIncome2 > param.qc.impot.thresold3) {
          result.qc.impot.incomeTaxBeforeCredits2 +=
            (result.qc.impot.taxableIncome2 - param.qc.impot.thresold3) *
              param.qc.impot.rate4
        }
      }
    }
  } else {
    result.qc.impot.incomeTaxBeforeCredits2 = 0
  }

  // Income tax (L450)
  result.qc.impot.incomeTax1 = Math.max(0, result.qc.impot.incomeTaxBeforeCredits1 - result.qc.impot.nonRefundableTaxCredits1)
  result.qc.impot.incomeTax1 = round10(result.qc.impot.incomeTax1, -2)

  if (input.numberOfAdults === 2) {
    result.qc.impot.incomeTax2 = Math.max(0, result.qc.impot.incomeTaxBeforeCredits2 - result.qc.impot.nonRefundableTaxCredits2)
    result.qc.impot.incomeTax2 = round10(result.qc.impot.incomeTax2, -2)
  } else {
    result.qc.impot.incomeTax2 = 0
  }
  result.qc.impot.incomeTax = -1 * (result.qc.impot.incomeTax1 + result.qc.impot.incomeTax2)

  /* SOCIAL ASSISTANCE Aide sociale */
  if (input.numberOfAdults === 1) {
    result.qc.sa.total = Math.max(param.qc.sa.amount1 * 12 -
      Math.max(input.employmentIncome - param.qc.sa.workIncomeExemption1 * 12, 0), 0)
  } else {
    result.qc.sa.total = Math.max(param.qc.sa.amount2 * 12 -
      Math.max(input.employmentIncome - param.qc.sa.workIncomeExemption2 * 12, 0), 0)
  }

  /* Soutien aux enfants */

  /* Supplément pour l'achat<br>de matériel scolaire */

  /* WORK PREMIUM, PRIME AU TRAVAIL */
  if (input.numberOfAdults === 1) {
    result.qc.wp.total = Math.max(Math.min(input.employmentIncome, param.qc.wp.thresold1) - param.qc.wp.deduction1, 0)
    if (input.numberOfChildren === 0) {
      result.qc.wp.total *= param.qc.wp.rate1
    } else {
      result.qc.wp.total *= param.qc.wp.rate3
    }
  } else {
    result.qc.wp.total = Math.max(Math.min(input.employmentIncome, param.qc.wp.thresold2) - param.qc.wp.deduction2, 0)
    if (input.numberOfChildren === 0) {
      result.qc.wp.total *= param.qc.wp.rate1
    } else {
      result.qc.wp.total *= param.qc.wp.rate2
    }
  }

  if (result.qc.wp.total > 0) {
    result.qc.wp.total = Math.max(result.qc.wp.total -
      Math.max(result.qc.impot.netIncome - param.qc.wp.thresold1, 0) * param.qc.wp.reductionRate, 0)
  }

  /* Crédit d'impôt pour la solidarité */

  /* Crédit d'impôt pour frais de garde */

  /* Allocation logement. */

  /* Prélèvement total au Québec. */
  result.qc.total = result.qc.impot.incomeTax + result.qc.wp.total

  /* Impôt sur le revenu du Canada. */

  /* Allocation canadienne pour enfants */

  /* Crédit pour la TPS */

  /* Prestation fiscale pour le revenu de travail */

  /* Programme de la Sécurité de la vieillesse */

  /* Supplément remboursable pour frais médicaux. */

  /* Prélèvement total au Canada */
  result.ca.total = 0

  // Employment insurance (EI).
  // Deduct EI premiums from each dollar of insurable earnings up to the yearly maximum.
  // Employees who earn $2,000 or less in a year can claim a refund of EI premiums on their
  // individual income tax and benefit return for the year.
  // http://www.cra-arc.gc.ca/tx/bsnss/tpcs/pyrll/clcltng/ei/menu-eng.html
  // https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll/payroll-deductions-contributions/employment-insurance-ei/ei-premium-rates-maximums.html
  if (input.employmentIncome1 > param.ctb.ei.min) {
    result.ctb.ei.adult1 = Math.min(param.ctb.ei.max, input.employmentIncome1) * param.ctb.ei.rateQc
    result.ctb.ei.adult1 = -1 * round10(result.ctb.ei.adult1, -2)
  } else {
    result.ctb.ei.adult1 = 0
  }

  if (input.withSpouse && input.employmentIncome2 > param.ctb.ei.min) {
    result.ctb.ei.adult2 = Math.min(param.ctb.ei.max, input.employmentIncome2) * param.ctb.ei.rateQc
    result.ctb.ei.adult2 = -1 * round10(result.ctb.ei.adult2, -2)
  } else {
    result.ctb.ei.adult2 = 0
  }

  result.ctb.ei.total = result.ctb.ei.adult1 + result.ctb.ei.adult2

  // Régime québécois d'assurance parentale.
  // http://www.rqap.gouv.qc.ca/a_propos_regime/information_generale/cotisations.asp
  // Québec Parental Insurance Plan (QPIP)
  // http://www.rqap.gouv.qc.ca/a_propos_regime/information_generale/cotisations_en.asp
  if (input.employmentIncome1 > param.ctb.qpip.qt) {
    result.ctb.qpip.adult1 = Math.min(param.ctb.qpip.mie, input.employmentIncome1) * param.ctb.qpip.epr
    result.ctb.qpip.adult1 = -1 * round10(result.ctb.qpip.adult1, -2)
  } else {
    result.ctb.qpip.adult1 = 0
  }

  if (input.withSpouse && input.employmentIncome2 > param.ctb.qpip.qt) {
    result.ctb.qpip.adult2 = Math.min(param.ctb.qpip.mie, input.employmentIncome2) * param.ctb.qpip.epr
    result.ctb.qpip.adult2 = -1 * round10(result.ctb.qpip.adult2, -2)
  } else {
    result.ctb.qpip.adult2 = 0
  }

  result.ctb.qpip.total = result.ctb.qpip.adult1 + result.ctb.qpip.adult2

  // Régime de rentes du Québec.
  // http://www.rrq.gouv.qc.ca/fr/programmes/regime_rentes/regime_chiffres/Pages/regime_chiffres.aspx
  // Québec Pension Plan (QPP)
  // https://www.rrq.gouv.qc.ca/en/programmes/regime_rentes/regime_chiffres/Pages/regime_chiffres.aspx
  if (input.employmentIncome1 > param.ctb.qpp.min) {
    result.ctb.qpp.adult1 = (Math.min(param.ctb.qpp.max, input.employmentIncome1) - param.ctb.qpp.min) * param.ctb.qpp.rate
    result.ctb.qpp.adult1 = -1 * round10(result.ctb.qpp.adult1, -2)
  } else {
    result.ctb.qpp.adult1 = 0
  }

  if (input.withSpouse && input.employmentIncome2 > param.ctb.qpp.min) {
    result.ctb.qpp.adult2 = (Math.min(param.ctb.qpp.max, input.employmentIncome2) - param.ctb.qpp.min) * param.ctb.qpp.rate
    result.ctb.qpp.adult2 = -1 * round10(result.ctb.qpp.adult2, -2)
  } else {
    result.ctb.qpp.adult2 = 0
  }

  result.ctb.qpp.total = result.ctb.qpp.adult1 + result.ctb.qpp.adult2

  // Fonds des services de santé.
  // http://www.planiguide.ca/planiguide/module-12-programmes-et-charges-sociales/fonds-des-services-de-sante-quebec/
  // https://www.revenuquebec.ca/documents/fr/formulaires/tp/2017-12/TP-1.D.F%282017-12%29.pdf
  // Contribution to the Health Services Fund (HSF).
  var income1 = input.pension1 + input.capital1 + input.dividendsEligible1 + input.dividendsNonEligible1
  if (income1 < param.ctb.hsf.t1) {
    result.ctb.hsf.adult1 = 0
  } else if (income1 < param.ctb.hsf.t2) {
    result.ctb.hsf.adult1 = Math.min((income1 - param.ctb.hsf.t1) * param.ctb.hsf.r1, param.ctb.hsf.c1)
    result.ctb.hsf.adult1 = -1 * round10(result.ctb.hsf.adult1, -2)
  } else {
    result.ctb.hsf.adult1 = Math.min((income1 - param.ctb.hsf.t2) * param.ctb.hsf.r2 + param.ctb.hsf.c1, param.ctb.hsf.c2)
    result.ctb.hsf.adult1 = -1 * round10(result.ctb.hsf.adult1, -2)
  }

  if (input.withSpouse) {
    var income2 = input.pension2 + input.capital2 + input.dividendsEligible2 + input.dividendsNonEligible2
    if (income2 < param.ctb.hsf.t1) {
      result.ctb.hsf.adult2 = 0
    } else if (income2 < param.ctb.hsf.t2) {
      result.ctb.hsf.adult2 = Math.min((income2 - param.ctb.hsf.t1) * param.ctb.hsf.r1, param.ctb.hsf.c1)
      result.ctb.hsf.adult2 = -1 * round10(result.ctb.hsf.adult2, -2)
    } else {
      result.ctb.hsf.adult2 = Math.min((income2 - param.ctb.hsf.t2) * param.ctb.hsf.r2 + param.ctb.hsf.c1, param.ctb.hsf.c2)
      result.ctb.hsf.adult2 = -1 * round10(result.ctb.hsf.adult2, -2)
    }
  } else {
    result.ctb.hsf.adult2 = 0
  }

  result.ctb.hsf.total = result.ctb.hsf.adult1 + result.ctb.hsf.adult2

  // Contribution santé.
  // http://www.revenuquebec.ca/documents/fr/formulaires/tp/2016-12/TP-1.D.GR(2016-12).pdf
  if (result.qc.impot.netIncome1 <= param.ctb.hc.t1) {
    result.ctb.hc.adult1 = 0
  } else if (result.qc.impot.netIncome1 <= param.ctb.hc.t2) {
    result.ctb.hc.adult1 = Math.min((result.qc.impot.netIncome1 - param.ctb.hc.t1) * param.ctb.hc.r1, param.ctb.hc.c1)
    result.ctb.hc.adult1 = -1 * round10(result.ctb.hc.adult1, -2)
  } else if (result.qc.impot.netIncome1 <= param.ctb.hc.t3) {
    result.ctb.hc.adult1 = Math.min((result.qc.impot.netIncome1 - param.ctb.hc.t2) * param.ctb.hc.r2 + param.ctb.hc.c1, param.ctb.hc.c2)
    result.ctb.hc.adult1 = -1 * round10(result.ctb.hc.adult1, -2)
  } else {
    result.ctb.hc.adult1 = Math.min((result.qc.impot.netIncome1 - param.ctb.hc.t3) * param.ctb.hc.r3 + param.ctb.hc.c2, param.ctb.hc.c3)
    result.ctb.hc.adult1 = -1 * round10(result.ctb.hc.adult1, -2)
  }

  if (input.withSpouse) {
    if (result.qc.impot.netIncome2 <= param.ctb.hc.t1) {
      result.ctb.hc.adult2 = 0
    } else if (result.qc.impot.netIncome2 <= param.ctb.hc.t2) {
      result.ctb.hc.adult2 = Math.min((result.qc.impot.netIncome2 - param.ctb.hc.t1) * param.ctb.hc.r1, param.ctb.hc.c1)
      result.ctb.hc.adult2 = -1 * round10(result.ctb.hc.adult2, -2)
    } else if (result.qc.impot.netIncome2 <= param.ctb.hc.t3) {
      result.ctb.hc.adult2 = Math.min((result.qc.impot.netIncome2 - param.ctb.hc.t2) * param.ctb.hc.r2 + param.ctb.hc.c1, param.ctb.hc.c2)
      result.ctb.hc.adult2 = -1 * round10(result.ctb.hc.adult2, -2)
    } else {
      result.ctb.hc.adult2 = Math.min((result.qc.impot.netIncome2 - param.ctb.hc.t3) * param.ctb.hc.r3 + param.ctb.hc.c2, param.ctb.hc.c3)
      result.ctb.hc.adult2 = -1 * round10(result.ctb.hc.adult2, -2)
    }
  } else {
    result.ctb.hc.adult2 = 0
  }

  result.ctb.hc.total = result.ctb.hc.adult1 + result.ctb.hc.adult2

  // PUBLIC DRUG INSURANCE PLAN (PDIP)
  // Régime public d'assurance médicaments du Québec.
  result.ctb.pdip.income = result.qc.impot.netIncome

  if (input.numberOfAdults === 1) {
    result.ctb.pdip.income -= param.ctb.pdip.d10
    if (input.numberOfChildren === 1) {
      result.ctb.pdip.income -= param.ctb.pdip.d11
    } else if (input.numberOfChildren >= 2) {
      result.ctb.pdip.income -= param.ctb.pdip.d12
    }
  } else {
    result.ctb.pdip.income -= param.ctb.pdip.d20
    if (input.numberOfChildren === 1) {
      result.ctb.pdip.income -= param.ctb.pdip.d21
    } else if (input.numberOfChildren >= 2) {
      result.ctb.pdip.income -= param.ctb.pdip.d22
    }
  }

  if (result.ctb.pdip.income < 0) {
    result.ctb.pdip.income = 0
  }

  if (input.numberOfAdults === 1) {
    if (result.ctb.pdip.income <= param.ctb.pdip.t1) {
      result.ctb.pdip.total = result.ctb.pdip.income * param.ctb.pdip.r11
    } else if (result.ctb.pdip.income <= param.ctb.pdip.t2) {
      result.ctb.pdip.total = (result.ctb.pdip.income - param.ctb.pdip.t1) * param.ctb.pdip.r12 + param.ctb.pdip.t1 * param.ctb.pdip.r11
    } else {
      result.ctb.pdip.total = param.ctb.pdip.max1
    }
  } else {
    if (result.ctb.pdip.income <= param.ctb.pdip.t1) {
      result.ctb.pdip.total = result.ctb.pdip.income * param.ctb.pdip.r21
    } else if (result.ctb.pdip.income <= param.ctb.pdip.t2) {
      result.ctb.pdip.total = (result.ctb.pdip.income - param.ctb.pdip.t1) * param.ctb.pdip.r22 + param.ctb.pdip.t1 * param.ctb.pdip.r21
    } else {
      result.ctb.pdip.total = param.ctb.pdip.max1
    }
  }
  // console.log(result.ctb.pdip.total)

  result.ctb.pdip.total = Math.min(result.ctb.pdip.total, param.ctb.pdip.max1)
  result.ctb.pdip.total = -1 * Math.min(result.ctb.pdip.total, param.ctb.pdip.max2)

  /* Cotisation totale. */
  result.ctb.total = result.ctb.ei.total + result.ctb.qpip.total + result.ctb.qpp.total +
                      result.ctb.hsf.total + result.ctb.hc.total + result.ctb.pdip.total

  /* Frais de garde. */

  /* Revenu disponible. */
  result.rd = input.grossIncome + result.qc.total + result.ca.total + result.ctb.total
}

// export { params, input, result, calc }
