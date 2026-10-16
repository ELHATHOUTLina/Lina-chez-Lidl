import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

export default function Overlay({ open, onClose, titleId, variant, children }) {
  const dialog = useRef(null);

  useEffect(() => {
    const element = dialog.current;
    if (!open) {
      if (element.open) element.close();
      return undefined;
    }
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    element.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      if (element.open) element.close();
      document.body.style.overflow = previousOverflow;
      if (previousFocus?.isConnected) previousFocus.focus({ preventScroll: true });
    };
  }, [open]);

  function keepFocusInside(event) {
    if (event.key !== 'Tab') return;
    const focusable = Array.from(dialog.current.querySelectorAll(
      'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])',
    )).filter((element) => element.getClientRects().length > 0);
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (!first) { event.preventDefault(); return; }
    if (event.shiftKey && (document.activeElement === first || !dialog.current.contains(document.activeElement))) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function closeOnBackdrop(event) {
    if (event.target !== event.currentTarget) return;
    const rect = event.currentTarget.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) {
      onClose();
    }
  }

  return (
    <dialog
      ref={dialog}
      className={`overlay overlay--${variant}`}
      aria-labelledby={titleId}
      onKeyDown={keepFocusInside}
      onCancel={(event) => { event.preventDefault(); onClose(); }}
      onClick={closeOnBackdrop}
    >
      <button className="overlay__close" type="button" aria-label="Fermer" onClick={onClose} autoFocus>
        <X size={24} aria-hidden="true" />
      </button>
      {children}
    </dialog>
  );
}
