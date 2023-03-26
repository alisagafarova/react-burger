import { FC } from 'react';
import { useSelector } from '../../services/hooks';
import OrderList from '../../components/OrderList/OrderList';

export const UserOrderPage: FC = () => {
  const { orders } = useSelector((store) => store.wsReducer);
  return orders && <OrderList orders={orders} isPageOrders={true} />;
};
