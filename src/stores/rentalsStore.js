import { action, observable } from 'mobx';

class RentalsStore {
  @observable bikes = [
    {
      name: 'Surge',
      sizes: ['Medium', 'Large']
    }
  ]
}

const store = new RentalsStore()

export default store