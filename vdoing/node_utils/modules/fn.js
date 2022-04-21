exports.uuid = function (len, radix) {
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
  const uuid = []
  radix = radix || chars.length
  if (len) {
    for (let i = 0; i < len; i++) {
      uuid[i] = chars[0 | (Math.random() * radix)]
    }
  } else {
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-'
    uuid[14] = '4'
    for (let i = 0; i < 36; i++) {
      if (!uuid[i]) {
        const r = 0 | (Math.random() * 16)
        uuid[i] = chars[i === 19 ? (r & 0x3) | 0x8 : r]
      }
    }
  }
  return uuid.join('')
}

// 类型判断
exports.type = function (o) {
  var s = Object.prototype.toString.call(o)
  return s.match(/\[object (.*?)\]/)[1].toLowerCase()
}

// 修复date时区格式的问题
exports.repairDate = function (date) {
  date = new Date(date)
  return `${date.getUTCFullYear()}-${zero(date.getUTCMonth() + 1)}-${zero(date.getUTCDate())} ${zero(
    date.getUTCHours()
  )}:${zero(date.getUTCMinutes())}:${zero(date.getUTCSeconds())}`
}

// 日期的格式
exports.dateFormat = function (date) {
  return `${date.getFullYear()}-${zero(date.getMonth() + 1)}-${zero(date.getDate())} ${zero(date.getHours())}:${zero(
    date.getMinutes()
  )}:${zero(date.getSeconds())}`
}

// 小于10补0
function zero(d) {
  return d.toString().padStart(2, '0')
}
