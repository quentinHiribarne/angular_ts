// Generated by https://quicktype.io

export interface Comics {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: Data;
}

export interface Data {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Result[];
}

export interface Result {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: null | string;
  modified: string;
  isbn: Isbn;
  upc: string;
  diamondCode: DiamondCode;
  ean: Ean;
  issn: Issn;
  format: Format;
  pageCount: number;
  textObjects: TextObject[];
  resourceURI: string;
  urls: URL[];
  series: Series;
  variants: Series[];
  collections: any[];
  collectedIssues: any[];
  dates: DateElement[];
  prices: Price[];
  thumbnail: Thumbnail;
  images: Thumbnail[];
  creators: Creators;
  characters: Characters;
  stories: Stories;
  events: Characters;
}

export interface Characters {
  available: number;
  collectionURI: string;
  items: Series[];
  returned: number;
}

export interface Series {
  resourceURI: string;
  name: string;
}

export interface Creators {
  available: number;
  collectionURI: string;
  items: CreatorsItem[];
  returned: number;
}

export interface CreatorsItem {
  resourceURI: string;
  name: string;
  role: Role;
}

export enum Role {
  Editor = 'editor',
  Penciller = 'penciller',
  PencillerCover = 'penciller (cover)',
  Writer = 'writer',
}

export interface DateElement {
  type: DateType;
  date: string;
}

export enum DateType {
  DigitalPurchaseDate = 'digitalPurchaseDate',
  FocDate = 'focDate',
  OnsaleDate = 'onsaleDate',
  UnlimitedDate = 'unlimitedDate',
}

export enum DiamondCode {
  Empty = '',
  Sep190996 = 'SEP190996',
  Sep200729 = 'SEP200729',
}

export enum Ean {
  Empty = '',
  The978130291481351799 = '9781302 914813 51799',
  The978130292827853999 = '9781302 928278 53999',
}

export enum Format {
  Comic = 'Comic',
  Hardcover = 'Hardcover',
  TradePaperback = 'Trade Paperback',
}

export interface Thumbnail {
  path: string;
  extension: Extension;
}

export enum Extension {
  Jpg = 'jpg',
}

export enum Isbn {
  Empty = '',
  The9781302914813 = '978-1-302-91481-3',
  The9781302928278 = '978-1-302-92827-8',
}

export enum Issn {
  Empty = '',
  The23284811 = '2328-4811',
  The23738820 = '2373-8820',
}

export interface Price {
  type: PriceType;
  price: number;
}

export enum PriceType {
  DigitalPurchasePrice = 'digitalPurchasePrice',
  PrintPrice = 'printPrice',
}

export interface Stories {
  available: number;
  collectionURI: string;
  items: StoriesItem[];
  returned: number;
}

export interface StoriesItem {
  resourceURI: string;
  name: string;
  type: ItemType;
}

export enum ItemType {
  Cover = 'cover',
  InteriorStory = 'interiorStory',
}

export interface TextObject {
  type: TextObjectType;
  language: Language;
  text: string;
}

export enum Language {
  EnUs = 'en-us',
}

export enum TextObjectType {
  IssuePreviewText = 'issue_preview_text',
  IssueSolicitText = 'issue_solicit_text',
}

export interface URL {
  type: URLType;
  url: string;
}

export enum URLType {
  Detail = 'detail',
  InAppLink = 'inAppLink',
  Purchase = 'purchase',
  Reader = 'reader',
}