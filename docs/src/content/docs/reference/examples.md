---
title: Query examples
description: Explore real NexQL question and query pairs from the repository.
---

These examples are drawn from the repository’s query-by-example corpus. Each domain assumes its corresponding model and database mappings. They are instructional examples, not live execution results.

## Cinema bookings

“What films are there?”

```text
WHICH Film
```


“What films are playing at the Great Western Cinema?”

```text
WHICH Film is showing at (Cinema:'Great Western Cinema')
```


“What dates does Peter have a booking for?”

```text
WHICH DateTime has A Session THAT has A Booking THAT is for (Person:'Peter')
```


“Show the login names of people who booked Rocky.”

```text
WHICH Person made A Booking THAT is for A Session
THAT is to watch (Film:'Rocky') RETURN Person.LoginName
```


“How many seats are in the Great Western Cinema?”

```text
WHICH Seat is in A Row in (Cinema:'Great Western Cinema') RETURN COUNT(*)
```


## Sales orders

“Show total sales by customer city.”

```text
WHICH Sales Order has WHICH Sold To Customer City AND WHICH Line Total
RETURN SalesOrder.SldToCustCity, SalesOrder.SlsLineTotal.SUM
GROUP BY SalesOrder.SldToCustCity
```


“Which orders have Flatscreen in the product name?”

```text
WHICH Sales Order has (Mat Description~'%Flatscreen%') RETURN SalesOrder.SlsOrdNum
```


## Explore the source collections

- [Cinema bookings](https://github.com/FactEngineCommunity/NexQL/blob/main/Examples/QueryByExample/TrainingExamples-CinemaBookings.txt)
- [Customer orders](https://github.com/FactEngineCommunity/NexQL/blob/main/Examples/QueryByExample/TrainingExamples-CustomerOrders.txt)
- [Pizza orders](https://github.com/FactEngineCommunity/NexQL/blob/main/Examples/QueryByExample/TrainingExamples-PizzaOrderTaker.txt)
- [Sales orders](https://github.com/FactEngineCommunity/NexQL/blob/main/Examples/QueryByExample/TrainingExamples-SalesOrders.txt)

The raw training files are evolving and include inconsistencies. Check a query against its model and runtime before using it as an executable example or an evaluation target.