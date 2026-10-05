---
title: FPGA Audio Effects Processor
summary: An in-progress Artix-7 FPGA audio-effects processor for 48 kHz, 24-bit audio, with selectable delay presets and fixed-point filtering.
date: 2026-09-01
kind: embedded hardware
---

September 2026 – Present. Built around Artix-7 FPGA, Verilog HDL, I²S, SPI, and fixed-point DSP.

## In progress

- Designing an Artix-7 FPGA audio-effects processor for 48 kHz, 24-bit I²S audio with 50 ms, 150 ms, and 300 ms delay presets.
- Implementing a block-RAM circular buffer and fixed-point IIR low-pass filter, with SPI-based microcontroller controls and simulation-based verification.

## Future work

- Future work: custom analog interface PCB, assembly, and bench validation of signal levels, frequency response, and clipping.
