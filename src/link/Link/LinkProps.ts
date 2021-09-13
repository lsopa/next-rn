import { Pressable, TextStyle } from 'react-native'
import { ComponentPropsWithoutRef } from 'react'
import { NavigateTo } from '../../router/use-routing/types' // wrong import

export type LinkProps<
  ExtraProps extends object = {},
  Web extends object = {}, 
  //@ts-ignore
  Native extends object = Required<NavigateTo>['native'],
  Params extends object = {}
> = {
  /**
   * Required: child component/text
   */
  children: React.ReactNode
  /**
   * Optional: props passed to Pressable component on native.
   */
  PressableProps?: ComponentPropsWithoutRef<typeof Pressable>
  /**
   * Link text style
   */
  style?: TextStyle
  /**
   * Route name to navigate to
   */
  routeName: string
  /**
   * Navigation state parameters to pass to the screen you're navigating to.
   */
  params?: Params
  web?: Web
  /**
   * If false, it will not automatically wrap the children with a `Text` node.
   * This is useful if you want to use a link around something other than text.
   *
   * Default: `true`
   */
  isText?: boolean
  native?: Native
} & ExtraProps
