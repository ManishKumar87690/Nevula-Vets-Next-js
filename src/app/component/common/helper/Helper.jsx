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
  { link: "#", linkTitle: "LOCATION" },
  { link: "#", linkTitle: "CAREER" },
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
      { link: "#", linkTitle: "Pharmacy" },
    ],
  },
  {
    icon: <SurgryIcon />,
    headingTitle: "Surgery",
    linkItem: [
      { link: "#", linkTitle: "Surgeries" },
      { link: "#", linkTitle: "Spay & Neuter" },
    ],
  },
  {
    icon: <AdditionalServicesIcon />,
    headingTitle: "Additional Services",
    linkItem: [
      { link: "#", linkTitle: "Travel Certificates" },
      { link: "#", linkTitle: "Skin & Dermatology" },
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
        link: "#",
        title: "learn more",
      },
      {
        haadingTitle: "Laser Therapy",
        text: "Our state-of-the-art veterinary hospital utilizes advanced laser technology to provide non-invasive and drug-free treatment options that promote healing and enhance the well-being of your beloved pets.",
        link: "#",
        title: "learn more",
      },
      {
        haadingTitle: "Hospice & Euthanasia",
        text: "The decision to say goodbye to your pet is the most difficult decision you’ll have to make. Our team at nebula vets is here to guide you through the process with compassion and can perform end-of-life services at the time of your choosing.",
        link: "#",
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
