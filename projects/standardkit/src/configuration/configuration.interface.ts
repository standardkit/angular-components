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

interface Density {
  density?: SizeType | string;
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

interface ContentSize {
  contentSize?: SizeType | string;
}

interface Corner {
  corner?: CornerType | string;
  cornerRadius?: SizeType | string;
}

type SizeConfiguration = Size | Density | ContentSize;
type FormConfiguration = SizeConfiguration | Case | FullWidth;

export interface SkConfigurationInterface {
  // Global
  classPrefix?: 'sk-' | string;

  iconSet?: string;
  iconClass?: string;
  iconMap?: SkIconMapConfiguration;

  // Flavours
  elevation?: SizeType | string;
  fill?: FillType | string;

  size?: SizeType | string; // Cascades to density & content size
  density?: SizeType | string;
  contentSize?: SizeType | string;

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

    error?: string;
    warning?: string;
    info?: string;
    success?: string;

    errorBackground?: string; // Cascades from error
    warningBackground?: string; // Cascades from warning
    infoBackground?: string;
    successBackground?: string;

    rangeInput?: string;

    inputError?: string;
    inputWarning?: string;
    inputInfo?: string;
    inputSuccess?: string;
  };

  notification?: {
    displayDuration?: number; // Milliseconds
    displayAfter?: number; // Milliseconds
  };

  // Grid
  container?: { fullWidthUntil: BreakpointType | string; } | Density | FullWidth;
  column?: { horizontalGrow?: boolean; verticalGrow?: boolean; } | Density;
  row?: { verticalAlign?: VerticalPositionType | string; } | Density;

  // Layout
  // sidebar?: { fullWidthUntil: BreakpointType | string; };

  // Typography
  title?: Case | SizeConfiguration;
  subtitle?: Case | SizeConfiguration;
  paragraph?: SizeConfiguration;
  span?: { highlight?: HighlightType | string; } | Case;

  // Forms
  form?: FormConfiguration | Corner;
  formField?: FormConfiguration | Corner | {
    fullWidthUntil?: boolean; labelInline?: boolean;
    labelOffset?: number; labelColumns?: number;
    fieldOffset?: number; fieldColumns?: number;
  };
  label?: FormConfiguration;
  input?: FormConfiguration | Corner;
  select?: FormConfiguration | Corner;
  textarea?: FormConfiguration | Corner | { rows?: number; };
  formError?: FormConfiguration;
  toggle?: FormConfiguration;
  range?: SizeConfiguration | FullWidth;

  // Tables

  // Components
  alert?: { hasIcon?: boolean; dismissable?: boolean; disabled?: boolean; type?: AlertLevelType | string };
  badge?: { position?: PositionType; };
  button?: Case | Density;
}
