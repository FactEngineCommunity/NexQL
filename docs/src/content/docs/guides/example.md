---
title: Your first NexQL query
description: Learn NexQL by turning a cinema question into a structured query.
---

NexQL is a semantic query language developed for FactEngine. It expresses a question using the object types and relationship readings in a model, then supports deterministic translation to SQL or Cypher.

This walkthrough uses a cinema model to build a query step by step. To run the examples, use FactEngine with the matching model and a connected database.

## 1. Start with an object type

Ask “What films are there?”

```text
WHICH Film
```


`Film` is an object type in the cinema model. `WHICH` selects it for the results. You do not need a `RETURN` clause.

## 2. Add a relationship and a value

Ask “What films are playing at the Rialto?”

```text
WHICH Film is showing at (Cinema:'Rialto')
```


Read it in three parts:

| Part | Meaning |
| --- | --- |
| `WHICH Film` | Select films. |
| `is showing at` | Follow a relationship reading defined by the model. |
| `(Cinema:'Rialto')` | Constrain Cinema to the specified value. |

Object names and relationship readings come from your model. NexQL is close to natural language, but arbitrary English is not automatically a valid query.

## 3. Refine the question

Ask “What films are playing at the Rialto on 1 April 2023 at 10am?”

```text
WHICH Film is showing at (Cinema:'Rialto')
on (DateTime:'2023-04-01 10:00')
```


The date and time narrow the matching showings. Line breaks here make the query easier to read.

## 4. Choose more results

```text
WHICH Film is showing at WHICH Cinema at WHICH DateTime
```


Each `WHICH` selects another object type to return. For each selected object type, NexQL returns the fields of the first-found uniqueness constraint. If none is found, it returns the primary key.

## Try it yourself

Using the cinema vocabulary, write a query for films showing at the Great Western Cinema.

<details><summary>See the query</summary>


```text
WHICH Film is showing at (Cinema:'Great Western Cinema')
```


</details>

Continue with [choosing results](../results/) or [the agent workflow](../agents/).