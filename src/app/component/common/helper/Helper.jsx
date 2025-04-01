import WhatLaserTherapy from "../../pages/laser-therapy/WhatLaserTherapy";
import Pera from "../Pera";
import {
  AdditionalServicesIcon,
  FacebookIcon,
  InstaIcon,
  LinkedingIcon,
  PreventCareIcon,
  SickPetientCare,
  SmallCatIcon,
  SmallDogIcon,
  SurgryIcon,
} from "./Icon";

export const NavLinks = [
  { link: "/veterinary-services", linkTitle: "SERVICES" },
  { link: "/about-us", linkTitle: "ABOUT US" },
  { link: "/our-prectis", linkTitle: "LOCATION" },
  { link: "/join-our", linkTitle: "CAREER" },
  { link: "#", linkTitle: "PATIENT PORTAL" },
];

export const SocialMediaLinkData = [
  { link: "https://www.facebook.com/", linkTitle: <FacebookIcon /> },
  { link: "https://www.linkedin.com/", linkTitle: <LinkedingIcon /> },
  { link: "https://www.instagram.com/", linkTitle: <InstaIcon /> },
];

export const footerLiData = [
  {
    title: "Services",
    sublinks: [
      { path: "#", title: "Preventive Care" },
      { path: "#", title: "Sick Patient Care" },
      { path: "#", title: "Surgery" },
      { path: "#", title: "Additional Services" },
    ],
  },
  {
    title: "Company",
    sublinks: [
      { path: "#", title: "About us" },
      { path: "#", title: "Carreers" },
    ],
  },
  {
    title: "Contact Us",
    sublinks: [
      { path: "tel:8769081937", title: "Phone: (212) 123-4567" },
      { path: "mailto:hello@nebulavets.com", title: "hello@nebulavets.com" },
    ],
  },
];

export const AcordiansData = [
  { acoradianHeading: "Cutting-Edge Technology" },
  { acoradianHeading: "Independant" },
  { acoradianHeading: "Progressive Medicine" },
];
export const AcordiansData2 = [
  { acoradianHeading: "Environmentally conscious​" },
  { acoradianHeading: "Expert Team" },
  { acoradianHeading: "Education" },
];

export const SliderCardData = [
  {
    icon: <PreventCareIcon />,
    headingTitle: "Preventive Care",
    linkItem: [
      { link: "/animal-health-check", linkTitle: "Animal Health Check" },
      { link: "/vaccinations", linkTitle: "Vaccinations" },
      { link: "/dentalCare", linkTitle: "Dental" },
    ],
  },
  {
    icon: <SickPetientCare />,
    headingTitle: "Sick Patient Care",
    linkItem: [
      { link: "/emergency-care", linkTitle: "Urgent & Emergency Care" },
      { link: "/telemedicine", linkTitle: "Telemedicine" },
      { link: "/diagnostics", linkTitle: "Diagnostics" },
      { link: "/pharmacy", linkTitle: "Pharmacy" },
    ],
  },
  {
    icon: <SurgryIcon />,
    headingTitle: "Surgery",
    linkItem: [
      { link: "/Surgery", linkTitle: "Surgeries" },
      { link: "/spay-neuter", linkTitle: "Spay & Neuter" },
    ],
  },
  {
    icon: <AdditionalServicesIcon />,
    headingTitle: "Additional Services",
    linkItem: [
      { link: "/travel", linkTitle: "Travel Certificates" },
      { link: "/skin-Dermatology", linkTitle: "Skin & Dermatology" },
      { link: "#", linkTitle: "Euthanasia" },
    ],
  },
];

export const veterinarySevicesCardData = [
  { img: "/assetes/img/png/pictur-of-practice.png" },
  { img: "/assetes/img/png/dog&cat-img.png" },
  { img: "/assetes/img/png/pictur-of-practice.png" },
  { img: "/assetes/img/png/dog&cat-img.png" },
  { img: "/assetes/img/png/pictur-of-practice.png" },
  { img: "/assetes/img/png/dog&cat-img.png" },
];

export const allLinkSectionData = [
  { path: "#", title: "Preventive Care" },
  { path: "#", title: "Sick Patient Care" },
  { path: "#", title: "Surgery" },
  { path: "#", title: "Additional Services" },
];

export const preventiveCareData = [
  {
    img: "/assetes/img/png/Location Icon.png",
    title: "Preventive Care",
    subHeading: "Your pet's well-being at the forefront of our practice.",
    text: "At Nebula Vets, we take a proactive approach to your pet's healthcare, prioritizing their well-being and aiming to maximize their quality of life. We believe in the importance of preventive medicine and early detection of potential health issues. By implementing regular wellness check-ups and comprehensive screenings, we can identify and address any problems at their earliest stages.",
    btnTitle: "book now",
    link: "#",
    rightsSectinData: [
      {
        haadingTitle: "Animal Health Check ",
        text: "Our practice offers the convenience of same or next-day appointments to ensure your furry companion receives prompt diagnostic evaluation and treatment. Our dedicated team prioritizes swift action, allowing us to quickly identify the issue at hand and provide the necessary care your pet requires.",
        link: "/animal-health-check",
        title: "learn more",
      },
      {
        haadingTitle: "Vaccinations",
        text: "Vaccinations are a key component of your pet’s health and essential to prevent life-threatening diseases. Nebula vets offer's all the core and non-core vaccines your pet might need.",
        link: "#",
        title: "learn more",
      },
      {
        haadingTitle: "Dentals",
        text: "Dental disease and smelly breath is common, and regular cleanings and exams can save your pet a lot of pain and disease later in life. Our advanced state-of-the-art dental suite is equipped for dental cleanings (scale and polish), extractions and any other care your pet may need.",
        link: "#",
        title: "learn more",
      },
    ],
  },
  {
    img: "/assetes/img/png/Sick patient icon.png",
    title: "Sick Patient Care",
    subHeading:
      "Delivering exceptional care for sick patients, combining the virtues of efficiency and expertise",
    text: "At Nebula Vets, we are fully equipped with advanced diagnostic tools and a wide range of treatment options to address any health issue your pet may be facing. Our commitment to comprehensive care means that we have the expertise and resources to provide accurate diagnoses and effective treatments.",
    btnTitle: "book now",
    link: "#",
    rightsSectinData: [
      {
        haadingTitle: "Urgent & Emergency Care",
        text: "Whether your pet is sick or injured, we’re here to help get them the help they need. This includes telemedicine veterinary consults if you are unsure, and overnight care for 24-hour treatment.",
        link: "#",
        title: "learn more",
      },
      {
        haadingTitle: "Telemedicine consults",
        text: "Nebula vets offers a fast telemedicine service, to help your pet without leaving the home",
        link: "#",
        title: "learn more",
      },
      {
        haadingTitle: "Diagnostics",
        text: "Nebula vets has invested in the latest technology, equipped for all the diagnostic tests your pet needs to stay healthy, and to treat those that get sick. We’re able to run tests quickly in-house in situations where a rapid diagnosis is required and offer artificialintelligence alongside veterinary experts.",
        link: "#",
        title: "learn more",
      },
      {
        haadingTitle: "Pharmacy ",
        text: "Our highly stocked on-site pharmacy inlcudes a variety of prescription medications and pet health products for your pet. If a particular medication is unavailable, our compounding pharmacy can have it delivered to you within 24 hours.",
        link: "#",
        title: "learn more",
      },
    ],
  },
  {
    img: "/assetes/img/png/Surgery icon.png",
    title: "Surgery",
    subHeading:
      "Highly experienced surgeons -dedicated to delivering outstanding care for your pet.",
    text: "At Nebula Vets, we are equipped to handle a wide range of veterinary services, from emergency surgeries to routine procedures like neuters. Our team of skilled veterinarians is committed to providing the highest level of care to your pets.",
    btnTitle: "book now",
    link: "#",
    rightsSectinData: [
      {
        haadingTitle: "Surgery",
        text: "In our advanced state-of-the-art surgery suite, our experienced doctors can perform all routine surgeries, including spays, neuters, basic soft tissue surgery, such as mass removals, laceration repair, abscesses, and dental procedures. All estimates are provided within 24 hours of receiving a request!",
        link: "#",
        title: "learn more",
      },
      {
        haadingTitle: "Spays & Neuters",
        text: "Our team comprises highly trained doctors who excel in routine surgery and harness the full potential of our state-of-the-art technology and advanced equipment. With their expertise and proficiency, they ensure optimal surgical outcomes for your beloved pets",
        link: "#",
        title: "learn more",
      },
    ],
  },
  {
    img: "/assetes/img/png/Additional icon.png",
    title: "Additional Services",
    subHeading:
      "Additional Services that Go Above and Beyond: Experience Exceptional Veterinary Care at Nebula Vets",
    text: "Experience comprehensive veterinary care at Nebula Vets. We offer specialized services in travel document assistance, skin dermatology, microchipping, and compassionate euthanasia. Trust our experienced team for exceptional care tailored to your pet's unique needs.",
    btnTitle: "book now",
    link: "#",
    rightsSectinData: [
      {
        haadingTitle: "Travel Certificates",
        text: "From domestic or international travel, you will usually require a health certificate for your pet. We can help with the necessary paperwork to allow your pet to join you on your travels –the process is simple and easy.",
        link: "#",
        title: "learn more",
      },
      {
        haadingTitle: "Skin & Dermatology",
        text: "If your pet is experiencing uncomfortable symptoms such as itchy skin, hair loss, or rashes, it may be indicative of allergies or infections. Our team of highly trained veterinarians specializes in diagnosing and treating various skin issues that can cause distress to your beloved companion. With their expertise and comprehensive understanding of dermatological conditions, they will diligently assess your pet's symptoms and develop a tailored treatment plan to address the underlying cause of their discomfort.",
        link: "#",
        title: "learn more",
      },
      {
        haadingTitle: "Microchipping",
        text: "A microchip, resembling a tiny grain of rice in size and shape, is delicately inserted beneath your pet's skin, specifically between the shoulder blades. This quick and completely safe procedure typically takes only a few minutes.",
        link: "/microchipping",
        title: "learn more",
      },
      {
        haadingTitle: "Laser Therapy",
        text: "Our state-of-the-art veterinary hospital utilizes advanced laser technology to provide non-invasive and drug-free treatment options that promote healing and enhance the well-being of your beloved pets.",
        link: "/laser-therapy",
        title: "learn more",
      },
      {
        haadingTitle: "Hospice & Euthanasia",
        text: "The decision to say goodbye to your pet is the most difficult decision you’ll have to make. Our team at nebula vets is here to guide you through the process with compassion and can perform end-of-life services at the time of your choosing.",
        link: "/hospice-euthanasia",
        title: "learn more",
      },
    ],
  },
];

export const animalHealthCheckData = [
  {
    title: "Animal Health Check Exam",
    text: "During our animal health check, we perform a thorough examination tailored to the unique needs of each patient. Our goal is to assess your pet's overall health, detect any potential issues, and offer preventive measures to maintain their vitality. Whether your furry friend is young, mature, or a senior, our veterinary professionals have the expertise to address their specific requirements.",
    list: [
      { li: "your pets:" },
      { li: "-Vaccinations " },
      { li: "-Blood panels" },
      { li: "-Parasitic" },
      { li: "-Microchipping" },
      { li: "-Fecal tests" },
      { li: "-Skin tests" },
      { li: "-Dietary advise" },
    ],
  },
];

export const WhayCheckMatterData = [
  {
    title: "Early Detection and Prevention",
    text: "Regular health checks are essential for detecting and preventing potential health issues before they become more serious. By identifying subtle changes in your pet's health, we can address them promptly, potentially saving them from discomfort, pain, and costly treatments in the long run.",
  },
  {
    title: "Tailored Care for Different Life Stages",
    text: "Pets go through various life stages, each with its unique needs. From playful puppies and curious kittens to mature adults and cherished seniors, our animal health checks are tailored to cater to your pet's specific life stage. We provide age-appropriate screenings, vaccinations, and personalized recommendations to support your pet's health at every stage of their journey.",
  },
  {
    title: "Comprehensive Physical Examinations",
    text: "Our skilled veterinarians perform thorough physical examinations during animal health checks, paying attention to your pet's overall appearance, body condition, vital signs, and specific areas of concern. We examine their eyes, ears, nose, mouth, teeth, skin, coat, muscles, joints, and abdomen, ensuring a comprehensive evaluation of their health.",
  },
  {
    title: "Vaccinations and Preventive Care",
    text: "Vaccinations are crucial for protecting your pet against contagious diseases. During the animal health check, we assess your pet's vaccination status and provide any necessary boosters or updates to ensure they remain protected. Additionally, we discuss preventive care measures such as flea and tick control, heartworm prevention, and parasite control, tailoring our recommendations to your pet's individual needs.",
  },
  {
    title: "Diagnostic Screenings",
    text: "Depending on your pet's age, breed, and medical history, we may recommend diagnostic screenings as part of the animal health check. These may include blood tests, urinalysis, fecal examinations, and imaging studies. These screenings help us assess your pet's internal health, detect underlying conditions, and provide a baseline for future comparisons.",
  },
  {
    title: "Nutritional and Behavioral Guidance",
    text: "Our veterinarians understand the impact of nutrition and behavior on your pet's overall health. During the animal health check, we offer guidance on proper nutrition, diet choices, feeding schedules, and exercise routines. We also address behavioral concerns and provide recommendations to foster a harmonious bond between you and your pet.",
  },
  {
    title: "Client Education and Support",
    text: "At Nebula Vets, we believe in empowering pet owners with knowledge. Our veterinarians take the time to explain the findings of the animal health check, address your questions, and provide guidance on maintaining your pet's well-being. We are here to support you on your pet care journey and offer resources for at-home care and preventive measures.",
  },
];

export const vaccinateMyPetData = [
  {
    title: "Why should I vaccinate my pet?",
    text: "Vaccines are affective as the expose your pet’s immune system to an inactive strain of infectious agents. This assists their body to create immune cells that are specifically designed to respond effectively when exposed to the disease. Vaccines are also relatively painless, quick and cost-effective to administer.",
    subText: [
      {
        text: "",
      },
    ],
  },
  {
    title: "What are core and non-core vaccines?",
    text: "lsdjkfkljsdklfjklCore vaccines are often vaccines considered essential for your pet’s health, whilst non-core vaccines are optional, and may be recommended for your pet depending on their lifestyle.",
    subText: [
      {
        text: "Our vets will discuss the suitable vaccines for your pet during the consultation.",
      },
    ],
  },
];

export const vaccinationAcordianData = [
  {
    title: "Core Dog Vaccines",
    text: "FVRCP: A combination vaccine that protects against Feline Viral Rhinotracheitis, Calicivirus, and Panleukopenia. Rabies: Legally required in most states, for both indoor and outdoor cats Feline Leukemia Virus: A virus transmitted through cat bites during fights. It’s recommended for kittens even if they will not be going outdoors.",
  },
  {
    title: "Non-Core Dog Vaccines",
    text: "Bordetella: A disease more commonly known as kennel cough and is required by dog boarding and daycare facilities.Lyme: Lyme Disease is carried by ticks and can be useful for dogs that visit areas, such as woodland areas, with high tick exposure.Canine Influenza Virus: Also called dog flu, a contagious virus that causes respiratory issues.",
  },
  {
    title: "Cat Core Vaccines",
    text: "FVRCP: A combination vaccine that protects against Feline Viral Rhinotracheitis, Calicivirus, and Panleukopenia. Rabies: Legally required in most states, for both indoor and outdoor cats Feline Leukemia Virus: A virus transmitted through cat bites during fights. It’s recommended for kittens even if they will not be going outdoors.",
  },
];

export const whenVaccinateCardData = [
  {
    icon: <SmallDogIcon />,
    title: "Puppies Schedule",
    subSection: [
      {
        subTitle: "8 weeks: ",
        text: "Distemper vaccine, Leptospirosis, Bordetella vaccine, Lyme vaccine & Canine Influenza Virus vaccine",
      },
      {
        subTitle: "12 weeks:",
        text: "Distemper vaccine, Leptospirosis vaccine, Rabies vaccine, Lyme vaccine & Canine Influenza Virus vaccine",
      },
      {
        subTitle: "Booster:",
        text: "Ones a year",
      },
    ],
  },
  {
    icon: <SmallCatIcon />,
    title: "Kitten Schedule",
    subSection: [
      {
        subTitle: "8 weeks: ",
        text: "FVRCP vaccine and Leukemia vaccines",
      },
      {
        subTitle: "12 weeks: ",
        text: "FVRCP vaccine and Leukemia vaccines",
      },
    ],
  },
];

export const whenVaccinateCardData2 = [
  {
    icon: <SmallDogIcon />,
    title: "Adult Dog Schedule",
    subSection: [
      {
        text: "Rabies: One year after the initial puppy vaccine, then every three years",
      },
      {
        text: "Distemper: Every three years",
      },
      {
        text: "Bordetella: Every year",
      },
      {
        text: "Canine influenza: Every year",
      },
      {
        text: "Lyme disease: Every year",
      },
    ],
  },
  {
    icon: <SmallCatIcon />,
    title: "Adult Cat Schedule",
    subSection: [
      {
        text: "Rabies: One year after the initial puppy vaccine, then every three years",
      },
      {
        text: "Distemper: Every three years",
      },
    ],
  },
];

export const dentalScalePolishData = [
  {
    title: "Dentals - Scale & Polish",
    text: "Dental health is a vital aspect of your pet's overall well-being. Just like humans, pets can experience dental problems, including plaque buildup, gum disease, and tooth decay. At Nebula Vets, we prioritize dental care and offer comprehensive dental services to ensure your pet's oral health remains in top condition.",
  },
  {
    title: "When to schedule a dental consultation",
    text: "If you notice any signs of dental problems in your pet, such as bad breath, red or swollen gums, difficulty eating, or loose teeth, it's essential to seek professional dental care. Schedule a dental consultation at Nebula Vets to have our skilled team assess your pet's dental health and recommend the most appropriate treatment options.",
  },
  {
    title: "Post Dental Care",
    text: "Most pets recover quickly after a dental. A little tiredness, and some post-anesthesia anxiety is normal. You can feed your pet the evening of their procedure; soft food for 14 days is recommended if any dental extractions were performed. If your pet had any extractions performed, we will send them home with pain relief to keep them comfortable.",
  },
];

export const centerCareData = [
  {
    title: "Oral Health and Beyond",
    text: "Dental health plays a significant role in your pet's overall well-being. Poor oral hygiene can lead to various issues such as gum disease, tooth decay, infections, and even systemic health problems affecting vital organs. Regular dental care can prevent these issues, promoting a healthier and longer life for your furry friend.",
  },
  {
    title: "Comprehensive Dental Examinations",
    text: "Our skilled veterinarians perform thorough dental examinations, assessing your pet's teeth, gums, and oral tissues. We check for signs of dental disease, tartar buildup, tooth decay, and other oral abnormalities. This comprehensive evaluation allows us to detect potential issues early and provide timely treatment.",
  },
  {
    title: "Professional Teeth Cleaning",
    text: "Dental cleanings are an essential part of maintaining your pet's oral health. Our state-of-the-art dental equipment and techniques allow us to perform professional cleanings with precision and care. We remove plaque, tartar, and bacteria from the teeth and gum line, ensuring a fresh and clean mouth.",
  },
  {
    title: "Periodontal Disease Management",
    text: "Periodontal disease is a common dental condition in pets. We are well-equipped to manage and treat this condition. Our dental services include deep cleaning, periodontal therapy, and extraction of severely affected teeth, providing relief and restoring oral health.",
  },
  {
    title: "Tooth Extractions and Oral Surgery",
    text: "In some cases, tooth extractions or oral surgery may be necessary to address severe dental disease, fractured teeth, or other oral conditions. Our veterinarians have expertise in performing these procedures with precision and ensuring your pet's comfort throughout.",
  },
  {
    title: "Pain Management and Anesthesia",
    text: "Your pet's comfort is our priority. We utilize modern anesthesia protocols and advanced pain management techniques to ensure their safety and minimize any discomfort during dental procedures. Our experienced team closely monitors your pet throughout the process, ensuring a smooth and stress-free experience.",
  },
  {
    title: "Client Education and Home Care",
    text: "Dental health plays a significant role in your pet's overall well-being. Poor oral hygiene can lead to various issues such as gum disease, tooth decay, infections, and even systemic health problems affecting vital organs. Regular dental care can prevent these issues, promoting a healthier and longer life for your furry friend.",
  },
];

export const openHoursData = [
  {
    title: "Urgent & Emergency Care during open hours",
    subText: [
      {
        text: "At Nebula Vets, we understand that emergencies can happen at any time, and your pet's health and well-being are our top priority. We have convenient operating hours to ensure that we are available when you need us.",
      },
      {
        text: "Our clinic is open from 8am to 6pm on weekdays and from 9am to 5pm on Saturdays. During these hours, our team of veterinarians and staff are ready to provide care for your pets",
      },
      {
        text: "If you have an urgent situation and require immediate advice or first aid instructions while you're on your way to our practice, you can contact us at 1234567. Our knowledgeable staff will assist you and provide guidance to help you manage the situation until you arrive.",
      },
    ],
  },
  {
    title: "Outside open hours",
    subText: [
      {
        text: "The closest 24hr emergency veterinary hospital to our practice is:",
      },
      { text: "Their number is 123456" },
    ],
  },
  {
    title: "Reasons to seek Urgent or Emergency care",
    subText: [
      {
        text: "Open wounds",
      },
      { text: "Toxin ingestion or foreign body" },
      { text: "Signs of pain" },
      { text: "Behavioral changes" },
      { text: "Eye issues" },
      { text: "Ear infections" },
      { text: "Vomiting or diarrhea" },
      { text: "Hair loss" },
      { text: "Coughing, sneezing or nasal discharge" },
      { text: "Urinating blood or urinary changes" },
      { text: "Worms, fleas, ticks or mites" },
      { text: "Scooting" },
      { text: "Changes in eating or drinking" },
    ],
  },
];

export const UrgentCareAcordianData = [
  {
    title: "Why Choose Nebula Vets for Emergency and Urgent Care:",
    text: "We know that emergencies require swift action. At Nebula Vets, we prioritize providing prompt access to emergency and urgent care services. Our facility is equipped to handle a wide range of emergencies, and our experienced team is ready to address critical situations with efficiency and expertise.",
  },
  {
    title: "Skilled Veterinary Team",
    text: "We know that emergencies require swift action. At Nebula Vets, we prioritize providing prompt access to emergency and urgent care services. Our facility is equipped to handle a wide range of emergencies, and our experienced team is ready to address critical situations with efficiency and expertise.",
  },
  {
    title: "State-of-the-Art Facilities",
    text: "We know that emergencies require swift action. At Nebula Vets, we prioritize providing prompt access to emergency and urgent care services. Our facility is equipped to handle a wide range of emergencies, and our experienced team is ready to address critical situations with efficiency and expertise.",
  },
  {
    title: "Compassionate and Calm Approach",
    text: "We know that emergencies require swift action. At Nebula Vets, we prioritize providing prompt access to emergency and urgent care services. Our facility is equipped to handle a wide range of emergencies, and our experienced team is ready to address critical situations with efficiency and expertise.",
  },
  {
    title: "Comprehensive Emergency Services",
    text: "We know that emergencies require swift action. At Nebula Vets, we prioritize providing prompt access to emergency and urgent care services. Our facility is equipped to handle a wide range of emergencies, and our experienced team is ready to address critical situations with efficiency and expertise.",
  },
  {
    title: "Collaborative Care",
    text: "We know that emergencies require swift action. At Nebula Vets, we prioritize providing prompt access to emergency and urgent care services. Our facility is equipped to handle a wide range of emergencies, and our experienced team is ready to address critical situations with efficiency and expertise.",
  },
  {
    title: "Collaborative Care",
    text: "We know that emergencies require swift action. At Nebula Vets, we prioritize providing prompt access to emergency and urgent care services. Our facility is equipped to handle a wide range of emergencies, and our experienced team is ready to address critical situations with efficiency and expertise.",
  },
  {
    title: "Emergency Preparedness",
    text: "We know that emergencies require swift action. At Nebula Vets, we prioritize providing prompt access to emergency and urgent care services. Our facility is equipped to handle a wide range of emergencies, and our experienced team is ready to address critical situations with efficiency and expertise.",
  },
];

export const whyuseTelemedicineData = [
  {
    title: "Why use Telemedicine",
    subText: [
      {
        subText:
          "Nebula Vets' online telemedicine service is designed to provide immediate advice and guidance for various veterinary issues. Whether you're unsure about the severity of a symptom or need assistance in determining the best course of action for your pet, our experienced veterinarians can offer real-time advice through the telemedicine platform.",
      },
    ],
  },
  {
    title: "During the online consultation",
    subText: [
      {
        subText:
          "Our veterinarians will carefully assess the information you provide and ask relevant questions to better understand your pet's condition. Based on their evaluation, they can advise you on whether it's safe to monitor the situation at home or if furtherin-person evaluation and treatment are necessary.",
      },
      {
        subText:
          "This immediate access to professional veterinary advice can be particularly valuable in situations where you're unsure if a symptom or behavior is concerning enough to warrant a visit to the clinic. It can save you time and unnecessary stress by providing clarity and peace  of mind.",
      },
      {
        subText:
          "However, it's important to note that there are limitations to telemedicine, and certain cases may still require an in-person visit for a thorough examination or diagnostic tests. Our veterinarians will use their expertise to determine the most appropriate course of action based on the information provided during the telemedicine consultation.",
      },
    ],
  },
];

export const chatVetData = [
  {
    noHeading: "1.",
    title: "Book a telemedicine consult ",
    text: `Click the "chat with vet" button below to join a que for a telemedicine online visit.`,
  },
  {
    noHeading: "2.",
    title: "Join with the link ",
    text: "A custom link will be sent to your email",
  },
  {
    noHeading: "3.",
    title: "Video chat ",
    text: "In a real-time online visit, share with the vet your pet’s current issues.",
  },
  {
    noHeading: "4.",
    title: "Treatment",
    text: "Our veterinarian will evaluate your pet and discuss next steps, which may include medication.",
  },
];

export const availableTestsData = [
  { li: "Hematology" },
  { li: "Serum Chemistries" },
  { li: "Urinalysis" },
  { li: "Cytology" },
  { li: "Fecal analysis" },
  { li: "Blood disorders" },
];

export const BloodPanelAcordianData = [
  {
    title: "Blood Panel",
    text: "Blood Panel: Our in-house laboratory enables us to perform a variety of blood tests, including complete blood counts (CBC), blood chemistry profiles, thyroid hormone levels, and infectious disease screenings. These tests provide valuable information about your pet's overall health, organ function, blood cell counts, and help detect potential underlying health issues.",
  },
  {
    title: "Urinalysis",
    text: "Blood Panel: Our in-house laboratory enables us to perform a variety of blood tests, including complete blood counts (CBC), blood chemistry profiles, thyroid hormone levels, and infectious disease screenings. These tests provide valuable information about your pet's overall health, organ function, blood cell counts, and help detect potential underlying health issues.",
  },
  {
    title: "Fecal Testing",
    text: "Blood Panel: Our in-house laboratory enables us to perform a variety of blood tests, including complete blood counts (CBC), blood chemistry profiles, thyroid hormone levels, and infectious disease screenings. These tests provide valuable information about your pet's overall health, organ function, blood cell counts, and help detect potential underlying health issues.",
  },
  {
    title: "Cytology",
    text: "Blood Panel: Our in-house laboratory enables us to perform a variety of blood tests, including complete blood counts (CBC), blood chemistry profiles, thyroid hormone levels, and infectious disease screenings. These tests provide valuable information about your pet's overall health, organ function, blood cell counts, and help detect potential underlying health issues.",
  },
  {
    title: "Histopathology",
    text: "Blood Panel: Our in-house laboratory enables us to perform a variety of blood tests, including complete blood counts (CBC), blood chemistry profiles, thyroid hormone levels, and infectious disease screenings. These tests provide valuable information about your pet's overall health, organ function, blood cell counts, and help detect potential underlying health issues.",
  },
  {
    title: "Tick & Heart-worm Testing",
    text: "Blood Panel: Our in-house laboratory enables us to perform a variety of blood tests, including complete blood counts (CBC), blood chemistry profiles, thyroid hormone levels, and infectious disease screenings. These tests provide valuable information about your pet's overall health, organ function, blood cell counts, and help detect potential underlying health issues.",
  },
  {
    title: "Allergy Testing",
    text: "Blood Panel: Our in-house laboratory enables us to perform a variety of blood tests, including complete blood counts (CBC), blood chemistry profiles, thyroid hormone levels, and infectious disease screenings. These tests provide valuable information about your pet's overall health, organ function, blood cell counts, and help detect potential underlying health issues.",
  },
];

export const ultrasoundAcordianData = [
  {
    title: "Digital Radiography",
    text: "Our advanced digital radiography system allows us to capture high-resolution images of your pet's bones, organs, and soft tissues. Radiographs are particularly useful in diagnosing fractures, assessing the condition of internal organs, identifying tumors or foreign objects, and evaluating the skeletal syst",
  },
  {
    title: "Ultrasound",
    text: "With our cutting-edge ultrasound technology, we can visualize and assess the internal structures of your pet's body in real time. Ultrasounds help us examine the heart, abdomen, reproductive system, and identify abnormalities or potential health concerns. This non-invasive imaging technique aids in diagnosing conditions and guiding treatment d",
  },
  {
    title: "Echocardiograms",
    text: "Echocardiogram services to assess the health and function of your pet's heart. An echocardiogram, also known as a cardiac ultrasound, is a non-invasive and painless procedure that provides detailed images of the heart's structures and function.",
  },
];

export const snapTestCardData = [
  {
    img: "/assetes/img/png/Nebula__Dog 1.png",
    subText: [
      { title: "SNAP Lepto Test", text: "Add description" },
      { title: "SNAP cPL Test", text: "Assess canine pancreatic health" },
      { title: "SNAP Giardia Test", text: "Add description " },
      { title: "SNAP Parvo Test", text: "Add description" },
    ],
  },
  {
    img: "/assetes/img/png/Nebula__Cat 1.png",
    subText: [
      { title: "SNAP FIV/FeLV Combo Test", text: "Add description" },
      { title: "SNAP fPL Test", text: "Assess feline pancreatic health" },
      { title: "SNAP Giardia Test", text: "Add description " },
      {
        title: "SNAP Feline proBNP Test ",
        text: "Quickly assess cats with cardiac risk factors",
      },
    ],
  },
];

// for testing
export const testdata = [
  {
    heading: "hello",
    className: "text-[red]",
    pera: [
      { text: "pera text 1 " },
      { text: "pera text 2 ", className: "bg-red-500" },
      { text: "pera text 3 " },
    ],
  },
  {
    heading: "hello",
    pera: [{ text: "pera text 1 hghfh hgswhfswgfsgws wsgwysftwsdwgs " }],
  },
];

export const howItWorkData = [
  {
    text: "We understand that time is of the essence when it comes to your pet's health, and waiting for medications to be obtained from an external pharmacy can be inconvenient. By keeping a comprehensive inventory of commonly used medications in our pharmacy, we strive to streamline the process and minimize any delays in providing your pet with the necessary treatment.",
  },
  {
    text: "owever, if a specific medication is not readily available in our on-site pharmacy, we have a solution. We work closely with a trusted compounding pharmacy that specializes in creating customized medications. This allows us to quickly obtain or create the specific medication your pet needs. Once the medication is compounded, we can arrange for it to be delivered to you, ensuring that you have it in a timely manne",
  },
];

export const WhyChoosePharmacyAcordianData = [
  {
    title: "Convenience",
    text: "Having an in-house pharmacy at our veterinary practice means you can conveniently obtain all your pet's medications and healthcare products in one place. No more running to different locations or waiting for orders to arrive. Our knowledgeable pharmacy team is ready to assist you and provide expert guidance on proper medication administration.",
  },
  {
    title: "Quality Assurance",
    text: "We understand the importance of ensuring the safety and effectiveness of medications for your pets. Our pharmacy sources medications directly from reputable manufacturers, guaranteeing their authenticity, quality, and proper storage. You can have peace of mind knowing that the medications you receive from us are of the highest standard.",
  },
  {
    title: "Convenience",
    text: "We understand the importance of ensuring the safety and effectiveness of medications for your pets. Our pharmacy sources medications directly from reputable manufacturers, guaranteeing their authenticity, quality, and proper storage. You can have peace of mind knowing that the medications you receive from us are of the highest standard.",
  },
  {
    title: "Prescription Medications",
    text: "Our pharmacy carries a wide range of prescription medications to address various medical conditions and treatments. Our veterinarians will carefully evaluate your pet's needs and prescribe the most appropriate medication, dosages, and duration. Our goal is to support your pet's health and recovery with the right medications tailored to their specific requirements.",
  },
  {
    title: "Prescription Diets",
    text: "We offer a selection of therapeutic prescription diets designed to address specific dietary needs and support various health conditions. Whether your pet requires a special diet for weight management, food allergies, kidney disease, or other health concerns, our pharmacy can provide you with the necessary options to meet their nutritional requirements.",
  },
  {
    title: "Wellness and Preventive Products",
    text: "Beyond medications, our pharmacy also stocks a range of wellness and preventive products to support your pet's overall health. This includes flea and tick preventives, heartworm preventives, joint supplements, dental care products, grooming supplies, and more. Our knowledgeable team can help you choose the right products to keep your pet healthy and thriving.",
  },
  {
    title: "Expert Guidance",
    text: "Our pharmacy team is composed of experienced professionals who are dedicated to providing you with personalized service and guidance. We are here to answer your questions, address any concerns, and offer advice on medication administration, potential side effects, and proper storage.ur pharmacy team is composed of experienced professionals who are dedicated to providing you with personalized service and guidance. We are here to answer your questions, address any concerns, and offer advice on medication administration, potential side effects, and proper storage.",
  },
  {
    title: "Prescription Refills",
    text: "If your pet requires ongoing medication, our pharmacy makes it easy for you to refill prescriptions. Simply contact us, and we will have your pet's medications ready for pick-up or arrange for convenient delivery options.",
  },
];

export const whaySpaOrNeturData = [
  {
    title: "Why spay or neuter?",
    subText: [
      {
        text: "Spaying and neutering has many health and behavioral benefits for your cat or dog. Spaying at a young age has been shown to reduce the occurrence of mammary cancers and uterine infections (also known as pyometra). It also removes heat cycles and coming into season.",
      },
      {
        text: "Neutering has been proven to prevent testicular cancer and may prevent different forms of prostate diseases, and both spaying and neutering may also help prevent or alter unwanted behaviors, such as aggressive behavior and urine marking. When to spay or neuter",
      },
    ],
  },
  {
    title: "When to spay or neuter?",
    className: "md:mt-10 mt-8",
    subText: [
      {
        text: "Dog spays and neuters are performed between the ages of 6 and 9 months of age. Large breed dogs, it is advised to wait until they’re a little older to take full advantage of their growth hormones and allow their bones to mature.",
      },
      {
        text: "Cat spays and neuters should typically be carried out around 6 months of age.",
      },
      {
        text: "In older pets who are no spayed or neutered, we’ll discuss all of your options at your first wellness visit and advise on the best time for your pet to be spay or neutered.",
      },
    ],
  },
  {
    title: "Long-Term Cost Savings",
    className: "md:mt-10 mt-8",
    subText: [
      {
        text: "Spaying or neutering your pet can save you money in the long run. The cost of the procedure is typically less than the expenses associated with caring for a litter or treating health conditions that may arise from not being spayed or neutered.",
      },
    ],
  },
];

export const spaOrNeturAcordianData = [
  {
    title: "Experienced Surgical Team",
    text: "At Nebula Vets, our veterinarians have extensive experience in performing spay and neuter surgeries. They possess the expertise to perform these procedures efficiently and safely, ensuring the best possible outcome for your pet.",
  },
  {
    title: "Health Benefits",
    text: "Spaying (for females) and neutering (for males) offer numerous health benefits for your pets. Spaying helps prevent uterine infections and reduces the risk of mammary tumors and ovarian cancers, while neutering eliminates the risk of testicular cancer and reduces the incidence of prostate problems. These procedures can also help in curbing certain behavioral issues related to mating instincts.",
  },
  {
    title: "Surgical Expertise",
    text: "Our veterinary hospital is equipped with state-of-the-art surgical facilities and advanced monitoring equipment. We utilize modern anesthetic protocols and closely monitor your pet's vital signs during the procedure, ensuring their safety and well-being. Our surgical team adheres to the highest standards of precision and sterilization to minimize the risk of complications.",
  },
  {
    title: "Personalized Care",
    text: "At Nebula Vets, we believe in providing personalized care for each pet. Our veterinarians will evaluate your pet's overall health and discuss the appropriate timing and procedure options based on their age, breed, and individual needs. We prioritize open communication and are here to answer any questions or address any concerns you may have.",
  },
  {
    title: "Compassionate Post-Surgical Care",
    text: "Compassionate Post-Surgical Care",
  },
  {
    title: "Overpopulation Control",
    text: "lsjBy choosing to spay or neuter your pet, you contribute to controlling the overpopulation of animals. Countless unwanted animals end up in shelters or face a life on the streets. Spaying and neutering are responsible choices that help reduce the number of homeless pets and ensure a healthier pet population overall.dlk",
  },
];

export const preConsultationData = [
  {
    title: "Does my pet need a pre-consultation?",
    subText: [
      {
        text: "Yes, by conducting a pre-operative consultation, performing a physical examination, and considering bloodwork results, we can minimize the risks associated with surgery and optimize the outcome for your beloved pet. Your pet's safety and well-being are our top priorities throughout the entire surgical process.",
      },
    ],
  },
  {
    title: "How much will it cost?",
    className: "mt-10",
    subText: [
      {
        text: "Surgery costs can vary based on several factors, including the specific procedure your pet requires, their weight, any necessary medications, and additional considerations. To provide you with an accurate estimate for your pet's surgery, we recommend booking a pre-surgical consultation with our experienced veterinarians.",
      },
      {
        text: "If you prefer, you can also reach out to us via email at nebulavets@gmail.comto request an estimate. Please provide us with as much information as possible about your pet's condition and the specific procedure they may need. Our team will review your request and respond promptly with an estimate based on the information provided.",
      },
    ],
  },
  {
    title: "Do you accept insurance?",
    className: "mt-10",
    subText: [
      {
        text: "Yes, at Nebula Vets, we accept all forms of pet insurance. We understand the importance of financial support when it comes to your pet's healthcare needs. By accepting various pet insurance providers, we aim to make the reimbursement process as seamless as possible for our clients.",
      },
    ],
  },
];

export const petSurgeryData = [
  {
    title: "Expert Surgical Team",
    text: "Our team of skilled veterinarians brings years of experience and expertise to the operating table. With a deep understanding of advanced surgical techniques and a commitment to staying abreast of the latest advancements in veterinary surgery, our surgeons are well-equipped to handle a wide range of procedures with exceptional skill and care.",
  },
  {
    title: "Comprehensive Surgical Services",
    text: "From routine spays and neuters to complex soft tissue surgeries, orthopedic procedures, tumor removals, and emergency surgeries, our hospital offers a comprehensive range of surgical services tailored to meet the unique needs of your pet. You can trust us to deliver personalized surgical solutions that prioritize your pet's well-being.",
  },
  {
    title: "Cutting-Edge Facilities and Technology",
    text: "At Nebula Vets, we take pride in our state-of-the-art surgical facilities and advanced equipment. Our hospital is equipped with modern anesthesia monitoring systems, surgical instruments, and techniques, ensuring the highest level of safety, precision, and comfort for your pet.",
  },
  {
    title: "Personalized Care",
    text: "We understand that each pet is unique, and their surgical needs require individualized attention. Our veterinarians take the time to thoroughly evaluate your pet's health, discuss treatment options, and design a customized surgical plan tailored to their specific condition and requirements. We value open communication and are always available to address any concerns or questions you may have.",
  },
  {
    title: "Optimal Safety and Comfort",
    text: "Your pet's safety and comfort are of paramount importance to us. Our experienced team utilizes the latest anesthetic protocols tailored to your pet's needs, and we closely monitor their vital signs throughout the entire surgical procedure. We also employ advanced pain management techniques to ensure your pet's well-being and minimize any discomfort.",
  },
  {
    title: "Compassionate Post-Surgical Care",
    text: "Our commitment to your pet's well-being extends beyond the operating room. After surgery, we provide attentive post-operative care to support their recovery. We provide detailed instructions on at-home care, pain management, and follow-up appointments to ensure a smooth healing process. Our caring staff is always here to address any concerns and provide support during your pet's recovery journey.",
  },
];

export const travelCertificatesData = [
  {
    title: "Pet Travel Certificates",
    Hclass: "!mt-0",
    subText: [
      {
        text: "At Nebula Vets, we understand that your pet is an important part of your family, and we want to make sure they can accompany you on your domestic or international travels. We offer assistance in obtaining the necessary health certificates and paperwork required for your pet's travel.",
      },
    ],
  },
  {
    title: "Documentation Assistanceklj",
    subText: [
      {
        text: "Gathering the required documentation for travel can be overwhelming and confusing. Our team will provide detailed instructions on the documentation needed and guide you through the process. We will assist you in completing the paperwork accurately, including filling out any forms and providing relevant information to ensure a smooth and hassle-free travel experience for you and your pet.",
      },
    ],
  },
  {
    title: "Domestic Travel",
    subText: [
      {
        text: "Regulations for pet travel vary between states, and how you’re getting there. Each airline has different requirements and specific forms for you to fill out about your pet. Our vets can advise on what exactly you need.",
      },
    ],
  },
  {
    title: "International Travel",
    subText: [
      {
        text: "For international travel planning is important. Health requirements and restrictions on entry can vary, such as requiring a current rabies vaccination no less than 30 days before travel. Some countries may also require your pet to be quarantined for a certain amount of time upon arrival, or have a blood test before travelling.",
      },
      {
        text: "Please contact us before booking your appointment, so we can determine the exact requirements for your planned travel and ensure you’re able to get the travel certificate you need.",
      },
    ],
  },
];

export const skinCareAcordianData = [
  {
    title: "Specialized Expertise",
    text: "Our veterinary team includes experienced dermatologists who have a deep understanding of skin conditions and diseases affecting pets. With their specialized knowledge and advanced training, they are equipped to diagnose and treat a wide range of dermatological issues.",
  },
  {
    title: "Comprehensive Skin Examinations",
    text: "We begin with a thorough examination of your pet's skin, coat, and overall health. Our dermatologists will assess any existing skin problems, identify potential allergies or infections, and perform necessary diagnostic tests to determine the root cause of the issue.",
  },
  {
    title: "Advanced Diagnostic Techniques",
    text: "At Nebula Vets, we employ state-of-the-art diagnostic techniques to gain a comprehensive understanding of your pet's skin condition. This may include skin scrapings, cytology, bacterial and fungal cultures, allergy testing, and biopsies. These tests provide valuable insights that guide our treatment approach.",
  },
  {
    title: "Personalized Treatment Plans",
    text: "Every pet is unique, and their skin care needs vary. Our dermatologists develop personalized treatment plans tailored to your pet's specific condition, considering factors such as their breed, age, and medical history. We utilize a combination of medications, topical treatments, dietary adjustments, and lifestyle modifications to address the underlying causes and provide effective relief.",
  },
  {
    title: "Allergy Management",
    text: "Allergies are a common cause of skin issues in pets. Our dermatologists have expertise in identifying and managing allergies, whether they are due to food, environmental factors, or parasites. We offer allergy testing, immunotherapy, and recommend appropriate allergen avoidance strategies to help your pet find relief.",
  },
  {
    title: "Parasite Control",
    text: "Fleas, ticks, and other parasites can wreak havoc on your pet's skin and coat. Our dermatology services include comprehensive parasite control, providing preventive measures and effective treatment options to keep your pet protected and their skin healthy.",
  },
  {
    title: "Client Education and Support",
    text: "We believe in empowering pet owners with knowledge and understanding. Our dermatology team will provide you with detailed information about your pet's skin condition, treatment options, and long-term care recommendations. We are here to answer your questions and support you throughout your pet's skin care journey.",
  },
  {
    title: "Follow-up Care",
    text: "Dermatological conditions often require ongoing management. We offer follow-up appointments to monitor your pet's progress, adjust treatment plans if needed, and ensure optimal skin health in the long run. We are committed to being with you every step of the way.",
  },
];

export const whyMicrochippingData = [
  {
    title: "Expert Surgical Team",
    Hclass: "!mt-0",
    subText: [
      {
        text: "Our team of skilled veterinarians brings years of experience and expertise to the operating table. With a deep understanding of advanced surgical techniques and a commitment to staying abreast of the latest advancements in veterinary surgery, our surgeons are well-equipped to handle a wide range of procedures with exceptional skill and care.",
      },
    ],
  },
  {
    title: "Comprehensive Surgical Services",
    subText: [
      {
        text: "From routine spays and neuters to complex soft tissue surgeries, orthopedic procedures, tumor removals, and emergency surgeries, our hospital offers a comprehensive range of surgical services tailored to meet the unique needs of your pet. You can trust us to deliver personalized surgical solutions that prioritize your pet's well-being.",
      },
    ],
  },
  {
    title: "Cutting-Edge Facilities and Technology",
    subText: [
      {
        text: "At Nebula Vets, we take pride in our state-of-the-art surgical facilities and advanced equipment. Our hospital is equipped with modern anesthesia monitoring systems, surgical instruments, and techniques, ensuring the highest level of safety, precision, and comfort for your pet.",
      },
    ],
  },
  {
    title: "Personalized Care",
    subText: [
      {
        text: "We understand that each pet is unique, and their surgical needs require individualized attention. Our veterinarians take the time to thoroughly evaluate your pet's health, discuss treatment options, and design a customized surgical plan tailored to their specific condition and requirements. We value open communication and are always available to address any concerns or questions you may have.",
      },
    ],
  },
  {
    title: "Optimal Safety and Comfort",
    subText: [
      {
        text: "Your pet's safety and comfort are of paramount importance to us. Our experienced team utilizes the latest anesthetic protocols tailored to your pet's needs, and we closely monitor their vital signs throughout the entire surgical procedure. We also employ advanced pain management techniques to ensure your pet's well-being and minimize any discomfort.",
      },
    ],
  },
  {
    title: "Compassionate Post-Surgical Care",
    subText: [
      {
        text: "Our commitment to your pet's well-being extends beyond the operating room. After surgery, we provide attentive post-operative care to support their recovery. We provide detailed instructions on at-home care, pain management, and follow-up appointments to ensure a smooth healing process. Our caring staff is always here to address any concerns and provide support during your pet's recovery journey.",
      },
    ],
  },
];

export const euthanasiaServiceData = [
  {
    title: "Euthanasia Service",
    Hclass: "!mt-0",
    subText: [
      {
        text: "Saying goodbye to a beloved pet is a deeply emotional and challenging experience. At Nebula Vets, we understand the profound bond between you and your pet, and we are here to support you during this difficult time. Our compassionate team providesend-of-life care and guiding you through the process with empathy and understanding. Here's how we can assist you:",
      },
    ],
  },
  {
    title: "Compassionate Support",
    subText: [
      {
        text: "We recognize that the decision to say goodbye to your pet is a personal and heartfelt one. Our team is here to listen to your concerns, answer any questions you may have, and provide emotional support throughout the entire process. We understand the grief and sadness that comes with this decision, and we aim to create a compassionate and comforting environment for both you and your pet.",
      },
    ],
  },
  {
    title: "Open Communication",
    subText: [
      {
        text: "We believe in open and honest communication when it comes to end-of-life care. Our veterinarians will take the time to discuss your pet's condition, prognosis, and quality of life to help you make an informed decision. We will guide you through the available options and ensure that you have all the information you need to make the best decision for your pet and your family.",
      },
    ],
  },
  {
    title: "Tailored End-of-Life Services",
    subText: [
      {
        text: "We offer a range of end-of-life services to accommodate your wishes and provide a peaceful transition for your pet. This includes euthanasia services, which can be performed at our veterinary hospital. Our experienced veterinarians prioritize your pet's comfort, dignity, and pain-free experience during this time.",
      },
    ],
  },
  {
    title: "Supportive Environment",
    subText: [
      {
        text: "We strive to create a calm and supportive environment during the end-of-life process. Our facility is designed to offer a peaceful setting where you and your pet can be together during these final moments. We provide a private space where you can say your goodbyes and spend quality time with your pet, offering comfort and reassurance throughout the process.",
      },
    ],
  },
  {
    title: "Aftercare Options",
    subText: [
      {
        text: "We understand that the loss of a pet is a deeply personal experience, and we offer various aftercare options to honor your pet's memory. This may include individual cremation with the return of ashes, communal cremation, or burial services. We can discuss these options with you and provide guidance on how to memorialize your beloved pet in a meaningful way.",
      },
    ],
  },
];

export const whatLaserTherapyData = [
  {
    title: "What is Laser Therapy?",
    Hclass: "!mt-0",
    subText: [
      {
        text: "Laser therapy, also known as low-level laser therapy or cold laser therapy, is a cutting-edge treatment modality that utilizes focused light energy to stimulate cellular activity and promote natural healing processes within the body. This non-invasive and painless therapy is safe for pets of all ages and can be used alongside other treatments to provide comprehensive care.",
      },
    ],
  },
  {
    title: "How Does Laser Therapy Work?",
    subText: [
      {
        text: "During a laser therapy session, a handheld device emits a concentrated beam of laser light that penetrates the targeted tissues. The light energy is absorbed by the cells, stimulating the production of adenosine triphosphate (ATP), a molecule that fuels cellular activities. This increase in ATP promotes accelerated tissue repair, reduces inflammation, and relieves pain.",
      },
    ],
  },
];

export const benefitsLaserTherapyData = [
  {
    title: "Pain Relief",
    text: "During a laser therapy session, a handheld device emits a concentrated beam of laser light that penetrates the targeted tissues. The light energy is absorbed by the cells, stimulating the production of adenosine triphosphate (ATP), a molecule that fuels cellular activities. This increase in ATP promotes accelerated tissue repair, reduces inflammation, and relieves pain.",
  },
  {
    title: "Accelerated Healing",
    text: "The focused laser light stimulates cellular metabolism and blood flow to the treated area, enhancing the delivery of oxygen, nutrients, and immune cells. This accelerated healing process promotes tissue repair, reduces scar tissue formation, and aids in wound healing.",
  },
  {
    title: "asReduced Inflammationf",
    text: "Laser therapy has anti-inflammatory effects by reducing swelling and increasing lymphatic drainage. This is especially beneficial for pets with inflammatory conditions, such as soft tissue injuries, skin infections, or dental diseases.",
  },
  {
    title: "Non-Invasive and Drug-Free",
    text: "Laser therapy is a non-invasive alternative to traditional pain management methods, such as medication or surgery. It does not require anesthesia or sedation, making it a safe and stress-free option for pets.",
  },
  {
    title: "aEnhanced Mobilitysf",
    text: "Pets experiencing joint stiffness or limited mobility due to musculoskeletal conditions can benefit from laser therapy. By reducing inflammation, relieving pain, and promoting tissue repair, laser therapy helps improve range of motion, allowing pets to move more comfortably.",
  },
  {
    title: "Quick and Convenient",
    text: "Laser therapy sessions are typically short and can be completed within a few minutes. Pets experience no discomfort during the treatment and often find it relaxing. The frequency and duration of the sessions depend on the pet's condition and response to therapy.",
  },
  {
    title: "Complementary to Other Treatments",
    text: "Laser therapy can be used in conjunction with other treatment modalities to enhance overall outcomes. It can complement medications, rehabilitation exercises, acupuncture, or post-operative care, providing a holistic approach to pet healthcare.",
  },
];

export const mapData = [
  {
    title: "Downtown",
    hclss: "!mt-0",
    subText: [{ text: "2468 18th Street, SWWashington DC, 20003dff" }],
  },
  {
    title: "Opening Hours",
    subText: [
      { text: "Monday - Friday: 8AM - 6PM" },
      { text: "Saturday: 9AM - 5PM" },
      { text: "Sunday: Closed" },
    ],
  },
];
