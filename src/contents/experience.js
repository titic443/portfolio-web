import { faGithub } from '@fortawesome/free-brands-svg-icons'
import ais from '../assets/ais-cloud.jpeg'
import amaris from '../assets/amaris.jpeg'

export const data = [
    {
        date: "2022-2023",
        title: "Backend Developer",
        link: "https://github.com/titic443",
        meterial: [
            {
                icon: faGithub,
                link: "https://github.com/titic443"
            }
        ],
        descrition: [
            "Develop back-end APIs in Node.js using JavaScript (ES6) and Nest.js.",
            "Knowledgeable about Docker and containers technology.",
            "Ability to work with NoSQL Databases (MongoDB, Redis)."
        ],
        skill: [
            ["JavaScript","Typescript"]
        ],
        picture: ais
    },
    {
        date: "2021-2022",
        title: "Operation Support",
        link: "https://github.com/titic443",
        meterial: [],
        descrition: [
            "Develop back-end APIs in Node.js using JavaScript (ES6) and Nest.js.",
            "Knowledgeable about Docker and containers technology.",
            "Ability to work with NoSQL Databases (MongoDB, Redis)."
        ],
        skill: [
            ["Linux Server","Window Server", "CA Workload"]
        ],
        picture: amaris
    }
]