/**
 * Bilingual Translation Data for Ram Narayana Brahmana Seva Samstha
 * Supports dynamic switching between Telugu (తెలుగు) and English
 */

const translations = {
  te: {
    // Top Bar & Navigation
    top_invocation: "ఓం శ్రీ మాత్రే నమః",
    top_vedoktam: "వేదోక్తం • శాస్త్రోక్తం • భక్తితో",
    top_motto: "ధర్మో రక్షతి రక్షితః",
    call_us: "సంప్రదించండి:",
    top_whatsapp: "వాట్సాప్: 77802 23977",
    top_call: "కాల్: 87903 23977",
    nav_home: "ప్రధాన పేజీ",
    nav_about: "సంస్థ గురించి",
    nav_services: "మా సేవలు",
    nav_benefits: "ప్రయోజనాలు",
    nav_why_us: "ఎందుకు ఎంచుకోవాలి",
    nav_gallery: "బ్యానర్లు & కరపత్రం",
    nav_contact: "సంప్రదించండి",
    nav_call_btn: "కాల్ చేయండి",
    nav_whatsapp_btn: "వాట్సాప్",
    nav_location_btn: "గూగుల్ మ్యాప్స్",
    drawer_call_cta: "📞 +91 77802 23977",

    // Hero Section
    pill_loc: "దిల్‌సుఖ్‌నగర్, హైదరాబాద్",
    hero_badge: "వేద సేవా • పితృ సేవా • ధర్మ సేవా",
    hero_founder: "ప్రొ॥ నంబూరి ఆదినారాయణ మూర్తి",
    hero_est: "EST. 2026 | రామ్ నారాయణ బ్రాహ్మణ సేవా సంస్థ",
    hero_title_main: "రామ్ నారాయణ బ్రాహ్మణ సేవా సంస్థ",
    hero_tagline: "వైదిక సంప్రదాయ పరిరక్షణే మా లక్ష్యం...",
    hero_tagline_sub: "శ్రాద్ధ, భక్తి, శాస్త్రబద్ధతతో మీ సేవా తత్పరతలో...",
    hero_desc: "మా వద్ద హిందూ సాంప్రదాయ విధాన సత్ బ్రాహ్మణులతో సదాచారములతో, అగ్నిహోత్ర పరాయణ విధానంతో వైదిక పురోహితులు, భోక్తలు, వంట వారుల చేత మాసికం, ఆబ్దికం, సంవత్సరీకములు, పితృ కార్యములు మా సంస్థ ప్రాంగణంలోనే శాస్త్రోక్తంగా నిర్వహించబడును.",
    hero_cta_call: "ఇప్పుడే కాల్ చేయండి",
    hero_cta_whatsapp: "వాట్సాప్",
    hero_cta_location: "లొకేషన్",
    hero_stat_exp: "వేద నిష్ట",
    hero_stat_exp_sub: "శాస్త్రోక్త పద్ధతి",
    hero_stat_purohits: "వేద పండితులు",
    hero_stat_purohits_sub: "అనుభవజ్ఞులైన వారు",
    hero_stat_service: "సంస్థలో పూర్తి నిర్వహణ",
    hero_stat_service_sub: "పూజ, భోక్తలు, వంట",
    hero_stat_satisfaction: "100% సంతృప్తి",
    hero_stat_satisfaction_sub: "భక్తి & సదాచారం",

    // Quick Highlights
    feature_1_title: "అగ్నిహోత్ర పరాయణం",
    feature_1_desc: "సనాతన అగ్నిహోత్ర వేద మంత్రోచ్ఛారణతో పవిత్ర నిర్వహణ",
    feature_2_title: "సత్ బ్రాహ్మణ భోక్తలు",
    feature_2_desc: "నిష్టాగరిష్ఠులైన సదాచార బ్రాహ్మణుల సమక్షంలో ఆచరణ",
    feature_3_title: "సాంప్రదాయ సాత్విక వంట",
    feature_3_desc: "శుచి, శుభ్రతతో కూడిన సాంప్రదాయ బ్రాహ్మణ భోజన సదుపాయం",
    feature_4_title: "పవిత్ర సేవా వేదిక",
    feature_4_desc: "దిల్సుఖ్నగర్‌లో విశాలమైన, పరిశుభ్రమైన పూజా ప్రాంగణం",

    // About Section
    about_badge: "మా పవిత్ర ధ్యేయం",
    about_title: "సనాతన ధర్మ రక్షణ & పితృ కర్మల విశిష్టత",
    about_lead: "మాతాపితరుల రుణం తీర్చుకోవడం ప్రతి మానవుని ప్రథమ కర్తవ్యం. శాస్త్రోక్తంగా నిర్వహించే శ్రాద్ధ కర్మలు పితృదేవతలకు సద్గతిని, కుటుంబానికి శుభాలను చేకూరుస్తాయి.",
    about_text_1: "రామ్ నారాయణ బ్రాహ్మణ సేవా సంస్థ ద్వారా ప్రొ॥ నంబూరి ఆదినారాయణ మూర్తి గారి పర్యవేక్షణలో అత్యంత నిష్ఠతో, వేద మంత్రోచ్ఛారణలతో పితృ కార్యాలు మరియు శ్రాద్ధ కర్మలు నిర్వహించబడుతున్నాయి.",
    about_text_2: "అన్ని కార్యక్రమాలు హైదరాబాద్ దిల్సుఖ్నగర్‌లోని మా రామ్ నారాయణ బ్రాహ్మణ సేవా సంస్థ ప్రాంగణంలోనే (H.No. 11-62, ప్రగతి నగర్ రోడ్, సాహితి నగర్) పురోహితులు, భోక్తలు, పూజా సామాగ్రి, సాత్విక వంట మరియు సంపూర్ణ సౌకర్యాలతో శాస్త్రోక్తంగా నిర్వహించబడును.",
    about_quote: "\"పూర్వీకుల ఆశీస్సులే కుటుంబ క్షేమానికి మూలస్తంభాలు\"",
    about_point_1: "అనుభవజ్ఞులైన వేద పండితుల మార్గదర్శకత్వం",
    about_point_2: "సమగ్ర పూజా సామగ్రి మరియు భోక్తల ఏర్పాట్లు",
    about_point_3: "శాస్త్రబద్ధమైన తిథి నిర్ణయాలు & సంప్రదాయ సమాచారం",
    about_point_4: "దిల్సుఖ్నగర్ సంస్థ కేంద్రంలో పవిత్రమైన వాతావరణం",

    // Services Section (4 Key Services)
    services_badge: "మా సేవా విభాగాలు",
    services_title: "శాస్త్రోక్తంగా నిర్వహించే వైదిక & పితృ సేవలు",
    services_sub: "వైదిక సంప్రదాయ పరిరక్షణే మా లక్ష్యం - మా సంస్థ ప్రాంగణంలో శ్రాద్ధ, భక్తి, శాస్త్రబద్ధతతో మీ సేవా తత్పరతలో",
    btn_service_inquire: "వాట్సాప్‌లో విచారణ →",

    srv_1_name: "వైదిక బ్రాహ్మణుల సేవా",
    srv_1_desc: "వైదిక పరాయణం, జపాలు, హోమాలు తదితర వైదిక కార్యక్రమాలు సంస్థలో శాస్త్రోక్తంగా నిర్వహించబడును.",
    srv_1_feat1: "రుద్ర నమక-చమక పరాయణం",
    srv_1_feat2: "గాయత్రి, మృత్యుంజయ విశేష జపాలు",
    srv_1_feat3: "గణపతి, నవగ్రహ, చండీ హోమాలు",

    srv_2_name: "భోక్తల సేవా",
    srv_2_desc: "శ్రాద్ధ, పితృకార్యాలు మరియు శ్రాద్ధ భోజనములలో శాస్త్రోక్త విధానంలో భోక్తల సేవా అందుబాటులో ఉంటుంది.",
    srv_2_feat1: "సదాచార సంపన్నులైన సత్ బ్రాహ్మణులు",
    srv_2_feat2: "నిష్టాగరిష్ఠ ఆచార వ్యవహారాలు",
    srv_2_feat3: "మా సంస్థ ప్రాంగణంలోనే సంపూర్ణ నిర్వహణ",

    srv_3_name: "పితృకార్యాలు & శ్రాద్ధకర్మలు",
    srv_3_desc: "ఆబ్దికం, మాసికం, సంవత్సరీకం, తర్పణాలు, శ్రాద్ధకర్మలు సంస్థలో శాస్త్రోక్తంగా నిర్వహించబడును.",
    srv_3_feat1: "ఆబ్దికం & సంవత్సరీక శ్రాద్ధం",
    srv_3_feat2: "ప్రతి నెల మాసిక కర్మలు",
    srv_3_feat3: "మహాలయ పక్ష తర్పణాలు & పిండప్రదానం",

    srv_4_name: "సాత్విక వంట & సంపూర్ణ నిర్వహణ",
    srv_4_desc: "మడి మరియు ఆచార నిష్టతో కూడిన సాంప్రదాయ బ్రాహ్మణ సాత్విక భోజనం మరియు సామాగ్రి.",
    srv_4_feat1: "స్వచ్ఛమైన సాంప్రదాయ వంట వారు",
    srv_4_feat2: "సమగ్ర పూజా సామాగ్రి ఏర్పాట్లు",
    srv_4_feat3: "సంస్థలో విశాలమైన పరిశుభ్ర పూజా ప్రాంగణం",

    // Benefits Section
    benefits_badge: "పితృ కర్మల మహత్యం",
    benefits_title: "పితృకర్మల వల్ల కలిగే ప్రయోజనాలు",
    benefits_sub: "మన సనాతన ధర్మంలో పితృయజ్ఞం అత్యున్నతమైనది. శాస్త్రోక్త ఆచరణతో కలిగే శుభఫలాలు:",

    ben_1_title: "కృతజ్ఞత భావం",
    ben_1_desc: "మన పూర్వీకులకు కృతజ్ఞత తెలుపుతూ, వారి ఆశీస్సులను పొందేందుకు దోహదం చేస్తుంది.",
    
    ben_2_title: "కుటుంబ బలం & ఐక్యత",
    ben_2_desc: "పూర్వీకుల ఆశీర్వాదంతో కుటుంబంలో కలతలు తొలగి ఐక్యత, సుహృద్భావం మరియు సమగ్ర అభివృద్ధి కలుగుతాయి.",

    ben_3_title: "శుభఫల ప్రాప్తి",
    ben_3_desc: "పితృదేవతల అనుగ్రహం వలన ఆయురారోగ్యాలు, ఆర్థిక స్థిరత్వం, మానసిక శాంతి, సమస్త సుఖసంతోషాలు ప్రాప్తిస్తాయి.",

    ben_4_title: "సంస్కృతి పరిరక్షణ",
    ben_4_desc: "మన వైదిక సంస్కృతిని, సనాతన ధర్మాన్ని నిలబెడుతూ రాబోయే తరాలకు మన సాంప్రదాయాన్ని అందించే పవిత్ర కర్తవ్యం.",

    ben_5_title: "వంశ పరంపర కొనసాగింపు",
    ben_5_desc: "వంశాభివృద్ధి, సంతాన సౌభాగ్యం మరియు పూర్వీకుల సత్సంప్రదాయాలు, ధర్మ విలువలు నిరంతరం కొనసాగుతాయి.",

    ben_6_title: "పితృ ఋణ విముక్తి & మోక్ష ప్రాప్తి",
    ben_6_desc: "శాస్త్రోక్త శ్రాద్ధ కర్మలతో పితృదోష నివారణ, పితృదేవతలకు సద్గతి మరియు కుటుంబానికి శాంతి లభిస్తాయి.",

    // Why Choose Us Section
    why_badge: "మా ప్రత్యేకత",
    why_title: "మమ్మల్ని ఎందుకు ఎంచుకోవాలి?",
    why_sub: "విశ్వసనీయమైన వేద సేవలు మరియు నిష్ఠాగరిష్ఠ నిర్వహణ",

    why_1_title: "అనుభవజ్ఞులైన వేద పండితులు",
    why_1_desc: "శాస్త్ర పరిజ్ఞానం, దశాబ్దాల అనుభవం గల వేద పండితుల చేత వైదిక పద్ధతిలో నిర్వహణ.",

    why_2_title: "వేదోక్త సంప్రదాయం ప్రకారం నిర్వహణ",
    why_2_desc: "శాస్త్ర నియమాలను తూచా తప్పకుండా, అగ్నిహోత్ర పరాయణ విధానంలో పరిపూర్ణంగా జరిపిస్తాము.",

    why_3_title: "శుభ్రమైన, ప్రశాంతమైన వాతావరణం",
    why_3_desc: "దిల్సుఖ్నగర్‌లోని మా సంస్థ ప్రాంగణంలో భక్తి శ్రాద్ధలకు అనువైన పవిత్ర, పరిశుభ్ర వాతావరణం కలదు.",

    why_4_title: "శాస్త్రోక్త సేవలు & సాత్విక భోజనం",
    why_4_desc: "పూజా సామాగ్రి, హోమం, భోక్తలు, సాత్విక భోజనం వరకు అన్ని ఏర్పాట్లు మేమే స్వయంగా చూసుకుంటాము.",

    why_5_title: "వ్యక్తిగత సూచనలు మరియు మార్గదర్శకత్వం",
    why_5_desc: "తిథి నిర్ణయం, గోత్ర నామాలు, ఆచార విధులకు సంబంధించి కుటుంబ సభ్యులకు పూర్తి సాంప్రదాయ మార్గదర్శకత్వం.",

    why_6_title: "సమయపాలన & భక్తిపూర్వక నిబద్ధత",
    why_6_desc: "ఖచ్చితమైన సమయపాలన, నిష్ఠాగరిష్ఠ భక్తి శ్రాద్ధలతో ఎటువంటి అసౌకర్యం కలగకుండా శాస్త్రోక్తంగా పూర్తి చేయుట.",

    // Gallery / Brochure Section
    gallery_badge: "సంస్థ వివరాలు & బ్యానర్లు",
    gallery_title: "అధికారిక బ్యానర్, కార్డు & కరపత్రం",
    gallery_sub: "మా సరికొత్త అధికారిక బ్యానర్, విజిటింగ్ కార్డు మరియు పూర్తి సేవా కరపత్రం",
    banner_main_title: "అధికారిక సంస్థ బ్యానర్",
    card_cream_title: "అధికారిక విజిటింగ్ కార్డు",
    card_pamphlet_title: "పితృకర్మల వివరాల కరపత్రం",
    flyer_img_src: "assets/images/flyer-te.jpg",
    flyer_img_alt: "రామ్ నారాయణ బ్రాహ్మణ సేవా సంస్థ అధికారిక కరపత్రం (తెలుగు)",
    btn_view_full: "పూర్తి చిత్రం చూడండి 🔍",
    btn_download_info: "వివరాల పత్రం డౌన్‌లోడ్",

    // Contact Section
    contact_badge: "సంప్రదించండి",
    contact_title: "మా సంస్థ చిరునామా & ఫోన్ నంబర్లు",
    contact_address_label: "సంస్థ చిరునామా:",
    contact_address_val: "ఇ. నెం. 11-62, రామ్ నారాయణ బ్రాహ్మణ సేవా సంస్థ, ప్రగతి నగర్ రోడ్, సాహితి నగర్, దిల్సుఖ్నగర్, హైదరాబాద్, తెలంగాణ, భారతదేశం - 500060.",
    contact_phone_label: "ఫోన్ నంబర్లు (కాల్ చేయండి):",
    contact_whatsapp_label: "వాట్సాప్ నంబర్ (WhatsApp):",
    contact_whatsapp_btn_text: "💬 +91 77802 23977",
    contact_email_label: "ఈమెయిల్:",
    contact_hours_label: "సేవా సమయాలు:",
    contact_hours_val: "రోజూ ఉదయం 8:00 నుండి సాయంత్రం 5:00 వరకు",
    contact_cta_maps: "📍 గూగుల్ మ్యాప్స్‌లో చూడండి (Google Maps)",
    contact_cta_whatsapp: "💬 వాట్సాప్‌లో సంప్రదించండి (+91 77802 23977)",

    // Mobile Action Bar
    mob_call: "కాల్ చేయండి",
    mob_whatsapp: "వాట్సాప్",
    mob_location: "లొకేషన్",

    // Footer
    footer_desc: "హిందూ సాంప్రదాయ విధాన సత్ బ్రాహ్మణులతో, అగ్నిహోత్ర పరాయణంతో పితృ కార్యముల సమగ్ర నిర్వహణ సేవా సంస్థ.",
    footer_quick_links: "ముఖ్యమైన లింకులు",
    footer_services: "సేవలు",
    footer_contact_info: "సంప్రదింపుల కేంద్రం",
    footer_rights: "రామ్ నారాయణ బ్రాహ్మణ సేవా సంస్థ. సర్వ హక్కులూ ప్రత్యేకించబడినవి.",
    footer_developed: "ప్రొ॥ నంబూరి ఆదినారాయణ మూర్తి గారి ఆధ్వర్యంలో"
  },

  en: {
    // Top Bar & Navigation
    top_invocation: "Om Sri Matre Namaha",
    top_vedoktam: "Vedoktam • Shastroktam • With Devotion",
    top_motto: "Dharmo Rakshathi Raksthithaha",
    call_us: "Contact Us:",
    top_whatsapp: "WhatsApp: 77802 23977",
    top_call: "Call: 87903 23977",
    nav_home: "Home",
    nav_about: "About the Samstha",
    nav_services: "Our Services",
    nav_benefits: "Benefits of Shraddha",
    nav_why_us: "Why Choose Us",
    nav_gallery: "Banners & Brochure",
    nav_contact: "Contact Us",
    nav_call_btn: "Call Now",
    nav_whatsapp_btn: "WhatsApp",
    nav_location_btn: "Google Maps",
    drawer_call_cta: "📞 +91 77802 23977",

    // Hero Section
    pill_loc: "Dilsukhnagar, Hyderabad",
    hero_badge: "Tradition ♦ Devotion ♦ Service",
    hero_founder: "Pro. Namburi Adinarayana Murthy",
    hero_est: "EST. 2026 | Ram Narayana Brahmana Seva Samstha",
    hero_title_main: "RAM NARAYANA BRAHMANA SEVA SAMSTHA",
    hero_tagline: "Preserving Vedic Tradition is our Mission...",
    hero_tagline_sub: "In your service with reverence, devotion & Shastra compliance...",
    hero_desc: "Conducting authentic Vedic rituals (Masikam, Abdikam, Samvatsarikam, Pitru Karyas, Homams) exclusively at our sacred Samstha premises in Dilsukhnagar following strict Sanatana Dharma, Agnihotra recitation, devout Vedic Purohits, Bhokthas, and traditional Brahmin Satvik cooking.",
    hero_cta_call: "Call Us",
    hero_cta_whatsapp: "WhatsApp",
    hero_cta_location: "Location",
    hero_stat_exp: "Vedic Rigor",
    hero_stat_exp_sub: "100% Shastra Compliant",
    hero_stat_purohits: "Vedic Scholars",
    hero_stat_purohits_sub: "Highly Experienced",
    hero_stat_service: "Full Management at Samstha",
    hero_stat_service_sub: "Pujas, Bhokthas & Catering",
    hero_stat_satisfaction: "100% Spiritual Peace",
    hero_stat_satisfaction_sub: "Devotion & Sadacharam",

    // Quick Highlights
    feature_1_title: "Agnihotra Chanting",
    feature_1_desc: "Sacred fire rituals conducted with authentic Vedic mantras and sacred procedures",
    feature_2_title: "Devout Brahmin Bhokthas",
    feature_2_desc: "Pious, disciplined Brahmins practicing authentic Sadachara traditions",
    feature_3_title: "Traditional Satvik Cooking",
    feature_3_desc: "Pure, hygienic, and ritual-compliant Brahmin catering and food arrangements",
    feature_4_title: "Sacred Samstha Premises",
    feature_4_desc: "Spacious, peaceful, and clean ritual hall located at Dilsukhnagar, Hyderabad",

    // About Section
    about_badge: "Our Sacred Mission",
    about_title: "Preserving Sanatana Dharma & Ancestral Rites",
    about_lead: "Fulfilling filial duty (Pitru Rina) and upholding Vedic sacraments is our prime duty. Properly conducted rituals bring peace, spiritual upliftment, and lasting family prosperity.",
    about_text_1: "Under the venerable leadership and guidance of Pro. Namburi Adinarayana Murthy, Ram Narayana Brahmana Seva Samstha conducts all ancestral rites and Shraddha ceremonies with unwavering devotion and authentic Vedic chanting.",
    about_text_2: "All rituals are conducted exclusively at our sacred Ram Narayana Brahmana Seva Samstha premises in Dilsukhnagar, Hyderabad (H.No. 11-62, Pragathi Nagar Road, Sahithi Nagar), complete with Vedic Purohits, Bhokthas, authentic puja items, and pure Satvik cooking.",
    about_quote: "\"Ancestral blessings form the foundation of peace and prosperity for generations.\"",
    about_point_1: "Guidance of experienced Vedic scholars & Pandits",
    about_point_2: "Comprehensive puja samagri & Bhoktha arrangements",
    about_point_3: "Accurate Tithi calculation & traditional guidance",
    about_point_4: "Dedicated sacred Samstha in Dilsukhnagar, Hyderabad",

    // Services Section (4 Key Services)
    services_badge: "Our Sacred Services",
    services_title: "Authentic Vedic & Ancestral Ceremonies",
    services_sub: "Preserving Vedic Tradition — Conducted exclusively at our Samstha with reverence, devotion & Shastra compliance",
    btn_service_inquire: "Inquire via WhatsApp →",

    srv_1_name: "Vaidika Brahmana Seva",
    srv_1_desc: "Vedic Parayanam, Japas, Homams, and sacred chanting performed strictly as per scripture at the Samstha.",
    srv_1_feat1: "Rudra Namaka-Chamaka Parayanam",
    srv_1_feat2: "Gayatri & Mrityunjaya special Japas",
    srv_1_feat3: "Ganapati, Navagraha & Chandi Homams",

    srv_2_name: "Bhoktha Seva (Brahmin Bhokthas)",
    srv_2_desc: "Devout Brahmin Bhokthas arranged for Shraddha, Pitru Karyas, and ritual meals.",
    srv_2_feat1: "Practicing Sadachara Brahmins",
    srv_2_feat2: "Strict ritual purity and conduct",
    srv_2_feat3: "Conducted exclusively at our Samstha premises",

    srv_3_name: "Pitru Karyas & Shraddha Karmas",
    srv_3_desc: "Abdikam, Masikam, Samvatsarikam, Tarpanam, and death anniversary rituals performed at the Samstha.",
    srv_3_feat1: "Abdikam (Annual Shradha)",
    srv_3_feat2: "Masikam (Monthly Shradha)",
    srv_3_feat3: "Samvatsarikam (Yearly Rituals) & Tarpanam",

    srv_4_name: "Satvik Catering & Full Management",
    srv_4_desc: "Traditional Satvik Brahmin cooking adhering to strict ritual hygiene ('Madi') & complete puja samagri.",
    srv_4_feat1: "Traditional Brahmin Satvik cooks",
    srv_4_feat2: "All authentic puja samagri included",
    srv_4_feat3: "Spacious, clean Samstha ritual premises",

    // Benefits Section (Exact from English Flyer)
    benefits_badge: "Spiritual Significance",
    benefits_title: "THE BENEFITS OF PERFORMING SHRADDHA",
    benefits_sub: "In Sanatana Dharma, Shraddha and Pitru rituals bestow profound blessings upon the family:",

    ben_1_title: "Express Gratitude",
    ben_1_desc: "To our ancestors who shaped our lives, receiving their eternal blessings.",
    
    ben_2_title: "Strengthen Family Bonds",
    ben_2_desc: "Through sacred values, timeless tradition & togetherness.",

    ben_3_title: "Seek Blessings for Prosperity",
    ben_3_desc: "For lasting peace, vibrant health & happiness in the family.",

    ben_4_title: "Preserve Our Culture",
    ben_4_desc: "Carry forward the sacred legacy and sacraments of Sanatana Dharma.",

    ben_5_title: "Connect with Our Roots",
    ben_5_desc: "Stay rooted in our Vedic heritage & timeless ancestral traditions.",

    ben_6_title: "Ancestral Peace & Liberation",
    ben_6_desc: "Clears Pitru Dosha, brings profound peace of mind, and bestows spiritual elevation (Moksha) upon ancestors.",

    // Why Choose Us Section (Exact from English Flyer)
    why_badge: "Our Distinction",
    why_title: "Why Choose Us?",
    why_sub: "Trusted Vedic services with uncompromised integrity and spiritual dedication",

    why_1_title: "Experienced Vedic Pandits",
    why_1_desc: "Ceremonies performed by senior Vedic pandits with scripture-certified knowledge.",

    why_2_title: "Performed as per Shastra & Tradition",
    why_2_desc: "Strict adherence to Vedic rites, Agnihotra chanting, and authentic procedures.",

    why_3_title: "Neat, Clean & Peaceful Environment",
    why_3_desc: "A pure, serene, and spiritually uplifting setting at our Dilsukhnagar Samstha.",

    why_4_title: "All Arrangements & Satvik Food",
    why_4_desc: "Authentic Brahmin Satvik cooking adhering to 'Madi' and complete ritual arrangements.",

    why_5_title: "Personalized Guidance & Support",
    why_5_desc: "Complete gotra, tithi calculation, and customized ritual support for families.",

    why_6_title: "Punctuality & Devout Commitment",
    why_6_desc: "Timely execution, devout dedication, and seamless ritual management with total peace of mind.",

    // Gallery / Brochure Section
    gallery_badge: "Samstha Media & Credentials",
    gallery_title: "Official Banner, Visiting Card & Brochure",
    gallery_sub: "Explore our grand banner, authentic visiting card and detailed ritual benefits sheet",
    banner_main_title: "Grand Official Banner",
    card_cream_title: "Official Visiting Card",
    card_pamphlet_title: "Spiritual Benefits Brochure",
    flyer_img_src: "assets/images/flyer-en.jpg",
    flyer_img_alt: "Ram Narayana Brahmana Seva Samstha Official Brochure (English)",
    btn_view_full: "View Full Image 🔍",
    btn_download_info: "Download Brochure PDF",

    // Contact Section
    contact_badge: "Contact Us",
    contact_title: "Samstha Address & Contact Details",
    contact_address_label: "Samstha Address:",
    contact_address_val: "H.No. 11-62, Ram Narayana Brahmana Seva Samstha, Pragathi Nagar Road, Sahithi Nagar, Dilsukhnagar, Hyderabad, Telangana, India - 500060.",
    contact_phone_label: "Phone Numbers (Call Us):",
    contact_whatsapp_label: "WhatsApp Number:",
    contact_whatsapp_btn_text: "💬 +91 77802 23977",
    contact_email_label: "Email Address:",
    contact_hours_label: "Service Timings:",
    contact_hours_val: "Open Every Day: 8:00 AM – 5:00 PM",
    contact_cta_maps: "📍 Open in Google Maps",
    contact_cta_whatsapp: "💬 Connect on WhatsApp (+91 77802 23977)",

    // Mobile Action Bar
    mob_call: "Call Us",
    mob_whatsapp: "WhatsApp",
    mob_location: "Location",

    // Footer
    footer_desc: "Dedicated to the authentic, Shastra-compliant conduct of Hindu ancestral rituals with Vedic Purohits and devout Sadacharam at our Samstha.",
    footer_quick_links: "Quick Navigation",
    footer_services: "Our Rituals",
    footer_contact_info: "Contact Information",
    footer_rights: "Ram Narayana Brahmana Seva Samstha. All Rights Reserved.",
    footer_developed: "Under the guidance of Pro. Namburi Adinarayana Murthy"
  }
};
