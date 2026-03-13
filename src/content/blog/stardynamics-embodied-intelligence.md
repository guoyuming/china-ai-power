---
title: "StarDynamics' Chen Jianyu: Tsinghua PhD Advisor at 28, Building a Trillion-Yuan Robotics Company"
description: "The founder of StarDynamics on why VLA alone won't cut it, why world models are essential for home robots, and his plan to build China's answer to Figure."
pubDate: 2026-03-13
tags: ["robotics", "companies"]
draft: false
featured: true
heroImage: "/images/stardynamics-embodied-intelligence.png"
---

"Everyone's valuations are climbing rapidly now. For us to become a giant, we'll need to reach a trillion yuan in market capitalization." In November 2025, after StarDynamics completed a 1 billion RMB funding round, founder and CEO Chen Jianyu told us.

Over the following three-plus months, more than twenty companies in the embodied intelligence sector raised over 20 billion RMB in total. StarDynamics completed yet another 1 billion RMB round, co-led by Samsung and Gaocheng Capital, pushing its valuation past 10 billion RMB.

"Fundraising isn't just about money — it's about resources," Chen Jianyu said. As more institutions recognize that embodied intelligence is worth investing in, aggressive fundraising can lock strategic partners into the same camp, expanding competitive advantages.

Chen Jianyu was born in 1992. He entered Tsinghua University at 19, and his senior thesis was on "bipedal robot gait planning." During his PhD at UC Berkeley, he focused on integrating reinforcement learning into robot control, and interned at autonomous driving companies Waymo and Nutonomy along the way.

After graduating in 2020, Chen returned to Tsinghua as an assistant professor at the Institute for Interdisciplinary Information Sciences, with robotics as his primary research direction. At 28 — an age when most PhDs have barely finished their degrees — Chen became a doctoral advisor. In 2023, he founded StarDynamics.

"Professor Chen is quite pragmatic," one investor told us, citing this as a reason for investing. In July 2025, while hunting for new office space, Chen chose a former online education company's offices — "the decoration still looked decent, and we could keep using their desks and chairs, saving some money." Today he commutes by electric scooter, and his apartment is too small for a humanoid robot to move around in.

Yet when it comes to running an embodied intelligence company, Chen has chosen to pursue full-size humanoid robots with dexterous hands and bipedal legs — investing simultaneously in both motion control and embodied intelligence models. On the model side, the team is researching multiple branches including VLA (Vision-Language-Action) and world model integration. "Relying on a single technology limits what you can do." Across the entire industry, only trillion-dollar Tesla, Figure (which has raised nearly $2 billion), and Zhiyuan Robotics (ten funding rounds in two years) are taking this full-stack approach.

Chen Jianyu believes this is the most pragmatic path of all: "Solve the hardest, most broadly applicable part first, and commercial possibilities multiply."

Following two 1 billion RMB funding rounds in November 2025 and March 2026, Chen Jianyu sat down with us. He shared his views on embodied intelligence model architectures, commercialization, and the industry's next critical inflection point.

## Two Rounds Totaling 2 Billion RMB in Three Months — Resources Matter More Than Money

**LatePost: StarDynamics raised 1 billion RMB in each of two rounds, just three months apart. Why the aggressive fundraising pace?**

Chen Jianyu: Fundraising isn't just about money — it's about resources. You can lock excellent strategic partners into your camp through investment, which gives you a stronger competitive position going forward. Take Samsung, our co-lead investor: they were selecting one company each to back in China, the U.S., and South Korea.

**LatePost: Some of your peers say that if you don't raise aggressively now, you may not be able to later — because embodied intelligence valuations have gotten too high.**

Chen Jianyu: Since 2024, people have been wondering whether this sector would crash. But fundraising rounds have only gotten bigger. Looking back, many investors who missed out on NIO, XPeng, and Li Auto regretted it — they thought valuations were too high at the time, but in hindsight, they were perfectly reasonable. Chips and foundation models have followed the same pattern.

Internet-era industries carry the risk of bubbles bursting because if the use case turns out to be illusory, the industry ceases to exist. Hard tech is different — the demand is real, because it represents genuine productivity gains. Expectations about the pace of technological progress may be too high or too low, creating some volatility. But the long-term trajectory is a steady climb upward.

**LatePost: Among your investors in these two rounds, how many were investing in embodied intelligence for the first time?**

Chen Jianyu: Quite a few. Many existing shareholders also wanted to participate, but we had no allocation left. Gaocheng Capital, our other co-lead, was investing for the first time. We even had public market investors asking whether they could put their secondary market money into the company now. (Laughs)

**LatePost: Since the Spring Festival, at least five embodied intelligence companies have announced rounds exceeding 1 billion RMB. What is everyone competing for with all this capital?**

Chen Jianyu: I don't think it's about competing for something — it's about racing. We're racing on technology, racing on commercialization speed. The finish line, the ultimate goal, is commercial success: who can be the first to build a truly high-value, scalable product.

**LatePost: How do you plan to spend all this money?**

Chen Jianyu: The embodied intelligence value chain is long, with plenty of places to spend. Hardware production and manufacturing, model training, data collection — all are major expenses. Later, when commercialization scales, robots are physical products that require distribution channels and sales teams, which also cost money.

Right now, models haven't scaled to massive size and commercialization hasn't fully ramped up, so spending is relatively modest. When it does scale, the burn rate will accelerate — raising now is about preparing for that future.

**LatePost: Has anything substantively changed in the embodied intelligence industry between your two rounds?**

Chen Jianyu: The industry increasingly values getting technology to real-world deployment. Robots performing on the Spring Festival Gala boosted confidence above all — audiences watching robots dance realized just how much progress has been made in a single year.

As things stand, dancing is itself a business model. But the industry is moving fast. Embodied intelligence companies must find their second growth curve, and that curve has to be in industrial and manufacturing scenarios. This year and next are critical — robots must move from dancing to working, genuinely working, not just showcasing demos.

Then there's the model layer. Last year VLA advanced rapidly. People recognized that VLA needs a new evolution — moving from imitation toward deep understanding of the physical world. How to make AI accurately understand the world and improve its generalization and manipulation precision will become a central focus.

**LatePost: We understand CCTV's Spring Festival Gala also approached you. Why didn't you participate?**

Chen Jianyu: If it could generate broad positive attention and boost the company's valuation and commercial revenue enough to earn back the investment, it would be worthwhile. We assessed that consumer-facing scenarios aren't our current commercial priority.

**LatePost: You've done extensive work in motion control and even won a high jump championship at a robot sports competition last year. How technically challenging is the synchronized performance seen on the Gala?**

Chen Jianyu: It's like a triple jump or ballet performance — the movements are all choreographed. Having a group of robots perform in unison isn't technically difficult either — it's similar to a drone light show. But you could also see that small robots and large robots performed very differently. Motion control for large robots is much harder. They're heavy, with greater inertia — like how elephants can't dance.

**LatePost: You ended up appearing on Beijing TV's Spring Festival show instead.**

Chen Jianyu: That was essentially free. We had already trained our robot in sword-dancing, and they invited us — so we went.

## Mainstream VLA Has Limited Ceiling — World Models Are Needed

**LatePost: StarDynamics recently published VLAW and Ctrl-World, both centered on VLA and world model collaboration, with strong results on several benchmarks. The industry consensus is that embodied model architectures haven't converged yet. How did you decide to pursue this direction?**

Chen Jianyu: We've been exploring what the native embodied model architecture should look like — what components need to be integrated. Foundation models started with language, then added vision. Once vision was there, people started exploring how to incorporate Action — that's VLA. We built the world's first complete robot VLA model, even before Physical Intelligence's pi0.

That's the traditional VLA approach: using teleoperation or other methods to collect manipulation data, feeding it to a model that learns through pure imitation without reasoning about the logic behind the actions. After learning a large volume of actions, you get some degree of generalization and intelligence, but data efficiency is very low.

In environments with no prior data, that level of generalization and intelligence isn't sufficient. That's where world models come in. We started working on VLA in 2023 and considered world reasoning from the beginning, but lacked good implementation tools. When Sora came out, we saw it approaching the kind of capability we wanted — accurately predicting how the physical world operates and projecting actions forward through time. We began building world models in 2024 and were probably the first team globally to develop world models specifically for robotics. We found that incorporating world models improved performance by roughly 40% on average compared to pure VLA approaches.

**LatePost: How does adding a world model produce a 40% improvement?**

Chen Jianyu: Two main factors. First, it's an entirely new learning paradigm that helps models learn with greater generalization — building an understanding of the world and its dynamics, developing perception and prediction capabilities.

Traditional VLA models don't care about this. They only know: I see a computer, I should open it. They learn a mapping from seeing objects to executing actions. A world model learns: if I extend my hand this way and press, the computer will probably open.

The second factor is data generation — using the world model as a simulator. Some objects are extremely complex: fluids, water, or deformable objects like tissues. How do you pull a tissue? How does its shape change? How does water flow when poured? Traditional physics engines can't simulate these well.

Currently, the only viable solution to this simulation problem is world models, because they're learned from massive amounts of real-world video. In our papers and demo videos, scooping soup with a spoon or pulling a tissue — our world model predicts the physical dynamics quite accurately.

**LatePost: Some practitioners argue that the urgency for world models in embodied intelligence isn't that high right now.**

Chen Jianyu: If you're looking only at the next year or two, that's a fair point. But if you take a three-to-five-year view, it doesn't hold.

The mainstream approach right now is VLA, and the architecture is relatively converged. We've done extensive VLA work too — it's already deployed in our industrial logistics scenarios. But mainstream VLA has a limited ceiling. Relying solely on this approach constrains what you can accomplish — even with unlimited data.

Its generalization is also limited. When a robot needs to perform a new task at a new location, you still have to collect a lot of data and have engineers tune the system. Margins stay thin.

Our goal is to reach the home use case. That requires raising the ceiling on robot intelligence — but the current VLA path can't support home use.

**LatePost: Based on your research progress, has the path of combining VLA with world models become clear?**

Chen Jianyu: The world model path hasn't converged yet. There are two main approaches for combining VLA with world models, and we're researching both.

One is loose coupling, like VLAW and Ctrl-World. The VLA model and the world model are two separate models. VLA focuses on action output, the world model focuses on predicting the future. During training, both iterate and strengthen each other.

The other is tight coupling, like our previously released VPP (Video Prediction Policy), which fuses both models into one. The training approach is similar, but the model simultaneously outputs both actions and predictions about the future.

The broad direction is modeling the physical world and leveraging that modeling. The specific technical path is still frontier research — we have several different research branches running.

**LatePost: Running many research branches simultaneously — how do you balance investment and returns?**

Chen Jianyu: Each branch actually has a small team, just a few people. Look at Physical Intelligence, founded by my research collaborator Chelsea Finn — their research staff isn't large either, but they maintain very high talent density. They don't do commercialization or manufacturing — just algorithms and models. Even at big tech companies, pure AI algorithm research teams are small. The people capable of this kind of innovation are a minority.

When one of our paths is validated, we'll productize it — scaling up data, building infrastructure, industrializing — and that's when we invest more people.

## Increasing Short-Term Shipments Isn't Hard — What Matters Is Whether They Create Value

**LatePost: In the industry, StarDynamics seems more famous for its dexterous hands than its humanoid robots. The hand was also the first product you released after founding the company. Why such emphasis on hands?**

Chen Jianyu: Because the hand is the core — all work is done through hands. Have you seen the "Cortical Homunculus" image? It depicts a grotesquely proportioned human, sized according to how much brain cortex each body part occupies. The figure has enormous hands — possibly larger than its entire torso.

The hand as an end effector is critically important. It matters for brain development, for commercialization, and for how work actually gets done. We had to tackle it early.

Motion control — walking, balancing — isn't really about intelligence. Look at the homunculus: the feet are tiny, occupying very little of the cortex.

**LatePost: Your focus is full-size humanoid robots with legs, rather than the approach some peers take of building only part of the humanoid form.**

Chen Jianyu: We want to get the flywheel spinning quickly by solving the hardest, most broadly applicable challenge first. Once we reach the technical frontier, commercial possibilities multiply. After building the hardest version — full-size, two-handed, bipedal — we quickly developed a wheeled dual-arm robot that can also generate revenue.

If we hadn't taken this vertically integrated approach, our iteration speed would be slower and we'd be dependent on suppliers' and partners' timelines.

**LatePost: You frequently talk about robots needing to tackle high-value scenarios. How do you define "high value"?**

Chen Jianyu: High market ceiling. Take logistics: sorting, shelving, picking — any single task represents hundreds of billions in costs. Beyond that, there's automotive, retail, and 3C electronics. Many of our recent investors are industrial players who bring not just capital but resources and orders.

**LatePost: But today's humanoid robots aren't durable enough. Tesla's dexterous hand, despite massive R&D investment, has a lifespan of only six weeks. With hardware lasting so short, how do you push robots into logistics?**

Chen Jianyu: You certainly have to address the wear issues and extend lifespan. From another angle, you can also drive costs down. When costs fall low enough, you just replace them when they break — treat them as consumables. Ultimately quality won't be that bad.

Our hand has been through many iterations. It started at 100,000 cycles of use, and now we're at one million. Customers report our dexterous hand lasts four times longer than competitors'. Our target is ten million cycles. The current situation exists only because the supply chain hasn't scaled yet. Within one to two years, it will reach industrial gripper levels. The underlying components are similar to electric grippers — just with more degrees of freedom.

**LatePost: There was a lively debate recently about who has the highest shipment numbers. Everyone seems to be in the thousands. Are you anxious about shipments?**

Chen Jianyu: Not really. Boosting short-term shipments isn't difficult. Current shipments are mostly for performances — low value, and they don't build real moats. We focus on long-term, sustainable, high-value shipments.

We have two business models. One is serving actual end users — primarily factories — where robots work while also collecting data. A company's bandwidth is limited, so we focus deeply on a few industry scenarios and let integrators handle the rest.

The other is selling our platform and supply chain. We have the robot body and data platform as products for sale, and our dexterous hand can be sold separately. This generates some revenue while also helping us develop customers.

**LatePost: You mentioned StarDynamics' longer-term plan is home use. Have you started working on it?**

Chen Jianyu: Our judgment is that now is not the right time for home robots. When we build household robots, the goal is having robots do chores — companionship and entertainment are secondary.

For companionship, do I need a humanoid form? I can put that on my phone and carry it everywhere. That has little to do with embodied intelligence, and it wouldn't help us train our embodied platform and technology stack.

We picked embodied technology and are going to industrial scenarios first — they're more mature — before moving to homes for household chores. We're building some demos now, but mass home deployment is still a ways off.

Let me elaborate. Those robot demos you see in home settings that look impressive? They've usually been tuned for ages in a single home and can only handle that one home's problems. Switch homes and they fail.

Spending that much time to sell one robot — the ROI doesn't work. But in a factory, solving a particular scenario means you can sell 100,000 units, because factories are standardized. The time investment pays off.

When model capability is strong enough to generalize quickly across different scenarios, that's when we'll scale aggressively. That's our logic.

**LatePost: In your roadmap, what problems should a household robot solve?**

Chen Jianyu: Two main categories. One is cleaning — not Roomba-style cleaning, but wiping tables, doing laundry. The robot picks up dirty clothes from the hamper, loads the washing machine, dries them, and puts them away.

The other is kitchen work — helping cook, like fetching ingredients from the fridge. Taken further, it becomes an end-to-end workflow: AI customizes daily menus based on your preferences, plans grocery shopping, the robot buys and organizes groceries in the fridge, takes them out at the right time, operates an automated wok if available, plates the food, and washes the dishes after the meal. It could also go downstairs to collect deliveries, or accompany you to play sports. The imagination for the robot market is vast.

**LatePost: Will we see this in our lifetime?**

Chen Jianyu: Absolutely. Of course, it's still too early — but in three to five years, we'll see clear signs. Even if robot capabilities are still short, other infrastructure can fill the gaps. The robot can connect with the fridge, partner with a particular automated wok, collaborate with a certain washing machine. But robot capabilities today are still some distance from all of this. We're working hard.

We believe the "ChatGPT moment" for robotics is about five years away. A ChatGPT moment is an extremely high bar — it means a robot can arrive in a new environment, receive new instructions, and perform adequately. At that point, you can certainly build excellent home robot products. Doing it earlier means the commercial value may be lower. A Roomba is a home robot, but it can only vacuum and sells for a few hundred dollars, which people accept. If in a couple of years we build a robot that can only wipe tables and wash dishes, priced at 20,000–30,000 RMB, there would be buyers.

**LatePost: Do you have a robot at home?**

Chen Jianyu: My apartment is too small. There's no room.

## "The Most Technically Knowledgeable Founder Among All Embodied Intelligence Companies"

**LatePost: Some in the industry say that StarDynamics' Professor Chen is brilliant at research but easily taken advantage of in other areas.**

Chen Jianyu: That's normal. I come from academia. The more common assessment is that among the founding CEOs of China's embodied intelligence companies, I understand the technology best. I was never a businessman. But commercialization is ultimately judged by results. If I claimed right now that I'm great at commercialization and have natural talent for it, nobody would believe me. Our revenue last year, while not matching the very top company in the sector, was still among the industry leaders — and this year's numbers will be significantly higher.

Hard-tech entrepreneurship is not purely a business model exercise — it always involves both technology and commercial deployment. We identify a need that currently can't be met, then plan a technical roadmap for when it can be. It's a coupled design, and I leverage my strengths within it.

**LatePost: At 28, about the age most PhDs graduate, you became a doctoral advisor at Tsinghua. Do you consider yourself a genius?**

Chen Jianyu: I think everyone has their own genius. What matters is finding what yours is.

**LatePost: What's your genius?**

Chen Jianyu: The ability to learn quickly, develop insights, and architect complex systems. Robotics is exactly such a system — both hardware and software are evolving rapidly at the same time.

**LatePost: Are there companies you study or look up to?**

Chen Jianyu: Every company ultimately develops its own culture and management system. I pay close attention to several types: internet giants like Alibaba, ByteDance, and Tencent; hardware-involved tech companies like Huawei and Xiaomi; and new energy vehicle companies — NIO, XPeng, Li Auto. I focus on studying how their companies developed, how they designed their organizational structures, and how they approached commercialization.

**LatePost: No overseas companies?**

Chen Jianyu: The environments are too different.

**LatePost: If you had to sort embodied intelligence companies into factions, what criteria would you use?**

Chen Jianyu: By the degree of technical investment: the body faction, the brain faction, and the full-stack faction.

Unitree is the body faction — focused on the physical platform. They're also working on bipedal locomotion, and bipedal capability leads to motion control research. They do some brain work too, but their emphasis is on the body and locomotion. Similar companies include DEEP Robotics and ZhongQing Robotics.

Then there are brain-focused companies that also have bodies, but prioritize intelligence. Galaxy General and ZiBianLiang are representative. Most of these primarily use wheeled platforms and don't go deep into reinforcement learning, bipedal locomotion, or core hardware R&D.

Then there's the full-stack faction — that's us. Zhiyuan Robotics is also full-stack, but it's organized as multiple business units or subsidiaries. When people look for our analogues, they tend to say we're most like Figure or Tesla.

**LatePost: Some in the industry call StarDynamics "China's Figure." How do you feel about that?**

Chen Jianyu: I think it's a compliment. But if it implies we copied Figure, I'd push back — some of our model-related ideas were disclosed before theirs. What we're building aligns closely with their path and vision, so it's natural that we think along similar lines.

**LatePost: But Figure is valued at $39 billion (roughly 270 billion RMB).**

Chen Jianyu: We'd like our valuation to go further too. Fundamentally, valuation should reflect a company's true value, but right now there's a lot of noise creating uncertainty. First, there's the China-U.S. gap. On top of that, Figure's founder is a serial, successful entrepreneur. For us, it's about doing our work solidly while also strengthening our positioning on the capital side.

**LatePost: How big does the company need to become to achieve your goal?**

Chen Jianyu: A trillion-yuan giant. Because everyone's valuations are climbing fast — by the time we get there, becoming a giant may well require approaching a trillion.

**LatePost: Do you tell investors and employees about your trillion-yuan ambition?**

Chen Jianyu: I've definitely said it. Some employees believe it, others don't — it depends on their perspective. Investors say, "Let's go, let's make it happen."

**LatePost: How long do you think it will take?**

Chen Jianyu: If we're going to do it, it has to be within ten years.

**LatePost: What's the biggest obstacle?**

Chen Jianyu: It's mainly at the model level — current hardware is already sufficient. On the hardware side, the biggest bottleneck is still the dexterous hand.

**LatePost: Could breakthroughs in these areas come from you?**

Chen Jianyu: We will certainly be part of it.
