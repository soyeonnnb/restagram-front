export type AddressInterface = {
  id: number;
  name: string;
};

export interface AddressListInterface {
  id: number;
  name: string;
  list: AddressInterface[];
}

export type GroupedAddress = {
  [id: number]: {
    sido: AddressInterface;
    siggList: {
      [id: number]: {
        sigg: AddressInterface;
        emdList: AddressInterface[];
      };
    };
  };
};

export type SearchAddressInterface = {
  sido: AddressInterface;
  sigg: AddressInterface;
  emd: AddressInterface;
};
