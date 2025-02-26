export enum Location {
  airport = "airport",
  cityCenter = "citycenter",
}

export interface SearchProps {
  persons?: string;
  loc?: Location | undefined;
  paramsCheckin?: Date;
  paramsCheckout?: Date;
}
