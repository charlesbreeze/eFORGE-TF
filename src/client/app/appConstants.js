// old default sample: fHeart-DS24731A
// new default sample: fHeart-aggregate

export const settings = {
  'organizationRootURL' : 'https://www.altius.org',
  'rootURL' : 'https://eforge-tf.altiusinstitute.org',
  'rootURLPort' : 443,
  'emailContact' : "areynolds@altius.org",
  'viewModes' : [
    'Associations',
    'Summary'
  ],
  'annotationTypes' : [
    'Probe-only',
    'All'
  ],
  'signalTypes' : [
    'Bar',
    'Line'
  ],
  'jobSubmitStates' : {
    SUCCESS : 0,
    PENDING : 1,
    FAILED  : 2
  },
  'defaults' : {
    'array'          : 'Illumina_850k_EPIC',
    'sample'         : 'fHeart-aggregate',
    'probes'         : ['cg01914153','cg00000165'],
    'padding'        : 50,
    'smoothing'      : 2,
    'annotationType' : 'Probe-only',
    'signalType'     : 'Line',
    'viewMode'       : 'Associations',
    'fdrThreshold'   : 0.001
  },
  'paddings' : [20, 50, 100, 200, 500],
  'smoothings' : [0, 1, 2, 3, 5],
  'arrays' : {
    'Illumina_850k_EPIC' : 'Illumina 850k EPIC'
  },
  'samples' : [{"A172-DS24744A": "A172 (DS24744A)"}, {"A673-DS27667A": "A673 (DS27667A)"}, {"ACHN-DS24547A": "Achn (DS24547A)"}, {"adipose_visceral-DS52484A": "Adipose Visceral (DS52484A)"}, {"adipose_visceral-DS52485A": "Adipose Visceral (DS52485A)"}, {"adipose_visceral-DS57918A": "Adipose Visceral (DS57918A)"}, {"Adrenal-DS37521B": "Adrenal (DS37521B)"}, {"Adrenal-DS40230A": "Adrenal (DS40230A)"}, {"Adrenal-DS40230B": "Adrenal (DS40230B)"}, {"Adrenal-DS51599A": "Adrenal (DS51599A)"}, {"AF_MSC-DS26403A": "Af Msc (DS26403A)"}, {"AL-DS26410A": "Al (DS26410A)"}, {"aorta-DS39618A": "Aorta (DS39618A)"}, {"aorta-DS48392B": "Aorta (DS48392B)"}, {"artery_coronary-DS48435B": "Artery Coronary (DS48435B)"}, {"artery_coronary-DS48440B": "Artery Coronary (DS48440B)"}, {"artery_tibial-DS48207C": "Artery Tibial (DS48207C)"}, {"artery_tibial-DS48297B": "Artery Tibial (DS48297B)"}, {"bipolar_neuron-DS26980A": "Bipolar Neuron (DS26980A)"}, {"bipolar_neuron-DS26986A": "Bipolar Neuron (DS26986A)"}, {"Brain_Caudate-DS23929C": "Brain Caudate (DS23929C)"}, {"Brain_Inferior_Parietal_Lobule-DS29023A": "Brain Inferior Parietal Lobule (DS29023A)"}, {"Brain_Midbrain-DS29043C": "Brain Midbrain (DS29043C)"}, {"Brain_Occipital_Lobe-DS29345A": "Brain Occipital Lobe (DS29345A)"}, {"Brain_Posterior_Superior_Temporal_Gyrus-DS29350A": "Brain Posterior Superior Temporal Gyrus (DS29350A)"}, {"breast_mammary-DS57924A": "Breast Mammary (DS57924A)"}, {"Caki2-DS24211A": "Caki2 (DS24211A)"}, {"CD34_T0-DS24044A": "Cd34 T0 (DS24044A)"}, {"CD34_T0-DS26444A": "Cd34 T0 (DS26444A)"}, {"CD34_T11-DS24129A": "Cd34 T11 (DS24129A)"}, {"CD34_T11-DS25790A": "Cd34 T11 (DS25790A)"}, {"CD34_T13-DS24165A": "Cd34 T13 (DS24165A)"}, {"CD34_T13-DS25851A": "Cd34 T13 (DS25851A)"}, {"CD34_T15-DS25939A": "Cd34 T15 (DS25939A)"}, {"CD34_T17-DS24222A": "Cd34 T17 (DS24222A)"}, {"CD34_T17-DS24228A": "Cd34 T17 (DS24228A)"}, {"CD34_T18-DS25969A": "Cd34 T18 (DS25969A)"}, {"CD34_T20-DS24252A": "Cd34 T20 (DS24252A)"}, {"CD34_T4-DS24074A": "Cd34 T4 (DS24074A)"}, {"CD34_T4-DS25687A": "Cd34 T4 (DS25687A)"}, {"CD34_T6-DS25730A": "Cd34 T6 (DS25730A)"}, {"CD34_T8-DS24094A": "Cd34 T8 (DS24094A)"}, {"CD34_T8-DS25769A": "Cd34 T8 (DS25769A)"}, {"CEC-DS34574A": "Cec (DS34574A)"}, {"CEC-DS37513A": "Cec (DS37513A)"}, {"colon_sigmoid-DS51602A": "Colon Sigmoid (DS51602A)"}, {"colon_sigmoid-DS51673A": "Colon Sigmoid (DS51673A)"}, {"colon_transverse-DS40198A": "Colon Transverse (DS40198A)"}, {"colon_transverse-DS40198B": "Colon Transverse (DS40198B)"}, {"colon_transverse-DS40205A": "Colon Transverse (DS40205A)"}, {"colon_transverse-DS40205B": "Colon Transverse (DS40205B)"}, {"colon_transverse-DS40210A": "Colon Transverse (DS40210A)"}, {"colon_transverse-DS40210B": "Colon Transverse (DS40210B)"}, {"colon_transverse-DS51553A": "Colon Transverse (DS51553A)"}, {"craniofacial-DS38794A": "Craniofacial (DS38794A)"}, {"DAF_MSC-DS24001C": "Daf Msc (DS24001C)"}, {"Daoy-DS24567A": "Daoy (DS24567A)"}, {"DE-DS39603C": "De (DS39603C)"}, {"DE-DS55923A": "De (DS55923A)"}, {"Dendritic_cells_C51-DS31642A": "Dendritic Cells C51 (DS31642A)"}, {"EL-DS23825A": "El (DS23825A)"}, {"ELR-DS26313A": "Elr (DS26313A)"}, {"esophagus_gastroesophageal_junction-DS48213C": "Esophagus Gastroesophageal Junction (DS48213C)"}, {"esophagus_gastroesophageal_junction-DS48386B": "Esophagus Gastroesophageal Junction (DS48386B)"}, {"esophagus_mucosa-DS48787B": "Esophagus Mucosa (DS48787B)"}, {"esophagus_mucosa-DS48789B": "Esophagus Mucosa (DS48789B)"}, {"esophagus_mucosa-DS48792C": "Esophagus Mucosa (DS48792C)"}, {"esophagus_muscularis-DS48209C": "Esophagus Muscularis (DS48209C)"}, {"esophagus_muscularis-DS48443B": "Esophagus Muscularis (DS48443B)"}, {"fBone_arm_right-DS39410B": "fBone arm right (DS39410B)"}, {"fBone_femur-DS36206B": "fBone femur (DS36206B)"}, {"fBone_leg_right-DS39417A": "fBone leg right (DS39417A)"}, {"fBrain-DS23849C": "fBrain (DS23849C)"}, {"fBrain-DS24775A": "fBrain (DS24775A)"}, {"fBrain-DS24872A": "fBrain (DS24872A)"}, {"fEye-DS23833A": "fEye (DS23833A)"}, {"fEye-DS24728A": "fEye (DS24728A)"}, {"fHeart-DS23853E": "fHeart (DS23853E)"}, {"fHeart-DS24731A": "fHeart (DS24731A)"}, {"fHeart-DS24799A": "fHeart (DS24799A)"}, {"fHeart-DS24812A": "fHeart (DS24812A)"}, {"fHeart-DS24880A": "fHeart (DS24880A)"}, {"fHeartFibroblasts-DS39886A": "fHeartFibroblasts (DS39886A)"}, {"fKidney-DS21924A": "fKidney (DS21924A)"}, {"fKidney-DS23388A": "fKidney (DS23388A)"}, {"fKidney-DS23873E": "fKidney (DS23873E)"}, {"fKidney-DS24709A": "fKidney (DS24709A)"}, {"fKidney-DS24714A": "fKidney (DS24714A)"}, {"fKidney-DS24801A": "fKidney (DS24801A)"}, {"fKidney-DS24814A": "fKidney (DS24814A)"}, {"fLeftVentricle-DS37292S": "fLeftVentricle (DS37292S)"}, {"fLiver-DS23957C": "fLiver (DS23957C)"}, {"fLiver-DS37438C": "fLiver (DS37438C)"}, {"fLung-DS23983C": "fLung (DS23983C)"}, {"fLung-DS24726A": "fLung (DS24726A)"}, {"fLung-DS24771A": "fLung (DS24771A)"}, {"fLung-DS24806A": "fLung (DS24806A)"}, {"fPlacenta-DS37102S": "fPlacenta (DS37102S)"}, {"fPlacenta-DS37379C": "fPlacenta (DS37379C)"}, {"fPlacenta-DS37386C": "fPlacenta (DS37386C)"}, {"fPlacenta-DS37481C": "fPlacenta (DS37481C)"}, {"fPlacenta-DS38382C": "fPlacenta (DS38382C)"}, {"fPlacenta-DS38790A": "fPlacenta (DS38790A)"}, {"fPlacenta-DS39148B": "fPlacenta (DS39148B)"}, {"fRetina-DS23368A": "fRetina (DS23368A)"}, {"fRightVentricle-DS37455A": "fRightVentricle (DS37455A)"}, {"fRightVentricle-DS44713A": "fRightVentricle (DS44713A)"}, {"fSpinal_cord-DS24833A": "fSpinal cord (DS24833A)"}, {"fStomach-DS24733A": "fStomach (DS24733A)"}, {"fTongue-DS24808A": "fTongue (DS24808A)"}, {"fTongue-DS24888A": "fTongue (DS24888A)"}, {"fUmbilical_cord-DS24722A": "fUmbilical cord (DS24722A)"}, {"G401-DS24147C": "G401 (DS24147C)"}, {"H4-DS24825A": "H4 (DS24825A)"}, {"H4-DS24930A": "H4 (DS24930A)"}, {"H9_AzH_G2M-DS34890A": "H9 Azh G2M (DS34890A)"}, {"H9_AzH_G2M-DS39298A": "H9 Azh G2M (DS39298A)"}, {"H9_AzL_S-DS34885A": "H9 Azl S (DS34885A)"}, {"H9_DN3_early-DS34872A": "H9 Dn3 Early (DS34872A)"}, {"H9_hESC-DS39598C": "H9 Hesc (DS39598C)"}, {"H9_hESC-DS55945A": "H9 Hesc (DS55945A)"}, {"H9_KO2_late-DS34866A": "H9 Ko2 Late (DS34866A)"}, {"HAP1-DS39502A": "Hap1 (DS39502A)"}, {"HAP1-DS39509A": "Hap1 (DS39509A)"}, {"heart_atrial_appendage-DS48310B": "Heart Atrial Appendage (DS48310B)"}, {"heart_atrial_appendage-DS48421B": "Heart Atrial Appendage (DS48421B)"}, {"heart_left_ventricle-DS48384A": "Heart Left Ventricle (DS48384A)"}, {"HeLaS3-DS24790A": "Helas3 (DS24790A)"}, {"hepatocytes-DS32113A": "Hepatocytes (DS32113A)"}, {"HepG2-DS24838A": "Hepg2 (DS24838A)"}, {"HK_2-DS56256A": "Hk 2 (DS56256A)"}, {"HK_2-DS56257A": "Hk 2 (DS56257A)"}, {"HT29-DS25113C": "Ht29 (DS25113C)"}, {"HT29-DS34646A": "Ht29 (DS34646A)"}, {"HT29-DS38587A": "Ht29 (DS38587A)"}, {"ISL1-DS39591C": "Isl1 (DS39591C)"}, {"ISL1-DS55938A": "Isl1 (DS55938A)"}, {"K562-DS52908H": "K562 (DS52908H)"}, {"Karpas_422-DS27641A": "Karpas 422 (DS27641A)"}, {"Karpas_422-DS27648A": "Karpas 422 (DS27648A)"}, {"L1S8R-DS24861A": "L1S8R (DS24861A)"}, {"L1S8R-DS24867A": "L1S8R (DS24867A)"}, {"limb-DS38376B": "Limb (DS38376B)"}, {"limb-DS38549A": "Limb (DS38549A)"}, {"limb-DS38801B": "Limb (DS38801B)"}, {"Liver-DS51607A": "Liver (DS51607A)"}, {"LoVo-DS34628A": "Lovo (DS34628A)"}, {"LoVo-DS37550A": "Lovo (DS37550A)"}, {"Lung-DS47911B": "Lung (DS47911B)"}, {"Medulla-DS23433C": "Medulla (DS23433C)"}, {"MG63-DS24640A": "Mg63 (DS24640A)"}, {"MM_1S-DS27522A": "Mm 1S (DS27522A)"}, {"muscle_skeletal-DS37172B": "Muscle Skeletal (DS37172B)"}, {"muscle_skeletal-DS48446B": "Muscle Skeletal (DS48446B)"}, {"muscle_skeletal-DS48447B": "Muscle Skeletal (DS48447B)"}, {"NCI_H226-DS21975C": "Nci H226 (DS21975C)"}, {"neuronal-DS32096A": "Neuronal (DS32096A)"}, {"NPC-DS39609C": "Npc (DS39609C)"}, {"NPC-DS55951A": "Npc (DS55951A)"}, {"Oci_Ly_7-DS27687A": "Oci Ly 7 (DS27687A)"}, {"Oci_Ly_7-DS29219C": "Oci Ly 7 (DS29219C)"}, {"Pancreas-DS37124A": "Pancreas (DS37124A)"}, {"Pancreas-DS37124B": "Pancreas (DS37124B)"}, {"Pancreas-DS37150A": "Pancreas (DS37150A)"}, {"Pancreas-DS37150B": "Pancreas (DS37150B)"}, {"Pancreas-DS37156B": "Pancreas (DS37156B)"}, {"Pancreas-DS37156S": "Pancreas (DS37156S)"}, {"Pancreas-DS40126B": "Pancreas (DS40126B)"}, {"Pancreas-DS40128A": "Pancreas (DS40128A)"}, {"Pancreas-DS40144B": "Pancreas (DS40144B)"}, {"PC3-DS25027C": "Pc3 (DS25027C)"}, {"PC3-DS25129C": "Pc3 (DS25129C)"}, {"PC9-DS27166A": "Pc9 (DS27166A)"}, {"PGP1_fibroblast-DS26113A": "Pgp1 Fibroblast (DS26113A)"}, {"PGP1_iPSC-DS26455A": "Pgp1 Ipsc (DS26455A)"}, {"Prostate-DS51612A": "Prostate (DS51612A)"}, {"renal_cell_carcinoma-DS26693A": "Renal Cell Carcinoma (DS26693A)"}, {"RPMI_8226-DS22913C": "Rpmi 8226 (DS22913C)"}, {"SJCRH30-DS23123A": "Sjcrh30 (DS23123A)"}, {"SJSA1-DS24235A": "Sjsa1 (DS24235A)"}, {"Skin-DS40272A": "Skin (DS40272A)"}, {"Skin-DS40313A": "Skin (DS40313A)"}, {"small_intestine_terminal_ileum-DS48302B": "Small Intestine Terminal Ileum (DS48302B)"}, {"small_intestine_terminal_ileum-DS48390B": "Small Intestine Terminal Ileum (DS48390B)"}, {"small_intestine_terminal_ileum-DS48450B": "Small Intestine Terminal Ileum (DS48450B)"}, {"small_intestine_terminal_ileum-DS51668A": "Small Intestine Terminal Ileum (DS51668A)"}, {"smooth_muscle-DS32150D": "Smooth Muscle (DS32150D)"}, {"smooth_muscle-DS39312C": "Smooth Muscle (DS39312C)"}, {"Spleen-DS39990A": "Spleen (DS39990A)"}, {"Spleen-DS39997A": "Spleen (DS39997A)"}, {"Spleen-DS47921A": "Spleen (DS47921A)"}, {"Spleen-DS48802B": "Spleen (DS48802B)"}, {"Spleen-DS51729A": "Spleen (DS51729A)"}, {"Stomach-DS51560A": "Stomach (DS51560A)"}, {"Stomach-DS51566A": "Stomach (DS51566A)"}, {"Stomach-DS51616A": "Stomach (DS51616A)"}, {"SW_480-DS37546A": "Sw 480 (DS37546A)"}, {"SW_480-DS38592A": "Sw 480 (DS38592A)"}, {"Testis-DS51675A": "Testis (DS51675A)"}, {"Thyroid-DS37131B": "Thyroid (DS37131B)"}, {"Thyroid-DS37131S": "Thyroid (DS37131S)"}, {"Thyroid-DS37165A": "Thyroid (DS37165A)"}, {"Thyroid-DS37165B": "Thyroid (DS37165B)"}, {"Thyroid-DS39611A": "Thyroid (DS39611A)"}, {"Thyroid-DS39611B": "Thyroid (DS39611B)"}, {"Thyroid-DS39957A": "Thyroid (DS39957A)"}, {"Thyroid-DS39957B": "Thyroid (DS39957B)"}, {"Thyroid-DS39958A": "Thyroid (DS39958A)"}, {"Thyroid-DS39958B": "Thyroid (DS39958B)"}, {"tibial_nerve-DS48216C": "Tibial Nerve (DS48216C)"}, {"tibial_nerve-DS48306B": "Tibial Nerve (DS48306B)"}, {"tibial_nerve-DS48428B": "Tibial Nerve (DS48428B)"}, {"Trophoblast-DS30587A": "Trophoblast (DS30587A)"}, {"Trophoblast-DS31397A": "Trophoblast (DS31397A)"}, {"Trophoblast-DS35787A": "Trophoblast (DS35787A)"}, {"Uterus-DS40116A": "Uterus (DS40116A)"}, {"Uterus-DS40116B": "Uterus (DS40116B)"}, {"Vagina-DS51574A": "Vagina (DS51574A)"}],
  'style' : {
    'color' : {
      'backgroundRectFill'                   : '#dcdcdc',
      'backgroundRectFillOpacity'            : '0.25',
      'footprintHighlightRectFill'           : '#f00',
      'footprintHighlightRectFillOpacity'    : '0.35',
      'probePositionMarkerLineStroke'        : '#222',
      'sequenceGenericTextFill'              : '#000',
      'sequenceHighlightedTextFill'          : '#000',
      'sequenceHighlightedBackground'        : '#d4defd',
      'signalPrimaryRectFill'                : '#4CA34C',
      'signalPrimaryLineFill'                : 'none',
      'signalPrimaryLineStroke'              : '#4CA34C',
      'signalPrimaryFocusFill'               : '#DBECDB',
      'signalPrimaryFocusStroke'             : '#000',
      'signalPrimaryFocusCircleFill'         : 'none',
      'signalPrimaryFocusCircleStroke'       : '#4CA34C',
      'signalPrimaryFocusTextFill'           : '#000',
      'signalPrimaryProbeMarkerCircleFill'   : '#4CA34C',
      'signalHighlightFocusCircleFill'       : '#1F441F',
      'signalHighlightRectFill'              : '#d4defd',
      'signalHighlightRectFillOpacity'       : '0.75',
      'xAxisGenericTextFill'                 : '#000',
      'xAxisMoreGenericTextFill'             : '#666',
      'xAxisHighlightedTextFill'             : '#000'
    },
    'size' : {
      'signal' : {
        'primaryLineStrokeWidth' : '3'
      },
      'sequenceGenericText' : {
        'small'  : '0.7em',
        'medium' : '0.9em',
        'large'  : '1.1em'
      },
      'tickLabelText' : {
        'small'  : '0.8em',
        'large'  : '1.0em',
      }
    },
    'weight' : {
      'sequenceGenericText'     : '100',
      'sequenceHighlightedText' : 'bold',
      'xAxisGenericText'        : '100',
      'xAxisHighlightedText'    : 'bold',
      'yAxisGenericText'        : '100'
    },
    'generic' : {
      'footprintHighlightPadding'  : 4.0,
      'signalHighlightPadding'     : 4.0,
      'probePositionMarkerPadding' : 4.0,
      'axisTopPadding'             : 5.0,
    }
  },
  'tf' : {
    'databases' : ['uniprobe', 'jaspar', 'taipale', 'xfac'],
    'db_name_formatted' : {
      'uniprobe' : 'UniProbe',
      'jaspar' : 'JASPAR',
      'taipale' : 'Taipale/SELEX',
      'xfac' : 'TRANSFAC'
    },
    'n' : 2091
  }
};