import {
  swift,
  xcode,
  objC,
  ios,
  swiftDev,
  iosDev,
  c,
  objectiveC,
  xcodeIde,
  vscodeIde,
  git,
  postman,
  sublimeText,
  disitral,
  handsInTech,
  webwing,
  appTech,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,
  project8,
  project9,
  project10,
  project11,
  project12,
  project13,
  project14,
  project15,
  project16,
  project17,
  project18,
  project19,
  project20,
  project21,
  project22,
  project23,
  project24,
  project25,
  project26,
  project27,
  project28,
  project29,
  project30,
  project31,
  project32,
  project33,
  project34,
  project35,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'iOS Developer',
    icon: ios,
  },
  {
    title: 'Swift',
    icon: swift,
  },
  {
    title: 'Xcode IDE',
    icon: xcode,
  },
  {
    title: 'Objective C',
    icon: objC,
  },
];

const technologies = [
  {
    name: 'swift',
    icon: swiftDev,
  },
  {
    name: 'iOS Dev',
    icon: iosDev,
  },
  {
    name: 'c & c++',
    icon: c,
  },
  {
    name: 'objective-C',
    icon: objectiveC,
  },
  {
    name: 'xCode',
    icon: xcodeIde,
  },
  {
    name: 'vsCode',
    icon: vscodeIde,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'postman',
    icon: postman,
  },
  {
    name: 'sublimeText',
    icon: sublimeText,
  },
];

const experiences = [
  {
    title: 'Senior Software Engineer',
    company_name: 'Digitral - Innovation Driven',
    icon: disitral,
    iconBg: '#383E56',
    date: '2022 - Present',
    points: [
      'iOS Development: Building high-performance, user-friendly applications using Swift, UIKit, CoreData, and custom animations.',
      'Software Architecture: Implementing scalable and modular architectures (MVVM, VIPER, Clean Architecture) for maintainable codebases.',
      'Event Tracking & Analytics: Developing custom event tracking frameworks to log user interactions across an application efficiently.',
      'Backend & Data Handling: Working with RESTful APIs, Firebase, and implementing data-driven features for mobile apps.',
      'Performance Optimization: Enhancing app speed, memory usage, and UI rendering performance to deliver smooth experiences.',
      'Cross-Team Collaboration: Working closely with designers, product managers, and backend teams to develop end-to-end solutions.',
    ],
  },
  {
    title: 'Senior iOS Developer',
    company_name: 'Hands In Technology',
    icon: handsInTech,
    iconBg: '#E6DEDD',
    date: '2020 - 2022',
    points: [
      'Custom UI & Animations: Developing smooth navigation transitions and interactive UI elements similar to Airbnb-style animations.',
      'Architecture & Design Patterns: Structuring applications using MVVM, VIPER, Clean Architecture, and applying dependency injection for better code maintainability.',
      'Networking & API Integration: Working with RESTful APIs, URLSession, Alamofire, and implementing optimized caching mechanisms.',
    ],
  },
  {
    title: 'iOS Developer',
    company_name: 'Webwing Technologies Pvt Ltd',
    icon: webwing,
    iconBg: '#383E56',
    date: '2018 - 2020',
    points: [
      'Developing iOS Applications: Writing clean, efficient, and maintainable code using Swift and UIKit.',
      'Managing Data & Storage: Working with CoreData, SQLite, Firebase Firestore, and optimizing data retrieval and persistence.',
      'Debugging & Bug Fixing: Diagnosing and resolving crashes, UI issues, and performance bottlenecks.',
      'Collaborating with Cross-Functional Teams: Working with UI/UX designers, backend developers, and product teams to deliver high-quality apps.',
    ],
  },
  {
    title: 'iOS Developer',
    company_name: 'Apptech Mobile Solution',
    icon: appTech,
    iconBg: '#E6DEDD',
    date: '2017 - 2018',
    points: [
      'I am an iOS Developer with a passion for building user-friendly, high-performance iOS applications. I have experience in Swift, UIKit, CoreData, and API integration, and I am eager to learn and grow in the field of iOS development.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make an app as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met an iOS developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our app, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'myIM3',
    description:
      'Check balance & quota, enjoy in-app promotions, exchange IMPoin only on myIM3. Maximize your digital lifestyle & unlock a world of convenience right at your fingertips with myIM3 app.',
    tags: [
      {
        name: 'iOS',
        color: 'blue-text-gradient',
      },
      {
        name: 'Swift',
        color: 'green-text-gradient',
      },
      {
        name: 'Xcode',
        color: 'pink-text-gradient',
      },
    ],
    image: project1,
    view: 'https://apps.apple.com/in/app/myim3/id888610275',
  },
  {
    name: 'bima+',
    description:
      "For you who like to experience more, it's time for you to start a digital lifestyle that is simpler, more exciting and more personal with the new bima+. You can check your internet quota and information regarding active subscription packages without hassle. Purchase data package? It's so easy! You can choose package according to what you need!",
    tags: [
      {
        name: 'iOS',
        color: 'blue-text-gradient',
      },
      {
        name: 'Swift',
        color: 'green-text-gradient',
      },
      {
        name: 'Xcode',
        color: 'pink-text-gradient',
      },
    ],
    image: project2,
    view: 'https://apps.apple.com/in/app/bima/id1276444056',
  },
  {
    name: 'BSNL Selfcare',
    description:
      'BSNL App ! Track usage details, recharge & bill pay made easy.',
    tags: [
      {
        name: 'iOS',
        color: 'blue-text-gradient',
      },
      {
        name: 'Swift',
        color: 'green-text-gradient',
      },
      {
        name: 'Xcode',
        color: 'pink-text-gradient',
      },
    ],
    image: project3,
    view: 'https://apps.apple.com/us/app/id1586971313',
  },
  {
    name: 'Ooredoo Kuwait',
    description:
      'Ooredoo Kuwait app provides you a quick and easy way to check your balance, Recharge your prepaid numbers, Pay your postpaid bills, Transfer Balance and Shop the latest exclusive offers & exciting deals on mobiles, devices and Shamel, Xpress & ANA SIM plans or even get an eSIM.',
    tags: [
      {
        name: 'iOS',
        color: 'blue-text-gradient',
      },
      {
        name: 'Swift',
        color: 'green-text-gradient',
      },
      {
        name: 'Xcode',
        color: 'pink-text-gradient',
      },
    ],
    image: project4,
    view: 'https://apps.apple.com/us/app/id549770639',
  },
  {
    name: 'Ooredoo Qatar',
    description:
      'With the Ooredoo app, you now have a quick and easy way to check your balances, recharge and pay your phone bills. Whether you are in Qatar or traveling overseas, the Ooredoo app is your secure companion to manage your accounts and subscriptions and stay in the loop.',
    tags: [
      {
        name: 'iOS',
        color: 'blue-text-gradient',
      },
      {
        name: 'Swift',
        color: 'green-text-gradient',
      },
      {
        name: 'Xcode',
        color: 'pink-text-gradient',
      },
    ],
    image: project5,
    view: 'https://apps.apple.com/us/app/id619828745',
  },
  {
    name: 'Asiacell Partners',
    description:
      'Asiacell Partners is a special app for sales partners to monitor their sales activities.',
    tags: [
      {
        name: 'iOS',
        color: 'blue-text-gradient',
      },
      {
        name: 'Swift',
        color: 'green-text-gradient',
      },
      {
        name: 'Xcode',
        color: 'pink-text-gradient',
      },
    ],
    image: project6,
    view: 'https://apps.apple.com/us/app/id1553666942',
  },
  {
    name: 'Simpel',
    description:
      'SIMPEL application is one of apps used by hundreds of retailers to makes it easier to transaction with various Indosat products. With this apps retailer can do selling data package, recharge electronic vouchers, voucher data injection.',
    tags: [
      {
        name: 'iOS',
        color: 'blue-text-gradient',
      },
      {
        name: 'Swift',
        color: 'green-text-gradient',
      },
      {
        name: 'Xcode',
        color: 'pink-text-gradient',
      },
    ],
    image: project7,
    view: 'https://apps.apple.com/us/app/id1486569820',
  },
  {
    name: 'Asiacell',
    description:
      'Staying on top of your account is a lot easier with the way we display your balances and subscriptions. You can keep track of your remaining data, voice and SMS balances, main balance and postpaid bill. View expiry or renewal dates of your subscribed packages.',
    tags: [
      {
        name: 'iOS',
        color: 'blue-text-gradient',
      },
      {
        name: 'Swift',
        color: 'green-text-gradient',
      },
      {
        name: 'Xcode',
        color: 'pink-text-gradient',
      },
    ],
    image: project8,
    view: 'https://apps.apple.com/in/app/asiacell/id1037701735',
  },
  {
    name: 'Ooredoo Business',
    description:
      'Ooredoo Business App is designed for business customers to manage their services with Ooredoo. The app allows you to add and manage services, pay bills, contact sales and customer care, file tickets, and more.',
    tags: [
      {
        name: 'iOS',
        color: 'blue-text-gradient',
      },
      {
        name: 'Swift',
        color: 'green-text-gradient',
      },
      {
        name: 'Xcode',
        color: 'pink-text-gradient',
      },
    ],
    image: project9,
    view: 'https://apps.apple.com/in/app/ooredoo-business/id6463796777',
  },
  {
    name: 'MasMedi - Healthcare App',
    description:
      'MasMedi is India’s one-of-a-kind tech-driven Healthcare app which provides local and hyperlocal Diagnostic Labs (Pathology & Radiology) services as a marketplace at your fingertips.',
    tags: [
      {
        name: 'iOS',
        color: 'blue-text-gradient',
      },
      {
        name: 'Swift',
        color: 'green-text-gradient',
      },
      {
        name: 'Xcode',
        color: 'pink-text-gradient',
      },
    ],
    image: project10,
    view: 'https://apps.apple.com/us/app/masmedi-healthcare-app/id1608793042',
  },
  {
    name: 'Contact App Manager',
    description:
      'Welcome to Contact App Manager - A One Step EASY & SAFE Solution for sharing your contact. Forget about dictating your number in the ears anymore. Share all the info you want from your profile with just one click by just scanning the customized QR code and save it directly in the phone book.',
    tags: [
      {
        name: 'iOS',
        color: 'blue-text-gradient',
      },
      {
        name: 'Swift',
        color: 'green-text-gradient',
      },
      {
        name: 'Xcode',
        color: 'pink-text-gradient',
      },
    ],
    image: project11,
    view: 'https://apps.apple.com/us/app/contact-app-manager/id1554821249',
  },
  {
    name: 'Office Hours - Fitness at Work',
    description:
      'This app has what you need to stay on track with a healthy lifestyle. Get a customizable routine exercise Plan, personalized 4 reminders and tips to make you feel relaxed, stress-free and fit.',
    tags: [
      {
        name: 'iOS',
        color: 'blue-text-gradient',
      },
      {
        name: 'Swift',
        color: 'green-text-gradient',
      },
      {
        name: 'Xcode',
        color: 'pink-text-gradient',
      },
    ],
    image: project12,
    view: 'https://apps.apple.com/us/app/office-hours-fitness-at-work/id1508343599',
  },
  {
    name: 'Dallal App',
    description:
      'Dallal App allows you to browse properties offered for sale or rent and crosses all geographical barriers in delivering information about the property. The application is a link between the seller and the buyer without the need for intermediaries.',
    tags: [
      {
        name: 'iOS',
        color: 'blue-text-gradient',
      },
      {
        name: 'Swift',
        color: 'green-text-gradient',
      },
      {
        name: 'Xcode',
        color: 'pink-text-gradient',
      },
    ],
    image: project13,
    view: 'https://apps.apple.com/us/app/%D8%AA%D8%B7%D8%A8%D9%8A%D9%82-%D8%AF-%D9%84%D8%A7%D9%84-%D9%84%D9%84%D8%B9%D9%82%D8%A7%D8%B1%D8%A7%D8%AA/id1451716834',
  },
  {
    name: 'Simsim Cinema',
    description:
      'Welcome to your new world of Entertainment!!!! Watch Latest Movies, Original and Exclusive Content, never seen before online web series written by renowned writers, starring popular celebrities, & directed by award-winning directors.',
    tags: [
      {
        name: 'iOS',
        color: 'blue-text-gradient',
      },
      {
        name: 'Swift',
        color: 'green-text-gradient',
      },
      {
        name: 'Xcode',
        color: 'pink-text-gradient',
      },
    ],
    image: project14,
    view: 'https://apps.apple.com/us/app/id1537996820',
  },
  {
    name: 'TeleAfya',
    description:
      'TeleAfya provides a healthcare delivery platform for all your medical needs. This is a one-stop platform for mobile healthcare, Telemedicine & Wellness. We connect patients to community medical personnel and medical outlets in closest proximity.',
    tags: [
      {
        name: 'iOS',
        color: 'blue-text-gradient',
      },
      {
        name: 'Swift',
        color: 'green-text-gradient',
      },
      {
        name: 'Xcode',
        color: 'pink-text-gradient',
      },
    ],
    image: project15,
    view: 'https://apps.apple.com/app/id1534263730',
  },
  {
    name: 'Aarya24KT',
    description:
      'Welcome to Aarya 24kt app. Your online Gold Gifting store now at your fingertips. Aarya 24kt offers a vast range of certified products in diverse style. From traditional, international, classic & casual we have innovative products that start from a price, as affordable as Rs. 100.',
    tags: [
      {
        name: 'iOS',
        color: 'blue-text-gradient',
      },
      {
        name: 'Swift',
        color: 'green-text-gradient',
      },
      {
        name: 'Xcode',
        color: 'pink-text-gradient',
      },
    ],
    image: project16,
    view: 'https://apps.apple.com/tt/app/id1531268435',
  },
  {
    name: 'IMBusy',
    description:
      'IMBUSY is not just a job search tool This is a service you can trust. Comfortable search, modern technology, user-friendly interface make IMBUSY an indispensable intermediary between the applicant and the employer. Follow the news of the labor market, read job reviews and salaries, but most importantly - you are just a couple of clicks from your dream job. Register and choose!',
    tags: [
      {
        name: 'iOS',
        color: 'blue-text-gradient',
      },
      {
        name: 'Swift',
        color: 'green-text-gradient',
      },
      {
        name: 'Xcode',
        color: 'pink-text-gradient',
      },
    ],
    image: project17,
    view: 'https://apps.apple.com/al/app/imbusy/id1463622655',
  },
  {
    name: 'Nicos Pizza Pasta',
    description:
      'Use our app to beat the queue and Order Online. You can order Collection and Delivery. Check out our delivery zones using the info tab. Build your profile.',
    tags: [
      {
        name: 'iOS',
        color: 'blue-text-gradient',
      },
      {
        name: 'Swift',
        color: 'green-text-gradient',
      },
      {
        name: 'Xcode',
        color: 'pink-text-gradient',
      },
    ],
    image: project18,
    view: 'https://apps.apple.com/us/app/nicos-pizza-pasta/id1342727932',
  },
  {
    name: 'Smart Shiksha Driver',
    description:
      'Smart Shiksha driver app helps you to see the assigned bus routes by school. It helps you to manage your trip details where you can start/end the trip so that school and parents can see the live updates from trip instead of calling. It also helps to become an effective and responsible school vehicle driver.',
    tags: [
      {
        name: 'iOS',
        color: 'blue-text-gradient',
      },
      {
        name: 'Swift',
        color: 'green-text-gradient',
      },
      {
        name: 'Xcode',
        color: 'pink-text-gradient',
      },
    ],
    image: project19,
    view: 'https://apps.apple.com/us/app/smart-shiksha-driver/id1474198920',
  },
  {
    name: 'AgroLiv',
    description: 'Application to track daily onion market prices',
    tags: [
      {
        name: 'iOS',
        color: 'blue-text-gradient',
      },
      {
        name: 'Swift',
        color: 'green-text-gradient',
      },
      {
        name: 'Xcode',
        color: 'pink-text-gradient',
      },
    ],
    image: project20,
    view: 'https://apps.apple.com/us/app/agroliv/id1458879185?ign-mpt=uo%3D2',
  },
  {
    name: 'Child Development',
    description:
      'Parents and Educators are able to track child development for children from birth to the age of 5. The app uses algorithm to notify users that children are not developing inline with typical child development. The milestones are taken from the Early years foundation stage UK curriculum.The current perimeter is children are expected to at-least complete 70% of milestones in the previous stage before they enter the next age band.',
    tags: [
      {
        name: 'iOS',
        color: 'blue-text-gradient',
      },
      {
        name: 'Swift',
        color: 'green-text-gradient',
      },
      {
        name: 'Xcode',
        color: 'pink-text-gradient',
      },
    ],
    image: project21,
    view: 'https://apps.apple.com/in/app/child-development/id1300298298',
  },
  {
    name: 'Smart Shiksha Teacher',
    description:
      'Smart Shiksha teacher app helps you stay connected with students, school and parents where you can post the updates with respect to class events, assignments, attendance, results & student feedback etc. to parents. It also helps to become an effective and responsible teacher.',
    tags: [
      {
        name: 'iOS',
        color: 'blue-text-gradient',
      },
      {
        name: 'Swift',
        color: 'green-text-gradient',
      },
      {
        name: 'Xcode',
        color: 'pink-text-gradient',
      },
    ],
    image: project22,
    view: 'https://apps.apple.com/us/app/smart-shiksha-teacher/id1466230046',
  },
  {
    name: 'Pearling',
    description:
      "Find delicious local food that you can order from anywhere anytime. Taste delicacies, and mouth watering dishes during your short term travel adventures and long term stays.",
    tags: [
      {
        name: 'iOS',
        color: 'blue-text-gradient',
      },
      {
        name: 'Swift',
        color: 'green-text-gradient',
      },
      {
        name: 'Xcode',
        color: 'pink-text-gradient',
      },
    ],
    image: project23,
    view: 'https://apps.apple.com/us/app/pearling/id1458973845?ign-mpt=uo%3D4',
  },{
    name: 'Smart Shiksha Parent',
    description:
      "Smart Shiksha parent app helps you stay connected with school and parent community where you can see the updates posted by school and parenting articles provided to help to become an effective and responsible parent.",
    tags: [
      {
        name: 'iOS',
        color: 'blue-text-gradient',
      },
      {
        name: 'Swift',
        color: 'green-text-gradient',
      },
      {
        name: 'Xcode',
        color: 'pink-text-gradient',
      },
    ],
    image: project24,
    view: 'https://apps.apple.com/us/app/smart-shiksha-parent/id1439788357',
  },
  {
    name: 'Figeit',
    description:
      "You can find what you are looking for Goods in your neighborhood Shop (Street/ City/ State/ Country), at the same time you can get Goods at your Doorstep. You can simplify your work by using fiGeit App.",
    tags: [
      {
        name: 'iOS',
        color: 'blue-text-gradient',
      },
      {
        name: 'Swift',
        color: 'green-text-gradient',
      },
      {
        name: 'Xcode',
        color: 'pink-text-gradient',
      },
    ],
    image: project25,
    view: 'https://apps.apple.com/in/app/figeit/id1442860519',
  },
  {
    name: 'Shake Your Deal',
    description:
      "Shake your deal is a pre and post table booking, of hotels or restaurant, mobile app for iOS and Android, with user-friendly login and registration functionality. It also includes Facebook login and registration. It provides the subscription to the restaurants, hotels and customers as well. It let the customer know available nearby restaurants and hotels, which is registered on Shake Your Deal, have empty table for booking or not? Using Shake your deal we can find the menu list of nearby hotels and restaurant and book the table through the app.",
    tags: [
      {
        name: 'iOS',
        color: 'blue-text-gradient',
      },
      {
        name: 'Swift',
        color: 'green-text-gradient',
      },
      {
        name: 'Xcode',
        color: 'pink-text-gradient',
      },
    ],
    image: project26,
    view: '',
  },
  {
    name: 'Cabby',
    description:
      "Cabby is a taxi booking mobile app for iOS and Android, with user-friendly login and registration functionality. The user can easily login and create their account to book the taxi via a mobile application. Cabby is build with integrated social media APIs like Facebook and Google API. I have integrated the google login, facebook login and google map in the app. Using polyline I have drawn the route between pickup and drop off location.",
    tags: [
      {
        name: 'iOS',
        color: 'blue-text-gradient',
      },
      {
        name: 'Swift',
        color: 'green-text-gradient',
      },
      {
        name: 'Xcode',
        color: 'pink-text-gradient',
      },
    ],
    image: project27,
    view: '',
  },
  {
    name: 'Ooredoo Salesforce & FOS',
    description:
      "A tool for internal sales team to drive business kpi, monitor FOS & POS performance, downward communication to team members through Broadcast and upward communication through Competition update, all these functionalities are role based.",
    tags: [
      {
        name: 'iOS',
        color: 'blue-text-gradient',
      },
      {
        name: 'Swift',
        color: 'green-text-gradient',
      },
      {
        name: 'Xcode',
        color: 'pink-text-gradient',
      },
    ],
    image: project28,
    view: '',
  },
  {
    name: 'Polinsta',
    description:
      "Polinsta is a World 1st Social Media Platform for Politics and democracy. Polinsta is a Politics & Democracy social-media platform app. The aim ought to be driving discussions and evoking thoughts as a tool of social and national change.",
    tags: [
      {
        name: 'iOS',
        color: 'blue-text-gradient',
      },
      {
        name: 'Swift',
        color: 'green-text-gradient',
      },
      {
        name: 'Xcode',
        color: 'pink-text-gradient',
      },
    ],
    image: project29,
    view: 'https://apps.apple.com/us/app/id1603282623',
  },
  {
    name: 'RoomYara: Find Your Match',
    description:
      "RoomYara is an app for discovering amazing people on the basis of a matching ratio. RoomYara is a new way for you to find that perfect someone to create exciting memories and explore life with. We're making it easier for you to find your perfect match, whether you're looking for a friend, soulmate, roommate, or something more!",
    tags: [
      {
        name: 'iOS',
        color: 'blue-text-gradient',
      },
      {
        name: 'Swift',
        color: 'green-text-gradient',
      },
      {
        name: 'Xcode',
        color: 'pink-text-gradient',
      },
    ],
    image: project30,
    view: 'https://apps.apple.com/us/app/id1661986338',
  },
  {
    name: 'Redington Value',
    description:
      "An App from Redington the value-added distributor to offer better connectivity and services to customers and partners. We provide a seamless experience and here we are to ensure our customers and partners have real-time connectivity to our team and complete visibility into the process.",    tags: [
      {
        name: 'iOS',
        color: 'blue-text-gradient',
      },
      {
        name: 'Swift',
        color: 'green-text-gradient',
      },
      {
        name: 'Xcode',
        color: 'pink-text-gradient',
      },
    ],
    image: project31,
    view: 'https://apps.apple.com/in/app/id6443713419',
  },
  {
    name: 'IGL - Indian Gaming League',
    description:
      "Indian Gaming League is India elite gaming platform which brings together the highly skilled E-sport players across the country to play against each other and win exclusive cash prizes.",
    tags: [
      {
        name: 'iOS',
        color: 'blue-text-gradient',
      },
      {
        name: 'Swift',
        color: 'green-text-gradient',
      },
      {
        name: 'Xcode',
        color: 'pink-text-gradient',
      },
    ],
    image: project32,
    view: 'https://apps.apple.com/us/app/id1490988972',
  },
  {
    name: 'ShipemApp',
    description:
      "Shipem is a worldwide delivery application for all of your needs.",
    tags: [
      {
        name: 'iOS',
        color: 'blue-text-gradient',
      },
      {
        name: 'Swift',
        color: 'green-text-gradient',
      },
      {
        name: 'Xcode',
        color: 'pink-text-gradient',
      },
    ],
    image: project33,
    view: 'https://apps.apple.com/nz/app/shipemapp/id1469010727',
  },
  {
    name: 'Mera/Myhero',
    description:
      "Want a Plumber, Electrician, Breakdown Rescue, A/C Repair, Mobile Repairer or any one of thousands of service providers, simply signup choose what your looking for.",
    tags: [
      {
        name: 'iOS',
        color: 'blue-text-gradient',
      },
      {
        name: 'Swift',
        color: 'green-text-gradient',
      },
      {
        name: 'Xcode',
        color: 'pink-text-gradient',
      },
    ],
    image: project34,
    view: 'https://itunes.apple.com/us/app/mera-myhero/id1458703187?mt=8&ign-mpt=uo%3D2',
  },
  {
    name: 'Gym Challenger',
    description:
      "The Gym Challenger app offers features designed to enhance fitness challenges and member engagement.",
    tags: [
      {
        name: 'iOS',
        color: 'blue-text-gradient',
      },
      {
        name: 'Swift',
        color: 'green-text-gradient',
      },
      {
        name: 'Xcode',
        color: 'pink-text-gradient',
      },
    ],
    image: project35,
    view: 'https://itunes.apple.com/us/app/gymchallenger/id1438742803?mt=8',
  },
];

export { services, technologies, experiences, testimonials, projects };
