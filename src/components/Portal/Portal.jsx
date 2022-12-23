import { useEffect } from "react";
import { createPortal } from "react-dom";

const Portal = ({ children, target }) => {
  let root;
  let el;

  if (typeof window === "object") {
    if (target) {
      root = document.getElementById("root");
    }

    el = document.createElement("div");
    el.setAttribute('style', 'position:relative');
    el.id = "portal-root";
  }

  useEffect(() => {
    root.parentElement.insertBefore(el, root.nextSibling);

    return () => el.remove();
  }, [el, root.nextSibling, root.parentElement]);

  return createPortal(children, el);
};

export default Portal;
