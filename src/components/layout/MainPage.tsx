// import styles from './MainPage.module.scss';
import Categories from '../Categories/Categories';
import ProductsSection from '../Market/ProductsSection';

const MainPage = ({ products }: { products: { id: string; itemCategory: string; itemImg: string; itemBrand: string; itemName: string; itemDescription: string; itemPrice: number }[] }) => {
  return (
    <main className="main">
      <Categories />
      <ProductsSection products={products} />
    </main>
  );
};

export default MainPage;