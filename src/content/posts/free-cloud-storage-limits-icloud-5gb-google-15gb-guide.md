---
title: "Why 5GB iCloud and 15GB Google Storage Fill Up So Fast (and What to Cut)"
slug: free-cloud-storage-limits-icloud-5gb-google-15gb-guide
pubDatetime: 2026-11-09T20:30:00+09:00
draft: false
category: money-consumer-changes
tags:
  - hardware
  - cybersecurity
  - fintech
ogImage: /the-noise-filter/images/free-cloud-storage-limits-icloud-5gb-google-15gb-guide/cover.jpg
description: Understand how Apple's 5GB iCloud cap, Google's 15GB pooled Gmail/Photos quota, and Microsoft's 5GB OneDrive attachment rules trigger recurring subscription prompts—and how to reclaim space.
---

Apple's free **5 GB iCloud tier** has remained unchanged since Steve Jobs introduced iCloud in 2011, while Google's **15 GB free tier** pools Gmail messages, Google Drive files, and Google Photos into a single shared bucket. When a modern smartphone shoots 4K video at 170 MB to 400 MB per minute and messaging apps bundle gigabytes of chat video into nightly backups, hitting 100% capacity is no longer an edge case—it is a built-in funnel toward monthly cloud subscriptions.

Before paying $0.99 to $9.99 every month for the rest of your life, you need to know which services actually break when storage hits 100%, which hidden folders consume the most quota, and how to offload archival photos to local hardware.

---

## Quick Filter: What Changed, What Matters, What to Do

- **What changed:** Google ended unlimited free "High Quality / Storage Saver" photo uploads in June 2021, began counting Android WhatsApp backups against user quotas in 2024, and enforces a 24-month inactivity/over-quota deletion policy. Microsoft also shifted Outlook.com email attachments to count against its smaller **5 GB OneDrive** limit rather than its 15 GB email quota.
- **What matters:** Hitting 100% on a Google or Microsoft account does not merely stop photo uploads—it **bounces incoming Gmail and Outlook.com emails back to the sender**—potentially blocking bank alerts, password resets, and billing notices.
- **What to do:** Separate **essential account sync** (contacts, passkeys, calendar, email) from **heavy media archives** (4K video, old chat attachments, redundant device snapshots) so your primary email address can never be held hostage by vacation videos.

---

## 1. How the Big Three Free Tiers Actually Count Your Data

Each platform structures its free storage cap differently, and the penalty for crossing 100% varies sharply depending on whether email is pooled with photo backups.

![Comparison schematic of Apple iCloud 5GB, Google 15GB pooled quota, and Microsoft 5GB/15GB split storage rules](/the-noise-filter/images/free-cloud-storage-limits-icloud-5gb-google-15gb-guide/03-icloud-5gb-vs-google-15gb-quota-architecture.png)
*Platform storage rules compared: Google and Microsoft tie email delivery to cloud file/photo storage, whereas Apple's 5 GB limit primarily blocks device backups and photo syncing.*

| Platform | Free Storage Cap | What Counts Toward the Cap | What Breaks at 100% Capacity |
| :--- | :--- | :--- | :--- |
| **Apple iCloud** | **5 GB** total per Apple Account | iCloud Photos, iCloud Device Backups (iPhone/iPad), iCloud Drive, Messages in iCloud, WhatsApp iOS backups, `@icloud.com` mail | Nightly iPhone/iPad backups stop; new photos stop syncing; `@icloud.com` email stops sending/receiving (FaceTime, Contacts, and Passkeys still work) |
| **Google Account** | **15 GB** pooled across all services | Gmail (including Spam and Trash), Google Photos (added after June 1, 2021), Google Drive, Android WhatsApp backups | **Incoming Gmail messages bounce back to senders**; Google Photos backup stops; new Google Docs/Sheets cannot be created |
| **Microsoft Account** | **5 GB** OneDrive + **15 GB** Outlook | OneDrive files, Windows 11 Desktop/Documents/Pictures sync, and **all Outlook.com email attachments** count against the **5 GB** cap | If 5 GB OneDrive fills up, **Outlook.com blocks sending and receiving all emails** (even if the 15 GB mailbox bar is only 20% full) |

If you are already auditing recurring digital charges, pair this storage check with our guide on [how modern "cancel anytime" subscriptions trap everyday users](/the-noise-filter/posts/how-modern-subscriptions-trap-users-cancel-anytime/).

---

## 2. The Three Hidden Quota Eaters (and How to Clear Them in 10 Minutes)

Most users assume they need to delete thousands of individual JPEG photos to free up space. In practice, three specific categories usually account for 70% to 85% of a full cloud account:

### A. Duplicate Device Backups and Embedded Chat Media (iCloud & Google)

When iCloud Backup or Android Backup runs overnight, it often backs up the entire internal database of messaging apps like WhatsApp, WeChat, or iMessage—including every forwarded video clip received over the last five years.
- **On iPhone (`Settings > [Your Name] > iCloud > Manage Account Storage > Backups`):** Open your active iPhone backup and toggle off heavy third-party apps (or turn off `iCloud Photos` if you back up photos separately). Also delete orphaned backups from old phones or tablets you no longer own.
- **Inside WhatsApp (`Settings > Storage and Data > Manage Storage`):** Sort media by **Larger than 5 MB** and delete forwarded video files before the next cloud backup cycle runs.

### B. 4K 60fps Video Files in Cloud Photo Libraries

A single 3-minute 4K 60fps smartphone video consumes **700 MB to 1.2 GB**—as much space as 350 to 600 high-resolution still photographs.
- **In Google Photos (`one.google.com/storage/management`):** Use Google's built-in **Large photos and videos** filter to sort strictly by file size. Offloading just five to ten multi-minute 4K videos to a computer or USB-C drive can reclaim 5 GB to 8 GB immediately.

### C. Windows 11 OneDrive "Folder Backup" & Gmail Large Attachments

- **On Windows 11:** During initial PC setup, Windows prompts users to "Back up your folders with OneDrive." Accepting this redirects your local `Desktop`, `Documents`, and `Pictures` folders into the **5 GB OneDrive** cloud folder. Saving a single 4 GB video or game installer to your Desktop immediately fills OneDrive and freezes Outlook.com email attachments.
- **In Gmail:** Type `has:attachment larger:10M` in the Gmail search bar to list every old email carrying a 10 MB+ PDF or ZIP file. Delete unneeded threads and **empty the Trash (`Bin`) folder**—deleted Gmail and Drive items still count against your 15 GB quota for 30 days until permanently emptied.

---

## 3. Offloading Archives to Local Hardware: Portable SSDs vs. Home NAS

![SanDisk Extreme 1TB USB-C portable external SSD next to a USB Type-C cable](/the-noise-filter/images/free-cloud-storage-limits-icloud-5gb-google-15gb-guide/01-sandisk-usb-c-portable-ssd.jpg)
*A 1 TB USB-C portable SSD plugs directly into modern iPhones, Android phones, and laptops, holding 200 times the capacity of a 5 GB iCloud tier with zero monthly fees. (Photo: Tony Webster via Wikimedia Commons, CC BY 2.0).*

Cloud storage is ideal for **live synchronization**—such as contacts, calendars, notes, and [FIDO2 passkeys that recover your accounts when you lose a phone](/the-noise-filter/posts/passkeys-explained-what-happens-when-you-lose-your-phone/). It is an expensive way to store cold archives of decade-old videos you view once a year.

![Synology two-bay Network Attached Storage (NAS) unit with removable hard drive trays](/the-noise-filter/images/free-cloud-storage-limits-icloud-5gb-google-15gb-guide/02-synology-nas-local-backup-bay.jpg)
*For households managing multiple terabytes of family photos and videos, a two-bay home NAS mirrors files across two physical drives on your local network. (Photo: Tony Webster via Wikimedia Commons, CC BY 2.0).*

| Storage Approach | Upfront Hardware Cost | 5-Year Subscription Cost | Best Use Case & Safety Rule |
| :--- | :--- | :--- | :--- |
| **Free Tier Only (Cleaned Quarterly)** | $0 | $0 | Keep Contacts, Passkeys, Calendars, and Mail in the cloud; export large videos quarterly |
| **50 GB – 200 GB Paid Cloud Tier** | $0 | $60 – $180 | Convenient automated phone backup for a single user or family sharing plan |
| **2 TB Paid Cloud Tier** | $0 | $600 ($9.99/mo × 60) | High ongoing cost; lock-in increases every year as library grows |
| **1 TB USB-C Portable SSD (×2 for Backup)** | ~$150 – $190 once | $0 | Direct USB-C offloading from phone/laptop; always keep a second copy (3-2-1 backup rule) |
| **2-Bay Home NAS (RAID 1 Mirror)** | ~$350 – $550 once | $0 | Whole-household private photo server; pair with one off-site drive for fire/theft protection |

### The Golden Rule of Local Offloading

Never move photos off iCloud or Google Photos onto a **single** thumb drive or external SSD without a second copy. Solid-state drives and hard drives can fail or be misplaced. If you skip paid cloud storage, copy your annual photo archive onto **two separate drives** (for example, your laptop's internal storage plus an external USB-C SSD, or two separate external drives).

---

## Sources and Verification Notes

All storage quotas, pooling rules, and inactivity policies in this guide were verified against official platform documentation:

- [Apple Support — Manage your iCloud storage (5 GB free tier and backup controls)](https://support.apple.com/en-us/108922)
- [Google Account Help — How your Google storage works (15 GB pooled quota and over-quota enforcement)](https://support.google.com/googleone/answer/9312312)
- [Microsoft Support — Microsoft storage quotas (5 GB OneDrive attachment rule and 15 GB Outlook.com limit)](https://support.microsoft.com/en-us/office/changes-to-microsoft-365-email-features-and-storage-e888d746-61e5-49e3-9bd1-94b88e9be988)
