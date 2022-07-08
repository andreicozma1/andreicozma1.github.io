import AccessAlarmIcon from "@mui/icons-material/AccessAlarm"
import * as React from "react"
import SectionCardList, { CardListParams } from "../../components/SectionCardList"
import InfoCard from "../../components/InfoCard"

const Spring2021: CardListParams = {
	title: "Spring 2021", layout: SectionCardList, itemComponent: InfoCard, md: 12, items: [
		{
			"title": "DNA Topology and Transcription Regulation",
			"subtitle": "Presenter: Dr. Laura Finzi, Emory University, Physics Department",
			"avatar": <AccessAlarmIcon/>,
			"chips": [
				"Wed, March 31 2021"
			],
			"content": [
				"The speaker talks about the topology of DNA as it relates to its transcription and gene. Topology is the study of the anatomical connectivity of a geometric space. " + "The study of topology is useful for understanding the physical limitations of cells; it provides insight into the relationship between gene expression and anatomy; " + "and it can aid in the successful design of human-made materials. The idea behind further research started with a paper on transcription regulation of CRISPR (clustered regularly interspaced short palindromic repeats) loci. " + "The paper shows that the transcription is regulated by the topology of the DNA. The speaker talks about the importance of topology here, and how it can be leveraged to better understand transcription. " + "The DNA double helix has two basic topologies: right handed or left handed. Although the DNA double helix was discovered in 1953 by James Watson and Francis Crick, " + "it wasn't until the 1970s that scientists began to identify distinct right-handed and left-handed structures. " + "Right-handed DNA is more abundant and more stable than its left-handed counterpart. Right-handed DNA forms a right-handed (positive) supercoil, " + "and the direction of the rotation is such that each successive turn of the helix winds on in the same direction as the preceding turn. " + "This positive supercoil is formed when the phosphate backbone is pointing toward the right. The direction of the helix is along the axis that contains the sugars. " + "Since the sugar moieties point to the right, so do the backbone carbons and the attached bases. In contrast, left-handed DNA forms a left-handed (negative) supercoil. " + "Here, the direction of the rotation is such that the successive turns of the helix wind on in the same direction as the preceding turn. " + "This negative supercoil is formed when the phosphate backbone points toward the left."
			]
		}, {
			"title": "In-space Manufacturing",
			"subtitle": "Presenter: Tracie Prater of NASA",
			"avatar": <AccessAlarmIcon/>,
			"chips": [
				"Tue, March 2nd 2021"
			],
			"content": [
				"The speaker discusses a variety of topics and examples regarding the on-demand manufacturing of metal components, electronics, as well as recycling and reuse. " + "\"NASA is committed to 'faster, better, cheaper,' which includes the use of rapid fabrication processes to enable new and innovative ways to create products and reduce the time it takes to go from idea to launch. " + "This presentation will describe NASA's ability to provide on-demand manufacturing of metal components and rapid prototyping for metals and plastics. " + "It will also cover how NASA is using rapid-prototyping methods to create reusable and recyclable parts, such as food trays and water bottles, as well as reducing waste.\" " + "The speaker focuses on the importance of recycling and reusing wherever possible, as well as the implications of new manufacturing technologies that are accelerating social and technological change. " + "Fabrication methods such as 3D printing allow for the creation of highly customized and complex structures, and are essential tools for modern manufacturing processes. " + "Important questions to consider are how is the technology changing our infrastructure and industrial design? How can the technology be used to more effectively create optimal and sustainable products, " + "and how can it be used to maximize societal benefit? The speaker focuses on practical implications of innovative technology and how it is changing the way we design products and the way we manufacture them. " + "No longer are we confined to the limitations of traditional manufacturing methods and creation of products, we can create the product we need for the application and the application for the product with on-demand 3D printing."
			]
		}, {
			"title": "CHP Overview - All Cohorts",
			"subtitle": "Presenter: Rebekah Page",
			"avatar": <AccessAlarmIcon/>,
			"chips": [
				"Thu, January 21 2021"
			],
			"content": [
				"The mission of Honors & Scholars is to enrich each scholar’s experience by offering unique opportunities that support our core values of intellectual curiosity, " + "critical awareness, social responsibility, and personal integrity. In collaboration with campus, community, and global partners, CHP combines carefully chosen honors coursework " + "and specialized programming with high-impact practices such as living learning communities, study abroad, research, internships, and service to prepare scholars to become lifelong learners " + "and leaders in their respective communities. Being an honors student means more than taking challenging classes and performing well; it means striving for excellence in character and professionalism," + " in and out of the classroom. Furthermore, it means being a personal and socially responsible leader in the campus community and beyond. The Honors and Scholars Programs " + "offer a wide variety of engagement opportunities to get more involved and engaged on- and off-campus. Academically, all honors students are expected to maintain a cumulative 3.5" + " Chancellor’s Honors grade point average (GPA) to remain in good standing. In addition to the academic and course requirements, all Honors & Scholars students will be expected to " + "complete co curricular requirements including those specific to their program. Three honors seminar reflections per semester are required to be posted on the personal portfolio webpage. " + "The Honors ePortfolio is updated with seminars once per semester. The e-portfolio is a “living” document: it will change and grow as you accumulate experiences such as conducting research, " + "participating on a study abroad, completing an internship, compiling your thesis, or reflecting on student organizations, athletics, or travel."
			]
		}
	]
}

export default Spring2021

