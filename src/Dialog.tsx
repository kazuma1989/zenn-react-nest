import React from "react"

export function Dialog({ children }: { children?: React.ReactNode }) {
  return (
    <div className="modal-dialog">
      <div className="modal-content">{children}</div>
    </div>
  )
}

Dialog.Header = function ({ children }: { children?: React.ReactNode }) {
  return <div className="modal-header">{children}</div>
}

Dialog.HeaderTitle = function ({ children }: { children?: React.ReactNode }) {
  return <h5 className="modal-title">{children}</h5>
}

Dialog.HeaderCloseButton = function ({
  ...props
}: JSX.IntrinsicElements["button"]) {
  return (
    <button type="button" className="close" aria-label="Close" {...props}>
      <span aria-hidden="true">&times;</span>
    </button>
  )
}

Dialog.Body = function ({ children }: { children?: React.ReactNode }) {
  return <div className="modal-body">{children}</div>
}

Dialog.Footer = function ({ children }: { children?: React.ReactNode }) {
  return <div className="modal-footer">{children}</div>
}

Dialog.FooterButton = function ({
  className,
  ...props
}: JSX.IntrinsicElements["button"]) {
  return (
    <button type="button" className={`btn ${className ?? ""}`} {...props} />
  )
}
