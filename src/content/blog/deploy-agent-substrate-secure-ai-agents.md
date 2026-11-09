---
title: "How to Deploy Agent Substrate for Secure AI Agents"
description: "Step-by-step guide to installing Agent Substrate 1.0 on Kubernetes for high-density, gVisor-isolated AI agent workloads with sub-500ms resume."
pubDate: 2026-11-09T14:00:00
heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["developer", "ai", "tutorials", "google"]
noindex: false
---

Google donated Agent Substrate, gVisor, and OpenRL to the CNCF Sandbox on 5 November 2026 and shipped Agent Substrate 1.0 as generally available on GKE. The runtime lets you run millions of stateful AI agents on Kubernetes with strong isolation and near-zero idle cost.

Agents spend most of their time waiting for model responses, tool results, or human input. Standard pods waste resources during those pauses. Agent Substrate decouples state from compute so idle agents snapshot to storage and resume in under 500 milliseconds.

![Server racks in a data center aisle](https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80)

## Why Agent Substrate matters for developers

Kubernetes was built for long-running services. Agents are different. They burst for a few seconds, then sit idle. Keeping a dedicated pod for each agent becomes expensive at scale. Sharing a host kernel also exposes risk when agents execute untrusted generated code or install packages.

Agent Substrate solves both problems. It maps many Actors (agent sessions) onto a small pool of warm Workers (pre-started pods). When an Actor goes idle, its filesystem, memory, and environment snapshot to object storage. The Worker returns to the pool. On the next request the Actor restores onto any free Worker.

Google reports 10x density versus standard containers and more than 500 suspend/resume activations per second in testing. The project reached more than 100 contributors since public development started in May 2026. Early users include Nous Research for Hermes Enterprise and the CNCF project kagent.

The same design principles appear in Google’s managed Agent Compute Engine, covered in our guide to [secure microVMs for AI agents](/blog/agent-compute-engine-secure-microvms-guide/). Agent Substrate is the open-source, Kubernetes-native version you can run today on any cluster or as a managed capability on GKE.

## Core concepts: Actors, Workers, and Gateways

An Actor is one agent session. It owns its own filesystem, environment variables, memory state, and network rules. It is the logical unit that survives suspend and resume.

A Worker is a pre-warmed Kubernetes Pod from a WorkerPool. It runs a sandbox runtime—typically gVisor—and hosts whichever Actor is currently active. Workers are interchangeable.

Gateways sit outside the sandbox. They inject short-lived credentials and enforce egress policies based on the Actor’s identity. Secrets never enter the agent environment, so a compromised prompt cannot exfiltrate long-lived keys.

You define an ActorTemplate that describes the sandbox type, image, volumes, and lifecycle. The control plane then creates and manages individual Actors from that template.

## Step-by-step: install Agent Substrate on GKE

The open-source project runs on any recent Kubernetes cluster. Google provides an optimized installer for GKE Standard clusters.

1. Prepare a GKE Standard cluster. Avoid enabling GKE Sandbox on the node pools that will run Agent Substrate Workers; the installer supplies its own gVisor runtime.

2. Run the installer. For a basic deployment:
```bash
curl -sSL https://raw.githubusercontent.com/ai-on-gke/substrate-gke/main/install.sh | bash
```
Add `--demo` to also start a sample workload.

3. Follow the prompts for project, cluster, storage, and ingress settings. The script creates the necessary Custom Resource Definitions, controllers, and a WorkerPool.

4. Install the kubectl plugin so you can manage Actors:
```bash
git clone --depth 1 --branch v1.0.0 https://github.com/agent-substrate/substrate.git
cd substrate
go install ./cmd/kubectl-ate
```

5. Create an ActorTemplate and an Actor. A minimal example looks like this:
```yaml
apiVersion: substrate.agent.dev/v1alpha1
kind: ActorTemplate
metadata:
  name: coding-agent
spec:
  sandbox: gvisor
  image: your-agent-image:latest
  resources:
    cpu: "1"
    memory: "2Gi"
```
Then request an Actor instance through the API or kubectl ate.

Official docs live at ate.dev and the GitHub repository agent-substrate/substrate. GKE-specific guidance is in the Google Cloud documentation under GKE AI/ML.

## Pairing with gVisor for isolation

Standard containers share the host kernel. An agent that runs unreviewed code can attempt container escapes. gVisor is Google’s open-source application kernel written in Go. It intercepts system calls in user space so the agent never talks directly to the host kernel.

Agent Substrate ships with gVisor support out of the box. You can also choose Cloud Hypervisor microVMs when a workload needs fuller Linux compatibility or hardware isolation. Both options support checkpoint/restore, which is what enables the fast suspend/resume cycle.

Google donated gVisor to the CNCF at the same time as Agent Substrate. The project already sees production use at Anthropic, OpenAI, Modal, Snowflake, and large Chinese cloud providers.

![Close-up of computer hardware and circuit boards](https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80)

## Practical tips for production use

Start with a small WorkerPool and measure resume latency under your real agent traffic. Sub-500 ms is the published target; your numbers depend on snapshot size and storage performance.

Keep the agent harness (the part that calls the model and decides the next tool) outside the sandbox. Only the execution environment runs as an Actor. This matches the security model used in Agent Compute Engine.

Use the egress gateway for all outbound calls. Define policies that limit which external APIs and domains each ActorTemplate may reach.

Monitor activation rate. The density advantage appears when most agents are idle most of the time. If your agents stay busy continuously, standard pods may still be simpler.

Test snapshot/restore with your actual filesystem state. Large working directories or in-memory caches increase resume time.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/ZEzkCFJkzjY"
    title="Agent Substrate OSS Launch Demo"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## OpenRL and the broader stack

The same November announcement included OpenRL, a Kubernetes-native system for coordinating reinforcement-learning loops and evaluation sandboxes. Together the three projects form an open stack for agent training and serving: gVisor for isolation, Agent Substrate for dense stateful execution, and OpenRL for training orchestration.

All three are now CNCF Sandbox projects. You can follow progress on the CNCF Slack channels and at KubeCon sessions in Salt Lake City this week.

## Conclusion

Agent Substrate 1.0 gives developers a practical way to run stateful AI agents on Kubernetes without paying for idle pods or accepting weak isolation. The open-source runtime is ready on any cluster today and generally available as a managed option on GKE. Pair it with gVisor, keep credentials outside the sandbox, and design your ActorTemplates around the burst-and-wait pattern that defines real agent workloads.

Start with the official installer and the launch demo video above. The same principles that power Google’s internal agents are now available for any team that already runs Kubernetes.

## Sources

- Google Cloud Blog: Open infrastructure for autonomous agents comes to CNCF (5 November 2026)
- Google Open Source Blog: Sandboxing Untrusted AI Agents at Scale (5 November 2026)
- Agent Substrate GitHub repository and documentation at ate.dev
- Google Cloud documentation: About Agent Substrate on GKE and Install Agent Substrate on GKE
- YouTube: Agent Substrate OSS Launch Demo
