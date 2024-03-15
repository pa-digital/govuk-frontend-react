export interface NavigationLink {
  to: string;
  text: string;
  assistiveText?: string;
}
export interface NavigationProps {
  links: NavigationLink[];
}

export interface HeaderNavigationProps extends NavigationProps {
  identifier: string;
  serviceNameDetails?: NavigationLink;
}
