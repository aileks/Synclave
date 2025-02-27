// @refresh reload
import { Router } from '@solidjs/router';
import { FileRoutes } from '@solidjs/start/router';
import { Suspense } from 'solid-js';

import './app.css';

export default function App() {
  return (
    <Router
      root={props => (
        <div class='min-h-screen bg-gray-800 text-gray-200'>
          {/* Global notification container */}
          <div id='notifications' class='fixed top-4 right-4 z-50'></div>

          {/* Main app container */}
          <main class='h-screen'>
            <Suspense
              fallback={
                <div class='flex h-full w-full items-center justify-center'>
                  <div class='flex animate-pulse flex-col items-center'>
                    <div class='h-12 w-12 rounded-full bg-indigo-600'></div>
                    <div class='mt-4 text-gray-400'>Loading...</div>
                  </div>
                </div>
              }
            >
              {props.children}
            </Suspense>
          </main>
        </div>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
