/* RXDB Collection Constants:
  change these everytime you change the col schema
  to avoid duplicate collection error.
*/

export const DB = {
  NAME: 'bpos',
  ADAPTER: 'websql'
}

export const ORDER_COL = {
  NAME: 'orders',
  SLUG: 'order'
}

export const ORDER_DETAIL_COL = {
  NAME: 'orderDetails',
  SLUG: 'orderDetail'
}

export const PRODUCT_COL = {
  NAME: 'products',
  SLUG: 'product'
}

export const PRODUCT_TYPE_COL = {
  NAME: 'productTypes',
  SLUG: 'productType'
}

export const PRODUCT_VARIATION_COL = {
  NAME: 'productVariations',
  SLUG: 'productVariation'
}

export const EMPLOYEE_COL = {
  NAME: 'employees',
  SLUG: 'employee'
}

export const CUSTOMER_COL = {
  NAME: 'customers',
  SLUG: 'customer'
}

export const PROFILE_COL = {
  NAME: 'profiles',
  SLUG: 'profile'
}
