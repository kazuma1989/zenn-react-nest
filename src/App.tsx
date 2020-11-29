import React from "react"

export function App() {
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
        <a className="btn btn-outline-primary" href="#">
          サインアップ
        </a>
      </div>

      <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 className="display-4">価格</h1>
        <p className="lead">
          この Bootstrap
          テンプレートを使ってまだ見ぬ顧客への効果的な価格テーブルを素早く構築しましょう.
          これは Bootstrap
          のコンポーネントとユーティリティを少しカスタマイズして構築されています.
        </p>
      </div>

      <div className="container">
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
              <img
                className="mb-2"
                src="/docs/5.0/assets/brand/bootstrap-solid.svg"
                alt=""
                width="24"
                height="24"
              />
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
