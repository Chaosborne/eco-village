import s from './Cart.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { addItemToCart, removeItemFromCart } from '../../../store/slices/cartSlice';
import { Link } from 'react-router-dom';
import generateProductSlug from '../../../helpers/generateProductSlug';
import { clearCart } from '../../../store/slices/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);

  const cartItems = cart.items.map(item => {
    const productSlug = generateProductSlug(item.itemBrand, item.itemName);
    return (
      <div className={s.CartItems} key={item.id}>
        <Link className={s.ItemName} to={`/shop/product/${productSlug}`}>
          {item.itemName}
        </Link>
        <div className={s.ItemPrice}>{item.itemPrice}</div>
        <div className={s.ItemQuantity}>
          <div>{item.itemQuantity}</div>
          <button onClick={() => dispatch(removeItemFromCart(item.id))}>-</button>
          <button onClick={() => dispatch(addItemToCart(item))}>+</button>
        </div>
        <div className={s.CartSum}>{item.itemTotalPrice}</div>
      </div>
    );
  });

  const CartItemsElement = cartItems.length > 0 ? cartItems : <p className={s.CartEmptyMsg}>Корзина пуста</p>;

  const clearTheCart = () => dispatch(clearCart());

  return (
    <main className="main">
      <div className="container">
        <div className={s.CartTop}>
          <h1>Корзина</h1>
          <button onClick={clearTheCart}>Очистить корзину</button>
        </div>
        <div className={s.Cart}>
          {CartItemsElement}
          <div className={s.TotalPrice}>
            {cartItems.length > 0 && <p>Количество товаров: {cart.totalQuantity}</p>}
            {cartItems.length > 0 && <p>Общая сумма: {cart.totalPrice}</p>}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;
