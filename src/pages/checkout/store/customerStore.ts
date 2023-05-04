import { proxy } from 'valtio'
import { Customer } from '~/pages/customer/type'

interface Store {
  customer?: Customer
}

export const customerStore = proxy<Store>({
  customer: undefined
})

export const useCustomerStoreActions = () => ({
  addCustomer: (customer?: Customer) => (customerStore.customer = customer)
})
