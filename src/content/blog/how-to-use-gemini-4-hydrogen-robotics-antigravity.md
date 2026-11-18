---
title: "How to Use Gemini 4 Hydrogen Robotics Plugin"
description: "Step-by-step guide to install and use the Gemini 4 Hydrogen Robotics plugin in Google Antigravity for robot bring-up, MuJoCo simulation, and control."
pubDate: 2026-11-18T19:36:00
heroImage: "https://images.unsplash.com/photo-1532186773960-85649e5cb70b?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "gemini", "google", "developer"]
noindex: false
---

Google released the Robotics plugin for Google Antigravity on November 17, 2026, paired with Gemini 4 Hydrogen. The plugin turns Antigravity into a workbench for hardware onboarding, MuJoCo simulation, and closed-loop robot control. Developers can move from an unboxed arm connected by USB to a working application in an afternoon.

Hydrogen brings strong spatial and embodied reasoning to a faster, lower-cost model. On the Artificial Analysis Robotics 0.1 benchmark it scores 58 while controlling a real 6-axis arm through eight tabletop tasks such as pouring a drink or packing blocks. The score is similar to Gemini 4 Argon at a lower cost per token.

## What the Robotics plugin includes

The plugin packages common robotics tasks into skills that Gemini can run for you:

- Robot bring-up installs drivers, discovers cameras, calibrates the arm, and checks safe motion from a USB cable.
- MuJoCo in Antigravity builds and previews simulated scenes and assets from text, links, documents, or photos.
- Perception and control finds objects, plans grasps, and runs closed-loop control.
- Application building generates the controller, simulation, and full real-to-sim-to-real workflow.

Supported arms mentioned in the announcement include the I2RT YAM, LeRobot SO-ARM101 (also called SO-101), and Franka FR3 Duo.

![Robotic arm positioned above a circuit board in a laboratory](https://images.unsplash.com/photo-1532186773960-85649e5cb70b?auto=format&fit=crop&w=800&q=80)

## Access requirements

Google Antigravity with the Robotics plugin is available to paid Google AI Pro or Ultra subscribers. Select the model `gemini-4-hydrogen` inside Antigravity. Hydrogen is also available in the Gemini API and Google AI Studio for spatial prompts and live camera streams.

If you already use Hydrogen for Android or Firebase work, the same model identifier applies. See our guide on [adding Gemini 4 Hydrogen to Android with Firebase AI Logic](/blog/add-gemini-4-hydrogen-android-firebase-ai-logic/) for related setup.

## Install the Robotics plugin

1. Open Google Antigravity and confirm you are signed in with a paid Google AI Pro or Ultra account.
2. Set the model selector to Gemini 4 Hydrogen (`gemini-4-hydrogen`).
3. Go to Customizations.
4. Search for Robotics on the Build With Google shelf.
5. Install the plugin.

After installation the skills become available for natural-language prompts.

## Bring up a robot arm from USB

Plug a supported arm (for example an I2RT YAM or SO-ARM101) and a depth camera into your laptop. Then prompt:

"Bring up my SO-101 arm and make it wave."

The plugin installs drivers, locates the camera, calibrates the arm, and runs a safe-motion check. Google reports that an I2RT YAM arm reached a calibrated state ready for tasks in about 10 minutes. Similar flows work for the SO-ARM101 and FR3 Duo.

Once live, try simple prompts:

- Use the arm to make some fun dance moves.
- Pick up a pen on the table.
- Stack snacks on top of each other.

Always verify the workspace is clear and that emergency stop procedures are known before any motion.

## Build and test in MuJoCo simulation

After the arm is live, create a simulation before risking hardware. MuJoCo runs inside Antigravity. You can describe a scene, paste a product link, upload a photo of your workspace, or reference a document.

Example prompt:

"Create a MuJoCo scene with an SO-101 stacking and unstacking red, green, and blue blocks. Include an interactive viewer."

The agent sets up the environment, installs dependencies if needed, generates the scene code, and opens a live 3D viewer. You can then adjust shapes, positions, or physics through chat ("vibe sim") and test reach and grasp trajectories in simulation.

![Robot arm operating in a factory setting](https://images.unsplash.com/photo-1752614671052-92e18f534db1?auto=format&fit=crop&w=800&q=80)

## Move from simulation to real application

Once the policy works in simulation, deploy it to hardware. The plugin supports the same controller code in both environments.

Google demonstrated three end-to-end examples:

- Snack-sorting conveyor: from a whiteboard sketch plus scene photos, Hydrogen built the MuJoCo cell, validated grasping across runs, and deployed to a real arm that sorts snacks from a moving belt. The full loop took about one hour.
- Soap store: a web storefront connected to two YAM Pro arms that set out a bin, pick ordered bars, and retrieve a printed thank-you note.
- Chess: an FR3 Duo that simulates a board and plays against itself or a human after a few prompts.

For a new project start with:

"Build a MuJoCo simulation of a conveyor with mixed snacks and an arm that sorts them into bins. Validate the grasp policy, then prepare the same controller for the real SO-101 arm."

Iterate in natural language when gripper force or sorting rules need adjustment.

## Useful prompt patterns

- Bring-up: "Install drivers for my I2RT YAM, discover the depth camera, calibrate, and run a safe wave."
- Simulation asset: "Create a high-quality MuJoCo model of this product from the link and photo, then preview it."
- Perception: "Locate the red cube in the camera view, plan a grasp, and place it on the target pad."
- Full app: "From the whiteboard sketch and workspace photos, build the real-to-sim-to-real snack sorter and iterate until it succeeds five times in a row."

Keep prompts specific about safety limits, joint ranges, and expected objects.

## Safety notes

Robot motion can cause injury or damage. 

- Confirm the arm’s emergency stop works before any autonomous run.
- Start with simulation and slow speeds.
- Keep the workspace clear of people and fragile objects.
- Review generated code before enabling live control.
- Follow the hardware manufacturer’s safety guidelines.

The plugin and Hydrogen accelerate development but do not remove the need for standard robotics safety practices.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/7sKHiuE7J-Y"
    title="Building low-latency remote robotics with Gemini"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Next steps and resources

Select Gemini 4 Hydrogen in Antigravity, install the Robotics plugin, and try the bring-up prompt with any supported arm you have. If you lack hardware, begin with MuJoCo scenes and later transfer the controller.

Official announcement: [Gemini 4 Hydrogen: a faster model for general purpose robotics](https://developers.googleblog.com/gemini-hydrogen-for-robotics/).

Share projects on the plugin’s GitHub discussions page. Hydrogen is also available via the Gemini API (`gemini-4-hydrogen`) for custom integrations outside Antigravity.

The combination of a fast embodied model and a ready workbench lowers the barrier from unboxed hardware to a working robot application. Start with a clear prompt, validate in simulation, and only then enable motion on the real arm.
