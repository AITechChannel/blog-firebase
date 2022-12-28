export interface RouteObject {
  path?: string
  index?: boolean
  children?: React.ReactNode
  caseSensitive?: boolean
  id?: string

  element?: React.ReactNode | null
  errorElement?: React.ReactNode | null
}
