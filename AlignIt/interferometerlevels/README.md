# Michelson Interferometer Teaching Level Sequence
## interferometerlevels/ Level Design Document

---

## Overview

This document describes the pedagogical structure and technical implementation 
of the new Michelson interferometer teaching sequence for AlignIt. The goal is 
to teach interferometer alignment in a progressive, scaffolded manner that builds 
both practical skills and conceptual understanding.

---

## Learning Objectives

### Primary Objectives
1. **Step-by-step construction** - Understanding how each component contributes to the system
2. **Retroreflection principle** - Mastering mirror alignment for beam return
3. **Beam overlap technique** - Achieving precise coaxial alignment
4. **Divergent-light calibration** - Finding absolute zero-OPD position (key innovation)
5. **Fringe pattern interpretation** - Reading circular vs. straight fringes

### Secondary Objectives
- Understanding degrees of freedom and constrained adjustment
- Appreciating precision requirements in optical alignment
- Connecting geometric optics (ray paths) with wave optics (interference)
- Historical context: Michelson's Nobel Prize and modern applications

---

## Level Structure

### Current File: `lvl_1.json`
**Title:** "Michelson Interferometer - Part 1: Building & Basic Alignment"  
**Total Tasks:** 8 + completion message  
**Estimated Play Time:** 15-25 minutes  
**Difficulty Progression:** Moderate (±5° rotation limits initially, narrowing to ±1°)

---

## Task Breakdown

| Task | Component Added | Key Skill | Question Focus | Score |
|------|----------------|-----------|----------------|-------|
| 1 | Laser (pre-placed) | Beam direction control | Optical axis concept | 100 |
| 2 | Beamsplitter | 45° orientation | Function of beamsplitter | 150 |
| 3 | Mirror 1 | Retroreflection alignment | Retroreflector behavior | 200 |
| 4 | Mirror 2 | Parallel beam emergence | Why parallelism matters | 200 |
| 5 | Diverging Lens | Lateral insertion & alignment | Purpose of divergence | 200 |
| 6 | Screen | Tip/tilt fine-tuning | Beam superposition | 250 |
| 7 | (Adjustment) | Angular precision | Circular fringe meaning | 300 |
| 8 | (Scanning) | Z-axis calibration | Zero-OPD detection | 400 |
| **Total** | | | | **1800** |

---

## Technical Implementation Details

### Position Limits Strategy

```
Component         X Range        Y Range        Z Range        Rotation Limits
--------------   ------------   ------------   -----------    -----------------
Laser            Fixed          Fixed          Fixed          Active xyz
Beamsplitter     [-3, -1]       [-3, -1]       N/A            Full XYZxyz
Mirror 1         [-3, -1]       [0, 2]         Free           x,y: ±5°
Mirror 2 (T4)    [-5, -3]       [-3, -1]       [0.8, 1.2]     x,y: ±10°
Mirror 2 (T7)    Fixed          Fixed          Fixed          x,y: ±1°
Screen           Fixed          Fixed          Fixed          None
Lens             [-4, -2]       [-5, -3]       Free           Full XYZxyz
```

**Rationale:**
- Prevent "bypassing" by moving components outside expected region
- Start generous (±5-10°), narrow progressively (±1°) for fine tuning
- Lock irrelevant DOFs to focus user attention on current skill

### Solution Hints (`sol` tag)

Every task includes a `sol` object providing the correct configuration:
```json
"sol": {
    "name": "Mirror 2",
    "position": [-4, -2],
    "rotation": [0, 0, 90]
}
```

**Purpose:** Users can request hints if stuck, revealing target values.  
**Implementation Note:** This requires extending the UI to display `sol` values when requested (new feature).

### Question Format

All tasks use the question/answers system already implemented in AlignIt:
```json
"question": {
    "en": "Why must both beams emerge parallel from the beamsplitter?"
},
"answers": [
    { "en": "Parallel beams can overlap perfectly and create stable interference patterns" },
    { "en": "It makes the setup look more symmetrical" },
    { "en": "Parallel beams travel faster" }
]
```

**First answer is always correct** (standard convention).  
Users select one answer; correct selection progresses to next task.

### Success Criteria

Different metrics used per task:
- **Task 1-4:** `{ "Num": 1 }` - Just verify beam exists at target
- **Task 6:** `{ "PosX": 0.08, "PosY": 0.08 }` - Overlap tolerance
- **Task 7:** `{ "Curv": 0.01, "RelAng": 0.01 }` - Perfect circular fringes
- **Task 8:** `{ "PosZ": 0.02 }` - Must hit exact Z position

---

## Narration Files

All narration scripts stored in `narrations/` subdirectory:

| File | Task | Length (est.) | Content |
|------|------|---------------|---------|
| `lvl1_t1_intro.txt` | Task 1 | 1:30 | Welcome, laser alignment instructions |
| `lvl1_t2_beamsplitter.txt` | Task 2 | 2:00 | Beamsplitter function, 45° placement |
| `lvl1_t3_mirror1.txt` | Task 3 | 2:30 | Retroreflection concept, alignment tips |
| `lvl1_t4_mirror2.txt` | Task 4 | 2:30 | Second arm geometry, parallelism requirement |
| `lvl1_t5_diverging_lens.txt` | Task 5 | 3:00 | Divergence purpose, zero-OPD explanation |
| `lvl1_t6_overlap.txt` | Task 6 | 2:00 | Beam superposition, overlap technique |
| `lvl1_t7_circular_fringes.txt` | Task 7 | 3:00 | Haidinger fringes, angular precision |
| `lvl1_t8_divergent_calibration.txt` | Task 8 | 4:00 | Calibration technique, real-world applications |
| `lvl1_final.txt` | Completion | 3:30 | Summary, history, modern uses |

**Total narration time:** ~22 minutes of audio content

**Next Step:** Convert these text scripts to audio files (.m4a or .mp3 format)

---

## Geometric Layout

```
                     Y
                     ↑
                     │
        Mirror 1     │     (no component)
           ●         │
         [-2,1]      │
                     │
                     │
←────────────────────┼────────────────────→ X
   Laser     BS      │      Screen
      ● ──── ● ──────┼───────────●
    [-2,-7] [-2,-2] │        [2,-2]
         ┌──┴──┐    │
         │Lens │    │
         │[-2,-5]   │
         └─────┘    │
                    Mirror 2
                        ●
                      [-4,-2]
```

**Arm Lengths:**
- Vertical arm (Y-direction): 3 units to Mirror 1
- Horizontal arm (X-direction): 2 units to Mirror 2
- These are approximately equal for initial zero-OPD condition

**Units:** 1 unit ≈ 5 cm in real space (per AlignIt convention)

---

## Required Game Engine Changes

### New Feature Needed: Display `sol` Tag

Currently, solution hints exist in level JSON but aren't displayed to users.  
**Suggestion:** Add a "Hint" button to the panel that shows the `sol` values 
for the current task when clicked.

**Implementation sketch:**
1. Check if `global_current_task_step.sol` exists
2. If yes, display formatted text showing target position/rotation
3. Optionally animate visual guide (ghost component at target location)

### Optional Enhancement: Component Solved State

The suggestion to add a visual indicator when optical components are properly 
illuminated/passed by laser beam would improve feedback:
- Green glow on beamsplitter when beam passes through center
- Green highlight on mirrors when correctly retroreflecting
- This helps users know they're on the right track before completing the task

---

## Future Levels in Sequence

### Level 2: Fringe Analysis & Wavelength Measurement
- Already have interferometer aligned
- Scan mirror and count fringes
- Calculate wavelength from known distance
- Introduce measurement uncertainty

### Level 3: White-Light Interferometry
- Replace laser with broadband source
- Search for colored fringe packet
- Measure thickness of glass plate
- Demonstrate coherence length concept

### Level 4: Mach-Zehnder Interferometer
- Different beam path geometry
- Sample insertion capability
- Phase shift measurements
- Comparison with Michelson design

---

## Testing Checklist

Before final release, verify:

- [ ] All components load correctly in game engine
- [ ] Position/rotation limits prevent cheating
- [ ] Questions advance properly on correct answer
- [ ] `sol` hint system displays (if implemented)
- [ ] Narration audio plays smoothly
- [ ] Premium interference visible when password entered
- [ ] Divergent light actually makes fringes disappear off zero-OPD
- [ ] Success criteria trigger at appropriate tolerances
- [ ] Score accumulates correctly across tasks
- [ ] No script loading errors in console

---

## Translation Priority Order

**Phase 1:** English (current)  
**Phase 2:** German (highest priority - original developer language)  
**Phase 3:** Norwegian (existing in other levels)  

**Note:** All instructional text currently in `{ "en": "..." }` format for easy translation addition.

---

## Credits & Attribution

**Level Design:** OpenCode AI assistant + Rainer Heintzmann (guidance)  
**Music:** Forest birds recording from Pixabay (CC0 license)  
**Narration voice:** TBD (Rainer Heintzmann or professional voice actor)  
**Historical facts:** Standard physics references (Nobel Prize archives, LIGO documentation)

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-06-13 | Initial complete level design with 8 tasks |

---

## Contact & Feedback

For questions about this level design:  
**Developer:** Rainer Heintzmann (rainer.heintzmann@nanoimaging.de)  
**AI Assistant Documentation:** See AGENTS.md in main project root

---

*Last updated: June 13, 2026*
