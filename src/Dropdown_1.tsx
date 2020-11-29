import React from "react"

export function Dropdown({
  openButton,
  open,
  onAction,
  items,
}: {
  openButton?: JSX.IntrinsicElements["button"]
  open?: boolean
  onAction?(): void
  items?: (
    | ({
        itemType: "anchor"
        active?: boolean
        disabled?: boolean
      } & JSX.IntrinsicElements["a"])
    | ({
        itemType: "button"
        active?: boolean
        disabled?: boolean
      } & JSX.IntrinsicElements["button"])
    | ({
        itemType: "text"
      } & JSX.IntrinsicElements["span"])
    | ({
        itemType: "header"
      } & JSX.IntrinsicElements["h6"])
    | {
        itemType: "divider"
      }
    | ({
        itemType: "space"
        render?(onAction?: () => void): JSX.Element
      } & JSX.IntrinsicElements["div"])
  )[]
}) {
  return (
    <div className="dropdown">
      <button
        {...openButton}
        type="button"
        className={`dropdown-toggle btn ${openButton?.className ?? ""}`}
      />

      <div className={`dropdown-menu ${open ? "show" : ""}`}>
        {items?.map((item, i) => {
          switch (item.itemType) {
            case "anchor": {
              const { active, disabled, onClick, ...props } = item

              return (
                <a
                  key={i}
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

            case "button": {
              const { active, disabled, onClick, ...props } = item

              return (
                <button
                  key={i}
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

            case "text": {
              const { ...props } = item

              return <span key={i} className="dropdown-item-text" {...props} />
            }

            case "header": {
              const { ...props } = item

              return <h6 key={i} className="dropdown-header" {...props} />
            }

            case "divider": {
              return <hr key={i} className="dropdown-divider" />
            }

            case "space": {
              const { render, children, ...props } = item

              return (
                <div key={i} className="px-3 py-1" {...props}>
                  {render ? render(onAction) : children}
                </div>
              )
            }
          }
        })}
      </div>
    </div>
  )
}
