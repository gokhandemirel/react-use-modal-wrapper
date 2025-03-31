# react-use-modal-wrapper

## Getting Started

```bash
  npm install react-use-modal-wrapper
```

## Usage

```jsx
import React from 'react';
import { useModalWrapper } from 'react-use-modal-wrapper';

const Component = () => {

  const { modal, openModal, closeModal } = useModalWrapper({
    className: '',
    children: <div>Modal Content</div>,
    backdropClose: true,
    backdropClassName: ''
  });
  return (
    <div>
      {modal}
      <button onClick={() => openModal()}>Open Modal</button>
    </div>
  );
};
```

## Props
- `className?` - Modal content className
- `children?` - Modal content react node
- `backdropClose?` - Backdrop auto close
- `backdropClassName?` - Modal backdrop className

## Return properties
- `modal?` - Modal html node
- `openModal?` - Open modal function,
- `closeModal?` - Close modal function

## LICENSE

[MIT](LICENSE)