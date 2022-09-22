export interface NavigationLink {
  to: string;
  text: string;
  assistiveText?: string;
}
export interface NavigationProps {
  links: NavigationLink[];
}
