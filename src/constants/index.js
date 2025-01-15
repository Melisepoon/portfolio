export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Experience',
        href: '#experience',
    },
    {
        id: 4,
        name: 'Projects',
        href: '#projects',
    },
    {
        id: 5,
        name: 'Contact',
        href: '#contact',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Emily Johnson',
        position: 'Marketing Director at GreenLeaf',
        img: 'assets/review1.png',
        review:
            'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
        id: 2,
        name: 'Mark Rogers',
        position: 'Founder of TechGear Shop',
        img: 'assets/review2.png',
        review:
            'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
        id: 3,
        name: 'John Dohsas',
        position: 'Project Manager at UrbanTech ',
        img: 'assets/review3.png',
        review:
            'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
        id: 4,
        name: 'Ether Smith',
        position: 'CEO of BrightStar Enterprises',
        img: 'assets/review4.png',
        review:
            'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
];

export const myProjects = [
    {
        title: 'ChainTalk - A Decentralised Messaging Application',
        desc: 'ChainTalk is an innovative Ethereum-based decentralized communication application that redefines how people connect and interact. With the aid of blockchain technology, users can send and receive messages securely.' ,
        subdesc:
            'Built from the ground up, ChainTalk is powered by smart contracts written in Solidity and InterPlanetary File System (IPFS) for enhanced storage capabilities.',
        awards:
            ' It also features a user-friendly interface designed using ReactJS, EthersJS and advanced blockchain technologies, including the ERC-735 standard and SoulBound Tokens (SBT).',

        href: 'https://github.com/Melisepoon/ChainTalk',
        href1: 'https://youtu.be/db6JeYC1XHY',
        texture: '/textures/project/ChainTalkPortfolio2.mp4',
        logo: '/assets/CT.svg',
        logoStyle: {
            backgroundColor: '#d9d9d9',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'Solidity',
                path: '/assets/solidity.svg'
            },
            {
                id: 2,
                name: 'Ethereum',
                path: 'assets/ethereum-2.png',
            },
            {
                id: 3,
                name: 'HardHat',
                path: '/assets/hardhat.svg',
            },
            {
                id: 4,
                name: 'React.js',
                path: '/assets/react.svg',
            },
        ],
    },
    {
        title: 'deStigma - AI Powered Application',
        desc: 'deStigma is an AI-powered application that aims to revolutionise the way Autism Spectrum Disorder (ASD) is diagnosed.',
        subdesc:
            'deStigma aim to provide a data-driven solution to assist psychiatrists in making accurate diagnoses and follow-up treatment.\n' +
            'With its symptoms-focused CV and NLP model, built on the Azure platform, the AI powered application analyzes facial expressions and speech patterns to accurately flag Autism Spectrum Disorder (ASD) symptoms. ',
        awards:'Awards: Microsoft Imagine Cup 2023 Epic Challenge Asia Winner & World Finalist (Top 8)',
        href: 'https://github.com/Melisepoon/deStigma',
        href1:'https://youtu.be/LK5HpeaEbeQ',
        texture: '/textures/project/deStigma.mp4',
        logo: '/assets/destigma.jpg',
        logoStyle: {
            backgroundColor: 'white',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'Microsoft Azure',
                path: 'assets/azure.png',
            },
            {
                id: 3,
                name: 'OpenCV',
                path: '/assets/openCV.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/imagineCup.png',
            },
        ],
    },
    {
        title: 'Blockchain Technology Project - Dutch Auction',
        desc: 'Developed a blockchain-based decentralized trading platform for bidding on ERC20 tokens using the Dutch Auction principle.',
        subdesc:
            'Deployed smart contracts on Ethereum testnets and built a simple front-end interface using ReactJS. ',
        awards:
            'With a focus on security, we conducted security testing by simulating attacks like Reentrancy, Front-running, and Eclipse Attacks, ' +
            'and explored solutions such as OpenZeppelin’s ReentrancyGuard library, Submarine library, and smart detection models to mitigate against these vulnerabilities.' +
            '\n\n',
        href: 'https://github.com/S-Samiksha/CZ4153_DutchAuction',
        href1:'https://youtu.be/X0FkcZmnmsc',
        texture: '/textures/project/DutchAuction.mp4',
        logo: '/assets/DA.svg',
        logoStyle: {
            backgroundColor: '#004aad',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'Solidity',
                path: '/assets/solidity.svg',
            },
            {
                id: 2,
                name: 'Ethereum',
                path: 'assets/ethereum-2.png',
            },
            {
                id: 3,
                name: 'HardHat',
                path: '/assets/hardhat.svg',
            },
            {
                id: 4,
                name: 'ReactJS',
                path: '/assets/react.svg',
            },
        ],
    },
    {
        title: 'Vickrey Auction Cryptography Project',
        desc: 'Developed an RSA public-key cryptosystem and hashing algorithms (SHA-256, MD5, KECCAK) using Python for a simplified Vickrey Auction.' ,
        subdesc:
            'Conducted in-depth analysis of security vulnerabilities by simulating advanced cryptographic attacks, including collision attacks, RSA factoring, and continued fractions attacks. ',
        awards:
            'Detailed logging of attack results provided insights into optimal configurations, determining the minimum hash size and RSA key size required to ensure maximum security and resilience against potential threats.'+
            '\n\n',
        href: 'https://github.com/Melisepoon/CZ4010_Applied_Cryptography',
        texture: '/textures/project/CryptoProject.mp4',
        logo: '/assets/cryptoL.svg',
        logoStyle: {
            backgroundColor: '#0E1F38',
            border: '0.2px solid #0E2D58',
            boxShadow: '0px 0px 60px 0px #2F67B64D',
        },
        spotlight: '/assets/spotlight4.png',
        tags: [
            {
                id: 1,
                name: 'Python',
                path: '/assets/python.svg',
            },
        ],
    },
    {
        title: 'QuitNow - Software Development Mobile Application',
        desc: 'QuitNow is designed to simplify the quitting journey for smokers and support them in maintaining a smoke-free lifestyle.',
        subdesc:
            'The app\'s UI/UX was crafted using Figma, while a functional mobile application was developed with Flutter for Android and iOS platforms, integrated with Google Firebase for scalable cloud storage.',
        awards:
        'Comprehensive testing, including unit, integration, and system testing, were conducted to ensured a robust prototype. This project was developed collaboratively by a team of five members using Agile methodology.'+
            '\n\n',
        href: 'https://github.com/S-Samiksha/QuitNowApp',
        texture: '/textures/project/QuitNow.mp4',
        logo: '/assets/QuitNow.png',
        logoStyle: {
            backgroundColor: '#1C1A43',
            border: '0.2px solid #252262',
            boxShadow: '0px 0px 60px 0px #635BFF4D',
        },
        spotlight: '/assets/spotlight5.png',
        tags: [
            {
                id: 1,
                name: 'Figma',
                path: '/assets/figma.svg',
            },
            {
                id: 2,
                name: 'Flutter',
                path: 'assets/flutter.png',
            },
            {
                id: 3,
                name: 'Firebase',
                path: '/assets/firebase.webp',
            },
        ],
    },
    {
        title: 'SwipeMyRoomie - Roommate Finder Website',
        desc: 'An interactive website designed to help students and young adults connect and find compatible roommates. The platform features a creative swiping functionality for an engaging user experience. ' ,
        subdesc:
            'Comprehensive documentation, including use case diagrams, sequence diagrams, class diagrams, dialog maps, system features, and requirements, was created for both users and developers.',
        awards:
            'The project followed the software development lifecycle (SDLC) process, ensuring a clear and efficient development process. This project and was developed collaboratively as a team.'+
            '\n\n',
        href: 'https://github.com/S-Samiksha/CX2006_Coding',
        texture: '/textures/project/Swipe.mp4',
        logo: '/assets/house.svg',
        logoStyle: {
            backgroundColor: '#d9d9d9',
            border: '0.2px solid #0E2D58',
            boxShadow: '0px 0px 60px 0px #2F67B64D',
        },
        spotlight: '/assets/spotlight4.png',
        tags: [
            {
                id: 1,
                name: 'JavaScript',
                path: '/assets/js.png',
            },
            {
                id: 2,
                name: 'HTML',
                path: 'assets/html.webp',
            },
            {
                id:3,
                name: 'CSS',
                path: '/assets/css.svg',
            },
            {
                id:4,
                name: 'mySQL',
                path: '/assets/mySQL.png',
            }
        ],
    },
    // {
    //     title: 'SwipeMyRoomie - Roommate Finder Website',
    //     desc: 'An interactive website designed to help students and young adults connect and find compatible roommates. The platform features a creative swiping functionality for an engaging user experience. ',
    //     subdesc:
    //         'Comprehensive documentation, including use case diagrams, sequence diagrams, class diagrams, dialog maps, system features, and requirements, was created for both users and developers.',
    //     awards:'The project followed the software development lifecycle (SDLC) process, ensuring a clear and efficient development process. This project and was developed collaboratively as a team.'+
    //         '\n\n',
    //     href: 'https://github.com/S-Samiksha/CX2006_Coding',
    //     texture: '/textures/project/QuitNow.mp4',
    //     logo: '/assets/QuitNow.png',
    //     logoStyle: {
    //         backgroundColor: '#1C1A43',
    //         border: '0.2px solid #252262',
    //         boxShadow: '0px 0px 60px 0px #635BFF4D',
    //     },
    //     spotlight: '/assets/spotlight1.png',
    //     tags: [
    //         {
    //             id: 1,
    //             name: 'JavaScript',
    //             path: '/assets/js.png',
    //         },
    //         {
    //             id: 2,
    //             name: 'HTML',
    //             path: 'assets/html.webp',
    //         },
    //         {
    //             id: 3,
    //             name: 'CSS',
    //             path: '/assets/css.svg',
    //         },
    //         {
    //             id: 4,
    //             name: 'MySQL',
    //             path: '/assets/mySQL.png',
    //         },
    //     ],
    // },

];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.6, -4.5, 0] : [0.5, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [7, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 2, 0] : isTablet ? [5, 2.5, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 5, 0] : isTablet ? [-15, 4.5, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -10, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'Bachelor of Computing in Computer Science, Honors (Distinction)' ,
        pos: 'Nanyang Technological University',
        duration: '2020 - 2024',
        title: "Elective Focus: \n" +
            " •\tCyber Security \n" +
            "•\tData Science & Analytics",
        icon: '/assets/ntu.png',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'Bachelor of Social Sciences in Economics, Honors (Distinction)',
        pos: 'Nanyang Technological University',
        duration: '2020 - 2024',
        title: "Relevant Modules: \n" +
        "Microeconomics, Macroeconomics, Econometrics, Behavioural Economics, Game Theory, Public Economics, International Finance, Financial Accounting, Corporate Finance",
        icon: '/assets/ntu.png',
        animation: 'clapping',
    },
    {
        id: 3,
        name: 'Housing & Development Board (HDB)',
        pos: 'Project Intern',
        duration: '2023',
        title: "•\tDeveloped a module using AWS Lambda, EventBridge and Python to increase efficiency in hosting and automating web processes \n"+
        "•	Analyse and address the vulnerabilities identified in deployed website using web-crawling and Search Engine Optimisation (SEO) tools.",
        icon: '/assets/hdb.png',
        animation: 'salute',
    },
];