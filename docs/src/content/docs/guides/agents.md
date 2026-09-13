---
title: NexQL for AI agents
description: Design an agent workflow around model context, NexQL generation and deterministic translation.
---

NexQL gives an agent a structured way to express a data question using domain vocabulary. Natural language and NexQL share object names and relationship readings, making the translation step close to the original intent.

The language is deterministic; the LLM generating it is not. Keep query generation, model validation and execution as distinct steps.

## Supply model context

Give the agent the relevant object types, supported relationship readings, identifying constraints, and explicit fields it may return. Include question-to-NexQL examples from the same model. A grammar alone does not describe your domain.

For the first cinema example, the context must establish Film, Cinema, the reading “Film is showing at Cinema”, and how a cinema value identifies a cinema.

## A suggested generation instruction

Adapt this to your model and application. It is a prompt pattern, not an SDK or API contract.

```text
Translate the user’s data question into NexQL.
Use only the supplied object types, relationship readings and fields.
Use WHICH before each object type to return.
RETURN is optional; use it for explicit fields or aggregates.
Without RETURN, WHICH uses the first-found uniqueness constraint
for each selected object type, falling back to its primary key.
Do not invent relationships or identifiers.
If the question cannot be expressed from this context, explain what is missing.
Otherwise output only the NexQL query.
```


## Build the execution loop

1. **Interpret the question.** Resolve missing or ambiguous domain terms.
2. **Generate NexQL.** Use the model vocabulary and relevant examples.
3. **Validate.** Parse the query and resolve objects, readings and fields against the model.
4. **Translate with FactEngine.** Use the model’s mappings to produce SQL or Cypher for the configured target.
5. **Execute through your application.** Apply its access controls and resource limits.
6. **Return grounded results.** Give the agent the returned data and any execution errors. Do not present a generated answer as a database result.

These are integration responsibilities. The public repository currently provides examples and evolving documentation; this guide does not imply a published standalone SDK, hosted API or MCP server.

## Why the intermediate query helps

The generated NexQL is a readable record of query intent. You can inspect, log and compare it independently of the database query. Database mapping belongs in the model and translator, reducing the physical schema detail the agent needs to handle directly.

Deterministic translation does not guarantee that an agent understood the question correctly. Evaluate question/query pairs against expected results on your own models, including ambiguous requests, missing objects, empty results and aggregation.

## Start with a small domain

Use the [cinema examples](../../reference/examples/) to establish an initial evaluation set. Integrate with your existing FactEngine environment, then extend the vocabulary and examples as your use cases grow.