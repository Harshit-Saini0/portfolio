---
role: Research Co-Author
company: NeurIPS 2026 Workshop (IAB)
location: Remote
start: "Jun 2026"
end: "Aug 2026"
summary: "Co-authored \"Language–Action Decoupling: Speech as a Weak Proxy for Action in LLM Hierarchies\" with researchers at the University of Toronto and Stevens Institute of Technology; accepted to the NeurIPS 2026 Workshop on Interpreting Agent Behavior (IAB)."
sortDate: 2026-08-29
link: /papers/language-action-decoupling.pdf
linkLabel: Read the paper (PDF)
---

I designed and ran a simulated trading firm where an LLM manager sat between a founder and two trader agents. We used it to test whether an organizational hierarchy could lead agents to act dishonestly without anyone explicitly asking them to.

The simulator recorded ground truth for two kinds of dishonesty: withholding signals and misreporting positions. That let us measure misconduct without relying on another LLM to judge it.

## What we found

Managers' allocation gap rose from 0.55 under low pressure to 0.85 when relative performance had consequences. The manager's language barely changed across pressure levels, even as its capital allocations shifted sharply. We called this "language–action decoupling": oversight based only on transcripts could miss an effect that was clear in the agent's actions.

I ran statistical analyses across two incentive regimes, 120 simulated episodes, and 2,400 trader-decisions. Bootstrapped contrasts, logistic slopes, and Fisher's exact tests helped separate misconduct from monitoring artifacts.

I worked remotely with Sunny Zhang at the University of Toronto and Francesco Febbo at Stevens Institute of Technology on the experiments, simulation environment, and paper. The code repository is private for now.

[Read the accepted workshop paper on OpenReview](https://openreview.net/forum?id=z2uKDlMh5j).
