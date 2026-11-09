---
title: "SIM Swapping & Carrier Locks: Why SMS 2FA Fails and How to Freeze It"
slug: sim-swapping-sms-2fa-risks-carrier-port-out-lock-guide
pubDatetime: 2026-11-10T06:40:00+09:00
draft: false
category: online-safety
tags:
  - cybersecurity
  - privacy-controls
  - consumer-rights
ogImage: /the-noise-filter/images/sim-swapping-sms-2fa-risks-carrier-port-out-lock-guide/cover.jpg
description: Understand how SIM swap and number port-out fraud hijack SMS two-factor authentication codes, what the FCC 23-95 rules require, and how to lock your mobile carrier account in 10 minutes.
---

If your smartphone suddenly loses cellular signal in the middle of the afternoon—dropping to **"SOS Only"** or **"No Service"** while you are sitting at home—and you simultaneously receive an email stating that your mobile number or eSIM is being transferred, you are likely in the middle of a **SIM swap** or **unauthorized number port-out** attack. Within three minutes of taking over your phone number, an attacker can intercept every 6-digit SMS text code sent by your email provider, bank, or brokerage without ever touching your physical phone.

Although the US Federal Communications Commission adopted updated **SIM Swap and Port-Out Fraud Rules (FCC 23-95)** and the National Institute of Standards and Technology (**NIST SP 800-63B**) classifies SMS as a restricted authenticator, hundreds of banks, utilities, and healthcare portals still rely on text messages for password recovery. Here is how the attack works, what the new regulations actually cover, and the exact carrier settings that freeze your number before someone else can move it.

---

## Quick Filter: What Changed, What Matters, What to Do

- **What changed:** Rapid **eSIM activation** made changing phones effortless for consumers, but it also allowed scammers who compromise a carrier account login or socially engineer support staff to move a victim's phone number onto a remote device in minutes without needing a physical plastic SIM card.
- **What matters:** **SMS two-factor authentication (2FA) only proves who currently controls your phone number at the carrier switch—not who holds your physical device.** Worse, even if you enable an authenticator app on your primary email account, leaving your mobile number listed as an "SMS Account Recovery" fallback lets an attacker bypass the authenticator app entirely.
- **What to do:** Turn on three free settings today: a **Carrier Account Security PIN**, a **SIM Swap / Port-Out Lock** inside your mobile carrier app (Verizon, AT&T, or T-Mobile), and **App-Based TOTP or FIDO2 Passkeys** while deleting SMS recovery numbers from your primary email account.

---

## 1. How a SIM Swap Hijacks Accounts Without Touching Your Phone

Your 10-digit mobile phone number is not permanently burned into your smartphone hardware. Instead, your carrier maps your phone number (**MSISDN**) to the cryptographic identity of your physical **Nano-SIM card** or downloadable **eSIM profile** (**ICCID / IMSI**).

![A smartphone Nano-SIM card and tray next to a mobile handset](/the-noise-filter/images/sim-swapping-sms-2fa-risks-carrier-port-out-lock-guide/01-nano-sim-card-smartphone-tray.jpg)
*Figure 1: A removable Nano-SIM card and smartphone tray. Whether your phone uses a physical Nano-SIM or a digital eSIM, cellular calls and SMS texts route to whichever ICCID your mobile carrier currently associates with your number.*

When an attacker performs a **SIM swap** (within the same carrier) or an **unauthorized port-out** (moving your number to a different carrier), they follow a predictable four-step chain:

1. **Reconnaissance from Prior Data Breaches**: Using leaked credential databases or phishing emails, the attacker gathers your name, email address, phone number, billing address, and often the last four digits of your Social Security Number.
2. **Carrier Re-Provisioning**: The attacker logs into your online wireless account (if it lacks strong MFA), tricks a customer support agent into overriding authentication, or uses a compromised retail dealer tablet to issue an eSIM transfer or number port request.
3. **Instant Cellular Deregistration**: The moment the carrier network registers the attacker's SIM/eSIM, your physical smartphone is disconnected from the cellular tower and displays **"No Service"** or **"SOS Only"**. (Because your phone stays connected to home Wi-Fi, many victims do not notice the cellular drop for hours.)
4. **The "Forgot Password" Cascade**: The attacker enters your email address on Gmail, Outlook, Yahoo, or financial login pages, clicks **Forgot Password**, and selects **"Send a verification code to my phone via SMS"**. Every 6-digit text code lands directly on the attacker's screen.

![Architectural diagram comparing a vulnerable SMS 2FA SIM swap attack path against a hardened carrier port-out freeze and passkey defense](/the-noise-filter/images/sim-swapping-sms-2fa-risks-carrier-port-out-lock-guide/03-sim-swap-port-out-attack-vs-carrier-lock-architecture.png)
*Figure 2: How an unprotected carrier account allows an attacker to hijack SMS 2FA recovery codes versus how a carrier port-out lock and device-bound MFA stop the takeover chain.*

---

## 2. Why NIST and CISA Warn Against SMS 2FA (and Why Banks Still Use It)

As early as **NIST Special Publication 800-63B** (*Digital Identity Guidelines: Authentication and Lifecycle Management*), federal cybersecurity standards classified **PSTN (Public Switched Telephone Network) SMS and voice calls** as **restricted out-of-band authenticators**. Similarly, the **Cybersecurity and Infrastructure Security Agency (CISA)** categorizes SMS 2FA as vulnerable to interception, SIM swapping, and real-time adversary-in-the-middle (AitM) phishing proxies.

![A black YubiKey FIDO2 hardware security key](/the-noise-filter/images/sim-swapping-sms-2fa-risks-carrier-port-out-lock-guide/02-yubikey-fido2-hardware-security-key.jpg)
*Figure 3: A FIDO2 hardware security key (YubiKey). Unlike SMS text codes that travel over the telephone network, FIDO2 passkeys and hardware security keys use public-key cryptography bound to the specific website domain and physical device.*

Why, then, does your bank still text you a 6-digit code?
- **Better Than Single-Factor Passwords**: Against automated credential-stuffing bots testing millions of reused passwords, SMS 2FA blocks the vast majority of untargeted automated attacks.
- **Zero Onboarding Friction**: Every mobile customer already has SMS; banks fear that requiring third-party authenticator apps or hardware security keys would flood call centers when customers upgrade their phones.

That means **you cannot wait for every bank to drop SMS**. Instead, you must lock the phone number itself at the carrier level—and remove SMS from the accounts that *do* support stronger authentication.

---

## 3. What FCC 23-95 Changed—and Where You Still Have to Act

In late 2023, the FCC adopted its **Report and Order on SIM Swap and Port-Out Fraud (FCC 23-95)** amending Customer Proprietary Network Information (CPNI) rules. Under the FCC rules, wireless carriers are required to:
- Use secure authentication methods before redirecting a customer's phone number to a new device or carrier (prohibiting reliance on easily breached biographical data when stronger verification fails).
- Immediately notify customers via text, email, or app push notification whenever a SIM change or port-out request is initiated.
- Offer customers **free, self-service account locks** that block SIM changes and number ports until the customer explicitly unlocks the line.

However, **carrier SIM locks and port-out freezes are frequently opt-in**. If you have never opened your wireless carrier's security dashboard to turn them on, your line may only be protected by a basic 4-digit billing PIN.

---

## 4. The 10-Minute Carrier Lockout Checklist (Verizon, AT&T, T-Mobile)

Every major US carrier splits protection into two separate switches: one that blocks **moving your number to another carrier (Number Port-Out)** and one that blocks **moving your number to a new SIM/eSIM on the same carrier (SIM Swap)**. Turn on **both**, plus a dedicated **Account Security PIN**:

| Carrier | 1. Block Porting to Another Carrier | 2. Block SIM / eSIM Swaps on Your Line | 3. Dedicated Account Security PIN |
| :--- | :--- | :--- | :--- |
| **Verizon** | **Number Lock** (`My Verizon App → Account → Security → Number Lock`) | **SIM Protection** (`Security → SIM Protection` per line) | **Account PIN** (4-digit code + two-factor My Verizon login) + generate a temporary **Number Transfer PIN** only when legitimately switching carriers |
| **AT&T** | **Wireless Account Lock** (`myAT&T App → Profile → Sign-in info → Wireless Account Lock`) | Included under **Wireless Account Lock** (blocks device upgrades, SIM changes, and port-outs) | **Wireless Security Passcode** (`4 to 8 digits`, required for phone and retail support) |
| **T-Mobile** | **Account Takeover Protection** (`T-Life / T-Mobile App → Account → Profile Settings → Line Settings`) | **SIM Protection** (`Profile Settings → Privacy and Security → SIM Protection` toggle per line) | **Customer Account PIN / Passcode** (`6 to 15 digits` for telephone and store verification) |
| **MVNOs (Mint, Visible, Google Fi, US Mobile)** | Enable **Number Lock / Line Lock** in account security settings and enable **TOTP / Passkey 2FA** on the web portal | Require app/email confirmation for eSIM re-provisioning | Enable strong 2FA (Authenticator app or Passkey) on the MVNO login itself |

---

## 5. Close the Backdoor: Remove SMS Recovery from Your Primary Email

Locking your carrier account is half the defense. The second half is making sure your **primary email account** (Gmail, Apple iCloud, Microsoft Outlook, or Proton) cannot be reset via SMS:

1. **Switch Primary Email to Passkeys or an Authenticator App**: Enable a FIDO2 **Passkey**, a hardware security key (such as a YubiKey), or a time-based one-time password (**TOTP**) authenticator app (`2FAS`, `Ente Auth`, `Google Authenticator`, or `Microsoft Authenticator`).
2. **Delete Your Phone Number from "Account Recovery" (or Restrict It)**: Check your Google Account (`Security → Ways we can verify it's you → Recovery phone`) or Microsoft Account security settings. If an attacker can click *"Try another way → Text a code to my recovery phone"* to reset your password, your authenticator app is bypassed. Replace SMS recovery with **printed 10-digit backup codes** stored in a safe place and a secondary recovery email address.
3. **Know the Emergency Response Drill**: If your phone ever unexpectedly drops to **SOS Only / No Service** while you are in a normal coverage area:
   - Immediately test if cellular data works; if not, connect to Wi-Fi and check your email for any *"Your SIM card has been updated"* or *"Number transfer request"* alerts.
   - Call your carrier's fraud department from another phone immediately to reverse the unauthorized SIM swap and freeze the line.
   - Check your primary email's **Active Sessions / Connected Devices** page and revoke any unfamiliar browser sessions.

---

## Sources & Regulatory References

1. **Federal Communications Commission (FCC) — Report and Order FCC 23-95 (Protecting Consumers from SIM Swap and Port-Out Fraud)**: Official rulemaking amending CPNI and Local Number Portability rules under WC Docket No. 21-341. ([fcc.gov/document/fcc-adopts-rules-protect-consumers-sim-swap-and-port-out-fraud](https://www.fcc.gov/document/fcc-adopts-rules-protect-consumers-sim-swap-and-port-out-fraud))
2. **National Institute of Standards and Technology (NIST) — Special Publication 800-63B (Digital Identity Guidelines: Authentication and Lifecycle Management)**: Section 5.1.3.2 on restricted out-of-band authenticators using the public switched telephone network (SMS/voice). ([pages.nist.gov/800-63-3/sp800-63b.html](https://pages.nist.gov/800-63-3/sp800-63b.html))
3. **Cybersecurity and Infrastructure Security Agency (CISA) — Implementing Phishing-Resistant MFA**: Official federal technical guidance comparing FIDO2/WebAuthn cryptography against phishable and interceptable OTP/SMS channels. ([cisa.gov/MFA](https://www.cisa.gov/MFA))
4. **Federal Trade Commission (FTC) — Consumer Advice on SIM Swap Scams**: Official consumer guidance on carrier account PINs, number port freezes, and non-SMS multi-factor authentication. ([consumer.ftc.gov](https://consumer.ftc.gov/))
