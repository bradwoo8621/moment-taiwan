#moment-taiwan
A Taiwan calendar system plugin for moment.js.

### Status
[![Build Status](https://travis-ci.org/bradwoo8621/moment-taiwan.svg?branch=master)](https://travis-ci.org/bradwoo8621/moment-taiwan)

#About

Taiwan calendar is a calendar which used in Taiwan, China. Read more on [Wikipedia](https://zh.wikipedia.org/wiki/%E6%B0%91%E5%9C%8B%E7%B4%80%E5%B9%B4) or see Calendar Converter.

This plugin adds Taiwan calendar support to momentjs library.

Calendar conversion as below,  
* Gregorian to Taiwan  
year < 1911 : year - 1912  
year > 1911 : year - 1911  
* Taiwan to Gregorian  
year >= 1 : year + 1911  
year == 0 : 1912  
year < 0 : year + 1912

#Where to use it

In Browser

You may use the target/moment-taiwan.js file.

```XML
<script src="moment.js"></script>
<script src="moment-taiwan.js"></script>
<script>
  moment().format('tYY/MM/DD');
</script>
```

Other

Not test yet.

#API

This plugin tries to mimic momentjs api. Basically, when you want to format or parse a string, use `tYY`. For example:

```javascript
m = moment('104/01/01', 'tYY/MM/DD') // Parse a Taiwan date
m.format('tYY/MM/DD [is] YYYY/M/D') // 104/01/01 is 2015/01/01

m.twYear() // 104
```

#License

MIT
