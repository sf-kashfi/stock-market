// MUI Imports
import Chip from '@mui/material/Chip'
import { useTheme } from '@mui/material/styles'

// Third-party Imports
import PerfectScrollbar from 'react-perfect-scrollbar'

// Type Imports
import type { VerticalMenuContextProps } from '@menu/components/vertical-menu/Menu'

// Component Imports
import { Menu, SubMenu, MenuItem, MenuSection } from '@menu/vertical-menu'

// Hook Imports
import useVerticalNav from '@menu/hooks/useVerticalNav'

// Styled Component Imports
import StyledVerticalNavExpandIcon from '@menu/styles/vertical/StyledVerticalNavExpandIcon'

// Style Imports
import menuItemStyles from '@/styles/menuItemStyles'

type RenderExpandIconProps = {
  open?: boolean
  transitionDuration?: VerticalMenuContextProps['transitionDuration']
}

const RenderExpandIcon = ({ open, transitionDuration }: RenderExpandIconProps) => (
  <StyledVerticalNavExpandIcon open={open} transitionDuration={transitionDuration}>
    <i className='ri-arrow-right-s-line' />
  </StyledVerticalNavExpandIcon>
)

const VerticalMenu = ({ scrollMenu }: { scrollMenu: (container: any, isPerfectScrollbar: boolean) => void }) => {
  // Hooks
  const theme = useTheme()
  const { isBreakpointReached, transitionDuration } = useVerticalNav()

  const ScrollWrapper = isBreakpointReached ? 'div' : PerfectScrollbar

  return (
    <ScrollWrapper
      {...(isBreakpointReached
        ? {
            className: 'bs-full overflow-y-auto overflow-x-hidden',
            onScroll: container => scrollMenu(container, false)
          }
        : {
            options: { wheelPropagation: false, suppressScrollX: true },
            onScrollY: container => scrollMenu(container, true)
          })}
    >
      <Menu
        menuItemStyles={menuItemStyles(theme)}
        renderExpandIcon={({ open }) => <RenderExpandIcon open={open} transitionDuration={transitionDuration} />}
        renderExpandedMenuItemIcon={{ icon: <i className='ri-circle-line' /> }}
      >
        <MenuItem href='/'>در یک نگاه</MenuItem>
        <MenuItem>پیام ناظر</MenuItem>
        <MenuItem>سابقه</MenuItem>
        <MenuItem>اطلاعیه</MenuItem>
        <MenuItem>آگهی مجمع</MenuItem>
        <MenuItem>تغییر وضعیت</MenuItem>
        <MenuItem>شناسه</MenuItem>
        <MenuItem>هیات مدیره</MenuItem>
        <MenuItem>حقیقی-حقوقی</MenuItem>
        <MenuItem>سهامداران</MenuItem>
        <MenuItem>EPS</MenuItem>
        <MenuItem>DPS</MenuItem>
        <MenuItem>آمارها</MenuItem>
        <MenuItem>معرفی</MenuItem>
        <MenuItem>ترازنامه</MenuItem>
        <MenuItem>سود و زیان</MenuItem>
        <MenuItem>تولید و فروش</MenuItem>
        <MenuItem>پورتفوی</MenuItem>
        <MenuItem>تصمیمات مجمع</MenuItem>
      </Menu>
    </ScrollWrapper>
  )
}

export default VerticalMenu
