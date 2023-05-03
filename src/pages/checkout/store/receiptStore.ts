import { proxy } from 'valtio'

export interface Service {
  name: string
  qty: number
  price: number
}

interface Store {
  services: Service[]
  discount: number
  payment: number
}

export const receiptStore = proxy<Store>({
  services: [],
  discount: 0,
  payment: 0
})

export const useReceiptStoreActions = () => ({
  addDiscount: (discount: number) => (receiptStore.discount = discount),
  addService: (service: Service) => receiptStore.services.push(service),
  removeService: (index: number) => receiptStore.services.splice(index, 1),
  addPayment: (money: number) => (receiptStore.payment = money)
})
