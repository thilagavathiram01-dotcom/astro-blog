---
title: "How to Explore the Male Fruit Fly Connectome in 3D"
description: "Learn how to open the male fruit fly connectome in Neuroglancer, read 166,000 neurons, and compare it with the earlier female map."
pubDate: 2026-10-05T18:00:00
heroImage: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai", "google", "tutorials", "how-to"]
noindex: false
---

On 3 September 2026, Google Research published a complete map of an adult male fruit fly brain and central nervous system. The map covers more than 166,000 neurons and 125 million synaptic connections. Google calls it the largest brain map by number of neurons to date.

You do not need a lab account to look at it. The reconstruction is public in Neuroglancer, the open-source 3D viewer Google built for huge image volumes. This guide shows what the map contains, where to open it, and how to read a neuron without inventing a circuit story the paper does not support.

## What the map actually includes

The project is a connectome: a wiring diagram of neurons and the synapses between them. Google Research scientists Michał Januszewski and Viren Jain describe it in the 3 September post, [A connectomics milestone](https://research.google/blog/a-connectomics-milestone-mapping-the-complete-male-fruit-fly-brain/). The work is also published in Cell as “Sexual dimorphism in the complete connectome of the Drosophila male central nervous system.”

Partners include HHMI Janelia Research Campus, a Cambridge, U.K. team, and other collaborators. Janelia experts annotated and proofread the male fly volume. That human check matters. Automated tracing finds cells. Proofreading is what makes a public map safe to cite.

The volume is not brain-only. It includes the ventral nerve cord, the structure Google compares to a spinal cord. That lets researchers follow a path from sensory input in the head toward motor output in the body. Google’s visual essay on [blog.google](https://blog.google/innovation-and-ai/technology/research/male-fruit-fly-brain-map/) says the central nervous system holds 11,691 neuron types.

The same post says this male map builds on an earlier complete female fruit fly brain map. One example neuron in the male has two extra projections compared with the matching cell in the female. That is a structural difference the reconstruction can show. It is not, by itself, a full explanation of male courtship or flight.

![Researcher at a microscope beside lab monitors](https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80)

## Open the viewer from the source posts

Start from the official write-ups, not a random mirror.

1. Open the [Google Research connectomics post](https://research.google/blog/a-connectomics-milestone-mapping-the-complete-male-fruit-fly-brain/).
2. Use the Neuroglancer link in that post to view, explore, or download the dataset. Neuroglancer itself is the open-source project at [github.com/google/neuroglancer](https://github.com/google/neuroglancer).
3. Keep the [blog.google visual essay](https://blog.google/innovation-and-ai/technology/research/male-fruit-fly-brain-map/) open in another tab. Its captions name the regions in the public images: central brain, optic lobes, and ventral nerve cord.
4. If the viewer is slow, zoom out first. The dataset is a stitched 3D volume built from millions of thin-section images. Loading every mesh at once will stall a laptop.

A desktop browser with WebGL is the practical setup. Neuroglancer was built for WebGL so researchers can reslice a volume and inspect meshes without installing a lab stack.

## Read the colors before you interpret a cell

Google’s figure captions use a simple region key. Central brain neurons are shown in green, optic lobes in purple, and the ventral nerve cord in blue. Treat that as a legend for those images, not as a biological stain you will see in every layer of the raw electron microscopy.

Use this order when you open a view:

1. Find the optic lobes. Fruit flies do most sensing with organs on the head, including large compound eyes. The optic lobes are the visual processing bulk beside the central brain.
2. Move into the central brain. This is where many interneurons sit between sensory input and motor commands.
3. Follow the thick nerve cord into the ventral nerve cord. Motor neurons here reach muscles that move legs and wings.
4. Select one reconstructed neuron and note where its branches start and end. A branch that stays in the nerve cord is not the same kind of cell as one that climbs toward the brain.
5. Write down the neuron ID shown in the viewer before you screenshot. A picture without an ID is hard to find again.

The Google Research video below walks through why the team built this map and a second brain map with partners. It is the right orientation before you click around the viewer.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/HD9cDLgSe-o"
    title="How we built two new brain maps using Google AI"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Compare male and female cells without overclaiming

The useful comparison is structural. Google shows a male neuron in green and the previously mapped female neuron in magenta, with two additional projections on the male cell. That is the level of claim the public post supports.

A careful pass looks like this:

1. Pick the example pair from the Research post rather than a random cell.
2. Check whether both meshes are from proofread volumes. The male connectome was proofread at Janelia. The female map is the earlier complete brain release, not a second copy of this 2026 volume.
3. Count branches you can see. Do not infer a behavior from an extra projection.
4. If you need the method, open the Cell paper linked from the Research post. The blog summaries do not replace the methods section.

If you already use Google science datasets in a browser, the same habit applies here as in our guide to [querying AlphaGenome Atlas variant scores](/blog/query-alphagenome-atlas-variant-scores/). Start from the official viewer, keep the ID, and separate a prediction or reconstruction from a lab result.

![Scientist reviewing data on a computer in a lab](https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80)

## What the AI step did, and what it did not

Google’s imaging partners cut the specimen into thin sections, imaged each slice, and used computers and AI to turn millions of 2D images into 3D neuron shapes. That automation is why a volume this size could be finished. It does not mean every branch was accepted unchecked.

Janelia’s proofreading pass is the quality gate described in the Research post. If you are writing a citation, say “proofread connectome” only for the male volume Google and Janelia describe that way. Do not extend that label to a clip, a social post, or a viewer layer you have not checked.

Also keep the scale honest. More than 166,000 neurons makes this the largest map by neuron count in Google’s account. It is still a fruit fly. Google frames the work as a model-organism resource, next to ongoing maps of fish and mice, not as a human wiring diagram.

## Tips before you share a screenshot

- Name the source. “Male Drosophila central nervous system connectome, Google Research and HHMI Janelia, 2026” is specific. “AI brain map” is not.
- Include the neuron ID and the region colors only if they match the figure legend you used.
- Do not crop out the scale or the view angle. Front-oblique and top-down views in the Research post are not the same slice.
- Skip medical analogies. A ventral nerve cord is analogous to a spinal cord in the post’s wording. It is not a human spinal cord.
- If a viewer fails to load, retry from the Research post link. Third-party reposts often drop the dataset URL.

## Conclusion

The male fruit fly connectome is a public 3D dataset, not a closed demo. Open it from the Google Research post, use Neuroglancer to move from optic lobe to central brain to ventral nerve cord, and keep neuron IDs with any notes you save. The numbers to remember are the ones Google published: more than 166,000 neurons, 125 million synapses, and 11,691 neuron types in the central nervous system. Comparison with the female map is valid for structure. Behavior still needs experiments the viewer cannot run.

## Sources

- Google Research, “A connectomics milestone: Mapping the complete male fruit fly brain,” 3 September 2026: https://research.google/blog/a-connectomics-milestone-mapping-the-complete-male-fruit-fly-brain/
- Google, “5 amazing visuals show how the male fruit fly’s brain map is advancing neuroscience,” 3 September 2026, updated 21 September 2026: https://blog.google/innovation-and-ai/technology/research/male-fruit-fly-brain-map/
- Google Research, “How we built two new brain maps using Google AI,” YouTube, 3 September 2026: https://www.youtube.com/watch?v=HD9cDLgSe-o
- Neuroglancer source repository: https://github.com/google/neuroglancer
