### 1. HAVING

當我們需要使用聚合函數作為條件時，比如說：列出所有平均 (AVG) 低於 50 分的學生，使用 WHERE 就會出現報錯，因為 WHERE 不可使用聚合函數作為條件，這時候就要使用 HAVING 開頭，來幫助我們取得更細的資料。

```
SELECT column_name(s), aggregate_function(column_name)
FROM table_name
WHERE column_name operator value
GROUP BY column_name1, column_name2...
HAVING aggregate_function(column_name) operator value;
```

#### 練習 1

請列出所有出演電影數低於 20 部的演員其 first_name, last_name, 出演片數，並依出演片數由低至高排列。

```
SELECT a.first_name , a.last_name , count(fa.film_id)出演片數
FROM film_actor fa
JOIN actor a ON fa.actor_id = a.actor_id
GROUP BY a.actor_id
HAVING count(fa.film_id) < 20
ORDER BY count(fa.film_id)
```

---

### 2. CASE

CASE 類似於程式語言裡的 if/then/else 語句，用來作邏輯判斷。

```
CASE expression
  WHEN value THEN result
  [WHEN···]
  [ELSE result]
END;
```

#### 練習 2.

請列出所有出演電影的演員其 first_name, last_name, 出演片數，並依出演片數由低至高排列，若出演片數大於 25 部，則顯示 "出演超過 25 部”，反之則顯示 "出演低於 25 部"。

```
SELECT a.first_name,a.last_name,count(fa.film_id)出演片數,
CASE
WHEN count(fa.film_id) >25 THEN '出演超過25部'
ELSE '出演低於25部'
END 判別
FROM film_actor fa
JOIN actor a ON fa.actor_id = a.actor_id
GROUP BY a.actor_id
ORDER BY count(fa.film_id)
```

---

### 練習 3.

請列出所有影片數量大於 65 部的電影種類其種類名稱與影片數量，若種類名稱開頭為 F 的話，註明為 "F 開頭"，其於則註明 "其他”。

```
SELECT c.name,count(fc.film_id)影片數,
CASE
	WHEN c.name LIKE 'F%' THEN 'F開頭'
	ELSE '其他'
	END 判斷
FROM film_category fc
JOIN category c ON fc.category_id = c.category_id
GROUP BY c.category_id
HAVING count(fc.film_id)>65
```
