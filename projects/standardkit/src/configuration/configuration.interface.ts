import { AlertLevelType } from '../types/alert-level.type';
import { BorderPositionType } from '../types/border-position.type';
import { BreakpointType } from '../types/breakpoint.type';
import { CaseType } from '../types/case.type';
import { CornerType } from '../types/corner.type';
import { FillType } from '../types/fill.type';
import { HighlightType } from '../types/highlight.type';
import { PositionType } from '../types/position.type';
import { SizeType } from '../types/size.type';
import { VerticalPositionType } from '../types/vertical-position.type';
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
  cornerRadius?: SizeType | string;
}

interface Elevation {
  elevation?: SizeType | string;
}

interface Margin {
  margin?: SizeType | string;
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

  size?: SizeType | string;
  padding?: SizeType | string;
  margin?: SizeType | string;

  borderPosition?: BorderPositionType | string;
  borderSize?: SizeType | string;

  corner?: CornerType | string;
  cornerRadius?: SizeType | string;

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

  // Typography
  title?: Case & SizeConfiguration;
  subtitle?: Case & SizeConfiguration;
  paragraph?: SizeConfiguration;
  highlight?: { type?: HighlightType | string; } & Case;

  // Forms
  form?: FormConfiguration & Corner & Elevation;
  formField?: FormConfiguration & Corner & Elevation | {
    fullWidthUntil?: boolean; labelInline?: boolean;
    labelOffset?: number; labelColumns?: number;
    fieldOffset?: number; fieldColumns?: number;
  };
  label?: FormConfiguration;
  input?: FormConfiguration & Corner & Elevation;
  select?: FormConfiguration & Corner & Elevation;
  textarea?: FormConfiguration & Corner & Elevation & { rows?: number; };
  formError?: FormConfiguration;
  toggle?: FormConfiguration & Elevation;
  range?: SizeConfiguration & FullWidth;
  checkbox?: SizeConfiguration & Corner & Elevation;
  radio?: SizeConfiguration & Corner & Elevation;
  inputGroup?: FormConfiguration & Corner & Elevation;
  datePicker?: FormConfiguration & Corner & Elevation;
  colorPicker?: FormConfiguration & Corner & Elevation;
  autocomplete?: SizeConfiguration & Corner & Elevation;

  // Tables

  // Components
  alert?: { hasIcon?: boolean; dismissable?: boolean; disabled?: boolean; type?: AlertLevelType | string }
    & Fill & SizeConfiguration & FullWidth;
  badge?: { position?: PositionType; };
  button?: SizeConfiguration & FullWidth & Case & Elevation & Corner & Fill & { type?: string; };
  loadButton?: SizeConfiguration & FullWidth & Case & Elevation & Corner & Fill & { type?: string; };
  buttonGroup?: SizeConfiguration & FullWidth & Case & Elevation & Corner & Fill & { type?: string; };
  progressBar?: SizeConfiguration & Case & Elevation & Corner & Fill & { mode?: string; };
  image?: {};
  section?: Margin;
}
