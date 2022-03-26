/**
 * Templates
 */
interface Template{
    children: JSX.Element,
    childrenStyle?: React.CSSProperties 
}

/**
 * Theme
 */

interface Coloring {
  bgColor?: string;
  fontColor?: string;
}

interface Color {
  primary: string;
  secondary?: string;
  third?: string
}

interface Mode extends Coloring {
  color: Color;
  header?: Coloring;
  body?: Coloring;
  footer?: Coloring;
}

interface Theme {
  light: Mode
}