import styles from './Main.module.scss';
import Categories from '../Categories/Categories';
import ProductsSection from '../Store/ProductsSection';

const Main = ({ products }: { products: { id: string; itemCategoty: string; itemImg: string; itemBrand: string; itemName: string; itemDescription: string; itemPrice: number }[] }) => { // Описываем объект и сообщаем, что этот объект повторяется в массиве
  return (
    <main className={styles[`app-main`]}>
      <Categories />
      <ProductsSection products={products} />
    </main>
  );
};

export default Main;
