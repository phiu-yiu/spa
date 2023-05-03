import { proxy } from 'valtio'
import { Customer } from '~/type'

interface Store {
  customer?: Customer
}

export const customerStore = proxy<Store>({
  customer: undefined
})

export const useCustomerStoreActions = () => ({
  addCustomer: (customer: any) => (customerStore.customer = customer)
})
