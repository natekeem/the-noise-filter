---
title: "Copilot+ PCs: What 40 TOPS NPUs Run Locally vs. In the Cloud"
slug: copilot-plus-pc-40-tops-npu-local-vs-cloud
description: "Cut through Microsoft's AI PC marketing to see what 40 TOPS NPUs genuinely process on-device versus what still routes to Microsoft Azure cloud servers."
pubDatetime: 2026-10-21T21:00:00+09:00
modDatetime: 2026-10-21T21:00:00+09:00
author: "The Noise Filter Editorial Team"
category: "tech-ai"
tags:
  - "artificial-intelligence"
  - "tech-hardware"
  - "consumer-privacy"
  - "operating-systems"
ogImage: /the-noise-filter/images/copilot-plus-pc-40-tops-npu-local-vs-cloud/cover.jpg
draft: false
---

Every major PC manufacturer is marketing "Copilot+ PCs" by highlighting on-device artificial intelligence powered by a mandatory 40+ TOPS Neural Processing Unit (NPU). However, the everyday generative features most consumers associate with AI—conversing with Copilot, summarizing lengthy web pages, drafting emails in Outlook, and complex coding assistance—fundamentally execute on remote Microsoft Azure cloud datacenters over an active internet connection.

The local NPU is not running a private, full-scale language model in your laptop's memory.

That architectural reality does not make modern NPU silicon obsolete. Processors like Qualcomm’s Snapdragon X Elite, Intel’s Core Ultra 200V (Lunar Lake), and AMD’s Ryzen AI 300 series bring genuine battery efficiency and quiet thermal design. But before paying a hardware premium for an AI badge, consumers need a clear, unhyped understanding of what executes on local silicon, what runs on traditional CPU/GPU cores, and what leaves the machine entirely.

---

## The Hardware Metric: What Is a 40 TOPS NPU?

To earn Microsoft's "Copilot+" certification, an OEM laptop must include an NPU delivering at least 40 TOPS (Trillion Operations Per Second) calculated at INT8 integer precision, along with 16GB of unified memory and 256GB of storage.

Why did Microsoft specify dedicated NPU hardware rather than relying on existing processors?

```text
[Silicon Architecture & Workload Division]
 ├── CPU: General operating system and sequential logic execution
 ├── GPU: Massive floating-point parallel computation (graphics/3D/rendering)
 └── NPU: Low-precision INT8 matrix multiplication accelerator (low-power perceptual models)
```

CPUs handle general operating system tasks. Discrete GPUs provide massive parallel floating-point throughput for graphics and gaming, but draw heavy wattage.

An NPU is specialized hardware: a dense array of multiply-accumulate (MAC) units designed to execute pre-trained, quantized neural network inference models. Running continuous video background blur, automatic framing, and microphone noise isolation on a CPU or GPU demands substantial energy and frequently spins up cooling fans. According to silicon vendor architecture whitepapers (such as Qualcomm's Snapdragon X platform documentation), offloading these continuous perceptual models to a dedicated low-power NPU block dramatically reduces the processor's active power draw during video calls. This measurement, however, reflects isolated silicon subsystem efficiency during conferencing—not overall laptop power draw.

---

## The Three Tiers: Local NPU vs. Local CPU/GPU vs. Cloud

The marketing around "AI PCs" often conflates all automated tasks under a single umbrella. In Windows 11, processing splits across three distinct tiers:

![Copilot+ PC Architecture Local NPU vs Cloud Azure Workloads](/the-noise-filter/images/copilot-plus-pc-40-tops-npu-local-vs-cloud/01-copilot-local-npu-vs-cloud-architecture.png)

### Tier 1: Local On-Device NPU (Zero Cloud Transmission)

These specialized features execute on the local NPU, require no internet connectivity to function, and transmit no telemetry packets to Microsoft:

1. **Windows Studio Effects**: Continuous camera and microphone enhancements (portrait background blur, automatic framing, synthetic eye contact adjustment, and Voice Focus acoustic noise suppression) run at low wattage during any call on Zoom, Teams, Meet, or Slack.
2. **Live Captions & Offline Audio Translation**: Transcribes audio playing through your PC speakers (podcasts, video calls, local media files) and translates foreign spoken audio into English subtitles locally across 40+ languages.
3. **Paint Cocreator & Local Restyle**: Combines user stylus/brush strokes with text prompt guidance using an on-device quantized diffusion model, generating visual variations directly on local storage.
4. **Windows Recall (The Revised Security Architecture)**: Redesigned after public security criticism, Recall is strictly opt-in. Its local semantic vector search engine processes optical character recognition (OCR) and vector embeddings exclusively on the local NPU. Snapshots are protected by BitLocker and encrypted with Windows Hello biometric keys.

### Tier 2: Local CPU and GPU Processing

Many local computing tasks—including traditional image processing, video rendering in Premiere, and open-source local LLMs (like Llama 3 running through Ollama or LM Studio)—execute primarily on the CPU or discrete GPU via CUDA, DirectML, or Vulkan. An idle NPU during these tasks simply reflects that the software has not been compiled for specific NPU runtime libraries (such as ONNX Runtime or Qualcomm QNN).

### Tier 3: Microsoft Azure Cloud (Outbound Data Upload)

General conversational AI queries bypass local NPU silicon entirely:

1. **The Copilot Key and Sidebar App**: Conversational prompts, long-document syntheses, and general queries route directly over HTTPS to Microsoft Azure datacenters running large-scale cloud models (such as GPT-4o).
2. **Microsoft 365 Copilot**: Summarizing corporate email threads in Outlook, formatting tables in Excel, or generating presentations in PowerPoint processes on remote cloud infrastructure.
3. **Bing Web Search Grounding**: Real-time factual retrieval, URL citations, and web indexing require active network communication with Microsoft cloud search servers.

---

## Understanding Task Manager: What Does "0% NPU" Actually Mean?

Windows 11 24H2 includes a dedicated **NPU 0** monitor on the **Performance** tab of Task Manager.

![Windows Task Manager Performance Tab NPU Monitor](/the-noise-filter/images/copilot-plus-pc-40-tops-npu-local-vs-cloud/02-windows-task-manager-npu-monitor.png)

*(Above: Conceptual UI reconstruction based on the Windows 11 Task Manager Performance monitor for illustrative purposes; not a raw benchmark capture).*

It is essential to interpret this graph accurately:

- **Active NPU Utilization (20%–35%)**: Indicates that an NPU-compiled inference model (such as Windows Studio Effects during a video stream) is currently utilizing the low-power matrix engine.
- **Zero NPU Utilization (0%)**: Observing flat 0% utilization during an AI task indicates that the local NPU hardware is not engaged. However, **0% NPU is not standalone proof of cloud transmission.** A task could simply be executing locally on the CPU or GPU.
- **Verifying Cloud Routing**: To confirm whether data is leaving your PC, check the **Processes** and **App history** tabs or monitor network outbound traffic using Resource Monitor (`resmon.exe`). Conversational Copilot interactions generate active outbound HTTPS connections to Microsoft Azure endpoints.

---

## Architectural Tradeoffs: Qualcomm Snapdragon ARM64 vs. x86

Laptops featuring Qualcomm Snapdragon X Elite/Plus processors rely on ARM64 architecture rather than the traditional x86/x64 instruction set used by Intel and AMD.

Windows 11 addresses legacy software through **Prism**, a dynamic x86-to-ARM translation engine comparable to Apple's Rosetta 2. For standard office productivity, web browsing, and natively compiled applications, performance is snappy and efficiency is high. Note that manufacturer marketing claims of extended battery life (often cited between 16 and 22 hours) reflect a completely separate testing condition: continuous local video playback loops under controlled display brightness (typically 150 nits) with radios dimmed, rather than sustained AI inference, mixed multitasking, or continuous video calling.

However, consumers should weigh clear hardware boundaries:

- **Kernel-Level Anti-Cheat Incompatibility**: Multiplayer PC games requiring ring-0 kernel drivers (such as *Valorant* with Vanguard, or certain versions of Easy Anti-Cheat) cannot run under Prism emulation.
- **Proprietary Hardware Drivers**: Specialized hardware—including older audio interfaces (ASIO drivers), legacy flatbed scanners, and proprietary industrial peripherals—often lacks native ARM64 drivers.
- **Consumer NPU LLM Runtimes**: Consumer developers hoping to run 7B or 13B local LLMs will find that community tooling remains overwhelmingly optimized for NVIDIA GPUs (CUDA) or Apple unified memory (Metal), with NPU optimization libraries still maturing.

---

## The Consumer Buying Decision: Beyond the AI Badge

When evaluating a new laptop, look past artificial intelligence marketing slogans and assess hardware fundamentals:

```text
[Copilot+ PC Consumer Decision Tree]
       │
       ├─► Do you prioritize all-day battery life (15+ hours) and quiet fanless operation?
       │     └─► YES: Snapdragon X or Intel Lunar Lake delivers top-tier power efficiency.
       │     └─► NO: Continue.
       │
       ├─► Do you rely on competitive PC gaming with anti-cheat or specialized legacy peripherals?
       │     └─► YES: Avoid ARM-based Snapdragon laptops. Choose traditional x86 Intel or AMD models.
       │     └─► NO: Continue.
       │
       └─► Are you paying extra solely expecting a private, offline ChatGPT replacement on your laptop?
             └─► YES: Do not purchase. Conversational Copilot remains an internet-dependent cloud service.
             └─► NO: Buy based on screen quality, keyboard comfort, battery endurance, and build quality.
```

The genuine value of the Copilot+ PC generation is not a revolutionary shift in on-device conversational intelligence. It is the arrival of refined, high-efficiency silicon that delivers extended battery endurance to Windows laptops. Base your purchase on physical laptop engineering, not cloud marketing claims.
