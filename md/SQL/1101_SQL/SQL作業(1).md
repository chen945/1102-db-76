### 9月29日 資料庫 回家作業

#### Q1.

> 使用 dvdrental Database，列出所有 "B" 開頭的電影中，每個電影種類的種類名稱與各種類的影片數，並依數量由大至小排列。
>
> <font color=#FF0000>hint : 需用到 `film`, `film_category`, `category` 三個 `Table`，請將 `film` 縮寫成 `F` ，`film_category` 縮寫成 `FC`，`category` 縮寫成 `C`。</font>

###### 程式碼：

```
SELECT F.film_id, F.title, C.name
FROM film AS F, film_category AS FC, category AS C
WHERE F.title LIKE 'B%'
AND F.film_id= FC.film_id
AND C.category_id = FC.category_id
ORDER BY F.film_id ASC
```

###### 截圖（須包含 SQL Code、查詢結果、桌面）：
<img src='./png/Q1截圖.png'>

&nbsp;

#### Q2.

> 使用 dvdrental Database，列出所有片長（length）介於 90 至 130 分鐘的科幻片（Sci-fi）、喜劇片（Comedy）以及恐怖片（Horror）其片名、片長及種類
>
> <font color=#FF0000>hint : 需用到 `film`, `film_category`, `category` 三個 `Table`，請將 `film` 縮寫成 `F` ，`film_category` 縮寫成 `FC`，`category` 縮寫成 `C`。</font>

###### 程式碼：

```
SELECT F.film_id, F.title, C.name,F.length
FROM film AS F, film_category AS FC, category AS C
WHERE length BETWEEN 90 AND 130
AND C.name IN('Sci-fi','Comedy','Horror')
AND F.film_id=FC.film_id
AND C.category_id=FC.category_id
```

###### 截圖（須包含 SQL Code、查詢結果、桌面）：

<img src='./png/Q2截圖.png'>

&nbsp;

#### Q3.

> 本週課程學習心得與課程建議（100字以上）

###### 作答區：
這周比第一周更清楚一些觀念，但還是不太懂這次作業第一題要怎麼去運用'聚合函數'以及GROUP BY，跟其他的東西做融合，希望助教可以在這個上面多做說明QQ
線上課程的好處大概就是可以按照自己的速度回放，並做吸收~
然後等跑出來之後就會覺得很開心~
謝謝助教 助教辛苦ㄌ!!!!
