# ASCII-PROTOCOL

ASCII transmission protocol parser.

# Usage

## Example

### Import

```js
const ASCII = require("ascii-protocol");

// Continue usage...
```

### Heartbeat transmission

```js
const transmission = new ASCII("*HQ,135790246811220,HTBT#");
console.log(transmission.type); // HTBT (Heart beat)
console.log(transmission.supplier); // HQ
console.log(transmission.imei); // 135790246811220
```

### Login transmission

```js
const transmission = new ASCII("*HQ,135790246811220,V0#");
console.log(transmission.type); // LOGIN (Login)
console.log(transmission.supplier); // HQ
console.log(transmission.imei); // 135790246811220
```

### GPS transmission

```js
const transmission = new ASCII(
  "*HQ,865205030330012,V1,145452,A,2240.55181,N,11358.32389,E,0.00,0,100815,FFFFFBFF#"
);
console.log(transmission.type); // GPS (GPS)
console.log(transmission.supplier); // HQ
console.log(transmission.imei); // 865205030330012
console.log(transmission.data.time); // 145452
console.log(transmission.data.validity); // A
console.log(transmission.data.latitude); // 2240.55181
console.log(transmission.data.latitudeDirection); // N
console.log(transmission.data.longitude); // 11358.32389
console.log(transmission.data.longitudeDirection); // E
console.log(transmission.data.speed); // 0
console.log(transmission.data.direction); // 0
console.log(transmission.data.date); // 100815
console.log(transmission.data.general); // FFFFFBFF
```
