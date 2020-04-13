let containers = document.querySelectorAll(".container");
let draggables = document.querySelectorAll(".drag");

draggables.forEach((element) => {
  element.addEventListener("dragstart", () => {
    element.classList.add("dragging");
  });
  element.addEventListener("dragend", () => {
    element.classList.remove("dragging");
  });
});

containers.forEach((element) => {
  element.addEventListener("dragover", (e) => {
    e.preventDefault();
    const afterElement = getDragAfterElement(element, e.clientY);
    const draggable = document.querySelector(".dragging");
    if(afterElement == null){
      element.appendChild(draggable);
    }
    else{
      element.insertBefore(draggable,afterElement)
    }
    
    
  });
});

function getDragAfterElement(container, y) {
  const draggableElements = [
    ...container.querySelectorAll(".drag:not(.dragging)"),
  ];
  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    {
      offset: Number.NEGATIVE_INFINITY,
    }
  ).element;
}
