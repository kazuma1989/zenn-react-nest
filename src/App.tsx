import React, { createContext, useContext, useState } from "react"

export function App() {
  const [open, setOpen] = useState(!false)
  const close = () => {
    setOpen(false)
  }
  const toggleOpen = () => {
    setOpen((v) => !v)
  }

  return (
    <div>
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <h5 className="my-0 mr-md-auto font-weight-normal">会社名</h5>

        <nav className="my-2 my-md-0 mr-md-3">
          <a className="p-2 text-dark" href="#">
            特徴
          </a>

          <a className="p-2 text-dark" href="#">
            エンタープライズ
          </a>

          <a className="p-2 text-dark" href="#">
            サポート
          </a>

          <a className="p-2 text-dark" href="#">
            価格
          </a>
        </nav>

        <Dropdown2
          opener={{
            onClick: toggleOpen,
            className: "btn-outline-primary",
            children: "@kazuma1989 さん",
          }}
          open={open}
          onAction={close}
          items={[
            {
              itemType: "space",
              children: "なんでも置ける",
            },
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
              children: "これはボタン",
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

        <Dropdown>
          <Dropdown.Button className="btn-outline-primary" onClick={toggleOpen}>
            @kazuma1989 さん
          </Dropdown.Button>

          <Dropdown.Menu open={open} onAction={close}>
            <Dropdown.MenuSpace>なんでも置ける</Dropdown.MenuSpace>

            <Dropdown.MenuHeader>ヘッダー</Dropdown.MenuHeader>

            <Dropdown.MenuAnchor href="#">リンク</Dropdown.MenuAnchor>

            <Dropdown.MenuAnchor
              href="#"
              style={{
                paddingInlineStart: 32,
              }}
            >
              インデント
            </Dropdown.MenuAnchor>

            <Dropdown.MenuText>ただのテキスト</Dropdown.MenuText>

            <Dropdown.MenuDivider />

            <Dropdown.MenuButton>これはボタン</Dropdown.MenuButton>

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
            ></Dropdown.MenuSpace>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div
        className="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center"
        style={{
          maxWidth: 700,
        }}
      >
        <h1 className="display-4">価格</h1>

        <p className="lead">
          この Bootstrap
          テンプレートを使ってまだ見ぬ顧客への効果的な価格テーブルを素早く構築しましょう.
          これは Bootstrap
          のコンポーネントとユーティリティを少しカスタマイズして構築されています.
        </p>
      </div>

      <div
        className="container"
        style={{
          maxWidth: 960,
        }}
      >
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          <div className="col">
            <div className="card mb-4 shadow-sm">
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">フリー</h4>
              </div>

              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  ￥0 <small className="text-muted">/ 月</small>
                </h1>

                <ul className="list-unstyled mt-3 mb-4">
                  <li>10 ユーザー</li>
                  <li>2 GB のストレージ</li>
                  <li>メールによるサポート</li>
                  <li>ヘルプセンターへのアクセス</li>
                </ul>

                <button
                  type="button"
                  className="btn btn-lg btn-block btn-outline-primary"
                >
                  無料でサインアップ
                </button>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card mb-4 shadow-sm">
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">プロフェッショナル</h4>
              </div>

              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  ￥1500 <small className="text-muted">/ 月</small>
                </h1>

                <ul className="list-unstyled mt-3 mb-4">
                  <li>20 ユーザー</li>
                  <li>10 GB のストレージ</li>
                  <li>メールによる優先的なサポート</li>
                  <li>ヘルプセンターへのアクセス</li>
                </ul>

                <button
                  type="button"
                  className="btn btn-lg btn-block btn-primary"
                >
                  はじめる
                </button>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card mb-4 shadow-sm">
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">エンタープライズ</h4>
              </div>

              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  ￥2900 <small className="text-muted">/ 月</small>
                </h1>

                <ul className="list-unstyled mt-3 mb-4">
                  <li>30 ユーザー</li>
                  <li>15 GB のストレージ</li>
                  <li>メールと電話によるサポート</li>
                  <li>ヘルプセンターへのアクセス</li>
                </ul>

                <button
                  type="button"
                  className="btn btn-lg btn-block btn-primary"
                >
                  詳細を聞く
                </button>
              </div>
            </div>
          </div>
        </div>

        <footer className="pt-4 my-md-5 pt-md-5 border-top">
          <div className="row">
            <div className="col-12 col-md">
              <a
                className="link-secondary"
                href="https://v5.getbootstrap.jp/docs/5.0/examples/pricing/"
                target="_blank"
                rel="noopener"
              >
                Bootstrap Pricing Example
              </a>

              <small className="d-block mb-3 text-muted">
                &copy; 2017-2020
              </small>
            </div>

            <div className="col-6 col-md">
              <h5>特徴</h5>

              <ul className="list-unstyled text-small">
                <li>
                  <a className="link-secondary" href="#">
                    クールなスタッフ
                  </a>
                </li>

                <li>
                  <a className="link-secondary" href="#">
                    その他の特徴
                  </a>
                </li>

                <li>
                  <a className="link-secondary" href="#">
                    チームの特徴
                  </a>
                </li>

                <li>
                  <a className="link-secondary" href="#">
                    開発者向け
                  </a>
                </li>

                <li>
                  <a className="link-secondary" href="#">
                    そのほか
                  </a>
                </li>

                <li>
                  <a className="link-secondary" href="#">
                    最後
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md">
              <h5>リソース</h5>

              <ul className="list-unstyled text-small">
                <li>
                  <a className="link-secondary" href="#">
                    リソース
                  </a>
                </li>

                <li>
                  <a className="link-secondary" href="#">
                    リソース名
                  </a>
                </li>

                <li>
                  <a className="link-secondary" href="#">
                    そのほかのリソース
                  </a>
                </li>

                <li>
                  <a className="link-secondary" href="#">
                    最後のリソース
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md">
              <h5>このサービスについて</h5>

              <ul className="list-unstyled text-small">
                <li>
                  <a className="link-secondary" href="#">
                    チーム
                  </a>
                </li>

                <li>
                  <a className="link-secondary" href="#">
                    場所
                  </a>
                </li>

                <li>
                  <a className="link-secondary" href="#">
                    プライバシー
                  </a>
                </li>

                <li>
                  <a className="link-secondary" href="#">
                    利用規約
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

function Dropdown({ children }: { children?: React.ReactNode }) {
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
      <div
        className={`dropdown-menu dropdown-menu-right ${open ? "show" : ""}`}
      >
        {children}
      </div>
    </contextOnAction.Provider>
  )
}

Dropdown.MenuAnchor = function ({
  active,
  disabled,
  onClick,
  ...props
}: JSX.IntrinsicElements["a"] & {
  active?: boolean
  disabled?: boolean
}) {
  const onAction = useContext(contextOnAction)

  return (
    <a
      className={`dropdown-item ${active ? "active" : ""} ${
        disabled ? "disabled" : ""
      }`}
      onClick={(e) => {
        onAction?.()
        onClick?.(e)
      }}
      {...props}
    />
  )
}

Dropdown.MenuButton = function ({
  active,
  disabled,
  onClick,
  ...props
}: JSX.IntrinsicElements["button"] & {
  active?: boolean
  disabled?: boolean
}) {
  const onAction = useContext(contextOnAction)

  return (
    <button
      type="button"
      className={`dropdown-item ${active ? "active" : ""} ${
        disabled ? "disabled" : ""
      }`}
      onClick={(e) => {
        onAction?.()
        onClick?.(e)
      }}
      {...props}
    />
  )
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

function Dropdown2({
  opener,
  open,
  onAction,
  items,
}: {
  opener?: JSX.IntrinsicElements["button"]
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
        {...opener}
        type="button"
        className={`dropdown-toggle btn ${opener?.className ?? ""}`}
      />

      <div
        className={`dropdown-menu dropdown-menu-right ${open ? "show" : ""}`}
      >
        {items?.map((item, i) => {
          switch (item.itemType) {
            case "anchor": {
              const { active, disabled, onClick, ...props } = item

              return (
                <a
                  key={i}
                  className={`dropdown-item ${active ? "active" : ""} ${
                    disabled ? "disabled" : ""
                  }`}
                  onClick={(e) => {
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
                  className={`dropdown-item ${active ? "active" : ""} ${
                    disabled ? "disabled" : ""
                  }`}
                  onClick={(e) => {
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
