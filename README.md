# React Use Modal Wrapper

A lightweight and customizable modal hook for React. Easily add modals to your app with minimal code.

## Features

- Easy integration with React apps
- TypeScript support
- Customizable modal content and styles
- Backdrop close functionality

## Install

```bash
npm install react-use-modal-wrapper
```

### Requirements

- React >= 18.3.1
- React-DOM >= 18.3.1

## Usage

```jsx
import React from 'react';
import { useModalWrapper } from 'react-use-modal-wrapper';

const MyComponent = () => {
  const { modal, openModal, closeModal } = useModalWrapper({
    className: 'my-modal', // Optional: custom class for modal content
    children: <div>My Modal Content</div>, // Modal content as a React Node
    backdropClose: true, // Optional: closes modal when clicking backdrop
    backdropClassName: 'my-backdrop', // Optional: custom class for backdrop
  });

  return (
    <div>
      {modal} {/* Renders the modal */}
      <button onClick={openModal}>Open Modal</button> {/* Opens modal on click */}
    </div>
  );
};
```

## Props

- **`className?`**: Class name for the modal content.
- **`children?`**: Modal content to render inside the modal.
- **`backdropClose?`**: Whether clicking the backdrop closes the modal.
- **`backdropClassName?`**: Class name for the modal backdrop.
 
## Return Values

The hook returns an object with the following properties:

- **`modal?`**: The modal HTML/JSX node to be rendered.
- **`openModal?`**: Function to open the modal.
- **`closeModal?`**: Function to close the modal.

## License

[MIT LICENSE](LICENSE)