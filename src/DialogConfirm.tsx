import React from "react"
import { Dialog } from "./Dialog"

export function DialogConfirm({
  label = "はい",
  onConfirm,
  children,
}: {
  label?: string
  onConfirm?(): void
  children?: React.ReactNode
}) {
  return (
    <Dialog>
      <Dialog.Body>{children}</Dialog.Body>

      <Dialog.Footer>
        <Dialog.FooterButton
          className="btn-outline-primary"
          onClick={onConfirm}
        >
          {label}
        </Dialog.FooterButton>
      </Dialog.Footer>
    </Dialog>
  )
}
