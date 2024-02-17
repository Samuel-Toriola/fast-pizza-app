import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalCartPrice, getTotalCartQuantity } from './cartSlice';
import { formatCurrency } from '../../utilities/helpers';

function CartOverview() {
 const totalCartQuantity =  useSelector(getTotalCartQuantity);
 const totalCartPrice = useSelector(getTotalCartPrice)

 if(!totalCartQuantity) return null
  return (
    <div className="text-stone-200 bg-stone-800 px-4 py-4 text-sm uppercase sm:px-6 md:text-base flex items-center justify-between">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart"> Open cart &rarr; </Link>
    </div>
  );
}

export default CartOverview;
