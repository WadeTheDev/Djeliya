/** @format */
// src/utils/flip.ts

const nextFrame = () =>
  new Promise<void>((r) => requestAnimationFrame(() => r()));

const rectKey = (r: DOMRect) =>
  [
    Math.round(r.left),
    Math.round(r.top),
    Math.round(r.width),
    Math.round(r.height),
  ].join(",");

export const flipAnimate = async (
  el: HTMLElement,
  mutate: () => void,
  opts: KeyframeAnimationOptions = {
    duration: 520,
    easing: "cubic-bezier(0.87, 0, 0.13, 1)",
  }
) => {
  const first = el.getBoundingClientRect();

  // save styles
  const prevWillChange = el.style.willChange;
  const prevTransform = el.style.transform;
  const prevOrigin = el.style.transformOrigin;
  const prevVisibility = el.style.visibility;
  const prevTransition = el.style.transition;

  // stabilise
  el.style.willChange = "transform";
  el.style.transformOrigin = "top left";
  el.style.transition = "none";

  mutate();

  // cache pendant le commit (évite flash)
  el.style.visibility = "hidden";

  // attend un rect "stable" (2 frames identiques)
  let last = el.getBoundingClientRect();
  let prevKey = rectKey(last);
  let stableCount = 0;

  for (let i = 0; i < 12; i++) {
    await nextFrame();
    last = el.getBoundingClientRect();
    const k = rectKey(last);

    if (k === prevKey) stableCount += 1;
    else stableCount = 0;

    prevKey = k;
    if (stableCount >= 1) break;
  }

  const dx = first.left - last.left;
  const dy = first.top - last.top;
  const sx = first.width / last.width;
  const sy = first.height / last.height;

  const invert = `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})`;

  // applique inversion (toujours caché)
  el.style.transform = invert;

  // flush pour que l'inversion soit bien prise
  void el.getBoundingClientRect();

  // ✅ clé : on ré-affiche ET on lance l’animation DANS LA MÊME FRAME
  const anim = await new Promise<Animation>((resolve) => {
    requestAnimationFrame(() => {
      el.style.visibility = prevVisibility;

      const a = el.animate([{transform: invert}, {transform: "none"}], {
        ...opts,
        fill: "both",
      });

      resolve(a);
    });
  });

  await anim.finished.catch(() => {});

  // cleanup
  el.style.willChange = prevWillChange;
  el.style.transform = prevTransform;
  el.style.transformOrigin = prevOrigin;
  el.style.visibility = prevVisibility;
  el.style.transition = prevTransition;
};
