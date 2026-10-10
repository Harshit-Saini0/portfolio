---
role: Autonomous Vehicle Research Intern
company: ENDEAVR Institute
location: College Station, TX
start: "Oct 2025"
end: "Present"
sortDate: 2026-09-10
---

I designed a low-cost autonomous vehicle perception system with 4 NVIDIA Orin Nano SBCs, 8 cameras, and a custom-fabricated enclosure. Its projected hardware cost is 50% lower than standard LiDAR-based rigs.

I deployed ensemble transformer models for multi-class object detection. Model selection, tuning, and inference optimization on edge hardware improved accuracy by 5% over open-source baselines. I'm also profiling and reducing image-processing latency in a real-time C++/Python semantic segmentation pipeline on embedded NVIDIA hardware for safety-critical perception.

### Labeling and GPU infrastructure

I built an AI image-labeling pipeline for driving data using Python, PyTorch, CUDA, and SAM3. To support larger workloads and keep long GPU runs reliable, I added mixed-precision inference, GPU-memory cleanup, resumable batches, profiling, and parallel file and visualization processing.

The pipeline completed a 1,000-image automated labeling run and exported nuImages-compatible outputs for perception-model training. I also set up and debugged the GPU perception stack across PyTorch, CUDA, Docker/udocker, OpenMMLab, and distributed multi-GPU training.

### Working across datasets

I built a Waymo TFRecord-to-nuScenes/BEVDet conversion pipeline to generate camera metadata, calibration data, LiDAR files, and BEV training inputs. I fixed camera-calibration errors and adapted a pretrained BEV model from six cameras to five for inference across datasets.

In FB-OCC, I re-enabled a 2D semantic-segmentation module, generated training masks, and fine-tuned it on Texas driving data. Adding background classes such as vegetation, buildings, sidewalk, and terrain increased label coverage from 47% to 75% and reduced ignored image area from 53% to 25%.

The model reached 0.753 mIoU across 9 classes. The seven adequately represented classes averaged 0.853 IoU. I created BEV prediction videos and validation tools to distinguish model failures from differences between datasets.

For the next phase of 3D perception work, I identified the requirements for multi-camera calibration, time synchronization, camera intrinsics and extrinsics, and pose data.
