---
title: Concepts and FAQ
description: Understand NexQL, FactEngine and the model that gives a query meaning.
---

## Is NexQL just natural language?

NexQL is a formal query language with natural-language readings. A question can map closely to its NexQL form, but its object names and predicates must resolve against a model. Free-form English is input to an AI translation step, not a substitute for language syntax.

## What does FactEngine do?

FactEngine uses the model to connect query concepts and relationships to database structures. NexQL can be translated to SQL or Cypher for a configured target. Actual execution requires the matching model, mappings and database environment.

## Do I need RETURN?

No. Put `WHICH` in front of each object type you want returned. Its default fields come from the first-found uniqueness constraint, or the primary key if no uniqueness constraint is found. Add `RETURN` for explicit fields and aggregates.

## Why Object-Role Modeling and Fact-Based Modelling?

They describe a domain through object types, facts, relationship readings and constraints. For NexQL, that means a query can follow a meaningful reading such as “Film is showing at Cinema”. The model supplies the semantics that connect the words to the data.

You can start writing queries from examples and a model’s vocabulary without learning the full modelling notation. The [Fact-Based Modelling MetaModel](https://factenginecommunity.github.io/Fact-Based-Modelling-MetaModel/) offers a deeper introduction, and [Unified Modelling Schema](https://unified-modelling-schema.org/) explores structure and meaning in portable schemas.

## How does this relate to ontologies?

NexQL’s use of named concepts and relationships aligns with ontology-oriented approaches, including the kind of ontologies built for Apache Ossie (incubating). This conceptual fit does not imply an out-of-the-box NexQL integration or import path. Query execution still depends on a compatible FactEngine model and mappings.

## Does deterministic mean the AI always gets it right?

No. Determinism concerns parsing and translating a valid query under the same model and configuration. An AI can still express the wrong intent. Validation and evaluation against expected results remain part of an agent integration. Results themselves can change when the data changes.

## Can I install a standalone NexQL package?

The repository currently contains language examples and evolving documentation. These docs do not advertise a standalone package or hosted query endpoint. Use an existing FactEngine environment for execution and follow the [repository](https://github.com/FactEngineCommunity/NexQL) for implementation updates.

## How can I contribute?

Share questions, example pairs and documentation improvements through the [NexQL repository](https://github.com/FactEngineCommunity/NexQL). Include the relevant model vocabulary and expected behavior when discussing a query.