---
title: "What Did Dify Actually Get Right?"
description: "How Dify grew from an underestimated startup to a phenomenon-level open-source AI platform used by 20% of Fortune 500 companies."
pubDate: 2026-03-09
tags: ["companies"]
draft: false
featured: true
heroImage: "/images/what-dify-got-right.png"
---

*Dify is one of the most prominent open-source projects in AI today. But its path here has been paved with competition and skepticism. Many never expected that a small, initially unremarkable team could reach these heights in just two years. Even now, people regularly ask me: Why Dify? What did they actually get right? In this podcast episode, Lu Yu and I look back on Dify's development over the past two years and try to answer those questions.*

**Qu Kai:** When we recorded our podcast two years ago, Dify had just launched, and then it took off. But the fact that Dify has done this well genuinely exceeded most people's expectations. Let me start by asking — after more than two years, what's your overall sense of the journey?

**Lu Yu:** Let me walk through the timeline.

From Day 1, we committed to three strategies: open source, enterprise, and global. From those three pillars, a coherent set of principles naturally followed — open ecosystem, model-agnostic, engineering-first.

Looking back, these bets have been validated one by one over the past two-plus years.

In terms of market and technology shifts, we've been through roughly three waves.

In 2023, we released the first version of Dify. It was fairly basic, but it had a friendly interface. At the time, if your product used AI and people could actually understand it, you had a real chance of becoming an instant hit.

In 2024, we launched workflows — which became our core capability — and started building our plugin ecosystem. Because we were focused on enterprise, we could clearly feel a significant shift: the first wave of companies with real purchasing power started arriving.

In reality, there's typically a six-to-twelve-month lag between a new technology emerging and enterprise customers being willing to pay for it. It's much slower than most people assume.

By 2025, models themselves had noticeably improved — especially open-source capabilities and multimodal maturity. Today, almost nobody debates "open source versus closed source" anymore. Some of our earliest core assumptions — like the necessity of an orchestration layer — have been validated by the market.

**Qu Kai:** Back in 2023, there were still so many open questions, and a lot of foundational assumptions hadn't been tested yet.

Let's walk through it together — from 2023 to now, what did you get right from the start, and what did you adjust along the way?

I remember when we were out fundraising together in 2023, the biggest pushback you faced was about defensibility.

LangChain was already huge at that point, and the most common question was: What's the difference between Dify and LangChain?

Looking back today, how would you re-answer that question?

**Lu Yu:** Two years ago, I didn't articulate it well enough. Today, the fundamental difference between us and LangChain comes down to who we're building for.

If you put users of these products on a spectrum — hardcore engineers on the far left, completely non-technical users on the far right — then:

LangChain skews toward people with strong coding abilities.

Dify sits in the middle today, and will keep moving toward less technical — even non-technical — users over time.

OpenAI's Agent Kit clearly skews left.

n8n sits slightly to our left.

Coze — ByteDance's bot-building platform — skews right, but it's not strong enough for production use.

**Qu Kai:** Since you brought up LangChain, let's talk about some of your other competitors. How do you think about the competitive landscape?

**Lu Yu:** It's actually quite interesting. As a startup, we've already been through every kind of competitive battle, and our ability to survive has been tested repeatedly.

We've gone head-to-head with tech giants like ByteDance, with Silicon Valley startups, and with model providers like OpenAI.

In 2023, beyond LangChain, we were up against GPTs and Coze.

Let me start with GPTs. The vision — letting anyone build a bot — was compelling, and it had ChatGPT's massive distribution behind it. But it never truly broke through, and the fundamental reason is that it never figured out who should actually be building these bots.

The reality is that most people don't have the ability to create something of genuine practical value.

It's like how everyone can scroll through Douyin (China's TikTok), but not everyone can make great content with CapCut. Consuming content and using tools to solve real problems are separated by a vast gap.

I think there are roughly four ways someone can build a great product:

1) Deep technology — you truly understand hardware, algorithms, or can drive model costs extremely low.

2) Creativity — you can nail the user experience and interaction design well enough to genuinely retain users.

3) Scarce moats — like proprietary data.

4) Complete processes — essentially SOP-level capability.

The real difference between people and organizations often comes down to how they understand process. At bottom, it's a difference in values.

I often use expense reimbursement as an example. In our company, the reimbursement process is so short it barely exists — because we just give employees company credit cards. But not every organization is willing to do that.

Among those four possibilities, the first three aren't scalable or replicable, precisely because they're inherently rare. The only one with real potential for replication is process.

So products like GPTs and Coze, aimed at the general public, can certainly help more people put something together. But what they mostly deliver is a way for people to quickly grasp a new technology and experience a kind of "creator's thrill."

Since the vast majority of people lack those first three rare capabilities, and these platforms don't give them the tools to build complete processes either, it's very hard for them to produce anything of real value.

**Qu Kai:** So in terms of positioning, GPTs and Coze aren't really direct competitors to Dify?

**Lu Yu:** Right. What Dify has always focused on is the process problem — how to connect LLMs with people, tools, and data within an enterprise context.

So even though we're all building on LLMs, the context is different, and the products that emerge are completely different.

A colleague of mine put it perfectly: "A model is like a fish — drop it into different fishbowls, and it grows into something completely different."

Put an LLM inside an IDE, and it becomes Cursor. Put it in an Ubuntu sandbox, and it becomes Manus. Put it inside an enterprise, and it becomes Dify.

That said, when Coze launched in July 2023, I did feel anxious. But that anxiety lasted exactly 48 hours. After that, I never paid attention to the product again, because our audience, the problems we're solving, and our organizational capabilities are entirely different.

**Qu Kai:** What about n8n?

**Lu Yu:** Our positioning and philosophy are actually quite similar. Today, a lot of users see the two products as complementary and use both.

n8n's early vision was very close to ours — low-cost, open-source, vendor-neutral automation. They were founded in 2019, back when AI wasn't part of the picture at all, and they only started integrating models last year. This year their marketing has been strong, and with a head start, a more mature ecosystem, more tools and templates, they've gained significant visibility.

Our disadvantage is that we started later. But when it comes to LLM capabilities, RAG, and multimodal context handling, Dify's AI-native engineering is stronger. And we can deliver end-to-end — something n8n doesn't currently support.

**Qu Kai:** Then there's OpenAI's recently announced Agent Kit.

Every time OpenAI makes a move, the reaction is fascinating. The moment they ship something new, the market immediately erupts with "who's about to get killed" discourse.

When GPTs launched, people said Coze and Dify would be killed. When Agent Kit came out, people said n8n and Dify would be killed. There's always some new permutation of "X and Dify are dead."

But Dify has never been killed by anyone. In fact, it's kept growing steadily.

I even remember that during the GPTs wave, you turned it into a strong brand moment. After GPTs launched, many enterprises realized AI could be used this way, but they couldn't actually use GPTs directly — so they chose to deploy Dify instead.

**Lu Yu:** Exactly. OpenAI's products may not always land well in terms of positioning or execution, but they do an incredible job of educating the market for the entire industry. We'd have to spend enormous effort explaining what our product actually is, but OpenAI just ships something similar, and overnight, everyone suddenly gets it.

As for the "who's going to get killed" narrative — it's far too binary, and most of it is just noise manufactured by media. The vast majority of people making those claims have never actually used any of these products.

Based on the reality of the past two years, especially in enterprise markets, model providers have a very hard time directly displacing downstream products. What's hardest to replace is the trust built over time, along with all the connections we've established with our customers.

My assessment of Agent Kit is that it's still quite early-stage. For at least the next six months, it won't pose a substantive threat to any other product.

**Qu Kai:** And right now, companies are genuinely wary of being locked into a single model provider. So from that angle, don't open-source projects with model flexibility actually have an advantage over products built by the large platforms or model providers themselves?

**Lu Yu:** Open-source projects do have a natural advantage when competing with cloud providers and model vendors.

I've spoken with many enterprise decision-makers. When they're choosing an orchestration layer or development platform, they're extremely cautious — they treat it more like a "technology investment," systematically evaluating compliance, openness, and long-term sustainability.

Almost no technology leader would dare lock their entire tech stack into a single model.

And if a platform functions more like a universal adapter — able to plug into different external tools — the overall risk drops significantly.

Our product is one that delivers that hot-swappable experience in a fairly complete way.

Developers can use our native toolkit or their own custom extensions, and the two don't interfere with each other. No matter how Dify evolves, the extensions they've already built will keep working.

This matters enormously to developers. On one hand, they need to stay current with the latest technology. On the other, they have to protect their existing technical assets. Otherwise, the moment an external product upgrades, their business breaks.

**Qu Kai:** Understood. There's another criticism people have raised — including some who still bring it up — which is that being "just" an orchestration layer is too thin.

**Lu Yu:** The "thin versus thick" debate isn't really worth having. And there's a common misconception behind it: people tend to assume that engineering isn't valuable.

But in our view, engineering is the most valuable thing of all.

Engineering means designing in layers. It means abstracting users' business scenarios. It means cleanly separating what's variable from what isn't. The entire process is extraordinarily demanding intellectually. It requires you to work closely with users and developers over long periods, to understand the complexity of the real world — and it means constantly learning expensive lessons along the way.

Here's an example. In a workflow product, there's an absolutely critical concept called node granularity:

If the granularity is too fine, it starts to feel like programming, and ordinary people can't use it. If it's too coarse, it becomes too abstract and the capability isn't there.

Finding the right granularity for each scenario requires enormous human judgment and constant iteration. A product like ours involves hundreds or thousands of decisions just like this one.

It's precisely this invisible hard work that, piece by piece, builds real depth into a product.

By contrast, I've seen people mention that 80% of Agent Kit's code was written by Codex. To me, that kind of disregard for engineering itself is what produces something that's actually thin.

**Qu Kai:** Let's talk about workflows. Over the past six months, a lot of people have been asking: will workflows still matter in the future? Do we even need them, given how powerful automation and AI coding have become?

**Lu Yu:** I believe workflows will exist for a long time, because there's an unchanging principle at the foundation of all human production: the need for high predictability.

If AI reaches its theoretical peak, of course we could have a model solve problems perfectly in a single shot. That's why some teams have taken the "one bot handles everything" AGI approach from the start.

But the reality is that models aren't yet powerful enough for us to blindly trust their output.

What's far more common today is this: you give the model a task, it returns a result, you have to judge whether it's good enough, and if not, you start over. After a few rounds of this, users often feel frustrated, uncertain, anxious — even a nagging feeling of "have I been fooled again?"

So how do you solve this?

You insert checkpoints along the way. At critical junctures, you let humans step in and collaborate. This way of working is, at its core, a workflow.

That's exactly the technical path Dify has chosen. We build stability and reliability with workflows first, then gradually move toward higher levels of intelligence.

Fully autonomous intelligence could be three to five years away, or even longer. What we can guarantee is that throughout the entire transition period, we provide technology investors with a system that is stable, reliable, and genuinely production-ready.

Even as the underlying technology keeps changing and we keep iterating, the experience we deliver to users remains consistent.

You can think of the AGI approach and the workflow approach as the difference between technology radicals and technology pragmatists.

But ask yourself: in the real world, are there more radicals, or more pragmatists?

**Qu Kai:** So Dify chose the more pragmatic path — letting users start getting value immediately, with results improving as models get better. The more cutting-edge path might tell a more exciting story, but it's less stable, and someone has to keep paying the price for those experiments.

But when you see all these flashy narratives out there — and occasionally a genuinely dazzling demo — it's hard not to wonder whether Dify is falling behind. Does that kind of external noise make you anxious?

**Lu Yu:** Not really. Because we have deep conviction in our technical direction.

Almost every model built on Transformers today can essentially be classified as "neural network AI." But we never believed from the start that Transformers could solve everything.

Before Transformers, there was an older approach called symbolic AI. It emphasizes logic and structure.

The technical direction we truly believe in is the convergence of these two paths:

Neural networks handle association and exploration; symbolic systems handle logic and judgment.

This conviction comes from bionics and cognitive science.

The human brain is an extraordinarily energy-efficient yet highly intelligent system. Today's LLMs, by contrast, consume enormous energy.

Where does the gap come from?

The brain doesn't just have neural-network-style associative capability — it also has a built-in symbolic system.

For example, when I see a person, I can almost instantly determine whether they're male or female, old or young. It's as if our brains contain a built-in decision tree that lets us rapidly classify, establish causality, and predict others' behavior — all at remarkably low cost and energy.

**Qu Kai:** That makes sense. We've also discussed a topic that Sam Altman and others have been talking about recently — whether the future of SaaS will become a kind of "fast fashion."

Today's SaaS mostly addresses universal scenarios. But as AI advances, will more companies simply build their own products that perfectly solve their specific problems? For example, could a finance team work directly with engineers to build a workflow, rather than buying an off-the-shelf SaaS product?

**Lu Yu:** From a human-computer interaction standpoint, that's plausible. But I think that view is only half right.

Because in software engineering, there will always be certain immutable foundations — and within those foundations, there's still room for SaaS.

Take the finance and tax scenario: which invoice fields need long-term storage, which ones are sensitive data — these have to be defined by humans. These are fundamentally data structures, critically important, and not something you can casually change.

So the more likely future paradigm is this: humans invest heavily in defining "outcomes" and "structures," and everything else — the personalization and customization — gets handed off to AI.

**Qu Kai:** I remember when we talked two years ago, people were mainly using Dify for chatbots, companion apps, knowledge bases, and Q&A customer service. Has that changed over the past two years?

**Lu Yu:** Today, many of our customers are using Dify to orchestrate extremely complex processes — enterprise-scale, large-scale intelligent transformation.

The most complex workflow we've seen had four to five hundred nodes, linking together an enterprise's entire web of organizational relationships and data.

Even more striking — our customer Anker, the consumer electronics company, has built over a thousand workflows on Dify, integrating tens of thousands of atomic capabilities. They've started treating agents as a new class of production asset, managed on equal footing with human resources. When a new business need arises, they first analyze what capabilities are required, how the process should be designed, which nodes should be handled by people, and which should be delegated to agents.

**Qu Kai:** It's already that advanced?

**Lu Yu:** Yes, and it's not just one company doing this. Many enterprises are moving in this direction. Honestly, the pace has been much faster than I initially expected.

**Qu Kai:** Can you give some more specific, interesting use cases? You mentioned Anker — in what kinds of scenarios do they choose to use agents? What level of sophistication are we talking about? Because when a lot of people hear "enterprise AI," their minds still go straight to knowledge bases and chatbots.

**Lu Yu:** We eventually arrived at an insight: the most standard use case is, paradoxically, the non-standard one.

We tried to identify a handful of standard scenarios, but we found that the users getting the most value were almost never using Dify in a standard way.

What they really need is glue — something to bind together the various processes and capabilities already embedded in their operations, creating complex collaboration. And that combination looks completely different in every organization.

**Qu Kai:** So what is Dify inside an enterprise, exactly? Is it scaffolding, a development tool, glue — or will it eventually become something more like an operating system?

**Lu Yu:** I believe a new mode of organizational collaboration is emerging. Within enterprises, most production activities that can be abstracted and standardized will run on an intelligent platform. That platform's job is to integrate internal atomic capabilities, enable efficient collaboration between humans and agents, and handle the design and orchestration of processes.

In the future, I might start my workday by opening my phone to a dashboard. I'd tap in and see a full panoramic view of operations, along with all the tasks waiting for me. Some I can simply extract results from. Others need my review. And some require my judgment — should this be assigned to a person, or delegated to an agent?

From that perspective, it's essentially an operating system.

**Qu Kai:** That reminds me of something you said in our earliest conversations — that LLMs shouldn't be used only by developers. The actual end users should be able to interact with the system and provide feedback too.

**Lu Yu:** Exactly. Our philosophy has always been that LLMs should drive technology democratization. I used to have occasional doubts about that, but now I'm certain it's inevitable — and it will likely happen within two to three years.

**Qu Kai:** So if someone asks who's actually using Dify today, how would you answer?

**Lu Yu:** Today, roughly 20% of Fortune 500 companies are using Dify.

**Qu Kai:** Is that entirely because of open source? You've done almost no go-to-market and very little proactive sales.

**Lu Yu:** Open source was the most critical decision. Without it, nothing else would have been possible.

Going global means solving a trust problem. If you want to spread rapidly and promote your own technical standards, open source is by far the most efficient approach.

**Qu Kai:** But your success in Japan is still quite remarkable.

**Lu Yu:** It is. We launched a Japanese-language version right when we went live in 2023, but we didn't think much of it at the time. Then around April or May of 2023, the Japanese market simply exploded. Today, Dify holds a near-monopoly position in Japan as a phenomenon-level tool.

People often ask me: Why Japan? What did you do right?

We didn't really do anything. If I had to point to something, it was partly luck and partly open source.

As for why Japan specifically, I think the core reason is that Dify happened to be an exceptionally good fit for Japan's social structure and workforce model.

On one hand, technical talent is extremely scarce there. On the other, internal business operations are highly process-driven. When they discovered Dify, it was probably like an accountant who had been filling out paper financial reports seeing Excel for the first time.

There are secondary factors too, of course. Compared to a North American team, our time zone makes it easier to serve Japanese customers. And our UI may align better with East Asian design sensibilities.

**Qu Kai:** How has your understanding of AI changed over these two years?

**Lu Yu:** Today's models can already handle the vast majority of problems we encounter quite well. For many people, model capability is actually overflowing — there's more power available than they know what to do with.

Two years ago, our confidence in models was maybe 60 to 70 percent. Today, that number is above 95 percent.

But given that, why do so many people still struggle to collaborate effectively with models?

Because a model is essentially a massive "data sphere." You first have to believe that the answer is somewhere inside it. Then you have to keep working with the model, finding the right set of "keys" to extract that answer. And not everyone has the ability to find those keys.

It's also very hard to teach. It depends heavily on a person's existing cognitive framework and their ability to ask the right questions.

I believe products like Dify can pre-design the treasure map for users — the map that shows them how to find those keys. When users need to solve a certain type of problem, they just follow the map, and they're far more likely to extract the right answer from the model.

In this process, humans act more like sensors helping the model understand the real world — providing it with richer, more accurate context.

**Qu Kai:** There's a really elegant concept embedded in this — Dify is the treasure map humans use to find answers inside large models.

**Lu Yu:** Yes. And separately, in enterprise settings, AI's productive potential is still far from being fully unlocked.

MIT recently published a report noting that 95% of companies' AI pilots ultimately fail. That tells you most enterprises' tooling and learning capabilities are still woefully insufficient.

So I believe the next real window of opportunity isn't about making models smarter. It's about building bridges.

For example — building infrastructure that closes the gap between what models can do and what humans can actually use. Designing better human-AI interaction paradigms. Constructing workflows that genuinely enable efficient human-AI collaboration.

These are all "last mile" problems in AI applications, and they'll represent the biggest opportunities over the next several years.

Let me turn a question back to you: given all of this, what remains as the core competitive advantage for a person — or an organization — in the future?

**Qu Kai:** Let me think about that.

**Lu Yu:** Consider this: sunlight, air, and water are symmetrically available to everyone. Models are, in a sense, making intelligence into a symmetric resource too. So there must be certain asymmetric things that remain — and those will be the real competitive advantages of the future.

**Qu Kai:** Here's how I'd answer: if we treat AI and humans as equals, then searching for competitive advantage between humans and AI is really just searching for competitive advantage between humans.

Why are some people more capable than others?

The core difference lies in decision-making ability and attention mechanisms.

I often use this example: if ten thousand people listen to the same one-hour podcast, every single one of them will extract different key takeaways. The same applies to AI. You can feed it all the context in the world, even let it search for more information online, but the priorities it identifies and the actions it takes next will still vary enormously.

**Lu Yu:** Isn't it really a difference in values?

**Qu Kai:** Depends on how you define values. I'd argue that values are themselves part of context.

For instance, I was just talking to someone at TikTok earlier today. They said that in the Middle East, a woman shaking her hips on camera is illegal. But in Brazil, from a traffic perspective, it's practically encouraged.

Different cultures, different contexts — naturally leading to completely different outcomes.

So no matter how powerful AI becomes, different people using AI will inevitably arrive at different results.

A lot of people, especially younger people, tell me they worry about being replaced by AI.

I've never had that worry.

I've thought carefully about why, and the conclusion is actually simple:

If I'm already hard to replace compared to other people, then AI is at best operating at the same level as everyone else — so there's nothing to worry about.

Going back to the podcast example — I'm deeply confident that, given the same material, I can summarize it better than AI. AI might give you points one through five. I'll tell you directly: the last four don't matter. Let's look at why the first one is the most important.

**Lu Yu:** I asked you that question because I've been thinking lately about whether Dify can preserve the asymmetric capabilities of individuals and organizations, and then help everyone collaborate more effectively with models.

**Qu Kai:** I see. What you're thinking about is how to take more people from a starting point of 60 out of 100, and — as models improve, context becomes richer, and feedback loops get better — gradually bring them to 70, then 80.

What I was saying earlier is that if someone can already perform at 90 or even 100, they were never going to be replaced. But someone who can only reach 60 — they genuinely might be.

One last question. Several investors have told me they never expected Dify to do this well. What do you think they missed? Or put another way, what's the single most important reason you've gotten this far?

**Lu Yu:** To put it simply: patience.

That probably sounds like the opposite of the tempo most AI startups operate at. But we thought very clearly from the beginning about what we wanted to build, and we assembled the team around our ultimate goals and standards. So the outcome was never really in doubt.

**Qu Kai:** Essentially, you're more pragmatic, more grounded — so rather than being a flash in the pan, you've been building quietly before breaking through.

**Lu Yu:** I wouldn't quite describe us as "meticulous cultivators" or "building quietly before breaking through." We've simply been building a product the way you would in a mature market.

In a mature market, every product attaches a set of enduring labels to itself.

Toyota represents value for money and reliability. Volvo and Subaru represent safety. Tesla represents autonomous driving.

Dify became what it is today because we chose the strategies I mentioned at the beginning on Day 1, and then stuck with them.

So rather than asking what we "got right," the better question might be: what are the things we never changed?

**Qu Kai:** OK. Anything else you'd like to share?

**Lu Yu:** As a founder, you have to be happy.

**Qu Kai:** Are you happy right now?

**Lu Yu:** Extremely happy.

I'm in a better place now than I was two years ago, partly because I've redefined my own role.

The conventional wisdom is that a CEO should shoulder responsibility, endure hardship, and bear pressure. I think that's wrong.

Founders must let themselves be happy.

Under enormous pressure, it's actually very hard to think clearly. But when you're happy, your physical and mental state improves, and that's when the best ideas emerge.

The same applies to managing a team. If you spend all your time accommodating everyone's feelings, you gradually lose that original creative drive — the state of mind where you're expressing something through your product — and with it, the motivation to change the world.

An entrepreneur's mission is to bring the future into the present, not to march forward under a crushing burden.

**Qu Kai:** It's not just founders, really. Everyone should pursue what makes them happy. When you're doing something you love, even working overtime feels like joy.

**Lu Yu:** Yes. Throughout building this company, I've held two views that might seem contradictory: we don't believe in 996 culture, but I'm also against a rigid eight-hour workday.

The former causes misery. The latter doesn't match how knowledge workers actually create.

When someone enters a creative state — a flow state — they lose track of time entirely. That's fundamentally at odds with a strict eight-hour structure.

**Qu Kai:** I don't know if you've found your own answer to that, but I can share something I've been feeling deeply lately.

Rules are fundamentally about constraining people. But the best rule might actually be no rule at all.

I spent a week in New York recently, and I made a fascinating observation — practically everyone jaywalks there. I even joked with someone that you couldn't find manners this bad anywhere in China.

But they pointed something out: look more closely, and everyone is actually exercising judgment. If it would affect oncoming traffic, they don't cross. But if the road ahead is already gridlocked, they walk. In other words, when everyone's goal is to maximize overall traffic efficiency, the traffic light itself becomes less important.

So if everyone's aligned on the goal, pulling in the same direction, and enjoying the work — that might just be the best state of all.
