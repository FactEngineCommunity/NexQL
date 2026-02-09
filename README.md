NexQL query language.


# NexQL

NexQL is a semantic query language for asking data questions in a way that looks and feels close to natural language, while still being precise, structured, and composable. It is designed to make queries readable by humans and consumable by machines, bridging the gap between everyday questions and formal query execution.

This repository contains the language examples, evolving documentation, and future implementation work.

## Why NexQL?
NexQL aims to make query intent explicit, reduce translation loss from natural language, and support modern AI-era workflows:

- **Readable by humans**: queries resemble the question you would ask.
- **Structured and deterministic**: unambiguous relationships and filters.
- **Composable**: build complex queries by chaining constraints.
- **Analytics-ready**: built-in aggregation and grouping patterns.

## Quick look

**Question → NexQL**

```
\# What films are playing at the Rialto on 1st April 2023 at 10am

WHICH Film is showing at (Cinema:'Rialto') on (DateTime:'2023-04-01 10:00')
```

```
# Which customer had the highest sales in June 1999
WHICH Sales Order was on (Sales Date.MONTH:'06') AND was on (Sales Date.YEAR:'1999')
RETURN SalesOrder.SldToCustName, SalesOrder.SlsLineTotal.SUM
ORDER BY 2 DESC
```

```
\# Show me the total sales by customer city
WHICH Sales Order has WHICH Sold To Customer City AND WHICH Line Total
RETURN SalesOrder.SldToCustCity, SalesOrder.SlsLineTotal.SUM
GROUP BY SalesOrder.SldToCustCity
```
## Core ideas (as seen in examples)
- **Entity-first querying** with `WHICH`, `WHERE`, and explicit relationships.
- **Rich constraints**: time parts (`DateTime.YEAR`, `Sales Date.MONTH`), comparisons, and pattern matches.
- **Result shaping** with `RETURN`, including aggregates like `SUM`, `AVG`, `COUNT`.
- **Analysis helpers**: `GROUP BY`, `ORDER BY`, `HAVING`, `LIMIT`.
- **Negation** via `NO` and quantified constraints.

## Example patterns

```nexql
# Find seats available for a film at a cinema on a date
WHICH Seat has NO Booking for A Session to watch (Film:'Rocky')
at (Cinema:'Great Western Cinema') on (DateTime.DATE:'2023-01-20')
```

```nexql
# Ask for distinct entities
WHICH Nation has A Customer RETURN DISTINCT Nation
```

```nexql
# Aggregate and filter
WHICH Sales Order was on (Sales Date.YEAR:'2020') AND has WHICH SldToCustCntry AND WHICH Line Total
RETURN SalesOrder.SldToCustCntry, SalesOrder.SlsLineTotal.SUM
GROUP BY SalesOrder.SldToCustCntry
HAVING SalesOrder.SlsLineTotal.SUM > 1000000
```
## Repository layout

- `Examples/QueryByExample/` — curated question → NexQL training examples.
- `docs/` — documentation site (Astro).

## Status

NexQL is in its early stages. Examples are evolving and the formal specification and implementation roadmap are under active development.

## Contributing

Contributions, ideas, and feedback are welcome. If you’re interested in shaping the language, open an issue or start a discussion.

## License

TBD.

