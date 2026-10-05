---
role: Autonomous Vehicle Research Intern
company: ENDEAVR Institute
location: College Station, TX
start: "Oct 2025"
end: "Present"
sortDate: 2026-09-10
---

- Architected a low-cost autonomous vehicle perception system integrating 4 NVIDIA Orin Nano SBCs, 8 cameras, and a custom-fabricated enclosure, reducing projected hardware costs by 50% vs. standard LiDAR-based rigs.
- Deployed ensemble transformer models for multi-class object detection, improving accuracy by 5% over open-source baselines through model selection, tuning, and inference optimization on edge hardware.
- Optimizing a real-time semantic segmentation pipeline in C++/Python on embedded NVIDIA hardware, profiling and reducing image processing latency for safety-critical perception tasks.

### Labeling and GPU infrastructure

- Built a scalable AI image-labeling pipeline for driving data using Python, PyTorch, CUDA, and SAM3.
- Added mixed-precision inference, GPU-memory cleanup, resumable batch processing, profiling, and parallel file/visualization processing to make long GPU runs reliable.
- Completed a 1,000-image automated labeling run and exported outputs in nuImages-compatible formats for perception-model training.
- Set up and debugged a full GPU perception stack across PyTorch, CUDA, Docker/udocker, OpenMMLab, and distributed multi-GPU training.

### Cross-dataset perception and validation

- Built a Waymo TFRecord-to-nuScenes/BEVDet conversion pipeline that generated camera metadata, calibration data, LiDAR files, and BEV training inputs.
- Fixed camera-calibration errors and adapted a pretrained BEV model from six cameras to five cameras for cross-dataset inference.
- Re-enabled a 2D semantic-segmentation module in FB-OCC, generated training masks, and fine-tuned it on Texas driving data.
- Improved label coverage from 47% to 75% and reduced ignored image area from 53% to 25% by adding background classes such as vegetation, buildings, sidewalk, and terrain.
- Achieved 0.753 mIoU across 9 classes; the seven adequately represented classes averaged 0.853 IoU.
- Created BEV prediction videos and validation tooling to distinguish model failures from cross-dataset domain shift.
- Identified multi-camera calibration, time synchronization, intrinsics/extrinsics, and pose data as the requirements for the next phase of 3D perception work.
