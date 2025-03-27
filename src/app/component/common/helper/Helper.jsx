import {
  AdditionalServicesIcon,
  FacebookIcon,
  InstaIcon,
  LinkedingIcon,
  PreventCareIcon,
  SickPetientCare,
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
      { link: "#", linkTitle: "Vaccinations" },
      { link: "#", linkTitle: "Dental" },
    ],
  },
  {
    icon: <SickPetientCare />,
    headingTitle: "Sick Patient Care",
    linkItem: [
      { link: "#", linkTitle: "Urgent & Emergency Care" },
      { link: "#", linkTitle: "Telemedicine" },
      { link: "#", linkTitle: "Diagnostics" },
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
    text: "address their specific requirements. In addition to providing routine health checks, we offer a comprehensive range of services to ensure the well-being of",
    listData: [
      { title: "your pets:" },
      { title: "-Vaccinations " },
      { title: "-Blood panels" },
      { title: "-Parasitic" },
      { title: "-Microchipping" },
      { title: "-Fecal tests" },
      { title: "-Skin tests" },
      { title: "-Dietary advise" },
    ],
  },
];
