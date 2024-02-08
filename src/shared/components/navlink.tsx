import { Link, LinkProps } from '@tanstack/react-router';

export function NavLink(props: LinkProps) {
  return <Link {...props}>{props.children}</Link>;
}
