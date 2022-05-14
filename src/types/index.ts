let product = {
  "_id": "627f9c37afb04e9043f6fcb6",
  "uniqueId": "6EA48CF66F6349648018C322C5560FA8",
  "id": "16701615",
  "productId": "317",
  "productRefId": null,
  "refId": null,
  "ean": "223311",
  "name": "Trufa BENDITO CACAU 55% CACAU 30 G",
  "skuName": "30 G",
  "modalType": null,
  "parentItemIndex": null,
  "parentAssemblyBinding": null,
  "assemblies": [],
  "priceValidUntil": "2020-12-01T02:30:00Z",
  "tax": 0,
  "price": 303,
  "listPrice": 303,
  "manualPrice": null,
  "sellingPrice": 273,
  "rewardValue": 0,
  "isGift": false,
  "additionalInfo": {
    "brandName": "Codeby",
    "brandId": "2000004",
    "offeringInfo": null,
    "offeringType": null,
    "offeringTypeId": null
  },
  "preSaleDate": null,
  "productCategoryIds": "/29/",
  "productCategories": {
    "29": "trufas"
  },
  "quantity": 1,
  "seller": "1",
  "sellerChain": [
    "1"
  ],
  "imageUrl": "http://codeby.vteximg.com.br/arquivos/ids/159959-800-1029/truffon-meio-amargo.png?v=636930938547630000",
  "detailUrl": "/trufa-bendito-cacau-55-/p",
  "components": [],
  "bundleItems": [],
  "attachments": [],
  "attachmentOfferings": [],
  "offerings": [],
  "priceTags": [
    {
      "name": "discount@price-6f7f6403-f49b-4e24-936e-bbdba265e959#42b7009d-54a4-4c66-abae-1446b085c5c1",
      "value": -30,
      "rawValue": -0.3,
      "isPercentual": false,
      "identifier": "6f7f6403-f49b-4e24-936e-bbdba265e959"
    }
  ],
  "availability": "available",
  "measurementUnit": "un",
  "unitMultiplier": 1,
  "manufacturerCode": null
}

type PriceTagsType = {
  "name": string;
  "value": number;
  "rawValue": number;
  "isPercentual": boolean;
  "identifier": string;
}
type ProductCategoriesType = {
  [key: string]: string;
}
type AditionalInfoType = {
  brandName: string;
  brandId: string;
  offeringInfo: null;
  offeringType: null;
  offeringTypeId: null
}

export type ProductType = {
  name: string;
  id: string;
  imageUrl: string;
  price: number;
  listPrice: number;
  sellingPrice: number;
  _id: string;
  uniqueId: string;
  productId: string;
  productRefId: null;
  refId: null;
  ean: string;
  skuName: string;
  modalType: null;
  parentItemIndex: null;
  parentAssemblyBinding: null;
  assemblies: Array<string>;
  priceValidUntil: string;
  tax: number;
  manualPrice: null;
  rewardValue: number;
  isGift: boolean;
  preSaleDate: null;
  productCategoryIds: string;
  quantity: number;
  seller: string;
  detailUrl: string;
  components: Array<string>;
  bundleItems: Array<string>;
  attachments: Array<string>;
  attachmentOfferings: Array<string>;
  offerings: Array<string>;
  availability: string;
  measurementUnit: string;
  unitMultiplier: number;
  manufacturerCode: null;
  additionalInfo: AditionalInfoType;
  productCategories: ProductCategoriesType;
  sellerChain: Array<string>;
  priceTags: PriceTagsType;
  quantityToBuy?: number;
};

