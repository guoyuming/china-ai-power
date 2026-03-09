---
title: "Inside Galbot: China's Top Embodied AI Unicorn and the Unrehearsed Spring Gala Act"
description: "How Galbot became China's top embodied AI unicorn at 20 billion yuan, and why its Spring Gala act was the only unscripted one."
pubDate: 2026-03-09
tags: ["robotics", "companies"]
draft: false
featured: false
heroImage: "/images/galbot-embodied-ai-unicorn.png"
---

Galbot (银河通用), China's leading embodied AI robotics company, recently announced a new 2.5 billion yuan funding round. The investors include the National AI Industry Fund (a wholly-owned subsidiary of the National Big Fund Phase III), Sinopec, CITIC Group's investment arm, Bank of China, SAIC Motor's financial arm, SMSC, E-Town Capital, Future Industry Investment, Kunpeng Fund, Wuxi Venture Capital, and Fujian Capital, with existing shareholders Shenzhen Capital Group and the Shanghai AI Fund making follow-on investments. Over the past year, Galbot has raised a cumulative 5.5 billion yuan, with a post-money valuation exceeding 20 billion yuan — the highest funding total and valuation of any embodied AI unicorn in China.

At the 2026 CCTV Spring Festival Gala, Galbot appeared alongside comedians Shen Teng and Ma Li, becoming a breakout crossover moment between technology and entertainment. As the Gala's designated embodied AI robot, Galbot didn't perform pre-programmed dances. Instead, it autonomously completed a series of challenging, non-standardized tasks: spinning walnuts in its palm, picking up shards of broken glass, folding clothes, and skewering sausages for grilling. None of these operations were pre-programmed — every frame was the result of real-time decision-making by its embodied large model.

Because the segment was filmed backstage in a crowded environment with extremely limited recording windows, Galbot's performance was **the only act in the entire Spring Festival Gala that went without a single rehearsal.** The entire process was completed in one take, putting enormous pressure on both the robot and the technical team's ability to improvise.

The host summed up its advantage in six characters: "Smart brain, good at work." Facing randomly placed objects and changing stage lighting, Galbot demonstrated remarkable generalization capability, with every movement being an unrehearsed, improvised response.

This stunning display of human-like dexterity quickly translated into purchasing power: within minutes of the Gala's conclusion, the same Galbot model — priced at 690,000 yuan — sold out on JD.com, with over 300 units added to carts within 24 hours.

## Behind the Gala: An Unscripted Technical Exam

During the Spring Festival Gala and related behind-the-scenes footage, Galbot showcased multiple physical interaction capabilities: folding clothes, picking up glass shards, retrieving items from shelves, skewering sausages, and — perhaps most impressively — spinning two walnuts in one hand, a feat most humans can't pull off. These operations defy standardization. Every movement Galbot makes is not a precisely pre-set trajectory from a motion control algorithm, but rather a decision made by the model in real time based on sensor feedback.

There's a common misconception that a robot's operational dexterity is simply a matter of expensive, precision hardware — such as dexterous hands equipped with high-precision torque sensors.

But in embodied intelligence, hardware is merely the foundation. What determines the upper limit of a robot's operations and its generalization capability is the algorithmic model behind it. Dexterous hands are ultimately the product of a smart brain.

All on-stage tasks — walnut spinning, glass shard pickup, precision shelf retrieval, clothes folding, and sausage skewering — were executed through real-time, autonomous decision-making by Galbot's proprietary "AstraBrain" (银河星脑), not pre-set programs. Facing randomly arranged real objects, shifting stage lighting, and spontaneous celebrity interactions, the robot demonstrated stable generalization and millisecond-level response speed.

## AstraBrain: The End-to-End Embodied Large Model

Powering Galbot's high-difficulty operations is AstraBrain, Galbot's independently developed end-to-end large model that integrates the "cerebrum" (task planning), "cerebellum" (motor control), and "neural control" (dexterous manipulation) into a single unified architecture.

Take high-density shelf retrieval as an example. AstraBrain achieves precision manipulation generalization through a pipeline of limited demonstrations + large-scale synthetic human-like manipulation data + imitation learning combined with reinforcement learning. Traditional methods require collecting massive volumes of real-world data at enormous cost. Galbot instead generates tens of thousands of synthetic data points in simulated environments, then uses reinforcement learning to explore optimal paths through trial and error, followed by fine-tuning with a small amount of real-robot data to achieve sim-to-real transfer.

The walnut spinning and glass shard tasks push close to the physical limits of robotic perception and force control. Rotating two irregularly-surfaced, unevenly-weighted walnuts in the palm without dropping them requires an extraordinary level of physical "feel." AstraBrain's dexterous hand neurodynamics cerebellum model cracked this challenge.

The research team didn't simply have the robot train through brute repetition in a lab setting. Instead, they first conducted tens of thousands of walnut-spinning trials in simulation, feeding the system virtual walnuts of varying sizes and weights to build a highly adaptable operational foundation.

Then they trained in the real world to correct for discrepancies, since simulation and reality differ (real-world friction, mechanical tolerances, etc.). Engineers had the robot hands interact with various physical objects to accumulate genuine tactile experience. By the time it appeared on camera during the Gala, its brain was performing millisecond-level background fine-tuning, bridging the gap between virtual and real.

The shelf retrieval, clothes folding, and sausage skewering tasks are technically far harder than audiences realize. These operations respectively test AstraBrain's cerebrum-cerebellum coordination for precise grasping in dynamic environments, dexterous generalization for soft objects like clothing, and bimanual coordination for tasks like sausage skewering.

AstraBrain's end-to-end architecture enables the robot's brain to simultaneously process independent command streams for both hands and make real-time adjustments during execution. More importantly, through simulation-based training, the robot understands the essence of manipulation — the grilling tongs aren't an object to be controlled, but an extension of the hand, a medium for completing the task.

## From Academia to Industry

This leap from dancing to doing real work is fundamentally the result of Galbot's sustained investment in the robot "brain" over the past few years. Galbot has released only one wheeled-chassis robot; virtually all remaining resources have been channeled into model R&D, aiming to enhance generalization and versatility so these "silicon-based workers" can take on tasks far more valuable than choreography.

We've spoken with close to 20 robotics company founders, and they all emphasize that dancing and martial arts demonstrations shouldn't be the industry mainstream — building embodied brains that enable robots to perform productive labor is the real goal. Galbot is one of the few companies that has managed to connect both the technology and commercialization pathways.

To train a sufficiently intelligent brain, Galbot charted a distinctive course through the data acquisition bottleneck that has stymied the entire industry.

Most robotics companies in Silicon Valley and China took a path that looks prudent but is actually prohibitively expensive. The industry once favored real-robot teleoperation, led by Tesla and Silicon Valley darling Physical Intelligence (PI). They hired large numbers of employees wearing motion-capture gear to remotely control robots, collecting training data. Google, for instance, previously spent over ten months and tens of millions of dollars to gather just a few hundred thousand data points.

Galbot's founder Wang He doesn't believe in this labor-intensive data collection approach. He did the math: Galbot's internal experiments showed that with only 100,000 grasping data points, the robot's post-training success rate was just 58%. Only when data reached 1 billion points did the success rate climb to 87% — still unacceptable for real-world work scenarios. Relying solely on manual teleoperation to amass data at that scale is a pipe dream.

Galbot now uses a pipeline that prioritizes synthetic simulation data supplemented by real-robot collection — internally called the "Star Forge Data Pyramid." In virtual worlds where physical laws are faithfully reproduced, models automatically generate millions of different lighting conditions, shelf arrangements, and physical collision events to train the robot.

This is a far more viable path in terms of data cost and scale. Synthetic data costs a fraction of human-wage-based collection, and it has no time or space constraints. This is also the main reason Galbot can not only perform dexterous operations but learn new ones in a short timeframe.

## Capital's Verdict: Only Robots That Work Autonomously Have a Future

Dancing and martial arts performances aren't a sustainable business model that capital markets and the industry take seriously. Robots that can replace human labor and pencil out economically are what's truly valuable.

Galbot's Spring Gala role was well-calibrated. While Galbot performed onstage, the company also set up a "comfort lounge" backstage, staffed entirely by robots serving cast and crew. This was the first time in the Gala's 40-plus-year history that robots were allowed to autonomously operate a retail store full-time in the highly secured, high-traffic backstage area. The robot wasn't just a performer — it was a worker.

But Galbot's ambition extends far beyond a single appearance on the national stage. Outside the Gala, the company has been steadily executing real-world deployments. With an absolute lead, it has built the world's first fully robot-operated smart retail stores, with over 100 locations now operational.

After the Spring Festival, Galbot partnered with convenience chain FamilyMart to launch a robot-operated physical store — the first time a traditional retailer has fully handed over in-store operations to a robot.

At the 2025 World Humanoid Robot Games, Galbot won the world championship in pharmaceutical sorting with a score of 170, far ahead of competitors. Dozens of smart healthcare stores built jointly with medical companies are now in regular operation across multiple cities nationwide. In approximately 40-square-meter pharmacies, a single robot independently manages over 5,000 pharmaceutical products, enabling unmanned stocktaking and precision picking.

This system has been running stably for over a year, breaking the world record for autonomous continuous robot operation and solving the pain point of overnight retail requiring three human shifts.

The capital market has voted with real money. Investors value not only Galbot's technical roadmap but its commercialization blueprint. For CATL and Meituan, they are both investors and Galbot's biggest potential scenario demand partners.

In industrial manufacturing and heavy physical labor scenarios, Galbot's penetration runs equally deep. It has partnered with CATL, Zeekr, Bosch, and other automotive leaders, and recently secured an order from precision manufacturer Baida Precision for over 1,000 robots. Its newly released industrial heavy-duty robot, the Galbot S1, boasts a dual-arm payload of 50 kg, filling a gap in heavy physical labor applications.

From the bustling Spring Gala set to the humming factories of CATL and Toyota, from FamilyMart convenience stores to the smart pharmacies that stay lit deep into the night — Galbot has delivered its answer on robotics commercialization.

Two years ago, founder Wang He outlined the path to commercial robotics deployment. Step one: perform a single operation in a single environment. Step two: perform the same operation on different objects across different scenarios within the same industry. Step three: handle increasingly complex tasks, progressing toward true generality. Galbot has completed step two and is now moving into step three.

From the Spring Gala stage to industrial production lines, from smart pharmacies to urban landmarks, Galbot is completing its transformation from technology pioneer to universal productivity provider. With leading capabilities across data, models, talent, products, and industry partnerships, it is accelerating toward becoming a globally competitive unicorn in China's embodied AI space.
