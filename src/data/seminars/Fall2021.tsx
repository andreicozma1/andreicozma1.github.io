import WorkspacesOutlinedIcon from "@mui/icons-material/WorkspacesOutlined"
import * as React from "react"
import { PageSectionProps } from "../../components/interfaces/PageSectionProps"

const Fall2021: PageSectionProps = {
	title: "Fall 2021",
	items: [
		{
			"title"   : "Cultivating a Growth Mindset",
			"subtitle": "Presenter: Gemma Leigh Roberts",
			"avatar"  : <WorkspacesOutlinedIcon/>,
			"chips"   : {
				"date": [ "12/3/2021" ]
			},
			"content" : [
				"In this LinkedIn Learning Workshop, Gemma Roberts demonstrates how to cultivate a growth mindset, distinguish between a fixed and growth mindset, and challenge yourself in your daily life to achieve your goals. People who have a growth mindset believe that their talent and abilities can improve. This mindset is the polar opposite of a fixed mindset, in which people believe that talent and ability are inborn and unchangeable. The growth mindset is a helpful way of thinking about your own life and achieving your objectives. Failure is viewed as a learning opportunity rather than a setback. You'll be more likely to take on challenges, try new things, and work hard to achieve your goals if you have a growth mindset. You must remind yourself that you can change and grow, even though it will take some time. You can commit to developing a growth mindset and then take small steps forward, considering what you are good at, what you are not good at, and what you can improve on. If you can then concentrate on these things and try to improve them, you will discover that you have more potential to grow. The more you push yourself, the more you'll realize your full potential, and the more you allow yourself to improve, the more you'll believe you can. This will not happen overnight, and it is unavoidable that you will experience failure or a setback at some point. It's possible that you won't succeed at something you're trying to do or believe you're good at. For one, acknowledge that everyone fails at some point and just give it another shot. It is important to view failure as another step towards a better self and achieving success and future improvement. Overall, if you want to develop a growth mindset and become more successful, you must keep trying, work hard, and push yourself to do better, even if your first attempts fails."
			]
		}, {
			"title"   : "Probability and Stochastic Processes Seminar",
			"subtitle": "Presenter: Dr. Federico Sau (IST Austria)",
			"avatar"  : <WorkspacesOutlinedIcon/>,
			"chips"   : {
				"date": [ "11/16/2021" ]
			},

			"content": [
				"David Aldous introduced the Averaging process as a Markovian mass redistribution model on a graph in a series of lectures and articles published around 2011-2012. The Averaging process is roughly described such that for each vertex is initially assigned a real-valued mass, and at exponential times pairs of neighboring vertices split their mass equally among them. The purpose of this session is to give some recent results on the mixing of a generalization of the Averaging process. Specifically, the process occurs on an increasing sequence of graphs that are supposed to be \"finite-dimensional,\" in the sense that a random walk on those geometries is consistent with the existence and equality of a family of Nash inequalities. In the field of mathematical probabilities known as interacting particle systems (IPS), models such as the voter model, contact process, exclusion process, and Glauber dynamics for the Ising model, all on an infinite d-dimensional lattice, are frequently exemplified, all under the continuing influence of Liggett. A significant motivation for the original development of the field was an as rigorous study of phase transitions in the discipline of statistical physics, which was a significant motivation for the original development of the field. Since the beginning of mathematics, models with similar mathematical structures have been employed as toy models in a variety of domains, most notably in social dynamics, where they have been used to mimic the propagation of attitudes, actions, or information between individuals in a community. For connections between individuals, the closest neighbor lattice model, which is commonly used, is not conceivable in this situation. In situations when there are a limited number of individuals, the finite-time behavior is frequently more relevant than the time-asymptotics behavior. As a result, the context is akin to the study of mixing times for finite Markov chains in a loose sense. The authors' study yields a comprehensive picture of the total variation mixing in a discrete particle dual of the Averaging process, which exhibits, in particular, a cutoff phenomenon in the low-density regime, as a result of their work. They took advantage of the duality of the two processes in order to demonstrate that the dual satisfies a variant of Aldous' spectral gap identity, which was previously unknown. Regardless of the amount of particles in the process, the time required for relaxation is constant."
			]
		}, {
			"title"   : "Energy & Environment Forum with Dr. Megan Donahue, Ecologist from Hawaii",
			"subtitle": "Presenter: Dr. Megan Donahue (Hawaii Institute of Marine Biology)",
			"avatar"  : <WorkspacesOutlinedIcon/>,
			"chips"   : {
				"date": [ "11/16/2021" ]
			},
			"content" : [
				"Dr. Megan Donahue, co-director of the marine biology program at the Hawaii Institute of Marine Biology, discusses two initiatives that are connected to coral reef management. The first project's goal is to better understand the influence of groundwater on shore reefs. The second study is concerned with coral disease predictions in the tropical Pacific. Submarine groundwater discharge (SGD) occurs when fresh groundwater seeps onto the reef. The tides have a significant impact on this process. Water is pushed in and out by the pressure exerted by the receding water. She goes on to explain that they are able to determine how much water is drawn from the aquifer based on the amounts of radon that naturally occur in the water. In other words, they are able to differentiate between surface water and ground water based on the radon signal, which is inversely proportional to the ground level. Another characteristic is that groundwater has a low salinity and a high concentration of nutrients. These nutrients are critical for the health of the reefs, and scientists believe that increasing the amount of nutrients available will boost the production of coral reefs. Overall, this study will help to better understand the relationship between groundwater and corals. In order to predict future outbreaks of disease, scientists need to understand the distribution of coral disease in the Pacific. Dr. Donahue explains that the incidence of disease on coral reefs has increased over the past five years. They have discovered that certain coral diseases are present at low levels throughout the Pacific, but then massive outbreaks of disease occur as well as the multitude of factors and parameters that may be at play. They are now trying to figure out what conditions are necessary for these outbreaks to occur. She goes on to say that the spatial and temporal distribution of these outbreaks are difficult to predict, but they are hoping to develop models that are more sophisticated, so they can predict the onset of outbreaks in the Pacific."
			]
		}
	]
}

export default Fall2021

