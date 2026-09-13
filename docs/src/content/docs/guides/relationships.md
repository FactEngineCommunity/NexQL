---
title: Follow relationships and filter
description: Use A, THAT, AND and typed values to build NexQL questions.
---

## Follow the model’s readings

Ask “What films did Simon book?”

```text
WHICH Film has A Session
THAT has A Booking
THAT is for (Person:'Simon')
```


The path connects Film to Session, Booking and Person. The model supplies these relationships and their database mappings. `A` introduces a related object; `THAT` continues the reading from an object already introduced.

## Combine conditions with AND

```text
WHICH Booking is for A Session
THAT is on (DateTime.YEAR:2023)
AND is on (DateTime.MONTH:01)
```


This asks for bookings whose sessions fall in January 2023. `YEAR` and `MONTH` constrain date parts.

## Ask about an absent relationship

```text
WHICH Seat is in (Cinema:'Rialto')
AND has NO Booking for A Session to watch (Film:'Rocky')
at (Cinema:'Rialto') on (DateTime:'2021-05-01 10:30')
```


`NO Booking` expresses absence along the constrained relationship. The initial cinema condition also scopes the candidate seats. When writing absence queries, check both the candidates and the relationship being excluded.

## Match part of a value

```text
WHICH Sales Order has (Mat Description~'%Flatscreen%')
RETURN SalesOrder.SlsOrdNum
```


The sales examples use `~` with a wildcard pattern to match a product description containing “Flatscreen”. Exact value matching uses `:`, as in `(Cinema:'Rialto')`.

## Keep the vocabulary grounded

Predicates are model readings, not interchangeable prose. Use examples from the same model and verify each object, reading, and field before executing a generated query.