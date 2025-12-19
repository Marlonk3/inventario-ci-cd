import { vi } from 'vitest';
import '@testing-library/jest-dom';

vi.stubGlobal('fetch', vi.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve([]),
        ok: true 
    })
));