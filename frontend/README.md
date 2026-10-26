# 前端開發

使用 Bun 1.4.4 安裝套件與執行開發工具，無須安裝 Node.js。
Vite 負責開發伺服器與正式建置，TypeScript 使用 7.x。

```sh
cd frontend
bun install --frozen-lockfile
bun run dev
```

型別檢查、正式建置與本機預覽：

```sh
bun run typecheck
bun run build
bun run preview
```

`bun run typecheck` 先由 Bun 檢查 TypeScript 與 Vite 設定，再由 Vize 檢查 Vue 元件及模板。
`bun run build` 會先完成上述檢查，有錯誤時就停止建置。

Vize 的型別檢查功能目前處於 alpha 階段，升級時須確認錯誤型別會被擋下，尤其是 Vue 元件與模板。

`bunfig.toml` 與套件指令都指定使用 Bun 執行工具。
