import React, { createContext, useContext } from "react"

export function Dropdown({ children }: { children?: React.ReactNode }) {
  return <div className="dropdown">{children}</div>
}

Dropdown.Button = function ({
  className,
  ...props
}: JSX.IntrinsicElements["button"]) {
  return (
    <button
      type="button"
      className={`dropdown-toggle btn ${className ?? ""}`}
      {...props}
    />
  )
}

const contextOnAction = createContext<(() => void) | undefined>(undefined)

Dropdown.Menu = function ({
  open,
  onAction,
  children,
}: {
  open?: boolean
  onAction?(): void
  children?: React.ReactNode
}) {
  return (
    <contextOnAction.Provider value={onAction}>
      <div className={`dropdown-menu ${open ? "show" : ""}`}>{children}</div>
    </contextOnAction.Provider>
  )
}

Dropdown.MenuItem = function ({
  as,
  active,
  disabled,
  onClick,
  ...props
}: Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
  "ref"
> & {
  as?: "button"
  active?: boolean
  disabled?: boolean
}) {
  const onAction = useContext(contextOnAction)

  switch (as) {
    case "button": {
      return (
        <button
          type="button"
          aria-current={active}
          disabled={disabled}
          className={`dropdown-item ${active ? "active" : ""} ${
            disabled ? "disabled" : ""
          }`}
          onClick={(e) => {
            if (disabled) return

            onAction?.()
            onClick?.(e)
          }}
          {...props}
        />
      )
    }

    default: {
      return (
        <span
          aria-current={active}
          aria-disabled={disabled}
          className={`dropdown-item ${active ? "active" : ""} ${
            disabled ? "disabled" : ""
          }`}
          onClick={(e) => {
            if (disabled) return

            onAction?.()
            onClick?.(e)
          }}
          {...props}
        />
      )
    }
  }
}

Dropdown.MenuText = function ({ ...props }: JSX.IntrinsicElements["span"]) {
  return <span className="dropdown-item-text" {...props} />
}

Dropdown.MenuHeader = function ({ ...props }: JSX.IntrinsicElements["h6"]) {
  return <h6 className="dropdown-header" {...props} />
}

Dropdown.MenuDivider = function () {
  return <hr className="dropdown-divider" />
}

Dropdown.MenuSpace = function ({
  render,
  children,
  ...props
}: JSX.IntrinsicElements["div"] & {
  render?(onAction?: () => void): JSX.Element
}) {
  const onAction = useContext(contextOnAction)

  return (
    <div className="px-3 py-1" {...props}>
      {render ? render(onAction) : children}
    </div>
  )
}
