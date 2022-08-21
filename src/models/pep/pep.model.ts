import { CoreLiterals } from 'src/constants/core-literals';
import { UrlLink } from 'src/types/url-link.type';
import { IPep } from './pep.interface';

/**
 * pep model
 */
export class Pep implements IPep {
  private _title: string;
  private _subtitle?: string;
  private _metadata?: string;
  private _bodyText?: string;
  private _bodyLink?: UrlLink;
  private _createdAt: Date;
  private _createdBy?: string;
  private _modifiedAt?: Date;
  private _modifiedBy?: string;

  public get title(): string {
    return this._title;
  }

  public get subtitle(): string {
    return this._subtitle || CoreLiterals.EMPTY_STRING;
  }

  public get metadata(): string {
    return this._metadata || CoreLiterals.EMPTY_STRING;
  }

  public get bodyText(): string {
    return this._bodyText || CoreLiterals.EMPTY_STRING;
  }

  public get bodyLink(): UrlLink | undefined {
    return this._bodyLink;
  }

  public get createdAt(): Date {
    return this._createdAt;
  }

  public get createdBy(): string | undefined {
    return this._createdBy;
  }

  public get modifiedAt(): Date | undefined {
    return this._modifiedAt;
  }

  public get modifiedBy(): string | undefined {
    return this._modifiedBy;
  }

  constructor(props: IPep) {
    this._title = props.title;
    this._subtitle = props.subtitle;
    this._metadata = props.metadata;
    this._bodyText = props.bodyText;
    this._bodyLink = props.bodyLink;
    this._createdAt = props.createdAt;
    this._createdBy = props.createdBy;
    this._modifiedAt = props.modifiedAt;
    this._modifiedBy = props.modifiedBy;
  }

  public get(): Pep {
    return this;
  }
}
