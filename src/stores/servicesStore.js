import { computed, observable } from 'mobx';

class ServiceStore {
  @observable services = [
    {
      title: 'Full Service',
      slogan: 'Give your bike a fresh new look and feel.',
      featured: true
    },
    {
      title: 'Dual Sus Service',
      slogan: 'When your dual susension just needs that extra bit more.',
      featured: true
    },
    {
      title: 'Pro Clean and Lube',
      slogan: 'Let your bike look like it\'s brand new.',
      featured: true
    },
  ]

  @computed get featuredServices() {
    return this.services.filter(( {featured} ) => featured)
  }
}

const store = new ServiceStore()

export default store