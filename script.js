/**
 * Dataset for Azolla Diagnostic Guide
 * Translations: English (en), Hindi (hi), Telugu (te), Tamil (ta), Malayalam (ml), Spanish (es)
 */
const translations = {
    en: {
        ui: {
            t_page_title: "Azolla Diagnosis & Care Guide",
            t_badge: "Complete Diagnostic Tool",
            t_hero_title: "Azolla Cultivation",
            t_hero_subtitle: "Image Recognition & Health Diagnosis Guide",
            t_chk_title: "Quick Daily Checklist",
            t_chk_sub: "Every morning, check these 5 things by looking at your bed:",
            t_chk_1: "<strong>Color</strong> — Is it green? Or turning yellow, brown, black?",
            t_chk_2: "<strong>Coverage</strong> — Is it spreading evenly or patchy?",
            t_chk_3: "<strong>Water</strong> — Is it clean? Does it smell?",
            t_chk_4: "<strong>Pests</strong> — Any snails, insects on the surface?",
            t_chk_5: "<strong>Level</strong> — Is water between 10–15 cm?",
            t_chk_alert: "If any answer is \"no\" or \"something looks wrong\" — find the matching stage below!",
            t_ai_title: "🤖 AI Azolla Analyzer",
            t_ai_sub: "Upload a photo of your Azolla bed to get an instant diagnosis!",
            t_ai_drop: "Drag & Drop your image here or <span class=\"text-primary font-bold\">Browse</span>",
            t_ai_scan: "Analyzing pixels...",
            t_tbl_title: "Visual Identification Summary",
            t_th_color: "Image Color",
            t_th_growth: "Growth Pattern",
            t_th_prob: "Most Likely Problem",
            t_th_act: "First Action",
            btn_details: "View Full Diagnosis",
            btn_suggestions: "View Full Suggestions & Details",
            btn_upload_another: "Upload another image",
            alert_upload: "Please upload an image file.",
            detected: "Detected",
            stage_badge: "Stage",
            diagnosis_lbl: "Diagnosis",
            visual_lbl: "👀 Visual Signs",
            causes_lbl: "⚠️ Possible Causes",
            prev_lbl: "🛡️ Prevention",
            sol_lbl: "✅ Immediate Solution",
            status_lbl: "✅ Status",
            status_msg: "Your Azolla bed is in perfect condition! No immediate action required.",
            look_for: "What to look for:"
        },
        data: [
            { stage: 1, themeId: 1, title: "Healthy Azolla", diagnosis: "Healthy condition. Continue regular maintenance.", visuals: ["Color is bright green to dark green", "Plants are dense and cover water evenly", "Leaves are small, fluffy"], sum_color: "Bright green", sum_growth: "Dense, even", sum_prob: "Healthy", sum_act: "No action needed" },
            { stage: 2, themeId: 2, title: "Yellow Azolla", diagnosis: "Nutrient Deficiency (most common cause)", visuals: ["Color changes to pale yellow", "Plants look weak", "Yellow patches appear"], causes: ["Not enough cow dung slurry", "Super phosphate not added", "Water is too old", "Overcrowding"], solutions: ["Mix 1 kg cow dung in 5L water", "Pour slurry evenly", "Add 10g super phosphate", "Remove excess Azolla"], prevention: ["Add cow dung every 5 days", "Never let Azolla cover >80% surface"], sum_color: "Pale yellow", sum_growth: "Thin, slow", sum_prob: "Nutrient deficiency", sum_act: "Add cow dung + phosphate" },
            { stage: 3, themeId: 3, title: "Brown or Black Azolla", diagnosis: "Heat Stress or Direct Sunlight", visuals: ["Turns brown or black", "Burnt edges", "Water level low"], causes: ["Temp above 35°C", "No shade", "Low water level"], solutions: ["Put shade net", "Add fresh cool water", "Remove dead Azolla"], prevention: ["Keep under 50% shade", "Check water level daily"], sum_color: "Brown/black", sum_growth: "Burnt edges", sum_prob: "Heat stress", sum_act: "Add shade + water" },
            { stage: 4, themeId: 4, title: "Patchy/Uneven Growth", diagnosis: "Overcrowding + Poor Nutrient Distribution", visuals: ["Some areas thick, others thin", "Water visible through gaps"], causes: ["Nutrients not spread evenly", "Wind pushing plants", "Uneven floor"], solutions: ["Stir to redistribute", "Thin out dense areas", "Add nutrients evenly"], prevention: ["Spread nutrients from all sides", "Harvest evenly"], sum_color: "Mixed yellow-green", sum_growth: "Patchy", sum_prob: "Overcrowding", sum_act: "Remove excess + add nutrients" },
            { stage: 5, themeId: 5, title: "Pest Attack", diagnosis: "Snails, Grasshoppers, or Insects", visuals: ["Holes or bite marks", "Snails visible"], causes: ["Insects at night", "No barrier"], solutions: ["Pick snails by hand", "Spray neem oil", "Place net over bed"], prevention: ["Use net cover at night", "Neem spray every 2 weeks"], sum_color: "Dull green", sum_growth: "Holes in mat", sum_prob: "Pest attack", sum_act: "Remove pests + neem" },
            { stage: 6, themeId: 6, title: "Dirty Water / Foul Smell", diagnosis: "Water Contamination", visuals: ["Water dark/muddy", "Foam floating", "Algae", "Foul smell"], causes: ["Too much cow dung", "Water not changed"], solutions: ["Remove Azolla", "Clean bed", "Refill fresh water"], prevention: ["Change 30% water every 10 days"], sum_color: "Dull, clumped", sum_growth: "Dirty water", sum_prob: "Contamination", sum_act: "Replace water" },
            { stage: 7, themeId: 7, title: "Slow Growth", diagnosis: "Nutrient Deficiency or Cold", visuals: ["Thin mat", "Healthy color but not multiplying"], causes: ["Temp below 15°C", "Nutrients exhausted", "Wrong pH"], solutions: ["Test pH", "Add fresh dung + phosphate", "Reduce water level"], prevention: ["Check pH every 2 weeks", "Maintain nutrient schedule"], sum_color: "Green but still", sum_growth: "No spreading", sum_prob: "Cold or pH issue", sum_act: "Check pH + nutrients" }
        ]
    },
    hi: {
        ui: {
            t_page_title: "अजोला देखभाल गाइड",
            t_badge: "संपूर्ण निदान उपकरण",
            t_hero_title: "अजोला की खेती",
            t_hero_subtitle: "स्वास्थ्य निदान गाइड",
            t_chk_title: "दैनिक चेकलिस्ट",
            t_chk_sub: "हर सुबह इन चीजों की जांच करें:",
            t_chk_1: "<strong>रंग</strong> — क्या यह हरा है? या पीला/भूरा?",
            t_chk_2: "<strong>फैलाव</strong> — क्या यह समान रूप से फैल रहा है?",
            t_chk_3: "<strong>पानी</strong> — क्या यह साफ है? बदबू तो नहीं आ रही?",
            t_chk_4: "<strong>कीट</strong> — सतह पर घोंघे, कीड़े हैं?",
            t_chk_5: "<strong>स्तर</strong> — क्या पानी 10-15 सेमी है?",
            t_chk_alert: "यदि कुछ गलत लग रहा है - नीचे जांचें!",
            t_ai_title: "🤖 AI विश्लेषक",
            t_ai_sub: "तस्वीर अपलोड करें और निदान पाएं!",
            t_ai_drop: "यहाँ छवि छोड़ें या <span class=\"text-primary font-bold\">ब्राउज़ करें</span>",
            t_ai_scan: "पिक्सेल का विश्लेषण कर रहा है...",
            t_tbl_title: "सारांश",
            t_th_color: "रंग",
            t_th_growth: "पैटर्न",
            t_th_prob: "संभावित समस्या",
            t_th_act: "कार्रवाई",
            btn_details: "निदान देखें",
            btn_suggestions: "सुझाव देखें",
            btn_upload_another: "एक और छवि अपलोड करें",
            alert_upload: "छवि फ़ाइल अपलोड करें।",
            detected: "पाया गया",
            stage_badge: "चरण",
            diagnosis_lbl: "निदान",
            visual_lbl: "👀 दृश्य संकेत",
            causes_lbl: "⚠️ संभावित कारण",
            prev_lbl: "🛡️ रोकथाम",
            sol_lbl: "✅ तत्काल समाधान",
            status_lbl: "✅ स्थिति",
            status_msg: "अजोला बिलकुल स्वस्थ है!",
            look_for: "क्या देखना है:"
        },
        data: [
            { stage: 1, themeId: 1, title: "स्वस्थ अजोला", diagnosis: "स्वस्थ। रखरखाव जारी रखें।", visuals: ["चमकीला हरा", "समान रूप से फैलाव"], sum_color: "चमकीला हरा", sum_growth: "घना", sum_prob: "स्वस्थ", sum_act: "कुछ नहीं" },
            { stage: 2, themeId: 2, title: "पीला अजोला", diagnosis: "पोषक तत्वों की कमी", visuals: ["पीला रंग", "कमजोर पौधे"], causes: ["गोबर की कमी", "सुपर फॉस्फेट की कमी"], solutions: ["गोबर का घोल डालें", "सुपर फॉस्फेट डालें"], prevention: ["गोबर का घोल हर 5 दिन में डालें"], sum_color: "पीला", sum_growth: "पतला", sum_prob: "पोषक कमी", sum_act: "गोबर + फॉस्फेट" },
            { stage: 3, themeId: 3, title: "भूरा या काला अजोला", diagnosis: "गर्मी का तनाव", visuals: ["जले हुए पत्ते", "कालापन"], causes: ["तेज धूप", "तापमान >35°C"], solutions: ["शेड नेट लगाएं", "ठंडा पानी डालें"], prevention: ["50% छाया रखें"], sum_color: "भूरा", sum_growth: "जले किनारे", sum_prob: "गर्मी", sum_act: "छाया + पानी" },
            { stage: 4, themeId: 4, title: "असमान वृद्धि", diagnosis: "पोषक वितरण में कमी", visuals: ["कुछ हिस्सों में खाली जगह"], causes: ["असमान पोषक तत्व"], solutions: ["समान रूप से पोषक तत्व डालें"], prevention: ["सभी तरफ से खाद डालें"], sum_color: "मिश्रित पीला", sum_growth: "खाली जगह", sum_prob: "अति-घनत्व", sum_act: "अतिरिक्त निकालें" },
            { stage: 5, themeId: 5, title: "कीट का हमला", diagnosis: "घोंघे या कीड़े", visuals: ["पत्तों पर छेद", "घोंघे"], causes: ["सुरक्षा की कमी"], solutions: ["नीम के तेल का छिड़काव", "घोंघे हटाएं"], prevention: ["जाली लगाएं"], sum_color: "फीका हरा", sum_growth: "छेददार", sum_prob: "कीट हमला", sum_act: "नीम छिड़काव" },
            { stage: 6, themeId: 6, title: "गंदा पानी", diagnosis: "प्रदूषित पानी", visuals: ["गंदा/बदबूदार पानी", "काई"], causes: ["गोबर अधिक होना"], solutions: ["पानी बदलें"], prevention: ["हर 10 दिन में 30% पानी बदलें"], sum_color: "गंदा", sum_growth: "गंदा पानी", sum_prob: "प्रदूषण", sum_act: "पानी बदलें" },
            { stage: 7, themeId: 7, title: "धीमी वृद्धि", diagnosis: "ठंड या अपर्याप्त पोषक", visuals: ["कोई फैलाव नहीं"], causes: ["तापमान कम होना", "गलत pH"], solutions: ["pH जांचें", "खाद डालें"], prevention: ["सर्दियों में ढकें"], sum_color: "हरा", sum_growth: "कोई वृद्धि नहीं", sum_prob: "ठंड/pH", sum_act: "pH + खाद" }
        ]
    },
    te: {
        ui: {
            t_page_title: "అజోల్లా కేర్ గైడ్",
            t_badge: "రోగనిర్ధారణ సాధనం",
            t_hero_title: "అజోల్లా సాగు",
            t_hero_subtitle: "చిత్ర గుర్తింపు & ఆరోగ్య సూచనలు",
            t_chk_title: "రోజువారీ చెక్‌లిస్ట్",
            t_chk_sub: "ప్రతిరోజూ ఉదయం వీటిని తనిఖీ చేయండి:",
            t_chk_1: "<strong>రంగు</strong> — ఆకుపచ్చగా ఉందా? పసుపు లేదా నలుపు రంగులో ఉందా?",
            t_chk_2: "<strong>వ్యాప్తి</strong> — మంచం అంతటా సమానంగా వ్యాపించిందా?",
            t_chk_3: "<strong>నీరు</strong> — శుభ్రంగా ఉందా? వాసన వస్తోందా?",
            t_chk_4: "<strong>తెగులు</strong> — నత్తలు, పురుగులు ఉన్నాయా?",
            t_chk_5: "<strong>నీటి స్థాయి</strong> — 10-15 సెం.మీ మధ్య ఉందా?",
            t_chk_alert: "ఏదైనా తప్పుగా అనిపిస్తే - కింద ఉన్న దశలను తనిఖీ చేయండి!",
            t_ai_title: "🤖 AI ఎనలైజర్",
            t_ai_sub: "వెంటనే రోగనిర్ధారణ పొందడానికి మీ అజోల్లా ఫోటోను అప్‌లోడ్ చేయండి!",
            t_ai_drop: "చిత్రాన్ని ఇక్కడ లాగండి లేదా <span class=\"text-primary font-bold\">బ్రౌజ్ చేయండి</span>",
            t_ai_scan: "విశ్లేషిస్తోంది...",
            t_tbl_title: "సారాంశం",
            t_th_color: "రంగు",
            t_th_growth: "విధానం",
            t_th_prob: "సమస్య",
            t_th_act: "చర్య",
            btn_details: "పూర్తి వివరాలు చూడండి",
            btn_suggestions: "నిర్ధారణ చూడండి",
            btn_upload_another: "కొత్త ఫోటో అప్‌లోడ్ చేయండి",
            alert_upload: "దయచేసి ఇమేజ్ ఫైల్‌ని అప్‌లోడ్ చేయండి.",
            detected: "గుర్తించబడింది",
            stage_badge: "దశ",
            diagnosis_lbl: "రోగ నిర్ధారణ",
            visual_lbl: "👀 లక్షణాలు",
            causes_lbl: "⚠️ కారణాలు",
            prev_lbl: "🛡️ నివారణ",
            sol_lbl: "✅ పరిష్కారం",
            status_lbl: "✅ స్థితి",
            status_msg: "అజోల్లా ఆరోగ్యంగా ఉంది! ఎటువంటి చర్య అవసరం లేదు.",
            look_for: "లక్షణాలు:"
        },
        data: [
            { stage: 1, themeId: 1, title: "ఆరోగ్యకరమైన అజోల్లా", diagnosis: "ఆరోగ్యంగా ఉంది. ఇలానే నిర్వహించండి.", visuals: ["ఆకుపచ్చ రంగు", "సమానంగా వ్యాపించింది"], sum_color: "ఆకుపచ్చ", sum_growth: "సమానంగా", sum_prob: "ఆరోగ్యం", sum_act: "ఏమీ అక్కర్లేదు" },
            { stage: 2, themeId: 2, title: "పసుపు అజోల్లా", diagnosis: "పోషకాల లోపం", visuals: ["పసుపు రంగు", "బలహీనంగా ఉండటం"], causes: ["పేడ సరిపోక", "సూపర్ ఫాస్ఫేట్ లేకపోవడం"], solutions: ["ఆవు పేడ ద్రావణం కలపండి", "సూపర్ ఫాస్ఫేట్ కలపండి"], prevention: ["ప్రతి 5 రోజులకు పేడ వేయాలి"], sum_color: "పసుపు", sum_growth: "పలచగా", sum_prob: "పోషకాల లోపం", sum_act: "పేడ + ఫాస్ఫేట్" },
            { stage: 3, themeId: 3, title: "నలుపు / బ్రౌన్ అజోల్లా", diagnosis: "ఎండ వేడి ప్రభావం", visuals: ["మాడిపోయిన ఆకులు", "నలుపు రంగు"], causes: ["తీవ్రమైన ఎండ", "తక్కువ నీరు"], solutions: ["నీడ అల్లను (షేడ్ నెట్) వేయండి", "నీరు కలపండి"], prevention: ["50% నీడ ఉంచాలి"], sum_color: "నలుపు", sum_growth: "మాడిన అంచులు", sum_prob: "ఎండ వేడి", sum_act: "నీడ + నీరు" },
            { stage: 4, themeId: 4, title: "అసమాన పెరుగుదల", diagnosis: "పోషకాలు వ్యాపించకపోవడం", visuals: ["ఖాళీ ప్రదేశాలు"], causes: ["పోషకాలు సరిగా కలపకపోవడం"], solutions: ["నీటిని కలపాలి", "పోషకాలు సమానంగా వేయాలి"], prevention: ["నలువైపులా ఎరువు వేయాలి"], sum_color: "మిశ్రమ పసుపు", sum_growth: "అసమానంగా", sum_prob: "ఎక్కువ మొక్కలు", sum_act: "మిగిలినవి తీయాలి" },
            { stage: 5, themeId: 5, title: "తెగులు దాడి", diagnosis: "నత్తలు లేదా పురుగులు", visuals: ["ఆకులపై రంధ్రాలు", "నత్తలు"], causes: ["నత్తలు చేరడం"], solutions: ["వేప నూనె చల్లండి", "నత్తలను ఏరేయండి"], prevention: ["దోమతెర వాడండి"], sum_color: "లేత ఆకుపచ్చ", sum_growth: "రంధ్రాలు", sum_prob: "తెగులు వలయము", sum_act: "వేప నూనె చల్లాలి" },
            { stage: 6, themeId: 6, title: "మురికి నీరు", diagnosis: "నీటి కాలుష్యం", visuals: ["చెడు వాసన", "మురికి నీరు"], causes: ["ఎక్కువ పేడ వేయడం"], solutions: ["నీరు మార్చండి"], prevention: ["ప్రతి 10 రోజులకు 30% నీరు మార్చాలి"], sum_color: "మురికి", sum_growth: "గట్టిగా", sum_prob: "కాలుష్యం", sum_act: "నీరు మార్చండి" },
            { stage: 7, themeId: 7, title: "పెరుగుదల లేదు", diagnosis: "చలి లేదా పీహెచ్ సమస్య", visuals: ["వ్యాపించడం లేదు"], causes: ["చలిగాలి", "పీహెచ్ లోపం"], solutions: ["pH చెక్ చేయాలి", "ఎరువు వేయాలి"], prevention: ["చలికాలంలో కప్పి ఉంచాలి"], sum_color: "ఆకుపచ్చ", sum_growth: "పెరుగుదల లేదు", sum_prob: "చలి/pH", sum_act: "pH + పేడ" }
        ]
    },
    ta: {
        ui: {
            t_page_title: "அசோலா பராமரிப்பு வழிகாட்டி",
            t_badge: "முழுமையான நோயறிதல் கருவி",
            t_hero_title: "அசோலா சாகுபடி",
            t_hero_subtitle: "சுகாதார நோயறிதல் கருவி",
            t_chk_title: "தினசரி சரிபார்ப்பு",
            t_chk_sub: "தினமும் இந்த 5 விஷயங்களை சரிபார்க்கவும்:",
            t_chk_1: "<strong>நிறம்</strong> — பச்சை அல்லது மஞ்சள்/கருப்பு நிறத்தில் உள்ளதா?",
            t_chk_2: "<strong>பரவல்</strong> — சீராக பரவியுள்ளதா?",
            t_chk_3: "<strong>தண்ணீர்</strong> — சுத்தமாக உள்ளதா? நாற்றம் வீசுகிறதா?",
            t_chk_4: "<strong>பூச்சிகள்</strong> — நத்தைகள் அல்லது பூச்சிகள் உள்ளதா?",
            t_chk_5: "<strong>பரப்பு</strong> — தண்ணீர் 10-15 செ.மீ உள்ளதா?",
            t_chk_alert: "ஏதேனும் தவறு தெரிந்தால் - கீழே உள்ள நிலைகளை காணவும்!",
            t_ai_title: "🤖 AI பகுப்பாய்வி",
            t_ai_sub: "உடனடி நோயறிதல் பெற புகைப்படத்தை ஏற்றவும்!",
            t_ai_drop: "படத்தை இங்கு இழுத்து போடவும் அல்லது <span class=\"text-primary font-bold\">Browse</span>",
            t_ai_scan: "பகுப்பாய்வு நடக்கிறது...",
            t_tbl_title: "சுருக்கம்",
            t_th_color: "நிறம்",
            t_th_growth: "வளர்ச்சி",
            t_th_prob: "பிரச்சனை",
            t_th_act: "செயல்",
            btn_details: "நோயறிதலைக் காணவும்",
            btn_suggestions: "ஆலோசனைகளை காணவும்",
            btn_upload_another: "புதிய படத்தை ஏற்றவும்",
            alert_upload: "தயவுசெய்து பட கோப்பை ஏற்றவும்.",
            detected: "கண்டறியப்பட்டது",
            stage_badge: "நிலை",
            diagnosis_lbl: "நோயறிதல்",
            visual_lbl: "👀 அறிகுறிகள்",
            causes_lbl: "⚠️ காரணங்கள்",
            prev_lbl: "🛡️ தடுப்பு முறை",
            sol_lbl: "✅ தீர்வு",
            status_lbl: "✅ நிலை",
            status_msg: "அசோலா ஆரோக்கியமாக உள்ளது!",
            look_for: "அறிகுறிகள்:"
        },
        data: [
            { stage: 1, themeId: 1, title: "ஆரோக்கியமான அசோலா", diagnosis: "ஆரோக்கியம்", visuals: ["அடர் பச்சை நிறம்", "சீரான பரவல்"], sum_color: "பச்சை", sum_growth: "சீரானது", sum_prob: "ஆரோக்கியம்", sum_act: "செயல் இல்லை" },
            { stage: 2, themeId: 2, title: "மஞ்சள் அசோலா", diagnosis: "ஊட்டச்சத்து குறைபாடு", visuals: ["மஞ்சள் நிறம்"], causes: ["சாணம் பற்றாக்குறை"], solutions: ["சாணக்கரைசல் சேர்க்கவும்"], prevention: ["5 நாட்களுக்கு ஒருமுறை சாணம்"], sum_color: "மஞ்சள்", sum_growth: "மெலிதானது", sum_prob: "ஊட்டச்சத்து குறை", sum_act: "சாணம் + பாஸ்பேட்" },
            { stage: 3, themeId: 3, title: "கருப்பு அசோலா", diagnosis: "வெயில் பாதிப்பு", visuals: ["காய்ந்த இலைகள்", "கருப்பு நிறம்"], causes: ["அதிக வெயில்"], solutions: ["நிழல் ஆலை அமைக்கவும்", "தண்ணீர் சேர்க்கவும்"], prevention: ["50% நிழல்"], sum_color: "கருப்பு", sum_growth: "கருகிய நிலை", sum_prob: "அதிக வெயில்", sum_act: "நிழல் + தண்ணீர்" },
            { stage: 4, themeId: 4, title: "சீரற்ற வளர்ச்சி", diagnosis: "ஊட்டச்சத்து பரவவில்லை", visuals: ["வெற்று இடங்கள்"], causes: ["ஊட்டச்சத்து சீரற்ற தன்மை"], solutions: ["உரத்தை சீராக இடுங்கள்"], prevention: ["நான்கு புறமும் உரம்"], sum_color: "மஞ்சள் கலந்த", sum_growth: "சீரற்றது", sum_prob: "விதை நெருக்கம்", sum_act: "அதிகம் நீக்கு" },
            { stage: 5, themeId: 5, title: "பூச்சி தாக்குதல்", diagnosis: "நத்தைகள், பூச்சிகள்", visuals: ["ஓட்டைகள்"], causes: ["நத்தைகள்"], solutions: ["வேப்ப எண்ணெய் தெளிக்கவும்", "நத்தைகளை நீக்கவும்"], prevention: ["வலை பயன்படுத்தவும்"], sum_color: "வெளிர் பச்சை", sum_growth: "ஓட்டைகள்", sum_prob: "பூச்சி பாதிப்பு", sum_act: "வேப்ப எண்ணெய்" },
            { stage: 6, themeId: 6, title: "அழுக்கு நீர்", diagnosis: "நீர் மாசு", visuals: ["துர்நாற்றம்"], causes: ["அதிக சாணம்"], solutions: ["தண்ணீரை மாற்றவும்"], prevention: ["10 நாட்களுக்கு ஒருமுறை நீர் மாற்று"], sum_color: "அழுக்கு", sum_growth: "மோசமானது", sum_prob: "மாசுபாடு", sum_act: "நீர் மாற்று" },
            { stage: 7, themeId: 7, title: "வளர்ச்சி இன்மை", diagnosis: "குளிர் / pH பிரச்சனை", visuals: ["வளர்ச்சி இல்லை"], causes: ["குளிர்"], solutions: ["pH சரிபார்க்கவும்"], prevention: ["குளிர்காலத்தில் மூடவும்"], sum_color: "பச்சை", sum_growth: "விரிவடையவில்லை", sum_prob: "குளிர்", sum_act: "pH + உரம்" }
        ]
    },
    ml: {
        ui: {
            t_page_title: "അസോള സംരക്ഷണ ഗൈഡ്",
            t_badge: "രോഗനിർണ്ണയ ഉപകരണങ്ങൾ",
            t_hero_title: "അസോള കൃഷി",
            t_hero_subtitle: "രോഗനിർണ്ണയ ഗൈഡ്",
            t_chk_title: "പ്രതിദിന പരിശോധന",
            t_chk_sub: "ദിവസവും ഇവ പരിശോധിക്കുക:",
            t_chk_1: "<strong>നിറം</strong> — പച്ചയാണോ? മഞ്ഞയോ കറുപ്പോ ആണോ?",
            t_chk_2: "<strong>വളർച്ച</strong> — ഒരുപോലെ വളരുന്നുണ്ടോ?",
            t_chk_3: "<strong>വെള്ളം</strong> — ശുദ്ധമാണോ? ദുർഗന്ധമുണ്ടോ?",
            t_chk_4: "<strong>കീടങ്ങൾ</strong> — ഒച്ചുകളോ പ്രാണികളോ ഉണ്ടോ?",
            t_chk_5: "<strong>നിരപ്പ്</strong> — 10-15 സെ.മീ ആണോ?",
            t_chk_alert: "എന്തെങ്കിലും കുഴപ്പമുണ്ടെങ്കിൽ - താഴെ കണ്ടെത്തുക!",
            t_ai_title: "🤖 AI അനലൈസർ",
            t_ai_sub: "നിങ്ങളുടെ അസോളയുടെ ഫോട്ടോ നൽകുക!",
            t_ai_drop: "ചിത്രം ഇവിടെ നൽകുക അല്ലെങ്കിൽ <span class=\"text-primary font-bold\">തിരയുക</span>",
            t_ai_scan: "വിശകലനം ചെയ്യുന്നു...",
            t_tbl_title: "സംഗ്രഹം",
            t_th_color: "നിറം",
            t_th_growth: "വളർച്ച",
            t_th_prob: "പ്രശ്നം",
            t_th_act: "പരിഹാരം",
            btn_details: "കൂടുതൽ വിവരങ്ങൾ",
            btn_suggestions: "നിർദ്ദേശങ്ങൾ കാണുക",
            btn_upload_another: "മറ്റൊരു ചിത്രം നൽകുക",
            alert_upload: "ദയവായി ഒരു ചിത്രം നൽകുക.",
            detected: "കണ്ടെത്തിയിരിക്കുന്നു",
            stage_badge: "ഘട്ടം",
            diagnosis_lbl: "രോഗനിർണ്ണയം",
            visual_lbl: "👀 ലക്ഷണങ്ങൾ",
            causes_lbl: "⚠️ കാരണങ്ങൾ",
            prev_lbl: "🛡️ പ്രതിരോധം",
            sol_lbl: "✅ പരിഹാരം",
            status_lbl: "✅ അവസ്ഥ",
            status_msg: "അസോള ആരോഗ്യകരമാണ്. പ്രശ്നങ്ങളില്ല.",
            look_for: "ലക്ഷണങ്ങൾ:"
        },
        data: [
            { stage: 1, themeId: 1, title: "ആരോഗ്യകരമായ അസോള", diagnosis: "ആരോഗ്യകരം.", visuals: ["പച്ച നിറം", "ഒരുപോലെ വളരുന്നു"], sum_color: "പച്ച", sum_growth: "നല്ല വളർച്ച", sum_prob: "ആരോഗ്യം", sum_act: "വേണ്ട" },
            { stage: 2, themeId: 2, title: "മഞ്ഞ അസോള", diagnosis: "പോഷക കുറവ്", visuals: ["മഞ്ഞ നിറം"], causes: ["ചാണകം ഇല്ല"], solutions: ["ചാണകം ചേർക്കുക", "ഫോസ്ഫേറ്റ് നൽകുക"], prevention: ["5 ദിവസത്തിലൊരിക്കൽ ചാണകം"], sum_color: "മഞ്ഞ", sum_growth: "നേർത്തത്", sum_prob: "പോഷക കുറവ്", sum_act: "ചാണകം + ഫോസ്ഫേറ്റ്" },
            { stage: 3, themeId: 3, title: "കറുത്ത അസോള", diagnosis: "ചൂട് കൂടുതൽ", visuals: ["കരിഞ്ഞ ഇലകൾ"], causes: ["ചൂട് കൂടുതൽ", "വെള്ളം ഇല്ല"], solutions: ["തണൽ നൽകുക", "വെള്ളം നിറയ്ക്കുക"], prevention: ["50% തണൽ"], sum_color: "കറുപ്പ്", sum_growth: "കരിഞ്ഞ ഇലകൾ", sum_prob: "ചൂട്", sum_act: "തണൽ + വെള്ളം" },
            { stage: 4, themeId: 4, title: "ക്രമരഹിതമായ വളർച്ച", diagnosis: "വളം ഒരുപോലെയല്ല", visuals: ["ഒഴിഞ്ഞ സ്ഥലങ്ങൾ"], causes: ["വളം എല്ലാവശത്തും ഇല്ല"], solutions: ["വളം എല്ലാവശത്തും നൽകുക"], prevention: ["നാലുഭാഗത്തും വളമിടുക"], sum_color: "മഞ്ഞ കലർന്ന", sum_growth: "ക്രമരഹിതം", sum_prob: "അമിത വളർച്ച", sum_act: "അധികം മാറ്റുക" },
            { stage: 5, themeId: 5, title: "കീടങ്ങൾ", diagnosis: "ഒച്ചുകൾ/പ്രാണികൾ", visuals: ["ദ്വാരങ്ങൾ"], causes: ["ഒച്ച്"], solutions: ["വേപ്പെണ്ണ തളിക്കുക"], prevention: ["വല ഉപയോഗിക്കുക"], sum_color: "മങ്ങിയ പച്ച", sum_growth: "ദ്വാരങ്ങൾ", sum_prob: "കീടങ്ങൾ", sum_act: "വേപ്പെണ്ണ" },
            { stage: 6, themeId: 6, title: "മലിനജലം", diagnosis: "വെള്ളം മലിനമായി", visuals: ["ദുർഗന്ധം", "അഴുക്ക് വെള്ളം"], causes: ["അമിത ചാണകം"], solutions: ["വെള്ളം മാറ്റുക"], prevention: ["വെള്ളം ഇടയ്ക്കിടെ മാറ്റുക"], sum_color: "മലിനമായ", sum_growth: "അഴുക്ക്", sum_prob: "മലിനീകരണം", sum_act: "വെള്ളം മാറ്റുക" },
            { stage: 7, themeId: 7, title: "വളർച്ച ഇല്ല", diagnosis: "തണുപ്പ് / pH പ്രശ്നം", visuals: ["വളരുന്നില്ല"], causes: ["തണുപ്പ്", "pH മോശം"], solutions: ["pH പരിശോധിക്കുക"], prevention: ["തണുപ്പുകാലത്ത് മൂടുക"], sum_color: "പച്ച", sum_growth: "വളർച്ച ഇല്ല", sum_prob: "തണുപ്പ്", sum_act: "pH + വളം" }
        ]
    },
    es: {
        ui: {
            t_page_title: "Guía de Diagnóstico de Azolla",
            t_badge: "Herramienta Completa",
            t_hero_title: "Cultivo de Azolla",
            t_hero_subtitle: "Diagnóstico de Salud",
            t_chk_title: "Verificación Diaria",
            t_chk_sub: "Revisa estas 5 cosas:",
            t_chk_1: "<strong>Color</strong> — ¿Verde o amarillo/negro?",
            t_chk_2: "<strong>Cobertura</strong> — ¿Se propaga bien?",
            t_chk_3: "<strong>Agua</strong> — ¿Limpia y sin mal olor?",
            t_chk_4: "<strong>Plagas</strong> — ¿Caracoles o insectos?",
            t_chk_5: "<strong>Nivel</strong> — ¿Entre 10-15 cm?",
            t_chk_alert: "Si algo parece mal — ¡encuentra la etapa abajo!",
            t_ai_title: "🤖 Analizador IA",
            t_ai_sub: "¡Sube una foto para diagnóstico instantáneo!",
            t_ai_drop: "Arrastre aquí o <span class=\"text-primary font-bold\">Examine</span>",
            t_ai_scan: "Analizando...",
            t_tbl_title: "Resumen Visual",
            t_th_color: "Color",
            t_th_growth: "Crecimiento",
            t_th_prob: "Problema",
            t_th_act: "Acción",
            btn_details: "Ver Detalles",
            btn_suggestions: "Ver Sugerencias",
            btn_upload_another: "Subir otra imagen",
            alert_upload: "Suba un archivo de imagen.",
            detected: "Detectado",
            stage_badge: "Etapa",
            diagnosis_lbl: "Diagnóstico",
            visual_lbl: "👀 Signos Visuales",
            causes_lbl: "⚠️ Causas",
            prev_lbl: "🛡️ Prevención",
            sol_lbl: "✅ Solución",
            status_lbl: "✅ Estado",
            status_msg: "¡Todo excelente! No requiere acción.",
            look_for: "Qué buscar:"
        },
        data: [
            { stage: 1, themeId: 1, title: "Azolla Saludable", diagnosis: "Condición saludable.", visuals: ["Verde brillante", "Plantas densas"], sum_color: "Verde brillante", sum_growth: "Denso", sum_prob: "Saludable", sum_act: "Ninguna" },
            { stage: 2, themeId: 2, title: "Azolla Amarilla", diagnosis: "Deficiencia Nutrientes", visuals: ["Color amarillo"], causes: ["Falta estiércol y fosfato"], solutions: ["Agregar estiércol + super fosfato"], prevention: ["Agregar estiércol regular"], sum_color: "Amarillo pálido", sum_growth: "Delgado", sum_prob: "Falta Nutrientes", sum_act: "Estiércol+fosfato" },
            { stage: 3, themeId: 3, title: "Azolla Quemada", diagnosis: "Estrés por calor", visuals: ["Plantas oscuras", "Orillas quemadas"], causes: ["Temperatura alta"], solutions: ["Agregar sombra y agua"], prevention: ["Poner 50% sombra"], sum_color: "Marrón", sum_growth: "Quemado", sum_prob: "Estrés térmico", sum_act: "Sombra + agua" },
            { stage: 4, themeId: 4, title: "Crecimiento Desigual", diagnosis: "Mala distribución", visuals: ["Parches vacíos"], causes: ["Nutrientes de un lado"], solutions: ["Agitar el agua"], prevention: ["Repartir en 4 lados"], sum_color: "Verde-Amarillo", sum_growth: "Parches", sum_prob: "Superpoblación", sum_act: "Retirar exceso" },
            { stage: 5, themeId: 5, title: "Ataque de Plagas", diagnosis: "Caracoles/Insectos", visuals: ["Hojas mordidas"], causes: ["Falta de red"], solutions: ["Aceite de Neem"], prevention: ["Poner red"], sum_color: "Verde opaco", sum_growth: "Agujeros", sum_prob: "Plagas", sum_act: "Aceite Neem" },
            { stage: 6, themeId: 6, title: "Agua Sucia", diagnosis: "Contaminación", visuals: ["Mal olor", "Agua turbia"], causes: ["Exceso de abono"], solutions: ["Cambiar el agua"], prevention: ["Mantenimiento"], sum_color: "Sucia", sum_growth: "Grumoso", sum_prob: "Contaminado", sum_act: "Cambiar agua" },
            { stage: 7, themeId: 7, title: "Crecimiento Lento", diagnosis: "Falta Nutrientes / Frío", visuals: ["No expansión"], causes: ["Frío", "pH malo"], solutions: ["Ajustar pH"], prevention: ["Cubrir invierno"], sum_color: "Verde", sum_growth: "Sin expansión", sum_prob: "Frío/pH", sum_act: "Checar pH" }
        ]
    }
};

let currentLang = 'en';

document.addEventListener("DOMContentLoaded", () => {
    // UI Elements
    const langSelect = document.getElementById('lang-select');
    const modal = document.getElementById('diagnosis-modal');
    const closeBtn = document.querySelector('.close-btn');

    langSelect.addEventListener('change', (e) => {
        currentLang = e.target.value;
        renderApp(currentLang);
    });

    renderApp(currentLang);

    // ==========================================
    // RENDER LOGIC
    // ==========================================
    function renderApp(lang) {
        const tr = translations[lang];

        for (let key in tr.ui) {
            const el = document.getElementById(key);
            if (el) {
                if (tr.ui[key].includes('<')) el.innerHTML = tr.ui[key];
                else el.textContent = tr.ui[key];
            }
        }
        document.title = tr.ui.t_page_title;

        const gridContainer = document.getElementById('diagnostic-grid');
        gridContainer.innerHTML = '';
        
        tr.data.forEach((dataItem) => {
            const card = document.createElement('div');
            card.className = `stage-card glass-panel card-accent-${dataItem.themeId}`;
            const previewVisuals = dataItem.visuals.slice(0, 3).map(v => `<li>${v}</li>`).join('');

            card.innerHTML = `
                <span class="stage-badge">${tr.ui.stage_badge} ${dataItem.stage}</span>
                <h3>${dataItem.title}</h3>
                <div class="diagnosis">${dataItem.diagnosis}</div>
                <div class="visual-signs-preview">
                    <strong>${tr.ui.look_for}</strong>
                    <ul>${previewVisuals}</ul>
                </div>
                <button class="view-details-btn">${tr.ui.btn_details}</button>
            `;

            card.addEventListener('click', () => openModal(dataItem));
            gridContainer.appendChild(card);
        });

        const tbody = document.getElementById('summary-tbody');
        tbody.innerHTML = '';
        tr.data.forEach(dataItem => {
            let colorDotCls = "healthy";
            if(dataItem.themeId === 2) colorDotCls = "yellow";
            else if(dataItem.themeId === 3) colorDotCls = "brown";
            else if(dataItem.themeId === 4) colorDotCls = "mixed";
            else if(dataItem.themeId === 5) colorDotCls = "dull";
            else if(dataItem.themeId === 6) colorDotCls = "dirty";

            const trObj = document.createElement('tr');
            trObj.innerHTML = `
                <td><span class="color-dot ${colorDotCls}"></span> ${dataItem.sum_color}</td>
                <td>${dataItem.sum_growth}</td>
                <td>${dataItem.sum_prob}</td>
                <td>${dataItem.sum_act}</td>
            `;
            tbody.appendChild(trObj);
        });
        
        closeModal();
        document.getElementById('analysis-result').classList.add('hidden');
        document.getElementById('drop-zone').classList.remove('hidden');
    }

    function openModal(data) {
        const tr = translations[currentLang];
        const modalBody = document.getElementById('modal-body');
        let badgeColorClass = `card-accent-${data.themeId}`;
        
        let html = `
            <span class="badge ${badgeColorClass}" style="border-top: 4px solid var(--stage-${getThemeName(data.themeId)})">${tr.ui.stage_badge} ${data.stage} | ${data.diagnosis}</span>
            <h2>${data.title}</h2>
            <div class="modal-grid">
                <div class="modal-column">
                    <div class="modal-section">
                        <h4>${tr.ui.visual_lbl}</h4>
                        <ul>${data.visuals.map(v => `<li>${v}</li>`).join('')}</ul>
                    </div>
                    ${data.causes ? `
                    <div class="modal-section">
                        <h4>${tr.ui.causes_lbl}</h4>
                        <ul>${data.causes.map(c => `<li>${c}</li>`).join('')}</ul>
                    </div>` : ''}
                </div>
                
                <div class="modal-column">
                    ${data.prevention ? `
                    <div class="modal-section">
                        <h4>${tr.ui.prev_lbl}</h4>
                        <ul>${data.prevention.map(p => `<li>${p}</li>`).join('')}</ul>
                    </div>` : ''}
                </div>
            </div>
            
            ${data.solutions ? `
            <div class="solution-box">
                <h4>${tr.ui.sol_lbl}</h4>
                <ul>${data.solutions.map(s => `<li>${s}</li>`).join('')}</ul>
            </div>` : `
            <div class="solution-box" style="border-left-color: var(--stage-healthy);">
                <h4>${tr.ui.status_lbl}</h4>
                <p>${tr.ui.status_msg}</p>
            </div>`}
        `;

        modalBody.innerHTML = html;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; 
    }

    function getThemeName(id) {
        const map = {1: 'healthy', 2: 'yellow', 3: 'brown', 4: 'patchy', 5: 'pest', 6: 'water', 7: 'slow'};
        return map[id] || 'healthy';
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => { if(e.target.classList.contains('modal-backdrop')) closeModal(); });
    document.addEventListener('keydown', (e) => { if(e.key === 'Escape' && modal.classList.contains('active')) closeModal(); });

    // ==========================================
    // AI IMAGE ANALYZER
    // ==========================================
    const dropZone = document.getElementById('drop-zone');
    const fileInput = document.getElementById('file-input');
    const loader = document.getElementById('analysis-loader');
    const resultBox = document.getElementById('analysis-result');

    if(dropZone && fileInput) {
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            dropZone.addEventListener(eventName, preventDefaults, false);
            document.body.addEventListener(eventName, preventDefaults, false);
        });

        function preventDefaults (e) { e.preventDefault(); e.stopPropagation(); }

        ['dragenter', 'dragover'].forEach(eventName => {
            dropZone.addEventListener(eventName, () => dropZone.classList.add('dragover'), false);
        });

        ['dragleave', 'drop'].forEach(eventName => {
            dropZone.addEventListener(eventName, () => dropZone.classList.remove('dragover'), false);
        });

        dropZone.addEventListener('drop', (e) => { handleFiles(e.dataTransfer.files); });
        fileInput.addEventListener('change', function() { handleFiles(this.files); });
    }

    function handleFiles(files) {
        if(files.length === 0) return;
        const file = files[0];
        if(!file.type.startsWith('image/')) {
            alert(translations[currentLang].ui.alert_upload);
            return;
        }

        resultBox.classList.add('hidden');
        dropZone.classList.add('hidden');
        loader.classList.remove('hidden');

        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => { setTimeout(() => analyzeImageColor(img), 1500);  };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }

    function analyzeImageColor(img) {
        loader.classList.add('hidden');
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d', {willReadFrequently: true});
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, img.width, img.height);
        
        let r_avg = 0, g_avg = 0, b_avg = 0, count = 0;
        try {
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;
            for (let i = 0; i < data.length; i += 160) {
                if (data[i] + data[i+1] + data[i+2] < 50) continue;
                if (data[i] + data[i+1] + data[i+2] > 700) continue;
                r_avg += data[i]; g_avg += data[i+1]; b_avg += data[i+2]; count++;
            }
            if (count > 0) {
                r_avg = Math.floor(r_avg / count); g_avg = Math.floor(g_avg / count); b_avg = Math.floor(b_avg / count);
            }
        } catch(e) {}
        
        let predictedStageIndex = 0;
        if (g_avg > r_avg && g_avg > b_avg) {
            if (g_avg > 150 && r_avg < 120) predictedStageIndex = 0; 
            else if (r_avg > 130 && g_avg > 130 && r_avg > g_avg - 20) predictedStageIndex = 1; 
            else if (r_avg < 80 && g_avg < 100) predictedStageIndex = 5; 
            else predictedStageIndex = 3; 
        } else if (r_avg > 100 && g_avg > 80 && r_avg - g_avg > 30) {
            predictedStageIndex = 2; 
        } else {
            predictedStageIndex = 6; 
        }
        
        displayResult(translations[currentLang].data[predictedStageIndex]);
    }

    function displayResult(stageData) {
        const ui = translations[currentLang].ui;
        resultBox.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:12px;">
                <h3 style="color:var(--primary-dark); font-size:1.5rem; margin:0;">${ui.detected}: ${stageData.title}</h3>
                <span class="stage-badge" style="background:rgba(0,0,0,0.05); margin:0;">${ui.stage_badge} ${stageData.stage}</span>
            </div>
            <p style="margin-bottom:16px;"><strong>${ui.diagnosis_lbl}:</strong> ${stageData.diagnosis}</p>
            <button class="view-details-btn" onclick="document.getElementById('diagnostic-grid').children[${stageData.stage - 1}].click()" style="margin-bottom:16px;">${ui.btn_suggestions}</button>
            <br/>
            <button style="background:none; border:none; color:var(--text-muted); text-decoration:underline; cursor:pointer; font-size:0.95rem; font-family:inherit;" onclick="resetUpload()">${ui.btn_upload_another}</button>
        `;
        resultBox.classList.remove('hidden');
        resultBox.style.borderLeftColor = `var(--stage-${getThemeName(stageData.themeId)})`;
    }

    window.resetUpload = function() {
        resultBox.classList.add('hidden');
        if(dropZone) dropZone.classList.remove('hidden');
        if(fileInput) fileInput.value = "";
    };
});
