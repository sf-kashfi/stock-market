'use client'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { ChildrenType } from '@/types/types'

// Util Imports
import { verticalLayoutClasses } from '@/components/layout/layoutClasses'

// Styled Component Imports
import StyledMain from '@/components/layout/shared/StyledMain'

const LayoutContent = ({ children }: ChildrenType) => {
  return (
    <StyledMain
      isContentCompact={true}
      className={classnames(verticalLayoutClasses.content, verticalLayoutClasses.contentCompact, 'flex-auto is-full')}
    >
      {children}
    </StyledMain>
  )
}

export default LayoutContent
