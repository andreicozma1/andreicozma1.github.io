import AccessAlarmIcon from "@mui/icons-material/AccessAlarm"
import * as React from "react"
import PageSection from "../../components/page/PageSection"
import InfoCard from "../../components/cards/InfoCard"
import { PageSectionProps } from "../../components/interfaces/PageSectionProps"
import InfoCardAccordion from "../../components/cards/InfoCardAccordion"

const Fall2020: PageSectionProps = {
	title        : "Fall 2020",
	layout       : PageSection,
	itemComponent: InfoCardAccordion,
	md           : 12,
	items        : [
		{
			"title"   : "BlueSky Statistics Workshop",
			"subtitle": "Presenter: Bob Muenchen (Office of Information Technology (OIT))",
			"avatar"  : <AccessAlarmIcon/>,
			"chips"   : [
				"11/06/2020"
			],
			"content" : [
				"Mr. Muenchen is the author of \"BlueSky Statistics User's Guide\" as well as the \"R for SAS and SPSS Users\". In this workshop, he goes over the basics of BlueSky, a free and open source data science package with extensive features for data management, visualization, statistical analysis, and machine learning. His user guides, work, and tutorials are freely avaliable online, which is a great contribution to the open-source community.\n",
				"BlueSky effectively unlocks the power of the R programming language for the analyst community with a rich user interface that allows for the creation and deployment of statistical modules, applications, functions, and much more. There are three main audiences of this program are people who need to analyze data, but who lack the time or inclination to become programmers. The second audience could be people who are proficient in R can also use this program in order to speed their development by having BlueSky automatically generate parts of their projects. Third, BlueSky is great for teams who seek to either\n",
				"One of the biggest strengths of BlueSky is it's transparency and discoverability. While most of the actions can be done through the graphical user interface, there are many ways to tweak statistical models for a fully customizable experience. The point-and-click user interface is easy to learn and use; however, the power resides with it's use of the powerful R language. It allows for easy modification of complex models and algorithms directly to the R code which is readily available for the user to look at and tinker with."
			]
		}, {
			"title"   : "Data Management Best Practices",
			"subtitle": "Presenter: Chris Eaker",
			"avatar"  : <AccessAlarmIcon/>,
			"chips"   : [
				"Asynchronous"
			],
			"content" : [
				"The speaker talks about a variety of topics and examples regarding the importance of using well-designed data management practices and techniques relating to data entry, manipulation, quality control, data storage, as well as backups.\n",
				"Properly using data management practices ensures you are able to stay well organized. Data itself must not only be well-organized, but also must be well documented, preserved, accessible, accurate, and valid. The result of using these practices is high-quality data that is easy to share and re-use in science. It allows for the citation and credibility of the research, overall cost-saving to furthering science research. This not only helps you, the researcher, but also the public by allowing the community to build upon the work of others, performing meta-analyses, and sharing resources and perspectives.\n",
				"Data entry and data manipulation practices to ensure that data is of good quality. Allows for better version control and contributions by different teams or team members collaboratively. Well-established data-management practices help track data for improved transparency, repoducibility, and comparability of results. The goals of data entry are to create data that are valid, to ensure quality, organize to support the use of the data, as well as the ease of archiving. Database vs Spreadsheets pros and cons. Spreadsheets are great for charts, graphs, and calculations. They are flexible about cell content type, such that cells in the same column can contain numbers or text. They lack record integrity, for example you can sort a column independently of all others. They are also really to use, but harder to maintain as compelxity and size of data grows. Relational databases are easy to query to select portions of data. Data fields are typed; for example, only integers are allowed in integer fields. Columns cannot be sorted independently of eachother. Lastly, they infovlve a steeper leanring curve than a spreadsheet.\n",
				"Quality control and assurance practice to reduce errors. First, before data collection, a research should think about defining and enforcing standards that will be used during a project. Consider formats that will be used for the data tables or data entry forms. Also, if abbreviations of codes are used, they should be defined up front. Measurement units should be also specified, and relevant metadata should be identified before data collection. Assign rfesponsibility for quality before collection begins. Use techniques that help eliminate errors during data entry.\n",
				"Design data storage well. Minimize the number of times individual items must be entered repeatedly. Use consistent terminology and atomize data: one cell per piece of information. Document changes to data, avoid duplicate error checking to save time and allow undos if necessary. Always check for missing, impossible, or anomalous values to identify and minimize potential data contamination.\n",
				"Backups deal with data that is copied elsewhere and potentially be overwritten again as the data changed. They are in essance a snapshot of the data at a point in time. This allows the user to restore the file as needed in case of corruption, loss, etc. Backups are usually used for short-term storage but sometimes also for long-term storage, usually performed on a regular schedule. Archiving makes a record of data that is usually in it's final state, and is performed at the end of a project or milestones. There are many reasons to perform backups, including limiting or negating the loss of data. Save time, money, and productivity. Help prepare for disasters, human error, or computer failures. Allows to reproduce results, respond to data requests, and overall limits liability."
			]
		}, {
			"title"   : "Leading with Confidencece",
			"subtitle": "Presenters: Karen D. Boyd and Megan King (Educational Leadership and Policy Studies)",
			"avatar"  : <AccessAlarmIcon/>,
			"chips"   : [
				"11/03/2020"
			],
			"content" : [
				"This seminar is an interactive discussion and learning opportunity that tackles on a topic called the Impostor Syndrome. The impostor syndrome is the self-conscious idea that success is highly driven due to luck, rather than talend and qualifications. The idea was first identified in 1978 by psychologists Pauline Rose Clance and Suzanne Imes. Research on the topic has shown that the effect is experienced by both men and women because of an inability to internalize on their own successes.\n",
				"There are several patterns that have been found in people who experience feelings related to this. For example, perfectionist personality types set extremely high expectations for themselves and for their work. However, a majority have found that even if they meet 99% of their goals successfully, they still feel like failures. In this case, small mistakes or imperfections in their work will cause a trigger which makes them question their own competence.\n",
				"Second, certain people feel the need to know all extents of information before starting a major project and will constantly look for new trainints in order to improve their skills or proficiency in a topic. In this case, people may exhibit behavior that internalizes their feelings, such as not applying for a job if they feel like they don't meet all the criteria. Another example which I feel like is very relatable for lots of students is avoiding or being hesitant to ask questions regarding their concerns or speaking up in a work or team environment due to the feeling of sounding inexperienced or foolish.\n",
				"Third, people who tend to excel in a variety of topics, the \"natural genius\", may feel like an impostor when they have to struggle or work unexpectedly hard to accomplish their goal(s). In this specific case, it may exhibit the feeling of not being good enough. Certain other behaviors that can be seen are people who feel like they need to accomplish a task on their own, avoiding to ask for help due to feeling that's a sign of weakness or fraud. Another case can be with people that constantly push themselves to work harder than everyone else for the sole purpose of proving that they're not impostors. They may experience heavy amounts of stress when they feel like they're not accomplishing something.\n",
				"The underlying causes of these feelings were also discussed, and the truth is that there may not be a single answer to the question. Certain experts believe that it may have to do with specific personality traits, such as anxiety or neuroticism. However, others focus on more family-related or behavioral causes. Perhaps childhood memories, such as achieving a specific set of goals in school or that grades were never good enough for parents may be an underlying cause for certain people, for example. There are also a multitude of external factors that can influence such behavior, such as the environment people live in. For example, levels of confidence can differ widely depending on the environment you're surrounding yourself with, such as being around people who look, sound, or behave like you.\n",
				"There are various steps that can help deal with the impostor syndrome, and their effectiveness definitely depends upon many specific factors and circumstances. For example, try to separate feelings from fact. Just because you may feel stupid, does not mean you really are. It's also important to normalize and recognize that self-doubt might be a normal response to being a beginner, instead of taking self-doubt as a sign of ineptness. When inevitable mistakes happen, accentuate the positive outcomes and forgive yourself when the inevitable happens. Keep in mind and recognize that you have just as much right as the next person to be wrong, have a day off, or simply ask for help. Visualize your success, develop a new script in your head, as well as a new response to failure and mistake-making. Lastly, reward yourself as a way to try to break the repeating cycle of seeking and dismissing validation for yourself."
			]
		}
	]
}

export default Fall2020

