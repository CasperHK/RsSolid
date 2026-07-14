# RsSolid

這是一個使用 **Rsbuild** 與 **Rspack** 建構的 Solid.js 專案。Rsbuild 提供了極致的建構效能與開箱即用的開發體驗。

## 🚀 專案特點

* **極速開發**：基於 Rust 的 Rspack 引擎，大幅縮短冷啟動與 HMR 時間。
* **開箱即用**：由 Rsbuild 提供配置，無需繁瑣的 Webpack 設定。
* **現代化技術棧**：採用 Solid.js 與 TypeScript，提供高效能的響應式體驗。

## 🛠️ 開發指南

### 1. 安裝依賴

確保你已經安裝了 [pnpm](https://pnpm.io/)，然後執行：

```bash
pnpm install

```

### 2. 啟動開發伺服器

執行以下指令即可啟動本地開發環境：

```bash
pnpm dev

```

這將開啟一個開發伺服器，通常位於 `http://localhost:3000`。

### 3. 建構生產版本

如果你需要打包發佈專案，執行：

```bash
pnpm build

```

產出的靜態檔案會放置在 `dist` 目錄中。

### 4. 預覽生產版本

在執行 `build` 後，可以使用以下指令預覽打包後的成果：

```bash
pnpm preview

```

## 📂 專案結構

* `src/`：原始程式碼。
* `index.tsx`：專案入口點。
* `App.tsx`：主要應用元件。


* `rsbuild.config.ts`：Rsbuild 的設定檔，你可以在此自定義建構邏輯。
* `package.json`：專案依賴與 scripts 管理。

## 🔗 相關資源

* [Rsbuild 文件](https://rsbuild.dev/)
* [Rspack 官網](https://rspack.dev/)
* [Solid.js 文件](https://www.solidjs.com/)