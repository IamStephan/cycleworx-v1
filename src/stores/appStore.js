import { action, observable } from 'mobx';

class AppStore {
  @observable sidebar = {
    isOpen: false
  }

  @observable modal = {
    isOpen: false,
    title: '',
    content: null
  }

  @action openSidebar () {
    this.sidebar.isOpen = true
  }

  @action closeSidebar () {
    this.sidebar.isOpen = false
  }

  @action OpenModal(title, content) {
    this.modal.isOpen = true
    this.modal.title = title
    this.modal.content = content
  }

  @action CloseModal() {
    this.modal.isOpen = false
    this.modal.content = null
  }
}

const store = new AppStore()

export default store