import { Link, LinkComponentProps } from '@tanstack/react-router';

export function NavLink(props: LinkComponentProps) {
  return <Link {...props}>{props.children}</Link>;
}
