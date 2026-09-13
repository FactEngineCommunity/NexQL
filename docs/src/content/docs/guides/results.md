---
title: Choose what comes back
description: Select object types with WHICH or shape results explicitly with RETURN.
---

## Return objects with WHICH

Place `WHICH` directly before every object type you want in the results.

```text
WHICH Film is showing at WHICH Cinema at WHICH DateTime
```


This selects Film, Cinema and DateTime. `RETURN` is optional.

For each selected object type, the default returned fields are those of the **first-found uniqueness constraint**. If no uniqueness constraint is found, NexQL returns the **primary key**. It does not mean “return every field”. The actual fields depend on your model.

## Use A for a related object

```text
WHICH Film has A Session THAT has A Booking THAT is for (Person:'Simon')
```


Film is selected. Session and Booking describe the relationship path; they are not selected with `WHICH`.

## Name explicit fields with RETURN

Ask for the login names of people who booked Rocky:

```text
WHICH Person made A Booking THAT is for A Session
THAT is to watch (Film:'Rocky')
RETURN Person.LoginName
```


The explicit projection requests `Person.LoginName`. Use fields that exist in the mapped model; do not derive field names by guessing from the natural-language labels.

## Count matching results

```text
WHICH Seat is in A Row in (Cinema:'Great Western Cinema')
RETURN COUNT(*)
```


This example counts matching seats. [Aggregation](../analytics/) explains grouped results.

## Choose a projection deliberately

Use `WHICH` when you want the model’s default identifying fields. Use `RETURN` when a caller needs named columns or aggregates. For an agent tool with a fixed output contract, verify the actual result fields against the model.