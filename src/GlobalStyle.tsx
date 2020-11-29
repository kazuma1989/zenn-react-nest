import React from "react"

export function GlobalStyle() {
  const css = String.raw

  return (
    <style>
      {css`
        .container {
          max-width: 960px;
        }

        .pricing-header {
          max-width: 700px;
        }
      `}
    </style>
  )
}
