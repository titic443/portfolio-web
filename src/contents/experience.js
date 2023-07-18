import { faGithub } from '@fortawesome/free-brands-svg-icons'
import ais from '../assets/ais-cloud.jpeg'
import mfec from '../assets/mfec.jpg'
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
        // link: "https://github.com/titic443",
        meterial: [],
        descrition: [
            "Operation and Application support",
            "Implement new transfer file flow on GoAnywhere product(MFT).",
            "Analyze problem about application on CA Workload"
        ],
        skill: [
            ["Linux Server","Window Server", "CA Workload"]
        ],
        picture: amaris
    },
    {
        date: "2019-2020",
        title: "Network Engineer",
        // link: "https://github.com/titic443",
        meterial: [],
        descrition: [
            "Monitoring and Troubleshoot network",
            "Working on multi-vendor technologies eg: Palo Alto, Fortinet, Cisco, Huawei",
        ],
        skill: [
            ["Routing & Switching","Firewall", "VLAN"]
        ],
        picture: mfec
    }
]