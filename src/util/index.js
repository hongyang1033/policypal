export default class Util {
    static priceReduce (data) {
      const price = data.reduce((a, item) => {
        a[item.product_name] = item.product_cost || {}
        return a
      }, {})
      return price
    }

    static columnReduce(data) {
      const column = data.reduce((a, item) => {
        a.description = 'Description'
        a[item.product_name] = item.product_name || {}
        return a
      }, {})
      return column
    }

    static rowReduce(data) {
      const row = data.reduce((a, item) => {
        let obj = {
          description : item.detail_label
        }
        let newobj = Object.assign(obj, item.values);
        a.push(newobj)
        return a
      }, [])
      return row
    }

  }