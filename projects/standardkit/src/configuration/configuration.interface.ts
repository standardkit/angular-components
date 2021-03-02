import { AlertLevelType } from '../types/alert-level.type';
import { BorderPositionType } from '../types/border-position.type';
import { CaseType } from '../types/case.type';
import { CornerType } from '../types/corner.type';
import { FillType } from '../types/fill.type';
import { PositionType } from '../types/position.type';
import { SizeType } from '../types/size.type';
import { SkIconMapConfiguration } from './icon-map.configuration';

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

    error?: string;
    warning?: string;
    info?: string;
    success?: string;

    [key: string]: string | undefined; // Extension (e.g. custom alert type)
  };

  // Components
  alert?: { hasIcon?: boolean; dismissable?: boolean; disabled?: boolean; type?: AlertLevelType | string };
  badge?: { position?: PositionType; };
  button?: { case?: CaseType | string; };
  title?: { case?: CaseType | string; };
}
