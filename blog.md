# ダイアログ

```tsx
<Dialog
  title="タイトル"
  onClose={() => {
    console.log("閉じる")
  }}
  buttonCancel={{
    label: "キャンセル",
    onClick: () => {
      console.log("キャンセル")
    },
  }}
  buttonSubmit={{
    label: "保存する",
    onClick: () => {
      console.log("保存する")
    },
  }}
>
  <p>中身</p>
</Dialog>
```

```tsx
<Dialog
  buttonSubmit={{
    label: "いいよ",
    outlined: true,
    onClick: () => {
      console.log("いいってさ")
    },
  }}
>
  失敗しました
</Dialog>
```

```tsx
<Dialog>
  <Dialog.Header>
    <Dialog.HeaderTitle>タイトル</Dialog.HeaderTitle>

    <Dialog.HeaderCloseButton
      onClick={() => {
        console.log("close!")
      }}
    />
  </Dialog.Header>

  <Dialog.Body>
    <p>中身</p>
  </Dialog.Body>

  <Dialog.Footer>
    <Dialog.FooterButton
      className="btn-secondary"
      onClick={() => {
        console.log("cancel!")
      }}
    >
      キャンセル
    </Dialog.FooterButton>

    <Dialog.FooterButton
      className="btn-primary"
      onClick={() => {
        console.log("submit!")
      }}
    >
      保存する
    </Dialog.FooterButton>
  </Dialog.Footer>
</Dialog>
```

```tsx
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
```

```tsx
<Dialog>
  <Dialog.Body>失敗しました</Dialog.Body>

  <Dialog.Footer>
    <Dialog.FooterButton
      className="btn-outline-primary"
      onClick={() => {
        console.log("confirmed!")
      }}
    >
      いいよ
    </Dialog.FooterButton>
  </Dialog.Footer>
</Dialog>
```

```tsx
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
```

# ドロップダウンリスト

```tsx
<Dropdown
  openButton={{
    onClick: toggleOpen,
    className: "btn-outline-primary",
    children: "メニュー",
  }}
  open={open}
  onAction={close}
  items={[
    {
      itemType: "header",
      children: "ヘッダー",
    },
    {
      itemType: "anchor",
      href: "#",
      children: "リンク",
    },
    {
      itemType: "anchor",
      href: "#",
      style: {
        paddingInlineStart: 32,
      },
      children: "インデント",
    },
    {
      itemType: "text",
      children: "ただのテキスト",
    },
    {
      itemType: "divider",
    },
    {
      itemType: "button",
      onClick: () => {
        console.log("clicked!")
      },
      children: "これはボタン",
    },
    {
      itemType: "divider",
    },
    {
      itemType: "space",
      children: "なんでも置ける",
    },
    {
      itemType: "space",
      render: (onAction) => {
        return (
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={onAction}
          >
            なんかボタン
          </button>
        )
      },
    },
  ]}
/>
```

```tsx
<Dropdown>
  <Dropdown.Button className="btn-outline-primary" onClick={toggleOpen}>
    メニュー
  </Dropdown.Button>

  <Dropdown.Menu open={open} onAction={close}>
    <Dropdown.MenuHeader>ヘッダー</Dropdown.MenuHeader>

    <a href="#1" style={{ textDecoration: "none" }}>
      <Dropdown.MenuItem>リンク</Dropdown.MenuItem>
    </a>

    <a href="#2" style={{ textDecoration: "none" }}>
      <Dropdown.MenuItem
        style={{
          paddingInlineStart: 32,
        }}
      >
        インデント
      </Dropdown.MenuItem>
    </a>

    <Dropdown.MenuText>ただのテキスト</Dropdown.MenuText>

    <Dropdown.MenuDivider />

    <Dropdown.MenuItem
      as="button"
      onClick={() => {
        console.log("clicked!")
      }}
    >
      これはボタン
    </Dropdown.MenuItem>

    <Dropdown.MenuDivider />

    <Dropdown.MenuSpace>なんでも置ける</Dropdown.MenuSpace>

    <Dropdown.MenuSpace
      render={(onAction) => {
        return (
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={onAction}
          >
            なんかボタン
          </button>
        )
      }}
    />
  </Dropdown.Menu>
</Dropdown>
```

```tsx
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
```
