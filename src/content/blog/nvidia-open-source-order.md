---
title: "Will Nvidia Build a New Order for Open-Source Models?"
description: "Nvidia's Nemotron 3 Super publishes weights, data, and training recipes — eclipsing DeepSeek in openness to sell more GPUs."
pubDate: 2026-03-13
tags: ["open-source", "nvidia"]
draft: false
featured: false
heroImage: "/images/nvidia-open-source-order.png"
---

Nvidia has released a nearly fully transparent open-source model — publishing its weights, datasets, and training recipe. By contrast, China's open-source models, led by DeepSeek, have only released weights.

With GTC 2026 set to begin next Monday, Nvidia has followed up its December release of Nemotron 3 Nano with the launch of Nemotron 3 Super, a model that eclipses DeepSeek in openness.

Jensen Huang is pulling out all the stops. This week, he took the unusual step of publishing an internal blog post titled "AI Is a Five-Layer Cake" — the five layers being energy, chips, infrastructure, models, and applications.

He devoted an entire passage to the importance of open-source models: "Most of the world's models are free. Researchers, startups, enterprises, and even entire nations rely on open-source models to participate in advanced AI projects. When open-source models reach the technological frontier, they don't just change software — they activate demand across the entire technology stack."

He pointed to DeepSeek-R1 as a case in point: "By broadly deploying powerful reasoning models, it accelerated the adoption of applications and increased demand for underlying training, infrastructure, chips, and energy." In China today, DeepSeek is playing exactly this role — activating the entire technology stack. But the task ahead is far from simple.

The Nemotron 3 series — Super, along with the upcoming Ultra — carries the weight of Huang's ambitions. Super has 120 billion total parameters, with 12 billion active under its MoE (Mixture of Experts) architecture. Nvidia says it can deliver maximum efficiency and accuracy in multi-agent applications such as software development and security troubleshooting.

Super supports a million-token context window, enabling long-term memory for AI agents with aligned, high-precision reasoning. According to Nvidia, Super is not merely a scaled-up version of Nano — it introduces architectural innovations that balance the efficiency-accuracy tradeoff inherent in high-parameter reasoning models.

At the architecture level, its hybrid Mamba-Transformer backbone combines Mamba layers with Transformer layers to improve sequence efficiency and enable precise reasoning, delivering higher throughput with a fourfold gain in memory and computational efficiency.

During pretraining, the majority of Super's compute operations used NVFP4, Nvidia's proprietary 4-bit floating-point format. Optimized for the Blackwell architecture, NVFP4 significantly reduces memory requirements and accelerates inference compared to FP8, while maintaining accuracy.

Super achieved leading accuracy across multiple agent-focused benchmarks and dominated in throughput.

Nvidia published Super's full training dataset. Pretraining drew on 10 trillion curated tokens, supplemented by 10 billion reasoning tokens and 15 million coding problems. The post-training dataset comprised 40 million new supervised and alignment samples spanning reasoning, instruction-following, coding, safety, and multi-step agent tasks. These were used for supervised fine-tuning (SFT), preference learning, and reinforcement learning trajectories, with roughly 7 million samples applied directly to SFT.

Nvidia also disclosed its reinforcement learning tasks and environments: interactive RL training across 21 environment configurations and 37 datasets — about 10 of which will be publicly released — including software-engineer-style agent training tasks and tool-augmented search and planning tasks. This extends training beyond static text into dynamic, verifiable execution workflows, generating approximately 1.2 million simulation runs during the process.

The company released Super's complete training and evaluation pipeline, from pretraining through alignment. Developers can now reproduce Super's training process, adapt the recipe for specific domains, or use it as a starting point for their own hybrid architecture research.

Open-source models span a spectrum of transparency: open weights, open data, and open training pipelines. Generally, when a model publishes its training data alongside its weights, it represents a meaningfully higher standard of openness — one that enables genuine research reproducibility.

Open-weight models release their weights for anyone to download and run, but typically keep training data and training pipelines proprietary. Chinese open-source companies have prioritized ecosystem expansion: open weights let enterprises deploy locally, developers fine-tune for their use cases, and users run inference on their own hardware, rapidly building an application ecosystem. In competing against closed-source APIs, open weights also offer enterprises cost advantages and greater autonomy.

Greater data transparency, however, involves thorny issues around copyright, web scraping, and partnership data. Publishing these details requires careful navigation of legal and commercial risks.

Nemotron is a truly open-source model — and more than that, it is an entire open-source model development platform.

Seen from this angle, Nvidia's release of Nemotron is less about building a single competitive model than about advancing an AI ecosystem built around GPU computing.

The key to understanding this move is that Nvidia's core business is not selling models — it is selling compute platforms. Its revenue flows from GPUs, the CUDA software stack, network interconnects, and data center systems. As long as global AI training and inference continue to scale, so does GPU demand. For Nvidia, what matters most is not whether any particular model leads the benchmarks, but whether the entire AI ecosystem continues to run on GPU-based computing.

Within Huang's five-layer cake framework, releasing an open-source model like Nemotron serves several strategic purposes:

**First, open-source as the most powerful lever for GPU sales.** This is the central point. Nvidia is not in the business of selling models — it sells chips and compute infrastructure.

Super is packaged through NVIDIA NIM for deployment from workstations to the cloud, with support for vLLM, Google Cloud Vertex AI, Oracle Cloud, CoreWeave, and many other platforms. The more open and widely deployed the model becomes, the more H100, H200, and Blackwell GPUs it sells.

**Second, using architectural innovation to create hardware lock-in.** Super is the first model in the Nemotron 3 series to combine LatentMoE, multi-token prediction (MTP) layers, and native NVFP4 pretraining. NVFP4 is a numerical format exclusive to Nvidia's Blackwell architecture, and pretraining natively in NVFP4 dramatically reduces memory requirements.

The implication is clear: while the model is open-source, its performance on Nvidia GPUs — especially the latest Blackwell generation — far surpasses what other platforms can deliver. By open-sourcing the training recipe, Nvidia is effectively teaching the world a technical methodology that naturally gravitates toward its own hardware.

**Third, claiming technical leadership by out-opening DeepSeek.** By entering the arena with radical transparency, Nvidia is sending a message to the global developer community: the most advanced open model technology originates in America, within the Nvidia ecosystem.

Super includes multi-environment reinforcement learning for real-world agent tasks, with RL environments and datasets available to developers for domain customization and reproducibility research. This degree of transparency will rapidly attract researchers and enterprise developers worldwide, spawning papers, toolchains, and communities around the Nvidia ecosystem — forming a soft moat against competitors.

Open-source accelerates the commoditization of models themselves. What retains real value is the underlying compute platform and systems architecture — precisely the domain Nvidia dominates and most wants to control.

This dynamic also signals a broader shift: the AI industry is moving from a model race to a platform race. The decisive competition ahead may not be over who has the single best model, but over who can build the most complete, efficient, and scalable AI computing and application ecosystem.

Through this lens, DeepSeek — which has focused on building models rather than applications — may find that simply releasing DeepSeek-4 is not its most consequential move. Within China, no individual model can escape commoditization on its own. What truly matters is the role DeepSeek plays in China's broader AI computing and application ecosystem.

By proactively adapting to domestic Chinese chips, DeepSeek is effectively endorsing and activating the entire homegrown compute supply chain. Every Chinese developer building applications on DeepSeek's open-source versions channels compute demand toward domestic hardware — creating immeasurable value for Huawei Ascend, Hygon, Cambricon, Moore Threads, Enflame, and others.

As for DeepSeek-4 — that will take a bit more time.
