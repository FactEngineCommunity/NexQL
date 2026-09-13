---
title: Language essentials
description: A compact guide to the NexQL constructs used in the documented examples.
---

This is a practical reference for the documented query patterns, not a complete formal specification. The existing parser grammar is maintained as `FEQLSyntax.tpg` in the FactEngine/Boston source tree; its FEQL name reflects that implementation’s naming.

| Construct | Purpose | Example |
| --- | --- | --- |
| WHICH | Select an object type for results | `WHICH Film` |
| A / AN | Introduce a related object | `A Session` |
| THAT | Continue a relationship reading | `A Session THAT has A Booking` |
| AND | Combine conditions | `AND is on (DateTime.MONTH:01)` |
| NO | Express an absent related object | `has NO Booking` |
| Typed value | Constrain an object to a value | `(Cinema:'Rialto')` |
| Date part | Select or constrain part of a date | `(DateTime.YEAR:2023)` |
| Pattern | Match a value pattern | `(Mat Description~'%Flatscreen%')` |
| RETURN | Request explicit fields or aggregates | `RETURN Person.LoginName` |
| GROUP BY | Group aggregate results | `GROUP BY SalesOrder.SldToCustCity` |
| HAVING | Filter aggregate groups | `HAVING SalesOrder.SlsLineTotal.SUM > 1000000` |
| ORDER BY | Sort returned results | `ORDER BY SalesOrder.SlsLineMatDesc` |
| LIMIT | Bound returned results | Check your execution target’s support. |

## Default results

`RETURN` is optional. `WHICH` before an object type returns the fields of the first-found uniqueness constraint for that object type. When none is found, it returns the primary key. It does not implicitly select every property.

## Names and values

Use the names, readings and field references defined by the model. Examples use uppercase keywords, title-style object names and lowercase predicates. Text values are shown in single quotes. These conventions help distinguish language structure from model vocabulary.

## Scope

Execution depends on FactEngine, model mappings and the configured target. The training corpus contains broader and evolving patterns, including presentation directives; their presence is not a promise of support in every runtime. Validate the patterns you adopt in your own environment.