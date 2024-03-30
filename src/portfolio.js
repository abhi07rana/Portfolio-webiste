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
    basedLocation: "Uttarakhand,India 🇮🇳",
    resumeLink: "https://drive.google.com/file/d/1v-RfKb815toFWFTlINoQQmt_Uh38BPg4/view?usp=drive_link", // recommended: google drive file share link (change to "anyone on the internet can view")
    logo: {
        link: "images/initials.png", // use relative path from  parent directory -> ex: images/image.ext
        custom: true // takes precedence over image logo and allows for custom HTML logo (./components/Navbar.vue)
    },
    portraitLink: 'images/IMG_2785 copy.jpeg'
}

const socialMediaLinks = {
    github: "https://github.com/abhi07rana",
    linkedin: "https://www.linkedin.com/in/abhishekrana9756/",
    // medium: "https://medium.com/@mimaishel",
    stackoverflow: "",
    // xtwitter: "https://twitter.com/mimaishel"
} // to add any additional social media links check out the README.md or src/icons.js file

// --- 😎 About Section ---
const about = {
    autobiography: [
        "My name is Abhishek Rana, a Computer Science student at Graphic Era University, deeply passionate about coding and information technology. From childhood, I've been enthralled by programming languages like Python, Java, PHP, and Swift, specializing in web development with frameworks like Django . Alongside my tech pursuits, I find joy in adventure, cooking, and immersing myself in nature's beauty. Known for my responsible and organized problem-solving approach, I thrive both independently and in team settings, leveraging over three years of programming experience and a strong foundation in advanced mathematics.I eagerly embrace new challenges and projects, fueled by a relentless curiosity to learn and grow in the ever-evolving tech landscape."
    ], // Separated items are paragraphs
    techStack: [
        "PHP",
        "Python",
        "JavaScript",
        "Vue.js",
        "MySQL",
    ],
    photo1Link: "images/IMG_8772 Small.jpeg",
    photo2Link: "images/IMG_8727.jpeg",
    photo3Link: "images/IMG_8559 Large.jpeg"
}

// // --- 🛡️ Experience Section ---
// const experiences = [
//     {
//         position: "Web Dev Intern",
//         company: {
//             name: "WolfTech",
//             link: "https://tools.wolftech.ncsu.edu/support/index.php/WolfTech_Information_Technology"
//         },
//         duration: "Aug 2022 - Present",
//         bulletPoints: [
//             "Resolved issues and developed new tools within several university web applications (email automation, research discovery, educational resources, scheduling tools, and text-generative AI news sharing).",
//             "Achieved 100+ github code contributions as an intern on the team.",
//             "Currently rebuilding and modernizing the university digital sign manager and system."
//         ],
//         hashtags: [
//             "Laravel",
//             "PHP",
//             "MySQL",
//             "JS",
//             "Vue.js",
//             "HTML",
//             "Tailwind"
//         ]
//     },
//     {
//         position: "Math Tutor",
//         company: {
//             name: "Mathnasium",
//             link: "https://www.mathnasium.com"
//         },
//         duration: "Jan 2022 - Aug 2022",
//         bulletPoints: [
//             "Taught math to students elementary through high school covering topics from basic algebra to college-level calculus.",
//             "Directed the trajectory of the student's learning plan and math topic evaluation to facilitate success in their school math class.",
//             "Requested by many students and parents for routine weekly tutoring sessions in a system with a standard random weekly rotation."
//         ],
//         hashtags: [
//             "Calc 1-2",
//             "Algebra 1-3",
//             "Discrete Math",
//             "Statistics"
//         ]
//     }
// ]

// --- 💻 Work Section ---
const works = [
    {
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
                url: "https://abhi07rana.github.io/MULTIPLE-DISEASE-PREDICTION-SYSTEM/"
            }
        ],
        imageLink: "images/Screenshot 2024-03-30 at 12.17.31 PM.png",
        alignLeft: false
    },
    {
        projectName: "Portfolio Website",
        yearCompleted: "2023",
        description: "Developed a personal portfolio website with Python backend using the Django web development framework. Incorporated HTML, CSS, and JavaScript to construct the frontend of the website.",
        techStack: " HTML, CSS, JS",
        links: [
            {
                label: "",
                type: "external",
                url: "https://maximshelepov.com"
            }
        ],
        imageLink: "images/Screenshot 2024-03-30 at 12.33.41 PM.png",
        alignLeft: true
    },
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
            "Currently seeking web and software development positions/internships for summer 2024.",
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