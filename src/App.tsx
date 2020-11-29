import React, { useState } from "react"
import { Dialog } from "./Dialog_2"
import { Dropdown as Dropdown_1 } from "./Dropdown_1"
import { Dropdown } from "./Dropdown_2"

export function App() {
  const [open1, setOpen1] = useState(true)
  const close1 = () => {
    setOpen1(false)
  }
  const toggleOpen1 = () => {
    setOpen1((v) => !v)
  }

  const [open, setOpen] = useState(true)
  const close = () => {
    setOpen(false)
  }
  const toggleOpen = () => {
    setOpen((v) => !v)
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: 16,
        padding: 16,
      }}
    >
      <div style={{ height: 350 }}>
        <Dropdown_1
          openButton={{
            onClick: toggleOpen1,
            className: "btn-outline-primary",
            children: "メニュー",
          }}
          open={open1}
          onAction={close1}
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
      </div>

      <div style={{ height: 350 }}>
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
      </div>

      <div style={{ gridColumn: "1 / -1" }}>
        
      </div>

      <div style={{ gridColumn: "1 / -1" }}>
        <Dialog>
          <Dialog.Header>
            <Dialog.HeaderTitle>ダイアログタイトル</Dialog.HeaderTitle>

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
            <Dialog.FooterButton className="btn-secondary">
              キャンセル
            </Dialog.FooterButton>

            <Dialog.FooterButton className="btn-primary">
              保存する
            </Dialog.FooterButton>
          </Dialog.Footer>
        </Dialog>
      </div>

      <div style={{ gridColumn: "1 / -1" }}>
        <Dialog>
          <Dialog.Body>失敗しました</Dialog.Body>

          <Dialog.Footer>
            <Dialog.FooterButton className="btn-outline-primary">
              はい
            </Dialog.FooterButton>
          </Dialog.Footer>
        </Dialog>
      </div>
    </div>
  )
}

export function Dialog_1({
  title,
  onClose,
  children,
}: {
  title?: React.ReactNode
  onClose?(): void
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
      </div>
    </div>
  )
}
