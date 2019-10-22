import { action, observable } from 'mobx';

class AppStore {
  @observable sidebar = {
    isOpen: false
  }

  @action openSidebar () {
    this.sidebar.isOpen = true
    console.log(this.sidebar.isOpen)
  }

  @action closeSidebar () {
    this.sidebar.isOpen = false
  }
}

const store = new AppStore()

export default store