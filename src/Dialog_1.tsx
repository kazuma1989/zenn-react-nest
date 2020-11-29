import React from "react"

export function Dialog({
  title,
  onClose,
  buttonCancel,
  buttonSubmit,
  children,
}: {
  title?: React.ReactNode
  onClose?(): void
  buttonCancel?: {
    label?: string
    onClick?(): void
  }
  buttonSubmit?: {
    label?: string
    onClick?(): void
  }
  children?: React.ReactNode
}) {
  return (
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">{title}</h5>

          <button
            type="button"
            className="close"
            aria-label="Close"
            onClick={onClose}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div className="modal-body">{children}</div>

        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={buttonCancel?.onClick}
          >
            {buttonCancel?.label}
          </button>

          <button
            type="button"
            className="btn btn-primary"
            onClick={buttonSubmit?.onClick}
          >
            {buttonSubmit?.label}
          </button>
        </div>
      </div>
    </div>
  )
}
