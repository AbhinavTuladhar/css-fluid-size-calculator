import Header from '@/components/header'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="min-h-dvh text-white">
        <Header />
        <main className="bg-background">
          <Outlet />
        </main>
      </div>
      <TanStackRouterDevtools />
    </>
  ),
})
