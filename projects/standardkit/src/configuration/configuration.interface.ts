import { AlertLevelType } from '../types/alert-level.type';
import { AlignmentType } from '../types/alignment.type';
import { BorderPositionType } from '../types/border-position.type';
import { BreakpointType } from '../types/breakpoint.type';
import { CaseType } from '../types/case.type';
import { ColorType } from '../types/color.type';
import { CornerType } from '../types/corner.type';
import { ElevationType } from '../types/elevation.type';
import { FillType } from '../types/fill.type';
import { HighlightType } from '../types/highlight.type';
import { PositionType } from '../types/position.type';
import { SizeType } from '../types/size.type';
import { VerticalPositionType } from '../types/vertical-position.type';
import { WidthType } from '../types/width.type';
import { SkIconMapConfiguration } from './icon-map.configuration';

interface Padding {
  padding?: SizeType | string;
}

interface Case {
  case?: CaseType | string;
}

interface FullWidth {
  fullWidth?: boolean;
}

interface Size {
  size?: SizeType | string;
}

interface Fill {
  fill?: FillType | string;
}

interface Corner {
  corner?: CornerType | string;
}

interface Color {
  color?: ColorType | string;
}

interface Elevation {
  elevation?: ElevationType | string;
}

interface Margin {
  margin?: SizeType | string;
}

interface Position {
  position?: VerticalPositionType | string;
}

interface Extendable {
  [key: string]: string;
}

type SizeConfiguration = Size & Padding & Margin;
type FormConfiguration = SizeConfiguration & Case & FullWidth;

export interface SkConfigurationInterface {
  // Global
  classPrefix?: 'sk-' | string;

  iconSet?: string;
  iconClass?: string;
  iconMap?: SkIconMapConfiguration;

  // Flavours
  elevation?: SizeType | string;
  fill?: FillType | string;

  alignment?: AlignmentType | string;

  size?: SizeType | string;
  padding?: SizeType | string;
  margin?: SizeType | string;

  borderPosition?: BorderPositionType | string;
  borderSize?: SizeType | string;

  corner?: CornerType | string;
  color?: ColorType | string;
  position?: VerticalPositionType | string;

  colors?: {
    title?: string;
    text?: string;
    accent?: string;
    background?: string;
    border?: string;
    highlight?: string;
    rangeInput?: string;
    navigation?: string,
    alert?: {
      error?: string;
      warning?: string;
      info?: string;
      success?: string;
    } | Extendable;
  } | Extendable;

  notification?: {
    displayDuration?: number; // Milliseconds
    displayAfter?: number; // Milliseconds
  };

  // Grid
  container?: { fullWidthUntil: BreakpointType | string; } & Padding & FullWidth;
  column?: { horizontalGrow?: boolean; verticalGrow?: boolean; } & Padding;
  row?: { verticalAlign?: VerticalPositionType | string; } & Padding;

  // Layout
  navigationBar?: { color?: string; } & SizeConfiguration & Fill & Elevation & Extendable;
  cardLayout?: Padding & Fill & Elevation & Corner & Margin & Size & Extendable;

  // Typography
  title?: Case & SizeConfiguration;
  subtitle?: Case & SizeConfiguration;
  paragraph?: SizeConfiguration;
  highlight?: { type?: HighlightType | string; } & Case;

  // Forms
  form?: FormConfiguration & Corner & Elevation;
  formWidth?: WidthType | string;
  formField?: FormConfiguration & Corner & Elevation | {
    fullWidthUntil?: boolean; labelInline?: boolean;
    labelOffset?: number; labelColumns?: number;
    fieldOffset?: number; fieldColumns?: number;
  };
  label?: FormConfiguration;
  input?: FormConfiguration & Corner & Elevation & { width?: WidthType | string };
  select?: FormConfiguration & Corner & Elevation;
  textarea?: FormConfiguration & Corner & Elevation & { rows?: number; };
  formError?: FormConfiguration;
  toggle?: FormConfiguration & Elevation;
  range?: SizeConfiguration & FullWidth;
  checkbox?: SizeConfiguration & Corner & Elevation;
  radio?: SizeConfiguration & Corner & Elevation;
  inputGroup?: FormConfiguration & Corner & Elevation & { width?: WidthType | string } & Extendable;
  datePicker?: FormConfiguration & Corner & Elevation;
  colorPicker?: FormConfiguration & Corner & Elevation;
  autocomplete?: SizeConfiguration & Corner & Elevation;

  // Tables
  table?: Padding & Extendable;

  // Components
  alert?: { hasIcon?: boolean; dismissable?: boolean; disabled?: boolean; type?: AlertLevelType | string }
    & Fill & SizeConfiguration & Corner & { alignIcon?: VerticalPositionType | string, alignDismiss?: VerticalPositionType | string };
  bar?: { alignment?: AlignmentType | string, verticalAlignment?: VerticalPositionType | string } & Extendable;
  badge?: { position?: PositionType; };
  button?: SizeConfiguration & FullWidth & Case & Elevation & Corner & Fill & Color & { type?: string; };
  divider?: Margin & Extendable;
  loadButton?: SizeConfiguration & FullWidth & Case & Elevation & Corner & Fill & { type?: string; };
  buttonGroup?: SizeConfiguration & FullWidth & Case & Elevation & Corner & Fill & { type?: string; };
  progressBar?: SizeConfiguration & Case & Elevation & Corner & Fill & { mode?: string; };
  image?: Corner;
  modal?: Padding & Extendable;
  section?: Margin & Extendable;
  list?: Elevation & Corner;
  listItem?: Position & Extendable;
  spinner?: Size & Margin & { type?: ColorType | string } & Extendable;
}
