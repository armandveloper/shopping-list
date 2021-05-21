import { keyframes } from 'styled-components';

export const slideInRight = keyframes`
  from {
    transform: translate3d(100%, 0, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
`;

export const slideOutRight = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(100%, 0, 0);
  }
`;

// For mobile devices
export const showAddItemAnimation = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(-100%, 0, 0);
  }
`;

// For mobile devices
export const hideAddItemAnimation = keyframes`
  from {
    transform: translate3d(-100%, 0, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
`;

export const slideInUp = keyframes`
  from {
    transform: translate3d(0, -4rem, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
`;

export const slideOutUp = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(0, -100%, 0);
  }
`;
