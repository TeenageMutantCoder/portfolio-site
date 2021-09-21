// Concept adapted from https://uxdesign.cc/how-to-trap-focus-inside-modal-to-make-it-ada-compliant-6a50f9a70700
const trapFocus = (e, firstFocusableElement, lastFocusableElement) => {
    // If either element does not exist, do not run
    if (!firstFocusableElement || !lastFocusableElement) return;
    if (e.key !== "Tab") return;

    // Focuses last focusable element in view if user shift tabs at first focusable element in view.
    if (e.shiftKey) {
        if (document.activeElement === firstFocusableElement) {
            lastFocusableElement.focus();
            e.preventDefault();
        }
    }
    // Focuses first focusable element in view if user tabs at last nav link
    else {
        if (document.activeElement === lastFocusableElement) {
            firstFocusableElement.focus();
            e.preventDefault();
        }
    }
};

export default trapFocus;
