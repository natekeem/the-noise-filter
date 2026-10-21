---
author: "The Noise Filter"
pubDatetime: 2026-10-20T23:00:00+09:00
modDatetime: 2026-10-20T23:00:00+09:00
timezone: "Asia/Seoul"
title: "Smart TVs & ACR Tracking: What Your TV Knows and How to Opt Out"
category: "online-safety"
contentType: "Explainer"
featured: false
draft: false
tags:
  - privacy-controls
  - smart-tv
  - acr
description: "Automatic content recognition can identify shows, ads, and HDMI input viewing. Here are the current Roku, Samsung, LG, and Vizio opt-out paths—and what they do not disable."
ogImage: "images/smart-tv-acr-tracking-opt-out-cover.png"
coverAlt: "A hand points a remote control at a television during everyday viewing."
quickFilter:
  changed: "TV makers now describe ACR controls more explicitly, but the switch remains separate from ad personalization, voice data, app accounts, and platform analytics."
  matters: "ACR can identify content from live TV and HDMI-connected devices, so using a separate streaming box does not always put that viewing outside the TV's measurement layer."
  ignore: "Turning off ACR does not make a smart TV offline, delete every account record, or remove every home-screen advertisement."
updateNote: "Source review completed October 20, 2026 against current official Roku, Samsung, LG, and Vizio privacy or support materials. Menu names vary by model year, firmware, and region."
---

Automatic content recognition, or ACR, can identify what is playing on a smart TV—including, on some brands, content from an antenna, cable box, game console, or streaming stick connected over HDMI. It usually does this by comparing a compact audio or video fingerprint, not by uploading a continuous recording of your living room.

You can opt out. But the switch is not the same as ad personalization, voice recognition, an advertising ID reset, app-level viewing history, or disconnecting the TV from the internet. If you turn off only one privacy control and expect every other data flow to stop, the result will be disappointing.

This guide separates those controls and gives the current official path for Roku TV, Samsung, LG, and Vizio where the manufacturer publishes one. Menu labels still vary by model year, firmware, country, and language. Treat each path as a verified starting point, then search your exact model’s on-device privacy menu or official manual if the label is absent.

## ACR is Shazam for the screen, not a camera pointed at you

![How a smart TV turns sampled content into a fingerprint, matches it, and associates the result with device data](/the-noise-filter/images/01-acr-fingerprint-data-flow.png)
_Figure 1: ACR implementations differ. Roku describes sampled pixels; LG describes audio fingerprinting; other vendors describe content signatures more generally. The shared idea is a compact match signal rather than a full program recording. Diagram: The Noise Filter._

The exact implementation differs by vendor:

- **Roku** says its ACR system creates an encrypted fingerprint from sampled pixels and compares it with a catalog of known content.
- **LG** says its current implementation uses audio fingerprinting through the TV’s internal audio processor. LG says ACR does not collect voice recordings, other audio recordings, screenshots, screen images, or video recordings.
- **Samsung** describes generating content “signatures” when users opt into Viewing Information Services. Its US support page says viewing history and duration may be associated with a device advertising identifier (PSID) and IP address.
- **Vizio** describes ACR-derived Viewing Data that can include programs and ads viewed through the TV, including content from connected devices and supported apps.

The fingerprint can be matched to a program, commercial, channel, or time slot. That match can then be combined with a device ID, IP address, content source, timestamp, consent state, or coarse location data, depending on the vendor’s policy and the choices you accepted.

That is why HDMI matters. If an Apple TV, game console, cable box, or Blu-ray player sends video through the television, the TV still sees the output it is displaying. ACR can sometimes identify that output even when the TV did not deliver the app or channel.

## What turning ACR off does—and does not do

| Control                                  | Usually affects                                   | Does not necessarily affect                                      |
| ---------------------------------------- | ------------------------------------------------- | ---------------------------------------------------------------- |
| ACR / Viewing Data / Viewing Information | Content fingerprinting and matched viewing events | App account history, voice services, basic diagnostics           |
| Interest-based ads                       | Use of eligible data for personalized ads         | ACR collection if its separate consent remains on                |
| Advertising ID reset                     | Breaks or refreshes one device ad identifier      | Historical records governed by the vendor’s retention policy     |
| Voice recognition                        | Voice-command processing                          | ACR generated from the program audio or picture                  |
| App privacy settings                     | Netflix, YouTube, or other app account data       | TV-maker ACR on supported sources                                |
| Disconnect TV from internet              | Blocks most online TV services while disconnected | Data already collected; tracking inside a separate streaming box |

Some vendor controls are linked, but do not assume they are. LG’s September 2026 statement, for example, says its Viewing Information Agreement enables ACR while a separate Interest-Based Cross Device Advertising Agreement is required for personalized and cross-device advertising. Samsung likewise lists Viewing Information Services and interest-based advertising as distinct choices.

## Roku TV: turn off Automatic Content Recognition

Roku’s current support path is the most explicit:

```text
Settings
  → Privacy
    → Smart TV Experience
      → Automatic Content Recognition (ACR)
```

Turn ACR off. Roku’s support page also separates **More Ways to Watch**, a feature that depends on ACR and can show recommendations related to what is on screen.

Roku says ACR can cover content from streaming, an antenna, and connected devices. The company also offers an account-level route at **my.roku.com → Privacy Settings → Smart TV Experience** for supported devices on the account.

Two details are easy to miss:

1. Roku presents the choice as opt-in during setup; its support page says the default selection is **No** before the user chooses.
2. Turning ACR off stops future collection but does not automatically delete viewing data already collected. Roku directs users to its privacy rights process for data requests.

On older Roku TV software, the label may be **Use info from TV inputs** under Smart TV Experience rather than the newer ACR wording.

## Samsung: withdraw Viewing Information Services

Samsung’s US privacy explainer ties ACR to the optional **Viewing Information Services** consent. On current Tizen menus in supported regions, the path is generally:

```text
Menu
  → Settings
    → All Settings
      → General & Privacy
        → Terms & Privacy
          → Viewing Information Services
```

Open the item, clear the agreement, and confirm. Samsung’s regional support materials and current menus may phrase the last entry as **I consent to Viewing Information Services on this Device**.

Then review two separate choices in the same area:

- **Interest-Based Advertisements Service** or **Internet-based Advertisement** consent;
- **Reset PSID**, which resets the Personalized Service ID used for advertising and service measurement.

Withdrawing Viewing Information Services is the ACR step. Disabling interest-based ads and resetting the PSID are separate privacy decisions. Samsung says it does not record or watch content as a continuous video; it generates signatures for recognition when the service is enabled.

Older Samsung sets may expose **Terms & Policy** directly under Settings instead of **General & Privacy → Terms & Privacy**. Region-specific firmware can omit services that are not offered locally.

## LG webOS: withdraw the Viewing Information Agreement

LG’s September 2026 privacy statement says ACR is off by default and requires acceptance of the **Viewing Information Agreement**. It also says users can withdraw the agreement or turn ACR off in TV settings at any time.

LG does not publish one universal current menu path in that statement, and webOS menus have moved across model years. Use this label-first route:

```text
Settings / All Settings
  → Privacy, Support, or General
    → User Agreements
      → Viewing Information Agreement
```

Withdraw the Viewing Information Agreement. If your set has a separate **Interest-Based Cross Device Advertising Agreement**, review that independently.

On older LG televisions, ACR may appear as **Live Plus** in the settings menu. Turning Live Plus off is the older opt-out path, but do not use a decade-old screenshot as proof of a current menu. Search the on-device Settings screen for **User Agreements**, **Viewing Information**, or **Live Plus**, then consult the manual tied to the exact model number if none appears.

LG’s current statement adds an important scope detail: on supported sets, its ACR may operate on Live TV, HDMI inputs, and LG Channels, but not inside third-party apps such as Netflix or YouTube installed from LG Apps. That is LG’s description of its own implementation, not a rule for every TV brand.

## Vizio: disable Viewing Data

Vizio’s current privacy supplement gives this path for newer software:

```text
All Settings
  → Privacy & Legal
    → Viewing Data
```

For older Vizio software, use:

```text
All Settings
  → Admin & Privacy
    → Viewing Data
```

Turn Viewing Data off. Vizio says its ACR can identify programming, advertisements, games, and content delivered through HDMI-connected devices and supported apps.

Vizio’s current policy makes a stronger deletion statement than Roku’s: when a user turns Viewing Data off, Vizio says historical Viewing Data logs associated with the device are deleted. That does **not** mean every category of device or account data disappears. Vizio distinguishes Viewing Data from other **Activity Data**, which may continue under the broader privacy policy.

Vizio is also the reason consent language matters. In 2017, the US Federal Trade Commission and New Jersey announced a $2.2 million settlement over allegations that viewing histories were collected on 11 million televisions without informed consent. The order required prominent disclosure and affirmative express consent. That enforcement history does not describe every current Vizio TV, but it explains why today’s controls and disclosures are much more explicit.

## One remote-control checklist

![Current ACR opt-out labels and paths for Roku, Samsung, LG, and Vizio with model-year caveats](/the-noise-filter/images/02-smart-tv-opt-out-paths.png)
_Figure 2: The final label is more reliable than a memorized path. Firmware updates can move the menu while preserving terms such as ACR, Viewing Information, Viewing Data, or Live Plus. Diagram: The Noise Filter._

Stand in front of the TV with the original remote and work through this list:

1. Find the model number and software version under Support or About.
2. Open Privacy, Terms, User Agreements, or Privacy & Legal.
3. Disable the ACR-equivalent label:
   - Roku: Automatic Content Recognition;
   - Samsung: Viewing Information Services;
   - LG: Viewing Information Agreement or older Live Plus;
   - Vizio: Viewing Data.
4. Review interest-based advertising separately.
5. Reset the advertising ID if the TV offers that control and you want a new identifier.
6. Review voice-recognition consent separately.
7. Check the privacy settings inside streaming apps you actually use.
8. Revisit the menu after a major firmware update or factory reset.

Take a photo of the final consent screen with the date and model number. If the setting reappears after an update, you have a record of the prior state without relying on memory.

## Should you disconnect the TV from the internet?

It is the broadest technical option, but it comes with costs:

- streaming apps and program guides may stop working;
- security and firmware updates may not arrive automatically;
- casting and voice features may break;
- a separate streaming device will still have its own data practices.

A practical middle path is to disable ACR and ad personalization, keep the TV updated, and use a streaming box whose privacy controls you understand. That reduces one measurement layer without pretending the screen has become a “dumb TV.”

Network-level blocking can be useful for advanced households, but it is brittle. Domains change, required services can share infrastructure, and a blocked endpoint is not a substitute for withdrawing consent in the product UI.

## The shortest honest answer

Your smart TV may know what program or ad is on screen, when it played, which input delivered it, and which device identifier or IP address was associated with the event. The exact fields and partners depend on the manufacturer, region, accepted agreements, and source.

Turn off the setting named ACR, Viewing Information, Viewing Data, or Live Plus. Then separately review personalized ads, voice, advertising IDs, and streaming-app privacy. If the menu path in this article does not match your screen, trust the exact model’s current manual—not a screenshot from another model year.

## Primary sources reviewed

- [Roku Support: Automatic Content Recognition and More Ways to Watch](https://support.roku.com/article/using-more-ways-to-watch-on-your-roku-tv)
- [Samsung US: How Samsung Smart TVs use viewing information](https://www.samsung.com/us/support/answer/ANS10010616/)
- [LG: Understanding Privacy on LG Smart TVs](https://www.lg.com/us/newsroom/corporate/statement-understanding-privacy-on-lg-smart-tvs)
- [Vizio: Viewing Data Privacy Policy](https://www.vizio.com/en/terms/privacy-policy/viewing-data-privacy-policy)
- [Vizio: Privacy Policy](https://www.vizio.com/en/terms/privacy-policy)
- [FTC: Vizio viewing-history settlement](https://www.ftc.gov/news-events/news/press-releases/2017/02/vizio-pay-22-million-ftc-state-new-jersey-settle-charges-it-collected-viewing-histories-11-million)

_This is a privacy-controls explainer, not legal advice. Policies and menus were reviewed on October 20, 2026. Availability and labels differ by country, model, model year, firmware, language, and accepted service agreements._
