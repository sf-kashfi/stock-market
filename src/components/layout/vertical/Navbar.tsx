'use client'

// Third-party Imports
import classnames from 'classnames'
import type { CSSObject } from '@emotion/styled'

// Type Imports
import type { ChildrenType } from '@/types/types'

// Util Imports
import { verticalLayoutClasses } from '@/components/layout/layoutClasses'

// Styled Component Imports
import StyledHeader from '@/components/layout/vertical/StyledHeader'
import NavbarContent from './NavbarContent'

type Props = ChildrenType & {
  overrideStyles?: CSSObject
}

const Navbar = (props: Props) => {
  // Props
  const { overrideStyles } = props

  return (
    <StyledHeader
      overrideStyles={overrideStyles}
      className={classnames(
        verticalLayoutClasses.header,
        verticalLayoutClasses.headerContentCompact,
        verticalLayoutClasses.headerStatic,
        verticalLayoutClasses.headerDetached
      )}
    >
      <div className={classnames(verticalLayoutClasses.navbar, 'flex bs-full')}>
        <NavbarContent />
      </div>
    </StyledHeader>
  )
}

export default Navbar
