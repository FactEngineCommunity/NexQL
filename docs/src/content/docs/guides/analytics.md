---
title: Aggregate and analyse
description: Use RETURN and GROUP BY to express analytical NexQL questions.
---

## Total sales by customer city

```text
WHICH Sales Order has WHICH Sold To Customer City AND WHICH Line Total
RETURN SalesOrder.SldToCustCity, SalesOrder.SlsLineTotal.SUM
GROUP BY SalesOrder.SldToCustCity
```


The relationship readings identify the relevant sales concepts. `RETURN` requests a city and the sum of line totals. `GROUP BY` creates a group for each city.

`Sold To Customer City` is a model label, while `SalesOrder.SldToCustCity` is an explicit field reference from this example model. Your own field names may differ.

## Filter before aggregating

```text
WHICH Sales Order was on (Sales Date.MONTH:'10')
AND was on (Sales Date.YEAR:'2000')
RETURN SalesOrder.SldToCustRegion, SalesOrder.SlsLineTotal.SUM
GROUP BY SalesOrder.SldToCustRegion
```


This restricts the source orders to October 2000 before calculating totals by region.

## Filter grouped totals

The repository README also gives this pattern:

```text
WHICH Sales Order was on (Sales Date.YEAR:'2020')
AND has WHICH SldToCustCntry AND WHICH Line Total
RETURN SalesOrder.SldToCustCntry, SalesOrder.SlsLineTotal.SUM
GROUP BY SalesOrder.SldToCustCntry
HAVING SalesOrder.SlsLineTotal.SUM > 1000000
```


`HAVING` restricts the grouped results to totals above one million. `ORDER BY` sorts results; `LIMIT` bounds the result count. Confirm support for the requested combination in your FactEngine version and target database.

## Check what is being counted

Before using an aggregate, establish what each matching row represents. A sales line count and an order count need not be the same. Relationship paths can also affect multiplicity. Validate analytical queries against known data, including duplicates and empty groups.