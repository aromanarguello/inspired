require('../config/mongoose-setup');

const SeedModel = require('../models/inspired-model');

const seedInfo = [
  {
    company: "Lake Erie Medical DBA Quality Care Products LLC",
    drugName: "Tramadol Hydrochloride"
  },
  {
    company: "Physicians Total Care, Inc.",
    drugName: "Theophylline"
  },
  {
    company: "American Health Packaging",
    drugName: "Diltiazem Hydrochloride"
  },
  {
    company: "Amneal Pharmaceuticals of New York, LLC",
    drugName: "Citalopram"
  },
  {
    company: "Neutrogena Corporation",
    drugName: "Neutrogena Men Active protect Face"
  },
  {
    company: "NCS HealthCare of KY, Inc dba Vangard Labs",
    drugName: "Carvedilol"
  },
  {
    company: "REMEDYREPACK INC.",
    drugName: "Doxycycline"
  },
  {
    company: "Procter & Gamble Manufacturing Company",
    drugName: "Olay Blackhead Clearing Scrub"
  },
  {
    company: "Boehringer Ingelheim Pharmaceuticals, Inc.",
    drugName: "Dulcolax"
  },
  {
    company: "Dolgencorp, LLC",
    drugName: "dg health headache relief"
  },
  {
    company: "Conopco Inc. d/b/a Unilever",
    drugName: "Degree"
  },
  {
    company: "Bayer HealthCare Pharmaceuticals Inc.",
    drugName: "Cipro"
  },
  {
    company: "NARS Cosmetics",
    drugName: "NARS PURE RADIANT TINTED MOISTURIZER"
  },
  {
    company: "Qualitest Pharmaceuticals",
    drugName: "Risperidone"
  },
  {
    company: "Watson Pharma, Inc.",
    drugName: "Potassium Chloride"
  },
  {
    company: "Allergan, Inc.",
    drugName: "PRED-G"
  },
  {
    company: "Gordon Laboratories",
    drugName: "Formadon"
  },
  {
    company: "Medimetriks Pharmaceuticals Inc.",
    drugName: "Sumadan Wash"
  },
  {
    company: "Lupin Pharmaceuticals, Inc.",
    drugName: "Amlodipine Besylate and Benazepril Hydrochloride"
  },
  {
    company: "Major Pharmaceuticals, Inc",
    drugName: "Loratadine"
  },
  {
    company: "Aloette Cosmetics Inc.",
    drugName: "Cellular Day Defense Firming SPF 25"
  },
  {
    company: "MAKEUP ART COSMETICS",
    drugName: "MAC"
  },
  {
    company: "REMEDYREPACK INC.",
    drugName: "Sulfamethoxazole and Trimethoprim"
  },
  {
    company: "Northstar Rx LLC",
    drugName: "Bicalutamide"
  },
  {
    company: "Bryant Ranch Prepack",
    drugName: "Phenylephrine Hydrochloride"
  },
  {
    company: "Nexgen Pharma, Inc.",
    drugName: "Butalbital, Acetaminophen, and Caffeine"
  },
  {
    company: "Lake Erie Medical DBA Quality Care Products LLC",
    drugName: "Amitriptyline Hydrochloride"
  },
  {
    company: "CVS Pharmacy",
    drugName: "Childrens Pain and Fever"
  },
  {
    company: "Publix Super Markets Inc",
    drugName: "hemorrhoidal"
  },
  {
    company: "The Dodge Company, Inc.",
    drugName: "Forest Fresh"
  },
  {
    company: "Physicians Total Care, Inc.",
    drugName: "Carbidopa and Levodopa"
  },
  {
    company: "Eli Lilly and Company",
    drugName: "Zyprexa"
  },
  {
    company: "Contract Pharmacy Services-PA",
    drugName: "Perrigo Citalopram"
  },
  {
    company: "Allergy Laboratories, Inc.",
    drugName: "BOTRYTIS CINEREA"
  },
  {
    company: "McKesson Packaging Services a business unit of McKesson Corporation",
    drugName: "Simvastatin"
  },
  {
    company: "Ventura Corporation LTD",
    drugName: "CY BETTER LIPS BALM Humectante para Labios con color FPS 18"
  },
  {
    company: "Bryant Ranch Prepack",
    drugName: "Triazolam"
  },
  {
    company: "Kingdom Animalia, LLC DBA Hourglass Cosmetics",
    drugName: "Hourglass Illusion Tinted Moisturizer Sand"
  },
  {
    company: "ALK-Abello, Inc.",
    drugName: "POPULUS ALBA POLLEN"
  },
  {
    company: "St Marys Medical Park Pharmacy",
    drugName: "VERAPAMIL"
  },
  {
    company: "Physicians Total Care, Inc.",
    drugName: "LEVAQUIN"
  },
  {
    company: "AMERICAN CHEMICAL AND SANITARY SUPPLY INC",
    drugName: "T-Chem E2 Rated"
  },
  {
    company: "Physicians Total Care, Inc.",
    drugName: "Silver Sulfadiazine"
  },
  {
    company: "Everett Laboratories, Inc.",
    drugName: "Vitafol"
  },
  {
    company: "Neutrogena Corporation",
    drugName: "Neutrogena Shine Control Makeup"
  },
  {
    company: "State of Florida DOH Central Pharmacy",
    drugName: "Theophylline"
  },
  {
    company: "Gurwitch Products, L.L.C.",
    drugName: "Laura Mercier Tinted Moisturizer SPF 20 BLUSH"
  },
  {
    company: "Major Pharmaceuticals",
    drugName: "Ranitidine"
  },
  {
    company: "Mylan Pharmaceuticals Inc.",
    drugName: "Carbidopa and Levodopa"
  },
  {
    company: "American Sales Company",
    drugName: "Milk of Magnesia Mint"
  },
  {
    company: "Premier Value",
    drugName: "Premier Value Arthritis Pain Reliever"
  },
  {
    company: "Prime Enterprises, Inc.",
    drugName: "Australian Gold"
  },
  {
    company: "Quest Products, Inc.",
    drugName: "Skin Tag Relief"
  },
  {
    company: "Jubilant HollisterStier LLC",
    drugName: "Standardized Grass Pollen, Redtop"
  },
  {
    company: "CVS Pharmacy, Inc",
    drugName: "Advanced Hand Sanitizer"
  },
  {
    company: "ARMY AND AIR FORCE EXCHANGE SERVICE",
    drugName: "Ibuprofen"
  },
  {
    company: "TEVA Pharmaceuticals USA Inc",
    drugName: "Tolterodine Tartrate"
  },
  {
    company: "AAA Pharmaceutical, Inc.",
    drugName: "Acetaminophen, Diphenhydramine Hydrochloride, Phenylephrine Hydrochloride"
  },
  {
    company: "Nelco Laboratories, Inc.",
    drugName: "Sardine"
  },
  {
    company: "Perrigo New York Inc",
    drugName: "ketoconazole"
  },
  {
    company: "Syntrion GmbH",
    drugName: "SyCircue"
  },
  {
    company: "Cardinal Health",
    drugName: "Azathioprine"
  },
  {
    company: "L Perrigo Company",
    drugName: "good sense lice killing"
  },
  {
    company: "L Perrigo Company",
    drugName: "good sense anti nausea"
  },
  {
    company: "Mallinckrodt, Inc.",
    drugName: "Hydromorphone Hydrochloride"
  },
  {
    company: "Stiefel Laboratories Inc",
    drugName: "PanOxyl"
  },
  {
    company: "Energique, Inc.",
    drugName: "Terrestristat"
  },
  {
    company: "Colgate-Palmolive Company",
    drugName: "Speed Stick"
  },
  {
    company: "PuraVation Pharmaceuticals Inc",
    drugName: "Gas Relief Ultra Strength"
  },
  {
    company: "Blenheim Pharmacal, Inc.",
    drugName: "Naproxen"
  },
  {
    company: "MSD Consumer Care, Inc.",
    drugName: "Coppertone Sport AccuSpray"
  },
  {
    company: "Cadila Healthcare Limited",
    drugName: "Omeprazole"
  },
  {
    company: "REMEDYREPACK INC.",
    drugName: "Lovastatin"
  },
  {
    company: "Ventura International LTD",
    drugName: "LBel Paris"
  },
  {
    company: "True Botanica, LLC",
    drugName: "Argentum Metallicum"
  },
  {
    company: "DZA Brands LLC",
    drugName: "Healthy Accents Triple Antibiotic"
  },
  {
    company: "American Home Respiratory Care, Inc.",
    drugName: "Oxygen"
  },
  {
    company: "Schmid & Son Packaging",
    drugName: "No7 Protect and Perfect Skincare System Day Sunscreen SPF 15"
  },
  {
    company: "Ascend Laboratories, LLC",
    drugName: "Quetiapine Fumarate"
  },
  {
    company: "Physicians Total Care, Inc.",
    drugName: "Metolazone"
  },
  {
    company: "Golden State Medical Supply, Inc.",
    drugName: "Hydroxyzine Hydrochloride"
  },
  {
    company: "Method Pharmaceuticals, Inc.",
    drugName: "Me-PB-Hyos"
  },
  {
    company: "Cosmetics Institute Technology Co., Ltd.",
    drugName: "BIOXIDEA MIRACLE 48 EXCELLENCE GOLD MASK"
  },
  {
    company: "CVS Pharmacy",
    drugName: "Sodium Chloride"
  },
  {
    company: "REMEDYREPACK INC.",
    drugName: "Azithromycin Dihydrate"
  },
  {
    company: "Neutrogena Corporation",
    drugName: "Neutrogena Healthy Skin Glow Sheers Illuminating Tinted Moisturizer - Ivory to Fair 10"
  },
  {
    company: "Validus Pharmaceuticals LLC",
    drugName: "Lopressor"
  },
  {
    company: "Teva Pharmaceuticals USA Inc",
    drugName: "Penicillin V Potassium"
  },
  {
    company: "Amneal Pharmaceuticals of New York, LLC",
    drugName: "Ibuprofen"
  },
  {
    company: "Rebel Distributors Corp",
    drugName: "Double Antibiotic"
  },
  {
    company: "REMEDYREPACK INC.",
    drugName: "Isosorbide Dinitrate"
  },
  {
    company: "Rebel Distributors Corp",
    drugName: "OXYCODONE AND ACETAMINOPHEN"
  },
  {
    company: "SUPERVALU INC.",
    drugName: "Extra Strength Pain Relief"
  },
  {
    company: "Shopko Stores Operating Co., LLC",
    drugName: "Shopko Hydrocortisone Intensive Healing Formula"
  },
  {
    company: "Zydus Pharmaceuticals (USA) Inc.",
    drugName: "Losortan Potassium"
  },
  {
    company: "American Health Packaging",
    drugName: "CARBAMAZEPINE"
  },
  {
    company: "Bedford Laboratories",
    drugName: "Prochlorperazine Edisylate"
  },
  {
    company: "Cardinal Health",
    drugName: "cilostazol"
  },
  {
    company: "Eon Labs, Inc.",
    drugName: "Cilostazol"
  },
  {
    company: "Cardinal Health",
    drugName: "COUMADIN"
  }
];


SeedModel.create(seedInfo)
.then( seedResults => {
  console.log(`Inserted ${seedResults.length}
    clinics`);
  })
    .catch( err => {
      console.log( err );
});
