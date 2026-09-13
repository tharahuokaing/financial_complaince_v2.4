# financial_complaince_v2.4
# 🛡️ Financial Compliance Audit Registry Engine

[![Version](https://img.shields.io/badge/version-2.4.0-blue.svg)](https://github.com/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://github.com/)
[![Network](https://img.shields.io/badge/network-Bakong%20%7C%20FAST%20%7C%20RTGS-orange.svg)](https://github.com/)

A high-performance real-time Anti-Money Laundering (AML), Know Your Customer (KYC), and transaction velocity monitoring engine designed for interbank settlement clearing and digital payment gateways.

## 📌 Overview

The **Financial Compliance Audit Registry Engine** inspects real-time transaction streams passing through interbank gateways (Bakong Transfer Sweep, RTGS, FAST Clearing Nodes, and ISO 20022 Gateways). 

It dynamically evaluates incoming transactions against configurable regulatory policies (such as velocity thresholds, structured layering, OFAC SDN scans, and PEP monitoring) and updates the global `AUDIT_REGISTRY`.

## 🚀 Key Features

* **Real-time AML & Fraud Monitoring:** Zero-latency transaction scanning across all interbank settlement nodes.
* **Velocity Threshold Breach Detection:** Automatically flags single or cumulative transaction volumes exceeding risk limits (e.g., transfers $> \$50,000$).
* **Micro-Transaction & Layering Identification:** Isolates suspicious low-value repetitive transactions (e.g., $\$1.00$ probe routes across pending accounts).
* **Sanctions & PEP Cross-Referencing:** Dynamic background checks against OFAC SDN and Politically Exposed Person (PEP) databases.
* **Bilingual Public Notification Module:** Built-in web client featuring English and Khmer (ភាសាខ្មែរ) UI with native Web Speech API AI reading capabilities.

## 📂 Project Structure
├── index.html          # Public announcement dashboard & UI shell
├── style.css           # Dark-themed UI stylesheet
├── script.js          # Client-side logic & Web Speech API TTS Engine
├── registry.js         # Core data registries (TRANSACTION_REGISTRY & AUDIT_REGISTRY)
└── README.md           # Repository documentation
