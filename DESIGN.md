---
version: alpha
name: GooMap Review Snatcher
description: 沿用既有藍底、深藍文字與橘色主要操作的評論閱讀介面
colors:
  primary: "#2c3e50"
  secondary: "#59687a"
  link: "#285c96"
  rating: "#986000"
  tertiary: "#ffa400"
  neutral: "#d6e3f8"
  surface: "#ffffff"
  mutedSurface: "#f4f7fb"
  border: "#dce4ed"
typography:
  h2:
    fontFamily: "Segoe UI, PingFang TC, Microsoft JhengHei, sans-serif"
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.4
  body-md:
    fontFamily: "Segoe UI, PingFang TC, Microsoft JhengHei, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.75
rounded:
  sm: 8px
  md: 12px
spacing:
  sm: 8px
  md: 16px
  lg: 24px
components:
  review-table:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
---

## Overview

本次改善範圍是評論結果與表格，沿用既有產品識別。初始搜尋畫面、導覽列與品牌圖像保持既有風格。

## Colors

藍底、深藍文字、橘色操作取自現有程式。表面使用白色，淡灰藍用於表頭與滑過狀態，細灰藍線分隔資料。次要文字加深為 #59687a，操作連結使用 #285c96，星號使用 #986000，維持白底上的辨識度。結果介面採固定淺色主題，與既有固定淺藍頁面一致，不新增全站主題切換。

## Typography

保留現有無襯線字體系統。商家名稱 24px，評論內容 14px、行高 1.75，次要資料 12–13px。表格中的長文字允許換行，識別碼可在任何字元換行。

## Layout

結果區最大寬度 1120px，左右至少留 16px。結果出現時將頁首標誌與標題縮小，讓主要閱讀區優先露出。桌面主表四欄為評論者、評分、評論內容、日期；評論內容占最多寬度。小於 768px 時改為逐則縱向閱讀，不依賴橫向捲動。

## Elevation & Depth

使用單一表格表面與細分隔線，不疊放多層卡片。陰影僅用於表面與背景的區分。

## Shapes

表格外框 12px、按鈕與輸入框 8px。避免膠囊按鈕與裝飾性徽章。

## Components

- 商家標題旁顯示本次已取得的評論筆數，不推論整家商店的總評價。
- 文字搜尋只比對評論者與評論內容，評分篩選只影響畫面。
- 每頁 20 則，顯示目前範圍與篩選結果總數，前後頁有正確停用狀態。
- 長評論可展開與收合；只有評分的評論顯示「這則評論沒有文字內容」。
- 識別碼、語言與原始時間收進「詳細資料」，不在主表顯示固定空白的評論者狀態或等級。
- CSV、JSON 繼續下載整批原始資料，按鈕旁說明「下載包含全部評論」，不隨篩選或分頁變動。
- 篩選沒有結果時提供清除條件操作。所有控制項具可見標籤、焦點狀態與鍵盤操作。

## Do's and Don'ts

- 以真實評論驗證長文、多語、空文字與大量資料。
- 不把原始 JSON 欄名直接當成畫面標題。
- 不新增裝飾性圖表、假統計、相片頭像或第三方 UI 套件。
- 不改變下載、重新查詢或 StoreCoach 的資料流程。
