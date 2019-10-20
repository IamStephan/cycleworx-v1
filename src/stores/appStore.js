import { action } from 'mobx';

class AppStore {
  @action logToConsole () {
    alert('sedrtfygbuhnj')
  }
}

const store = new AppStore()

export default store