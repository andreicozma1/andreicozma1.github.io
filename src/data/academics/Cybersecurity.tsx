import AccessAlarmIcon from "@mui/icons-material/AccessAlarm"
import * as React from "react"
import { PageSectionProps } from "../../components/interfaces/PageSectionProps"

// Use the types of the InfoCardData interface
const Cybersecurity: PageSectionProps = {
	title  : "Cybersecurity",
	variant: "grid6",
	items  : [
		{
			"title"   : "COSC 466 - Software Security",
			"subtitle": `An in-depth introduction to software security. The focus is on identifying vulnerabilities in software, 
						exploiting vulnerabilities in software, and software development best practices for avoiding vulnerabilities
						 during the design, implementation, testing, and deployment of software.`,
			"chips"   : {
				"contentChips": [
					"Threat Modeling", "Security Architecture", "Security Testing", "Security Analysis", "X86 Assembly",
					"C/C++", "Python", "JavaScript"
				]
			},
			"avatar"  : <AccessAlarmIcon/>
		}, {
			"title"   : "ECE 462 - Cyber-Physical System Security",
			"subtitle": `Introduction to security challenges and techniques at both the physical layer and the cyber layer of important 
			cyber-physical systems.`,
			"chips"   : {
				"contentChips": [
					"Security Architecture, Testing, and Analysis", "Transportation Systems", "Avionics",
					"Industrial Automation", "Vehicular Systems", "Medical Systems", "Power Systems", "SCADA",
					"Nuclear Plants"
				]
			},

			"avatar": <AccessAlarmIcon/>
		}, {
			"title"   : "ECE 469 - Mobile/Embedded Systems Security",
			"subtitle": `Introduction to vulnerabilities and threat vectors associated with mobile and embedded devices, 
			such as smartphones, wearable devices, and IoT devices.`,
			"chips"   : {
				"contentChips": [
					"Mobile Operating Systems", "Mobile Location and Activity Privacy", "User/Device Authentication",
					"IoT Wireless Security", "Side-Channel Attacks",
					"Security and Privacy Breaches on Smart Home" + " Devices", "Python"
				]
			},

			"avatar": <AccessAlarmIcon/>
		}, {
			"title"   : "COSC 366 - Introduction to Cybersecurity",
			"subtitle": `A broad introduction to cybersecurity concepts and practices, and the current challenges in cybersecurity.`,
			"avatar"  : <AccessAlarmIcon/>,
			"chips"   : {
				"contentChips": [
					"Security Goals", "Threat Modeling", "Software Security", "Operating System Security",
					"Cryptography", "Network Security", "Human Factors", "Authentication", "Access control", "C/C++",
					"Python", "JavaScript", "X86 Assembly"
				]
			}

		}
	]
}

export default Cybersecurity

