# @lumine-code/text-buffer

Provides Lumine's mutable text buffer and marker model as a headless module.

> [!WARNING]
> **This package is deprecated.** Its source now lives inside the [Lumine editor](https://github.com/lumine-code/lumine) as part of Lumine core and is no longer maintained as a standalone package. This repository is archived and no longer receives updates.

## Features

- **Mutable text**: edits, scans, loads, and saves large text documents.
- **Markers and layers**: tracks logical and display ranges as buffer contents change.
- **History and serialization**: supports transactions, undo checkpoints, snapshots, and persistent state.

## Installation

```sh
npm install @lumine-code/text-buffer
```

## Usage

```js
const TextBuffer = require('@lumine-code/text-buffer')

const buffer = new TextBuffer({text: 'Hello, Lumine!'})
buffer.setTextInRange([[0, 7], [0, 13]], 'world')
console.log(buffer.getText())
```

## Changes

This is the Lumine fork of `text-buffer`, published under the `@lumine-code` scope. Relative to the upstream Pulsar package it:

- Rebrands the package to `@lumine-code/text-buffer` and releases it as a new major version.
- Depends on the Node 24-compatible `@lumine-code/superstring` fork.
- Fixes marker bugs and modernizes the marker classes.
- Speeds up large buffers: tracks the rightmost screen position with block maxima instead of full rescans, and routes `setTextViaDiff` through the native differ with a line-diff fallback.
- Fixes `isDeleted()` for buffers loaded from a nonexistent path.
- Audits and updates the API documentation.
- Upgrades the test runner to Jasmine 6 and makes the save-conflict/reload specs robust to duplicate watcher events.
- Modernizes dependencies onto the `@lumine-code` `fs-plus`, `underscore-plus`, and `pathwatcher` forks.
- Adds cross-platform CI and modernizes the publish workflows.
- Updates the license attribution for Lumine.

## Contributing

Got ideas to make this package better, found a bug, or want to help add new features? Just drop your thoughts on GitHub. Any feedback is welcome!
