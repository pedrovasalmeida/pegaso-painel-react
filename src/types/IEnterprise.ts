export interface IEnterprise {
  ref: string;
  id: string;
  name: string;
  banner: string;
  description: string;
  shortDescription: string;
  address: string;
  displayOrder: number;
  createdAt: string;
  updatedAt: string;
  images: {
    id: string;
    link: string;
    imageDisplayOrder: string;
  }[];
}

export interface ICreateEnterprise {
  name: string;
  description: string;
  banner: string;
  shortDescription: string;
  address: string;
}
