import styles from "./Main.module.scss";
import Categories from "../Categories/Categories";

const Main = () => {

    const toggleProductsView = () => {
        const productsList = document.querySelector('.products');
        productsList && (
          productsList.classList.toggle('products-tiles'),
          productsList.classList.toggle('products-lines')
          );
      };

      return (
        <main className={styles[`app-main`]}>
            <Categories />

            <section className="store">
            <div className="container">
                <div className="store__controls">
                <div className="price-sort">Price sort</div>
                <div className="list-tile-toggler" onClick={toggleProductsView}>Toggle list/tile</div>
                </div>
                <aside className="filter-and-products">
                <div className="filter">
                    <div className="filter__title">Filter</div>
                    <form action="" className="filter__form">
                    <div className="filter__select">
                        <input type="checkbox" name="apple" id="apple"  />
                        <a href="#">Apple</a>
                    </div>
                    <div className="filter__select">
                        <input type="checkbox" name="samsung" id="samsung"  />
                        <a href="#">Samsung</a>
                    </div>
                    <div className="filter__select">
                        <input type="checkbox" name="xiaomi" id="xiaomi"  />
                        <a href="#">Xiaomi</a>
                    </div>
                    <div className="filter__select">
                        <input type="checkbox" name="realme" id="realme"  />
                        <a href="#">Realme</a>
                    </div>
                    <div className="filter__select">
                        <input type="checkbox" name="oppo" id="oppo"  />
                        <a href="#">Oppo</a>
                    </div>
                    </form>
                </div>
                <div className="products products-tiles">
                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>
                </div>
                </aside>
            </div>
            </section>

        </main>
      )

}

export default Main;