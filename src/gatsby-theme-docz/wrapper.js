import React from 'react';
import { HoppinDesignProvider } from '../../../src/components/HoppinDesignProvider';

export default ({ children }) => (
  <HoppinDesignProvider>{children}</HoppinDesignProvider>
);
