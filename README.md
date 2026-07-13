# @lumine-code/text-buffer

Provides Lumine's mutable text buffer and marker model as a headless module.

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

## Contributing

Got ideas to make this package better, found a bug, or want to help add new features? Just drop your thoughts on GitHub. Any feedback is welcome!
