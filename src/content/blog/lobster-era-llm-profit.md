---
title: "The Lobster Era: LLM Companies Finally See Profit"
description: "OpenClaw's viral agent framework drives explosive token consumption, handing LLM companies an unexpected revenue lifeline."
pubDate: 2026-03-16
tags: ["agents", "companies"]
draft: false
featured: false
heroImage: "/images/lobster-era-llm-profit.png"
---

On March 10, MiniMax's Hong Kong-listed shares closed up 22%, capping a two-day rally of 51%. The stock breached HKD 1,000, pushing its market capitalization past that of Baidu for the first time.

Since its Hong Kong listing earlier this year, MiniMax's share price has been on a tear, at one point surging more than 600% above its IPO price.

In 2025, MiniMax posted full-year revenue of roughly 540 million yuan — up 158.9% year over year, but modest in absolute terms. The market's exuberance has a single source: the globally viral "lobster" — OpenClaw. ("Lobster" is the Chinese internet's affectionate nickname for OpenClaw agents, a play on the "claw" in the name.)

Last Saturday, OpenClaw founder Peter Steinberger retweeted the PinchBench leaderboard, instantly redirecting attention from OpenClaw itself to the model providers powering it.

PinchBench is a live benchmark that evaluates how well models perform within the OpenClaw framework, ranking them across three dimensions: success rate, response speed, and inference cost. MiniMax's MiniMax-M2.1 tied with Gemini 3 for the top spot on the success-rate leaderboard — the immediate catalyst for MiniMax's two-day surge.

Before that, MiniMax had launched MaxClaw, a managed version of OpenClaw running on MiniMax's own infrastructure. Zhipu, the other half of Hong Kong's "twin stars of LLM stocks," responded on March 10 with AutoClaw, its own OpenClaw-adjacent product, sending its shares up more than 20% intraday.

Shortly after, China's Ministry of Industry and Information Technology issued a security risk advisory on OpenClaw, triggering a pullback for both MiniMax and Zhipu. But market enthusiasm remained intact and institutional support held firm: Morgan Stanley reiterated its "overweight" rating on MiniMax, while Haitong International initiated coverage of both MiniMax and Zhipu with "outperform" ratings.

Clearly, OpenClaw has given investors yet another reason to bet on the AI faith.

## A New Gold Mine

OpenClaw is a standardized framework for building AI agents — think of it as an open "agent assembly workshop."

Developers write code for specific functions — "search the web," "summarize a document," and so on — then package them as "skills" to upload and share. Users pick the skills they need, configure a Docker environment, choose which large language model to plug in, and spin up a versatile AI agent on their own machine.

With a single prompt, the agent can autonomously complete long-running tasks like booking flights. You can even tell your home computer to order dinner for you while you're still on the commute home. It is, in essence, a butler and personal assistant on call around the clock.

But butlers expect a salary, and raising a "lobster" is far from free. The main expense is token consumption.

A lobster's fully automated operations rely on a large language model. Users can either download a model to run locally or connect via API to a cloud-hosted model such as Gemini or MiniMax-M2.1. However many tasks the lobster completes, the user pays for every token consumed along the way.

This has handed "the MiniMaxes of the world" a gold mine — and, crucially, an answer to their most pressing problem: making money.

The difficulty of monetizing large language models has been a cloud hanging over Wall Street.

On one side, tech giants ramp up capital expenditure year after year and Nvidia's GPU order books overflow. On the other, application-layer revenues stubbornly refuse to keep pace. Institutions keep investing with eyes half shut, grumbling all the way to the wire transfer.

Sequoia Capital partner David Cahn escalated from "AI's $200 Billion Question" in 2023 [1] to "AI's $600 Billion Question" in 2024 [2]. Bain & Company then picked up the baton, predicting last year that the gap between AI companies' revenue and the investment required to meet computing demand would reach $800 billion by 2030 [3].

On the consumer side, major LLM products include conversational assistants like Doubao and ChatGPT, productivity tools like Claude and Perplexity, and social entertainment apps like MiniMax's Hailuo AI and Talkie. LLM companies monetize through subscriptions, in-app purchases, and advertising.

Before OpenClaw arrived, the universal problem was weak monetization.

Take MiniMax: its consumer-facing AI-native products account for 67.2% of total revenue, yet through the first three quarters of 2025, that segment's gross margin was just 4.7% — barely positive after a deeply negative -23.5% in 2024.

Two factors are at play. First, users' willingness to pay is low.

According to MiniMax's prospectus, as of the third quarter of last year, its AI-native products had accumulated more than 212 million users, but only 1.77 million were paying customers — a conversion rate below 1%.

For comparison, the market estimates ChatGPT's paid conversion rate at roughly 2.7% to 3%.

That conversion rate would not be considered low for a game or a traditional internet product. But games have high-spending whales, and internet platforms have advertising and e-commerce to monetize free users. Neither model translates well to AI products.

The second problem is prohibitive compute costs.

Unlike traditional internet products, where more users mean lower marginal costs, every conversation with an LLM-powered consumer product requires real-time compute. More users means higher — not lower — infrastructure spending.

By September 2025, MiniMax's monthly active users had reached 27.6 million, nearly nine times the 3.1 million of 2023. Revenue growth has been no match for the explosion in inference costs.

The enterprise side is even more complicated.

The most common enterprise model is MaaS (Model as a Service), where businesses call models via API and pay per token consumed. The alternative is on-premise deployment, delivering customized AI solutions to large clients.

Zhipu, which focuses on the enterprise market, derives 84.4% of its revenue from on-premise deployments.

The problem with customized deployments is that they are essentially one-off deals — the project ends and so does the revenue. This runs counter to the declining marginal-cost dynamics of traditional SaaS. Meanwhile, each project demands heavy staffing, meaning revenue growth scales linearly with headcount.

At its peak, Zhipu's workforce exceeded 1,000 employees [4]; by June 30, 2025, it had 883. MiniMax, by contrast, had 385 employees as of September 30 of the same year. Based on 2024 revenue, MiniMax generated 563,000 yuan per employee per year; Zhipu managed just 351,000 yuan.

The MaaS business looks even grimmer. According to Zhipu's prospectus, gross margins on its cloud-deployed services slid from 76.1% in 2022 to -0.4% in the first half of 2025. Selling tokens had become less profitable than selling cabbages.

As of late 2025, MiniMax remained in the red, while Zhipu's operating cash outflow in the first half of the year reached 1.327 billion yuan. With cash and equivalents of 2.55 billion yuan, the company had, by rough estimate, less than a year's worth of runway.

Just as MiniMax's cash burn was starting to sputter, OpenClaw's explosion onto the scene delivered an unexpected lifeline.

## Breaking Through the Ceiling

In early March, OpenClaw's star count on GitHub surpassed 200,000, rocketing upward at a trajectory that overtook Linux to become the fastest-growing open-source project in GitHub history.

Some have called OpenClaw the "iPhone moment" of the agent era. The analogy may be overused, but it fits.

The iPhone popularized smartphones and showed the general public that a phone could do more than make calls and send texts — it could browse the web and stream video. OpenClaw has done the same for AI agents, driving the concept into public consciousness more effectively than any number of "all in on agents" keynotes or product launches from tech giants.

As agents break into the mainstream, the knock-on effect is an explosion in token consumption — prying open the revenue ceiling for LLM companies.

Unlike a traditional chatbot that answers one question at a time, an agent decomposes goals, plans steps, invokes tools, and checks results, much like a human would. It also needs to retrieve "historical memory" and remain on standby around the clock. Token consumption can increase by orders of magnitude — tens or even hundreds of times over.

Consider how an OpenClaw "lobster" completes a single task. Step one: it reads a screenshot to understand what is on screen, consuming vision-model tokens. Step two: it decides what to click and in what sequence, consuming reasoning-model tokens. Step three: it confirms before executing, consuming yet more tokens.

For the same task, the difference in token consumption between the two paradigms can be anywhere from tens to hundreds of times. The more complex the task, the wider the gap.

Users have taken to social media to complain. One reported that a skill set up to automatically aggregate trending news burned through 30 million tokens in five hours. Another developer shared their "achievement" of exhausting 12 million tokens in ten minutes. These are not exaggerations.

IDC rushed out a forecast: by 2031, Chinese enterprises will operate 350 million active AI agents, driving agent-related token consumption to grow at an annualized rate exceeding 30x — an exponential surge.

This explains the scramble among tech giants to stake their claims.

MiniMax launched MaxClaw, a "one-click" version of OpenClaw with a more affordable subscription model — but one that defaults to MiniMax's own models. Zhipu's AutoClaw emphasizes one-click installation and local deployment, offering a graphical installer and more than 50 pre-built skills tailored to Chinese workplace workflows.

The internet giants, with their vast resources, have thrown everything they have at the opportunity.

Tencent marshaled both digital and physical assets, launching WorkBuddy (compatible with OpenClaw skills) and QClaw (controllable via WeChat), while setting up hands-on installation booths at its Shenzhen headquarters, deploying "Lobster Strike Teams" to set up OpenClaw for users free of charge.

Baidu followed suit, releasing a mobile "lobster" app and hosting "Lobster Markets" — engineers in business attire stationed outside office buildings, installing OpenClaw one by one for the lines of users who showed up. The scenes were remarkable.

On one side, companies are jockeying to squeeze every drop from this wave. On the other, ordinary users face the sting of their token consumption bills.

Daily spending of 100 yuan is no longer unusual; monthly bills of 20,000 yuan are not unheard of. "Raising a lobster is more expensive than raising a child," users gripe. "I haven't made a single yuan from OpenClaw, but I've already gone broke buying tokens." The complaints are endless.

Most people would struggle to articulate exactly what OpenClaw can do for them. But the fear of being left behind by the times instinctively pushes more and more of them to try it anyway.

Viewed optimistically, this may be the closest the general public has ever come to willingly paying for AI services.

For users, model benchmark scores are no longer forgettable numbers in a headline — they are reference points for choosing which model to power their lobster. For LLM companies, the goal of model iteration has shifted from climbing one more spot on a benchmark to persuading users to select their model for agent workloads.

This has given investors the courage to place one more bet on the future of generative AI.

At its peak market capitalization on March 10, measured against 2025 revenue, MiniMax traded at a price-to-sales ratio exceeding 600x — meaning the market was willing to wager more than 600 yuan for every 1 yuan of current revenue.

Consider a data point MiniMax recently disclosed: average daily token usage for its M2 series of models in February grew more than sixfold compared to December, propelling MiniMax's annualized recurring revenue (ARR) from $100 million to $150 million in just two months [5].

This time, the odds that the big money wins its bet may not be so slim after all.
