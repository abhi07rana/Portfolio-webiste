// --- 🎨 Site Styling ---

// Colors (recommendation: choose a color suitable for dark and light modes)
// Should be inputted as a hex value. Use https://g.co/kgs/XCcs7T for choosing colors with hex.
const colors = {
    buttonColor: "#4305ba",
    LinkHighlightColor: "#4305ba"
}

// Transitions
const transitions = {
    active: true, // activate for all sections
    onlyLanding: false, // activate only for initial load of landing page
    showOnce: true, // transition only once
    thresholdOption: 0.2 // indicates at what percentage of the sections visibility the transition should start
}

// Splash Screen
const splashScreen = true // recommended: for best behavior after refresh

// --- 👋 Greeting Section ---
const greeting = {
    intro: "Hello 👋, my name is",
    name: "Abhishek Rana",
    message: "I am a student at Graphic Era University with a major in Computer Science. I have a passion for computer programming and information technology. I have used computer programming since I was in grade school. This passion has given me the ability to develop programs for a multitude of things, including websites and programming languages.My other love is information technology. I have many plans to implement newer technologies in my life such as cloud computing, cyber security, and managed IT services.I am open to learning new things and getting involved with new projects that can help me learn or apply all that I have learned throughout my university career.",
    basedLocation: "Uttarakhand,INDIA 🇮🇳",
    resumeLink: "https://drive.google.com/file/d/1ymZPlvYf2m52o-agILBHlfFKlfBdd-cb/view", 
    logo: {
        link: "images/initials.png", // use relative path from  parent directory -> ex: images/image.ext
        custom: true // takes precedence over image logo and allows for custom HTML logo (./components/Navbar.vue)
    },
    portraitLink: 'images/portrait.jpg'
}

const socialMediaLinks = {
    github: "https://github.com/abhi07rana",
    linkedin: "https://www.linkedin.com/in/abhishekrana9756/",
    medium: "",
    stackoverflow: "",
    xtwitter: "",
    leetcode: "https://leetcode.com/ranaabhishek9756/",
    codeforces: "https://codeforces.com/profile/iamhackerhurichan",
    codingNinja: "https://www.naukri.com/code360/profile/abhi07rana"
} // to add any additional social media links check out the README.md or src/icons.js file

// --- 😎 About Section ---
const about = {
    autobiography: [
        "My name is Abhishek, and I'm a BTech Computer Science student at Graphic Era Hill University. I have a passion for solving complex problems and developing innovative software solutions. During my time at university, I’ve had the opportunity to work on various intriguing projects, honing my skills in both industry-grade software and advanced app development practices. I was also honored to be selected for the Amazon ML Summer School 2024, which further fueled my enthusiasm for machine learning and AI.,Nowadays, you can find me immersed in my coursework or working on my latest project to tackle the next big challenge"
    ], // Separated items are paragraphs
    techStack: [
        "C++",
        "PHP",
        "JavaScript",
        "ReactJS",
        "Vue.js",

    ],
    photo1Link: "images/portrait1.jpeg",
    photo2Link: "images/portrait2.jpeg",
    photo3Link: "images/portrait3.jpeg"
}
const works = [
    

    {
        projectName: "Map Chat Hub",
        yearCompleted: "2024",
        description: "Objective:Map Chat is a real-time web application that integrates geolocation and chat functionalities. Users can track their location on an interactive map, select and update their avatars, and engage in real-time chat with other users. The application features real-time updates, chat history, and notifications. It leverages technologies such as Leaflet for mapping, Socket.io for real-time communication, and standard web technologies for frontend development",
        techStack: " HTML, CSS, JavaScript, Node.js, Socket.io, Leaflet",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/abhi07rana/mapchathub"
            },
            {
                label: "",
                type: "external",
                url: "https://mapchathub-abhishek.onrender.com/"
            }
        ],
        imageLink: "images/a.png",
        alignLeft: true
    }
    ,{
        projectName: "MULTIPLE-DISEASE-PREDICTION-SYSTEM",
        yearCompleted: "2023",
        description: "Objective:Developed a web-based multiple disease prediction system.       Role: Led the development, implemented machine learning models, and integrated them into a Streamlit application. Also responsible for data preprocessing, model training, and deployment.Outcome:Successfully built a user-friendly interface allowing users to input health data for predicting diseases including diabetes, heart disease, Parkinson's disease, and COVID-19. The application provides accurate predictions based on input data, helping users assess their health risks conveniently.",
        techStack: "HTML, CSS, JavaScript,php",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/abhi07rana/MULTIPLE-DISEASE-PREDICTION-SYSTEM"
            },
            {
                label: "",
                type: "external",
                url: "https://abhi07rana-advanced-diagnostic-tool-app-fj8rvr.streamlit.app/"
            }
        ],
        imageLink: "images/Screenshot 2024-03-30 at 12.17.31 PM.png",
        alignLeft: false
    },{
        projectName: "Personal Portfolio Website",
        yearCompleted: "2023",
        description: "Designed and developed an  single page application template to help web developers create visually appealing personal portfolios, focusing on ease of use and customization. Built with Vue.js, JS, HTML, Tailwind CSS.",
        techStack: "Vue.js, JS, HTML, Tailwind.css",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/feifyKike/webdev_portfolio"
            },
            {
                label: "",
                type: "external",
                url: "https://feifykike.github.io/webdev_portfolio"
            }
        ],
        imageLink: "images/b.png",
        alignLeft: true
    }
    
    ,

    {
        projectName: "GEIMS blood donation portal",
        yearCompleted: "2023",
        description: "The blood donation portal project aimed to create an informative and user-friendly website to raise awareness about blood donation, provide essential information about the donation process, and encourage community participation in voluntary blood donations. The website served as a platform to educate visitors about the significance of blood donation, eligibility criteria, health history assessment, and the impact of donating blood on saving lives.",
        techStack: "HTML , CSS and JS",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/abhi07rana/GEIMS-BLOOD-DOANTION-PORTAL"
            },
            {
                label: "",
                type: "external",
                url: "https://abhi07rana.github.io/GEIMS-BLOOD-DOANTION-PORTAL/"
            }
        ],
        imageLink: "images/Screenshot 2024-03-30 at 12.49.08 PM.png",
        alignLeft: false
    },
    {
        projectName: "simple-todo-list",
        yearCompleted: "2023",
        description: "This is a simple To-Do List web application built using HTML, CSS, and JavaScript. It allows users to add tasks, mark them as completed, and remove them from the list.",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/abhi07rana/simple-todo-list"
            },
            {
                label: "",
                type: "external",
                url: "https://abhi07rana.github.io/simple-todo-list/" 
            }
        ],
        imageLink: "images/Screenshot 2024-03-30 at 12.51.14 PM.png",
        alignLeft: true
    },
    {
        projectName: "Tic-Tac-Toe-Game",
        yearCompleted: "2024",
        description: "This is a simple Tic-Tac-Toe web application built using HTML, CSS, and JavaScript. It allows players to enjoy the classic game of Tic-Tac-Toe right in their web browser.",
        techStack: "JavaScript",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/abhi07rana/Tic-Tac-Toe-Game"
            },
            {
                label: "",
                type: "external",
                url: "https://abhi07rana.github.io/Tic-Tac-Toe-Game/"
            }
        ],
        imageLink: "images/Screenshot 2024-03-30 at 12.53.41 PM.png",
        alignLeft: false
    }
]

const archiveLink = "https://github.com/feifyKike?tab=repositories"

// --- 📭 Contact Section ---
// 2 Options available - Choose 1
const contact = {
    externalLink: {
        shortTitle: "Get in Touch",
        note: [
            "Currently seeking web and software development positions/internships .",
            "Also looking to build a team for projects & startup ideas or just make professional connections."
        ], // paragraph breaks will be entered after each item,
        link: {
            email: "ranaabhishek9756@gmail.com", // email takes precedance
            // other: "https://forms.gle/W3MswTKsPWMxEbn58"
        },
        responseTimeMessage: "...and I'll resopnd within the next 24hrs"
    },
    formEmbedLink: "" // inclusion of this link will take precedance
}

export default {
    colors,
    transitions,
    splashScreen,
    greeting,
    socialMediaLinks,
    about,
    // experiences,
    works,
    archiveLink,
    contact
}