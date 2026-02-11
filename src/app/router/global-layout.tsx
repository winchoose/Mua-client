import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export default function GlobalLayout() {
  return (
    <main
      className="
        flex flex-col
        min-h-[100dvh]
        w-full
        min-w-[var(--min-width)]
        max-w-[var(--max-width)]
        mx-auto
        bg-white
      "
    >
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </main>
  );
}
