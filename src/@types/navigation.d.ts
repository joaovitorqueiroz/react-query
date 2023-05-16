export type DetailsParams = {
  id: string;
};

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      details: DetailsParams;
    }
  }
}
