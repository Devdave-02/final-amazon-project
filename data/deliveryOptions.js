 export const deliveryOptions = [{
  Id: '1',
  deliveryDays: 7,
  priceCents: 0
},{
  Id: '2',
  deliveryDays: 3,
  priceCents: 499
}, {
  Id: '1',
  deliveryDays: 1,
  priceCents: 999
}];

export function getDeliveryOption(deliveryOptionId) {
  let deliveryOption;

  deliveryOptions.forEach((option) => {
   if (option.Id === deliveryOptionId) {
     deliveryOption = option;
   }
  });

  return deliveryOption || deliveryOptions[0];
}