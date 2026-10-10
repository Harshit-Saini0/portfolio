---
title: FPGA Audio Effects Processor
summary: An Artix-7 FPGA audio-effects processor I'm building for 48 kHz, 24-bit audio, with delay presets and fixed-point filtering.
date: 2026-09-01
kind: embedded hardware
---

I've been working on this processor since September 2026, using an Artix-7 FPGA, Verilog HDL, I²S, SPI, and fixed-point DSP.

## In progress

I'm designing it for 48 kHz, 24-bit I²S audio, with selectable delays of 50 ms, 150 ms, and 300 ms. I'm implementing a block-RAM circular buffer and a fixed-point IIR low-pass filter, along with SPI-based microcontroller controls and simulation-based verification.

## Next steps

I plan to design and assemble a custom analog interface PCB, then test signal levels, frequency response, and clipping on the bench.
