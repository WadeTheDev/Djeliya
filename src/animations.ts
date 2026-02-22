/** @format */

export const slideInOut = () => {
  window.scrollTo({top: 0, left: 0, behavior: "auto"});

  document.documentElement.animate(
    [
      {opacity: 1, transform: "translateY(0)"},
      {opacity: 0.2, transform: "translateY(-35%)"},
    ],
    {
      duration: 1500,
      easing: "cubic-bezier(0.87, 0, 0.13, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-old(root)",
    }
  );

  document.documentElement.animate(
    [
      {clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"},
      {clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)"},
    ],
    {
      duration: 1000,
      easing: "cubic-bezier(0.87, 0, 0.13, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-new(root)",
    }
  );
};

export const zoomTransition = () => {
  window.scrollTo({top: 0, left: 0});

  document.documentElement.animate(
    [
      {opacity: 1, transform: "scale(1)"},
      {opacity: 0, transform: "scale(0.92)"},
    ],
    {
      duration: 900,
      easing: "cubic-bezier(0.4, 0, 0.2, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-old(root)",
    }
  );

  document.documentElement.animate(
    [
      {opacity: 0, transform: "scale(1.05)"},
      {opacity: 1, transform: "scale(1)"},
    ],
    {
      duration: 900,
      easing: "cubic-bezier(0.4, 0, 0.2, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-new(root)",
    }
  );
};
