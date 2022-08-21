import { UrlLink } from 'src/types/url-link.type';
import { IBase } from '../base.interface';

/**
 * interface for pep model
 */
export interface IPep extends IBase {
  title: string;
  subtitle?: string;
  metadata?: string;
  bodyText?: string;
  bodyLink?: UrlLink;
}
