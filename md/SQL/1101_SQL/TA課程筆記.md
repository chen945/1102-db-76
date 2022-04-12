#SQL查詢
#####SELECT:顯現出來的欄位
#####FROM:要找哪個資料夾
#####WHERE:條件的設立
#####LIKE:特定值
模式(Pattern)
%:零個或多個字元 (關鍵詞搜索的概念)
_ :一個字元
#####ORDER BY: 排序
由大至小: ORDER BY *欄位名稱*  ASC
由小至大: ORDER BY *欄位名稱*  DESC
#####IN:可以連接多個條件(類似等於)
#####BETWEEN:條件有介於值(要AND)
#####聚合函數:
用於計算的函數，可以求和.平均值.最大最小值.取資料數

_※可以用COUNT來確認總資料數_
*EX: SELECT<聚合函數>(欄位名稱) FROM資料表
    SELECT AVG(unitprice) FROM product*

※需要個別顯示類別的函數請用*GROUP BY*

####創立table





####第1周TA課程
基礎(先找到共同性)

```
SELECT F.film_id, F.title, C.name
FROM film AS F, film_category AS FC, category AS C
WHERE F.film_id = FC.film_id
AND C.category_id = FC.category_id
AND c.category_id ='1'
```
####第2周TA課程
LIKE(%)
WHERE *欄位名稱*  LIKE *Pattern*
```
SELECT*
FROM product
WHERE pname LIKE '%實務'
```
ORDER BY
```
SELECT*
FROM product
ORDER BY unitprice desc
```
IN(類似等於)
```
SELECT*
FROM product
WHERE category IN('CD','DVD')
```
BETWEEN (介於特定值的概念,記得要AND)
```
SELECT*
FROM product
WHERE unitprice BETWEEN 450 AND 600
```

聚合函數+GROUP BY
```
SELECT category,avg(unitprice)
FROM product
GROUP BY category
```