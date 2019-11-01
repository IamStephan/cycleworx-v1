import { computed, observable } from 'mobx';

class ServiceStore {
  @observable services = [
    {
      title: 'Pro Clean and Lube',
      description: 'We wash you bike from top to bottom. After the bike has been washed we make sure your suspension and chain gets lubed for optimal performance.',
      featured: true
    },
    {
      title: 'Hard Tail Service',
      featured: true
    },
    {
      title: 'Dual Sus Service'
    },
    {
      title: 'Dual Sus Service (Pro)'
    },
    {
      title: 'Brake Bleed'
    },
    {
      title: 'Brake Service'
    },
    {
      title: 'Brake Setting'
    },
    {
      title: 'Gear Setting'
    },
    {
      title: 'Wheel Truing'
    },
    {
      title: 'Tube/Tyre Fit'
    },
    {
      title: 'Tube Sealant Fit'
    },
    {
      title: 'Tubeless Tyre Fit'
    },
    {
      title: 'Tubeless Top Up',
      featured: true
    },
    {
      title: 'Hub Service'
    },
    {
      title: 'Bottom Bracket Service'
    },
    {
      title: 'Headset Service'
    },
    {
      title: 'Bike Build/Strip'
    },
    {
      title: 'Minimum Labour'
    }
  ]

  @computed get featuredServices() {
    return this.services.filter(( {featured} ) => featured)
  }

  @computed get otherServices() {
    return this.services.filter(( {featured} ) => !featured)
  }
}

const store = new ServiceStore()

export default store