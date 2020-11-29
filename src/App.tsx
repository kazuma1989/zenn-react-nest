import React, { useState } from "react"
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

  const [open2, setOpen2] = useState(true)
  const close2 = () => {
    setOpen2(false)
  }
  const toggleOpen2 = () => {
    setOpen2((v) => !v)
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
          <Dropdown.Button
            className="btn-outline-primary"
            onClick={toggleOpen2}
          >
            メニュー
          </Dropdown.Button>

          <Dropdown.Menu open={open2} onAction={close2}>
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

      <div style={{ height: 350, gridColumn: "1 / -1" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>

              <button type="button" className="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="modal-body">
              <p>Modal body text goes here.</p>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary">
                Close
              </button>

              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
