import clsx from 'clsx';
import s from './Products.module.scss';

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../../../store/store';
import generateProductSlug from '../../../../helpers/generateProductSlug';

const Products = () => {
  const mockBrands = ['apple', 'samsung', 'xiaomi', 'realme', 'oppo', 'hewlett packard']; // These are intentionally hardcoded to display behaviour with the absent brands

  const productsState = useSelector((state: RootState) => state.dbProducts);
  const productsFromStore = productsState.products || [];

  const searchQuery = useSelector((state: RootState) => state.search.searchQuery);
  const searchInput = searchQuery.replace(/[^a-zA-Zа-яА-Я0-9\s]/g, '').trim();

  const [isTilesView, setIsTilesView] = useState(true);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [isAscending, setIsAscending] = useState(true);

  const toggleProductsView = () => setIsTilesView(!isTilesView);
  const togglePriceSort = () => setIsAscending(!isAscending);

  const handleBrandCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;

    if (checked) {
      setSelectedBrands(prevSelectedBrands => [...prevSelectedBrands, name]);
    } else {
      setSelectedBrands(prevSelectedBrands => prevSelectedBrands.filter(brand => brand !== name));
    }
  };

  // Filter products under searchInput condition
  const filteredProducts = productsFromStore
    .filter(product => {
      if (searchInput) {
        return product.itemBrand.toLowerCase().includes(searchInput.toLowerCase()) || product.itemName.toLowerCase().includes(searchInput.toLowerCase());
      }
      return true;
    })
    .filter(product => (selectedBrands.length > 0 ? selectedBrands.includes(product.itemBrand.toLowerCase()) : true))
    .sort((a, b) => (isAscending ? a.itemPrice - b.itemPrice : b.itemPrice - a.itemPrice));

  const productsList = filteredProducts.map(item => {
    const productSlug = generateProductSlug(item.itemBrand, item.itemName);
    return (
      <Link to={`/shop/product/${productSlug}`} className={s.Card} key={item.id}>
        <div>{item.itemImg}</div>
        <div>{item.itemName}</div>
        <div>{item.itemBrand}</div>
        <div>{item.itemDescription}</div>
        <div>{item.itemPrice}</div>
      </Link>
    );
  });

  const productsListElement = <div className={clsx(s.Products, isTilesView ? s.Tiles : s.Lines)}>{productsList}</div>;

  return (
    <section className={s.ProductsSection}>
      <div className="container">
        <div className={s.StoreControls}>
          <div className={s.PriceSort} onClick={togglePriceSort}>
            Price sort
          </div>
          <div className={s.ListTileToggler} onClick={toggleProductsView}>
            Toggle list/tile
          </div>
        </div>
        <aside className={s.FilterAndProducts}>
          <div className={s.Filter}>
            <div className={s.FilterTitle}>Filter</div>
            <form className={s.FilterForm} action="">
              {mockBrands.map(brand => (
                <div className={s.FilterSelect} key={brand}>
                  <input type="checkbox" name={brand} id={brand} onChange={handleBrandCheckboxChange} />
                  <label htmlFor={brand}>{brand.charAt(0).toUpperCase() + brand.slice(1)}</label>
                </div>
              ))}
            </form>
          </div>
          {productsListElement}
        </aside>
      </div>
    </section>
  );
};

export default Products;
