export interface IProduct {
  id: string;
  itemCategory: string;
  itemImg: string;
  itemBrand: string;
  itemName: string;
  itemDescription: string;
  itemPrice: number;
  itemQuantity: number;
  itemTotalPrice: number;
}

export const productsMockData: IProduct[] = [
  {
    id: 'item1',
    itemCategory: 'someCategory',
    itemImg: 'img',
    itemBrand: 'Apple',
    itemName: 'iPhone 16',
    itemDescription: 'Описание',
    itemPrice: 100,
    itemQuantity: 1,
    itemTotalPrice: 0,
  },
  {
    id: 'item2',
    itemCategory: 'someCategory',
    itemImg: 'img 2',
    itemBrand: 'Hewlett Packard',
    itemName: 'LJ 1020',
    itemDescription: 'Описание 2',
    itemPrice: 200,
    itemQuantity: 1,
    itemTotalPrice: 0,
  },
  {
    id: 'item3',
    itemCategory: 'someCategory',
    itemImg: 'img 3',
    itemBrand: 'Samsung',
    itemName: 'Galaxy M',
    itemDescription: 'Описание 3',
    itemPrice: 300,
    itemQuantity: 1,
    itemTotalPrice: 0,
  },
  {
    id: 'item4',
    itemCategory: 'someCategory',
    itemImg: 'img 4',
    itemBrand: 'Realme',
    itemName: 'GT 6',
    itemDescription: 'Описание 4',
    itemPrice: 400,
    itemQuantity: 1,
    itemTotalPrice: 0,
  },
];