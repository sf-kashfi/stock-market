// Type Imports
import type { ChildrenType } from '@/types/types'

// Layout Imports
import LayoutWrapper from '@layouts/LayoutWrapper'
import VerticalLayout from '@layouts/VerticalLayout'

// Component Imports
import ProvidersWrapper from '@components/ProvidersWrapper'
import Navigation from '@components/layout/vertical/Navigation'
import Navbar from '@components/layout/vertical/Navbar'
import VerticalFooter from '@components/layout/vertical/Footer'

const Layout = async ({ children }: ChildrenType) => {
  // Vars
  const direction = 'rtl'

  return (
    <ProvidersWrapper direction={direction}>
      <LayoutWrapper
        verticalLayout={
          <VerticalLayout navigation={<Navigation />} navbar={<Navbar />} footer={<VerticalFooter />}>
            {children}
          </VerticalLayout>
        }
      />
    </ProvidersWrapper>
  )
}

export default Layout
